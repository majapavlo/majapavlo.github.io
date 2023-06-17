import type { Component } from 'solid-js';

import styles from './Home.module.scss';
import Container from './shared/Container';
import profilePic from './assets/profile.png';
import icons from './assets/minima-social-icons.svg';

const Home: Component = () => {
  return (
    <div class={styles.Home}>
      <Container>
        <div class="about">
          <h2>About</h2>
          <div class={styles.Blurb}>
            <div class={styles.BlurbText}>

              I'm an incoming DeepMind PhD student at Queen Mary University London interested in Machine Learning under annotator disagreement.
              Before returning to University I worked a Data Scientist in a marketing startup and then a utilities company in London.

              <h4>Background</h4>
              I have a Bachelor’s degree in <em><strong>Business, Economics and Social Sciences</strong></em> from the <a href="https://www.wu.ac.at/" target="_blank"> Vienna University of Economics and Business</a> and
              a Master’s degree in <em><strong>Business Analytics</strong></em> from <a href="https://www.imperial.ac.uk/" target="_blank"> Imperial College London</a>.
              Currently, I am pursuing a Master’s degree in <em><strong>Artificial Intelligence</strong></em> at <a href="http://eecs.qmul.ac.uk/" target="_blank"> Queen Mary University London</a> where I am working with <a href="https://sites.google.com/view/massimo-poesio" target="_blank">Massimo Poesio</a> on evaluating machine learning tasks with human disagreement.
              {/* I have completed a Bachelor’s degree in <em><strong>Business, Economics and Social Sciences</strong></em> at the <a href="https://www.wu.ac.at/" target="_blank"> Vienna University of Economics and Business </a> and
              a Master’s degree in <em><strong>Business Analytics</strong></em> at <a href="https://www.imperial.ac.uk/" target="_blank"> Imperial College London</a>.
              Currently, I am pursuing a Master’s degree in <em><strong>Artificial Intelligence</strong></em> at <a href="http://eecs.qmul.ac.uk/" target="_blank"> Queen Mary
                University London</a> where I am working with <a href="https://sites.google.com/view/massimo-poesio" target="_blank">Massimo Poesio</a> on evaluating machine learning tasks with human disagreement. */}

              <h4>Research interests</h4>
              <ul>
                <li> Annotator Disagreement</li>
                <li> Uncertainty Quantification </li>
                <li> Bias and Fairness </li>
                <li> Data Centric Machine Learning </li>
              </ul>

            </div>
            <div class="avatar">
              <img src={profilePic} class={styles.Avatar}></img>
            </div>
          </div>
        </div >

        <div class={styles.Container}>
          <div class={styles.Links}>
            <a href="https://github.com/majapavlo" target="_blank">
              <svg><use href={icons + '#github'}></use></svg>
            </a>
            <a href="https://www.linkedin.com/in/maja-pavlovic/" target="_blank">
              <svg><use href={icons + '#linkedin'}></use></svg>
            </a>
            <a href="https://twitter.com/maja_pavlo" target="_blank">
              <svg><use href={icons + '#twitter'}></use></svg>
            </a>
            {/* <a href="https://scholar.google.com/citations?user=NEa-wIIAAAAJ&hl=en" target="_blank">
              <svg><use href={icons + '#scholar'}></use></svg>
            </a> */}
            <a href="https://medium.com/@majapavlo" target="_blank">
              <svg><use href={icons + '#medium'}></use></svg>
            </a>
            {/* <a href="https://stackoverflow.com/users/17896972/mpavlo" target="_blank">
              <svg><use href={icons + '#stackoverflow'}></use></svg>
            </a> */}
          </div>
        </div>

      </Container>
    </div >
  );
};

export default Home;
