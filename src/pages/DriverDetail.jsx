import { useParams, Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import { drivers, pacificHistory, mastersHistory, worldsHistory } from '../data/canon';

function formatSalary(n) {
  return '$' + n.toLocaleString('en-US');
}

function roleLabel(role, t) {
  if (role === 'first_driver') return t.common.firstDriver;
  if (role === 'second_driver') return t.common.secondDriver;
  return t.common.reserve;
}

function PodiumBadge({ pos }) {
  const cls = pos === 1
    ? 'bg-yellow-100 text-yellow-800 border-yellow-300'
    : pos === 2
    ? 'bg-gray-100 text-gray-700 border-gray-300'
    : 'bg-orange-100 text-orange-800 border-orange-300';
  return <span className={`text-xs font-bold px-2 py-0.5 rounded border ${cls}`}>P{pos}</span>;
}

export default function DriverDetail() {
  const { slug } = useParams();
  const { t } = useLang();
  const driver = drivers.find(d => d.slug === slug);

  if (!driver) return <div className="max-w-7xl mx-auto px-4 py-10 text-gray-500">Driver not found.</div>;

  // Championship results
  const pacificResults = pacificHistory.filter(r =>
    r.p1Driver === driver.racingName || r.p2Driver === driver.racingName || r.p3Driver === driver.racingName
  );
  const mastersResults = mastersHistory.filter(r =>
    r.p1Driver === driver.racingName || r.p2Driver === driver.racingName || r.p3Driver === driver.racingName
  );
  const worldsResults = worldsHistory.filter(r =>
    r.p1Driver === driver.racingName || r.p2Driver === driver.racingName || r.p3Driver === driver.racingName
  );

  function getPos(row, name) {
    if (row.p1Driver === name) return 1;
    if (row.p2Driver === name) return 2;
    return 3;
  }

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Link to="/drivers" className="text-sm text-f1red hover:underline mb-6 inline-block">← {t.driverDetail.back}</Link>

      {/* Profile Card */}
      <div className="border border-gray-200 rounded-lg p-6 mb-8">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <h1 className="text-4xl font-black text-gray-900 mb-1">{driver.racingName}</h1>
            {driver.realName && <p className="text-gray-500 text-lg">{driver.realName}</p>}
          </div>
          <div className="text-right">
            <div className="text-3xl font-black text-f1red">{formatSalary(driver.salary)}</div>
            <div className="text-xs text-gray-400 font-medium mt-0.5">{t.driverDetail.salary}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
          {[
            { label: t.driverDetail.nationality, value: driver.nationality },
            { label: t.driverDetail.team, value: driver.teamName },
            { label: t.driverDetail.role, value: roleLabel(driver.role, t) },
            { label: t.driverDetail.contract, value: driver.contract ? `${driver.contract} ${t.driverDetail.years}` : t.driverDetail.unknown },
            { label: t.driverDetail.dob, value: driver.dob || t.driverDetail.unknown },
            driver.major && { label: t.driverDetail.major, value: driver.major },
            driver.university && { label: t.driverDetail.university, value: driver.university },
          ].filter(Boolean).map(item => (
            <div key={item.label}>
              <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">{item.label}</div>
              <div className="font-semibold text-gray-900 mt-0.5">{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bio */}
      {driver.bio && (
        <div className="mb-6 p-5 bg-gray-50 rounded-lg border-l-4 border-f1red">
          <h2 className="font-bold text-gray-900 mb-2">{t.driverDetail.bio}</h2>
          <p className="text-gray-700 leading-relaxed">{driver.bio}</p>
        </div>
      )}

      {/* Transfer Note */}
      {driver.transferNote && (
        <div className="mb-6 p-5 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
          <h2 className="font-bold text-gray-900 mb-2">{t.driverDetail.transferNote}</h2>
          <p className="text-gray-700 leading-relaxed">{driver.transferNote}</p>
        </div>
      )}

      {/* Championship Record */}
      {(pacificResults.length > 0 || mastersResults.length > 0 || worldsResults.length > 0) && (
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">{t.driverDetail.championship}</h2>
          {[
            { title: t.history.pacific, results: pacificResults, keyFn: r => r.season },
            { title: t.history.masters, results: mastersResults, keyFn: r => r.year },
            { title: t.history.worlds, results: worldsResults, keyFn: r => r.year },
          ].filter(g => g.results.length > 0).map(group => (
            <div key={group.title} className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide">{group.title}</h3>
              <div className="space-y-2">
                {group.results.map(r => (
                  <div key={group.keyFn(r)} className="flex items-center gap-4 bg-gray-50 rounded px-4 py-2 text-sm">
                    <span className="font-bold text-gray-500 w-16">{group.keyFn(r)}</span>
                    <PodiumBadge pos={getPos(r, driver.racingName)} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
