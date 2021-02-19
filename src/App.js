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

const imageWidth = 340;

const App = () => {
  const [state, setState] = useState({isActive1: true, isActive2: false, isActive3: false});
  const imageListRef = useRef(null);
  const articleListRef = useRef(null);

  useEffect(() => {
    TweenLite.to(articleListRef.current.children[0], 0, { opacity: 1 })
  }, [])

  const slideLeft = (index, duration, multiply = 1) => {
    TweenLite.to(imageListRef.current.children[index], duration, {
      x: -imageWidth * multiply,
      ease: Power3.easeOut
    })
  }

  const slideRight = (index, duration, multiply = 1) => {
    TweenLite.to(imageListRef.current.children[index], duration, {
      x: imageWidth * multiply,
      ease: Power3.easeOut
    })
  }

  const scale = (index, duration) => {
    TweenLite.from(imageListRef.current.children[index], duration, { 
      scale: 1.2, ease: Power3.easeOut
    })
  }

  const fadeOut = (index, duration) => {
    TweenLite.to(articleListRef.current.children[index], duration, {
      opacity: 0
    });
  };

  const fadeIn = (index, duration) => {
    TweenLite.to(articleListRef.current.children[index], duration, {
      opacity: 1,
      delay: 1
    });
  };

  const nextSlide = () => {
    if (imageListRef.current.children[0].classList.contains("active")) {
      setState({ isActive1: false, isActive2: true });
      //Image transition
      slideLeft(0, 1);
      slideLeft(1, 1);
      scale(1, 1);
      slideLeft(2, 1);
      slideLeft(2, 0);

      fadeOut(0, 1);
      fadeIn(1, 1);
    } else if (imageListRef.current.children[1].classList.contains("active")) {
      setState({ isActive2: false, isActive3: true });
      //Image transition
      slideRight(0, 1);
      slideLeft(1, 1, 2);
      slideLeft(2, 1, 2);
      scale(2, 1);
      //content transition
      fadeOut(1, 1);
      fadeIn(2, 1);
    } else if (imageListRef.current.children[2].classList.contains("active")) {
      setState({ isActive1: true, isActive3: false });
      //Image transition
      slideLeft(2, 1, 3);
      slideLeft(0, 1, 0);
      slideLeft(1, 0, 0);
      scale(0, 1);
      //content transition
      fadeOut(2, 1);
      fadeIn(0, 1);
    }
  };

  const prevSlide = () => {
    if (imageListRef.current.children[0].classList.contains("active")) {
      setState({ isActive1: false, isActive3: true });
      //Image transition
      slideLeft(2, 0, 3);
      slideLeft(2, 1, 2);
      scale(2, 1);
      slideRight(0, 1);
      slideRight(1, 1);
      //content transtion
      fadeOut(0, 1);
      fadeIn(2, 1);
    } else if (imageListRef.current.children[1].classList.contains("active")) {
      setState({ isActive2: false, isActive1: true });
      //Image transition
      slideLeft(0, 0);
      slideRight(0, 1, 0);
      slideRight(1, 1, 0);
      slideRight(2, 1, 2);
      scale(0, 1);
      //content transtion
      fadeOut(1, 1);
      fadeIn(0, 1);
    } else if (imageListRef.current.children[2].classList.contains("active")) {
      setState({ isActive2: true, isActive3: false });
      slideLeft(2, 1);
      slideLeft(1, 0, 2);
      slideLeft(1, 1);
      scale(1, 1);
      //content transtion
      fadeOut(2, 1);
      fadeIn(1, 1);
    }
  };

  return (
    <div className="article-section">
      <div className="article-container">
        <div className="arrows left" onClick={prevSlide}>
          <span>
            <img src={leftArrow} alt="Left arrow" />
          </span>
        </div>

      <div className="inner">
        <div className="article-image">
          <ul ref={imageListRef}>
            <li className={state.isActive1 ? 'active' : ''}>
              <img src={mockData[0].image} alt="Article image" />
            </li>
            <li className={state.isActive2 ? 'active' : ''}>
              <img src={mockData[1].image} alt="Article image" />
            </li>
            <li className={state.isActive3 ? 'active' : ''}>
              <img src={mockData[2].image} alt="Article image" />
            </li>
          </ul>
        </div>
        <div className="article-content">
          <ul ref={articleListRef}>
            <li className={state.isActive1 ? 'active' : ''}> 
              <div className="content-inner">
                <p className="title">{mockData[0].title}</p>
                <h3 className="author">{mockData[0].author}</h3>
                <h3 className="date">{mockData[0].date}</h3>
              </div>
            </li>
            <li className={state.isActive2 ? 'active' : ''}>
              <div className="content-inner">
                <p className="title">{mockData[1].title}</p>
                <h3 className="author">{mockData[1].author}</h3>
                <h3 className="date">{mockData[1].date}</h3>
              </div>
            </li>
            <li className={state.isActive3 ? 'active' : ''}>
              <div className="content-inner">
                <p className="title">{mockData[2].title}</p>
                <h3 className="author">{mockData[2].author}</h3>
                <h3 className="date">{mockData[2].date}</h3>
              </div>
            </li>
          </ul>
        </div>
      </div>

        <div className="arrows right" onClick={nextSlide}>
          <span>
            <img src={rightArrow} alt="Right arrow" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
