import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Testimonial from "./components/testimonials/Testimonial";
import Works from "./components/works/Works";
function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Works></Works>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
