function Services() {
  const items = [
    { title: 'Dépannage & fuites', desc: 'Recherche et réparation de fuites, joints, robinets, WC, lavabo.' },
    { title: 'Débouchage', desc: 'Éviers, douches, toilettes, colonnes — intervention sans dégâts.' },
    { title: 'Chauffe-eau', desc: 'Dépannage, entretien et remplacement toutes marques.' },
    { title: 'Installations', desc: 'Cuisine, salle de bains, robinetterie, évacuations, raccordements.' },
    { title: 'Rénovation', desc: 'Rénovation complète de salles de bain et réseaux.' },
    { title: 'Urgences 7j/7', desc: 'Intervention rapide et devis transparent.' },
  ]
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="border rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg text-gray-900">{it.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
