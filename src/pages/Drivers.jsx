import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import { drivers } from '../data/canon';

function formatSalary(n) {
  return '$' + n.toLocaleString('en-US');
}

function roleLabel(role, t) {
  if (role === 'first_driver') return t.common.firstDriver;
  if (role === 'second_driver') return t.common.secondDriver;
  return t.common.reserve;
}

export default function Drivers() {
  const { t } = useLang();
  const sorted = [...drivers].sort((a, b) => b.salary - a.salary);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-black text-gray-900 mb-2">{t.drivers.title}</h1>
      <p className="text-gray-500 mb-8">{t.drivers.subtitle}</p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 pr-4 font-semibold text-gray-600">{t.drivers.racingName}</th>
              <th className="text-left py-3 pr-4 font-semibold text-gray-600">{t.drivers.realName}</th>
              <th className="text-left py-3 pr-4 font-semibold text-gray-600">{t.drivers.nationality}</th>
              <th className="text-left py-3 pr-4 font-semibold text-gray-600">{t.drivers.team}</th>
              <th className="text-left py-3 pr-4 font-semibold text-gray-600">{t.drivers.role}</th>
              <th className="text-left py-3 font-semibold text-gray-600">{t.drivers.salary}</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map(d => (
              <tr key={d.slug} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 pr-4">
                  <Link to={`/drivers/${d.slug}`} className="font-bold text-gray-900 hover:text-f1red">
                    {d.racingName}
                  </Link>
                </td>
                <td className="py-3 pr-4 text-gray-600">{d.realName || t.drivers.unknown}</td>
                <td className="py-3 pr-4 text-gray-600">{d.nationality}</td>
                <td className="py-3 pr-4 text-gray-600">{d.teamName}</td>
                <td className="py-3 pr-4 text-gray-500 text-xs">{roleLabel(d.role, t)}</td>
                <td className="py-3 font-semibold text-gray-900">{formatSalary(d.salary)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
