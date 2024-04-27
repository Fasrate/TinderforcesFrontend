import React, { useState } from 'react';
import Swipeable from 'react-swipy';
import Card from './Card';
import Swiper from '../../utils/swiper';

const YourComponent = () => {
  const [cards, setCards] = useState([
    { id: 1, text: 'Card 1', imageUrl: 'https://th.bing.com/th?id=OIP.DSwXeAlKJe1vWgLpyusw1QHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
    { id: 2, text: 'Card 2', imageUrl: 'https://th.bing.com/th?id=OIP.e9rYQJjiC2Lpfgqagr9HVgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
    { id: 3, text: 'Card 3', imageUrl: 'https://th.bing.com/th?id=OIP.KUzgGIQWJPK6Sf5LWOBgHwHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' }
  ]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const remove = () => ({ cards: cards.slice(1, cards.length) });

  const handleSwipeLeft = () => {
    setCurrentCardIndex(currentCardIndex + 1);
    onSwipe('left');
  };

  const handleSwipeRight = () => {
    setCurrentCardIndex(currentCardIndex + 1);
    onSwipe('right');
  };

  const onSwipe = (direction) => {
    console.log("direction " + direction + " index"+ currentCardIndex)
    if (direction === 'left') {
      console.log("Rejected")
    } else {
      console.log("Accepted")
    }
    // Remove the swiped card from the array
    setCards(prevCards => prevCards.slice(1));
  };

  return (
    <center>
      <div style={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center", width: "100%", minHeight: "100vh", fontFamily: "sans-serif", overflow: "hidden" }}>
        <div style={{ position: "relative", width: "250px", height: "250px" }}>
          {cards.length > 0 && (
            <div style={{ position: "relative", width: "250px", height: "250px" }}>
              <Swipeable
                buttons={({ left, right }) => {
                  const swipeFunction = { left: handleSwipeLeft, right: handleSwipeRight };
                  Swiper.initializeSwiper(swipeFunction);
                  return (
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12 }}>
                      <button id="SWIPELEFT" onClick={Swiper.swipeLeft}>
                        Reject
                      </button>
                      <button onClick={Swiper.swipeRight}>Accept</button>
                    </div>
                  );
                }}
                onAfterSwipe={remove}
              >
                <Card zIndex={currentCardIndex} {...cards[0]} />
              </Swipeable>
              {cards.length > 1 && <Card zIndex={-1}>{cards[1]}</Card>}
            </div>
          )}
          {cards.length <= 1 && <Card zIndex={-2}>No more cards</Card>}

          <button onClick={Swiper.swipeLeft}> Click Me </button>
        </div>
      </div>
    </center>
  );
};

export default YourComponent;
