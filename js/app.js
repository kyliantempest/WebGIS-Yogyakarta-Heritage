// ==========================================================================
// WebGIS Heritage Yogyakarta - Core Logic Engine (Penyamaan Warna Soft Krem)
// ==========================================================================
let map;
let markersLayer;
let routeLayer;
let routePointsLayer; 
let currentFilter = 'semua';
const CATEGORY_COLORS = {
  keraton:      { color: '#dfb76c' }, 
  kolonial:     { color: '#a3a9b3' }, 
  pelestarian:  { color: '#dfcbb5' }, 
  religi:       { color: '#9cb3a8' }, 
  modern:       { color: '#dfcbb5' }  
};

// ==========================================================================
// DATABASE LOKAL LENGKAP (TANDA BACA SUDAH DIRAPIKAN)
// ==========================================================================
let allFeatures = [
  {
    id: 1,
    nama: "Keraton Ngayogyakarta Hadiningrat",
    kategori_id: "keraton",
    kategori: "Peninggalan Keraton / Kawasan Istana Kerajaan",
    koordinat: [-7.805328, 110.364385],
    tahun: "1755 M (berdasarkan Perjanjian Giyanti, 13 Februari 1755)",
    pembangun: "Sri Sultan Hamengku Buwono I (Pangeran Mangkubumi)",
    status: "Aktif - Dihuni (Living Monument) & UNESCO Tentative List",
    gambar: ["images/keraton.png", "images/keraton2.png", "images/keraton3.png"],
    deskripsi: "Keraton Ngayogyakarta Hadiningrat merupakan pusat kebudayaan Jawa yang masih aktif dan menjadi kediaman resmi Sri Sultan Hamengku Buwono X hingga hari ini. Dibangun pada tahun 1755 oleh Sri Sultan Hamengku Buwono I pasca Perjanjian Giyanti yang membelah Kerajaan Mataram Islam menjadi dua, yaitu Kasultanan Yogyakarta dan Kasunanan Surakarta.",
    fakta: [
      "Luas kompleks: ±14.000 m² (Kompleks Inti Keraton)",
      "Dibangun: 9 Oktober 1755",
      "Terdaftar UNESCO World Heritage Tentative List",
      "Masih ditempati Sultan secara aktif"
    ],
    website: "https://www.kratonjogja.id/"
  },
  {
    id: 2,
    nama: "Tugu Yogyakarta",
    kategori_id: "keraton",
    kategori: "Monumen / Landmark Poros Kosmis",
    koordinat: [-7.782906, 110.367078],
    tahun: "1756 M / Rekonstruksi 1889 M",
    pembangun: "Sri Sultan Hamengku Buwono I / Rekonstruksi oleh Pemerintah Belanda",
    status: "Cagar Budaya Nasional",
    gambar: ["images/tugu.png", "images/tugu2.png"], 
    deskripsi: "Tugu Yogyakarta adalah monumen ikonik yang berdiri tepat di persimpangan Jalan Mangkubumi dan Jalan Jenderal Sudirman, menandai titik utara poros kosmis Kota Yogyakarta. Tugu pertama kali dibangun pada tahun 1756 atas perintah Sri Sultan Hamengku Buwono I.",
    fakta: [
      "Tinggi tugu saat ini: 15 meter",
      "Garis Poros Imajiner: Merapi - Tugu - Keraton - Parangkusumo",
      "Titik acuan utama tata ruang dan perencanaan kota Yogyakarta"
    ],
    website: "https://www.kratonjogja.id/tata-rakiting/11-tugu-golong-gilig-simbol-persatuan-raja-dan-rakyat/"
  },
  {
    id: 3,
    nama: "Taman Sari",
    kategori_id: "keraton",
    kategori: "Peninggalan Keraton / Istana Air",
    koordinat: [-7.809939, 110.359027],
    tahun: "1758 M - 1765 M",
    pembangun: "Sri Sultan Hamengku Buwono I",
    status: "Cagar Budaya Nasional",
    gambar: ["images/tamansari.png", "images/tamansari2.png"],
    deskripsi: "Taman Sari (secara harfiah berarti 'taman yang indah') adalah kompleks istana air milik Keraton Yogyakarta yang dibangun antara tahun 1758 hingga 1765. Tempat ini berfungsi sebagai kompleks multi-fungsi.",
    fakta: [
      "Umbul Binangun: tiga kolam pemandian berlapis yang megah",
      "Sumur Gumuling: bangunan masjid bawah tanah dengan sistem akustik lingkaran unik"
    ],
    website: "https://www.kratonjogja.id/tata-rakiting/13-tamansari/"
  },
  {
    id: 4,
    nama: "Pura Pakualaman",
    kategori_id: "keraton",
    kategori: "Istana Kadipaten / Pusat Pemerintahan Kedua",
    koordinat: [-7.800770, 110.376142],
    tahun: "1813 M",
    pembangun: "Sri Paku Alam I (Pangeran Notokusumo)",
    status: "Cagar Budaya & Istana Kadipaten Aktif",
    gambar: ["images/purapakualaman.png", "images/purapakualaman2.png", "images/purapakualaman3.png"],
    deskripsi: "Pura Pakualaman adalah pusat pemerintahan Kadipaten Pakualaman, sebuah entitas kerajaan yang berdiri terpisah dari Kasultanan Yogyakarta. Kadipaten ini lahir pada tahun 1813 melalui perjanjian dengan pihak Inggris.",
    fakta: [
      "Resmi berdiri: 17 Maret 1813",
      "Paku Alam X menjabat secara aktif sebagai Wakil Gubernur DIY",
      "Perpaduan arsitektur yang kuat antara gaya Jawa Tradisional dan Klasik Eropa"
    ],
    website: "https://jogjacagar.jogjaprov.go.id/detail/1084/puro-pakualaman"
  },
  {
    id: 5,
    nama: "Benteng Vredeburg",
    kategori_id: "kolonial",
    kategori: "Arsitektur Kolonial / Museum Sejarah",
    koordinat: [-7.800367, 110.365368],
    tahun: "1760 M (Batu Bata diperkuat 1787 M)",
    pembangun: "VOC (Belanda) atas izin Sri Sultan Hamengku Buwono I",
    status: "Museum Negeri (Kementerian Pendidikan dan Kebudayaan)",
    gambar: ["images/benteng3.png", "images/benteng2.png"], 
    deskripsi: "Benteng Vredeburg dibangun pada tahun 1760 atas permintaan Sri Sultan Hamengku Buwono I kepada VOC. Secara resmi, pembangunannya dimaksudkan untuk melindungi Keraton, namun kenyataannya untuk mengawasi aktivitas internal istana.",
    fakta: [
      "Nama 'Vredeburg' memiliki arti 'Benteng Perdamaian'",
      "Koleksi utama: 55 adegan diorama 3D sejarah perjuangan nasional",
      "Memiliki menara pengawas (bastion) di empat penjuru mata angin"
    ],
    website: "https://kebudayaan.jogjakota.go.id/page/index/benteng-vredeburg"
  },
  {
    id: 6,
    nama: "Gedung Agung (Istana Kepresidenan Yogyakarta)",
    kategori_id: "kolonial",
    kategori: "Arsitektur Kolonial / Istana Negara",
    koordinat: [-7.800182, 110.363890],
    tahun: "1824 M / Renovasi Gempa 1869 M",
    pembangun: "A.H. Smissaert (Residen Belanda)",
    status: "Istana Kepresidenan RI Aktif",
    gambar: ["images/gedungagung.png", "images/gedungagung2.png", "images/gedungagung3.png"],
    deskripsi: "Gedung Agung, atau secara resmi disebut Istana Kepresidenan Yogyakarta, adalah salah satu dari sukses istana kepresidenan Republik Indonesia. Dibangun pada tahun 1824 dengan gaya neoklasik Eropa.",
    fakta: [
      "Menjadi pusat Ibu Kota RI de facto: 4 Januari 1946 - 27 Desember 1949",
      "Tempat pelantikan Jenderal Soedirman sebagai Panglima Besar TNI",
      "Gaya Arsitektur: Neo-Klasik Eropa yang disesuaikan dengan iklim tropis"
    ],
    website: "https://setneg.go.id/baca/index/istana_yogyakarta"
  },
  {
    id: 7,
    nama: "Kantor Pos Besar Yogyakarta",
    kategori_id: "kolonial",
    kategori: "Arsitektur Kolonial / Fasilitas Publik",
    koordinat: [-7.801709726576891, 110.3652345162907],
    tahun: "Awal Abad ke-20 (±1912 M)",
    pembangun: "Pemerintah Kolonial Hindia Belanda (Burgerlijke Openbare Werken)",
    status: "Cagar Budaya & Kantor Aktif PT Pos Indonesia",
    gambar: ["images/kantorpos.png", "images/kantorpos2.png", "images/kantorpos3.png"],
    deskripsi: "Kantor Pos Besar Yogyakarta adalah salah satu bangunan bersejarah paling menonjol di kawasan Titik Nol Kilometer Yogyakarta. Berdiri megah di sisi timur perempatan sejak awal abad ke-20.",
    fakta: [
      "Terletak strategis di pusat cagar budaya Titik Nol Kilometer Yogyakarta",
      "Gaya arsitektur utama: Kolonial Art Deco awal abad 20",
      "Masih beroperasi aktif penuh sebagai kantor pos utama pelayanan publik"
    ],
    website: "https://jogjacagar.jogjaprov.go.id/detail/123/kantor-pos-besar"
  },
  {
    id: 8,
    nama: "Hotel Garuda (Grand Inna Malioboro)",
    kategori_id: "kolonial",
    kategori: "Arsitektur Kolonial / Perhotelan Heritage",
    koordinat: [-7.790676, 110.366991],
    tahun: "1908 M",
    pembangun: "Pemerintah Kolonial Hindia Belanda / Maskapai Kereta Api",
    status: "Cagar Budaya & Hotel Aktif (BUMN PT HIN)",
    gambar: ["images/hotelgaruda.png", "images/hotelgaruda2.png", "images/hotelgaruda3.png"],
    deskripsi: "Grand Hotel de Djokdja (begitu nama aslinya saat pertama dibuka pada tahun 1908) adalah hotel tertua dan paling ikonik di Yogyakarta. Berlokasi tepat di ujung utara Jalan Malioboro.",
    fakta: [
      "Telah berdiri sejak tahun 1908 (berusia lebih dari 110 tahun)",
      "Pernah menjadi tempat tinggal sementara sekaligus markas Jenderal Soedirman",
      "Mengalami rekonstruksi internal modern tanpa mengubah struktur fasad heritage depan"
    ],
    website: "https://visitingjogja.jogjaprov.go.id/34883/grand-inna-malioboro/"
  },
  {
    id: 9,
    nama: "Plengkung Gading (Nirbaya)",
    kategori_id: "pelestarian",
    kategori: "Kawasan Pelestarian / Gerbang Benteng",
    koordinat: [-7.813667, 110.362958],
    tahun: "Abad ke-18 (±1756 M)",
    pembangun: "Sri Sultan Hamengku Buwono I",
    status: "Cagar Budaya Nasional",
    gambar: ["images/plengkunggading.png", "images/plengkunggading2.png", "images/plengkunggading3.png"],
    deskripsi: "Plengkung Gading atau Plengkung Nirbaya adalah gerbang paling selatan dari tembok Baluwarti, yaitu tembok keliling Keraton Yogyakarta yang membentang sepanjang ±4 kilometer.",
    fakta: [
      "Gerbang pertahanan sisi paling selatan Tembok Baluwarti Keraton",
      "Pantangan adat: Sultan aktif dilarang melintasi plengkung ini",
      "Secara historis hanya dilalui iringan jenazah raja menuju kompleks Imogiri"
    ],
    website: "https://visitingjogja.jogjaprov.go.id/31138/mengenal-plengkung-gading-bangunan-bersejarah-di-yogyakarta//"
  },
  {
    id: 10,
    nama: "Plengkung Wijilan",
    kategori_id: "pelestarian",
    kategori: "Kawasan Pelestarian / Gerbang Benteng",
    koordinat: [-7.803306, 110.366653],
    tahun: "Abad ke-18 (±1756 M)",
    pembangun: "Sri Sultan Hamengku Buwono I",
    status: "Cagar Budaya Nasional",
    gambar: ["images/plengkungwijilan.png", "images/plengkungwijilan2.png"],
    deskripsi: "Plengkung Wijilan adalah gerbang sisi timur laut dari Tembok Baluwarti, yakni bagian dari sistem pertahanan melingkar Keraton Yogyakarta. Menjadi pusat akses kuliner lokal terkemuka.",
    fakta: [
      "Gerbang pertahanan sisi timur laut Tembok Baluwarti Keraton",
      "Pusat kawasan wisata kuliner Gudeg Wijilan terlama di Yogyakarta",
      "Menghubungkan jalan utama pusat kota dengan Alun-Alun Utara dan Keraton"
    ],
    website: "https://www.kratonjogja.id/tata-rakiting/5-benteng-keraton-yogyakarta/"
  },
  {
    id: 11,
    nama: "Plengkung Jagabaya",
    kategori_id: "pelestarian",
    kategori: "Kawasan Pelestarian / Gerbang Benteng",
    koordinat: [-7.808551, 110.356238],
    tahun: "Abad ke-18 (±1756 M)",
    pembangun: "Sri Sultan Hamengku Buwono I",
    status: "Cagar Budaya Nasional",
    gambar: ["images/plengkungjagabaya.png", "images/plengkungjagabaya2.png"],
    deskripsi: "Plengkung Jagabaya adalah gerbang di sisi barat daya Tembok Baluwarti, melengkapi sistem lima plengkung utama yang mengelilingi pusat inti Keraton Yogyakarta.",
    fakta: [
      "Gerbang pertahanan benteng sisi barat daya Tembok Baluwarti Keraton",
      "Arti nama filosofis: 'Jagabaya' = Pengawal/Penjaga Keselamatan dari Bahaya",
      "Kondisi lingkungan sekitar cenderung lebih tenang dan asri"
    ],
    website: "https://www.kratonjogja.id/tata-rakiting/5-benteng-keraton-yogyakarta/"
  },
  {
    id: 12,
    nama: "Masjid Gedhe Kauman",
    kategori_id: "religi",
    kategori: "Bangunan Religi / Masjid Kerajaan",
    koordinat: [-7.803752, 110.362443],
    tahun: "1773 M",
    pembangun: "Sri Sultan Hamengku Buwono I & Kiai Faqih Ibrahim Diponingrat",
    status: "Masjid Raya Kerajaan & Cagar Budaya Nasional",
    gambar: ["images/mesjidgedhe.png", "images/mesjidgedhe2.png"],
    deskripsi: "Masjid Gedhe Kauman adalah masjid kerajaan utama Kasultanan Ngayogyakarta Hadiningrat, didirikan pada tahun 1773. Letaknya di sisi barat Alun-Alun Utara Keraton.",
    fakta: [
      "Resmi didirikan: 29 Mei 1773 (Masjid Raya tertua di wilayah Kota Yogyakarta)",
      "Gaya Arsitektur: Struktur utama kayu jati tanpa paku dengan model Atap Tajug Tumpang Tiga",
      "Tempat lahirnya pergerakan pembaruan Islam nasional Muhammadiyah (1912)"
    ],
    website: "https://www.kratonjogja.id/tata-rakiting/10-kagungan-dalem-masjid-gedhe/"
  },
  {
    id: 13,
    nama: "Makam Raja-Raja Imogiri",
    kategori_id: "religi",
    kategori: "Bangunan Religi / Pemakaman Suci Kerajaan",
    koordinat: [-7.918712, 110.395027],
    tahun: "1632 M",
    pembangun: "Sultan Agung Hanyokrokusumo (Raja Mataram Islam)",
    status: "Cagar Budaya Nasional & Kompleks Pemakaman Sakral",
    gambar: ["images/makam1.png", "images/makam2.png"], 
    deskripsi: "Makam Raja-Raja Imogiri adalah kompleks pemakaman kerajaan paling sakral di tanah Yogyakarta. Dibangun pada tahun 1632 oleh Sultan Agung Hanyokrokusumo, raja terbesar Kerajaan Mataram Islam.",
    fakta: [
      "Didirikan tahun 1632 oleh raja terbesar Mataram, Sultan Agung",
      "Jumlah anak tangga penghubung menuju pelataran utama: 345 buah",
      "Kewajiban adat: Wajib menyewa dan mengenakan pakaian adat Jawa resmi untuk memasuki pelataran"
    ],
    website: "https://www.kratonjogja.id/tata-rakiting/17-makam-imogiri-peristirahatan-raja-raja-mataram/"
  },
  {
    id: 14,
    nama: "Museum Sonobudoyo",
    kategori_id: "modern",
    kategori: "Bangunan Modern / Museum Arkeologi Jawa",
    koordinat: [-7.802426, 110.363704],
    tahun: "1935 M",
    pembangun: "Java Instituut / Arsitek Ir. Th. Karsten",
    status: "Museum Negeri Tingkat Provinsi DIY",
    gambar: ["images/sonobudoyo.png", "images/sonobudoyo2.png"],
    deskripsi: "Museum Sonobudoyo adalah museum arkeologi, etnografi, dan kebudayaan Jawa terbesar dan terlengkap di Yogyakarta, diresmikan oleh Sri Sultan Hamengku Buwono VIII pada 6 November 1935.",
    fakta: [
      "Resmi membuka: 6 November 1935 oleh Java Instituut",
      "Koleksi artefak: Menyimpan lebih dari 43.000 benda pusaka dan purbakala Jawa",
      "Arsitektur gedung utama dirancang oleh Ir. Thomas Karsten dengan perpaduan Joglo-Modern"
    ],
    website: "https://sonobudoyo.com/"
  },
  {
    id: 15,
    nama: "Pasar Beringharjo",
    kategori_id: "pelestarian",
    kategori: "Kawasan Pelestarian / Pasar Tradisional",
    koordinat: [-7.798369, 110.365042],
    tahun: "1758 M (Pasar) / 1925 M (Bangunan Permanen)",
    pembangun: "Sri Sultan Hamengku Buwono I / Nedhandel NV",
    status: "Cagar Budaya & Pusat Ekonomi Rakyat Aktif",
    gambar: ["images/pasarbringharjo.png", "images/pasarbringharjo2.png"],
    deskripsi: "Pasar Beringharjo merupakan pasar tradisional tertua dan terbesar di Yogyakarta. Secara historis, kawasan ini awalnya adalah hutan beringin. Nama 'Beringharjo' diberikan oleh Sri Sultan Hamengku Buwono VIII, dengan harapan kawasan beringin (bering) ini dapat memberikan kesejahteraan (harjo). Pasar ini menjadi salah satu pilar tata ruang Catur Gatra Tunggal (Keraton, Alun-alun, Masjid, dan Pasar).",
    fakta: [
      "Merupakan salah satu pilar konsep tata ruang Catur Gatra Tunggal",
      "Mulai dibangun permanen dengan arsitektur perpaduan Kolonial-Jawa pada tahun 1925",
      "Menjadi pusat grosir dan eceran batik terbesar di Daerah Istimewa Yogyakarta"
    ],
    website: "https://pariwisata.jogjakota.go.id/detail/index/324"
  }
];

