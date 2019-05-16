import React from "react"
import styles from "./styles.module.css"

const TriggersDemo = () => (
  <>
    <h1>Layout</h1>
    <div className={styles.container}>
      {Array(4)
        .fill("")
        .map(() => (
          <div className={`${styles.item} ${styles.layoutItem}`} />
        ))}
    </div>

    <h1>Paint</h1>
    <div className={styles.container}>
      {Array(4)
        .fill("")
        .map(() => (
          <div className={`${styles.item} ${styles.paintItem}`} />
        ))}
    </div>

    <h1>Compositing</h1>
    <div className={styles.container}>
      {Array(4)
        .fill("")
        .map(() => (
          <div className={`${styles.item} ${styles.compositingItem}`} />
        ))}
    </div>
  </>
)

export default TriggersDemo
