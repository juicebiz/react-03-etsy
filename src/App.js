import './App.css';
import Listing from './Components/Listing/Listing.js'
import json from './etsy.json';

const items = JSON.parse(JSON.stringify(json)).filter(item => item.state === 'active')

items.forEach(el => {
  if(el.currency_code === 'USD'){
    el.price_item = '$'+el.price
  }  
  else if (el.currency_code === 'EUR'){
    el.price_item = '€'+el.price
  }
  else {
    el.price_item = el.price + ' ' + el.currency_code
  }  
  let class_quantity
  if(el.quantity <= 10) {
    class_quantity = 'low'
  } 
  else if(el.quantity <= 20){
    class_quantity = 'medium'
  }
  else{
    class_quantity = 'high'
  }
  el.class_quantity = "item-quantity level-" + class_quantity
});

function App() {
  return (
    <Listing items={items} />
  );
}

export default App;
