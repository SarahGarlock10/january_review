document.addEventListener("DOMContentLoaded", function () {
  // Update the dropdown event listener to handle clicks on the button inside the dropdown
  document.querySelectorAll(".dropdown-btn").forEach(button => {
    button.addEventListener("click", function (event) {
      const parent = this.parentElement;
      parent.classList.toggle("active");
    });
  });

  // Function to show only the selected section
  function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
  }

  // Display first section by default
  showSection('wins');

  // Ensure Chart.js only runs if the element exists
  const ctx = document.getElementById('metricsChart');
  if (ctx) {
    new Chart(ctx.getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['API Calls', 'Google Sheets Updates', 'Reports Generated'],
        datasets: [{
          label: 'Monthly Stats',
          data: [120, 45, 30],
          backgroundColor: ['#4CAF50', '#FF9800', '#2196F3']
        }]
      }
    });
  }
});
