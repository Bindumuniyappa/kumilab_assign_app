import React from 'react';
import {Provider} from 'react-redux'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CategoryPanel from './components/CategoryPanel/CategoryPanel';
import Product from './components/Product/Product';
import store from './redux/store';
import banana from './components/images/banana.jpg';
import strawberries from './components/images/strawberries.jpg';
import yougurt from './components/images/yougurt1.jpg';
import blackberries from './components/images/blackberries.jpg';
import Cart from './components/Cart/Cart';

const products=[
  {
    name:'Banana 1 ct',
    price:'$0.69',
    subtitle:'18 oz',
    Image:banana
  },
  {
    name:'Strawberries',
    price:'$0.69',
    subtitle:'1 lb',
    Image:strawberries
  },
  {
    name:'Yogurt',
    price:'$0.69',
    subtitle:'1 lb',
    Image:yougurt
  },
  {
    name:'Blackberries',
    price:'$0.69',
    subtitle:'1 lb',
    Image:blackberries
  },
  {
    name:'Banana 1 ct',
    price:'$0.69',
    subtitle:'18 oz',
    Image:banana
  },
  {
    name:'Strawberries',
    price:'$0.69',
    subtitle:'1 lb',
    Image:strawberries
  }
]

const categories = ['Produce >', 'Prepared foods >', 'Canned foods & Soups >','Bakery >','Meat & Seafood >','Frozen >'];


const App: React.FC = () => {

  return (
    <Provider store={store}>
    <div className="app">
      <Navbar/>
      <CategoryPanel/> 
      <div className="container main-content">
        {categories.map((category,categoryIndex)=>(
        <div key={categoryIndex} className='category-container'>
          <h1 id={category} className='category-heading'>{category}</h1>
        <div className='product-loop product-scroll' >
      {products.map((product, index) => (
          <Product
            key={index}
            name={product.name}
            price={product.price}
            subtitle={product.subtitle}
            Image={product.Image}
            category={category}
          />
        ))}
        </div>
      </div>
        ))}
        </div>
        {/* <Cart/> */}
    </div>
    </Provider>
  );
};

export default App;
