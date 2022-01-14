    const inicio = 15;
    let time = inicio * 60;
    
    const countdownEl = document.getElementById('countdown');

    setInterval(atualizarCountdown, 1500);

    function atualizarCountdown() {
        const minutos = Math.floor(time / 60);
        let segundos = time % 60;

        segundos = segundos < 10 ? '0' + segundos : segundos;

        countdownEl.innerHTML = `${minutos}:${segundos}`;
        time--;

    }

