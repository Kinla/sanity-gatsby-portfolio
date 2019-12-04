import React from "react"
import { Link, graphql } from "gatsby"
import Image  from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  {
    allSanityProject {
      edges{
        node {
          title
          description
          slug {
            current
          }
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`;

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>My Portfolio</h1>
    <ul style={{ listStyle: 'none', display: 'flex', alignItems: 'space-between'}}>
      {data.allSanityProject.edges.map(({node: project}) => {
        return (
        <li key={project.slug.current} style={{ flex: '1 45%', maxWidth: '45%', padding: '0', margin: '1rem'}}>
          <h2 style={{fontSize: '24px'}}>{project.title}</h2>
          <Image fluid={project.image.asset.fluid} alt={project.title} />
          <p style={{marginTop: '0.5rem'}}>{project.description}</p>
          <Link to={project.slug.current}>See project details</Link>
        </li>          
        )
      })}
    </ul>
  </Layout>
)

export default IndexPage
