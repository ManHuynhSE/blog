
import React from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroselection/HeroSection'
import BlogPostCard from '../../components/blogpostcard/BlogPostCard'
import Loader from '../../components/loader/Loader.jsx'

function Home() {
    return (
        <Layout>
            <HeroSection></HeroSection>
            <BlogPostCard></BlogPostCard>
        </Layout>
    )
}

export default Home