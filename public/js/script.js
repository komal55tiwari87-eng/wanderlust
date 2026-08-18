(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  });
})();

// ===============================
// 🌙 Dark Mode
// ===============================

const darkModeBtn = document.getElementById("darkModeBtn");

if (darkModeBtn) {

    // Check saved mode
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        darkModeBtn.innerHTML = "☀️";
    }

    // Toggle dark mode
    darkModeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            darkModeBtn.innerHTML = "☀️";
        } else {
            localStorage.setItem("darkMode", "disabled");
            darkModeBtn.innerHTML = "🌙";
        }

    });
}
