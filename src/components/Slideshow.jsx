import { useState, useEffect } from 'react';
import '../App.css';

const items = [
  {
    imgSrc: '/assets/slide1.png',
    title: 'Modern Wall Decor Framed Painting',
    price: '$199.99',
    rating: 5
  },
  {
    imgSrc: '/assets/slide2.png',
    title: 'Modern Wall Decor Framed Painting',
    price: '$199.99',
    rating: 5
  },
  {
    imgSrc: '/assets/slide3.png',
    title: 'Modern Wall Decor Framed Painting',
    price: '$199.99',
    rating: 5
  },
  {
    imgSrc: '/assets/slide4.png',
    title: 'Modern Wall Decor Framed Painting',
    price: '$199.99',
    rating: 5
  }
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start from the second item

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === items.length ? 1 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      <div className="slideshow" style={{ transform: `translateX(-${currentIndex * (100 / (items.length + 2))}%)` }}>
        {[items[items.length - 1], ...items, items[0]].map((item, index) => (
          <div className="slide" key={index}>
            <img className="painting" src={item.imgSrc} alt={item.title} />
            <div className="slide-title">{item.title}</div>
            <div className="slide-price">{item.price}</div>
            <div className="slide-rating">
              {[...Array(item.rating)].map((_, i) => (
                <img key={i} src="/assets/star.svg" alt="star" className="star" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
