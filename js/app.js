// DOM Elements
const budgetInput = document.getElementById('budgetInput');
const saveBudgetBtn = document.getElementById('saveBudgetBtn');
const budgetDisplay = document.getElementById('budgetDisplay');
const transactionForm = document.getElementById('transactionForm');
const trxTableBody = document.getElementById('trxTableBody');
const totalIncomeEl = document.getElementById('totalIncome');
const totalExpenseEl = document.getElementById('totalExpense');
const remainingEl = document.getElementById('remaining');
const usagePercentEl = document.getElementById('usagePercent');
const statusBadge = document.getElementById('statusBadge');
const statusMsg = document.getElementById('statusMsg');
const alertBox = document.getElementById('alertBox');
const remainingHeroEl = document.getElementById('remainingHero');
const usagePercentHeroEl = document.getElementById('usagePercentHero');

// Language management
let currentLanguage = 'id'; // Default to Indonesian

const columnLabels = {
    id: {
        index: 'No',
        date: 'Tanggal',
        category: 'Kategori',
        type: 'Tipe',
        amount: 'Nominal',
        note: 'Catatan',
        actions: 'Aksi'
    },
    en: {
        index: 'No.',
        date: 'Date',
        category: 'Category',
        type: 'Type',
        amount: 'Amount',
        note: 'Note',
        actions: 'Action'
    }
};

const emptyStateCopy = {
    id: 'Belum ada transaksi',
    en: 'No transactions yet'
};

// State
let budget = 0;
let transactions = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Load data from localStorage if available
    loadData();
    
    // Set today's date as default
    document.getElementById('trxDate').valueAsDate = new Date();
    
    // Event Listeners
    saveBudgetBtn.addEventListener('click', handleBudgetSubmit);
    transactionForm.addEventListener('submit', handleAddTransaction);
    
    // Listen for language changes
    document.addEventListener('languageChanged', (e) => {
        currentLanguage = e.detail.lang;
        updateTransactionForm();
        renderTransactions();
        updateSummary();
    });
    
    // Initial render
    updateTransactionForm();
    renderBudget();
    renderTransactions();
    updateSummary();
});

// Load data from localStorage
function loadData() {
    const savedBudget = localStorage.getItem('budget');
    const savedTransactions = localStorage.getItem('transactions');
    
    if (savedBudget) {
        budget = parseFloat(savedBudget);
    }
    
    if (savedTransactions) {
        transactions = JSON.parse(savedTransactions);
    }
}

// Save data to localStorage
function saveData() {
    localStorage.setItem('budget', budget);
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Format number to Rupiah
function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(number);
}

// Show alert message
function showAlert(message, type = 'success') {
    alertBox.textContent = message;
    alertBox.className = `alert show ${type}`;
    alertBox.hidden = false;
    
    // Hide after 3 seconds
    setTimeout(() => {
        alertBox.classList.remove('show');
        alertBox.hidden = true;
    }, 3000);
}

// Handle budget submission
function handleBudgetSubmit(e) {
    e.preventDefault();
    
    const amount = parseFloat(budgetInput.value);
    
    if (isNaN(amount) || amount <= 0) {
        showAlert('Masukkan jumlah budget yang valid', 'error');
        return;
    }
    
    budget = amount;
    saveData();
    renderBudget();
    updateSummary();
    
    budgetInput.value = '';
    showAlert('Budget berhasil disimpan!');
}

