import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import FeaturedWork from '../sections/FeaturedWork'
import About from '../sections/About'
import Projects from '../sections/Projects'
import Contact from '../sections/Contact'

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedWork />
        <Projects />
        <About />
        <Contact />
      </main>
    </>
  )
}

export default Home