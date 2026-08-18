import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, FileText, RefreshCw, CheckCircle2, ShieldAlert, Cpu } from 'lucide-react';
import { recordLabCompletion } from '../../lib/progress';

type BoardState = (string | null)[];

interface RuleTriggered {
  ruleNumber: number;
  name: string;
  description: string;
  targetIndex: number;
}

const RULES_LIST = [
  { id: 1, title: 'Win Move', desc: 'If the AI has two in a row, place third to win.' },
  { id: 2, title: 'Block Human Win', desc: 'If the human has two in a row, block their winning move immediately.' },
  { id: 3, title: 'Take Center', desc: 'If the center square (position 5) is open, claim it.' },
  { id: 4, title: 'Opposite Corner', desc: 'If opponent is in a corner, take the diagonally opposite corner.' },
  { id: 5, title: 'Empty Corner', desc: 'Take any available corner (1, 3, 7, 9).' },
  { id: 6, title: 'Empty Side', desc: 'Take any remaining side square (2, 4, 6, 8).' },
];

const WIN_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function IntelligentPaper() {
  const navigate = useNavigate();
  const [board, setBoard] = useState<BoardState>(Array(9).fill(null));
  const [humanTurn, setHumanTurn] = useState<boolean>(true);
  const [winner, setWinner] = useState<string | null>(null);
  const [winningLine, setWinningLine] = useState<number[] | null>(null);
  const [lastRule, setLastRule] = useState<RuleTriggered | null>(null);
  const [moveHistory, setMoveHistory] = useState<string[]>([]);

  const checkWinner = (squares: BoardState): { winner: string | null; line: number[] | null } => {
    for (const [a, b, c] of WIN_LINES) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line: [a, b, c] };
      }
    }
    if (squares.every((sq) => sq !== null)) {
      return { winner: 'Draw', line: null };
    }
    return { winner: null, line: null };
  };

  // Run the "Intelligent Piece of Paper" algorithmic rules
  const computePaperMove = (currentBoard: BoardState): { move: number; rule: RuleTriggered } => {
    // Rule 1: Win if two in a row
    for (const [a, b, c] of WIN_LINES) {
      const line = [currentBoard[a], currentBoard[b], currentBoard[c]];
      if (line.filter((x) => x === 'O').length === 2 && line.includes(null)) {
        const target = [a, b, c][line.indexOf(null)];
        return {
          move: target,
          rule: {
            ruleNumber: 1,
            name: 'Rule 1: Immediate Win',
            description: `Found two 'O's on line [${a + 1}, ${b + 1}, ${c + 1}]. Placed at square ${target + 1} to claim victory.`,
            targetIndex: target,
          },
        };
      }
    }

    // Rule 2: Block Human Win
    for (const [a, b, c] of WIN_LINES) {
      const line = [currentBoard[a], currentBoard[b], currentBoard[c]];
      if (line.filter((x) => x === 'X').length === 2 && line.includes(null)) {
        const target = [a, b, c][line.indexOf(null)];
        return {
          move: target,
          rule: {
            ruleNumber: 2,
            name: 'Rule 2: Block Threat',
            description: `Human has two 'X's on line [${a + 1}, ${b + 1}, ${c + 1}]. Intercepted by placing 'O' at square ${target + 1}.`,
            targetIndex: target,
          },
        };
      }
    }

    // Rule 3: Take Center
    if (currentBoard[4] === null) {
      return {
        move: 4,
        rule: {
          ruleNumber: 3,
          name: 'Rule 3: Occupy Center',
          description: 'Center square (position 5) provides maximum diagonal and linear branching. Claimed.',
          targetIndex: 4,
        },
      };
    }

    // Rule 4: Opposite Corner
    const corners = [
      { c: 0, opp: 8 },
      { c: 2, opp: 6 },
      { c: 8, opp: 0 },
      { c: 6, opp: 2 },
    ];
    for (const { c, opp } of corners) {
      if (currentBoard[c] === 'X' && currentBoard[opp] === null) {
        return {
          move: opp,
          rule: {
            ruleNumber: 4,
            name: 'Rule 4: Opposite Corner Counter',
            description: `Human occupies corner ${c + 1}. Claimed diagonally opposite corner ${opp + 1}.`,
            targetIndex: opp,
          },
        };
      }
    }

    // Rule 5: Any Empty Corner
    const emptyCorners = [0, 2, 6, 8].filter((idx) => currentBoard[idx] === null);
    if (emptyCorners.length > 0) {
      const target = emptyCorners[0];
      return {
        move: target,
        rule: {
          ruleNumber: 5,
          name: 'Rule 5: Corner Foothold',
          description: `Claimed empty corner square ${target + 1}.`,
          targetIndex: target,
        },
      };
    }

    // Rule 6: Any Empty Side
    const emptySides = [1, 3, 5, 7].filter((idx) => currentBoard[idx] === null);
    if (emptySides.length > 0) {
      const target = emptySides[0];
      return {
        move: target,
        rule: {
          ruleNumber: 6,
          name: 'Rule 6: Side Fallback',
          description: `No corners open. Took remaining side square ${target + 1}.`,
          targetIndex: target,
        },
      };
    }

    // Fallback first open
    const firstOpen = currentBoard.findIndex((x) => x === null);
    return {
      move: firstOpen,
      rule: {
        ruleNumber: 6,
        name: 'Rule 6: Fallback',
        description: `Placed at ${firstOpen + 1}.`,
        targetIndex: firstOpen,
      },
    };
  };

  const handleCellClick = (idx: number) => {
    if (board[idx] || winner || !humanTurn) return;

    // 1. Human Move
    const updatedBoard = [...board];
    updatedBoard[idx] = 'X';
    setBoard(updatedBoard);
    setMoveHistory((prev) => [...prev, `Human placed X at cell ${idx + 1}`]);

    const resultAfterHuman = checkWinner(updatedBoard);
    if (resultAfterHuman.winner) {
      setWinner(resultAfterHuman.winner);
      setWinningLine(resultAfterHuman.line);
      recordLabCompletion('lab-intelligent-paper');
      return;
    }

    // 2. Paper Algorithm Turn
    setHumanTurn(false);
    setTimeout(() => {
      const { move, rule } = computePaperMove(updatedBoard);
      if (move !== -1) {
        updatedBoard[move] = 'O';
        setBoard([...updatedBoard]);
        setLastRule(rule);
        setMoveHistory((prev) => [...prev, `Paper executed ${rule.name} -> Cell ${move + 1}`]);

        const resultAfterAI = checkWinner(updatedBoard);
        if (resultAfterAI.winner) {
          setWinner(resultAfterAI.winner);
          setWinningLine(resultAfterAI.line);
          recordLabCompletion('lab-intelligent-paper');
        }
      }
      setHumanTurn(true);
    }, 450);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setHumanTurn(true);
    setWinner(null);
    setWinningLine(null);
    setLastRule(null);
    setMoveHistory([]);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F0F2F5] pb-24">
      {/* Top Header */}
      <header className="bg-white border-b-2 border-[#E2E8F0] p-4 sticky top-0 z-20 flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 text-gray-500 hover:text-[#2D3E50] rounded-lg focus-visible:ring-2 focus-visible:ring-[#2D3E50]"
          aria-label="Go back"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="text-center">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#E67E22] block">Unplugged Lab</span>
          <h1 className="text-sm font-bold text-[#2D3E50]">Intelligent Piece of Paper</h1>
        </div>
        <button
          onClick={handleReset}
          className="p-2 text-gray-500 hover:text-[#2D3E50] rounded-lg"
          title="Restart Game"
        >
          <RefreshCw className="w-5 h-5" />
        </button>
      </header>

      <main className="p-4 sm:p-6 flex flex-col gap-4 w-full max-w-2xl mx-auto">
        {/* Concept Card */}
        <div className="bg-[#2D3E50] text-white p-4 rounded-2xl flex items-start gap-3 shadow-sm">
          <FileText className="w-6 h-6 text-[#E67E22] shrink-0 mt-0.5" />
          <div className="text-xs">
            <h2 className="font-bold text-sm text-white mb-1">What Is the "Intelligent Paper"?</h2>
            <p className="text-gray-300 leading-relaxed">
              In classic CS unplugged education, a slip of paper with 6 written if-then rules can play unbeatable Noughts & Crosses. It proves that algorithms create intelligent outcomes without any thinking or consciousness!
            </p>
          </div>
        </div>

        {/* Game Layout */}
        <div className="flex flex-col md:flex-row gap-4 w-full">
          {/* Game Board Column */}
          <div className="bg-white p-5 rounded-2xl border-2 border-[#E2E8F0] flex flex-col items-center justify-center flex-1">
            <div className="flex items-center justify-between w-full mb-4">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                <span className="text-xs font-bold text-[#1A202C]">You (X)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#E67E22]"></span>
                <span className="text-xs font-bold text-[#1A202C]">Paper AI (O)</span>
              </div>
            </div>

            {/* 3x3 Grid */}
            <div className="grid grid-cols-3 gap-2.5 w-64 h-64 bg-[#E2E8F0] p-2.5 rounded-2xl">
              {board.map((cell, idx) => {
                const isWinningCell = winningLine?.includes(idx);
                return (
                  <button
                    key={idx}
                    onClick={() => handleCellClick(idx)}
                    disabled={!!cell || !!winner || !humanTurn}
                    className={`rounded-xl flex items-center justify-center text-3xl font-black transition-all ${
                      cell === 'X'
                        ? isWinningCell
                          ? 'bg-blue-600 text-white'
                          : 'bg-blue-50 text-blue-700'
                        : cell === 'O'
                        ? isWinningCell
                          ? 'bg-[#E67E22] text-white'
                          : 'bg-orange-50 text-[#E67E22]'
                        : 'bg-white hover:bg-gray-50 text-transparent cursor-pointer'
                    }`}
                  >
                    {cell}
                  </button>
                );
              })}
            </div>

            {/* Status Bar */}
            <div className="mt-4 text-center">
              {winner ? (
                <div className="text-sm font-bold text-[#2D3E50] flex items-center gap-2 justify-center">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  {winner === 'Draw' ? "Game Ended in a Draw!" : `${winner === 'X' ? 'You' : 'The Paper AI'} Won!`}
                </div>
              ) : (
                <div className="text-xs font-bold text-gray-500">
                  {humanTurn ? "Your turn (Place X)" : "Paper AI evaluating rules..."}
                </div>
              )}
            </div>
          </div>

          {/* Rule Inspector Card */}
          <div className="bg-white p-5 rounded-2xl border-2 border-[#E2E8F0] flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Cpu className="w-4 h-4 text-[#E67E22]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#2D3E50]">
                  Algorithm Rule Trigger
                </h3>
              </div>

              {lastRule ? (
                <div className="bg-orange-50 border-2 border-[#E67E22]/30 p-3.5 rounded-xl mb-4 animate-fadeIn">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-[#E67E22]">{lastRule.name}</span>
                    <span className="text-[10px] bg-[#E67E22] text-white font-bold px-2 py-0.5 rounded">
                      Cell {lastRule.targetIndex + 1}
                    </span>
                  </div>
                  <p className="text-xs text-[#2D3E50] leading-relaxed">{lastRule.description}</p>
                </div>
              ) : (
                <div className="bg-[#F8F9FA] border-2 border-dashed border-[#E2E8F0] p-4 rounded-xl text-center text-xs text-gray-400 mb-4">
                  Make a move to see which deterministic rule the Paper executes.
                </div>
              )}

              <div className="text-[11px] font-bold text-gray-500 mb-2">Paper Rule Priority List:</div>
              <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                {RULES_LIST.map((r) => (
                  <div
                    key={r.id}
                    className={`p-2 rounded-lg text-xs flex items-center gap-2 border ${
                      lastRule?.ruleNumber === r.id
                        ? 'bg-[#2D3E50] text-white border-[#2D3E50] font-bold'
                        : 'bg-gray-50 border-gray-100 text-gray-600'
                    }`}
                  >
                    <span className={`w-5 h-5 rounded flex items-center justify-center text-[10px] shrink-0 ${
                      lastRule?.ruleNumber === r.id ? 'bg-[#E67E22] text-white' : 'bg-gray-200 text-gray-700'
                    }`}>
                      {r.id}
                    </span>
                    <div className="truncate">
                      <span className="font-bold mr-1">{r.title}:</span>
                      <span className="opacity-80">{r.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleReset}
              className="mt-4 w-full bg-[#2D3E50] text-white text-xs font-bold py-2.5 rounded-xl hover:bg-slate-700 transition-colors"
            >
              Restart Round
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
