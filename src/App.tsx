import React from 'react';
import {Provider} from 'react-redux'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CategoryPanel from './components/CategoryPanel/CategoryPanel';
import Product from './components/Product/Product';
import store from './redux/store';

const products=[
  {
    name:'Banana 1 ct',
    price:'$0.69',
    subtitle:'18 oz',
    Image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fbanana&psig=AOvVaw2KAG2Q2RMT03st9aKSD1To&ust=1697283093184000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNjIh7b28oEDFQAAAAAdAAAAABAE'
  },
  {
    name:'Strawberries',
    price:'$0.69',
    subtitle:'1 lb',
    Image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.orgpick.com%2Fproducts%2Forganic-strawberry&psig=AOvVaw115y0qTB2jqJqb5KpJyLlM&ust=1697283327428000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMCc-6D38oEDFQAAAAAdAAAAABAE'
  },
  {
    name:'Yogurt',
    price:'$0.69',
    subtitle:'1 lb',
    Image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.heb.com%2Fproduct-detail%2Ffage-total-0-non-fat-plain-greek-yogurt%2F1297099&psig=AOvVaw0cF-PHX47GbGO-WKdwjJHe&ust=1697283416983000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCUnMv38oEDFQAAAAAdAAAAABAE'
  },
  {
    name:'Blackberries',
    price:'$0.69',
    subtitle:'1 lb',
    Image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fphoto_104084443_blackberries-in-plastic-dishes.-blackberry-in-a-transparent-container.-front-view..html&psig=AOvVaw3V_a3TmsTzmN5lhj8TzUkb&ust=1697283608746000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNiN5bP48oEDFQAAAAAdAAAAABAE'
  }
]

const App: React.FC = () => {

  return (
    <Provider store={store}>
    <div className="app">
      <Navbar/>
      <CategoryPanel/> 
      <div className="main-content">
      {products.map((product, index) => (
          <Product
            key={index}
            name={product.name}
            price={product.price}
            subtitle={product.subtitle}
            Image={product.Image}
          />
        ))}
      </div>
    </div>
    </Provider>
  );
};

export default App;
