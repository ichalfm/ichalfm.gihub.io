// Typing effect
const text = "Hi, Saya Fahrizal 👋";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}
typing();

// Scroll animation
const faders = document.querySelectorAll('.fade');
window.addEventListener('scroll', () => {
  faders.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});

// Dark mode toggle
document.getElementById("toggleTheme").onclick = () => {
  document.body.classList.toggle("light");
};

// GitHub API (AUTO PROJECT)
fetch("https://api.github.com/users/ichalfm/repos")
  .then(res => res.json())
  .then(data => {
    const repoList = document.getElementById("repoList");

    data.slice(0, 6).forEach(repo => {
      repoList.innerHTML += `
        <div class="card">
          <h3>${repo.name}</h3>
          <p>${repo.description || "No description"}</p>
          <a href="${repo.html_url}" target="_blank">Lihat Repo</a>
        </div>
      `;
    });
  });
