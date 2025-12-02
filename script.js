/* script.js */

/* --- Sidebar --- */
const openSidebarBtn = document.getElementById('openSidebarBtn');
const closeSidebarBtn = document.getElementById('closeSidebarBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

// Fungsi untuk membuka sidebar
const openSidebar = () => { 
    sidebar.classList.remove('translate-x-full'); 
    overlay.classList.add('active'); 
};

// Fungsi untuk menutup sidebar
const closeSidebar = () => { 
    sidebar.classList.add('translate-x-full'); 
    overlay.classList.remove('active'); 
};

// Event listeners untuk tombol sidebar dan overlay
openSidebarBtn.addEventListener('click', openSidebar);
closeSidebarBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

/* --- Navigasi halaman --- */
const menuBtns = document.querySelectorAll('.menu-btn');
const pageContents = document.querySelectorAll('.page-content');
const brandaSection = document.getElementById('branda');
const backBtns = document.querySelectorAll('.back-to-branda-btn');

// Fungsi untuk menampilkan halaman berdasarkan ID
const showPage = id => {
    // Sembunyikan semua konten halaman
    pageContents.forEach(p => p.classList.add('hidden'));

    if (id === 'branda') {
        // Tampilkan halaman utama (hero)
        brandaSection.classList.remove('hidden');
    } else {
        // Sembunyikan halaman utama dan tampilkan konten yang ditargetkan
        brandaSection.classList.add('hidden');
        document.getElementById(id).classList.remove('hidden');
    }
    // Gulir ke atas halaman
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Event listener untuk tombol menu (List Panel, Sewa Bot)
menuBtns.forEach(b => b.addEventListener('click', () => showPage(b.dataset.target)));

// Event listener untuk tombol kembali ke beranda
backBtns.forEach(b => b.addEventListener('click', () => showPage('branda')));

/* deep-link hash: Memeriksa hash di URL saat halaman dimuat atau hash berubah */
const checkHash = () => {
    const id = location.hash.slice(1);
    if (id === 'panel-list' || id === 'sewa-bot') {
        // Jika hash valid, tampilkan halaman tersebut
        showPage(id);
    } else {
        // Jika hash tidak ada atau tidak valid, kembali ke beranda
        showPage('branda');
    }
};

// Event listener saat hash di URL berubah
window.addEventListener('hashchange', checkHash);

// Jalankan saat pertama kali memuat halaman
checkHash();
