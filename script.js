document.addEventListener('DOMContentLoaded', function() {
  particlesJS('particles-js', {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.3, random: true },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.2, width: 1 },
      move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" }
      }
    }
  });

  function updateTime() {
    const targetDate = new Date('July 24, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = now - targetDate;

    const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.44));
    const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('ym').innerHTML = `
      <div class="time-box">
        <div class="time-value">${years}</div>
        <div class="time-label">Years</div>
      </div>
      <div class="time-box">
        <div class="time-value">${Math.floor(months)}</div>
        <div class="time-label">Months</div>
      </div>
    `;

    document.getElementById('dhms').innerHTML = `
      <div class="time-box">
        <div class="time-value">${days}</div>
        <div class="time-label">Days</div>
      </div>
      <div class="time-box">
        <div class="time-value">${hours}</div>
        <div class="time-label">Hours</div>
      </div>
      <div class="time-box">
        <div class="time-value">${minutes}</div>
        <div class="time-label">Minutes</div>
      </div>
      <div class="time-box">
        <div class="time-value">${seconds}</div>
        <div class="time-label">Seconds</div>
      </div>
    `;
  }

  updateTime();
  setInterval(updateTime, 1000);
});