import './App.css';
// HeaderコンポーネントとSkillコンポーネントをimportする
import { Header } from './components/Header';
import { Skills } from './components/Skills';
import { Contact, contact} from './components/Contact';
function App() {
  return (
    <>
    <Header /> 
    <Skills /> 
    <Contact />
    </>
  );
}

export default App;
