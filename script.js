// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Get references to interactive elements
    const colorBtn = document.getElementById('colorBtn');
    const welcomeBtn = document.getElementById('welcomeBtn');
    const bioText = document.getElementById('bioText');
    const profileImg = document.getElementById('profileImg');
    
    // Theme toggle functionality
    let isDarkTheme = false;
    
    colorBtn.addEventListener('click', function() {
        isDarkTheme = !isDarkTheme;
        
        if (isDarkTheme) {
            document.body.classList.add('dark-theme');
            colorBtn.textContent = 'Light Theme';
        } else {
            document.body.classList.remove('dark-theme');
            colorBtn.textContent = 'Dark Theme';
        }
        
        // Add a subtle animation effect
        colorBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            colorBtn.style.transform = 'scale(1)';
        }, 150);
    });
    
    // Welcome message functionality
    welcomeBtn.addEventListener('click', function() {
        const welcomeMessages = [
            "Welcome to my digital space! 🚀",
            "Thanks for stopping by! 👋",
            "Great to see you here! ✨",
            "Hello there, fellow developer! 💻",
            "Welcome aboard! Let's build something amazing! 🎯"
        ];
        
        const randomMessage = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
        alert(randomMessage);
        
        // Add click animation
        welcomeBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            welcomeBtn.style.transform = 'scale(1)';
        }, 150);
    });
    
    // Bio text color change on double-click
    bioText.addEventListener('dblclick', function() {
        const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        bioText.style.color = randomColor;
        bioText.style.transition = 'color 0.3s ease';
        
        // Reset color after 3 seconds
        setTimeout(() => {
            bioText.style.color = '';
        }, 3000);
    });
    
    // Profile image hover effect with rotation
    profileImg.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) rotate(5deg)';
    });
    
    profileImg.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
    
    // Skill tags interactive hover effect
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('click', function() {
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = '';
            }, 200);
        });
    });
    
    // Add smooth scrolling for better UX (if page gets longer)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Console welcome message for developers who inspect the page
    console.log(`
    🎉 Welcome to Alex Johnson's Portfolio!
    
    Thanks for checking out the code! 
    If you're a fellow developer, feel free to reach out.
    
    Built with: HTML5, CSS3, and Vanilla JavaScript
    `);
    
});