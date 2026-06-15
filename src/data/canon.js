// TEAMS
export const teams = [
  {
    slug: 'team-liquid',
    name: 'Team Liquid Mercedes Pacific',
    status: 'franchise_expansion',
    franchiseFee: 10000000,
    base: 'USA',
    region: 'Pacific',
    operators: ['RIOT'],
    totalSalary: 7040000,
    luxuryTax: true,
    luxuryTaxAmount: 1500000,
    financialNote: 'LUXURY TAX — Denda $1.5M'
  },
  { slug: 'rrq', name: 'RRQ Redbull Racing Honda', status: 'invited_partner', base: 'Indonesia', totalSalary: 3060000, luxuryTax: false, financialNote: 'Aman' },
  { slug: 'geng', name: 'Gen.G', status: 'invited_partner', base: 'Korea Selatan', totalSalary: 2410000, luxuryTax: false, financialNote: 'Aman' },
  { slug: 'onic', name: 'ONIC', status: 'invited_partner', base: 'Indonesia', totalSalary: 1960000, luxuryTax: false, financialNote: 'Aman' },
  { slug: 't1', name: 'T1', status: 'invited_partner', base: 'Korea Selatan', totalSalary: 1830000, luxuryTax: false, financialNote: 'Aman' },
  { slug: 'cloud9', name: 'Cloud9 (ex-Talon)', status: 'slot_buyer', base: 'USA', totalSalary: 685000, luxuryTax: false, financialNote: 'Aman', acquisitionNote: 'Akuisisi slot Talon Esport' },
  { slug: 'geek-fam', name: 'Geek Fam (ex-Paper Rex)', status: 'slot_buyer', base: 'Indonesia', totalSalary: 515000, luxuryTax: false, financialNote: 'Aman', acquisitionNote: 'Akuisisi slot Paper Rex' },
  { slug: 'team-secret', name: 'Team Secret', status: 'invited_partner', base: 'Filipina', totalSalary: 500000, luxuryTax: false, financialNote: 'Aman' },
  { slug: 'dfm', name: 'DetonatioN FocusMe', status: 'invited_partner', base: 'Jepang', totalSalary: 410000, luxuryTax: false, financialNote: 'Aman' },
  { slug: 'zeta', name: 'ZETA Division', status: 'invited_partner', base: 'Jepang', totalSalary: 350000, luxuryTax: false, financialNote: 'Aman' },
  { slug: 'btr', name: 'BTR', status: 'invited_partner', base: 'Indonesia', totalSalary: 340000, luxuryTax: false, financialNote: 'Aman — Strategi Moneyball' },
];

