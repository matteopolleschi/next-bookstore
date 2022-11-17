import MobileNav from "./components/NavBar"
import TopBar from "./components/TopBar"

export default function Home() {
  return (
    <div className="h-[1400px]">
      <TopBar />
      <MobileNav />
    </div>
  )
}
