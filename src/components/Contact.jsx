import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus(null)
    setLoading(true)

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone') || null,
      service: form.get('service') || null,
      message: form.get('message') || null,
      preferred_time: form.get('preferred_time') || null,
      source: 'website'
    }

    try {
      const res = await fetch(`${backend}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Erreur lors de l\'envoi du formulaire')
      setStatus({ ok: true, msg: 'Merci ! Votre demande a été envoyée. Nous vous rappelons rapidement.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, msg: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Devis gratuit</h2>
          <p className="text-gray-600 mt-3">Décrivez votre besoin, nous vous répondons rapidement.</p>
          <div className="mt-6 space-y-2 text-sm text-gray-700">
            <p>📞 06 12 34 56 78</p>
            <p>📍 Intervention sur Paris & proche banlieue</p>
            <p>⏰ 7j/7 — 8h à 20h (urgences au-delà)</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="bg-white border rounded-xl p-6 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-700">Nom</label>
              <input name="name" required className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="text-sm text-gray-700">Email</label>
              <input type="email" name="email" required className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="text-sm text-gray-700">Téléphone</label>
              <input name="phone" className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="text-sm text-gray-700">Service souhaité</label>
              <select name="service" className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Choisir…</option>
                <option>Fuite</option>
                <option>Débouchage</option>
                <option>Chauffe-eau</option>
                <option>Installation</option>
                <option>Rénovation</option>
                <option>Autre</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm text-gray-700">Détails</label>
            <textarea name="message" rows="4" className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mt-4">
            <label className="text-sm text-gray-700">Créneau préféré</label>
            <input name="preferred_time" className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button disabled={loading} className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded">
            {loading ? 'Envoi…' : 'Envoyer la demande'}
          </button>
          {status && (
            <p className={`mt-3 text-sm ${status.ok ? 'text-green-700' : 'text-red-600'}`}>{status.msg}</p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
