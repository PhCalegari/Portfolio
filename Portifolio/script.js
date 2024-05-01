
        function aumentarIcone(elemento) {
            elemento.style.transform = 'scale(1.2)';
        }

        function restaurarIcone(elemento) {
            elemento.style.transform = 'scale(1)';
        }
        var dadosGrafico1 = {
            labels: ["HTML", "CSS", "JavaScript", "PHP"],
            datasets: [{
                label: "Nível de habilidade",
                data: [80, 65, 45,58 , 0],
                backgroundColor: 'rgba(0, 255, 255, 0.2)',
                borderColor: 'rgba(0, 255, 255, 1)',
                borderWidth: 1
            }]
        };

        let configGrafico = {
            type: 'radar',
            data: dadosGrafico1,
            options: {
                responsive: false,
                maintainAspectRatio: true,
                aspectRatio: 1,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    r: {
                        grid: {
                            color: 'rgba(0, 255, 255, 0.2)'
                        },
                        ticks: {
                            color: 'white'
                        }
                    }
                }
            }
        };

        let grafico1 = new Chart(
            document.getElementById('grafico1'),
            configGrafico
        );
