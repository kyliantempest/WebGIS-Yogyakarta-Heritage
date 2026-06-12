// DATABASE 15 HERITAGE YOGYAKARTA - TEKS BERSIH & SUMBER FOTO
const heritageData = [
    { 
        id: 1, nama: "Keraton Ngayogyakarta Hadiningrat", kategori: "keraton", kat_label: "Peninggalan Keraton", 
        img: "images/beranda/keraton_beranda.png", sumber: "Sumber: Google Maps/Google Images",
        lat: -7.805328, lng: 110.364385, alamat: "Jl. Rotowijayan No.1, Kraton", tahun: "1755-1756 M", ars: "Jawa Klasik (Joglo)", status: "Cagar Budaya Nasional & Nominasi UNESCO",
        sejarah: "Keraton Ngayogyakarta Hadiningrat merupakan istana resmi Kesultanan Yogyakarta yang berdiri sebagai hasil dari Perjanjian Giyanti pada tanggal 13 Februari 1755. Perjanjian tersebut membagi wilayah Kerajaan Mataram Islam menjadi dua bagian, yakni Kasunanan Surakarta yang diperintah oleh Pakubuwono III di sisi timur, dan Kasultanan Ngayogyakarta yang diserahkan kepada Pangeran Mangkubumi di sisi barat. Pangeran Mangkubumi kemudian dinobatkan sebagai Sultan Hamengkubuwono I sebagai raja pertama Kesultanan Yogyakarta. Pembangunan Keraton dimulai segera setelah Perjanjian Giyanti ditandatangani. Lokasi yang dipilih adalah kawasan hutan Beringan yang secara kosmologis dianggap memiliki nilai filosofis dan strategis, terletak pada sumbu imajiner yang menghubungkan Gunung Merapi di utara, Keraton di tengah, dan Laut Selatan (Samudra Hindia) di selatan. Sumbu sakral ini mencerminkan falsafah Jawa tentang keseimbangan antara alam atas (langit/gunung), alam tengah (manusia/keraton), dan alam bawah (laut/mistik). Keraton dinyatakan selesai dibangun dan mulai digunakan pada tanggal 7 Oktober 1756, yang bertepatan dengan 13 Sura 1682 dalam penanggalan Jawa.", 
        nilai: "Keraton Yogyakarta merupakan lembaga adat tertinggi di DIY yang masih aktif menjalankan fungsi budaya, spiritual, dan kemasyarakatan. Tradisi seperti Sekaten, Grebeg Maulud, Labuhan, dan Kirab Pusaka masih rutin diselenggarakan sebagai bagian dari warisan budaya yang tak benda." 
    },
    { 
        id: 2, nama: "Tugu Yogyakarta", kategori: "keraton", kat_label: "Peninggalan Keraton", 
        img: "images/beranda/tugu_beranda.png", sumber: "Sumber: Google Maps/Google Images",
        lat: -7.782906, lng: 110.367078, alamat: "Persimpangan Jl. Jenderal Sudirman", tahun: "1755 M (dibangun ulang 1889 M)", ars: "Golong-Gilig / Pal Putih", status: "Cagar Budaya Nasional & Nominasi Warisan Dunia UNESCO",
        sejarah: "Tugu Yogyakarta pertama kali dibangun pada tahun 1755 oleh Sri Sultan Hamengkubuwono I bersamaan dengan pembangunan Keraton Ngayogyakarta Hadiningrat. Dalam bentuk aslinya, tugu ini dikenal sebagai Tugu Golong-Gilig, di mana golong berarti bulat (bagian atas) dan gilig berarti silindris (bagian badan). Tinggi tugu asli diperkirakan mencapai 25 meter. Tugu Golong-Gilig bukan sekadar penanda kota, melainkan mengandung makna filosofis yang mendalam. Ia merupakan salah satu titik pada sumbu imajiner (Poros Kosmis Yogyakarta) yang memanjang dari Gunung Merapi di utara, melewati Tugu, Keraton, hingga Panggung Krapyak dan berakhir di Laut Selatan. Sumbu ini merepresentasikan ajaran manunggaling kawula lan gusti, yaitu bersatunya manusia dengan Tuhan dan dengan rajanya. Pada tahun 1867, gempa bumi dahsyat melanda Yogyakarta dan merobohkan Tugu Golong-Gilig. Selama lebih dari dua dekade reruntuhan tugu dibiarkan begitu saja. Baru pada tahun 1889, pemerintah kolonial Belanda membangun kembali tugu tersebut dengan bentuk yang berbeda, yaitu berbentuk persegi empat meruncing ke atas setinggi 15 meter, disertai ornamen-ornamen bergaya Eropa dan simbol-simbol Jawa. Semangat perlawanan dan persatuan warga Yogyakarta tetap terpelihara.", 
        nilai: "Tugu Yogyakarta mencerminkan empat nilai utama: (1) nilai alam (hubungan dengan Gunung Merapi dan Laut Selatan), (2) nilai sejarah (saksi perjuangan anti-kolonial), (3) nilai budaya (simbol falsafah Jawa manunggaling kawula gusti), (4) nilai religius (ungkapan hubungan manusia dengan Tuhan)." 
    },
    { 
        id: 3, nama: "Taman Sari", kategori: "keraton", kat_label: "Peninggalan Keraton", 
        img: "images/beranda/tamansari_beranda.png", sumber: "Sumber: Google Maps/Google Images",
        lat: -7.809939, lng: 110.359027, alamat: "Jl. Taman, Patehan, Kraton", tahun: "1758-1765 M", ars: "Jawa, Hindu, Eropa, Cina", status: "Cagar Budaya Nasional",
        sejarah: "Taman Sari atau dikenal sebagai Water Castle Yogyakarta merupakan kompleks istana air Kesultanan Yogyakarta yang dibangun atas perintah Sri Sultan Hamengkubuwono I antara tahun 1758 dan 1765. Pembangunan Taman Sari dimulai setelah Perjanjian Giyanti (1755) dan selesainya pembangunan Keraton. Taman Sari dibangun sebagai bentuk penghargaan Sultan kepada permaisuri yang turut berjuang mendampingi Sultan selama masa peperangan melawan VOC. Arsitekturnya merupakan perpaduan unik antara gaya Jawa, Hindu, Eropa, dan China, sebuah pencapaian arsitektural lintas budaya yang luar biasa pada zamannya. Fungsi kompleks ini sangat beragam, yaitu sebagai taman rekreasi keluarga kerajaan, tempat peristirahatan sultan, pusat meditasi, serta sistem pertahanan.", 
        nilai: "Taman Sari merepresentasikan puncak seni arsitektur keraton Jawa yang memadukan teknologi irigasi canggih abad ke-18, estetika lintas budaya, dan makna spiritual kerajaan. Kini berfungsi sebagai destinasi wisata budaya sekaligus kawasan kampung seniman batik." 
    },
    { 
        id: 4, nama: "Pura Pakualaman", kategori: "keraton", kat_label: "Peninggalan Keraton", 
        img: "images/beranda/purapakualaman_beranda.png", sumber: "Sumber: Google Maps/Google Images",
        lat: -7.800770, lng: 110.376142, alamat: "Jl. Sultan Agung No.1, Pakualaman", tahun: "1813 M", ars: "Jawa Klasik & Eropa", status: "Cagar Budaya Nasional",
        sejarah: "Pura Pakualaman adalah istana resmi Kadipaten Pakualaman, salah satu dari empat kerajaan Jawa yang masih ada hingga saat ini. Keberadaan Kadipaten Pakualaman tidak dapat dipisahkan dari konteks kolonialisme Inggris di Jawa. Setelah Raffles memecah kekuatan Kesultanan Yogyakarta, Pangeran Notokusumo diangkat menjadi Adipati Paku Alam I pada tahun 1813. Tata ruang kawasan Pakualaman mengikuti konsep Catur Gatra Tunggal yang sama dengan Keraton Yogyakarta, namun dalam skala yang lebih kecil. Kompleks Pura Pakualaman terdiri atas beberapa bangunan penting seperti Regol Danawara, Pendapa Sewatama, dan Dalem Ageng Probosuyoso. Meskipun dibentuk atas inisiatif Inggris sebagai strategi politik, Kadipaten Pakualaman menunjukkan komitmen untuk menyatu dalam kerangka budaya dan tradisi dinasti Mataram.", 
        nilai: "Pura Pakualaman merupakan cerminan budaya Jawa yang mengalami transformasi menyesuaikan perkembangan zaman. Perpaduan arsitektur tradisional Jawa dengan elemen kolonial dan modern mencerminkan keterbukaan terhadap budaya luar." 
    },
    { 
        id: 5, nama: "Benteng Vredeburg", kategori: "kolonial", kat_label: "Peninggalan Kolonial", 
        img: "images/beranda/benteng_beranda.png", sumber: "Sumber: Google Maps/Google Images",
        lat: -7.800367, lng: 110.365368, alamat: "Jl. Margo Mulyo No.6, Gondomanan", tahun: "1760 M", ars: "Eropa Klasik", status: "Cagar Budaya Nasional",
        sejarah: "Benteng Vredeburg merupakan peninggalan kolonial VOC yang berdiri di jantung Kota Yogyakarta. Pembangunan benteng ini tidak dapat dipisahkan dari dinamika politik antara Kesultanan Yogyakarta dan Belanda pasca Perjanjian Giyanti tahun 1755. Awalnya, Belanda meminta izin kepada Sultan Hamengkubuwono I untuk membangun benteng dengan dalih melindungi keamanan, namun sesungguhnya bertujuan mengawasi gerak-gerik keraton. Setelah gempa bumi tahun 1867, nama benteng diubah menjadi Vredeburg yang berarti perdamaian. Setelah kemerdekaan, benteng sempat digunakan sebagai markas militer sebelum akhirnya pada tahun 1985 resmi ditetapkan sebagai Museum Khusus Perjuangan Bangsa Indonesia.", 
        nilai: "Benteng Vredeburg adalah simbol sejarah panjang perjuangan bangsa Indonesia melawan kolonialisme. Letaknya yang berhadapan langsung dengan Keraton menjadikannya saksi bisu ketegangan antara kekuatan lokal dan kolonial." 
    },
    { 
        id: 6, nama: "Gedung Agung", kategori: "kolonial", kat_label: "Peninggalan Kolonial", 
        img: "images/beranda/gedungagung_beranda.png", sumber: "Sumber: Google Maps/Google Images",
        lat: -7.800182, lng: 110.363890, alamat: "Jl. Ahmad Yani No.1, Gondomanan", tahun: "1824 M", ars: "Neo-Klasik", status: "Istana Kepresidenan RI",
        sejarah: "Gedung Agung atau Istana Kepresidenan Yogyakarta bermula dari inisiatif Residen Belanda ke-18 di Yogyakarta, Anthonie Hendriks Smissaert. Gaya arsitekturnya mencerminkan aliran Neo-Klasik dengan tiang-tiang besar bergaya Doria di bagian depan. Setelah kemerdekaan, pada 4 Januari 1946, Presiden Soekarno memindahkan ibu kota ke Yogyakarta dan gedung ini berfungsi sebagai Istana Kepresidenan. Di sinilah Kabinet Republik Indonesia dilantik, Jenderal Soedirman dilantik sebagai Panglima Besar TNI, dan berbagai keputusan strategis perjuangan kemerdekaan dibuat.", 
        nilai: "Gedung Agung merupakan penanda arsitektur kolonial sekaligus saksi paling penting Revolusi Kemerdekaan Indonesia. Keberadaannya di kawasan Malioboro menjadikannya bagian dari identitas Kota Yogyakarta." 
    },
    { 
        id: 7, nama: "Kantor Pos Besar Yogyakarta", kategori: "kolonial", kat_label: "Peninggalan Kolonial", 
        img: "images/beranda/pos_besar_beranda.png", sumber: "Sumber: Google Maps/Google Images",
        lat: -7.801829, lng: 110.366116, alamat: "Jl. Ahmad Yani No.2, Titik Nol", tahun: "Akhir abad ke-19", ars: "Neo-Klasik Kolonial", status: "Cagar Budaya",
        sejarah: "Kantor Pos Besar Yogyakarta terletak di kawasan Titik Nol Kilometer. Pembangunannya berkaitan dengan pengembangan infrastruktur komunikasi kolonial Belanda di Jawa pada abad ke-19. Arsitekturnya mencerminkan gaya Neo-Klasik Kolonial dengan simetrisitas bangunan dan ornamen Eropa. Selama masa revolusi kemerdekaan, kantor pos ini menjadi salah satu fasilitas strategis yang diperebutkan oleh pasukan Republik dan Belanda. Hingga saat ini, bangunan ini masih berfungsi aktif melayani masyarakat di bawah PT Pos Indonesia dan telah ditetapkan sebagai bangunan cagar budaya.", 
        nilai: "Kantor Pos Besar Yogyakarta merepresentasikan perkembangan infrastruktur komunikasi pada era kolonial sekaligus menjadi bagian dari kawasan heritage Titik Nol Kilometer yang menjadi identitas kultural dan spasial Kota Yogyakarta." 
    },
    { 
        id: 8, nama: "Hotel Garuda", kategori: "kolonial", kat_label: "Peninggalan Kolonial", 
        img: "images/beranda/hotel_beranda.png", sumber: "Sumber: Google Maps/Google Images",
        lat: -7.790676, lng: 110.366991, alamat: "Jl. Malioboro No.60, Danurejan", tahun: "1908 M", ars: "Indische Empire / Art Deco", status: "Cagar Budaya",
        sejarah: "Hotel Garuda atau Grand Inna Malioboro merupakan hotel tertua di Yogyakarta yang didirikan pada tahun 1908 oleh pemerintah kolonial Belanda. Awalnya bernama Hotel Toegoe, hotel ini dibangun untuk melayani kebutuhan akomodasi pejabat kolonial, pedagang Eropa, dan tamu-tamu penting. Selama masa Yogyakarta sebagai ibu kota Republik Indonesia (1946-1949), Hotel Garuda menjadi salah satu tempat pertemuan para pejuang, diplomat, dan tokoh-tokoh penting. Sebagai bangunan cagar budaya yang masih berfungsi aktif, hotel ini menjadi contoh nyata dari konsep adaptive reuse, yaitu pemanfaatan kembali bangunan bersejarah untuk fungsi kontemporer tanpa menghilangkan nilai historisnya.", 
        nilai: "Hotel Garuda merepresentasikan perpaduan warisan arsitektur kolonial dengan fungsi komersial yang berkelanjutan, sekaligus menjadi saksi perkembangan kawasan Malioboro dari era kolonial hingga era modern." 
    },
    { 
        id: 9, nama: "Plengkung Gading / Nirbaya", kategori: "pelestarian", kat_label: "Kawasan Pelestarian", 
        img: "images/beranda/plengkunggading_beranda.png", sumber: "Sumber: Google Maps/Google Images",
        lat: -7.813667, lng: 110.362958, alamat: "Jl. Brigjen Katamso, Kraton", tahun: "1755-1756 M", ars: "Benteng Jawa", status: "Cagar Budaya Nasional",
        sejarah: "Plengkung Gading atau Plengkung Nirbaya adalah salah satu dari lima gerbang lengkung yang terdapat pada tembok benteng Baluwerti Keraton Ngayogyakarta Hadiningrat. Nama 'Nirbaya' berasal dari dua kata dalam bahasa Jawa Kuna: 'nir' (tidak ada) dan 'baya' (bahaya). Gerbang ini memiliki fungsi khusus, yaitu untuk mengantar keluar jenazah anggota keluarga kerajaan Kasultanan Yogyakarta yang telah meninggal dunia menuju pemakaman di Imogiri. Sultan yang masih hidup tidak diperbolehkan melewati gerbang ini, sultan yang melewatinya harus dalam kondisi sudah meninggal.", 
        nilai: "Plengkung Nirbaya merupakan simbol sistem pertahanan kosmologis Keraton sekaligus gerbang transisi antara dunia kehidupan dan kematian bagi keluarga kerajaan. Kelestariannya menjadi prioritas karena merupakan satu-satunya plengkung utuh dari lima plengkung Baluwerti." 
    },
    { 
        id: 10, nama: "Plengkung Wijilan", kategori: "pelestarian", kat_label: "Kawasan Pelestarian", 
        img: "images/beranda/plengkungwijilan_beranda.png", sumber: "Sumber: Google Maps/Google Images",
        lat: -7.803306, lng: 110.366653, alamat: "Jl. Wijilan, Panembahan", tahun: "1755-1756 M", ars: "Benteng Jawa", status: "Cagar Budaya",
        sejarah: "Plengkung Wijilan merupakan salah satu dari lima gerbang lengkung pada tembok Baluwerti Keraton Ngayogyakarta Hadiningrat. Nama 'Wijilan' berasal dari kata 'wiji' dalam bahasa Jawa yang berarti 'benih' atau 'bibit'. Interpretasi filosofis nama ini merujuk pada konsep permulaan atau asal-muasal kehidupan, sesuai dengan posisi plengkung ini yang berada di kawasan timur, arah matahari terbit yang dalam budaya Jawa melambangkan awal kehidupan baru dan harapan. Kawasan Wijilan yang berada di belakang Keraton Yogyakarta saat ini terkenal sebagai pusat kuliner gudeg Yogyakarta.", 
        nilai: "Plengkung Wijilan merupakan bagian integral dari sistem pertahanan Keraton dan berperan sebagai gerbang penghubung keraton dengan kawasan timur kota. Perkembangan kawasan kuliner di sekitarnya menunjukkan dinamika budaya yang hidup dan berkelanjutan di sekitar situs cagar budaya." 
    },
    { 
        id: 11, nama: "Plengkung Jagabaya", kategori: "pelestarian", kat_label: "Kawasan Pelestarian", 
        img: "images/beranda/plengkungjayabaya_beranda.png", sumber: "Sumber: Google Maps/Google Images",
        lat: -7.808551, lng: 110.356238, alamat: "Jl. Langenastran Lor, Kadipaten", tahun: "1755-1756 M", ars: "Benteng Jawa", status: "Cagar Budaya",
        sejarah: "Plengkung Jagabaya, yang juga dikenal sebagai Plengkung Tamansari, adalah gerbang benteng Baluwerti yang terletak di sisi barat Keraton Yogyakarta, tepatnya di kawasan Taman Sari. Nama 'Jagabaya' terdiri dari dua kata Jawa: 'jaga' yang berarti 'menjaga' dan 'baya' yang berarti 'bahaya'. Secara harfiah, Jagabaya berarti 'penjaga dari bahaya'. Saat ini, fisik plengkung ini sudah tidak utuh lagi, hanya tersisa bagian gapuranya saja, sementara struktur lengkung aslinya telah hilang akibat kerusakan dan pembangunan di sekitarnya. Kondisi ini menjadikan Plengkung Jagabaya sebagai contoh tantangan pelestarian situs cagar budaya di tengah tekanan pembangunan perkotaan.", 
        nilai: "Plengkung Jagabaya merupakan penanda batas sakral kawasan barat Keraton yang erat kaitannya dengan kompleks Taman Sari. Keberadaannya dalam ekosistem Kampung Taman Sari yang hidup menjadikan situs ini relevan secara budaya dalam konteks pelestarian kawasan heritage yang berkelanjutan." 
    },
    { 
        id: 12, nama: "Masjid Gedhe Kauman", kategori: "religi", kat_label: "Religi", 
        img: "images/beranda/mesjidkauman_beranda.png", sumber: "Sumber: Google Maps/Google Images",
        lat: -7.803752, lng: 110.362443, alamat: "Jl. Kauman, Gondomanan", tahun: "1773 M", ars: "Tajug Tradisional Jawa", status: "Cagar Budaya Nasional",
        sejarah: "Masjid Gedhe Kauman merupakan masjid kesultanan yang dibangun setelah Sultan Hamengkubuwono I selesai membangun Keraton Yogyakarta. Keberadaan Masjid Gedhe Kauman merupakan bagian dari konsep Catur Gatra Tunggal, yaitu empat komponen wajib dalam struktur kota kerajaan Jawa yang terdiri atas: keraton (pusat pemerintahan), alun-alun (ruang publik), masjid (pusat keagamaan), dan pasar (pusat ekonomi). Masjid Gedhe Kauman menempati posisi di sisi barat Alun-alun Utara. Masjid ini bukan hanya berfungsi sebagai tempat ibadah, tetapi juga sebagai tempat pertemuan ulama, majelis pengajian, mahkamah agama, serta perayaan hari-hari besar Islam. Ahmad Dahlan, yang bermukim di Kampung Kauman dan menjadi khatib masjid ini, mendirikan organisasi Muhammadiyah pada tahun 1912.", 
        nilai: "Masjid Gedhe Kauman adalah simbol integrasi Islam dalam tata ruang kerajaan Jawa sekaligus saksi bersejarah gerakan pembaruan Islam di Indonesia." 
    },
    { 
        id: 13, nama: "Makam Raja-raja Mataram Imogiri", kategori: "religi", kat_label: "Religi", 
        img: "images/beranda/makamraja_beranda.png", sumber: "Sumber: Google Maps/Google Images",
        lat: -7.918712, lng: 110.395027, alamat: "Desa Girirejo, Imogiri, Bantul", tahun: "1632 M", ars: "Jawa Klasik (Kompleks Bukit)", status: "Cagar Budaya Nasional",
        sejarah: "Kompleks Makam Imogiri atau Pajimatan Imagiri adalah kompleks pemakaman para raja dan keluarga bangsawan Kerajaan Mataram Islam yang dibangun oleh Sultan Agung Hanyokrokusumo, raja ketiga Mataram Islam yang memerintah antara tahun 1613-1646 M. Nama 'Imogiri' berasal dari gabungan kata 'hima' (kabut) dan 'giri' (gunung) yang berarti 'gunung yang diselimuti kabut'. Pemilihan lokasi di atas bukit tidak terlepas dari kepercayaan Jawa kuna pra-Hindu bahwa tempat tinggi merupakan tempat suci bersemayamnya roh leluhur, serta keyakinan Hindu bahwa semakin tinggi letak makam semakin mulia derajatnya. Kompleks makam terbagi menjadi beberapa bagian berdasarkan raja-raja yang dimakamkan, dengan area makam Sultan Agung berada di puncak bukit sebagai area paling sakral.", 
        nilai: "Makam Raja Imogiri merupakan simbol spiritual tertinggi dinasti Mataram Islam yang menyatukan dua kerajaan (Yogyakarta dan Surakarta) dalam satu warisan leluhur. Tradisi ziarah dan upacara adat yang masih berlangsung menjadikannya pusat kehidupan religi dan budaya Jawa yang terus hidup." 
    },
    { 
        id: 14, nama: "Museum Sonobudoyo", kategori: "modern", kat_label: "Modern", 
        img: "images/beranda/museumsonobudoyo_beranda.png", sumber: "Sumber: Google Maps/Google Images",
        lat: -7.800200, lng: 110.363900, alamat: "Jl. Trikora No.6, Gondomanan", tahun: "1935 M", ars: "Joglo Modern / Indis", status: "Museum Daerah",
        sejarah: "Museum Sonobudoyo merupakan museum sejarah dan kebudayaan Jawa yang diresmikan pada tanggal 6 November 1935 oleh Sri Sultan Hamengkubuwono VIII. Nama 'Sonobudoyo' berasal dari bahasa Jawa: 'sono' berarti tempat dan 'budoyo' berarti kebudayaan, yang secara keseluruhan bermakna tempat kebudayaan. Gedung museum dirancang oleh Ir. Thomas Karsten, arsitek Belanda yang dikenal atas karyanya yang memadukan pemikiran rasional Barat dengan nilai-nilai estetika lokal. Museum ini kini menyimpan koleksi lebih dari 65.000 benda budaya yang menjadikannya salah satu museum terlengkap di Indonesia, kedua setelah Museum Nasional Jakarta. Koleksi unggulan meliputi wayang kulit, keris, batik Jawa klasik, topeng tradisional, gamelan, dan berbagai benda etnografis lainnya.", 
        nilai: "Museum Sonobudoyo adalah pusat pelestarian, dokumentasi, dan edukasi budaya Jawa dan Nusantara yang tertua dan terlengkap di DIY. Koleksinya yang kaya dan program pertunjukan wayang kulit rutin menjadikannya jembatan hidup antara generasi masa kini dan warisan leluhur." 
    },
    { 
        id: 15, nama: "Pasar Beringharjo", kategori: "modern", kat_label: "Modern", 
        img: "images/beranda/pasarbringharjo_beranda.png", sumber: "Sumber: Google Maps/Google Images",
        lat: -7.798969, lng: 110.368450, alamat: "Jl. Pabringan No.1, Gondomanan", tahun: "1755 M", ars: "Neo-Klasik Kolonial & Jawa", status: "Cagar Budaya",
        sejarah: "Pasar Beringharjo merupakan pasar tradisional tertua dan terbesar di Yogyakarta yang keberadaannya tidak dapat dipisahkan dari sejarah pendirian Keraton Ngayogyakarta Hadiningrat. Pada masa pemerintahan Sultan Hamengkubuwono I saat membangun Keraton (1755-1756), kawasan pasar sudah ditetapkan sebagai salah satu dari empat komponen utama kota kerajaan yang disebut Catur Gatra Tunggal. Nama 'Beringharjo' secara resmi ditetapkan pada tahun 1925 di era pemerintahan Hamengkubuwono VIII. Nama ini merupakan gabungan dua kata: 'Bering' (merujuk pada kawasan hutan Beringan, yang merupakan cikal bakal berdirinya ibu kota Kesultanan Yogyakarta) dan 'Harja' yang berarti 'baik' atau 'sejahtera'. Pasar Beringharjo tidak sekadar berfungsi sebagai pusat ekonomi dan perdagangan, tetapi juga sebagai pusat kehidupan sosial dan budaya Yogyakarta. Sebagai bagian dari tata kota Catur Tunggal Kesultanan Yogyakarta, Pasar Beringharjo menempati posisi strategis di ujung utara Jalan Malioboro.", 
        nilai: "Pasar Beringharjo merupakan manifestasi nyata dari konsep tata kota Jawa yang menempatkan pasar sebagai komponen fundamental kehidupan bermasyarakat. Sebagai pusat batik dan ekonomi kreatif tradisional, pasar ini berperan aktif dalam pelestarian identitas budaya Yogyakarta hingga saat ini." 
    }
];

