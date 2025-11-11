const translations = {
    id: {
        tagline: 'Kelola keuangan pribadi dengan mudah',
        nav: {
            home: 'Beranda',
            features: 'Fitur',
            howToUse: 'Cara Pakai',
            system: 'Sistem',
            about: 'Tentang',
            contact: 'Kontak'
        },
        hero: {
            eyebrow: 'Solusi pengelolaan uang untuk generasi digital',
            title: 'Dompet digital pribadi yang <span>transparan</span> dan <span>terukur</span>.',
            lead: 'DOMPETIN membantu kamu memahami arus kas, menjaga batas pengeluaran, dan menyampaikan laporan yang siap dibagikan kapan saja.',
            ctaPrimary: 'Mulai catat sekarang',
            ctaSecondary: 'Pelajari cara kerja',
            stat1: 'Monitoring pemasukan dan pengeluaran realtime',
            stat2: 'Status kesehatan finansial otomatis',
            stat3: 'Data tersimpan lokal & aman digunakan offline'
        },
        features: {
            eyebrow: 'Ringkasan sistem',
            title: 'Semua informasi penting dalam satu halaman',
            desc: 'DOMPETIN menyatukan penjelasan, cara pakai, input transaksi, dan dokumentasi supaya mudah dipahami siapa pun.',
            cards: {
                info: {
                    title: 'Informasi Sistem',
                    desc: 'Dokumentasi singkat menjelaskan konsep Dompetin, komponen utama, dan manfaat bagi pengguna.'
                },
                how: {
                    title: 'Cara Menggunakan',
                    desc: 'Panduan langkah demi langkah dari set budget, input transaksi, sampai membaca status keuangan.'
                },
                input: {
                    title: 'Input Transaksi',
                    desc: 'Formulir responsif untuk mencatat pemasukan dan pengeluaran dengan kategori yang familiar.'
                },
                team: {
                    title: 'Tentang Pembuat',
                    desc: 'Profil singkat tim PPLG 2 SMKN 12 Surabaya lengkap dengan peran dan kontak.'
                }
            }
        },
        how: {
            eyebrow: 'Cara menggunakan',
            title: '3 langkah mudah mengelola uang dengan DOMPETIN',
            step1: {
                title: 'Masukkan budget bulanan',
                desc: 'Tentukan batas aman pengeluaran berdasarkan pemasukan tetapmu.'
            },
            step2: {
                title: 'Catat pemasukan/pengeluaran',
                desc: 'Isi detail transaksi beserta kategori agar laporan lebih terstruktur.'
            },
            step3: {
                title: 'Analisis status finansial',
                desc: 'Lihat ringkasan, sisa saldo, dan rekomendasi tindakan secara instan.'
            }
        },
        system: {
            eyebrow: 'Sistem DOMPETIN',
            title: 'Input data & monitor hasil secara langsung',
            desc: 'Semua data tersimpan di browser kamu menggunakan localStorage sehingga aman dan privat.',
            budget: {
                eyebrow: 'Budget bulanan',
                title: 'Atur batas pengeluaran',
                inputLabel: 'Masukkan jumlah pemasukan (Rp)',
                save: 'Simpan',
                saved: 'Budget disimpan!',
                required: 'Mohon isi budget terlebih dahulu'
            },
            summary: {
                eyebrow: 'Ringkasan realtime',
                title: 'Performa keuangan',
                income: 'Total pemasukan',
                expense: 'Total pengeluaran',
                remaining: 'Sisa saldo',
                usage: 'Persentase penggunaan'
            },
            transaction: {
                title: 'Catat transaksi',
                date: 'Tanggal',
                category: 'Kategori',
                type: 'Tipe',
                amount: 'Jumlah (Rp)',
                note: 'Catatan (opsional)',
                addButton: 'Tambah Transaksi',
                deleteConfirm: 'Hapus transaksi ini?',
                saved: 'Transaksi berhasil ditambahkan!',
                deleted: 'Transaksi berhasil dihapus!',
                validation: {
                    date: 'Mohon isi tanggal transaksi',
                    category: 'Pilih kategori transaksi',
                    type: 'Pilih tipe transaksi',
                    amount: 'Masukkan jumlah yang valid',
                    amountPositive: 'Jumlah harus lebih dari 0'
                },
                types: {
                    income: 'Pemasukan',
                    expense: 'Pengeluaran'
                },
                categories: {
                    salary: 'Gaji',
                    business: 'Bisnis',
                    investment: 'Investasi',
                    otherIncome: 'Pendapatan Lainnya',
                    food: 'Makanan',
                    transportation: 'Transportasi',
                    shopping: 'Belanja',
                    bills: 'Tagihan',
                    entertainment: 'Hiburan',
                    health: 'Kesehatan',
                    education: 'Pendidikan',
                    otherExpense: 'Pengeluaran Lainnya'
                }
            }
        },
        about: {
            eyebrow: 'Tentang pembuat',
            title: 'SMKN 12 Surabaya — XI PPLG 2',
            desc: 'DOMPETIN dikembangkan oleh Kelompok 1 untuk membantu pelajar memahami pentingnya pencatatan finansial sejak dini.'
        },
        contact: {
            eyebrow: 'Kontak & laporan',
            title: 'Butuh bantuan atau ingin lapor bug?',
            desc: 'Hubungi kami kapan saja melalui kanal berikut atau isi formulir agar tim segera menindaklanjuti.'
        },
        common: {
            loading: 'Memuat...',
            success: 'Berhasil',
            error: 'Terjadi kesalahan',
            close: 'Tutup',
            save: 'Simpan',
            cancel: 'Batal',
            delete: 'Hapus',
            edit: 'Edit',
            view: 'Lihat',
            back: 'Kembali',
            next: 'Selanjutnya',
            previous: 'Sebelumnya',
            search: 'Cari...',
            noResults: 'Tidak ada hasil',
            all: 'Semua',
            select: 'Pilih',
            selected: 'terpilih'
        },
        validation: {
            required: 'Kolom ini wajib diisi',
            email: 'Masukkan alamat email yang valid',
            minLength: 'Minimal {min} karakter',
            maxLength: 'Maksimal {max} karakter',
            number: 'Harus berupa angka',
            min: 'Minimal {min}',
            max: 'Maksimal {max}'
        },
        status: {
            healthy: 'Sehat',
            warning: 'Peringatan',
            danger: 'Bahaya',
            excellent: 'Sangat Baik',
            good: 'Baik',
            fair: 'Cukup',
            poor: 'Kurang',
            budget: 'Penggunaan Budget',
            remaining: 'Tersisa',
            spent: 'Terpakai'
        },
        chart: {
            income: 'Pemasukan',
            expense: 'Pengeluaran',
            balance: 'Saldo',
            month: 'Bulan',
            week: 'Minggu',
            day: 'Hari',
            custom: 'Kustom',
            period: 'Periode',
            selectPeriod: 'Pilih Periode',
            thisMonth: 'Bulan Ini',
            lastMonth: 'Bulan Lalu',
            thisYear: 'Tahun Ini',
            lastYear: 'Tahun Lalu',
            customRange: 'Rentang Kustom',
            startDate: 'Tanggal Mulai',
            endDate: 'Tanggal Akhir',
            apply: 'Terapkan',
            reset: 'Reset',
            noData: 'Tidak ada data untuk ditampilkan',
            loading: 'Memuat data...'
        }
    },
    en: {
        tagline: 'Manage personal finance with ease',
        nav: {
            home: 'Home',
            features: 'Features',
            howToUse: 'How It Works',
            system: 'System',
            about: 'About',
            contact: 'Contact'
        },
        hero: {
            eyebrow: 'Money management solution for the digital generation',
            title: 'A personal wallet that stays <span>transparent</span> and <span>measurable</span>.',
            lead: 'DOMPETIN helps you understand cash flow, respect spending limits, and share polished reports anytime.',
            ctaPrimary: 'Start tracking now',
            ctaSecondary: 'See how it works',
            stat1: 'Real-time income & expense monitoring',
            stat2: 'Automatic financial health status',
            stat3: 'Data stored locally & works offline'
        },
        features: {
            eyebrow: 'System overview',
            title: 'Everything you need on a single page',
            desc: 'DOMPETIN combines explanations, how-to guides, inputs, and documentation so anyone can follow along.',
            cards: {
                info: {
                    title: 'System Insight',
                    desc: 'A concise overview that explains Dompetin’s concept, core components, and user benefits.'
                },
                how: {
                    title: 'How to Use',
                    desc: 'Step-by-step guide from setting the budget to reviewing financial status.'
                },
                input: {
                    title: 'Transaction Input',
                    desc: 'Responsive form to log income and expenses with familiar categories.'
                },
                team: {
                    title: 'About The Team',
                    desc: 'Quick profile of the PPLG 2 SMKN 12 Surabaya team complete with roles and contacts.'
                }
            }
        },
        how: {
            eyebrow: 'How it works',
            title: '3 easy steps to manage your money with DOMPETIN',
            step1: {
                title: 'Set your monthly budget',
                desc: 'Define a safe spending limit based on your steady income.'
            },
            step2: {
                title: 'Record every transaction',
                desc: 'Fill in the transaction details and categories for structured reports.'
            },
            step3: {
                title: 'Review the financial status',
                desc: 'Instantly see the summary, remaining balance, and recommended actions.'
            }
        },
        system: {
            eyebrow: 'DOMPETIN system',
            title: 'Input data & monitor results instantly',
            desc: 'All information stays on your browser via localStorage so it remains private and secure.',
            budget: {
                eyebrow: 'Monthly budget',
                title: 'Control your spending limit',
                inputLabel: 'Enter your monthly income (IDR)',
                save: 'Save',
                saved: 'Budget saved!',
                required: 'Please fill in the budget first'
            },
            summary: {
                eyebrow: 'Live summary',
                title: 'Financial performance',
                income: 'Total income',
                expense: 'Total expenses',
                remaining: 'Remaining balance',
                usage: 'Usage percentage'
            },
            transaction: {
                title: 'Record transaction',
                date: 'Date',
                category: 'Category',
                type: 'Type',
                amount: 'Amount (IDR)',
                note: 'Note (optional)',
                addButton: 'Add Transaction',
                deleteConfirm: 'Delete this transaction?',
                saved: 'Transaction added successfully!',
                deleted: 'Transaction deleted successfully!',
                validation: {
                    date: 'Please fill in the transaction date',
                    category: 'Select transaction category',
                    type: 'Select transaction type',
                    amount: 'Enter a valid amount',
                    amountPositive: 'Amount must be greater than 0'
                },
                types: {
                    income: 'Income',
                    expense: 'Expense'
                },
                categories: {
                    salary: 'Salary',
                    business: 'Business',
                    investment: 'Investment',
                    otherIncome: 'Other Income',
                    food: 'Food',
                    transportation: 'Transportation',
                    shopping: 'Shopping',
                    bills: 'Bills',
                    entertainment: 'Entertainment',
                    health: 'Health',
                    education: 'Education',
                    otherExpense: 'Other Expense'
                }
            }
        },
        about: {
            eyebrow: 'About the creators',
            title: 'SMKN 12 Surabaya — XI PPLG 2',
            desc: 'DOMPETIN is built by Team 1 to help students understand financial journaling early on.'
        },
        contact: {
            eyebrow: 'Contact & report',
            title: 'Need help or want to report a bug?',
            desc: 'Reach us through these channels or submit the form so we can respond quickly.'
        },
        common: {
            loading: 'Loading...',
            success: 'Success',
            error: 'Error',
            close: 'Close',
            save: 'Save',
            cancel: 'Cancel',
            delete: 'Delete',
            edit: 'Edit',
            view: 'View',
            back: 'Back',
            next: 'Next',
            previous: 'Previous',
            search: 'Search...',
            noResults: 'No results',
            all: 'All',
            select: 'Select',
            selected: 'selected'
        },
        validation: {
            required: 'This field is required',
            email: 'Enter a valid email address',
            minLength: 'Minimum {min} characters',
            maxLength: 'Maximum {max} characters',
            number: 'Must be a number',
            min: 'Minimum {min}',
            max: 'Maximum {max}'
        },
        status: {
            healthy: 'Healthy',
            warning: 'Warning',
            danger: 'Danger',
            excellent: 'Excellent',
            good: 'Good',
            fair: 'Fair',
            poor: 'Poor',
            budget: 'Budget usage',
            remaining: 'Remaining',
            spent: 'Spent'
        },
        chart: {
            income: 'Income',
            expense: 'Expense',
            balance: 'Balance',
            month: 'Month',
            week: 'Week',
            day: 'Day',
            custom: 'Custom',
            period: 'Period',
            selectPeriod: 'Select Period',
            thisMonth: 'This Month',
            lastMonth: 'Last Month',
            thisYear: 'This Year',
            lastYear: 'Last Year',
            customRange: 'Custom Range',
            startDate: 'Start Date',
            endDate: 'End Date',
            apply: 'Apply',
            reset: 'Reset',
            noData: 'No data to display',
            loading: 'Loading data...'
        }
    }
};

