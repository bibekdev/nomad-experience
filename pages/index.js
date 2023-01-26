import Footer from '@/components/common/Footer'
import GuideSection from '@/components/home/GuideSection'
import HomeAdventureSection from '@/components/home/HomeAdventureSection'
import HomeBanner from '@/components/home/HomeBanner'
import ImageGallerySection from '@/components/home/ImageGallerySection'
import LatestBlogSection from '@/components/home/LatestBlogSection'
import LoyaltySection from '@/components/home/LoyaltySection'
import ReviewSection from '@/components/home/ReviewSection'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <HomeBanner />
      <LoyaltySection />
      <HomeAdventureSection />
      <ImageGallerySection />
      <GuideSection />
      <LatestBlogSection />
      <ReviewSection />
      <Footer />
    </>
  )
}
