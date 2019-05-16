import React, { useEffect } from "react"
import { TweenMax, Power2, TimelineMax } from "gsap/TweenMax"
import Puppy from "../../../static/puppy.svg"
import styles from "../styles.module.css"

const AnimatingWithEmotion = () => {
  useEffect(() => {
    const timeline = new TimelineMax({ paused: true, repeat: -1 })

    // eyes
    const leftEye = document.getElementById("eye-left")
    const rightEye = document.getElementById("eye-right")
    const leftSparkle = document.getElementById("sparkle-left")
    const rightSparkle = document.getElementById("sparkle-right")

    TweenMax.set(leftEye, { scale: 1, transformOrigin: "50% 100%" })
    TweenMax.set(rightEye, { scale: 1, transformOrigin: "50% 100%" })
    TweenMax.set(leftSparkle, { opacity: 1 })
    TweenMax.set(rightSparkle, { opacity: 1 })

    const blinkStartTime = 3
    const eyeBlinkDuration = 1
    const sparkleOpacityDuration = 0.2
    const blinkEndTime = 5

    timeline
      // close eyes
      .to(leftEye, eyeBlinkDuration, { scaleY: 0.1 }, `${blinkStartTime}`)
      .to(rightEye, eyeBlinkDuration, { scaleY: 0.1 }, `${blinkStartTime}`)
      .to(
        leftSparkle,
        sparkleOpacityDuration,
        { opacity: 0 },
        `${blinkStartTime}`
      )
      .to(
        rightSparkle,
        sparkleOpacityDuration,
        { opacity: 0 },
        `${blinkStartTime}`
      )

      .to(leftEye, eyeBlinkDuration, { scaleY: 1 }, `${blinkEndTime}`)
      .to(rightEye, eyeBlinkDuration, { scaleY: 1 }, `${blinkEndTime}`)
      .to(
        leftSparkle,
        sparkleOpacityDuration,
        { opacity: 1 },
        `${blinkEndTime + eyeBlinkDuration - sparkleOpacityDuration}`
      )
      .to(
        rightSparkle,
        sparkleOpacityDuration,
        { opacity: 1 },
        `${blinkEndTime + eyeBlinkDuration - sparkleOpacityDuration}`
      )

    timeline.play()
  }, [])

  return (
    <div className={styles.container}>
      <Puppy />
    </div>
  )
}

export default AnimatingWithEmotion
