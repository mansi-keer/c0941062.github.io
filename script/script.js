/*Student Name:mansi keer
File Name: script.js
Date:3aug
*/


// Lightbox functionality for image gallery
document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery img');
    const lightbox = document.createElement('div');
    const lightboxImage = document.createElement('img');
    const closeBtn = document.createElement('div');
    
    lightbox.classList.add('lightbox');
    closeBtn.classList.add('close');
    closeBtn.textContent = '×';
    
    lightbox.appendChild(lightboxImage);
    lightbox.appendChild(closeBtn);
    document.body.appendChild(lightbox);
    
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            lightboxImage.src = this.src;
            lightbox.style.display = 'flex';
        });
    });
    
    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });
});

// Sticky navigation
document.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// team.js

document.addEventListener('DOMContentLoaded', function() {
    // Toggle functionality for the Leadership Team section
    const toggleBtn = document.querySelector('.toggle-btn');
    const teamMembers = document.querySelectorAll('#leadership .team-member');

    toggleBtn.addEventListener('click', function() {
        teamMembers.forEach(member => {
            if (member.style.display === 'block') {
                member.style.display = 'none';
            } else {
                member.style.display = 'block';
            }
        });
    });

    // Scroll to Top Button functionality
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
