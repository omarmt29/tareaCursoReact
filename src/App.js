import './App.css';
import Card from './card';
import ervigio from './img/rey_ervigio.png'
import teodorico from './img/rey_teodorico.png'
import sisebuto from './img/rey_sisebuto.png'



function App() {

  
  return (
    <div className="App">
      <Card name= "ervigio" img={ervigio}/>
      <Card name= "teodorico" img={teodorico}/>
      <Card name= "sisebuto" img={sisebuto}/>
    </div>
  );
}

export default App;
