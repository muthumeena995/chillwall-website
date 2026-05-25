import Navbar from '../components/Navbar'
import ImageSlider from '../components/ImageSlider'
//import Hero from '../components/Hero'
import Services from '../components/Services'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export default function Home() {
  return (
    <main>

      <Navbar />
      <ImageSlider />
      {/* <Hero /> */}
      <Services />
      <Footer />
      <WhatsAppButton />

    </main>
  )
}