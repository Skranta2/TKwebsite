document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Burger Menu ---
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
    }

    // --- Accordion for Service & App Cards ---
    const interactiveCards = document.querySelectorAll('.service-card, .app-card');

    interactiveCards.forEach(card => {
        card.addEventListener('click', (event) => {
            // If the user clicked a link inside the card, let the link work and do nothing else.
            if (event.target.closest('a')) {
                return;
            }
            
            event.stopPropagation(); 

            const isAlreadyActive = card.classList.contains('active');

            // First, remove 'active' class from all cards
            interactiveCards.forEach(c => {
                c.classList.remove('active');
            });

            // If the clicked card was not already active, make it active
            if (!isAlreadyActive) {
                card.classList.add('active');
            }
        });
    });

    // --- Click Outside to Close Cards ---
    document.addEventListener('click', (event) => {
        // If the click is not on an interactive card, close all of them
        if (!event.target.closest('.service-card, .app-card')) {
            interactiveCards.forEach(card => {
                card.classList.remove('active');
            });
        }
    });

});