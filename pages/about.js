import Footer from '@/components/common/Footer'
import Head from 'next/head'
import Banner from '@/components/common/Banner'
import AboutFeatures from '@/components/about/AboutFeatures'
import AboutFaq from '@/components/about/AboutFaq'
import AboutGallery from '@/components/about/AboutGallery'
import AboutGuides from '@/components/about/AboutGuides'

const About = () => {
  return (
    <>
      <Head>
        <title>About us</title>
      </Head>
      <Banner
        image='/images/fabian-quintero-UWQP2mh5YJI-unsplash.jpg'
        title='About us'
      />
      <AboutFeatures />
      <AboutGallery />
      <AboutGuides />
      <AboutFaq />
      <Footer />
    </>
  )
}

export default About