// STRUKTUR SELEKSI JENIS IKON FONT-AWESOME
function getFeatureIconClass(buildingName, kategoriId) {
  let iconClass = "fa-solid fa-landmark"; 
  const nameLower = buildingName.toLowerCase();
  
  if (nameLower.includes("plengkung") || nameLower.includes("gapura")) {
    iconClass = "fa-solid fa-archway";
  } else if (nameLower.includes("tugu") || nameLower.includes("monumen")) {
    iconClass = "fa-solid fa-monument";
  } else if (nameLower.includes("keraton") || nameLower.includes("istana") || nameLower.includes("tamansari")) {
    iconClass = "fa-solid fa-gopuram";
  } else if (nameLower.includes("pasar") || nameLower.includes("beringharjo")) {
    iconClass = "fa-solid fa-shop"; 
  } else if (kategoriId === "religi") {
    if (nameLower.includes("masjid") || nameLower.includes("makam")) iconClass = "fa-solid fa-mosque";
    else if (nameLower.includes("gereja")) iconClass = "fa-solid fa-church";
  } else if (kategoriId === "kolonial") {
    if (nameLower.includes("benteng")) iconClass = "fa-solid fa-shield-halved";
    else iconClass = "fa-solid fa-building-columns";
  } else if (kategoriId === "modern") {
    iconClass = "fa-solid fa-city";
  }
  
  return iconClass;
}

