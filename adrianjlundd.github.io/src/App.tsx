import Layout from "./components/Layout";
import Hero from "./components/Hero";

  export default function App() {
    return (
      <Layout>
        <Hero
        name="Adrian Jacobsen Lund"
        role="Computer Science student @ NTNU"
        tagline="I build practical software with clean UI and a bit of ML."
        githubUrl="https://github.com/adrianjlundd"
        linkedinUrl="https://www.linkedin.com/in/adrianjlund/"
        />
        
      </Layout>
    )
  }