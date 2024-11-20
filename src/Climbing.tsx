import { createSignal, type Component } from 'solid-js';

import styles from './Climbing.module.scss';
import Container from './shared/Container';


// const Climbing: Component = () => {
//   return (
//     <div class={styles.Climbing}>
//       <div class={styles.Container}>
//         <div class={styles.ClimbGrid}>
//           <div class={styles.ClimbImg}>
//             <img src="src/assets/pov.jpg" class={styles.Image} alt="Climbing 1" />
//           </div>
//           <div class={styles.ClimbImg}>
//             <img src="src/assets/sea.png" class={styles.Image} alt="Climbing 2" />
//           </div>
//           {/* <div class={`${styles.ClimbImg} ${styles.SpanImg}`}>
//             <img src="src/assets/bird.jpg" class={styles.Image} alt="Climbing 3" />
//           </div> */}
//           <div class={styles.ClimbImg}>
//             <img src="src/assets/kerze.png" class={styles.Image} alt="Climbing 4" />
//           </div>
//         </div>
//       </div>
//     </div>
//     // <div class={styles.Climbing}>
//     //   <div class={styles.Container}>
//     //     <div class={styles.ClimbGrid}>
//     //       <div class={styles.ClimbImg}>
//     //         <img src="src/assets/pov.jpg" class={styles.Image} alt="Climbing 1" />
//     //       </div>
//     //       <div class={styles.ClimbImg}>
//     //         <img src="src/assets/pov.jpg" class={styles.Image} alt="Climbing 1" />
//     //       </div>
//     //       <div class={styles.ClimbImg}>
//     //         <img src="src/assets/bird.jpg" class={styles.Image} alt="Climbing 2" />
//     //       </div>
//     //       <div class={styles.ClimbImg}>
//     //         <img src={pic1} class={styles.Image} alt="Climbing 3" />
//     //       </div>
//     //       <div class={styles.ClimbImg}>
//     //         <img src={pic1} class={styles.Image} alt="Climbing 4" />
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>

//   );
// };

// export default Climbing;


import { createBreakpoints } from "@solid-primitives/media";
import { createMasonry } from '@solid-primitives/masonry';
import { createElementSize } from '@solid-primitives/resize-observer';

const [source, setSource] = createSignal([
  "src/assets/climb.jpg",
  // "src/assets/bird.jpg",
  // "src/assets/kerze.png",
  // "src/assets/pov.jpg",
  // "src/assets/sea.png",
  // "src/assets/pov.jpg",
  // "src/assets/sea.png",
  // "src/assets/pov.jpg",
  // "src/assets/sea.png"
].map(url => {
  let element!: HTMLImageElement;
  const img = <img src={url} ref={element} style={{ width: "100%" }} />;

  return [
    img,
    createElementSize(element)
  ] as const;
}));

const br = createBreakpoints({
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
});

const getColumns = () => {
  return 2;
  if (br.xl) return 6;
  if (br.lg) return 4;
  if (br.md) return 3;
  if (br.sm) return 2;
  return 1;
};

const masonry = createMasonry({
  columns: getColumns,
  source,
  mapHeight: ([_, size]) => () => size.height,
  mapElement: data => (
    <div style={{
      height: `${data.height()}px`,
      order: data.order(),
      "margin-bottom": `${data.margin()}px`,
      width: `${100 / getColumns()}%`,
    }}>
      {data.source[0]}
    </div>
  )
});

const Climbing: Component = () => {
  return (
    <Container>
      <div style={{
        // The masonry should be rendered in a flex container with the following styles:
        display: "flex",
        "flex-direction": "column",
        "flex-wrap": "wrap",
        // align-items: stretch; is not required, but it will make items fill the full width of the container.
        "align-items": "stretch",
        gap: "10px",
        // The height of the container should be limited to force the items to wrap.
        height: `${masonry.height()}px`
      }}>
        {masonry()}
      </div>
    </Container>
  );
};
export default Climbing;
