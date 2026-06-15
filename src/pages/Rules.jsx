import { useLang } from '../context/LangContext';
import { prizePool, abilitySystem, penaltyPoints, racePoints, venueHistory } from '../data/canon';

function formatSalary(n) {
  return '$' + n.toLocaleString('en-US');
}

function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">{title}</h2>
      {children}
    </section>
  );
}

export default function Rules() {
  const { t } = useLang();

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-black text-gray-900 mb-2">{t.rules.title}</h1>
      <p className="text-gray-500 mb-10">{t.rules.subtitle}</p>

      {/* Financial */}
      <Section title={t.rules.financial}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {[
            { label: t.rules.franchiseFee, value: '$10,000,000' },
            { label: t.rules.salaryCap, value: '$6,000,000' },
            { label: t.rules.salaryFloor, value: '$30,000' },
            { label: t.rules.luxuryTax, value: '1.5×' },
          ].map(item => (
            <div key={item.label} className="bg-gray-50 rounded-lg p-4 border border-gray-200 text-center">
              <div className="text-2xl font-black text-f1red">{item.value}</div>
              <div className="text-xs text-gray-500 font-medium mt-1">{item.label}</div>
            </div>
          ))}
        </div>
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 text-sm text-gray-700">
          <p className="font-semibold mb-2">{t.rules.luxuryTaxDesc}</p>
          <ul className="space-y-1 text-gray-600">
            <li>• {t.rules.luxuryDist1 || '50% untuk Liga'}</li>
            <li>• {t.rules.luxuryDist2 || '30% didistribusikan ke tim di bawah floor (subsidi pasif)'}</li>
            <li>• {t.rules.luxuryDist3 || '20% masuk ke prize pool tambahan'}</li>
          </ul>
        </div>
      </Section>

      {/* Prize Pool */}
      <Section title={t.rules.prizePool}>
        <div className="mb-4 text-sm text-gray-600">
          Total: <span className="font-bold text-gray-900">$4,000,000</span> / {t.rules.prizePoolDriver?.includes('per') ? '' : 'tahun'}
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-700 mb-3">{t.rules.prizePoolDriver}</h3>
            <div className="overflow-x-auto rounded border border-gray-200">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr><th className="text-left px-3 py-2 font-semibold text-gray-600">{t.rules.position}</th><th className="text-right px-3 py-2 font-semibold text-gray-600">{t.rules.amount}</th></tr>
                </thead>
                <tbody>
                  {prizePool.driver.map(row => (
                    <tr key={row.pos} className="border-t border-gray-100 hover:bg-gray-50">
                      <td className="px-3 py-2 font-medium text-gray-700">{row.pos}</td>
                      <td className="px-3 py-2 text-right font-semibold text-gray-900">{formatSalary(row.amount)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 mb-3">{t.rules.prizePoolConstructor}</h3>
            <div className="overflow-x-auto rounded border border-gray-200">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr><th className="text-left px-3 py-2 font-semibold text-gray-600">{t.rules.position}</th><th className="text-right px-3 py-2 font-semibold text-gray-600">{t.rules.amount}</th></tr>
                </thead>
                <tbody>
                  {prizePool.constructor.map(row => (
                    <tr key={row.pos} className="border-t border-gray-100 hover:bg-gray-50">
                      <td className="px-3 py-2 font-medium text-gray-700">{row.pos}</td>
                      <td className="px-3 py-2 text-right font-semibold text-gray-900">{formatSalary(row.amount)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Section>

      {/* Race Points */}
      <Section title={t.rules.racePoints}>
        <div className="overflow-x-auto rounded border border-gray-200 max-w-xs">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-2 font-semibold text-gray-600">{t.rules.position}</th>
                <th className="text-right px-4 py-2 font-semibold text-gray-600">Pts</th>
              </tr>
            </thead>
            <tbody>
              {racePoints.map(r => (
                <tr key={r.pos} className={`border-t border-gray-100 ${r.pos === 'P1' ? 'bg-yellow-50' : ''}`}>
                  <td className="px-4 py-2 font-medium text-gray-700">{r.pos}</td>
                  <td className="px-4 py-2 text-right font-bold text-gray-900">{r.pts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Competition Format */}
      <Section title={t.rules.competitionFormat}>
        <div className="space-y-2 text-sm text-gray-700">
          <p>• {t.rules.compDesc1}</p>
          <p>• {t.rules.compDesc2}</p>
          <p>• {t.rules.compDesc3}</p>
          <p>• <strong>Format Pekan:</strong> Jumat, Sabtu, Minggu — masing-masing 1 siklus penuh (Practice, Kualifikasi, Race).</p>
          <p>• <strong>Jarak Race:</strong> 50% dari sirkuit F1 asli.</p>
        </div>
      </Section>

      {/* Qualifying */}
      <Section title={t.rules.qualifying}>
        <div className="space-y-3">
          {[
            { label: 'Q1', detail: 'Q1 (18 Menit): 22 driver aktif. 6 terlambat tereliminasi → P17–P22.' },
            { label: 'Q2', detail: 'Q2 (15 Menit): 16 driver sisa. 6 terbawah tereliminasi → P11–P16.' },
            { label: 'Q3', detail: 'Q3 (12 Menit): Top 10 Shootout untuk pole position.' },
          ].map(q => (
            <div key={q.label} className="flex gap-4 items-start p-4 bg-gray-50 rounded-lg border border-gray-200">
              <span className="font-black text-f1red text-lg w-8 shrink-0">{q.label}</span>
              <p className="text-sm text-gray-700">{q.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Ability System */}
      <Section title={t.rules.abilitySystem}>
        <p className="text-xs text-gray-500 mb-3">Maks. 3 Charges per Race</p>
        <div className="overflow-x-auto rounded border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-gray-600">{t.rules.abilityName}</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-600">Efek</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-600">Maks</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-600">Cooldown</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-600">Penalti</th>
              </tr>
            </thead>
            <tbody>
              {abilitySystem.map(a => (
                <tr key={a.ability} className="border-t border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-3 font-bold text-gray-900">{a.ability}</td>
                  <td className="px-4 py-3 text-gray-700">{a.effect}</td>
                  <td className="px-4 py-3 text-center font-semibold">{a.max}</td>
                  <td className="px-4 py-3 text-gray-600">{a.cooldown}</td>
                  <td className="px-4 py-3 text-red-600 text-xs">{a.penalty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Superlicense */}
      <Section title={t.rules.superlicense}>
        <p className="text-sm text-gray-600 mb-4">{t.rules.superDesc}</p>
        <div className="overflow-x-auto rounded border border-gray-200 mb-4">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-gray-600">Jenis Pelanggaran</th>
                <th className="text-right px-4 py-3 font-semibold text-gray-600">Poin</th>
              </tr>
            </thead>
            <tbody>
              {penaltyPoints.map(p => (
                <tr key={p.violation} className="border-t border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700">{p.violation}</td>
                  <td className="px-4 py-3 text-right font-bold text-red-600">{p.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="space-y-2 text-sm text-gray-600 bg-gray-50 rounded-lg p-4 border border-gray-200">
          <p><strong>Sanksi:</strong> 0 poin → Skorsing 1 pekan → Berulang: Skorsing 3 race → Banned permanen.</p>
          <p><strong>Tiebreaker:</strong> Jumlah Menang → Podium → Pole Position → Fastest Lap → Head-to-Head.</p>
        </div>
      </Section>

      {/* Venue History */}
      <Section title={t.rules.venueTitle}>
        <div className="overflow-x-auto rounded border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-gray-600">{t.rules.venueYear}</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-600">{t.rules.venueVenue}</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-600">{t.rules.venueCapacity}</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-600">{t.rules.venueNotes}</th>
              </tr>
            </thead>
            <tbody>
              {venueHistory.map(v => (
                <tr key={v.year} className={`border-t border-gray-100 hover:bg-gray-50 ${v.year === 2019 ? 'bg-red-50/50' : ''}`}>
                  <td className="px-4 py-3 font-bold text-f1red">{v.year}</td>
                  <td className="px-4 py-3 font-medium text-gray-900">{v.venue}</td>
                  <td className="px-4 py-3 text-gray-600">{v.capacity}</td>
                  <td className="px-4 py-3 text-gray-500 text-xs">{v.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </main>
  );
}
