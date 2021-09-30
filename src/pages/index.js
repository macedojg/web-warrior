import { graphql, Link } from "gatsby"
import React from "react"
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
import { StaticImage } from "gatsby-plugin-image" 

export default function Home({ data }) {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Mars</p>
          <Link className={styles.btn} to="/projects">My Portfolio Project</Link>
        </div>
        <StaticImage src="../images/banner.png" alt="site banner" placeholder="blurred" style={{ maxWidth: '100%'}}/>
      </section>
    </Layout>
  )
}

export const query = graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
