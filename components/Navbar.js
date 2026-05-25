export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 shadow-md bg-white sticky top-0 z-50">

      <h1 className="text-3xl font-bold text-blue-700">
        ChillWall
      </h1>

      <div className="space-x-6 text-lg hidden md:block">
        <a href="#">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

    </nav>
  )
}