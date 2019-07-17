import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
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

const contact = (node) => (
  <Layout>
    <SEO title="Contact US" />
    <h1>Contact US</h1>
    {node.data.allWordpressPost.edges.map((data, index) => (
        <div>
          <span dangerouslySetInnerHTML={{__html: data.node.excerpt}} />
        </div>
    ))}

    <div class="row">
      <div class="col-12">
        <form method="post" action="#">
          <div class="row">
            <div class="col-6 col-12-small">
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div class="col-6 col-12-small">
              <input type="text" name="email" id="email" placeholder="Email" />
            </div>
            <div class="col-12">
              <input type="text" name="subject" id="subject" placeholder="Subject" />
            </div>
            <div class="col-12">
              <textarea name="message" id="message" placeholder="Message"></textarea>
            </div>
            <div class="col-12">
              <ul class="actions">
                <li><input type="submit" value="Send Message" /></li>
                <li><input type="reset" value="Clear Form" class="alt" /></li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </div>

  </Layout>
)

export default contact