const galleryGrid = document.getElementById("galleryGrid");
const filterButtons = document.querySelectorAll(".filter-btn");

function renderGallery(filterKategori) {
    galleryGrid.innerHTML = ""; 
    let filteredData = filterKategori === "semua" ? heritageData : heritageData.filter(item => item.kategori === filterKategori);

    filteredData.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${item.img}" alt="${item.nama}" class="card-img" onerror="this.src='https://images.unsplash.com/photo-1596422846543-75c6fc18a523?q=80&w=400';">
            </div>
            <div class="card-info">
                <h3 class="card-title">${item.nama}</h3>
                <p class="card-cat">${item.kat_label}</p>
                <p style="font-size: 10px; color: #a1896e; margin-top: 8px; font-style: italic;">
                    <i class="fa-solid fa-camera"></i> ${item.sumber}
                </p>
            </div>
        `;
        card.addEventListener("click", () => openModal(item));
        galleryGrid.appendChild(card);
    });
}

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderGallery(btn.getAttribute("data-filter"));
    });
});

const modal = document.getElementById("detailModal");

function openModal(data) {
    document.getElementById("modalImg").src = data.img;
    document.getElementById("modalImg").onerror = function() { this.src='https://images.unsplash.com/photo-1596422846543-75c6fc18a523?q=80&w=800'; };
    document.getElementById("modalTitle").innerText = data.nama.toUpperCase();
    document.getElementById("modalCategory").innerText = data.kat_label;
    document.getElementById("modalLokasi").innerText = data.alamat;
    document.getElementById("modalTahun").innerText = data.tahun;
    document.getElementById("modalArsitektur").innerText = data.ars;
    document.getElementById("modalStatus").innerText = data.status;
    document.getElementById("modalKoordinat").innerText = `${data.lat}, ${data.lng}`;
    document.getElementById("modalSejarah").innerText = data.sejarah;
    document.getElementById("modalNilai").innerText = data.nilai;
    
    let modalContent = document.querySelector(".modal-content");
    let sumberEl = document.getElementById("modalSumber");
    if (!sumberEl) {
        sumberEl = document.createElement("p");
        sumberEl.id = "modalSumber";
        sumberEl.style.fontSize = "12px";
        sumberEl.style.color = "#a1896e";
        sumberEl.style.fontStyle = "italic";
        sumberEl.style.marginTop = "10px";
        modalContent.insertBefore(sumberEl, document.getElementById("btn-peta-interaktif"));
    }
    sumberEl.innerText = data.sumber;
    
    document.getElementById("btn-peta-interaktif").href = `indexlama.html?fokus=${data.id}`;
    
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

document.addEventListener("DOMContentLoaded", () => {
    renderGallery("semua");
});