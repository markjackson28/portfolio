// import LogoTitle from '../../assets/images/logo-s.png'
import LogoTitle from '../../assets/images/logo-m2.png'
import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
// import Logo from './Logo';


const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  // const nameArray = ['l', 'o', 'b', 'o', 'd', 'a', 'n'];
  const nameArray = ['a', 'r', 'k'];
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div className="containter home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>Full-Stack / JavaScript / Veteran</h2>
        <Link to="/contact" className="flat-button">CONTACT ME</Link>
      </div>
      {/* <Logo /> */}
    </div>
  )
};

export default Home;
