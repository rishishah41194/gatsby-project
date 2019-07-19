import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/global.css"
export const pageQuery = graphql` {
  allWordpressPost {
    edges {
      node {
        slug
        title
        excerpt
        _links {
          wp_attachment {
            href
          }
        }
      }
    }
  }
} `

const blogs = (node) => (
  <Layout>
    {console.log( node.data.allWordpressPost.edges )}
    <SEO title="Contact US" />
    <h1>Blogs</h1>
    <div className="container">
      <div class="row">
        {node.data.allWordpressPost.edges.map((data, index) => (
          <div class="col-4 col-6-medium col-12-small">
            <article class="box style2">
            <Link to={`${data.node.slug}`} className="clear-fix">
              {/* <a href="#" class="image featured"></a> */}
              <h3
                dangerouslySetInnerHTML={{
                  __html: data.node.title,
                }}
              />
              </Link>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.node.excerpt,
                }}
              />
            </article>
          </div>
        ))}
      </div>
    </div>
  </Layout>
)

export default blogs
