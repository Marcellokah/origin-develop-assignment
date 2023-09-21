import { Hero, Navbar, Image, About, Slider, Info, Buttons, Footer } from './components';

const App = () => {
  return (
      <div className="relative z-0 bg-primary w-screen">
        <Navbar />
        <Hero />
        <Image />
        <About />
        <Slider />
        <Info />
        <Buttons />
        <Footer />
      </div>
  )
}

export default App