// DRIVERS (full roster)
export const drivers = [
  // Team Liquid
  { slug: 'sanzjr', racingName: 'SanzJr', realName: 'Ihsan Mahir Pramutya', dob: '2000-04-30', nationality: 'Indonesia', team: 'team-liquid', teamName: 'Team Liquid', role: 'first_driver', salary: 4000000, contract: 2, major: 'Computer Science', university: 'UTokyo', bio: 'Masuk UTokyo via Autumn Enrollment Oktober 2017. Rivalitas legendaris dengan Blaze berakar dari olimpiade matematika SASMO, IMC, OSN, IMO. Lebih sering juara 1 dari Blaze.', transferNote: 'Trade dari RRQ dengan Forsaken + $2M tunai, ditandatangani 23 Des 2018 pkl 23:47 — 12 menit sebelum bursa tutup.' },
  { slug: 'blaze', racingName: 'Blaze', realName: 'Calvin Wijaya', dob: '2000-03-14', nationality: 'Indonesia', team: 'team-liquid', teamName: 'Team Liquid', role: 'second_driver', salary: 3000000, contract: 3, major: 'Computer Science', university: 'UTokyo', bio: 'Katalis kunci transfer SanzJr ke Team Liquid. Membuka jalur komunikasi dengan manajemen tertinggi Liquid.' },
  { slug: 'vance', racingName: 'Vance', realName: null, dob: '2001-07-07', nationality: 'Indonesia', team: 'team-liquid', teamName: 'Team Liquid', role: 'reserve', salary: 40000, contract: 4, bio: 'Dibajak dari akademi ONIC saat berusia 17 tahun. ONIC terpukul keras.' },
  // RRQ
  { slug: 'forsaken', racingName: 'Forsaken', realName: 'Arkhan Zaki', dob: '2000-12-30', nationality: 'Indonesia', team: 'rrq', teamName: 'RRQ', role: 'first_driver', salary: 1500000, contract: 4, major: 'Mechanical Engineering', university: 'UTokyo', bio: 'Kembali ke RRQ via trade dengan SanzJr + $2M. Masuk UTokyo Autumn Enrollment Oktober 2017 bersama Ihsan, Calvin, Elvano.' },
  { slug: 'ivanzz', racingName: 'Ivanzz', realName: 'Elvano Azka', dob: '2000-02-24', nationality: 'Indonesia', team: 'rrq', teamName: 'RRQ', role: 'second_driver', salary: 1500000, contract: 3, major: 'Electrical Engineering', university: 'UTokyo' },
  { slug: 'krips-guy', racingName: 'KripsGuy', realName: null, dob: '1996-04-03', nationality: 'Indonesia', team: 'rrq', teamName: 'RRQ', role: 'reserve', salary: 60000, contract: 2, bio: 'Veteran yang kembali untuk menjaga kultur dan kedamaian mental tim.' },
  // T1
  { slug: 'ethan', racingName: 'Ethan', realName: null, dob: null, nationality: 'Jepang', team: 't1', teamName: 'T1', role: 'first_driver', salary: 1200000, contract: 2, age: 22 },
  { slug: 'bambi', racingName: 'Bambi', realName: null, dob: null, nationality: 'Korea Selatan', team: 't1', teamName: 'T1', role: 'second_driver', salary: 600000, contract: 2, age: 20 },
  { slug: 'kaz-tanaka', racingName: 'Kaz Tanaka', realName: null, dob: null, nationality: 'Jepang', team: 't1', teamName: 'T1', role: 'reserve', salary: 30000, contract: 2, age: 18 },
  // ONIC
  { slug: 'hans', racingName: 'Hans', realName: null, dob: null, nationality: 'Indonesia', team: 'onic', teamName: 'ONIC', role: 'first_driver', salary: 1800000, contract: 2, age: 22 },
  { slug: 'alvon', racingName: 'Alvon', realName: null, dob: null, nationality: 'Indonesia', team: 'onic', teamName: 'ONIC', role: 'second_driver', salary: 100000, contract: 3, age: 18 },
  { slug: 'icekid', racingName: 'IceKid', realName: null, dob: null, nationality: 'Indonesia', team: 'onic', teamName: 'ONIC', role: 'reserve', salary: 60000, contract: 2, age: 21 },
  // Gen.G
  { slug: 'foxy9', racingName: 'Foxy9', realName: null, dob: null, nationality: 'Korea Selatan', team: 'geng', teamName: 'Gen.G', role: 'first_driver', salary: 2000000, contract: 2, age: 22 },
  { slug: 'ryouta', racingName: 'Ryouta', realName: null, dob: null, nationality: 'Jepang', team: 'geng', teamName: 'Gen.G', role: 'second_driver', salary: 350000, contract: 2, age: 21 },
  { slug: 'knael', racingName: 'Knael', realName: null, dob: null, nationality: 'Korea Selatan', team: 'geng', teamName: 'Gen.G', role: 'reserve', salary: 60000, contract: 2, age: 18 },
  // BTR
  { slug: 'evans', racingName: 'Evans', realName: null, dob: null, nationality: 'Malaysia', team: 'btr', teamName: 'BTR', role: 'first_driver', salary: 250000, contract: 2, age: 23 },
  { slug: 'ramzy', racingName: 'Ramzy', realName: null, dob: null, nationality: 'Indonesia', team: 'btr', teamName: 'BTR', role: 'second_driver', salary: 60000, contract: 4, age: 20 },
  { slug: 'zhesbew', racingName: 'Zhesbew', realName: null, dob: null, nationality: 'Malaysia', team: 'btr', teamName: 'BTR', role: 'reserve', salary: 30000, contract: 2, age: 19 },
  // DFM
  { slug: 'pancer', racingName: 'PaNcer', realName: null, dob: null, nationality: 'Jepang', team: 'dfm', teamName: 'DFM', role: 'first_driver', salary: 300000, contract: 2, age: 23 },
  { slug: 'hiro', racingName: 'Hiro', realName: null, dob: null, nationality: 'Jepang', team: 'dfm', teamName: 'DFM', role: 'second_driver', salary: 80000, contract: 3, age: 19 },
  { slug: 'taku', racingName: 'Taku', realName: null, dob: null, nationality: 'Jepang', team: 'dfm', teamName: 'DFM', role: 'reserve', salary: 30000, contract: 2, age: 17 },
  // ZETA
  { slug: 'shiiro', racingName: 'Shiiro', realName: null, dob: null, nationality: 'Jepang', team: 'zeta', teamName: 'ZETA Division', role: 'first_driver', salary: 250000, contract: 2, age: 22 },
  { slug: 'souza', racingName: 'Souza', realName: null, dob: null, nationality: 'Jepang', team: 'zeta', teamName: 'ZETA Division', role: 'second_driver', salary: 70000, contract: 4, age: 19 },
  { slug: 'fido', racingName: 'Fido', realName: null, dob: null, nationality: 'Jepang', team: 'zeta', teamName: 'ZETA Division', role: 'reserve', salary: 30000, contract: 5, age: 18 },
  // Geek Fam (ex-PRX)
  { slug: 'myzee', racingName: 'Myzee', realName: null, dob: null, nationality: 'Filipina', team: 'geek-fam', teamName: 'Geek Fam', role: 'first_driver', salary: 400000, contract: 3, age: 22 },
  { slug: 'edward', racingName: 'Edward', realName: null, dob: null, nationality: 'Singapura', team: 'geek-fam', teamName: 'Geek Fam', role: 'second_driver', salary: 80000, contract: 5, age: 19 },
  { slug: 'yuki', racingName: 'Yuki', realName: null, dob: null, nationality: 'Jepang', team: 'geek-fam', teamName: 'Geek Fam', role: 'reserve', salary: 35000, contract: 3, age: 23 },
  // Cloud9 (ex-Talon)
  { slug: 'fexian', racingName: 'Fexian', realName: null, dob: null, nationality: 'Thailand', team: 'cloud9', teamName: 'Cloud9', role: 'first_driver', salary: 500000, contract: 2, age: 23 },
  { slug: 'sora', racingName: 'Sora', realName: null, dob: null, nationality: 'Jepang', team: 'cloud9', teamName: 'Cloud9', role: 'second_driver', salary: 150000, contract: 3, age: 20 },
  { slug: 'jerry', racingName: 'Jerry', realName: null, dob: null, nationality: 'Vietnam', team: 'cloud9', teamName: 'Cloud9', role: 'reserve', salary: 35000, contract: 2, age: 24 },
  // Team Secret
  { slug: 'frosty', racingName: 'Frosty', realName: null, dob: null, nationality: 'Filipina', team: 'team-secret', teamName: 'Team Secret', role: 'first_driver', salary: 350000, contract: 2, age: 23 },
  { slug: 'lakia', racingName: 'Lakia', realName: null, dob: null, nationality: 'Filipina', team: 'team-secret', teamName: 'Team Secret', role: 'second_driver', salary: 120000, contract: 3, age: 22 },
  { slug: 'zack', racingName: 'Zack', realName: null, dob: null, nationality: 'Singapura', team: 'team-secret', teamName: 'Team Secret', role: 'reserve', salary: 30000, contract: 3, age: 18 },
];

