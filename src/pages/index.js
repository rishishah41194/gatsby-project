import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../styles/global.css"
export const pageQuery = graphql` {
  allWordpressPost(sort: { fields: [date] }) {
    edges {
      node {
        title
        excerpt
        slug
      }
    }
  }
} `

const IndexPage = (node) => (
  <Layout style={{minHeight: `calc(100vh - 247px)`}}>
  {/* {console.log(node.data.allWordpressPost.edges)} */}
    <SEO title="Home" />
    <article id="top" class="wrapper style1">
      <div class="container">
        <div class="row">
          <div class="col-4 col-5-large col-12-medium">
            <span class="image fit"><Image /></span>
          </div>
          <div class="col-8 col-7-large col-12-medium">
            <header style={{ marginLeft:80 }}>
            <h1>Hi. I'm <strong>Jane Doe</strong>.</h1>
            </header>
            <p style={{ marginLeft:80 }}>And this is <strong>Miniport</strong>, a free, fully responsive HTML5 site template designed by <a href="#">AJ</a> for <a href="#">HTML5 UP</a> &amp; released under the <a href="#">CCA license</a>.</p>
          </div>
        </div>
      </div>
    </article>
  </Layout>
)



export default IndexPage
