// Music Player Functionality
function changeTrack(url, trackName) {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = url;
    audioPlayer.play();
    
    // Update UI to show current track
    const items = document.querySelectorAll('.playlist li');
    items.forEach(item => item.style.opacity = '1');
    event.target.parentElement.style.opacity = '0.5';
}

// Gallery Tab Switching
function showGallery(type) {
    // Hide all gallery containers
    const containers = document.querySelectorAll('.gallery-container');
    containers.forEach(container => {
        container.classList.remove('active');
    });
    
    // Show selected gallery
    document.getElementById(type).classList.add('active');
    
    // Update tab buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

// Add to Cart Functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.parentElement.querySelector('h3').textContent;
        const productPrice = this.parentElement.querySelector('.price').textContent;
        
        alert(`✓ ${productName} (${productPrice}) added to cart!`);
        
        // Visual feedback
        this.textContent = 'Added!';
        this.style.background = '#28a745';
        
        setTimeout(() => {
            this.textContent = 'Add to Cart';
            this.style.background = '';
        }, 1500);
    });
});

// Book Tickets Functionality
document.querySelectorAll('.book-btn').forEach(button => {
    button.addEventListener('click', function() {
        const eventName = this.parentElement.querySelector('h3').textContent;
        alert(`🎟️ Redirecting to book tickets for: ${eventName}`);
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Listen Now Button
document.querySelector('.cta-button').addEventListener('click', function() {
    const musicSection = document.getElementById('music');
    musicSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Automatically play the first track
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.play();
});

// Contact Form Submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    if (name && email && message) {
        alert(`✓ Thank you ${name}! Your message has been received.\nWe will respond to ${email} shortly.`);
        this.reset();
    }
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply to product cards and tour dates
document.querySelectorAll('.product-card, .tour-date').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s, transform 0.6s';
    observer.observe(element);
});
