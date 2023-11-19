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
              I am a PhD student at Queen Mary University of London, working under the guidance
              of <a href="https://sites.google.com/view/massimo-poesio" target="_blank">Prof. Massimo Poesio</a>.
              <br></br>
              My research centers around <strong>Natural Language Processing</strong> tasks that involve human disagreement {/* that involve annotator disagreements stemming from e.g. subjective views or interpretative ambiguities  */}
              and is supported by the <em><a href="https://deepmind.google/">Google DeepMind studentship</a></em>.

              <h3 class={styles.BackgroundHeader} >Background</h3>
              I have a Bachelor’s degree in <em><strong>Business, Economics and
                Social Sciences</strong></em> from the <a href="https://www.wu.ac.at/" target="_blank">Vienna University of Economics and Business</a>,
              a Master’s degree in <em><strong>Business Analytics</strong></em> from <a href="https://www.imperial.ac.uk/" target="_blank"> Imperial
                College London</a> and another Master’s degree in <em><strong>Artificial Intelligence</strong></em> from <a href="http://eecs.qmul.ac.uk/"
                  target="_blank">Queen Mary University London</a>.

              <h4 class={styles.ResearchInterestsHeader}>Research interests:</h4>
              <ul>
                <li> Subjective/ambiguous NLP</li>
                {/* <li> Annotator Disagreement</li> */}
                <li> Uncertainty Quantification </li>
                <li> Bias and Fairness </li>
                <li> Data Centric Machine Learning </li>
              </ul>

            </div>

            <div class="avatar">
              <img src={profilePic} class={styles.Avatar}></img>
            </div>
          </div>
          {/* <div class="about2">
            <h4>Interests</h4>
            Avid sports enthusiast, currently enjoying yoga, rock climbing, and bouldering. Avid sports enthusiast, currently enjoying yoga, rock climbing, and bouldering.
            Avid sports enthusiast, currently enjoying yoga, rock climbing, and bouldering. Avid sports enthusiast, currently enjoying yoga, rock climbing, and bouldering.
          </div> */}
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

      </Container >
    </div >
  );
};

export default Home;