let currentLang = 'id';

// Get language from localStorage or browser language
function getDefaultLanguage() {
    const savedLang = localStorage.getItem('userLanguage');
    if (savedLang) return savedLang;
    
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith('id') ? 'id' : 'en';
}

// Set language in localStorage
function setLanguagePreference(lang) {
    localStorage.setItem('userLanguage', lang);
    currentLang = lang;
    document.documentElement.lang = lang;
}

// Translate a single element
function translateElement(element, lang) {
    const attr = element.hasAttribute('data-i18n-html') ? 'data-i18n-html' : 'data-i18n';
    const key = element.getAttribute(attr);
    if (!key) return;
    
    // Handle nested keys (e.g., 'nav.home')
    const parts = key.split('.');
    let value = translations[lang];

    for (const part of parts) {
        if (value && part in value) {
            value = value[part];
        } else {
            // Fallback to English if translation not found
            if (lang !== 'en') {
                return translateElement(element, 'en');
            }
            console.warn(`Translation not found for key: ${key}`);
            return;
        }
    }

    if (value !== null && typeof value === 'object') {
        console.warn(`Translation for '${key}' is an object, expected string`);
        return;
    }
    if (typeof value === 'string') {
        if (attr === 'data-i18n-html') {
            element.innerHTML = value;
        } else {
            element.textContent = value;
        }
    }
}

