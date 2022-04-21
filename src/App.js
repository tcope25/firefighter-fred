import logo from './firefighter-fred-cover.jpg'; 
import './App.css';

function App() {
  document.title = "Firefighter Fred's First Day by Trey Copeland";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Firefighter Fred's First Day Book Cover" />
        <h1>Firefighter Fred's First Day</h1>
        <p className="App-small">Follow along with Fred as we go into the daily life of a firefighter - from maintaining fire hoses and equipment to fighting fires.</p>
        <p className="App-small">Firefighter Fred spends his day getting ready to fight any fire that comes his way. It's his first day and he's very nervous. What happens when that alarm bell rings for the first time?</p>
      </header>
    </div>
  );
}

export default App;
