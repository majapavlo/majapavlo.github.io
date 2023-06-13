import type { Component } from 'solid-js';

import Container from './shared/Container';
import styles from './Footer.module.scss';

const Footer: Component = () => {
  return (
    <footer class={styles.Footer}>
      {/* <Container>
        <div class={styles.Container}>
          <div class={styles.Links}>
            <a href="https://github.com/majapavlo" target="_blank">
              <svg><use href="/src/assets/minima-social-icons.svg#github"></use></svg>
            </a>
            <a href="https://www.linkedin.com/in/maja-pavlovic/" target="_blank">
              <svg><use href="/src/assets/minima-social-icons.svg#linkedin"></use></svg>
            </a>
            <a href="https://twitter.com/maja_pavlo" target="_blank">
              <svg><use href="/src/assets/minima-social-icons.svg#twitter"></use></svg>
            </a>
            <a href="https://scholar.google.com/citations?user=NEa-wIIAAAAJ&hl=en" target="_blank">
              <svg><use href="/src/assets/minima-social-icons.svg#scholar"></use></svg>
            </a>
          </div>
        </div>
      </Container> */}
    </footer>
  );
};

export default Footer;
