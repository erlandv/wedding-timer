const weddingDate = new Date("2025-07-24T10:00:00+07:00");

function updateTime() {
  const diff = (Date.now() - weddingDate) / 1000;
  const timeUnits = [
    { value: 365.25 * 24 * 3600, name: 'year' },
    { value: 30.44 * 24 * 3600, name: 'month' },
    { value: 24 * 3600, name: 'day' },
    { value: 3600, name: 'hour' },
    { value: 60, name: 'minute' },
    { value: 1, name: 'second' }
  ];

  let remaining = diff;
  const timeComponents = timeUnits.map(({ value, name }) => {
    const amount = Math.floor(remaining / value);
    remaining %= value;
    return { amount, name };
  });

  document.getElementById("ym").innerHTML = [
    timeComponents[0], // years
    timeComponents[1]  // months
  ].map(createTimeBox).join('');

  document.getElementById("dhms").innerHTML = [
    timeComponents[2], // days
    timeComponents[3], // hours
    timeComponents[4], // minutes
    timeComponents[5]  // seconds
  ].map(createTimeBox).join('');
}

function createTimeBox({ amount, name }) {
  return `
    <div class="time-box">
      <div class="time-value">${amount}</div>
      <div class="time-label">${name}${amount !== 1 ? 's' : ''}</div>
    </div>
  `;
}

setInterval(updateTime, 1000);
updateTime();