import BottomNavbar from "./components/BottomNavbar"
import GridcontrolSection from "./components/GridcontrolSection"
import Navbar from "./components/Navbar"


function App() {
  return (
    <div className="bg-neutral-950 min-h-screen">
      {/* navbar  */}
      <nav className="md:hidden">
        <Navbar />
        {/* bottom navbar  */}
        <div className="absolute bottom-0 w-full">
          <BottomNavbar />
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4">
        <GridcontrolSection />
      </main>

    </div>
  )
}

export default App