import { createBreakpoints } from '@solid-primitives/media';
import { A } from '@solidjs/router';
import { Component, createEffect, createSignal, Show } from 'solid-js';

import styles from './Header.module.scss';
import Container from './shared/Container';

const Header: Component = () => {
  const [menuOpen, setMenuOpen] = createSignal(false);
  const toggleMenu = () => setMenuOpen(!menuOpen());
  const [theme, setTheme] = createSignal('dark');
  const toggleTheme = () => setTheme(theme() === 'light' ? 'dark' : 'light');
  createEffect(() => {
    document.body.classList.remove('light');
    document.body.classList.remove('dark');
    document.body.classList.add(theme());
  });
  const screenSize = createBreakpoints({
    sm: '600px',
    md: '900px',
    lg: '1200px',
    xl: '1536px'
  });

  return (
    <header class={styles.Header}>
      <Container>
        <nav class={styles.Navbar}>
          <A href="/" class={styles.HomeLink}>mp</A>

          <div class={styles.LinksContainer}>
            <Show when={!screenSize.md}>
              <span class={styles.MenuIcon} onClick={toggleMenu}>
                <svg width="24" height="15" viewBox="0 0 1618 1000" classList={{ [styles.cross]: menuOpen() }}>
                  <rect class={styles.line1} x="50" y="50" width="1518" height="100" />
                  <rect class={styles.line2} x="50" y="450" width="1518" height="100" />
                  <rect class={styles.line3} x="50" y="850" width="1518" height="100" />
                </svg>
              </span>
            </Show>
            <div
              class={screenSize.md ? styles.Links : styles.PopupLinks}
              style={{ display: menuOpen() ? 'flex' : 'none' }}
              onClick={() => setMenuOpen(false)}
            >
              <A href="/">about</A>
              <A href="/news">news</A>
              <a href="https://medium.com/@majapavlo" target="_blank">blog</a>
              {/* <A href="/publications">publications</A> */}
              {/* <A href="/projects">projects</A> */}
              <button type="button" class={styles.ThemeButton} onClick={toggleTheme}>
                <span class="material-icons">
                  {theme() === 'light' ? 'dark_mode' : 'light_mode'}
                </span>
              </button>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