// Update transaction form with translated labels and placeholders
function updateTransactionForm() {
    const translations = {
        id: {
            date: 'Tanggal',
            category: 'Kategori',
            type: 'Tipe',
            amount: 'Jumlah (Rp)',
            note: 'Catatan (opsional)',
            addButton: 'Tambah Transaksi',
            selectCategory: 'Pilih kategori',
            selectType: 'Pilih tipe',
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
            },
            types: {
                income: 'Pemasukan',
                expense: 'Pengeluaran'
            }
        },
        en: {
            date: 'Date',
            category: 'Category',
            type: 'Type',
            amount: 'Amount (IDR)',
            note: 'Note (optional)',
            addButton: 'Add Transaction',
            selectCategory: 'Select category',
            selectType: 'Select type',
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
            },
            types: {
                income: 'Income',
                expense: 'Expense'
            }
        }
    };

    const lang = currentLanguage;
    const t = translations[lang] || translations['id'];

    // Update form labels
    const labels = {
        'trxDateLabel': t.date,
        'trxCategoryLabel': t.category,
        'trxTypeLabel': t.type,
        'trxAmountLabel': t.amount,
        'trxNoteLabel': t.note
    };

    Object.entries(labels).forEach(([id, text]) => {
        const element = document.getElementById(id);
        if (element) element.textContent = text;
    });

    // Update placeholders
    document.getElementById('trxNote').placeholder = t.note;
    document.getElementById('trxAmount').placeholder = t.amount;

    // Update button text
    const submitButton = transactionForm.querySelector('button[type="submit"]');
    if (submitButton) submitButton.textContent = t.addButton;

    // Update category options
    const categorySelect = document.getElementById('trxCategory');
    if (categorySelect) {
        // Save current value
        const currentValue = categorySelect.value;
        
        // Clear existing options
        categorySelect.innerHTML = '';
        
        // Add default option
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = t.selectCategory;
        defaultOption.disabled = true;
        defaultOption.selected = true;
        categorySelect.appendChild(defaultOption);
        
        // Add category options
        Object.entries(t.categories).forEach(([value, label]) => {
            const option = document.createElement('option');
            option.value = value;
            option.textContent = label;
            if (value === currentValue) option.selected = true;
            categorySelect.appendChild(option);
        });
    }

    // Update type options
    const typeSelect = document.getElementById('trxType');
    if (typeSelect) {
        // Save current value
        const currentValue = typeSelect.value;
        
        // Clear existing options
        typeSelect.innerHTML = '';
        
        // Add default option
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = t.selectType;
        defaultOption.disabled = true;
        defaultOption.selected = !currentValue;
        typeSelect.appendChild(defaultOption);
        
        // Add type options
        Object.entries(t.types).forEach(([value, label]) => {
            const option = document.createElement('option');
            option.value = value;
            option.textContent = label;
            if (value === currentValue) option.selected = true;
            typeSelect.appendChild(option);
        });
    }
}

// Handle add transaction
function handleAddTransaction(e) {
    e.preventDefault();
    
    // Check if budget is set
    if (budget <= 0) {
        const message = currentLanguage === 'id' ? 
            'Silakan set budget terlebih dahulu' : 
            'Please set budget first';
        showAlert(message, 'warning');
        return;
    }
    
    // Get form values
    const date = document.getElementById('trxDate').value;
    const category = document.getElementById('trxCategory').value;
    const type = document.getElementById('trxType').value;
    const amount = parseFloat(document.getElementById('trxAmount').value);
    const note = document.getElementById('trxNote').value;
    
    // Validate form with translated messages
    const messages = {
        id: {
            dateRequired: 'Mohon isi tanggal transaksi',
            categoryRequired: 'Mohon pilih kategori transaksi',
            typeRequired: 'Mohon pilih tipe transaksi',
            amountRequired: 'Mohon masukkan nominal yang valid',
            amountPositive: 'Nominal harus lebih dari 0',
            success: 'Transaksi berhasil ditambahkan!'
        },
        en: {
            dateRequired: 'Please fill in the transaction date',
            categoryRequired: 'Please select transaction category',
            typeRequired: 'Please select transaction type',
            amountRequired: 'Please enter a valid amount',
            amountPositive: 'Amount must be greater than 0',
            success: 'Transaction added successfully!'
        }
    };
    
    const t = messages[currentLanguage] || messages['id'];
    
    if (!date) {
        showAlert(t.dateRequired, 'error');
        return;
    }
    
    if (!category) {
        showAlert(t.categoryRequired, 'error');
        return;
    }
    
    if (!type) {
        showAlert(t.typeRequired, 'error');
        return;
    }
    
    if (isNaN(amount)) {
        showAlert(t.amountRequired, 'error');
        return;
    }
    
    if (amount <= 0) {
        showAlert(t.amountPositive, 'error');
        return;
    }
    
    // Create transaction object
    const transaction = {
        id: Date.now(),
        date,
        category,
        type,
        amount: type === 'expense' ? -Math.abs(amount) : Math.abs(amount),
        note: note || (currentLanguage === 'id' ? 'Tidak ada catatan' : 'No note')
    };
    
    // Add to transactions array
    transactions.push(transaction);
    saveData();
    
    // Reset form
    transactionForm.reset();
    document.getElementById('trxDate').valueAsDate = new Date();
    
    // Update UI
    renderTransactions();
    updateSummary();
    showAlert(t.success);
}

