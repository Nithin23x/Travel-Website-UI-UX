import { Navbar,Hero,Camp, Guide, Features,Footer,GetApp } from "./components"

function App() {
  

  return (
   <>
   <h4>Hello Travels website</h4>
    <Navbar />
    <main className="relative overflow-hidden"> 
        <Hero />
        <Camp />
        <Guide /> 
        <Features />
        <GetApp />
    </main>
    <Footer /> 
   </>
  )
}

export default App
