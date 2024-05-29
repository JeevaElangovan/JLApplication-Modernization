
// navBar=====>
  // Function to open sidebar 
  function openSidebar() {
    document.querySelector('.sidebar').classList.add('active');
    document.querySelector('body').classList.add('sidebar-open');
}

// Function to close sidebar
function closeSidebar() {
    document.querySelector('.sidebar').classList.remove('active');
    document.querySelector('body').classList.remove('sidebar-open');
}

function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId + '-dropdown');
    var icon = document.getElementById(dropdownId + '-icon');

    // Close all dropdowns except the one being opened
    var dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach(function (d) {
        if (d.id !== dropdownId + '-dropdown' && d.style.display === 'block') {
            d.style.display = 'none';
            var associatedIcon = document.getElementById(d.id.replace('-dropdown', '-icon'));
            associatedIcon.classList.remove('bi-chevron-up');
            associatedIcon.classList.add('bi-chevron-down');
        }
    });

    // Toggle the display and icon class of the current dropdown
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
        icon.classList.remove('bi-chevron-up');
        icon.classList.add('bi-chevron-down');
    } else {
        dropdown.style.display = 'block';
        icon.classList.remove('bi-chevron-down');
        icon.classList.add('bi-chevron-up');
    }
}


// Toggle sidebar on navbar toggler click
document.querySelector('.navbar-toggler').addEventListener('click', function () {
    if (document.querySelector('.sidebar').classList.contains('active')) {
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


//  Section - 4 technologies Experties

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll('.col p[data-content]');
    const contents = document.querySelectorAll('.hidden-content .content');

    function hideAllContents() {
        contents.forEach(content => {
            content.classList.remove('visible');
        });
    }

    function deactivateAllTabs() {
        tabs.forEach(tab => {
            tab.classList.remove('active-tab');
        });
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            deactivateAllTabs();
            hideAllContents();
            const contentId = this.getAttribute('data-content');
            document.getElementById(contentId).classList.add('visible');
            this.classList.add('active-tab');
        });
    });
});


// Section - 7 Our Case Studies

 // Get references to buttons and card groups
 const btn1 = document.getElementById('btn1');
 const btn2 = document.getElementById('btn2');
 const btn3 = document.getElementById('btn3');
 const btn4 = document.getElementById('btn4');

 const cardGroup1 = document.getElementById('cardGroup1');
 const cardGroup2 = document.getElementById('cardGroup2');
 const cardGroup3 = document.getElementById('cardGroup3');
 const cardGroup4 = document.getElementById('cardGroup4');

 const cardGroups = [cardGroup1, cardGroup2, cardGroup3, cardGroup4];
 const buttons = [btn1, btn2, btn3, btn4];
 let currentGroupIndex = 0;
 let autoCycleInterval;

 // Function to show cards
 function showCards(cardGroup) {
     cardGroup.classList.add('active');
 }

 // Function to hide cards
 function hideCards(...cardGroups) {
     cardGroups.forEach(cardGroup => {
         cardGroup.classList.remove('active');
     });
 }

 // Function to set active button
 function setActiveButton(index) {
     buttons.forEach((button, i) => {
         if (i === index) {
             button.classList.add('active');
         } else {
             button.classList.remove('active');
         }
     });
 }

 // Function to cycle to the next card group
 function cycleCards() {
     hideCards(...cardGroups);
     showCards(cardGroups[currentGroupIndex]);
     setActiveButton(currentGroupIndex);
     currentGroupIndex = (currentGroupIndex + 1) % cardGroups.length;
 }

 // Function to start automatic cycling
 function startAutoCycle() {
     autoCycleInterval = setInterval(cycleCards, 3000); // Change every 3 seconds
 }

 // Function to stop automatic cycling
 function stopAutoCycle() {
     clearInterval(autoCycleInterval);
 }

 // Add click event listeners to buttons
 buttons.forEach((button, index) => {
     button.addEventListener('click', () => {
         stopAutoCycle();
         hideCards(...cardGroups);
         showCards(cardGroups[index]);
         setActiveButton(index);
         currentGroupIndex = index;
     });
 });

 // Start automatic cycling on page load
 startAutoCycle();
 // Set initial active button and show the first card group
 setActiveButton(0);
 showCards(cardGroup1);


//  Section - 7 Our Case Studies (Responsive)

