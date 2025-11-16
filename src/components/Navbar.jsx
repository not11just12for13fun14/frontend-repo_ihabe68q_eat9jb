import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="text-2xl">🔧</span>
          <span className="font-bold text-lg">Plombier Indépendant</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#zones" className="hover:text-blue-600">Zones</a>
          <a href="#avis" className="hover:text-blue-600">Avis</a>
          <a href="#contact" className="px-3 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Devis gratuit</a>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <span className="text-2xl">☰</span>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-4 py-3 flex flex-col gap-3 text-gray-700">
            <a href="#services" onClick={() => setOpen(false)}>Services</a>
            <a href="#zones" onClick={() => setOpen(false)}>Zones</a>
            <a href="#avis" onClick={() => setOpen(false)}>Avis</a>
            <a href="#contact" onClick={() => setOpen(false)} className="px-3 py-2 rounded bg-blue-600 text-white text-center">Devis gratuit</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
