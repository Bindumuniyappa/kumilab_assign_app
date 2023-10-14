import React from 'react';
import './CategoryPanel.css';
import {  GiWrappedSweet, GiCannedFish } from 'react-icons/gi';
import { TbCarrot, TbEggs, TbMeat } from 'react-icons/tb';
import { MdOutlineCake } from 'react-icons/md';


const categories = [
  { name: 'Produce', icon: <TbCarrot className='icon' /> },
  { name: 'Prepared foods', icon: <GiWrappedSweet className='icon' /> },
  { name: 'Canned foods & Soups', icon: <GiCannedFish className='icon' /> },
  { name: 'Produce' },
  { name: 'Bakery', icon: <MdOutlineCake className='icon' /> },
  { name: 'Diary & Eggs', icon: <TbEggs className='icon' /> },
  { name: 'Frozen', icon: <GiCannedFish className='icon' /> },
  { name: 'Meat & Seafood', icon: <TbMeat className='icon' /> },
  { name: 'Bakery', icon: <MdOutlineCake className='icon' /> },
  { name: 'Diary & Eggs', icon: <TbEggs className='icon' /> },
  { name: 'Prepared foods', icon: <GiWrappedSweet className='icon' /> },
];

const handleCategoryClick = (category) => {
  const el = document.getElementById(category.name+ " >");
  console.log(el,category.name)
  el?.scrollIntoView({ behavior: "smooth" });
};

const CategoryPanel: React.FC = () => {
  return (
    <div className="category-panel">
      <ul className="category-list">
        {categories.map((category, index) => (
          <li key={index} className='category-item' onClick={()=>{handleCategoryClick(category)}}>
            {window.innerWidth < 768 ?(category.icon,category.name):null}
            {window.innerWidth > 768 ? category.name :null}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPanel;
