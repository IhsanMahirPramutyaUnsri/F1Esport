import { useState } from 'react';
import { useLang } from '../context/LangContext';
import { pacificHistory, mastersHistory, worldsHistory } from '../data/canon';

function PodiumCell({ driver, team, pos }) {
  const cls = pos === 1
    ? 'text-yellow-700 font-bold'
    : pos === 2
    ? 'text-gray-600 font-semibold'
    : 'text-orange-700 font-semibold';
  return (
    <td className={`py-3 pr-4 ${cls}`}>
      <div>{driver}</div>
      <div className="text-xs font-normal text-gray-400">{team}</div>
    </td>
  );
}

function HistoryTable({ data, keyField, t }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b-2 border-gray-200">
            <th className="text-left py-3 pr-4 font-semibold text-gray-600">{keyField === 'season' ? t.history.season : t.history.year}</th>
            <th className="text-left py-3 pr-4 font-semibold text-yellow-700">{t.history.p1}</th>
            <th className="text-left py-3 pr-4 font-semibold text-gray-500">{t.history.p2}</th>
            <th className="text-left py-3 pr-4 font-semibold text-orange-700">{t.history.p3}</th>
            <th className="text-left py-3 pr-4 font-semibold text-yellow-700">{t.history.wcc1}</th>
            <th className="text-left py-3 pr-4 font-semibold text-gray-500">{t.history.wcc2}</th>
            <th className="text-left py-3 font-semibold text-orange-700">{t.history.wcc3}</th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row[keyField]} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="py-3 pr-4 font-bold text-gray-900">{row[keyField]}</td>
              <PodiumCell driver={row.p1Driver} team={row.p1Team} pos={1} />
              <PodiumCell driver={row.p2Driver} team={row.p2Team} pos={2} />
              <PodiumCell driver={row.p3Driver} team={row.p3Team} pos={3} />
              <td className="py-3 pr-4 font-bold text-yellow-700">{row.wcc1}</td>
              <td className="py-3 pr-4 font-semibold text-gray-600">{row.wcc2}</td>
              <td className="py-3 font-semibold text-orange-700">{row.wcc3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function History() {
  const { t } = useLang();
  const [tab, setTab] = useState('pacific');

  const tabs = [
    { key: 'pacific', label: t.history.pacific },
    { key: 'masters', label: t.history.masters },
    { key: 'worlds', label: t.history.worlds },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-black text-gray-900 mb-2">{t.history.title}</h1>
      <p className="text-gray-500 mb-8">{t.history.subtitle}</p>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-gray-200 mb-8">
        {tabs.map(tb => (
          <button
            key={tb.key}
            onClick={() => setTab(tb.key)}
            className={`px-5 py-2.5 text-sm font-semibold border-b-2 -mb-px transition-colors ${
              tab === tb.key
                ? 'border-f1red text-f1red'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {tb.label}
          </button>
        ))}
      </div>

      {tab === 'pacific' && <HistoryTable data={pacificHistory} keyField="season" t={t} />}
      {tab === 'masters' && <HistoryTable data={mastersHistory} keyField="year" t={t} />}
      {tab === 'worlds' && <HistoryTable data={worldsHistory} keyField="year" t={t} />}
    </main>
  );
}
