import React from 'react';
import Accordion from './components/Accordion';

const items = [
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


/*
Line 19:1:  Assign arrow function to a variable before exporting as module default
  import/no-anonymous-default-export
export default () => {
  */

const App=()=>{
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default App;
