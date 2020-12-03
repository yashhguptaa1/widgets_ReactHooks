import React ,{ useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/SearchWiki';
import Dropdown from './components/Dropdown';
import Route from './components/Route';
import Header from './components/Header';


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

  const [selected, setSelected] = useState(optionsDropdown[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={itemsAccordion} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={optionsDropdown}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
    </div>
  );
};

export default App;
