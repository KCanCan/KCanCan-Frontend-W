import React from "react";
import { animated, useSpring } from "react-spring";
import styles from "../styles/ChartAnimate.module.css";

const START_WIDTH = "500px";
const BASE = 50;
const RANGE = 450;

export default function ChartAnimate() {
  const props1 = useSpring({
    from: { width: START_WIDTH },
    to: async (next) => {
      while (1) {
        await next({ width: BASE + parseInt(RANGE * Math.random()) + "px" });
      }
    },
  });

  const props2 = useSpring({
    from: { width: START_WIDTH },
    to: async (next) => {
      while (1) {
        await next({ width: BASE + parseInt(RANGE * Math.random()) + "px" });
      }
    },
  });

  const props3 = useSpring({
    from: { width: START_WIDTH },
    to: async (next) => {
      while (1) {
        await next({ width: BASE + parseInt(RANGE * Math.random()) + "px" });
      }
    },
  });

  const props4 = useSpring({
    from: { width: START_WIDTH },
    to: async (next) => {
      while (1) {
        await next({ width: BASE + parseInt(RANGE * Math.random()) + "px" });
      }
    },
  });

  const props5 = useSpring({
    from: { width: START_WIDTH },
    to: async (next) => {
      while (1) {
        await next({ width: BASE + parseInt(RANGE * Math.random()) + "px" });
      }
    },
  });
  return (
    <div className={styles.container}>
      <div className={styles.box_wrapper}>
        <animated.div className={styles.box} style={props1} />
        <animated.div className={styles.box} style={props2} />
        <animated.div className={styles.box} style={props3} />
        <animated.div className={styles.box} style={props4} />
        <animated.div className={styles.box} style={props5} />
      </div>
    </div>
  );
}
