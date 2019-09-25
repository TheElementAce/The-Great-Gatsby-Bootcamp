import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const ContactPage = () => {
    return (
        <Layout>
            <h1>Contact Me</h1>
            <h4>You can contact me at:</h4>
            <ul>
                <li>Phone Number: 919-820-9155</li>
                <li>Twitter: <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/Dmannsr25">@Dmannsr25</a></li>
            </ul>
            <br />
            <p><Link to="/">Return to Home Page</Link></p>
            <p><Link to="/about">Find Out More About Me</Link></p>
            <p><Link to="/blog">Read Some Awesome Content</Link></p>
        </Layout>
    )
}

export default ContactPage