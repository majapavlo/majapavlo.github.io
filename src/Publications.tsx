import type { Component } from 'solid-js';

import Container from './shared/Container';
import styles from './Publications.module.scss';

const Publications: Component = () => {
  return (
    <div class={styles.Publications}>
      <Container>
        <h2>Publications</h2>

        <div class={styles.Section}>
          2017
          <hr></hr>
          <div class="publications">
            <ul>
              <li>
                <a class={styles.Title} href="https://ieeexplore.ieee.org/document/7861423" target="_blank"> SGAM business layer for a local flexibility market </a>
                <div class={styles.Authors}>M Pavlovic, T Gawron-Deutsch, C Neureiter, K Diwold</div>
                <div class={styles.Date}>CIRED Workshop 2016, 1-4</div>
              </li>
              <li>
                <a class={styles.Title} href="https://ieeexplore.ieee.org/document/7861423" target="_blank"> SGAM business layer for a local flexibility market </a>
                <div class={styles.Authors}>M Pavlovic, T Gawron-Deutsch, C Neureiter, K Diwold</div>
                <div class={styles.Date}>CIRED Workshop 2016, 1-4</div>
              </li>
            </ul>
          </div>
        </div>

        <div class={styles.Section}>
          2016
          <hr></hr>
          <div class="publications">
            <ul>
              <li>
                <a class={styles.Title} href="https://ieeexplore.ieee.org/document/7861423" target="_blank"> SGAM business layer for a local flexibility market </a>
                <div class={styles.Authors}>M Pavlovic, T Gawron-Deutsch, C Neureiter, K Diwold</div>
                <div class={styles.Date}>CIRED Workshop 2016, 1-4</div>
              </li>
              <li>
                <a class={styles.Title} href="https://ieeexplore.ieee.org/document/7861423" target="_blank"> SGAM business layer for a local flexibility market </a>
                <div class={styles.Authors}>M Pavlovic, T Gawron-Deutsch, C Neureiter, K Diwold</div>
                <div class={styles.Date}>CIRED Workshop 2016, 1-4</div>
              </li>
            </ul>
          </div>
        </div>

      </Container>
    </div>
  );
};

export default Publications;
