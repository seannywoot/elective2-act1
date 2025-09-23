document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const colorBtn = document.getElementById('colorBtn');
    const funFactBtn = document.getElementById('funFactBtn');
    const bioDesc = document.getElementById('bioDesc');
    const profileImg = document.getElementById('profileImg');
    const modal = document.getElementById('messageModal');
    const modalMessage = document.getElementById('modalMessage');
    const closeBtn = document.querySelector('.close-btn');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const greeting = document.getElementById('greeting');
    const contactForm = document.getElementById('contactForm');
    const navbar = document.querySelector('.navbar');
    
    // Initialize features
    setDynamicGreeting();
    initializeNavigation();
    initializeFormValidation();
    initializeFloatingNavbar();
    
    let isDarkTheme = false;
    
    colorBtn.addEventListener('click', function() {
        isDarkTheme = !isDarkTheme;
        
        if (isDarkTheme) {
            document.body.classList.add('dark-theme');
            // Switch to sun icon for light mode
            colorBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="theme-icon">
                    <circle cx="12" cy="12" r="4"/>
                    <path d="M12 2v2"/>
                    <path d="M12 20v2"/>
                    <path d="m4.93 4.93 1.41 1.41"/>
                    <path d="m17.66 17.66 1.41 1.41"/>
                    <path d="M2 12h2"/>
                    <path d="M20 12h2"/>
                    <path d="m6.34 17.66-1.41 1.41"/>
                    <path d="m19.07 4.93-1.41 1.41"/>
                </svg>
            `;
        } else {
            document.body.classList.remove('dark-theme');
            // Switch to moon icon for dark mode
            colorBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="theme-icon">
                    <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>
                </svg>
            `;
        }
        
        
        colorBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            colorBtn.style.transform = 'scale(1)';
        }, 150);
    });
    
    // Random fact via About section button
    funFactBtn.addEventListener('click', function() {
        const welcomeMessages = [
            "I peaked Ascendant 3 in Valorant!",
            "I listen to a lot of K-pop! My favorite groups are Izna, Kep1er, and Zerobaseone!",
            "I took this program because of practicality!",
            "I'm naturally a shy person",
            "My favorite food is Sisig!"
        ];
        
        const randomMessage = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
        modalMessage.textContent = randomMessage;
        modal.style.display = 'block';
        
        funFactBtn.style.transform = 'scale(0.98)';
        setTimeout(() => {
            funFactBtn.style.transform = 'scale(1)';
        }, 150);
    });

    // Modal close functionality
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
   
    bioDesc.addEventListener('dblclick', function() {
        const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        bioDesc.style.color = randomColor;
        bioDesc.style.transition = 'color 0.3s ease';
        
       
        setTimeout(() => {
            bioDesc.style.color = '';
        }, 3000);
    });
    
    
    profileImg.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) rotate(5deg)';
    });
    
    profileImg.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
    
    
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('click', function() {
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = '';
            }, 200);
        });
    });
    
    
    // Smooth scrolling for navigation links with offset for fixed navbar
    function getNavOffset() { return (navbar ? navbar.offsetHeight + 40 : 0); } // add a bit of spacing
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const target = document.querySelector(href);
            if (!target) return;

            const targetY = target.getBoundingClientRect().top + window.pageYOffset - getNavOffset();
            window.scrollTo({ top: targetY, behavior: 'smooth' });

            // Close mobile menu after clicking
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Handle manual hash changes and direct links with hash
    window.addEventListener('hashchange', () => {
        const target = document.querySelector(location.hash);
        if (target) {
            const targetY = target.getBoundingClientRect().top + window.pageYOffset - getNavOffset();
            window.scrollTo({ top: targetY, behavior: 'smooth' });
        }
    });
    if (location.hash) {
        const target = document.querySelector(location.hash);
        if (target) {
            setTimeout(() => {
                const targetY = target.getBoundingClientRect().top + window.pageYOffset - getNavOffset();
                window.scrollTo({ top: targetY, behavior: 'instant' in window ? 'instant' : 'auto' });
            }, 0);
        }
    }

    // Dynamic Greeting Function
    function setDynamicGreeting() {
        const now = new Date();
        const hour = now.getHours();
        let timeGreeting = '';

        if (hour >= 5 && hour < 12) {
            timeGreeting = 'Good Morning';
        } else if (hour >= 12 && hour < 17) {
            timeGreeting = 'Good Afternoon';
        } else if (hour >= 17 && hour < 21) {
            timeGreeting = 'Good Evening';
        } else {
            timeGreeting = 'Good Night';
        }

        greeting.textContent = `${timeGreeting} — Hi! I'm`;
    }

    // Navigation Functions
    function initializeNavigation() {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });

        // Close menu on window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }

    // Form Validation Functions
    function initializeFormValidation() {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            let isValid = true;
            
            // Clear previous errors
            clearErrors();
            
            // Validate name
            if (name.length < 2) {
                showError('nameError', 'Name must be at least 2 characters long');
                isValid = false;
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showError('emailError', 'Please enter a valid email address');
                isValid = false;
            }
            
            // Validate message
            if (message.length < 10) {
                showError('messageError', 'Message must be at least 10 characters long');
                isValid = false;
            }
            
            if (isValid) {
                // Simulate form submission
                const submitBtn = contactForm.querySelector('.submit-btn');
                const originalText = submitBtn.textContent;
                
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    submitBtn.textContent = 'Message Sent!';
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                        contactForm.reset();
                        showSuccessMessage();
                    }, 2000);
                }, 1500);
            }
        });
        
        // Real-time validation
        document.getElementById('name').addEventListener('blur', validateName);
        document.getElementById('email').addEventListener('blur', validateEmail);
        document.getElementById('message').addEventListener('blur', validateMessage);
    }

    function validateName() {
        const name = document.getElementById('name').value.trim();
        const errorElement = document.getElementById('nameError');
        
        if (name.length > 0 && name.length < 2) {
            showError('nameError', 'Name must be at least 2 characters long');
        } else {
            errorElement.textContent = '';
        }
    }

    function validateEmail() {
        const email = document.getElementById('email').value.trim();
        const errorElement = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email.length > 0 && !emailRegex.test(email)) {
            showError('emailError', 'Please enter a valid email address');
        } else {
            errorElement.textContent = '';
        }
    }

    function validateMessage() {
        const message = document.getElementById('message').value.trim();
        const errorElement = document.getElementById('messageError');
        
        if (message.length > 0 && message.length < 10) {
            showError('messageError', 'Message must be at least 10 characters long');
        } else {
            errorElement.textContent = '';
        }
    }

    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
    }

    function clearErrors() {
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(element => {
            element.textContent = '';
        });
    }

    function showSuccessMessage() {
        modalMessage.textContent = 'Thank you for your message! I\'ll get back to you soon.';
        modal.style.display = 'block';
    }

    // Floating Navbar Functions
    function initializeFloatingNavbar() {

        // Show navbar immediately on page load
        navbar.classList.add('visible');

        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Add scrolled class for enhanced styling
            if (scrollTop > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            // Keep navbar always visible - no hiding logic
            navbar.style.transform = 'translateX(-50%) translateY(0)';
            navbar.style.opacity = '1';
        });

        // Update active nav link based on scroll position
        updateActiveNavLink();
        window.addEventListener('scroll', updateActiveNavLink);
    }

    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id], div[id="home"]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        const scrollPosition = window.pageYOffset + getNavOffset() + 1;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
});