// Apply translations to all elements with data-i18n or data-i18n-html attributes
function applyTranslations(lang) {
    if (!translations[lang]) {
        console.error(`Language '${lang}' is not supported`);
        return;
    }
    
    document.querySelectorAll('[data-i18n], [data-i18n-html]').forEach(element => {
        translateElement(element, lang);
    });
    
    // Update any dynamic content that needs translation
    updateDynamicContent(lang);
}

// Update dynamic content that's not handled by data attributes
function updateDynamicContent(lang) {
    // Update transaction table headers
    const headers = document.querySelectorAll('th[data-column]');
    headers.forEach(header => {
        const column = header.dataset.column;
        if (columnLabels[lang] && columnLabels[lang][column]) {
            header.textContent = columnLabels[lang][column];
        }
    });
    
    // Update empty state message
    const emptyState = document.querySelector('.empty-state');
    if (emptyState && emptyStateCopy[lang]) {
        emptyState.textContent = emptyStateCopy[lang];
    }
    
    // Update any other dynamic content that needs translation
    // Add more selectors and updates as needed
    document.documentElement.lang = lang;
}

// Change the application language
function setLanguage(lang) {
    if (!translations[lang]) {
        console.error(`Language '${lang}' is not supported`);
        return;
    }
    
    // Update current language
    currentLang = lang;
    setLanguagePreference(lang);
    
    // Apply translations to all elements
    applyTranslations(lang);
    
    // Update UI elements
    updateLanguageUI(lang);
    
    // Dispatch event for other scripts to listen to
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

// Update language toggle UI
function updateLanguageUI(lang) {
    const toggle = document.getElementById('languageToggle');
    if (!toggle) return;
    
    // Update button text
    const langText = toggle.querySelector('span');
    if (langText) {
        langText.textContent = lang === 'id' ? 'ID' : 'EN';
    }
    
    // Update active state in dropdown
    document.querySelectorAll('.language-option').forEach(option => {
        if (option.dataset.lang === lang) {
            option.classList.add('active');
            option.setAttribute('aria-selected', 'true');
        } else {
            option.classList.remove('active');
            option.removeAttribute('aria-selected');
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update direction if needed (for RTL languages)
    document.documentElement.dir = (lang === 'ar' || lang === 'he') ? 'rtl' : 'ltr';
}

// Initialize language functionality
function initLanguage() {
    // Get saved language or detect from browser
    const savedLang = localStorage.getItem('userLanguage');
    const browserLang = navigator.language.startsWith('id') ? 'id' : 'en';
    const lang = savedLang || browserLang;
    
    // Set initial language
    setLanguage(lang);
    
    // Language toggle functionality
    const languageToggle = document.getElementById('languageToggle');
    const languageDropdown = document.getElementById('languageDropdown');
    
    if (languageToggle && languageDropdown) {
        // Toggle dropdown on button click
        languageToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            const isOpen = languageDropdown.classList.toggle('show');
            languageToggle.setAttribute('aria-expanded', isOpen);
            
            // Update chevron icon
            const chevron = languageToggle.querySelector('.fa-chevron-down, .fa-chevron-up');
            if (chevron) {
                chevron.className = isOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
            }
        });
        
        // Handle language selection
        document.addEventListener('click', function(e) {
            const option = e.target.closest('.language-option');
            if (option) {
                e.preventDefault();
                const lang = option.dataset.lang;
                setLanguage(lang);
                languageDropdown.classList.remove('show');
                languageToggle.setAttribute('aria-expanded', 'false');
                
                // Update chevron icon
                const chevron = languageToggle.querySelector('.fa-chevron-up, .fa-chevron-down');
                if (chevron) {
                    chevron.className = 'fas fa-chevron-down';
                }
            }
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!languageToggle.contains(e.target) && !languageDropdown.contains(e.target)) {
                languageDropdown.classList.remove('show');
                languageToggle.setAttribute('aria-expanded', 'false');
                
                // Update chevron icon
                const chevron = languageToggle.querySelector('.fa-chevron-up');
                if (chevron) {
                    chevron.className = 'fas fa-chevron-down';
                }
            }
        });
        
        // Close on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && languageDropdown.classList.contains('show')) {
                languageDropdown.classList.remove('show');
                languageToggle.setAttribute('aria-expanded', 'false');
                languageToggle.focus();
                
                // Update chevron icon
                const chevron = languageToggle.querySelector('.fa-chevron-up');
                if (chevron) {
                    chevron.className = 'fas fa-chevron-down';
                }
            }
        });
    }
}

window.addEventListener('DOMContentLoaded', initLanguage);
window.setLanguage = setLanguage;
window.applyTranslations = applyTranslations;
