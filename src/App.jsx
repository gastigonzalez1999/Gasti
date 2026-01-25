import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Global.css';
import './App.css';

import NavBar from './components/NavBar';
import Intro from './components/Intro';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Credits from './components/Credits';

function App() {
  return (
    <div className="App">
      <NavBar />

      <div id="content">
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Credits />
      </div>
    </div>
  );
}

export default App;
