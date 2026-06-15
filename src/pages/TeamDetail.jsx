import { useParams, Link } from 'react-router-dom';
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

function roleLabel(role, t) {
  if (role === 'first_driver') return t.common.firstDriver;
  if (role === 'second_driver') return t.common.secondDriver;
  return t.common.reserve;
}

export default function TeamDetail() {
  const { slug } = useParams();
  const { t } = useLang();
  const team = teams.find(tm => tm.slug === slug);
  const roster = drivers.filter(d => d.team === slug);

  if (!team) return <div className="max-w-7xl mx-auto px-4 py-10 text-gray-500">Team not found.</div>;

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Link to="/teams" className="text-sm text-f1red hover:underline mb-6 inline-block">← {t.teamDetail.back}</Link>
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <h1 className="text-3xl font-black text-gray-900">{team.name}</h1>
          {team.luxuryTax && (
            <span className="text-xs font-bold text-red-600 bg-red-50 border border-red-200 px-2 py-1 rounded">
              {t.common.luxuryTax}
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
          <StatusBadge status={team.status} t={t} />
          <span>{t.teams.base}: <strong>{team.base}</strong></span>
          <span>{t.teams.totalSalary}: <strong>{formatSalary(team.totalSalary)}</strong></span>
          {team.luxuryTaxAmount && (
            <span className="text-red-600">Luxury Tax: <strong>{formatSalary(team.luxuryTaxAmount)}</strong></span>
          )}
        </div>
        {team.acquisitionNote && (
          <p className="mt-2 text-sm text-gray-500 italic">{team.acquisitionNote}</p>
        )}
      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-4">{t.teamDetail.roster}</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 pr-4 font-semibold text-gray-600">{t.teamDetail.role}</th>
              <th className="text-left py-3 pr-4 font-semibold text-gray-600">{t.teamDetail.racingName}</th>
              <th className="text-left py-3 pr-4 font-semibold text-gray-600">{t.teamDetail.realName}</th>
              <th className="text-left py-3 pr-4 font-semibold text-gray-600">{t.teamDetail.nationality}</th>
              <th className="text-left py-3 pr-4 font-semibold text-gray-600">{t.teamDetail.salary}</th>
              <th className="text-left py-3 font-semibold text-gray-600">{t.teamDetail.contract}</th>
            </tr>
          </thead>
          <tbody>
            {roster.map(d => (
              <tr key={d.slug} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 pr-4 text-gray-500 text-xs">{roleLabel(d.role, t)}</td>
                <td className="py-3 pr-4">
                  <Link to={`/drivers/${d.slug}`} className="font-bold text-gray-900 hover:text-f1red">
                    {d.racingName}
                  </Link>
                </td>
                <td className="py-3 pr-4 text-gray-600">{d.realName || t.teamDetail.unknown}</td>
                <td className="py-3 pr-4 text-gray-600">{d.nationality}</td>
                <td className="py-3 pr-4 font-semibold text-gray-900">{formatSalary(d.salary)}</td>
                <td className="py-3 text-gray-600">{d.contract} {t.teamDetail.years}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
