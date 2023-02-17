import './App.css'
import Home from './component/Home'
import About from './component/About'
import Skills from './component/Skills'
import Qualification from './component/Qualification'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Work from './component/Work'
function App() {
  return (
    <div className="App">
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Work />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
