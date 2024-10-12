import About from "./components/About";
import FeaturedProjects from "./components/FeaturedProjects";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Recommendations from "./components/Recommendations";
import Tools from "./components/Tools";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Tools />
            <FeaturedProjects />
            <Recommendations />
            <Footer />
        </>
    );
}

export default App;
