import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <h3>Ritchel Cousar Jr. - The Entrepreneur Who Will Invent the Hoverboard</h3>
            <br />
            <p>
                To many people, I'm just a student at NCSU. Have been for a long time.<br />
                If you ask me though, I've been a student for too long. To fix that, I'm using<br />
                my determination to build a skillset that will allow me to become a web developer.<br />
                Why? Because I can enjoy what I do while I earn money. That's the goal. Life will be<br />
                great. But that's not all. I need to be in a position to create things and change<br />
                things. I need money to do that. Web developers make a salary that is much more than<br />
                what I actually need. I'll be using my expendable income to support my ventures until<br />
                they make money on their own!
            </p>
            <p><Link to="/">Return to Home Page</Link></p>
            {/*<p><Link to="/about">Find Out More About Me</Link></p>*/}
            <p><Link to="/blog">Read Some Awesome Content</Link></p>
            <p><Link to="/contact">Contact Me</Link></p>
        </Layout>
    )
}

export default AboutPage