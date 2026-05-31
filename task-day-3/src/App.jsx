import BottomNavbar from "./components/BottomNavbar"
import GridcontrolSection from "./components/GridcontrolSection"
import Navbar from "./components/Navbar"
import Threats from "./components/Threats"


function App() {
  return (
    <div className="bg-neutral-950 min-h-screen">
      {/* navbar  */}
      <nav className="md:hidden">
        <Navbar />
        {/* bottom navbar  */}
        <div className="fixed bottom-0 w-full">
          <BottomNavbar />
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4">
        <GridcontrolSection />
        <Threats />
      </main>

    </div>
  )
}

export default App