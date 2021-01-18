import React, {useState} from "react";
import './App.css';
import Dropdown from './Dropdown';

const options = [
  {
    label: 'The color red',
    value: 'red'
  },
  {
    label: 'The color blue',
    value: 'blue'
  },
  {
    label: 'The color yellow',
    value: 'yellow'
  }
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className="ui container">
     <button className="ui button" onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
     {showDropdown ? 
     <Dropdown 
        options={options} 
        onSelectedChange={setSelected} 
        selected={selected}
      /> : null
    }
    </div>
  );
};