function generateIconHtml(buildingName, kategoriId, context) {
  const iconClass = getFeatureIconClass(buildingName, kategoriId);
  const cat = CATEGORY_COLORS[kategoriId] || { color: '#dfcbb5' };
  
  if (context === 'map') {
    return `
      <div class="map-free-icon-container" style="--soft-color: ${cat.color};">
        <i class="${iconClass}"></i>
      </div>`;
  } else {
    return `
      <div class="glow-icon-frame" style="--soft-color: ${cat.color};">
        <i class="${iconClass}"></i>
      </div>`;
  }
}

function formatKategoriText(text) {
  if (!text) return '';
  return text.toLowerCase().replace(/(^\w|\s\w)/g, m => m.toUpperCase());
}

function initMap() {
  map = L.map('map', {
    center: [-7.800, 110.366],
    zoom: 14,
    zoomControl: false
  });
  
  const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
  });
  
  const satLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles © Esri',
    maxZoom: 18
  });
  
  osmLayer.addTo(map);
  
  const baseMaps = {
    "Peta Utama": osmLayer,
    "Citra Satelit": satLayer
  };
  
  L.control.layers(baseMaps, {}, { collapsed: false }).addTo(map);
  
  markersLayer = L.layerGroup().addTo(map);
  routeLayer = L.layerGroup().addTo(map);
  routePointsLayer = L.layerGroup().addTo(map); 
  
  loadHeritageData();
}

