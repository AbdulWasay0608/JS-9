let stopwatchInterval;
    let timerInterval;
    let stopwatchTime = 0;
    let timerTime = 0;

    function formatTime(time) {
      let hours = Math.floor(time / 3600);
      let minutes = Math.floor((time % 3600) / 60);
      let seconds = Math.floor(time % 60);

      return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    function startStopwatch() {
      stopwatchInterval = setInterval(() => {
        stopwatchTime++;
        document.querySelector('.timer').textContent = formatTime(stopwatchTime);
      }, 1000);
    }

    function stopStopwatch() {
      clearInterval(stopwatchInterval);
    }

    function resetStopwatch() {
      clearInterval(stopwatchInterval);
      stopwatchTime = 0;
      document.querySelector('.timer').textContent = formatTime(stopwatchTime);
    }

    function startTimer() {
      let hours = parseInt(document.getElementById('hours').value) || 0;
      let minutes = parseInt(document.getElementById('minutes').value) || 0;
      let seconds = parseInt(document.getElementById('seconds').value) || 0;

      timerTime = hours * 3600 + minutes * 60 + seconds;

      if (timerTime > 0) {
        timerInterval = setInterval(() => {
          timerTime--;
          document.querySelector('.timer').textContent = formatTime(timerTime);

          if (timerTime === 0) {
            clearInterval(timerInterval);
            alert('Timer expired!');
          }
        }, 1000);
      }
    }

    function stopTimer() {
      clearInterval(timerInterval);
    }

    function resetTimer() {
      clearInterval(timerInterval);
      document.getElementById('hours').value = '';
      document.getElementById('minutes').value = '';
      document.getElementById('seconds').value = '';
      document.querySelector('.timer').textContent = '00:00:00';
    }