// CHAMPIONSHIP HISTORY
export const pacificHistory = [
  { season: '2015 S1', p1Driver: 'Hans', p1Team: 'ONIC', p2Driver: 'SanzJr', p2Team: 'RRQ', p3Driver: 'Ethan', p3Team: 'DFM', wcc1: 'ONIC', wcc2: 'RRQ', wcc3: 'DFM' },
  { season: '2015 S2', p1Driver: 'Hans', p1Team: 'ONIC', p2Driver: 'SanzJr', p2Team: 'RRQ', p3Driver: 'Foxy9', p3Team: 'Gen.G', wcc1: 'ONIC', wcc2: 'RRQ', wcc3: 'Gen.G' },
  { season: '2016 S3', p1Driver: 'SanzJr', p1Team: 'RRQ', p2Driver: 'Hans', p2Team: 'ONIC', p3Driver: 'Ethan', p3Team: 'DFM', wcc1: 'RRQ', wcc2: 'ONIC', wcc3: 'DFM' },
  { season: '2016 S4', p1Driver: 'SanzJr', p1Team: 'RRQ', p2Driver: 'Ethan', p2Team: 'DFM', p3Driver: 'Hans', p3Team: 'ONIC', wcc1: 'RRQ', wcc2: 'DFM', wcc3: 'ONIC' },
  { season: '2017 S5', p1Driver: 'Blaze', p1Team: 'Liquid', p2Driver: 'SanzJr', p2Team: 'RRQ', p3Driver: 'Forsaken', p3Team: 'Liquid', wcc1: 'Liquid', wcc2: 'RRQ', wcc3: 'T1' },
  { season: '2017 S6', p1Driver: 'SanzJr', p1Team: 'RRQ', p2Driver: 'Blaze', p2Team: 'Liquid', p3Driver: 'Ivanzz', p3Team: 'RRQ', wcc1: 'RRQ', wcc2: 'Liquid', wcc3: 'ZETA' },
  { season: '2018 S7', p1Driver: 'Blaze', p1Team: 'Liquid', p2Driver: 'SanzJr', p2Team: 'RRQ', p3Driver: 'Forsaken', p3Team: 'Liquid', wcc1: 'Liquid', wcc2: 'RRQ', wcc3: 'ZETA' },
  { season: '2018 S8', p1Driver: 'SanzJr', p1Team: 'RRQ', p2Driver: 'Blaze', p2Team: 'Liquid', p3Driver: 'Ivanzz', p3Team: 'RRQ', wcc1: 'RRQ', wcc2: 'Liquid', wcc3: 'T1' },
];
export const mastersHistory = [
  { year: 2015, p1Driver: 'Hans', p1Team: 'ONIC', p2Driver: 'SanzJr', p2Team: 'RRQ', p3Driver: 'Ethan', p3Team: 'DFM', wcc1: 'ONIC', wcc2: 'RRQ', wcc3: 'DFM' },
  { year: 2016, p1Driver: 'SanzJr', p1Team: 'RRQ', p2Driver: 'Fierce', p2Team: 'Fnatic', p3Driver: 'S1mon', p3Team: 'NRG', wcc1: 'RRQ', wcc2: 'DFM', wcc3: 'NRG' },
  { year: 2017, p1Driver: 'SanzJr', p1Team: 'RRQ', p2Driver: 'Blaze', p2Team: 'Liquid', p3Driver: 'Fierce', p3Team: 'Fnatic', wcc1: 'RRQ', wcc2: 'Liquid', wcc3: 'Fnatic' },
  { year: 2018, p1Driver: 'SanzJr', p1Team: 'RRQ', p2Driver: 'Blaze', p2Team: 'Liquid', p3Driver: 'Forsaken', p3Team: 'Liquid', wcc1: 'RRQ', wcc2: 'Liquid', wcc3: 'Fnatic' },
];
export const worldsHistory = [
  { year: 2015, p1Driver: 'Fierce', p1Team: 'Fnatic', p2Driver: 'SanzJr', p2Team: 'RRQ', p3Driver: 'Hans', p3Team: 'ONIC', wcc1: 'RRQ', wcc2: 'Fnatic', wcc3: 'ONIC' },
  { year: 2016, p1Driver: 'SanzJr', p1Team: 'RRQ', p2Driver: 'Fierce', p2Team: 'Fnatic', p3Driver: 'Ethan', p3Team: 'DFM', wcc1: 'RRQ', wcc2: 'Fnatic', wcc3: 'EG' },
  { year: 2017, p1Driver: 'SanzJr', p1Team: 'RRQ', p2Driver: 'Blaze', p2Team: 'Liquid', p3Driver: 'Fierce', p3Team: 'Fnatic', wcc1: 'RRQ', wcc2: 'Liquid', wcc3: 'Fnatic' },
  { year: 2018, p1Driver: 'SanzJr', p1Team: 'RRQ', p2Driver: 'Blaze', p2Team: 'Liquid', p3Driver: 'Forsaken', p3Team: 'Liquid', wcc1: 'RRQ', wcc2: 'Liquid', wcc3: 'Fnatic' },
];

