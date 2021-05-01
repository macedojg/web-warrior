import { GatsbyImage } from 'gatsby-plugin-image/dist/src/components/gatsby-image.browser'
import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../../styles/project-details.module.css'

export default function ProjectDetails() {
    return (
        <Layout>
            <div className={styles.details}>
                <h2>Title</h2>
                <h3>Stack</h3>
                <div className={styles.featured}>
                    {/* <GatsbyImage fluid={} /> */}
                </div>
                {/* <div className={styles.html} dangerouslySetInnerHTML={}/> */}
            </div>
        </Layout>
    )
}
