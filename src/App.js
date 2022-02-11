import './App.css';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  return (
    <div className="App">
      <HelloWord/>
      <SayMyName nome="Maria"/>
      <Pessoa nome="João" idade="21" prof="Analista de Sistemas" foto="https://engenharia360.com/wp-content/uploads/2019/05/esta-pessoa-nao-existe-engenharia360-4.png" />

    </div>
  );
}

export default App;