// RACE CALENDAR
export const raceCalendar = [
  { week: 1, day: 'Jumat', gp: 'GP Australia', city: 'Melbourne', laps: 29, notes: 'Seri pembuka cepat berisiko tinggi.' },
  { week: 1, day: 'Sabtu', gp: 'GP Shanghai', city: 'Tiongkok', laps: 28, notes: 'Duel slipstream di lintasan lurus terpanjang.' },
  { week: 1, day: 'Minggu', gp: 'GP Japan', city: 'Suzuka', laps: 26, notes: 'Ujian skill murni di sirkuit legendaris.' },
  { week: 2, day: 'Jumat', gp: 'GP Bahrain', city: 'Sakhir', laps: 28, notes: 'Zona pengereman keras menguji traksi.' },
  { week: 2, day: 'Sabtu', gp: 'GP Saudi Arabia', city: 'Jeddah', laps: 25, notes: 'Sirkuit jalan raya tercepat.' },
  { week: 2, day: 'Minggu', gp: 'GP Miami', city: 'USA', laps: 28, notes: 'Sektor teknikal menuntut ritme konsisten.' },
  { week: 3, day: 'Jumat', gp: 'GP Canada', city: 'Montreal', laps: 35, notes: "Risiko tabrakan tinggi di 'Wall of Champions'." },
  { week: 3, day: 'Sabtu', gp: 'GP Monaco', city: 'Monaco', laps: 39, notes: 'Jalur sempit, Defense Shield adalah raja.' },
  { week: 3, day: 'Minggu', gp: 'GP Spain', city: 'Barcelona', laps: 33, notes: 'Tolok ukur murni performa aerodinamika.' },
  { week: 4, day: 'Jumat', gp: 'GP Austria', city: 'Spielberg', laps: 35, notes: 'Balapan sprint di lintasan pendek cepat.' },
  { week: 4, day: 'Sabtu', gp: 'GP Great Britain', city: 'Silverstone', laps: 26, notes: 'Menguji nyali di tikungan kecepatan sangat tinggi.' },
  { week: 4, day: 'Minggu', gp: 'GP Belgium', city: 'Spa-Francorchamps', laps: 22, notes: 'Tantangan alam ekstrem yang menuntut segalanya.' },
  { week: 5, day: 'Jumat', gp: 'GP Hungary', city: 'Budapest', laps: 35, notes: 'Trek berkelok, aksi menyalip hampir mustahil.' },
  { week: 5, day: 'Sabtu', gp: 'GP Netherlands', city: 'Zandvoort', laps: 36, notes: 'Sensasi rollercoaster tikungan miring (banking).' },
  { week: 5, day: 'Minggu', gp: 'GP Italy', city: 'Monza', laps: 26, notes: "Temple of Speed, surga bagi Overtake Boost." },
  { week: 6, day: 'Jumat', gp: 'GP France', city: 'Le Castellet', laps: 28, notes: 'Track teknikal, tire management diuji.' },
  { week: 6, day: 'Sabtu', gp: 'GP Azerbaijan', city: 'Baku', laps: 25, notes: 'Sirkuit kota sempit & trek lurus ekstrem.' },
  { week: 6, day: 'Minggu', gp: 'GP Singapore', city: 'Singapore', laps: 30, notes: 'Ketahanan fisik di balapan malam yang panas.' },
  { week: 7, day: 'Jumat', gp: 'GP United States', city: 'Austin', laps: 28, notes: 'Sirkuit modern dengan variasi tikungan lengkap.' },
  { week: 7, day: 'Sabtu', gp: 'GP Mexico', city: 'Mexico City', laps: 35, notes: 'Tantangan teknis udara tipis di dataran tinggi.' },
  { week: 7, day: 'Minggu', gp: 'GP Sao Paulo', city: 'Brazil', laps: 35, notes: 'Trek klasik dengan potensi cuaca yang kacau.' },
  { week: 8, day: 'Jumat', gp: 'GP Las Vegas', city: 'USA', laps: 25, notes: 'Balapan malam gemerlap di kecepatan puncak.' },
  { week: 8, day: 'Sabtu', gp: 'GP Qatar', city: 'Lusail', laps: 28, notes: 'Kecepatan menikung mengalir dan presisi.' },
  { week: 8, day: 'Minggu', gp: 'GP Abu Dhabi', city: 'Yas Marina', laps: 29, notes: 'Seri penutup spektakuler transisi siang ke malam.' },
];

