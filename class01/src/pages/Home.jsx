import React from 'react'
import HeaderSection from '../components/HeaderSection'
import AboutSection from '../components/AboutSection'
import ServiceSection from '../components/ServiceSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactBanner from '../components/ContactBanner'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <HeaderSection />
      <AboutSection />
      <ServiceSection />
      <ProjectsSection />
      <ContactBanner />
      <Footer />
    </>
  )
}

export default Home