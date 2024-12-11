import type { Component } from 'solid-js';

import styles from './Home.module.scss';
import Container from './shared/Container';
import profilePic from './assets/profile.png';
import icons from './assets/minima-social-icons.svg';
import { Link } from '@solidjs/router';

const Home: Component = () => {
  return (
    <div class={styles.Home}>
      <Container>
        <div class="about">
          <h2>About</h2>
          <div class={styles.Blurb}>
            <div class={styles.BlurbText}>
              Hi 👋!  <br />
              I am a PhD student at Queen Mary University of London, working with \
              <a href="https://sites.google.com/view/massimo-poesio" target="_blank">Massimo Poesio</a>. \
              {/* My research focuses on exploring how Machine Learning models, such as Neural Networks and Large Language Models,  */}
              {/* can effectively integrate diverse human opinions and handle scenarios where no single ground truth exists. Broadly, my interests include: */}
              I'm interested in understanding how Machine Learning models (<em>Neural Networks or LLMs</em>) \
              can best incorporate various human opinions and how we can effectively evaluate scenarios where no single ground truth exists.  <br />
              Broadly, my interests include:
              <ul>
                <li> Subjective & Ambiguous Problems</li>
                <li> Alignment of Models to Multiple Views (Distributional)</li> {/* <li> Annotator Disagreement</li> */}
                <li> Uncertainty estimation </li>
                <li> Bias and Fairness </li>
                <li> Data Centric Approaches </li>
              </ul>

              I’m always open to collaborations, so feel free to reach out if our interests align!


              {/* 
              <hr style="border: 1px solid #ccc; margin: 20px 0;"></hr>

              <div class="news">
                <h2>News</h2>
                <ul class={styles.NewsList}>
                  <li>
                    <div class="date"><em><strong>Oct 2024</strong></em></div>
                    <div>
                      A non-archival paper was accepted to the <a href="https://www.afciworkshop.org/call-for-papers" target="_blank"><em>Algorithmic Fairness through the Lens of Metrics and Evaluation (AFME)</em></a> workshop at NeurIPS
                    </div>
                  </li>

                </ul>

              </div>

              <hr style="border: 1px solid #ccc; margin: 20px 0;"></hr>  */}

            </div>

            <div class="avatar">
              <img src={profilePic} class={styles.Avatar}></img>
            </div>
          </div>


          <div class="about2">

            {/* 
            <h3 class={styles.BackgroundHeader} >Background</h3>
            I have a Bachelor’s degree in <em><strong>Business, Economics and
              Social Sciences</strong></em> from the <a href="https://www.wu.ac.at/" target="_blank">Vienna University of Economics and Business</a>,
            a Master’s degree in <em><strong>Business Analytics</strong></em> from <a href="https://www.imperial.ac.uk/" target="_blank"> Imperial
              College London</a> and a Master’s degree in <em><strong>Artificial Intelligence</strong></em> from <a href="http://eecs.qmul.ac.uk/"
                target="_blank">Queen Mary University London</a>.
            My PhD is supported by the <em><a href="https://deepmind.google/">Google DeepMind studentship</a></em>. */}


            <h4 class={styles.ResearchInterestsHeader}>Teaching</h4>
            I'm a Teaching Assistant for the following modules at QMUL:
            <ul>
              {/* <li> Neural Networks \& NLP <em>(starting in 2025)</em></li> */}
              <li> Deep Learning for Computer Vision (<strong>2024</strong>) </li>
              <li> Natural Language Processing (<strong>2023</strong>, <strong>2024</strong>) </li>
              <li> Machine Learning (<strong>2023</strong>, <strong>2024</strong>)</li>
            </ul>



            <h4 class={styles.ResearchInterestsHeader}>Mentoring</h4>
            Mentoring students through the <em><a href="https://www.wiml.org/mentorship-program">Women in Machine Learning (WiML) Mentorship program</a></em> (<strong>2023</strong>, <strong>2024</strong>)

            {/* <div style="border-bottom: 1px solid #ccc; margin: 20px 0;"></div> */}


            <h4 class={styles.ResearchInterestsHeader}>Non-Academic Interests</h4>
            Sports enthusiast, currently focused on <Link href="climbing">sport-climbing</Link>.
            Otherwise, can be found doing yoga or some bouldering occasionally.

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
              <svg><use href={icons + '#x'}></use></svg>
            </a>
            {/* <a href="https://bsky.app/profile/majapavlo.bsky.social" target="_blank">
              <svg><use href={icons + '#bluesky'}></use></svg>
            </a> */}
            <a href="https://scholar.google.com/citations?user=NEa-wIIAAAAJ&hl=en" target="_blank">
              <svg><use href={icons + '#scholar'}></use></svg>
            </a>
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
