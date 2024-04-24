import { useTranslation } from 'react-i18next';
import './App.css'
import "./i18n.js"
import Languageselector from './components/languageselector.jsx';

function App() {
    const {t}=useTranslation()
  return (
    <div className='container'>
      <Languageselector/>
   <h1>{t("greeting")}</h1>
   </div>
  )
}

export default App;