function loadHeritageData() {
  renderMarkers(allFeatures);
  renderBuildingList(allFeatures);
  populateRouteDropdowns(allFeatures);
  
  setTimeout(() => {
    document.getElementById('loading-overlay')?.classList.add('hidden');
  }, 500);
  
  updateStatusBar(allFeatures.length);
}

function renderMarkers(features) {
  markersLayer.clearLayers();
  
  const leafletProfilImages = {
    1: "profil_keraton.png",
    2: "profil_tugu.png",
    3: "profil_tamansari.png",
    4: "profil_pakualaman.png",
    5: "profil_benteng.png",
    6: "profil_istanaagung.png", 
    7: "profil_kantorpos.png",
    8: "profil_hotelgrandinna.png", 
    9: "profil_plengkungnirbaya.png", 
    10: "profil_plengkungwijilan.png",
    11: "profil_plengkungnirbaya.png", 
    12: "profil_mesjid.png", 
    13: "profil_makamraja.png",
    14: "profil_sonobudoyo.png",
    15: "profil_pasarbringharjo.png" 
  };
  
  features.forEach(f => {
    const iconHtml = generateIconHtml(f.nama, f.kategori_id, 'map');
    const icon = L.divIcon({
      className: '',
      html: iconHtml,
      iconSize: [32, 32],
      iconAnchor: [16, 16],
      popupAnchor: [0, -10]
    });
    
    const marker = L.marker(f.koordinat, { icon });
    const profilFileName = leafletProfilImages[f.id] || "profil_keraton.png";
    const imagePath = `images/leaflet_profil/${profilFileName}`;
  
    const popupContent = `
      <div class="custom-leaflet-popup" style="width: 620px; font-family: 'Open Sans', sans-serif; color: #ffffff; background: #150d08; overflow: hidden; border-radius: 8px;">
        <div style="width: 100%; height: 350px; overflow: hidden; position: relative; border-bottom: 3px solid #d4a017;">
          <img src="${imagePath}" alt="${f.nama}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none';">
        </div>
        <div style="padding: 18px; background: #1a100a;">
          <div class="popup-title" style="font-family: 'Open Sans', sans-serif; font-weight: 700; font-size: 15px; color: #d4a017; margin-bottom: 6px; text-transform: uppercase; line-height: 1.4; letter-spacing: 0.5px; word-wrap: break-word;">
            ${f.nama}
          </div>
          <div class="popup-kat" style="font-size: 11px; color: #a3a9b3; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0;">
            <i class="fa-solid fa-bookmark" style="color: #dfb76c; margin-right: 6px;"></i> ${formatKategoriText(f.kategori_id)}
          </div>
        </div>
      </div>
    `;
    
    marker.bindPopup(popupContent, { 
      maxWidth: 620,
      minWidth: 620,
      className: 'heritage-popup-wrapper'
    });
    
    marker.on('click', () => {
      showBuildingInfo(f);
      highlightListItem(f.id);
    });
    
    marker.featureId = f.id;
    markersLayer.addLayer(marker);
  });
}

