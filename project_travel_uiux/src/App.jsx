import { Navbar,Hero,Camp, Guide, Features,Footer,GetApp } from "./components"

function App() {
  

  return (
   <>
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
