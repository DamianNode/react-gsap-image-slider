import { useEffect, useState, useRef } from 'react';
import { TweenLite, Power3 } from 'gsap';

import leftArrow from './assets/arrow-left.svg';
import rightArrow from './assets/arrow-right.svg';

import 'reset-css';
import './App.scss';

const mockData = [
  {
    title: 'Jak Microsoft Surface sprawdza się jako komputer przenośny?',
    author: 'Jan Kowalski',
    date: '22 czerwca 2020',
    image: `${require("./assets/image1.webp").default}`,
  },
  {
    title: 'Jak zwiększyć produktywność dzięki kartom i aplikacjom w nowych oknach Teams?',
    author: 'Marysia Nowak',
    date: '10 maj 2021',
    image: `${require('./assets/image2.webp').default}`
  },
  {
    title: 'W czym MS Office 365 jest lepszy od Google GSuite?',
    author: 'Jarek Parkiewicz',
    date: '2 luty 2021',
    image: `${require('./assets/image3.webp').default}`
  }
]

const App = () => {
  const imageListRef = useRef(null);
  const articleListRef = useRef(null);
  console.log('mockData[0].image', mockData[0].image);

  return (
    <div className="article-section">
      <div className="article-container">
        <div className="arrows left">
          <span>
            <img src={leftArrow} alt="Left arrow" />
          </span>
        </div>

      <div className="inner">
        <div className="article-image">
          <ul>
            <li>
              <img src={mockData[0].image} alt="Article image" />
            </li>
            <li>
              <img src={mockData[1].image} alt="Article image" />
            </li>
            <li>
              <img src={mockData[2].image} alt="Article image" />
            </li>
          </ul>
        </div>
        <div className="article-content">
          <ul>
            <li>
              <div className="content-inner">
                <p className="title">{mockData[0].title}</p>
                <h3 className="author">{mockData[0].author}</h3>
                <h3 className="date">{mockData[0].date}</h3>
              </div>
            </li>
            <li>
              <div className="content-inner">
                <p className="title">{mockData[1].title}</p>
                <h3 className="author">{mockData[1].author}</h3>
                <h3 className="date">{mockData[1].date}</h3>
              </div>
            </li>
            <li>
              <div className="content-inner">
                <p className="title">{mockData[2].title}</p>
                <h3 className="author">{mockData[2].author}</h3>
                <h3 className="date">{mockData[2].date}</h3>
              </div>
            </li>
          </ul>
        </div>
      </div>

        <div className="arrows right">
          <span>
            <img src={rightArrow} alt="Right arrow" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