function renderBuildingList(features) {
  const list = document.getElementById('building-list');
  if (!list) return;
  
  list.innerHTML = '';
  
  features.forEach(f => {
    const cat = CATEGORY_COLORS[f.kategori_id] || { color: '#dfcbb5' };
    const iconHtml = generateIconHtml(f.nama, f.kategori_id, 'sidebar');
    
    const item = document.createElement('div');
    item.className = 'building-item';
    item.dataset.id = f.id;
    
    item.innerHTML = `
      <div class="building-icon">${iconHtml}</div>
      <div class="building-info">
        <h3>${f.nama.toUpperCase()}</h3>
        <div class="kategori-tag" style="color: ${cat.color}">${formatKategoriText(f.kategori_id)}</div>
        <div class="tahun">Tahun Berdiri: ${f.tahun ? f.tahun.substring(0, 7) : '-'}</div>
      </div>`;
      
    item.addEventListener('click', () => {
      map.flyTo(f.koordinat, 17, { duration: 1.2 });
      showBuildingInfo(f);
      highlightListItem(f.id);
      switchTab('info');
    });
    
    list.appendChild(item);
  });
}

function filterByKategori(kategori, element) {
  currentFilter = kategori;
  
  if (element) {
    const prevActive = document.querySelector('#filter-bar .filter-btn.active');
    if (prevActive) prevActive.classList.remove('active');
    element.classList.add('active');
  }
  
  const filtered = (kategori === 'semua') 
    ? allFeatures 
    : allFeatures.filter(f => f.kategori_id === kategori);
    
  renderMarkers(filtered);
  renderBuildingList(filtered);
}

function flyToCoordinates(coords) {
  map.flyTo(coords, 17, { duration: 1.2 });
}

