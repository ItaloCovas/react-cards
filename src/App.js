import './App.css';
import Card from './components/Card';
import bread from './assets/images/homemade-bread.jpg';
import macNCheese from './assets/images/mac-n-cheese.jpeg';
import mexicanCornSalad from './assets/images/mexican-corn-salad.jpg';
import pizza from './assets/images/pizza.jpeg';
import polenta from './assets/images/polenta.jpg';
import quesadilla from './assets/images/quesadilla.jpg';
import roastChicken from './assets/images/roast-chicken.jpg';
import samosa from './assets/images/samosa.jpeg';
import sloppyJoe from './assets/images/sloppy-joe.jpg';

function App() {
  return (
    <div className="App">
      <Card
       image={bread} 
       alt="Homemade bread" 
       title="Homemade bread" 
       description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum voluptatem quidem earum id harum vero ad hic"
       classNameProp="filled-button"
       />
       <Card
       image={macNCheese} 
       alt="Mac n' cheese" 
       title="Mac n' cheese" 
       description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum voluptatem quidem earum id harum vero ad hic"
       classNameProp="button"
       />
       <Card
       image={mexicanCornSalad} 
       alt="Mexican corn salad" 
       title="Mexican corn salad" 
       description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum voluptatem quidem earum id harum vero ad hic"
       classNameProp="filled-button"
       />
       <Card
       image={pizza} 
       alt="Pizza" 
       title="Pizza" 
       description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum voluptatem quidem earum id harum vero ad hic"
       classNameProp="button"
       />
       <Card
       image={polenta} 
       alt="Polenta" 
       title="Polenta" 
       description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum voluptatem quidem earum id harum vero ad hic"
       classNameProp="filled-button"
       />
       <Card
       image={quesadilla} 
       alt="Quesadilla" 
       title="Quesadilla" 
       description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum voluptatem quidem earum id harum vero ad hic"
       classNameProp="button"
       />
       <Card
       image={roastChicken} 
       alt="Roasted chicken" 
       title="Roasted chicken" 
       description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum voluptatem quidem earum id harum vero ad hic"
       classNameProp="filled-button"
       />
       <Card
       image={samosa} 
       alt="Samosa" 
       title="Samosa" 
       description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum voluptatem quidem earum id harum vero ad hic"
       classNameProp="button"
       />
       <Card
       image={sloppyJoe} 
       alt="Sloppy Joe" 
       title="Sloppy Joe" 
       description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum voluptatem quidem earum id harum vero ad hic"
       classNameProp="filled-button"
       />
    </div>
  );
}

export default App;
