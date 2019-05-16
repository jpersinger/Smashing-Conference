import React from "react"
import {
  HEADLINE,
  FIRST_PARAGRAPH,
  WHY_CHOOSE_US_SECTION,
  ARTICLE,
  IMAGE_CREDIT,
} from "../../fixtures/grid"
import styles from "./styles.module.css"

const GridSample = () => (
  <div className={styles.container}>
    <h1 className={styles.headline}>{HEADLINE}</h1>
    <p className={styles.leadingParagraph}>{FIRST_PARAGRAPH}</p>
    <div className={styles.whyChooseUsBox}>
      <div>
        <h2 className={styles.whyChooseUsHeadline}>
          {WHY_CHOOSE_US_SECTION.headline}
        </h2>
        <ul className={styles.whyChooseUsList}>
          {WHY_CHOOSE_US_SECTION.items.map(item => (
            <li className={styles.whyChooseUsListItem}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
    <div className={styles.image} />
    <p className={styles.imageCredit}>{IMAGE_CREDIT}</p>
    <div className={styles.redBox} />
    <article className={styles.article}>{ARTICLE}</article>
  </div>
)

export default GridSample