function showBuildingInfo(f) {
  const panel = document.getElementById('info-panel');
  if (!panel) return;
  
  const placeholderIcon = generateIconHtml(f.nama, f.kategori_id, 'sidebar');
  let imgHtml = '';
  
  if (f.gambar && Array.isArray(f.gambar) && f.gambar.length > 0) {
    imgHtml = `
      <div class="info-image-container">
        <button class="slide-btn prev">❮</button>
        <img id="slider-img" src="${f.gambar[0]}" alt="${f.nama}" style="width:100%; height:100%; object-fit:cover;">
        <button class="slide-btn next">❯</button>
      </div>`;
      
    setTimeout(() => {
      let currentIdx = 0;
      const img = document.getElementById('slider-img');
      const prevBtn = document.querySelector('.slide-btn.prev');
      const nextBtn = document.querySelector('.slide-btn.next');
      
      if (img && prevBtn && nextBtn) {
        prevBtn.onclick = (e) => {
          e.stopPropagation();
          currentIdx = (currentIdx - 1 + f.gambar.length) % f.gambar.length;
          img.src = f.gambar[currentIdx];
        };
        nextBtn.onclick = (e) => {
          e.stopPropagation();
          currentIdx = (currentIdx + 1) % f.gambar.length;
          img.src = f.gambar[currentIdx];
        };
      }
    }, 50);
  } else if (f.gambar && typeof f.gambar === 'string' && f.gambar.trim() !== '') {
    imgHtml = `
      <div class="info-image-container">
        <img src="${f.gambar}" alt="${f.nama}" style="width:100%; height:100%; object-fit:cover;" onerror="this.parentElement.innerHTML='<div class=\\'info-image-placeholder\\'>${placeholderIcon}</div>'">
      </div>`;
  } else {
    imgHtml = `<div class="info-image-container"><div class="info-image-placeholder">${placeholderIcon}</div></div>`;
  }
  
  let faktaHTML = "";
  if (f.fakta && f.fakta.length > 0) {
    faktaHTML = f.fakta.map(item => `
      <li style="margin-bottom: 7px; font-size: 12.5px; color: #e4dcd3; display: flex; align-items: flex-start; gap: 8px;">
        <span style="color: #d4a017; margin-top: 2px;">▸</span>
        <span>${item}</span>
      </li>
    `).join('');
  }
  
  panel.innerHTML = `
    ${imgHtml}
    <div style="padding: 10px 0;">
      <span style="display: inline-block; background: #25160c; color: #d4a017; font-size: 10px; font-weight: 700; padding: 3px 8px; border-radius: 3px; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 12px; border: 1px solid #3d2717;">
        ${f.kategori_id}
      </span>
      
      <h2 style="font-family: 'Open Sans', sans-serif; color: #d4a017; font-size: 19px; line-height: 1.4; margin: 0 0 15px 0; font-weight: 700; letter-spacing: 0.5px;">
        ${f.nama.toUpperCase()}
      </h2>
      
      <table style="width: 100%; border-collapse: collapse; font-size: 12.5px; margin-bottom: 18px; color: #ffffff;">
        <tr style="border-bottom: 1px solid #25160c;"><td style="padding: 7px 0; color: #a3a9b3; width: 32%;"><i class="fa-solid fa-calendar-days" style="width:16px;"></i> Tahun</td><td style="padding: 7px 0; font-weight: 600; color: #dfb76c;">${f.tahun}</td></tr>
        <tr style="border-bottom: 1px solid #25160c;"><td style="padding: 7px 0; color: #a3a9b3;"><i class="fa-solid fa-person-digging" style="width:16px;"></i> Pembangun</td><td style="padding: 7px 0; color: #e4dcd3;">${f.pembangun}</td></tr>
        <tr style="border-bottom: 1px solid #25160c;"><td style="padding: 7px 0; color: #a3a9b3;"><i class="fa-solid fa-bookmark" style="width:16px;"></i> Status</td><td style="padding: 7px 0; color: #dfcbb5; font-style: italic;">${f.status}</td></tr>
        <tr style="border-bottom: 1px solid #25160c;"><td style="padding: 7px 0; color: #a3a9b3;"><i class="fa-solid fa-location-crosshairs" style="width:16px;"></i> Koordinat</td><td style="padding: 7px 0; font-family: monospace; color: #a3a9b3;">${f.koordinat.join(', ')}</td></tr>
      </table>
      
      <div style="height: 1px; background: linear-gradient(to right, #25160c, #d4a017, #25160c); margin: 15px 0;"></div>
      
      <h3 style="font-family: 'Open Sans', sans-serif; font-size: 13px; color: #d4a017; margin: 0 0 8px 0; letter-spacing: 0.5px;">DESKRIPSI SEJARAH</h3>
      <p style="font-size: 12.5px; line-height: 1.6; color: #e4dcd3; text-align: justify; margin: 0 0 15px 0;">
        ${f.deskripsi}
      </p>
      
      <div style="height: 1px; background: linear-gradient(to right, #25160c, #d4a017, #25160c); margin: 15px 0;"></div>
      
      <h3 style="font-family: 'Open Sans', sans-serif; font-size: 13px; color: #d4a017; margin: 0 0 10px 0; letter-spacing: 0.5px;">DATA & FAKTA PENTING</h3>
      <ul style="list-style: none; padding: 0; margin: 0 0 15px 0;">
        ${faktaHTML}
      </ul>
      
      <div style="height: 1px; background: linear-gradient(to right, #25160c, #d4a017, #25160c); margin: 15px 0;"></div>
      
      <a href="${f.website}" target="_blank" style="display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; background: #d4a017; color: #150d08; text-decoration: none; padding: 10px; border-radius: 4px; font-size: 12px; font-weight: 700; transition: background 0.2s ease; margin-top: 10px; border: 1px solid #3d2717;">
        <i class="fa-solid fa-arrow-up-right-from-square"></i> KUNJUNGI WEBSITE RESMI
      </a>
      
      <div style="display: flex; gap: 10px; margin-top: 15px;">
        <button class="btn-fokus-action" style="flex: 1;" onclick="focusOnBuilding(${f.id})"><i class="fa-solid fa-crosshairs"></i> Fokus Peta</button>
        <button class="btn-fokus-action outline" style="flex: 1;" onclick="setRouteFrom(${f.id})"><i class="fa-solid fa-location-dot"></i> Asal Rute</button>
      </div>
    </div>
  `;
}

function focusOnBuilding(id) {
  const f = allFeatures.find(feat => feat.id === id);
  if (f) {
    map.flyTo(f.koordinat, 17, { duration: 1.2 });
    markersLayer.eachLayer(layer => {
      if (layer.featureId === id) layer.openPopup();
    });
  }
}

function highlightListItem(id) {
  document.querySelectorAll('.building-item').forEach(item => {
    item.classList.toggle('selected', parseInt(item.dataset.id) === id);
  });
}

function switchTab(tabName) {
  document.querySelectorAll('.tab-bar .tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });
  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === `panel-${tabName}`);
  });
}

function populateRouteDropdowns(features) {
  const fromSel = document.getElementById('route-from');
  const toSel = document.getElementById('route-to');
  
  if (!fromSel || !toSel) return;
  
  fromSel.innerHTML = '<option value="">-- Pilih Objek Lokasi --</option>';
  fromSel.innerHTML += '<option value="current" style="color:#d4a017; font-weight:bold;">📍 Lokasi Terkini Saya (GPS)</option>';
  
  toSel.innerHTML = '<option value="">-- Pilih Objek Lokasi --</option>';
  
  features.forEach(f => {
    const opt1 = document.createElement('option');
    opt1.value = f.id;
    opt1.textContent = f.nama.toUpperCase();
    fromSel.appendChild(opt1);
    
    const opt2 = document.createElement('option');
    opt2.value = f.id;
    opt2.textContent = f.nama.toUpperCase();
    toSel.appendChild(opt2);
  });
}

function setRouteFrom(id) {
  switchTab('rute');
  const fromSel = document.getElementById('route-from');
  if (fromSel) fromSel.value = id;
}