let currentIndexx = 0;
const totalCards = document.querySelectorAll('.case-studies-mobile-card').length;
const caseStudiesContainer = document.querySelector('.case-studies-mobile');

function updateCardDisplay() {
    const offset = -currentIndexx * 100;
    caseStudiesContainer.style.transform = `translateX(${offset}%)`;

    // Update arrow images based on the current index
    if (currentIndexx > 0) {
        document.getElementById('prevArrow1').src = './Modernization/case - left dark arrow.png';
    } else {
        document.getElementById('prevArrow1').src = './Modernization/case - left arrow.png';
    }

    if (currentIndexx < totalCards - 1) {
        document.getElementById('nextArrow1').src = './Modernization/case - right arrow.png';
    } else {
        document.getElementById('nextArrow1').src = './Modernization/case - right  light arrow.png';
    }
}

document.getElementById('prevArrow1').addEventListener('click', () => {
    if (currentIndexx > 0) {
        currentIndexx--;
        updateCardDisplay();
    }
});

document.getElementById('nextArrow1').addEventListener('click', () => {
    if (currentIndexx < totalCards - 1) {
        currentIndexx++;
        updateCardDisplay();
    }
});

// Swipe functionality
let startX;
caseStudiesContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

caseStudiesContainer.addEventListener('touchmove', (e) => {
    const diffX = startX - e.touches[0].clientX;
    if (diffX > 50 && currentIndexx < totalCards - 1) {
        currentIndexx++;
        updateCardDisplay();
        startX = null;
    } else if (diffX < -50 && currentIndexx > 0) {
        currentIndexx--;
        updateCardDisplay();
        startX = null;
    }
});

// Initial display
updateCardDisplay();




//  Section - 10 Frequently asked Questions

document.addEventListener('DOMContentLoaded', function () {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    let currentOpenAccordion = null;

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const accordionItem = this.parentElement;
            const accordionContent = accordionItem.querySelector('.accordion-content');
            const accordionToggle = accordionItem.querySelector('.accordion-toggle').querySelector('.arrow');

            // If there's an open accordion and it's not the current one, close it
            if (currentOpenAccordion && currentOpenAccordion !== accordionItem) {
                const openContent = currentOpenAccordion.querySelector('.accordion-content');
                const openToggle = currentOpenAccordion.querySelector('.accordion-toggle .arrow');

                openContent.style.display = 'none';
                openToggle.classList.remove('up');
                openToggle.classList.add('down');

                // Remove active class and reset styles for the previously open accordion header
                currentOpenAccordion.querySelector('.accordion-header').classList.remove('active');
                openToggle.classList.remove('white');
                currentOpenAccordion.querySelector('.accordion-header').classList.remove('white');
            }

            // Toggle the current accordion content and arrow
            if (accordionContent.style.display === 'block') {
                accordionContent.style.display = 'none';
                accordionToggle.classList.remove('up');
                accordionToggle.classList.add('down');
                this.classList.remove('active');
                accordionToggle.classList.remove('white');
                this.classList.remove('white');

                currentOpenAccordion = null;
            } else {
                accordionContent.style.display = 'block';
                accordionToggle.classList.remove('down');
                accordionToggle.classList.add('up');
                this.classList.add('active');
                accordionToggle.classList.add('white');
                this.classList.add('white');

                currentOpenAccordion = accordionItem;
            }
        });
    });
});



// Section - 12 footer


document.addEventListener("DOMContentLoaded", function() {
    // Get all footer columns
    var footerColumns = document.querySelectorAll('.footer-column');

    // Loop through each footer column
    footerColumns.forEach(function(column) {
        // Find the h3 element
        var h3 = column.querySelector('h3');
  
        // Find the ul element
        var menu = column.querySelector('.footer-menu');
  
        // Add click event listener to the header
        h3.addEventListener('click', function() {
            // Close all other menus
            footerColumns.forEach(function(otherColumn) {
                if (otherColumn !== column) {
                    otherColumn.querySelector('.footer-menu').classList.remove('active-footer');
                    otherColumn.querySelector('i').classList.remove('bi-chevron-up');
                    otherColumn.querySelector('i').classList.add('bi-chevron-down');
                }
            });

            // Toggle the active class on the menu when the header is clicked
            menu.classList.toggle('active-footer');
  
            // Toggle the icon between chevron-down and chevron-up
            h3.querySelector('i').classList.toggle('bi-chevron-down');
            h3.querySelector('i').classList.toggle('bi-chevron-up');
        });
    });
});
