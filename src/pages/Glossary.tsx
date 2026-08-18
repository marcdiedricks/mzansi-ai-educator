import { useState } from 'react';
import { Search, Book, Globe, ChevronDown, ChevronUp, Sparkles, ShieldCheck } from 'lucide-react';
import { TERMINOLOGY_DATA } from '../lib/terminology';

type GlossaryLanguage = 'english' | 'afrikaans' | 'isixhosa' | 'isizulu' | 'sesotho';

const languageLabels: Array<{ key: GlossaryLanguage; label: string; priority?: boolean }> = [
  { key: 'english', label: 'English', priority: true },
  { key: 'afrikaans', label: 'Afrikaans', priority: true },
  { key: 'isixhosa', label: 'isiXhosa', priority: true },
  { key: 'isizulu', label: 'isiZulu' },
  { key: 'sesotho', label: 'Sesotho' },
];

export function Glossary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<GlossaryLanguage>('english');
  const [expandedTermId, setExpandedTermId] = useState<string | null>('algorithm');

  const filteredTerms = TERMINOLOGY_DATA.filter((item) => {
    const query = searchTerm.toLowerCase();
    return (
      item.term.toLowerCase().includes(query) ||
      item.english.definition.toLowerCase().includes(query) ||
      item.afrikaans.term.toLowerCase().includes(query) ||
      item.isizulu.term.toLowerCase().includes(query) ||
      item.sesotho.term.toLowerCase().includes(query)
    );
  });

  const selectedLabel = languageLabels.find((item) => item.key === selectedLanguage)?.label || 'English';

  return (
    <div className="p-4 sm:p-6 space-y-4 pb-24">
      <header>
        <div className="flex items-center gap-2 text-[#E67E22] mb-1">
          <Book className="w-5 h-5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Multilingual AI Dictionary</span>
        </div>
        <h1 className="text-2xl font-bold text-[#2D3E50] mb-1">AI Terminology</h1>
        <p className="text-xs font-medium text-gray-500">
          Keep the correct AI term. Learn its plain meaning and connect it to South African life.
        </p>
      </header>

      <div className="relative w-full">
        <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search AI terms (e.g. Algorithm, Bias, POPIA)..."
          className="w-full bg-white border-2 border-[#E2E8F0] focus:border-[#2D3E50] rounded-xl pl-10 pr-4 py-2.5 text-xs font-medium text-[#1A202C] placeholder-gray-400 focus:outline-none transition-colors"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 w-full">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mr-1 shrink-0 flex items-center gap-1">
            <Globe className="w-3 h-3" /> Lang:
          </span>
          {languageLabels.map((language) => (
            <button
              key={language.key}
              onClick={() => setSelectedLanguage(language.key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold shrink-0 transition-all border ${
                selectedLanguage === language.key
                  ? 'bg-[#2D3E50] text-white border-[#2D3E50]'
                  : language.priority
                    ? 'bg-orange-50 text-[#2D3E50] border-orange-200'
                    : 'bg-white text-gray-600 border-[#E2E8F0]'
              }`}
            >
              {language.label}
            </button>
          ))}
        </div>
        <p className="text-[10px] text-gray-500">
          Cape Town priority: English, Afrikaans and isiXhosa. isiZulu and Sesotho remain available as additional glossary languages.
        </p>
      </div>

      {selectedLanguage === 'isixhosa' && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex gap-2.5">
          <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-bold text-amber-900">isiXhosa terminology review in progress</p>
            <p className="text-[11px] text-amber-800 mt-0.5 leading-relaxed">
              We will keep the official AI term visible and will only publish isiXhosa explanations after language review. No invented translations are shown.
            </p>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-3 w-full">
        {filteredTerms.map((termItem) => {
          const isExpanded = expandedTermId === termItem.id;
          const currentLangData = selectedLanguage === 'isixhosa' ? null : termItem[selectedLanguage];

          return (
            <div key={termItem.id} className="bg-white border-2 border-[#E2E8F0] rounded-2xl overflow-hidden transition-all">
              <button
                onClick={() => setExpandedTermId(isExpanded ? null : termItem.id)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-[#F8F9FA] transition-colors focus:outline-none"
              >
                <div className="flex-1 min-w-0 pr-2">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[9px] font-bold uppercase tracking-wider bg-orange-50 text-[#E67E22] px-2 py-0.5 rounded border border-orange-200">
                      {termItem.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#1A202C] text-sm sm:text-base">{termItem.term}</h3>
                  {selectedLanguage !== 'english' && currentLangData && (
                    <p className="text-xs font-bold text-[#2D3E50] mt-0.5">{currentLangData.term}</p>
                  )}
                  {selectedLanguage === 'isixhosa' && (
                    <p className="text-[11px] font-medium text-amber-700 mt-0.5">isiXhosa explanation under review</p>
                  )}
                </div>
                <div className="text-gray-400">
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>

              {isExpanded && (
                <div className="px-4 pb-4 pt-2 border-t-2 border-[#E2E8F0] space-y-3 bg-[#F8F9FA]/50">
                  {currentLangData ? (
                    <>
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Definition ({selectedLabel})</h4>
                        <p className="text-xs font-medium text-[#1A202C] leading-relaxed">{currentLangData.definition}</p>
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-[#E2E8F0]">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#E67E22] mb-1">
                          <Sparkles className="w-3.5 h-3.5" /> Everyday Context
                        </div>
                        <p className="text-xs text-gray-600 italic">“{currentLangData.example}”</p>
                      </div>
                    </>
                  ) : (
                    <div className="bg-white p-3 rounded-xl border border-amber-200">
                      <p className="text-xs font-bold text-[#2D3E50]">{termItem.term}</p>
                      <p className="text-xs text-gray-600 mt-1">The isiXhosa definition and local example are awaiting human language review before publication.</p>
                    </div>
                  )}

                  <div className="pt-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1.5">Other available Mzansi languages:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {selectedLanguage !== 'english' && (
                        <div className="bg-white p-2 rounded-lg border border-gray-200"><span className="text-[10px] font-bold text-gray-400 block">English</span><span className="font-bold text-gray-800">{termItem.term}</span></div>
                      )}
                      {selectedLanguage !== 'afrikaans' && (
                        <div className="bg-white p-2 rounded-lg border border-gray-200"><span className="text-[10px] font-bold text-gray-400 block">Afrikaans</span><span className="font-bold text-gray-800">{termItem.afrikaans.term}</span></div>
                      )}
                      {selectedLanguage !== 'isizulu' && (
                        <div className="bg-white p-2 rounded-lg border border-gray-200"><span className="text-[10px] font-bold text-gray-400 block">isiZulu</span><span className="font-bold text-gray-800">{termItem.isizulu.term}</span></div>
                      )}
                      {selectedLanguage !== 'sesotho' && (
                        <div className="bg-white p-2 rounded-lg border border-gray-200"><span className="text-[10px] font-bold text-gray-400 block">Sesotho</span><span className="font-bold text-gray-800">{termItem.sesotho.term}</span></div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
