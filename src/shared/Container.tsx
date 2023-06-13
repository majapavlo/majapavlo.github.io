import type { Component, JSX } from 'solid-js';

import styles from './Container.module.scss';

const Container: Component<{ children: JSX.Element }> = (props) => {
  return (
    <div class={styles.Container}>
      {props.children}
    </div>
  );
};

export default Container;
