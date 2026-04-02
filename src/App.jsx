import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Courses from './components/Courses'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Courses />
        <WhyUs />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
