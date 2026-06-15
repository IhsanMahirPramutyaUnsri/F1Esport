import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import { teams, drivers } from '../data/canon';

function formatSalary(n) {
  return '$' + n.toLocaleString('en-US');
}

function StatusBadge({ status, t }) {
  const map = {
    invited_partner: { label: t.common.invitedPartner, cls: 'bg-green-100 text-green-800' },
    franchise_expansion: { label: t.common.franchiseExpansion, cls: 'bg-blue-100 text-blue-800' },
    slot_buyer: { label: t.common.slotBuyer, cls: 'bg-orange-100 text-orange-800' },
  };
  const { label, cls } = map[status] || { label: status, cls: 'bg-gray-100 text-gray-800' };
  return <span className={`text-xs font-semibold px-2 py-0.5 rounded ${cls}`}>{label}</span>;
}

export default function Teams() {
  const { t } = useLang();
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-black text-gray-900 mb-2">{t.teams.title}</h1>
      <p className="text-gray-500 mb-8">{t.teams.subtitle}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {teams.map(team => {
          const teamDrivers = drivers.filter(d => d.team === team.slug);
          return (
            <div key={team.slug} className="border border-gray-200 rounded-lg p-5 hover:border-f1red hover:shadow-sm transition-all flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <h2 className="font-bold text-gray-900 text-base leading-tight flex-1 mr-2">{team.name}</h2>
                {team.luxuryTax && (
                  <span className="text-xs font-bold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded shrink-0">
                    {t.common.luxuryTax}
                  </span>
                )}
              </div>
              <div className="space-y-1 text-sm text-gray-600 mb-4">
                <div><span className="font-medium text-gray-700">{t.teams.base}: </span>{team.base}</div>
                <div><span className="font-medium text-gray-700">{t.teams.totalSalary}: </span><span className="font-bold text-gray-900">{formatSalary(team.totalSalary)}</span></div>
                <div><StatusBadge status={team.status} t={t} /></div>
              </div>
              <div className="text-xs text-gray-500 mb-4">
                {teamDrivers.filter(d => d.role !== 'reserve').map(d => d.racingName).join(' · ')}
              </div>
              <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className={`text-xs font-semibold ${team.luxuryTax ? 'text-red-600' : 'text-green-600'}`}>
                  {team.financialNote}
                </span>
                <Link to={`/teams/${team.slug}`} className="text-sm font-semibold text-f1red hover:underline">
                  {t.teams.viewDetail} →
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
