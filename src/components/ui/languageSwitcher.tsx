import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    // Store the selected language in localStorage
    localStorage.setItem('i18nextLng', lng);
  };

  const languages = [
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ];

  // Get current language or default to German
  const currentLanguage = i18n.language || 'de';
  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-emerald-600 transition-colors">
        <FaGlobe className="h-4 w-4" />
        <span className="text-sm font-medium">
          {currentLang.flag}
        </span>
      </button>
      
      <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-emerald-50 transition-colors first:rounded-t-lg last:rounded-b-lg flex items-center space-x-2 ${
              currentLanguage === language.code ? 'bg-emerald-100 text-emerald-700' : 'text-gray-700'
            }`}
          >
            <span>{language.flag}</span>
            <span>{language.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
