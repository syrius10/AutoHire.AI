import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

const value = useMemo(() => ({ language, setLanguage }), [language, setLanguage]);

return (
  <LanguageContext.Provider value={value}>
    {children}
  </LanguageContext.Provider>
);
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
