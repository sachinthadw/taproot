import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Approach from './components/Approach';
import Team from './components/Team';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Approach />
      <Team />
      <Contact />
    </Layout>
  );
}

export default App;
