import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, []);

  return (
    <>
      <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Mark is a Code Fellows graduate in Full Stack Software Development in JavaScript. He is an Army veteran who is originally from Chicago. Right after the military, he received a dual degree in Electronic Music Production and Digital Audio engineering.
          </p>
          <p>
            He then transitioned into the fitness field and became a personal trainer for a couple of years. After his time as a personal trainer, he decided to take a leap into the software development world. He decided to transition into software development because he likes to solve problems and work with teams.
          </p>
          <p>
            He is highly adaptable and willing to learn whatever it takes to reach his goal. He chose to learn this skill so he can be competitive in the tech industry. His passion for tech is extremely vast; tech is all around and is growing day by day with no plans of stopping. He hopes that one day, his skills can be a part of that movement.
          </p>
        </div>

        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faAngular} color="#28A4D9" />
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faCss3} color="#5ED4F4" />
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faReact} color="#EFD81D" />
            </div>
            <div className='face6'>
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
};

export default About;
