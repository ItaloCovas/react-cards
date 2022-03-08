import './App.css';
import Card from './components/Card';
import bread from './assets/images/homemade-bread.jpg';

function App() {
  return (
    <div className="App">
      <Card
       image={bread} 
       alt="Homemade bread" 
       title="Homemade bread" 
       description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum voluptatem quidem earum id harum vero ad hic"/> 
    </div>
  );
}

export default App;
