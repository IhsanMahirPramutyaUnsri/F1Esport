import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import { venueHistory } from '../data/canon';

export default function Home() {
  const { t } = useLang();

  const stats = [
    { value: '11', label: t.home.statsTeams },
    { value: '3', label: t.home.statsRegions },
    { value: '33', label: t.home.statsDrivers },
    { value: '2019', label: t.home.statsSeason },
  ];

  const cards = [
    { to: '/teams', label: t.home.exploreTeams, icon: '🏎️', desc: '11 teams' },
    { to: '/drivers', label: t.home.exploreDrivers, icon: '🪪', desc: '33 drivers' },
    { to: '/history', label: t.home.exploreHistory, icon: '🏆', desc: '2015–2018' },
    { to: '/rules', label: t.home.exploreRules, icon: '📋', desc: 'S2019' },
    { to: '/calendar', label: t.home.exploreCalendar, icon: '📅', desc: '24 GPs' },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-block bg-f1red text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded mb-6">
            {t.home.season}
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-4 tracking-tight">
            F1 <span className="text-f1red">Esport</span> Universe
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            {t.home.heroSubtitle}
          </p>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            {t.home.worldDesc}
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(s => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-black text-f1red">{s.value}</div>
                <div className="text-sm text-gray-500 font-medium mt-1 uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{t.home.sectionTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cards.map(card => (
              <Link
                key={card.to}
                to={card.to}
                className="group border border-gray-200 rounded-lg p-6 hover:border-f1red hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-3">{card.icon}</div>
                <h3 className="font-bold text-gray-900 group-hover:text-f1red transition-colors text-lg">{card.label}</h3>
                <p className="text-sm text-gray-400 mt-1">{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Venue History */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.rules.venueTitle}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-3 pr-6 font-semibold text-gray-600">{t.rules.venueYear}</th>
                  <th className="text-left py-3 pr-6 font-semibold text-gray-600">{t.rules.venueVenue}</th>
                  <th className="text-left py-3 pr-6 font-semibold text-gray-600">{t.rules.venueCapacity}</th>
                  <th className="text-left py-3 font-semibold text-gray-600">{t.rules.venueNotes}</th>
                </tr>
              </thead>
              <tbody>
                {venueHistory.map(v => (
                  <tr key={v.year} className="border-b border-gray-100">
                    <td className="py-3 pr-6 font-bold text-f1red">{v.year}</td>
                    <td className="py-3 pr-6 text-gray-900">{v.venue}</td>
                    <td className="py-3 pr-6 text-gray-600">{v.capacity}</td>
                    <td className="py-3 text-gray-500">{v.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
