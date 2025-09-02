document.addEventListener('DOMContentLoaded', function() {
    
    
    const colorBtn = document.getElementById('colorBtn');
    const randomBtn = document.getElementById('randomBtn');
    const bioDesc = document.getElementById('bioDesc');
    const profileImg = document.getElementById('profileImg');
    const modal = document.getElementById('messageModal');
    const modalMessage = document.getElementById('modalMessage');
    const closeBtn = document.querySelector('.close-btn');
    
    
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
    
   
    randomBtn.addEventListener('click', function() {
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
        
       
        randomBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            randomBtn.style.transform = 'scale(1)';
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
});