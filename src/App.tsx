import React from 'react';
import { useTranslation } from 'react-i18next';


function App() {
  const {t, i18n} = useTranslation('common');
  
  return (
    <div className="App">
   hello
   <h1>{t('welcome.title')}</h1>

    </div>
  );
}

export default App;
