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