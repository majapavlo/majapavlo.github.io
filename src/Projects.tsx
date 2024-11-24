import type { Component } from 'solid-js';

import styles from './Projects.module.scss';
import Container from './shared/Container';
import trees from './assets/climb/pov.jpg';

const Projects: Component = () => {
  return (
    <div class={styles.Projects}>
      <Container>
        <h2>Projects</h2>

        <div class={styles.Section}>
          <h3>Title 1</h3>
          <hr></hr>
          <div class={styles.Cards}>
            <div class={styles.Card}>
              <img class={styles.CardImage} src={trees} />
              <div class={styles.CardTitle}>
                My Project
              </div>
              <div class={styles.CardDescription}>
                blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
              </div>
            </div>
            <div class={styles.Card}>
              <img class={styles.CardImage} src={trees} />
              <div class={styles.CardTitle}>
                My Project
              </div>
              <div class={styles.CardDescription}>
                blah blah blah
              </div>
            </div>
          </div>
        </div>
        <div class={styles.Section}>
          <h3>Title 2</h3>
          <hr></hr>
          <div class={styles.Cards}>
            <div class={styles.Card}>
              <img class={styles.CardImage} src={trees} />
              <div class={styles.CardTitle}>
                My Project
              </div>
              <div class={styles.CardDescription}>
                blah blah blah
              </div>
            </div>
            <div class={styles.Card}>
              <img class={styles.CardImage} src={trees} />
              <div class={styles.CardTitle}>
                My Project
              </div>
              <div class={styles.CardDescription}>
                blah blah blah
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
