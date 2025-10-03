// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            const navLinks = document.querySelector('.nav-links');
            const navButtons = document.querySelector('.nav-buttons');

            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
                navButtons.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navButtons.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navButtons.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'var(--dark)';
                navLinks.style.padding = '1rem';
                navButtons.style.position = 'absolute';
                navButtons.style.top = 'calc(100% + 150px)';
                navButtons.style.left = '0';
                navButtons.style.width = '100%';
                navButtons.style.background = 'var(--dark)';
                navButtons.style.padding = '1rem';
            }
        });
    }

    // Rules Page Specific JavaScript
    // Category filtering
    const categoryLinks = document.querySelectorAll('.category-list a');
    if (categoryLinks.length > 0) {
        categoryLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();

                // Update active class
                document.querySelectorAll('.category-list a').forEach(a => {
                    a.classList.remove('active');
                });
                this.classList.add('active');

                const category = this.getAttribute('data-category');

                // Show/hide categories
                document.querySelectorAll('.rules-category').forEach(cat => {
                    if (category === 'all' || cat.getAttribute('data-category') === category) {
                        cat.style.display = 'block';
                    } else {
                        cat.style.display = 'none';
                    }
                });
            });
        });
    }

    // Search functionality
    const searchInput = document.getElementById('searchRules');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();

            document.querySelectorAll('.rule-item').forEach(item => {
                const title = item.querySelector('.rule-title').textContent.toLowerCase();
                const description = item.querySelector('.rule-description').textContent.toLowerCase();

                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    // Agreement button
    const agreementBtn = document.querySelector('.btn-warning');
    if (agreementBtn) {
        agreementBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Terima kasih telah menyetujui peraturan LuckyNetwork! Selamat bermain.');
        });
    }
});