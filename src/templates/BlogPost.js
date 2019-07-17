// src/templates/BlogPost.js
import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

export const pageQuery = graphql `query User($slug: String!) {
    wordpressPost(slug: {eq: $slug}) {
      slug
      title
      content
    }
}`;


const BlogPostTemplate = (node) => (
  <Layout>
    <div>
      {node.data.wordpressPost.title}
      {node.data.wordpressPost.content}
    </div>
  </Layout>
  
)

export default BlogPostTemplate