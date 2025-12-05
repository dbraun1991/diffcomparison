document.addEventListener('DOMContentLoaded', function() {
    // ========================================
    // CONTACT MODAL
    // ========================================
    const contactButton = document.getElementById('contactButton');
    const contactModal = document.getElementById('contactModal');
    const modalClose = document.getElementById('modalClose');
    const submitAnswer = document.getElementById('submitAnswer');
    const safetyAnswer = document.getElementById('safetyAnswer');
    const errorMessage = document.getElementById('errorMessage');
    const questionSection = document.getElementById('questionSection');
    const contactInfo = document.getElementById('contactInfo');

    function openModal() {
        contactModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        safetyAnswer.focus();
    }

    function closeModal() {
        contactModal.classList.remove('active');
        document.body.style.overflow = '';
        // Reset modal state
        questionSection.style.display = 'block';
        contactInfo.style.display = 'none';
        safetyAnswer.value = '';
        errorMessage.classList.remove('show');
    }

    function checkAnswer() {
        const answer = safetyAnswer.value.trim().toLowerCase();
        
        if (answer === 'five') {
            // Correct answer
            questionSection.style.display = 'none';
            contactInfo.style.display = 'block';
            errorMessage.classList.remove('show');
        } else {
            // Incorrect answer
            errorMessage.classList.add('show');
            safetyAnswer.value = '';
            safetyAnswer.focus();
            
            // Hide error message after 3 seconds
            setTimeout(() => {
                errorMessage.classList.remove('show');
            }, 3000);
        }
    }

    // Event listeners
    contactButton.addEventListener('click', openModal);
    modalClose.addEventListener('click', closeModal);
    contactModal.addEventListener('click', function(e) {
        if (e.target === contactModal) {
            closeModal();
        }
    });

    submitAnswer.addEventListener('click', checkAnswer);
    
    safetyAnswer.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkAnswer();
        }
    });

    // ESC key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && contactModal.classList.contains('active')) {
            closeModal();
        }
    });

    // ========================================
    // BURGER MENU & SIDEBAR
    // ========================================
    const burgerMenu = document.getElementById('burgerMenu');
    const sidebar = document.getElementById('sidebar');
    const sidebarClose = document.getElementById('sidebarClose');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    function openSidebar() {
        sidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeSidebar() {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    burgerMenu.addEventListener('click', openSidebar);
    sidebarClose.addEventListener('click', closeSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);

    // Close sidebar when clicking a link
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeSidebar();
            // Smooth scroll to target
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                setTimeout(() => {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 300);
            }
        });
    });

    // Close sidebar on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && sidebar.classList.contains('active')) {
            closeSidebar();
        }
    });

    // ========================================
    // TRACKING: Navigation Click Tracking
    // ========================================
    function sendSectionTracking(sectionId) {
        const sessionId = sessionStorage.getItem('session_uuid');
        if (sessionId && sectionId) {
            const pixelUrl = `https://backendcontent.d-braun1991.workers.dev/pixel?session=${sessionId}&section=${sectionId}`;
            const img = new Image(1, 1);
            img.src = pixelUrl;
            img.style.display = 'none';
            document.body.appendChild(img);
        }
    }

    // Track all navigation links (header nav, table chapter links, and sidebar links)
    const allLinks = document.querySelectorAll('a[href^="#"], .sidebar-link');
    
    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1); // Remove #
            
            // Send tracking pixel for section jump
            if (targetId) {
                sendSectionTracking(targetId);
            }
        });
    });

    // ========================================
    // ORIGINAL FUNCTIONALITY: Scroll Animations
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    // Observe stats
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.5s ease-out';
        observer.observe(item);
    });

    // ========================================
    // ORIGINAL FUNCTIONALITY: Header Background
    // ========================================
    const header = document.querySelector('.main-header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.backgroundColor = 'rgba(11, 19, 46, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(155, 174, 238, 0.1)';
        } else {
            header.style.backgroundColor = 'rgba(30, 50, 120, 0.3)';
            header.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });

    // ========================================
    // ORIGINAL FUNCTIONALITY: Button Animations
    // ========================================
    const buttons = document.querySelectorAll('.cta-button, .cta-button-outline');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s ease-out';
            ripple.style.pointerEvents = 'none';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // ========================================
    // ORIGINAL FUNCTIONALITY: Console Message
    // ========================================
    console.log('%c📚 Wiki Documentation System', 'color: #FF5A00; font-size: 20px; font-weight: bold;');
    console.log('%cCustom color scheme loaded successfully!', 'color: #9BAEEE; font-size: 14px;');
    console.log('%c🎯 Tracking enabled - Session: ' + sessionStorage.getItem('session_uuid'), 'color: #FFD700; font-size: 12px;');
});