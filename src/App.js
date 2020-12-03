import React ,{ useState } from 'react';
//import Accordion from './components/Accordion';
//import Search from './components/SearchWiki';
import Dropdown from './components/Dropdown';

const itemsAccordion = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];


const optionsDropdown = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
];


const App=()=>{
  
  const [selected, setSelected]=useState(optionsDropdown[0]);

  return (
    <div>
      {
      /*<Accordion items={itemsAccordion}>
      /*<Search/>*/
        
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={optionsDropdown}
        />
      }
    </div>
  );
};

export default App;
