import React from 'react'
import Navbar from './component/Navbar'
import Section from './component/Section'
import Brand from './component/Brand'
import About from './component/About'
import Work from './component/Work'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Section />
            <Brand/>
            <About/>
            <Work/>

        </div>
    )
}

export default Home