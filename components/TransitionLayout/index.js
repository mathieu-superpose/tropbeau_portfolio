import { memo, useEffect, useState } from "react";

import { Wavebottom } from '../waves/Wavebottom'
import { Wavetop } from '../waves/Wavetop'
import styles from './TransitionLayout.module.scss'
import { useRouter } from 'next/router'

const displayPath = (path) => path.match(/(?<=\/)[a-z]+/)

export default function TransitionLayout({ children }) {
  const [firstLoad, setFirstLoad] = useState(true)
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("fadeOut");
  const router = useRouter()

  useEffect(() => {
    setTransitionStage("fadeIn");
  }, []);

  useEffect(() => {
    if (children !== displayChildren) setTransitionStage("fadeOut");
  }, [children, setDisplayChildren, displayChildren]);

  useEffect(() => {
    transitionStage === "fadeIn" && setTimeout(() => setFirstLoad(false), 1000);
  }, [transitionStage])

  return (
    <div className={styles.container}>
      <div
        onTransitionEnd={() => {
          if (transitionStage === "fadeOut") {
            setDisplayChildren(children);
            setTransitionStage("fadeIn");
          }
        }}
        className={`${styles.content} ${styles[transitionStage]}`}
      >
        {displayChildren}
      </div>
      <div className={firstLoad ? styles.loader__firstload : transitionStage === "fadeOut" ? styles.loader__fadeOut : styles.loader__fadeIn}>
        <Wavetop styleClass={styles.ontop} />
        { firstLoad && <p className={styles.path}>Trop Beau Site</p> }
        { !firstLoad && <p className={styles.path}>{router.pathname === "/" ? "Trop Beau Site" : displayPath(router.pathname) }</p> }
        <Wavetop styleClass={styles.onbottom} />
      </div>
    </div>
  );
}
