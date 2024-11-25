import { createSignal, type Component } from 'solid-js';
import { createBreakpoints } from "@solid-primitives/media";
import { createMasonry } from '@solid-primitives/masonry';
import { createElementSize } from '@solid-primitives/resize-observer';

import Container from './shared/Container';
import styles from './Climbing.module.scss';
import chorro1 from './assets/climb/chorro1.jpg';
import bird from './assets/climb/bird.jpg';
import croatia_pillar from './assets/climb/croatia_pillar.jpg';
import pov from './assets/climb/pov.jpg';

const urls = [
  chorro1,
  bird,
  croatia_pillar,
  pov,
];

const images = urls.map(url => {
  const [target, setTarget] = createSignal<HTMLElement>();
  const img = <img src={url} ref={setTarget} style={{ width: "100%" }} />;

  return [
    img,
    createElementSize(target)
  ] as const;
});

const br = createBreakpoints({
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
});

const getColumns = () => {
  if (br.xl) return 2;
  if (br.lg) return 2;
  if (br.md) return 1;
  if (br.sm) return 1;
  return 1;
};

const getRows = () => {
  if (br.xl) return 4;
  if (br.lg) return 4;
  if (br.md) return 10;
  if (br.sm) return 10;
  return urls.length;
};

const gap = 15;

const masonry = createMasonry({
  columns: getColumns,
  source: () => images,
  mapHeight: ([_, size]) => () => size?.height ?? 0,
  mapElement: data =>
    <div style={{
      height: `${data.height() + data.margin()}px`,
      order: data.order(),
      width: `calc((100% - ${gap * (getColumns() - 1)}px) / ${getColumns()})`,
    }}>
      {data.source[0]}
    </div>
});

const Climbing: Component = () => {
  return (
    <div class={styles.Climbing}>
      <Container>
        <div style={{
          display: "flex",
          "flex-direction": "column",
          "flex-wrap": "wrap",
          "align-items": "stretch",
          gap: `${gap}px`,
          height: `${masonry.height() + gap * (getRows() - 1)}px`
        }}>
          {masonry()}
        </div>
      </Container>
    </div>
  );
};
export default Climbing;
