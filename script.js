function aumentarIcone(elemento) {
    elemento.style.transform = 'scale(1.2)';
}

function restaurarIcone(elemento) {
    elemento.style.transform = 'scale(1)';
}

const ctxBar = document.getElementById('grafico-barra').getContext('2d');
const ctxLine = document.getElementById('grafico-linha').getContext('2d');

const graficoBarra = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'Python', 'SQL'],
        datasets: [{
            label: 'Habilidades',
            data: [85, 80, 65, 70, 65],
            backgroundColor: 'rgba(0, 255, 255, 0.2)',
            borderColor: 'rgba(0, 255, 255, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const graficoLinha = new Chart(ctxLine, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
        datasets: [{
            label: 'Progresso de Aprendizado',
            data: [10, 12, 18, 40, 50, 60, 60],
            backgroundColor: 'rgba(0, 255, 255, 0.2)',
            borderColor: 'rgba(0, 255, 255, 1)',
            borderWidth: 1,
            fill: true
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const username = 'PhCalegari'; 
const apiUrl = `https://api.github.com/users/${username}/repos`;

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao obter dados do GitHub');
        }
        return response.json();
    })
    .then(data => {
        const repoList = document.getElementById('repo-list');
        data.forEach(repo => {
            const repoContainer = document.createElement('div');
            repoContainer.classList.add('repo-item');

            const repoLink = document.createElement('a');
            repoLink.href = repo.html_url;
            repoLink.textContent = repo.name;
            repoLink.target = '_blank';
            repoLink.rel = 'noopener noreferrer';
            repoLink.classList.add('retangulo');

            repoContainer.appendChild(repoLink);
            repoList.appendChild(repoContainer);
        });
        $('.repo-list').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    })
    .catch(error => {
        console.error('Erro ao obter dados do GitHub:', error);
    });
