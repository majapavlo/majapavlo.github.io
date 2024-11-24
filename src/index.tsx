/* @refresh reload */
import { Route, Router, Routes } from '@solidjs/router';
import type { Component } from 'solid-js';
import { render } from 'solid-js/web';

import './index.scss';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Projects from './Projects';
import News from './News';
import Publications from './Publications';
import Climbing from './Climbing';
// import Link from './Links';

const Root: Component = () => {
  return (
    <Router>
      <Header />

      {/* this sets the height of the main content to 100vh (100% of the total view height, minus the height of the header and footer). We need this so that when scrolling, we scroll within that main view instead of the whole page. Without this, we would scroll past the header/footer instead of having them show at all times. */}
      {/* <main style={{ 'min-height': `calc(100vh - ${49 + 120}px)` }} class="main-article">*/}
      <main style={{ 'min-height': `calc(100vh - ${49 + 0}px)` }} class="main-article">
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/publications" component={Publications} />
          <Route path="/climbing" component={Climbing} />
          <Route path="/news" component={News} />
          {/* <Route path="/links" component={Link} /> */}
        </Routes>
      </main>

      <Footer />
    </Router>
  );
};

render(() => <Root />, document.getElementById('root')!);
