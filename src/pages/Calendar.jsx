import { useLang } from '../context/LangContext';
import { raceCalendar } from '../data/canon';

export default function Calendar() {
  const { t } = useLang();
  const weeks = [...new Set(raceCalendar.map(r => r.week))];

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-black text-gray-900 mb-2">{t.calendar.title}</h1>
      <p className="text-gray-500 mb-10">{t.calendar.subtitle}</p>

      <div className="space-y-8">
        {weeks.map(week => {
          const races = raceCalendar.filter(r => r.week === week);
          return (
            <div key={week}>
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-f1red text-white text-xs font-black px-3 py-1 rounded">
                  {t.calendar.week} {week}
                </span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>
              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold text-gray-600 w-24">{t.calendar.day}</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-600">{t.calendar.gp}</th>
                      <th className="text-center px-4 py-3 font-semibold text-gray-600 w-20">{t.calendar.laps}</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-600">{t.calendar.notes}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {races.map((race, i) => (
                      <tr key={race.gp} className={`border-t border-gray-100 ${i % 2 === 1 ? 'bg-gray-50/50' : ''}`}>
                        <td className="px-4 py-3 text-gray-500 text-xs font-medium">{race.day}</td>
                        <td className="px-4 py-3">
                          <span className="font-bold text-gray-900">{race.gp}</span>
                          <span className="text-gray-400 text-xs ml-2">{race.city}</span>
                        </td>
                        <td className="px-4 py-3 text-center font-bold text-f1red">{race.laps}</td>
                        <td className="px-4 py-3 text-gray-500 text-xs">{race.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-600">
        <p><strong>Total:</strong> 24 Grand Prix per event · 8 Minggu · Jarak: 50% dari sirkuit F1 asli</p>
      </div>
    </main>
  );
}
