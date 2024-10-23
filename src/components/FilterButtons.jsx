import React from 'react';

// Komponent do przycisków filtrujących
const FilterButtons = ({ setBtnType }) => {
  return (
    <div>
      <button className='buttonFilt' onClick={() => setBtnType("done")}>WYKONANE</button>
      <button className='buttonFilt' onClick={() => setBtnType("not")}>NIEWYKONANE</button>
      <button className='buttonFilt' onClick={() => setBtnType("all")}>WSZYSTKIE</button>
    </div>
  );
};

export default FilterButtons;