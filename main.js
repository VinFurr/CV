document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.descrAnim');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const extraContent = button.nextElementSibling;
            if (extraContent.classList.contains('hidden')) {
                extraContent.classList.remove('hidden');
                button.textContent = "Close list";
            } else {
                extraContent.classList.add('hidden');
                button.textContent = "Show completed courses";
            }
        });
    });
});