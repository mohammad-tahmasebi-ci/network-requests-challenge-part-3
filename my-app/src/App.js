import css from './App.module.css';
import Sidebar from "./components/Sidebar";
import ContentAPIHooks from './components/ContentAPIHooks';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <Sidebar />
      <ContentAPIHooks />
    </div>
  );
}

export default App;
