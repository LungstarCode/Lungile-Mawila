
const h1 = document.querySelector("#heading-bold");
let words = ["Growth" , "Excellence" , "Success" , "Fulfillment", "Innovation"]


let i = 0;
setInterval(() => {
    h1.innerText= words[i];
    i = (i + 1) % words.length
}, 2000)


const button = document.getElementById('light-button');

// Function to apply a theme
function applyTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.style.setProperty('--background', '#121212');
        document.documentElement.style.setProperty('--textMainColor', '#ffffff');
        button.innerText = "Light Theme";
    } else {
        document.documentElement.style.setProperty('--background', '#ffffff');
        document.documentElement.style.setProperty('--textMainColor', '#000000');
        button.innerText = "Dark Theme";
    }
}

// Toggle between light and dark themes
function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
}

// Load and apply the saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
});

// Attach the click event to toggle the theme
button.onclick = toggleTheme;
