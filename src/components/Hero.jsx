function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-white" />
      <div className="relative max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Dépannage plomberie rapide, transparent et garanti
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            Fuites, débouchage, chauffe-eau, installations et rénovations. Intervention 7j/7, devis gratuit et prix annoncés à l’avance.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex justify-center items-center px-5 py-3 rounded bg-blue-600 text-white hover:bg-blue-700">
              Demander un devis
            </a>
            <a href="#services" className="inline-flex justify-center items-center px-5 py-3 rounded border border-gray-300 text-gray-700 hover:bg-gray-50">
              Voir les services
            </a>
          </div>
          <div className="mt-6 text-sm text-gray-600">
            <span className="inline-flex items-center gap-2 mr-4">✅ Déplacement rapide</span>
            <span className="inline-flex items-center gap-2 mr-4">✅ Agréé assurances</span>
            <span className="inline-flex items-center gap-2">✅ Garantie main-d’œuvre</span>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-2xl border bg-white p-4 shadow-xl">
            <img src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1600&auto=format&fit=crop" alt="Plombier en intervention" className="rounded-xl object-cover w-full h-72" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