function calculateRoute() {
  const fromValue = document.getElementById('route-from')?.value;
  const toId = parseInt(document.getElementById('route-to')?.value);
  const mode = document.getElementById('route-mode')?.value || 'driving'; 
  const resDiv = document.getElementById('route-result');
  
  if (!resDiv) return;
  if (!fromValue || !toId) { resDiv.innerHTML = '<span style="color:#ff4d4d">Tentukan asal dan tujuan!</span>'; return; }
  if (fromValue == toId) { resDiv.innerHTML = '<span style="color:#ff4d4d">Lokasi tidak boleh sama!</span>'; return; }
  
  const tNode = allFeatures.find(f => f.id === toId);
  const [lat2, lng2] = tNode.koordinat;

  routeLayer.clearLayers();
  routePointsLayer.clearLayers();
  
  if (fromValue === 'current') {
    if ("geolocation" in navigator) {
      resDiv.innerHTML = '<div style="text-align:center; padding: 10px;"><i class="fa-solid fa-location-crosshairs fa-beat-fade" style="color:#d4a017; font-size: 24px;"></i><br><span style="color:#dfb76c; font-size: 12px; display:block; margin-top:8px;">Mendeteksi GPS Lokasi Anda...</span></div>';
      
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat1 = position.coords.latitude;
          const lng1 = position.coords.longitude;
          eksekusiRuteUtama(lat1, lng1, lat2, lng2, mode, resDiv, true);
        },
        (error) => {
          resDiv.innerHTML = '<span style="color:#ff4d4d">Gagal mendapatkan lokasi. Pastikan GPS aktif dan izin browser diberikan.</span>';
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } else {
      resDiv.innerHTML = '<span style="color:#ff4d4d">Browser Anda tidak mendukung deteksi lokasi.</span>';
    }
  } else {
    resDiv.innerHTML = '<div style="text-align:center; padding: 10px;"><i class="fa-solid fa-spinner fa-spin" style="color:#d4a017; font-size: 24px;"></i><br><span style="color:#dfb76c; font-size: 12px; display:block; margin-top:8px;">Mencari jalur terbaik...</span></div>';
    const fNode = allFeatures.find(f => f.id === parseInt(fromValue));
    const [lat1, lng1] = fNode.koordinat;
    eksekusiRuteUtama(lat1, lng1, lat2, lng2, mode, resDiv, false);
  }
}

function eksekusiRuteUtama(lat1, lng1, lat2, lng2, mode, resDiv, isCurrentLocation) {
  let startHtml = '<div class="route-marker-start"><i class="fa-solid fa-play"></i></div>';
  if (isCurrentLocation) {
    startHtml = '<div class="route-marker-user"><i class="fa-solid fa-user"></i></div>';
  }
  
  const startIcon = L.divIcon({ className: '', html: startHtml, iconSize: [30,30], iconAnchor: [15,30] });
  const endIcon = L.divIcon({ className: '', html: '<div class="route-marker-end"><i class="fa-solid fa-flag-checkered"></i></div>', iconSize: [30,30], iconAnchor: [15,30] });
  
  routePointsLayer.addLayer(L.marker([lat1, lng1], {icon: startIcon}).bindPopup(isCurrentLocation ? "Lokasi Anda Berdiri" : "Titik Keberangkatan"));
  routePointsLayer.addLayer(L.marker([lat2, lng2], {icon: endIcon}).bindPopup("Tujuan"));

  const url = `https://router.project-osrm.org/route/v1/${mode}/${lng1},${lat1};${lng2},${lat2}?overview=full&geometries=geojson&steps=true`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.code === 'Ok') {
        const route = data.routes[0];
        const geometry = route.geometry; 
        
        let routeColor = '#28a745'; 
        if(mode === 'foot') routeColor = '#d4a017'; 
        if(mode === 'bike') routeColor = '#007bff'; 

        const routeLine = L.geoJSON(geometry, {
          style: { color: routeColor, weight: 6, opacity: 0.85, lineCap: 'round', lineJoin: 'round' }
        });

        const jarakKm = (route.distance / 1000).toFixed(2);
        const waktuMenit = Math.round(route.duration / 60);

        routeLine.bindTooltip(`
          <div style="text-align:center; font-family: 'Open Sans', sans-serif;">
            <strong style="font-size:13px; color:#150d08;">Jalur ${mode === 'foot' ? 'Jalan Kaki' : mode === 'bike' ? 'Sepeda' : 'Kendaraan'}</strong><br>
            <span style="color:#b83232; font-weight:600;">Jarak: ${jarakKm} Km</span>
          </div>
        `, { sticky: true, className: 'custom-tooltip' });
        
        routeLayer.addLayer(routeLine);
        map.fitBounds(routeLine.getBounds(), { padding: [50, 50] });

        let stepsHtml = '';
        if (route.legs && route.legs[0] && route.legs[0].steps) {
            stepsHtml = '<div class="route-steps-container"><h4>Panduan Navigasi Detail</h4>';
            route.legs[0].steps.forEach(step => {
                if (step.distance > 0 || step.maneuver.type === 'depart' || step.maneuver.type === 'arrive') {
                    let type = step.maneuver.type;
                    let mod = step.maneuver.modifier;
                    let dir = "Lurus terus";
                    let icon = "fa-arrow-up";

                    if (mod === 'left' || mod === 'sharp left') { dir = "Belok kiri"; icon = "fa-arrow-turn-down fa-rotate-90"; }
                    else if (mod === 'right' || mod === 'sharp right') { dir = "Belok kanan"; icon = "fa-arrow-turn-up fa-rotate-90"; }
                    else if (mod === 'slight left') { dir = "Belok serong kiri"; icon = "fa-arrow-pointer"; }
                    else if (mod === 'slight right') { dir = "Belok serong kanan"; icon = "fa-arrow-pointer"; }
                    else if (mod === 'uturn') { dir = "Putar balik"; icon = "fa-arrow-rotate-left"; }
                    else if (type === 'depart') { dir = "Mulai perjalanan"; icon = "fa-play"; }
                    else if (type === 'arrive') { dir = "Sampai di lokasi tujuan"; icon = "fa-flag-checkered"; }

                    let name = step.name ? ` di <strong>${step.name}</strong>` : '';
                    let dist = step.distance > 0 ? ` (${step.distance} m)` : '';

                    stepsHtml += `<div class="step-item"><div class="step-icon"><i class="fa-solid ${icon}"></i></div><div>${dir}${name}${dist}</div></div>`;
                }
            });
            stepsHtml += '</div>';
        }

        resDiv.innerHTML = `
          <div class="result-row"><span>Moda:</span><span class="result-v">${mode === 'foot' ? 'Pejalan Kaki' : mode === 'bike' ? 'Sepeda' : 'Kendaraan'}</span></div>
          <div class="result-row"><span>Jarak Tempuh:</span><span class="result-v">${jarakKm} km</span></div>
          <div class="result-row"><span>Estimasi Waktu:</span><span class="result-v">~${waktuMenit} menit</span></div>
          
          ${stepsHtml}

          <div style="display: flex; gap: 8px; margin-top: 15px;">
              <button style="flex: 1;" class="btn-route-action btn-gmaps" onclick="exportToGoogleMaps(${lat1}, ${lng1}, ${lat2}, ${lng2})">
                <i class="fa-solid fa-map-location-dot"></i> Google Maps
              </button>
              <button style="flex: 1;" class="btn-route-action btn-ojol" onclick="pesanOjol(${lat2}, ${lng2})">
                <i class="fa-solid fa-motorcycle"></i> Pesan Ojol
              </button>
          </div>
        `;
      } else {
        throw new Error("Rute tidak ditemukan");
      }
    })
    .catch(error => {
      console.error("Error routing:", error);
      resDiv.innerHTML = '<span style="color:#ff4d4d">Gagal menghubungkan ke server rute. Periksa koneksi internet Anda.</span>';
    });
}