// Delete transaction
function deleteTransaction(id) {
    if (confirm(currentLanguage === 'id' ? 'Hapus transaksi ini?' : 'Delete this transaction?')) {
        transactions = transactions.filter(transaction => transaction.id !== id);
        saveData();
        renderTransactions();
        updateSummary();
        showAlert(
            currentLanguage === 'id' ? 
            'Transaksi berhasil dihapus!' : 
            'Transaction deleted successfully!'
        );
    }
}

// Render budget
function renderBudget() {
    if (budget > 0) {
        budgetDisplay.innerHTML = `Budget bulanan: <strong>${formatRupiah(budget)}</strong>`;
    } else {
        budgetDisplay.textContent = 'Belum ada budget yang diset';
    }
}

// Render transactions table
function renderTransactions() {
    if (!trxTableBody) return;
    
    // Clear existing rows
    trxTableBody.innerHTML = '';
    
    // Translation strings
    const t = {
        id: {
            noTransactions: 'Belum ada transaksi',
            income: 'Pemasukan',
            expense: 'Pengeluaran',
            delete: 'Hapus',
            confirmDelete: 'Hapus transaksi ini?'
        },
        en: {
            noTransactions: 'No transactions yet',
            income: 'Income',
            expense: 'Expense',
            delete: 'Delete',
            confirmDelete: 'Delete this transaction?'
        }
    }[currentLanguage] || {
        noTransactions: 'No transactions yet',
        income: 'Income',
        expense: 'Expense',
        delete: 'Delete',
        confirmDelete: 'Delete this transaction?'
    };
    
    if (transactions.length === 0) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td colspan="6" class="text-center">
                <p class="empty-state">${t.noTransactions}</p>
            </td>
        `;
        trxTableBody.appendChild(tr);
        return;
    }
    
    // Sort transactions by date (newest first)
    const sortedTransactions = [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Add each transaction to the table
    sortedTransactions.forEach((transaction, index) => {
        const tr = document.createElement('tr');
        const isIncome = transaction.amount > 0;
        const amountClass = isIncome ? 'text-success' : 'text-danger';
        const amountSign = isIncome ? '+' : '';
        const typeText = isIncome ? t.income : t.expense;
        
        // Format date based on language
        const dateOptions = { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        };
        const formattedDate = new Date(transaction.date).toLocaleDateString(
            currentLanguage === 'id' ? 'id-ID' : 'en-US', 
            dateOptions
        );
        
        // Get category name in current language
        const categories = {
            id: {
                salary: 'Gaji',
                business: 'Bisnis',
                investment: 'Investasi',
                otherIncome: 'Pendapatan Lain',
                food: 'Makanan',
                transportation: 'Transportasi',
                shopping: 'Belanja',
                bills: 'Tagihan',
                entertainment: 'Hiburan',
                health: 'Kesehatan',
                education: 'Pendidikan',
                otherExpense: 'Pengeluaran Lain'
            },
            en: {
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
        };
        
        const categoryName = categories[currentLanguage]?.[transaction.category] || transaction.category;
        
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${formattedDate}</td>
            <td>${categoryName}</td>
            <td>${typeText}</td>
            <td class="text-end ${amountClass} fw-bold">
                ${amountSign}${formatRupiah(Math.abs(transaction.amount))}
            </td>
            <td class="text-center">
                <button 
                    class="btn btn-sm btn-outline-danger" 
                    onclick="deleteTransaction(${transaction.id})"
                    aria-label="${t.delete}"
                    title="${t.delete}"
                >
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;
        
        trxTableBody.appendChild(tr);
    });
}

// Update summary and status
function updateSummary() {
    if (budget <= 0) return;
    
    const totalIncome = transactions
        .filter(t => t.amount > 0)
        .reduce((sum, t) => sum + t.amount, 0);
        
    const totalExpense = Math.abs(transactions
        .filter(t => t.amount < 0)
        .reduce((sum, t) => sum + t.amount, 0));
        
    const remaining = budget - totalExpense;
    const usagePercentage = Math.min(Math.round((totalExpense / budget) * 100), 100);
    
    // Translation strings
    const t = {
        id: {
            totalIncome: 'Total Pemasukan',
            totalExpense: 'Total Pengeluaran',
            remaining: 'Sisa Saldo',
            usage: 'Persentase Penggunaan'
        },
        en: {
            totalIncome: 'Total Income',
            totalExpense: 'Total Expense',
            remaining: 'Remaining Balance',
            usage: 'Usage Percentage'
        }
    }[currentLanguage] || {
        totalIncome: 'Total Income',
        totalExpense: 'Total Expense',
        remaining: 'Remaining Balance',
        usage: 'Usage Percentage'
    };
    
    // Update summary elements with labels
    if (document.getElementById('totalIncomeLabel')) {
        document.getElementById('totalIncomeLabel').textContent = t.totalIncome;
    }
    if (document.getElementById('totalExpenseLabel')) {
        document.getElementById('totalExpenseLabel').textContent = t.totalExpense;
    }
    if (document.getElementById('remainingLabel')) {
        document.getElementById('remainingLabel').textContent = t.remaining;
    }
    if (document.getElementById('usagePercentLabel')) {
        document.getElementById('usagePercentLabel').textContent = t.usage;
    }
    
    // Update values
    if (totalIncomeEl) totalIncomeEl.textContent = formatRupiah(totalIncome);
    if (totalExpenseEl) totalExpenseEl.textContent = formatRupiah(totalExpense);
    if (remainingEl) remainingEl.textContent = formatRupiah(remaining);
    if (usagePercentEl) usagePercentEl.textContent = `${usagePercentage}%`;
    
    // Update hero elements
    if (remainingHeroEl) remainingHeroEl.textContent = formatRupiah(remaining);
    if (usagePercentHeroEl) usagePercentHeroEl.textContent = `${usagePercentage}%`;
    
    // Update progress bar
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
        progressFill.style.width = `${usagePercentage}%`;
        
        // Update progress bar color based on usage
        if (usagePercentage >= 80) {
            progressFill.style.backgroundColor = '#dc3545'; // Red
        } else if (usagePercentage >= 50) {
            progressFill.style.backgroundColor = '#ffc107'; // Yellow
        } else {
            progressFill.style.backgroundColor = '#28a745'; // Green
        }
    }
    
    // Update status message
    updateStatusMessage(usagePercentage);
}

function getCurrentLanguage() {
    const saved = localStorage.getItem('preferredLanguage');
    if (saved) return saved;
    const docLang = document.documentElement.lang;
    return docLang ? docLang.split('-')[0] : 'id';
}

document.addEventListener('DOMContentLoaded', () => {
    const primaryNav = document.getElementById('primaryNav');
    const menuToggle = document.getElementById('menuToggle');
    const navOverlay = document.getElementById('navOverlay');

    if (!primaryNav || !menuToggle || !navOverlay) {
        return;
    }

    const navLinks = primaryNav.querySelectorAll('a');

    const setMenuState = (isOpen) => {
        primaryNav.classList.toggle('active', isOpen);
        navOverlay.classList.toggle('active', isOpen);
        document.body.classList.toggle('menu-open', isOpen);
        menuToggle.classList.toggle('active', isOpen);
        menuToggle.setAttribute('aria-expanded', isOpen.toString());
        const shouldHide = window.innerWidth <= 1024;
        primaryNav.setAttribute('aria-hidden', shouldHide && !isOpen ? 'true' : 'false');
    };

    const closeMenu = () => setMenuState(false);
    const openMenu = () => setMenuState(true);

    menuToggle.addEventListener('click', () => {
        const isOpen = primaryNav.classList.contains('active');
        setMenuState(!isOpen);
    });

    navOverlay.addEventListener('click', closeMenu);
    navLinks.forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });

    setMenuState(false);

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            setMenuState(false);
            primaryNav.setAttribute('aria-hidden', 'false');
        }
    });
});

window.renderTransactions = renderTransactions;
window.updateSummary = updateSummary;
window.renderBudget = renderBudget;
