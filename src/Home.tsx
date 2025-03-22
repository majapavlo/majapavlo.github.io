import type { Component } from 'solid-js';

import styles from './Home.module.scss';
import style from './News.module.scss';
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

              I’m open to collaborations, so feel free to reach out if our interests align!


            </div>

            <div class="avatar">
              <img src={profilePic} class={styles.Avatar}></img>
            </div>
          </div>

          {/* <hr style="border: 1px solid #ccc; margin: 20px 0;"></hr> */}



          {/* <div class="updates"> */}
          <div class={styles.News}>
            <h2>Updates</h2>
            <ul class={styles.NewsList}>
              <li>
                <div class="date">Mar 2025</div>
                <div>
                  <strong><em>ICLR blogpost: </em></strong>&nbsp;
                  <a href='https://arxiv.org/pdf/2501.19047'>Understanding Model Calibration - A gentle introduction</a> was highlighted as a close runner-up for Best Blog Post by the <a href="https://iclr-blogposts.github.io/2025/about/" target="_blank"><em>ICLR
                    Blogpost Track</em></a>
                </div>
              </li>
              {/* <li>
                <div class="date">Jan 2025</div>
                <div>
                  <strong><em>ICLR blogpost: </em></strong>&nbsp;
                  <a href='https://arxiv.org/pdf/2501.19047'>Understanding Model Calibration - A gentle introduction</a> accepted at the <a href="https://iclr-blogposts.github.io/2025/about/" target="_blank"><em>ICLR
                    Blogpost Track</em></a>
                </div>
              </li> */}
              <li>
                <div class="date">Dec 2024</div>
                <div><strong><em>Neurips workshop: </em></strong>&nbsp;
                  Presented 'Understanding The Effect Of Temperature On Alignment With Human Opinions' as a <a href='https://arxiv.org/pdf/2411.10080'>poster</a> at the AFME workshop (<a href="https://www.afciworkshop.org/call-for-papers" target="_blank"><em>
                    Algorithmic Fairness through the Lens of Metrics and Evaluation</em></a>)
                </div>
              </li>
              <li>
                <div class="date">Jun 2023</div>
                <div> <strong><em>Funding: </em></strong>&nbsp;
                  Received the <a href="https://www.deepmind.com/education" target="_blank">DeepMind Scholarship</a> to pursue a PhD under the supervision of <a href="https://sites.google.com/view/massimo-poesio" target="_blank">Massimo Poesio</a> in
                  the <a href="http://www.eecs.qmul.ac.uk/research/research-groups/cognitive-science-research-group/" target="_blank">Cognitive Science Research Group</a> at Queen Mary University of London
                </div>
              </li>
              <li>
                <div class="date">Apr 2023</div>
                <div> <strong><em>Funding: </em></strong>&nbsp;
                  Received a full-travel fund for the <a href="https://www.m2lschool.org/" target="_blank"> Mediteranean Machine Learning Summer School</a> (M2L)
                  organised by the <a href="https://sites.google.com/view/aieducationfoundation/home" target="_blank"> AI Education Foundation</a>  (<em>awarded based on academic merit</em>)
                </div>
              </li>
              <li>
                <div class="date">Aug 2022</div>
                <div> <strong><em>Funding: </em></strong>&nbsp;
                  Received the <a href="https://www.deepmind.com/education" target="_blank"> DeepMind Scholarship</a> for the
                  <a href="https://www.qmul.ac.uk/postgraduate/taught/coursefinder/courses/artificial-intelligence-msc/" target="_blank"> Artificial Intelligence MSc</a> at
                  the <a href="http://www.eecs.qmul.ac.uk/" target="_blank"> School of Electronics Engineering and Computer Science</a> of Queen Mary University of London.

                </div>
              </li>

            </ul>
          </div>



          {/* <hr style="border: 1px solid #ccc; margin: 20px 0;"></hr> */}
          <div class="about2">

            <h4 class={styles.ResearchInterestsHeader}>Non-Academic Interests</h4>
            Sports enthusiast, currently focused on <Link href="climbing">sport-climbing</Link>.
            Otherwise, can be found doing yoga or reading books.

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
            <a href="https://bsky.app/profile/majapavlo.bsky.social" target="_blank">
              <svg><use href={icons + '#bluesky'}></use></svg>
            </a>
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
