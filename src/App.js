import './App.css';
import Clock from './Clock';

function App() {
  return (
    <div className="App">
      <Title />
      <Clock />
      <Menu>
        <Item name="Play"/>
        <Item name="Episodes"/>
        <Item name="Difficulty"/>
        <Item name="Settings"/>
        <Item name="Quit"/>
      </Menu>
    </div>
  );
}

function Title() {
  return (
    <h1>
      <span className='letter'>T</span>
      <span className='letter'>i</span>
      <span className='letter'>m</span>
      <span className='letter'>e &nbsp;</span>
      <span className='letter'>i</span>
      <span className='letter'>s &nbsp;</span>
      <span className='letter'>G</span>
      <span className='letter'>o</span>
      <span className='letter'>i</span>
      <span className='letter'>n</span>
      <span className='letter'>g &nbsp;</span>
      <span className='letter'>O</span>
      <span className='letter'>n</span>
    </h1>
  );
}

function Menu({children}) {
  return (
    <ul>
      {children}
    </ul>
  )
}

function Item({name}) {
  return (
    <li className='menu-items'>{name}</li>
  )
}

export default App;
