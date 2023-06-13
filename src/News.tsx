import type { Component } from 'solid-js';

import styles from './News.module.scss';
import Container from './shared/Container';
import newsPic from "./assets/climb.jpg"

const News: Component = () => {
  return (
    <div class={styles.News}>
      <Container>

        <div class="news">
          <h2>News</h2>
          <ul class={styles.NewsList}>
            <li>
              <div class="date">Jun 2023</div>
              <div>...</div>
            </li>
            <li>
              <div class="date">Jun 2023</div>
              <div>Accepted to the <a href="https://www.ellis.eng.cam.ac.uk/summer-school/" target="_blank"> Cambridge Summer School on Probabilistic Machine Learning </a>
                (Ellis Unit). </div>
            </li>
            <li>
              <div class="date">Apr 2023</div>
              <div>Accepted to the <a href="https://www.m2lschool.org/" target="_blank"> Mediteranean Machine Learning Summer School </a> (M2L)
                organised by the <a href="https://sites.google.com/view/aieducationfoundation/home" target="_blank"> AI Education Foundation</a>.</div>
            </li>
            <li>
              <div class="date">Feb 2023</div>
              <div>Accepted to the <a href="https://www.oxfordml.school/" target="_blank"> Oxford Machine Learning Summer School </a> (OxML)
                organised by <a href="https://www.globalgoals.ai/" target="_blank"> AI for Global Goals </a> &
                in partnership with the <a href="https://www.oxfordmartin.ox.ac.uk/deep-medicine/" target="_blank"> University of Oxford's Deep Medicine </a> & <a href="https://cifar.ca/" target="_blank"> CIFAR</a>.</div>
            </li>
            <li>
              <div class="date">Aug 2022</div>
              <div>
                Received the <a href="https://www.deepmind.com/education" target="_blank"> DeepMind Scholarship </a> for the
                <a href="https://www.qmul.ac.uk/postgraduate/taught/coursefinder/courses/artificial-intelligence-msc/" target="_blank"> Artificial Intelligence MSc </a>
                at the <a href="http://www.eecs.qmul.ac.uk/" target="_blank"> School of Electronics Engineering and Computer Science </a> of Queen Mary University of London.
                {/* <ul>
                  <li>bullet 1</li>
                  <li>bullet 2</li>
                </ul> */}
              </div>
            </li>
            <li>
              <div class="date">Jul 2022</div>
              <div>Joined the <a href="https://twitter.com/googledevs/status/1436373919745941506?lang=en" target="_blank"> Women in Machine Learning </a> PhD Mentorship program as a mentee
                organised by <a href="https://wimlworkshop.org/" target="_blank"> WiML</a>.</div>
            </li>
            <li>
              <div class="date">Sep 2021</div>
              <div>Accepted to the <a href="https://twitter.com/googledevs/status/1436373919745941506?lang=en" target="_blank"> Women Developer Academy </a>
                organised by <a href="https://developers.google.com/" target="_blank"> Google for Developers</a>.</div>
            </li>
          </ul>
        </div>

        <div class="news-img">
          <img src={newsPic} class={styles.Image}></img>
        </div>

      </Container >
    </div >
  );
};

export default News;
