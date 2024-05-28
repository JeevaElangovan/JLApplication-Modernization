// navBar=====>

// Function to open sidebar
function openSidebar() {
    document.querySelector(".sidebar").classList.add("active");
    document.querySelector("body").classList.add("sidebar-open");
  }
  
  // Function to close sidebar
  function closeSidebar() {
    document.querySelector(".sidebar").classList.remove("active");
    document.querySelector("body").classList.remove("sidebar-open");
  }
  
  // Function to toggle dropdown
  function toggleDropdown(id) {
    var dropdown = document.getElementById(id + "-dropdown");
    var icon = document.getElementById(id + "-icon");
    if (dropdown.style.display === "none") {
      dropdown.style.display = "block";
      icon.classList.remove("bi-chevron-down");
      icon.classList.add("bi-chevron-up");
    } else {
      dropdown.style.display = "none";
      icon.classList.remove("bi-chevron-up");
      icon.classList.add("bi-chevron-down");
    }
  }
  
  // Toggle sidebar on navbar toggler click
  document
    .querySelector(".navbar-toggler")
    .addEventListener("click", function () {
      if (document.querySelector(".sidebar").classList.contains("active")) {
        closeSidebar(); // Close sidebar if already open
      } else {
        openSidebar(); // Open sidebar if closed
      }
    });
  