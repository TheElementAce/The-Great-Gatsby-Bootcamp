import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const BlogPage = () => {
    return (
        <Layout>
            <h1>Blog</h1>
            <p>Posts will show up here later on.</p>
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