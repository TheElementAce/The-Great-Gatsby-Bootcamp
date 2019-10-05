import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'

// 
// Goal: Show list of posts on blog page
//
// 1. Query the title and date for each post in blog component
// 2. Render an ol on the page
// 3. Render a li with a nest h2 (title) and p (date) for each post
//    - "render an array of objects"
// 3. Test your work!
// ================================================================
// Goal: Link to blog posts
// 
// 1. Fetch the slug for posts
// 2. Use slug to generate a link to the post page
// 3. Test your work!
// ================================================================
// Goal: Render Contentful Posts
// 
// 1. Swap out the markdown query with the contentful query
// 2. Update the component to render the new data
//    - Don't worry if the link links to a non-existent page
// 3. Test your work!

const BlogPage = () => {
    // const data = useStaticQuery(graphql`
    //     query {
    //         allMarkdownRemark {
    //             edges {
    //                 node {
    //                     frontmatter {
    //                         title
    //                         date
    //                     }
    //                     fields {
    //                         slug
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `)
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (
                sort: {
                    fields: publishedDate,
                    order: DESC
                }
            ) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString:"MMMM Do, YYYY")
                    }
                }
            }
        }
    `)
    // const cleanedData = [
    //     data["allContenfulBlogPost"]["edges"][0].node,
    //     data["allContenfulBlogPost"]["edges"][1].node
    // ]
    const cleanedData = [
        data.allContentfulBlogPost.edges[0].node,
        data.allContentfulBlogPost.edges[1].node
    ]
    console.log(cleanedData);
    const listItems = cleanedData.map((element, i) => {
        return (
            <li className={blogStyles.post} key={i.toString() + "-li"}>
                <Link to={`/blog/${element.slug}`}>
                <h2 key={i.toString() + "-h2"}>{element.title}</h2>
                <p key={i.toString() + "-p"}>{element.publishedDate}</p>
                </Link>
            </li>
        )
    })

    return (
        <Layout>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
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