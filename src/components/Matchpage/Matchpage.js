import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';

const YourComponent = () => {
  const [cards, setCards] = useState([ { id: 1, text: 'Card 1', imageUrl: 'https://th.bing.com/th?id=OIP.DSwXeAlKJe1vWgLpyusw1QHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { id: 2, text: 'Card 2', imageUrl: 'https://th.bing.com/th?id=OIP.e9rYQJjiC2Lpfgqagr9HVgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { id: 3, text: 'Card 3', imageUrl: 'https://th.bing.com/th?id=OIP.KUzgGIQWJPK6Sf5LWOBgHwHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' }]); // Example initial cards
  const [currentCardIndex, setCurrentCardIndex] = useState(0); // Index of the current card being displayed

  const onSwipe = (direction) => {
    setCurrentCardIndex(currentCardIndex + 1);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen');
  };

  return (
    <div>
      {currentCardIndex < cards.length && ( // Render the current card if there are still cards left
        <TinderCard
          key={currentCardIndex}
          onSwipe={onSwipe}
          onCardLeftScreen={() => onCardLeftScreen('fooBar')}
        //   preventSwipe={['right', 'left']}
        swipeThreshold={10}
        >
         <div>
            <img src={cards[currentCardIndex].imageUrl} alt={cards[currentCardIndex].text} />
            {cards[currentCardIndex].text}
        </div>
        </TinderCard>
      )}
    </div>
  );
};

export default YourComponent;
