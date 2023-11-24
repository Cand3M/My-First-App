import React from 'react';
import styles from './about.module.css'
const About = () => {
  return (
    <div className={styles.About}>
      <h2>Acerca de la app de Rick & Morty</h2>
      <h3>
      Creada por <a href={'https://www.linkedin.com/in/cande-villaverde-de-m%C3%B3naco-27507a222/'} target="_blank" rel="noopener noreferrer">Cande</a>
      </h3>
      <img src="https://wallpapercave.com/dwp2x/wp5702196.jpg" alt="Cande" />
    </div>
  );
};

export default About;
