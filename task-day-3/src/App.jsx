import BottomNavbar from "./components/BottomNavbar"
import Navbar from "./components/Navbar"


function App() {
  return (
    <div className="bg-neutral-950 min-h-screen">
      <header className="md:hidden">
        <Navbar />
      </header>
      <div className="md:hidden">
        <div className="absolute bottom-0 w-full">
          <BottomNavbar />
        </div>
      </div>
    </div>
  )
}

export default App