document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Highlight active section
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('nav ul li');
    window.onscroll = () => {
        var current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(li => {
            li.classList.remove('active');
            if (li.classList.contains(current)) {
                li.classList.add('active');
            }
        });
    };

    // Alert on clicking "View Recommendations"
    const viewRecommendations = document.querySelector('a[href="output.txt"]');
    if (viewRecommendations) {
        viewRecommendations.addEventListener('click', function (e) {
            e.preventDefault();
            alert("Viewing recommendations...");
        });
    }

    // Dynamic greeting message
    function getGreeting() {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good Morning!';
        if (hour < 18) return 'Good Afternoon!';
        return 'Good Evening!';
    }

    const greetingElement = document.createElement('p');
    greetingElement.textContent = getGreeting();
    greetingElement.style.color = 'goldenrod';
    greetingElement.style.textAlign = 'center';
    document.body.insertBefore(greetingElement, document.body.firstChild);

    // Toggle dark/light mode
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Dark/Light Mode';
    toggleButton.style.display = 'block';
    toggleButton.style.margin = '10px auto';
    document.body.insertBefore(toggleButton, document.body.firstChild);

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
    });

    // Form validation
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = form.querySelector('input');
            if (input.value === '') {
                alert('Please fill out the field');
            } else {
                alert('Form submitted successfully');
            }
        });
    }
});

// CSS for light mode
const style = document.createElement('style');
style.innerHTML = `
.light-mode {
    background-color: white;
    color: black;
}
.light-mode nav ul li {
    color: black;
    border-color: black;
}
.light-mode nav ul li:hover {
    color: white;
}
.light-mode nav ul li span {
    background-color: black;
}
`;
document.head.appendChild(style);
