// Create floating bubbles background
function createBubbles() {
    const bubblesContainer = document.getElementById('bubbles');
    const colors = ['rgba(67, 97, 238, 0.1)', 'rgba(58, 12, 163, 0.1)', 'rgba(114, 9, 183, 0.1)'];
    
    for (let i = 0; i < 15; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        const size = Math.random() * 100 + 50;
        const posX = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${posX}%`;
        bubble.style.bottom = `-${size}px`;
        bubble.style.animation = `float ${duration}s linear ${delay}s infinite`;
        bubble.style.opacity = Math.random() * 0.4 + 0.1;
        
        bubblesContainer.appendChild(bubble);
    }
}
// Create particle explosion effect
function createParticles() {
    const colors = ['#4361ee', '#3a0ca3', '#7209b7', '#4cc9f0', '#f72585'];
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 15 + 5;
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 5 + 2;
        const distance = Math.random() * 300 + 100;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.left = '50%';
        particle.style.top = '50%';
        particle.style.opacity = 0;
        
        document.body.appendChild(particle);
        
        // Animate particles
        const animation = particle.animate([
            { 
                opacity: 1,
                transform: 'translate(-50%, -50%) scale(1)',
            },
            { 
                opacity: 0,
                transform: `translate(
                    ${Math.cos(angle) * distance}px, 
                    ${Math.sin(angle) * distance}px
                ) scale(0)`,
            }
        ], {
            duration: 1000,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            delay: i * 20,
        });
        
        animation.onfinish = () => particle.remove();
    }
}
// Countdown and redirect
function startCountdown() {
    let seconds = 5;
    const countElement = document.getElementById('count');
    
    const timer = setInterval(() => {
        countElement.textContent = --seconds;
        countElement.style.transform = 'scale(1.2)';
        setTimeout(() => {
            countElement.style.transform = 'scale(1)';
        }, 200);
        
        if (seconds <= 0) {
            clearInterval(timer);
            window.location.href = 'landingpage.html';
        }
    }, 1000);
}
// Add interactive particles on mouse move
function setupMouseParticles() {
    document.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.7) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            particle.style.width = '5px';
            particle.style.height = '5px';
            particle.style.backgroundColor = '#4361ee';
            particle.style.left = `${e.clientX}px`;
            particle.style.top = `${e.clientY}px`;
            particle.style.opacity = 0.7;
            
            document.body.appendChild(particle);
            
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 50 + 20;
            
            particle.animate([
                { 
                    opacity: 0.7,
                    transform: 'scale(1)',
                },
                { 
                    opacity: 0,
                    transform: `translate(
                        ${Math.cos(angle) * distance}px, 
                        ${Math.sin(angle) * distance}px
                    ) scale(0)`,
                }
            ], {
                duration: 1000,
                easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            }).onfinish = () => particle.remove();
        }
    });
}