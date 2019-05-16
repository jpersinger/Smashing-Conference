import React from "react"
import { OptimizedBlogs } from "../../../fixtures/effortlessPerformance"
import styles from "./styles.module.css"

const EffortlessPerformance = () => (
  <div>
    {OptimizedBlogs.map(({ title, author, date, image, post }) => (
      <article className={styles.article}>
        <h1 className={styles.h1}>{title}</h1>
        <h2 className={styles.h2}>
          {author} {date}
        </h2>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={image} />
        </div>
        <p className={styles.post}>{post}</p>
      </article>
    ))}
  </div>
)

export default EffortlessPerformance
