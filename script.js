    let incrementOccurred = false;

        function handleScroll() {
        const scrollPosition = window.scrollY;
        const counters = document.querySelectorAll('#counter');

        if (scrollPosition >= 100 && !incrementOccurred) {
            incrementOccurred = true;

            counters.forEach((counterElement) => {
            const maxValue = parseInt(counterElement.dataset.value, 10);
            animateCounter(counterElement, maxValue);
            });
        }
        }

        function animateCounter(element, maxValue) {
        let currentValue = 0;
        const increment = 1; // Increment value

        function updateCounter() {
            if (currentValue <= maxValue) {
            element.textContent = currentValue;
            currentValue += increment;
            requestAnimationFrame(updateCounter);
            }
        }

        updateCounter();
        }

        window.addEventListener('scroll', handleScroll);


    // mobile nav

    // const mobileMenuButton = document.getElementById('mobileMenuButton');
    // const mobileMenu = document.getElementById('mobileMenu');

    // mobileMenuButton.addEventListener('click', () => {
    //     mobileMenu.classList.toggle('hidden');
    // });
    