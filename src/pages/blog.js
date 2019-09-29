import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'

// 
// Goal: Show list of posts on blog page
//
// 1. Query the title and date for each post in blog component
// 2. Render an ol on the page
// 3. Render a li with a nest h2 (title) and p (date) for each post
//    - "render an array of objects"
// 3. Test your work!

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                    }
                }
            }
        }
    `)
    const cleanedData = [
        data.allMarkdownRemark.edges[0].node.frontmatter,
        data.allMarkdownRemark.edges[1].node.frontmatter,
    ]
    const listItems = cleanedData.map((element, i) => {
        return (
            <li key={i.toString() + "-li"}>
                <h2 key={i.toString() + "-h2"}>{element.title}</h2>
                <p key={i.toString() + "-p"}>{element.date}</p>
            </li>
        )
    })

    return (
        <Layout>
            <h1>Blog</h1>
            <ol>
                {listItems}
            </ol>
            <p><Link to="/">Return to Home Page</Link></p>
            <p><Link to="/about">Find Out More About Me</Link></p>
            <p><Link to="/contact">Contact Me</Link></p>
            {/*<p><Link to="/blog">Read Some Awesome Content</Link></p>*/}
        </Layout>
    )
}

export default BlogPage

// Goal: Create an about and contact page
//
// 1. Create an about page. Include a page title and bio.
// 2. Create a contact page. Include a page title and contact details.
// 3. Test your work!