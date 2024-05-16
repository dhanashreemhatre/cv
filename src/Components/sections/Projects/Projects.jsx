import React from 'react'
import styles from './projects.module.css'
import project_img from './../../assets/images/project-images/chromatic-website/robo-lab-page.png'
function Projects() {
  return (
    <div>
    <div className={styles.wrapper}>
    <div className={styles.card_container}>
        <div className={styles.img}>
            <img src={project_img} alt=""/>
        </div>
        <h2>Computer Brand</h2>
        <p>This is was a good product. regarding its quality it was finest.</p>
    </div>
    <div className={styles.card_container}>
        <div className={styles.img}>
            <img src={project_img} alt=""/>
        </div>
        <h2>Computer Brand</h2>
        <p>This is was a good product. regarding its quality it was finest.</p>
    </div>
    <div className={styles.card_container}>
        <div className={styles.img}>
            <img src={project_img} alt=""/>
        </div>
        <h2>Computer Brand</h2>
        <p>This is was a good product. regarding its quality it was finest.</p>
    </div>
</div>
</div>
  )
}

export default Projects