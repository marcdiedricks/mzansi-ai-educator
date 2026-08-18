import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Book, Globe, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { TERMINOLOGY_DATA, MultilingualTerm } from '../lib/terminology';

export function Glossary() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<'english' | 'isizulu' | 'sesotho' | 'afrikaans'>('english');
  const [expandedTermId, setExpandedTermId] = useState<string | null>('algorithm');

  const filteredTerms = TERMINOLOGY_DATA.filter((item) => {
    const query = searchTerm.toLowerCase();
    return (
      item.term.toLowerCase().includes(query) ||
      item.english.definition.toLowerCase().includes(query) ||
      item.isizulu.term.toLowerCase().includes(query) ||
      item.sesotho.term.toLowerCase().includes(query) ||
      item.afrikaans.term.toLowerCase().includes(query)
    );
  });

  const languageLabels = [
    { key: 'english', label: 'English' },
    { key: 'isizulu', label: 'isiZulu' },
    { key: 'sesotho', label: 'Sesotho' },
    { key: 'afrikaans', label: 'Afrikaans' },
  ] as const;

  return (
    <div className="p-4 sm:p-6 space-y-4 pb-24">
      {/* Header */}
      <header>
        <div className="flex items-center gap-2 text-[#E67E22] mb-1">
          <Book className="w-5 h-5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Multilingual AI Dictionary</span>
        </div>
        <h1 className="text-2xl font-bold text-[#2D3E50] mb-1">AI Terminology</h1>
        <p className="text-xs font-medium text-gray-500">
          Explore essential artificial intelligence definitions across 4 South African languages.
        </p>
      </header>

      {/* Search Input */}
      <div className="relative w-full">
        <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search AI terms (e.g. Algorithm, Bias, POPIA)..."
          className="w-full bg-white border-2 border-[#E2E8F0] focus:border-[#2D3E50] rounded-xl pl-10 pr-4 py-2.5 text-xs font-medium text-[#1A202C] placeholder-gray-400 focus:outline-none transition-colors"
        />
      </div>

      {/* Language Selector Chips */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 w-full">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mr-1 shrink-0 flex items-center gap-1">
          <Globe className="w-3 h-3" /> Lang:
        </span>
        {languageLabels.map((lang) => (
          <button
            key={lang.key}
            onClick={() => setSelectedLanguage(lang.key)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold shrink-0 transition-all border ${
              selectedLanguage === lang.key
                ? 'bg-[#2D3E50] text-white border-[#2D3E50]'
                : 'bg-white text-gray-600 border-[#E2E8F0] hover:border-gray-300'
            }`}
          >
            {lang.label}
          </button>
        ))}
      </div>

      {/* Terms List */}
      <div className="flex flex-col gap-3 w-full">
        {filteredTerms.map((termItem) => {
          const isExpanded = expandedTermId === termItem.id;
          const currentLangData = termItem[selectedLanguage];

          return (
            <div
              key={termItem.id}
              className="bg-white border-2 border-[#E2E8F0] rounded-2xl overflow-hidden transition-all"
            >
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
                  <h3 className="font-bold text-[#1A202C] text-sm sm:text-base">
                    {termItem.term}
                  </h3>
                  {selectedLanguage !== 'english' && (
                    <p className="text-xs font-bold text-[#2D3E50] mt-0.5">
                      {currentLangData.term}
                    </p>
                  )}
                </div>
                <div className="text-gray-400">
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>

              {isExpanded && (
                <div className="px-4 pb-4 pt-2 border-t-2 border-[#E2E8F0] space-y-3 bg-[#F8F9FA]/50">
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                      Definition ({languageLabels.find((l) => l.key === selectedLanguage)?.label})
                    </h4>
                    <p className="text-xs font-medium text-[#1A202C] leading-relaxed">
                      {currentLangData.definition}
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-[#E2E8F0]">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#E67E22] mb-1">
                      <Sparkles className="w-3.5 h-3.5" /> Everyday Context
                    </div>
                    <p className="text-xs text-gray-600 italic">
                      "{currentLangData.example}"
                    </p>
                  </div>

                  {/* All Languages Comparison Accordion */}
                  <div className="pt-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1.5">
                      Translations in Other Mzansi Languages:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      {selectedLanguage !== 'english' && (
                        <div className="bg-white p-2 rounded-lg border border-gray-200">
                          <span className="text-[10px] font-bold text-gray-400 block">English</span>
                          <span className="font-bold text-gray-800">{termItem.term}</span>
                        </div>
                      )}
                      {selectedLanguage !== 'isizulu' && (
                        <div className="bg-white p-2 rounded-lg border border-gray-200">
                          <span className="text-[10px] font-bold text-gray-400 block">isiZulu</span>
                          <span className="font-bold text-gray-800">{termItem.isizulu.term}</span>
                        </div>
                      )}
                      {selectedLanguage !== 'sesotho' && (
                        <div className="bg-white p-2 rounded-lg border border-gray-200">
                          <span className="text-[10px] font-bold text-gray-400 block">Sesotho</span>
                          <span className="font-bold text-gray-800">{termItem.sesotho.term}</span>
                        </div>
                      )}
                      {selectedLanguage !== 'afrikaans' && (
                        <div className="bg-white p-2 rounded-lg border border-gray-200">
                          <span className="text-[10px] font-bold text-gray-400 block">Afrikaans</span>
                          <span className="font-bold text-gray-800">{termItem.afrikaans.term}</span>
                        </div>
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
