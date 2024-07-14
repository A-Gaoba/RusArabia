import './App.css'
import AboutUs from './components/AboutUs.jsx'
import ContactUs from './components/contact.jsx'
import Events from './components/Events.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Home.jsx'
import Hotels from './components/Hotels.jsx'

function App() {

  return (
    <div dir="rtl" >
      <Hero />
      <AboutUs />
      <Hotels />
      <Events />
      <ContactUs />
      <Footer />
      </div>
  )
}

export default App
