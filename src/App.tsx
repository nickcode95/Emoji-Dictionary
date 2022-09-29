import React from 'react';
import Header from './components/Header';
import Dictionary from './components/Dictionary'
import emojipedia from './emojipedia';

function createEmojiCard (emoji: any) {
  return  <Dictionary
    key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  
}

function App() {
  return (
    <div >
      <Header />
      
<dl className='dictionary'>{emojipedia.map(createEmojiCard)}</dl>
    </div>
  );
}

export default App;
