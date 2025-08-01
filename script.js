const weddingDate = new Date("2025-07-24T00:00:00+07:00");

    function updateTime() {
      const now = new Date();
      let diff = Math.floor((now - weddingDate) / 1000);

      const years = Math.floor(diff / (365.25 * 24 * 60 * 60));
      diff -= years * 365.25 * 24 * 60 * 60;

      const months = Math.floor(diff / (30.44 * 24 * 60 * 60));
      diff -= months * 30.44 * 24 * 60 * 60;

      const days = Math.floor(diff / (24 * 60 * 60));
      diff -= days * 24 * 60 * 60;

      const hours = Math.floor(diff / (60 * 60));
      diff -= hours * 60 * 60;

      const minutes = Math.floor(diff / 60);
      const seconds = diff % 60;

      document.getElementById("ym").innerHTML = `
        ${createTimeBox(years, 'year')}
        ${createTimeBox(months, 'month')}
      `;

      document.getElementById("dhms").innerHTML = `
        ${createTimeBox(days, 'day')}
        ${createTimeBox(hours, 'hour')}
        ${createTimeBox(minutes, 'minute')}
        ${createTimeBox(seconds, 'second')}
      `;
    }

    function createTimeBox(value, label) {
      const pluralLabel = value === 1 ? label : label + 's';
      return `
        <div class="time-box">
          <div class="time-value">${value}</div>
          <div class="time-label">${pluralLabel}</div>
        </div>
      `;
    }

    setInterval(updateTime, 1000);
    updateTime();