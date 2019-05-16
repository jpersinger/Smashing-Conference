import React, { useEffect } from "react"
import { TweenMax, Power2, TimelineMax } from "gsap/TweenMax"
import Puppy from "../../static/puppy.svg"
import styles from "./styles.module.css"

const AnimatingWithEmotion = () => {
  useEffect(() => {
    const timeline = new TimelineMax({ paused: true, repeat: -1 })

    // eyes
    const leftEye = document.getElementById("eye-left")
    const rightEye = document.getElementById("eye-right")
    const leftSparkle = document.getElementById("sparkle-left")
    const rightSparkle = document.getElementById("sparkle-right")

    timeline
      // close eyes
      .to(leftEye, 0.5, { scaleY: 0.1 }, "0")

    timeline.play()
  }, [])

  return (
    <div className={styles.container}>
      <Puppy />
    </div>
  )
}

export default AnimatingWithEmotion