export const venueHistory = [
  { year: 2015, venue: 'Makuhari Messe Hall 9/10', city: 'Chiba', capacity: '~2.500', notes: 'Liga baru, tiket seri penutup sold out, sinyal kuat potensi jangka panjang.' },
  { year: 2016, venue: 'Makuhari Messe Event Hall', city: 'Chiba', capacity: '~4.000', notes: 'Naik kelas, jangkauan media internasional, basis fans militan RRQ mulai terbentuk.' },
  { year: 2017, venue: 'Ariake Colosseum', city: 'Tokyo', capacity: '~5.000', notes: 'Resmi pindah ke Tokyo, fasilitas modern, tiket konsisten sold out setiap pekan.' },
  { year: 2018, venue: 'Ariake Colosseum', city: 'Tokyo', capacity: '~5.000', notes: 'Kualitas produksi melonjak drastis, AWS masuk sebagai title sponsor, LED wall raksasa.' },
  { year: 2019, venue: 'Ariake Arena', city: 'Tokyo', capacity: '8.000–10.000', notes: 'Venue eks-Olimpiade Tokyo 2020, dikonfigurasi 8K–10K demi atmosfer intim namun megah. Panggung debut SanzJr berseragam Team Liquid.' },
];

export const prizePool = {
  total: 4000000,
  driver: [
    { pos: 'P1', amount: 138000 }, { pos: 'P2', amount: 110000 }, { pos: 'P3', amount: 89000 },
    { pos: 'P4', amount: 75000 }, { pos: 'P5', amount: 64000 }, { pos: 'P6', amount: 55000 },
    { pos: 'P7', amount: 47000 }, { pos: 'P8', amount: 40000 }, { pos: 'P9', amount: 33000 },
    { pos: 'P10', amount: 27000 }, { pos: 'P11', amount: 23000 }, { pos: 'P12', amount: 19000 },
    { pos: 'P13', amount: 16000 }, { pos: 'P14', amount: 14000 }, { pos: 'P15', amount: 11000 },
    { pos: 'P16', amount: 10000 }, { pos: 'P17', amount: 8000 }, { pos: 'P18', amount: 7000 },
    { pos: 'P19', amount: 5000 }, { pos: 'P20', amount: 4000 }, { pos: 'P21', amount: 3000 },
    { pos: 'P22', amount: 2000 },
  ],
  constructor: [
    { pos: 'P1', amount: 310000 }, { pos: 'P2', amount: 233000 }, { pos: 'P3', amount: 177000 },
    { pos: 'P4', amount: 133000 }, { pos: 'P5', amount: 102000 }, { pos: 'P6', amount: 78000 },
    { pos: 'P7', amount: 59000 }, { pos: 'P8', amount: 43000 }, { pos: 'P9', amount: 31000 },
    { pos: 'P10', amount: 22000 }, { pos: 'P11', amount: 12000 },
  ],
};

