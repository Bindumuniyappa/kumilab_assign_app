import React from 'react';
import './CategoryPanel.css';

const categories = ['Produce', 'Prepared foods', 'Canned foods & Soups','Produce','Bakery','Diary & Eggs','Frozen','Meat & Seafood','Bakery','Diary & Eggs','Prepared foods'];

const CategoryPanel: React.FC = () => {
  return (
    <div className="category-panel">
      <ul className="category-list">
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPanel;
