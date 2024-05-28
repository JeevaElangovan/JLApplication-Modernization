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
  


//  Section - 2 Application Modernization Services 
$(document).ready(function() {
    $('.application-para').click(function() {
      var targetId = $(this).data('target');
      $('.application-para').removeClass('active-ams');
      $(this).addClass('active-ams');
      $('.content-ams').addClass('hidden-ams');
      $('#' + targetId).removeClass('hidden-ams');
    });
  });


// Section - 2 Application Modernization Services


document.addEventListener("DOMContentLoaded", function() {
    var headers = document.querySelectorAll('.modernization-res-sec1');
    var openSection = document.getElementById('modernization-res-sec1');

    function toggleSection(header) {
        var icon1 = header.querySelector('.toggle-icon');
        var icon = header.querySelector('.toggle-icon.icon');
        var label = header.querySelector('label');
        var content = header.nextElementSibling;

        if (content.style.display === 'none' || content.style.display === '') {
            // Close any currently open section
            if (openSection && openSection !== header) {
                var openIcon1 = openSection.querySelector('.toggle-icon');
                var openIcon = openSection.querySelector('.toggle-icon.icon');
                var openLabel = openSection.querySelector('label');
                var openContent = openSection.nextElementSibling;

                openContent.style.display = 'none';
                // openIcon1.style.backgroundColor = '#ffffff';
                // openIcon1.style.color = '#000000';
                // openLabel.style.fontWeight = '';
                // openLabel.style.color = '';
                openIcon.classList.remove('fa-minus');
                openIcon.classList.add('fa-plus');
                openSection.classList.remove('active');
            }

            // Open the clicked section
            content.style.display = 'block';
            // icon1.style.backgroundColor = '#ffffff';
            // icon1.style.color = '#2CA068'; 
            // label.style.color = '#2CA068'; 
            // label.style.fontWeight = 'bold';
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
            header.classList.add('active');

            openSection = header;
        } else {
            // Close the clicked section
            content.style.display = 'none';
            // icon1.style.backgroundColor = '#ffffff';
            // icon1.style.color = '#000000';
            // label.style.fontWeight = '';
            // label.style.color = '';
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
            header.classList.remove('active');

            openSection = null;
        }
    }

    headers.forEach(function(header) {
        header.addEventListener('click', function() {
            toggleSection(header);
        });
    });

    // Initial state for Web App Development
    if (openSection) {
        // var initialIcon1 = openSection.querySelector('.toggle-icon');
        // var initialIcon = openSection.querySelector('.toggle-icon.icon');
        // var initialLabel = openSection.querySelector('label');
        // var initialContent = openSection.nextElementSibling;

        initialContent.style.display = 'block';
        // initialIcon1.style.backgroundColor = '#ffffff';
        // initialIcon1.style.color = '#2CA068'; 
        // initialLabel.style.color = '#2CA068'; 
        // initialLabel.style.fontWeight = 'bold';
        initialIcon.classList.remove('fa-plus');
        initialIcon.classList.add('fa-minus');
        openSection.classList.add('active');
    }
});