export const abilitySystem = [
  { ability: 'Overtake Boost', effect: 'Kecepatan +15 km/h selama 5 detik', max: '2×', cooldown: '10 lap', penalty: '+10% degradasi ban' },
  { ability: 'Defense Shield', effect: 'Proteksi aero selama 3 lap', max: '2×', cooldown: '8 lap', penalty: 'Kecepatan −5 km/h' },
  { ability: 'Traction Control Assist', effect: 'Stabilitas instan mobil', max: '3×', cooldown: '5 lap', penalty: 'Konsumsi BBM +8%' },
];

export const penaltyPoints = [
  { violation: 'Tabrakan disengaja (collision)', points: -3 },
  { violation: 'Mengemudi berbahaya (dangerous driving)', points: -3 },
  { violation: 'Tindakan tidak sportif (unsportsmanlike)', points: -2 },
  { violation: 'Melanggar batas lintasan berulang (track limits)', points: -1 },
];

export const racePoints = [
  { pos: 'P1', pts: 25 }, { pos: 'P2', pts: 18 }, { pos: 'P3', pts: 15 },
  { pos: 'P4', pts: 12 }, { pos: 'P5', pts: 10 }, { pos: 'P6', pts: 8 },
  { pos: 'P7', pts: 6 }, { pos: 'P8', pts: 4 }, { pos: 'P9', pts: 2 },
  { pos: 'P10', pts: 1 }, { pos: 'Fastest Lap', pts: '+1' },
];
