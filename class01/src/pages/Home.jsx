import React from 'react'
import HeaderSection from '../components/HeaderSection'
import AboutSection from '../components/AboutSection'
import ServiceSection from '../components/ServiceSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactBanner from '../components/ContactBanner'

const Home = () => {
  return (
    <>
      <HeaderSection />
      <AboutSection />
      <ServiceSection />
      <ProjectsSection />
      <ContactBanner />
    </>
  )
}

export default Home