function toggleMore() {
    const text = document.getElementById('moreText');
    const button = document.querySelector('button');
  
    if (text.style.display === 'none' || text.style.display === '') {
      text.style.display = 'block';
      text.style.animation = 'fadeInText 1s ease forwards';
      button.textContent = 'Read Less';
    } else {
      text.style.display = 'none';
      button.textContent = 'Read More';
    }
  }
  