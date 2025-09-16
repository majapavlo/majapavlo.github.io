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


        <div class="about">
          {/* <h2>About</h2> */}
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
                <div class="date">Sep 2025</div>
                {/* <div><strong><em>AI Alignment:</em></strong>&nbsp;
                  Accepted into the <a href="https://sparai.org/" target="_blank">Supervised Program for Alignment Research</a> (SPAR), I'll be working with a team on <strong>Human-AI complementarity</strong>
                </div> */}
                <div><strong><em>Supervised Program for Alignment Research (SPAR):</em></strong>&nbsp;
                  Accepted into <a href="https://sparai.org/" target="_blank">SPAR</a>, where I'll be joining a team to work on <a href="https://airtable.com/appypGt9DhCljq3Gh/shrpaJMUhvElTxcI8?detail=eyJwYWdlSWQiOiJwYWd5SURLVXg5WHk4bHlmMCIsInJvd0lkIjoicmVjT0hSRFhjT0NmelRySm0iLCJzaG93Q29tbWVudHMiOmZhbHNlLCJxdWVyeU9yaWdpbkhpbnQiOnsidHlwZSI6InBhZ2VFbGVtZW50IiwiZWxlbWVudElkIjoicGVsSmM5QmgwWDIxMEpmUVEiLCJxdWVyeUNvbnRhaW5lcklkIjoicGVsUlNqc0xIbWhUVmJOaE4iLCJzYXZlZEZpbHRlclNldElkIjoic2ZzRGNnMUU3Mk9xSXVhYlgifX0&VbNhN=allRecords">Achieving Human-AI complementarity</a>
                </div>
              </li>
              <li>
                <div class="date">Mar 2025</div>
                <div>
                  <strong><em>Top ICLR blogpost: </em></strong>&nbsp;
                  <a href='https://arxiv.org/pdf/2501.19047'>Understanding Model Calibration - A gentle introduction</a> was highlighted as a <u>close runner-up for Best Blog Post</u> by the <a href="https://iclr-blogposts.github.io/2025/about/" target="_blank"><em>ICLR
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
                <div class="date">Sep 2023</div>
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
                <div class="date">Sep 2022</div>
                <div> <strong><em>Funding: </em></strong>&nbsp;
                  Received the <a href="https://www.deepmind.com/education" target="_blank"> DeepMind Scholarship</a> for the
                  <a href="https://www.qmul.ac.uk/postgraduate/taught/coursefinder/courses/artificial-intelligence-msc/" target="_blank"> Artificial Intelligence MSc</a> at
                  the <a href="http://www.eecs.qmul.ac.uk/" target="_blank"> School of Electronics Engineering and Computer Science</a> of Queen Mary University of London.
                </div>
              </li>

            </ul>
          </div>



          <hr style="border: 1px solid #ccc; margin: 20px 0;"></hr>


          <div class={styles.News}>
            {/* <ul class={styles.NewsList}> */}
            <h2 class={styles.ResearchInterestsHeader}>Academic Engagement</h2>
            <h3 class={styles.ResearchInterestsHeader}>Reviewing</h3>
            <ul>
              <li> 2025 <strong><em>EMNLP: </em></strong> &nbsp; NLPerspectives - Perspectivist Approaches to NLP workshop; Learning with Disagreement shared task</li>
              <li> 2025 <strong><em>COLING: </em></strong> &nbsp; CoMeDi: Context and Meaning - Navigating Disagreements in NLP Annotations workshop</li>
              <li> 2024 <strong><em>Neurips: </em></strong> &nbsp; Pluralistic Alignment workshop</li>
            </ul>
            {/* <li>
                <div class="date">2025</div>
                <div> <strong><em>EMNLP: </em></strong>&nbsp;
                  NLPerspectives - Perspectivist Approaches to NLP workshop; Learning with Disagreement shared task
                </div>
              </li>
              <li>
                <div class="date">2025</div>
                <div> <strong><em>COLING: </em></strong>&nbsp;
                  CoMeDi: Context and Meaning - Navigating Disagreements in NLP Annotations workshop
                </div>
              </li>
              <li>
                <div class="date">2024</div>
                <div> <strong><em>Neurips: </em></strong>&nbsp;
                  Pluralistic Alignment workshop
                </div>
              </li> */}
            {/* </ul> */}
            {/* </div> */}

            <h3 class={styles.ResearchInterestsHeader}>Teaching</h3>
            I'm a teaching assistant for the following modules at <strong>QMUL</strong>:
            <ul>
              <li> Neural Networks &amp; NLP (<strong>2025</strong>)</li>
              <li> Deep Learning for Computer Vision (<strong>2024</strong>) </li>
              <li> Natural Language Processing (<strong>2023</strong>, <strong>2024</strong>) </li>
              <li> Machine Learning (<strong>2023</strong>, <strong>2024</strong>)</li>
            </ul>
            <div>
              Before supporting teaching at Queen Mary, I volunteered as a <em>Python instructor</em> with <a href='https://codefirstgirls.com/'>Code First Girls</a>, where I taught foundational programming skills. Prior to that, I volunteered as a <em>mathematics tutor</em> with <a href='https://www.caritas.at/'>Cartias Austria</a>.
            </div>

            <div class="mentoring">
              <h3 class={styles.ResearchInterestsHeader}>Mentoring</h3>
              Mentoring students through the <em><a href="https://www.wiml.org/mentorship-program">Women in Machine Learning (WiML) Mentorship program</a></em> (<strong>2023</strong>, <strong>2024</strong>, <strong>2025</strong>)
            </div>
          </div>

          <hr style="border: 1px solid #ccc; margin: 30px 0;"></hr>

          <div class="opensource">
            <h3 class={styles.ResearchInterestsHeader}>Open-Source Contributions</h3>
            Contributed to <a href="https://github.com/StatProofBook/StatProofBook.github.io">The Book of Statistical Proofs</a>, adding definitions and proofs
          </div>

        </div >

      </Container >
    </div >
  );
};

export default Home;
