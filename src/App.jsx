import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Services />
      <section id="zones" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Zones d\'intervention</h2>
          <p className="text-gray-700">Paris et proche banlieue (75, 92, 93, 94). Déplacement rapide.</p>
        </div>
      </section>
      <section id="avis" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Avis clients</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
              name: 'Sophie', text: 'Intervention rapide pour une fuite. Très pro et prix clair.'
            }, {
              name: 'Karim', text: 'Chauffe-eau remplacé le jour même. Je recommande !'
            }, {
              name: 'Laura', text: 'Débouchage nickel, explications et travail propre.'
            }].map((a) => (
              <div key={a.name} className="border rounded-xl p-5 bg-white shadow-sm">
                <p className="text-gray-700">“{a.text}”</p>
                <p className="mt-3 text-sm text-gray-500">— {a.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Contact />
      <footer className="border-t bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Plombier Indépendant — Tous droits réservés</p>
          <a href="/test" className="hover:text-blue-600">Statut du site</a>
        </div>
      </footer>
    </div>
  )
}

export default App
