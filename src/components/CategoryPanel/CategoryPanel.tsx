// import React from 'react';
// import './CategoryPanel.css';
// import {TbCarrot} from 'react-icons/tb';
// import {GiWrappedSweet} from 'react-icons/gi'
// import {GiCannedFish} from 'react-icons/gi';
// import {MdOutlineCake} from 'react-icons/md';
// import {TbEggs} from 'react-icons/tb';
// import {TbMeat} from 'react-icons/tb';

// const categories = ['Produce', 'Prepared foods', 'Canned foods & Soups','Produce','Bakery','Diary & Eggs','Frozen','Meat & Seafood','Bakery','Diary & Eggs','Prepared foods'];

// const CategoryPanel: React.FC = () => {
//   return (
//     <div className="category-panel">
//       <div className="icons">
//         <div className="icon-container">
//           <i><TbCarrot className='icon'/></i>
//         </div>
//         <div className="icon-container">
//           <i><GiWrappedSweet className='icon'/></i>
//         </div>
//         <div className="icon-container">
//           <i><MdOutlineCake className='icon'/></i>
//         </div>
//         <div className="icon-container">
//           <i><GiCannedFish className='icon'/></i>
//         </div>
//         <div className="icon-container">
//           <i><TbEggs className='icon'/></i>
//         </div>
//         <div className="icon-container">
//           <i><TbMeat className='icon'/></i>
//         </div>
//       </div>
//       <ul className="category-list">
//         {categories.map((category, index) => (
//           <li key={index}>{category}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CategoryPanel;


import React from 'react';
import './CategoryPanel.css';
import {  GiWrappedSweet, GiCannedFish } from 'react-icons/gi';
import { TbCarrot, TbEggs, TbMeat } from 'react-icons/tb';
import { MdOutlineCake } from 'react-icons/md';


const categories = [
  { name: 'Produce', icon: <TbCarrot className='icon' /> },
  { name: 'Prepared foods', icon: <GiWrappedSweet className='icon' /> },
  { name: 'Canned foods & Soups', icon: <GiCannedFish className='icon' /> },
  { name: 'Produce', icon: <TbCarrot className='icon' /> },
  { name: 'Bakery', icon: <MdOutlineCake className='icon' /> },
  { name: 'Diary & Eggs', icon: <TbEggs className='icon' /> },
  { name: 'Frozen', icon: <GiCannedFish className='icon' /> },
  { name: 'Meat & Seafood', icon: <TbMeat className='icon' /> },
  { name: 'Bakery', icon: <MdOutlineCake className='icon' /> },
  { name: 'Diary & Eggs', icon: <TbEggs className='icon' /> },
  { name: 'Prepared foods', icon: <GiWrappedSweet className='icon' /> },
];

const CategoryPanel: React.FC = () => {
  return (
    <div className="category-panel">
      <ul className="category-list">
        {categories.map((category, index) => (
          <li key={index}>
            {window.innerWidth < 768 ? category.icon :null}
            {window.innerWidth > 768 ? category.name :null}
            {/* {category.icon} {category.name} */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPanel;