function exportToGoogleMaps(lat1, lng1, lat2, lng2) {
  const mode = document.getElementById('route-mode')?.value || 'driving';
  let travelmode = 'driving';
  if (mode === 'foot') travelmode = 'walking';
  if (mode === 'bike') travelmode = 'bicycling';
  
  const url = `https://www.google.com/maps/dir/?api=1&origin=${lat1},${lng1}&destination=${lat2},${lng2}&travelmode=${travelmode}`;
  window.open(url, '_blank');
}

function pesanOjol(lat2, lng2) {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
  if (!isMobile) {
      alert("Fitur Pesan Ojol berjalan paling optimal jika dibuka melalui Smartphone/HP Anda.");
      return;
  }

  // Menampilkan pop-up pilihan layanan ke user
  const pilihan = prompt("Pilih Layanan Gojek:\nKetik 1 : GoRide (Motor)\nKetik 2 : GoCar (Mobil)", "1");

  if (pilihan === "1") {
      // Direct langsung ke menu GoRide
      const urlGoRide = `https://gojek.link/app/ride?drop_off_latitude=${lat2}&drop_off_longitude=${lng2}`;
      window.open(urlGoRide, '_blank');
  } else if (pilihan === "2") {
      // Direct langsung ke menu GoCar
      const urlGoCar = `https://gojek.link/app/car?drop_off_latitude=${lat2}&drop_off_longitude=${lng2}`;
      window.open(urlGoCar, '_blank');
  } else if (pilihan !== null) {
      // Jika input salah selain 1 atau 2
      alert("Pilihan tidak valid. Silakan ketik angka 1 atau 2.");
  }
}

function clearRoute() {
  routeLayer.clearLayers();
  routePointsLayer.clearLayers(); 
  
  if (document.getElementById('route-result')) {
    document.getElementById('route-result').innerHTML = 'Pilih lokasi awal, tujuan, dan moda transportasi untuk simulasi rute.';
  }
  if (document.getElementById('route-from')) document.getElementById('route-from').value = '';
  if (document.getElementById('route-to')) document.getElementById('route-to').value = '';
}

function updateStatusBar(count) {
  if (document.getElementById('status-count')) {
    document.getElementById('status-count').innerHTML = `<i class="fa-solid fa-database"></i> ${count} Lokasi`;
  }
  if (document.getElementById('status-zoom')) {
    document.getElementById('status-zoom').innerHTML = `<i class="fa-solid fa-sliders"></i> Zoom Level: ${map.getZoom()}`;
  }
  map.on('zoomend', () => {
    if (document.getElementById('status-zoom')) {
      document.getElementById('status-zoom').innerHTML = `<i class="fa-solid fa-sliders"></i> Zoom Level: ${map.getZoom()}`;
    }
  });
}

function zoomIn() { map.zoomIn(); }
function zoomOut() { map.zoomOut(); }
function resetView() { map.flyTo([-7.800, 110.366], 14, { duration: 1 }); }

function inisialisasiToggleSidebar() {
  const tgl = document.getElementById('toggle-sidebar'); 
  const side = document.getElementById('sidebar');       
  
  if (tgl && side) {
    tgl.onclick = function(e) {
      e.stopPropagation(); 
      side.classList.toggle('closed');
      tgl.innerHTML = side.classList.contains('closed') ? '<i class="fa-solid fa-bars"></i>' : '<i class="fa-solid fa-xmark"></i>';
      
      setTimeout(() => { 
        if (typeof map !== 'undefined' && map) { 
          map.invalidateSize({ animate: true }); 
        } 
      }, 300);
    };
  }
}

window.addEventListener('DOMContentLoaded', () => {
  initMap(); 
  inisialisasiToggleSidebar();

  const urlParams = new URLSearchParams(window.location.search);
  const fokusId = urlParams.get('fokus');
  
  if (fokusId) {
    const idTarget = parseInt(fokusId);
    const featureTarget = allFeatures.find(f => f.id === idTarget);
    
    if (featureTarget) {
      setTimeout(() => {
        // HANYA TERBANG KE TITIK LOKASI SAJA (TANPA MEMBUKA POPUP)
        map.flyTo(featureTarget.koordinat, 18, { duration: 1.5 });
      }, 800); 
    }
  }
});

function toggleMode(mode) {
  const mapContainer = document.getElementById('map-container');
  const cesiumContainer = document.getElementById('cesium-container');
  const btn2d = document.getElementById('btn-2d');
  const btn3d = document.getElementById('btn-3d');

  if (mode === '3d') {
    mapContainer.style.display = 'none';
    cesiumContainer.style.display = 'block';
    if (btn3d) btn3d.classList.add('active');
    if (btn2d) btn2d.classList.remove('active');
  } else {
    cesiumContainer.style.display = 'none';
    mapContainer.style.display = 'block';
    if (btn2d) btn2d.classList.add('active');
    if (btn3d) btn3d.classList.remove('active');
    
    setTimeout(() => {
      if (map) map.invalidateSize();
    }, 200);
  }
}