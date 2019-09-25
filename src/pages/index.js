import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

// We're using React to build a component and ship it to Gatsby
// to display to the user in the browser
const IndexPage = () => {
    return (
        <Layout>
            <h1>Hello.</h1>
            <h2>I'm Ritchel, a full-stack developer living in beautiful North Caolina</h2>
            <p>Need a developer? <Link to='/contact'>Contact Me</Link></p>
        </Layout>
    )
}

// Goal: Add a couple of links to the site
//
// 1. On contact page, link to Twitter profile
// 2. On about page, link to the contact page
// 3. Test your work!

export default IndexPage