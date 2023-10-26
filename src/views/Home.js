import React from 'react'
import Header from '../components/Header'
import ShowcaseSection from '../components/ShowcaseSection'
import SponsorSection from '../components/SponsorSection'
import Footer from '../components/Footer'
import FeatureSection from '../components/FeatureSection'
import AboutCompanySection from '../components/AboutCompanySection'
import ServiceSection from '../components/ServiceSection'
import ChooseUsSection from '../components/ChooseUsSection'
import ProjectAndCaseSection from '../components/ProjectAndCaseSection'
import MeetOurTeamSection from '../components/MeetOurTeamSection'
import TestimonialSection from '../components/TestimonialSection'
import ArticleNewsSection from '../components/ArticleNewsSection'
import NewsletterSection from '../components/NewsletterSection'


const Home = () => {
  return (
    <>
          <Header />  
          <ShowcaseSection />
          <SponsorSection />
          <FeatureSection />
          <AboutCompanySection />
          <ServiceSection />
          <ChooseUsSection />
          <ProjectAndCaseSection />
          <MeetOurTeamSection />
          <TestimonialSection />
          <ArticleNewsSection />
          <NewsletterSection />
          <Footer />  
    </>
  )
}

export default Home