document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const menuIcon = document.querySelector(".menu-icon");

    // Toggle Navigation Bar
    function toggleNav() {
        navbar.classList.toggle("active");
    }

    menuIcon.addEventListener("click", toggleNav);

    // Close navbar when clicking outside
    window.addEventListener("click", function (event) {
        if (!navbar.contains(event.target) && !menuIcon.contains(event.target)) {
            navbar.classList.remove("active");
        }
    });

    // First Carousel (Carousel 1)
    let currentSlide1 = 0;
    const slides1 = document.querySelectorAll('.carousel-1 .carousel-slide');
    const dots1 = document.querySelectorAll('.carousel-1 .dot');
    const container1 = document.querySelector('.carousel-1 .carousel-container');

    // Function to show a specific slide in Carousel 1
    function showSlide1(index) {
        if (index >= slides1.length) currentSlide1 = 0;
        if (index < 0) currentSlide1 = slides1.length - 1;

        container1.style.transform = `translateX(-${currentSlide1 * 100}%)`;

        dots1.forEach(dot => dot.classList.remove('active'));
        dots1[currentSlide1].classList.add('active');
    }

    // Function to move to the next slide automatically for Carousel 1
    function autoSlide1() {
        currentSlide1++;
        showSlide1(currentSlide1);
    }

    // Function to move to a specific slide when clicked in Carousel 1
    window.moveSlide1 = function (index) {
        currentSlide1 = index;
        showSlide1(currentSlide1);
    };

    // Automatically change slide every 5 seconds for Carousel 1
    setInterval(autoSlide1, 5000); // Carousel 1

    // Initialize the first slide and first dot for Carousel 1
    showSlide1(currentSlide1);

    // Second Carousel (Carousel 2)
    let currentSlide2 = 0;
    const slides2 = document.querySelectorAll('.carousel-2 .carousel-slide');
    const dots2 = document.querySelectorAll('.carousel-2 .dot');
    const container2 = document.querySelector('.carousel-2 .carousel-container');

    // Function to show a specific slide in Carousel 2
    function showSlide2(index) {
        if (index >= slides2.length) currentSlide2 = 0;
        if (index < 0) currentSlide2 = slides2.length - 1;

        container2.style.transform = `translateX(-${currentSlide2 * 100}%)`;

        dots2.forEach(dot => dot.classList.remove('active'));
        dots2[currentSlide2].classList.add('active');
    }

    // Function to move to the next slide automatically for Carousel 2
    function autoSlide2() {
        currentSlide2++;
        showSlide2(currentSlide2);
    }

    // Function to move to a specific slide when clicked in Carousel 2
    window.moveSlide2 = function (index) {
        currentSlide2 = index;
        showSlide2(currentSlide2);
    };

    // Automatically change slide every 5 seconds for Carousel 2
    setInterval(autoSlide2, 5000); // Carousel 2

    // Initialize the first slide and first dot for Carousel 2
    showSlide2(currentSlide2);
});
document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const location = document.getElementById("location").value;
    const pickup = document.getElementById("pickupDate").value;
    const returnDate = document.getElementById("returnDate").value;

    if (!location || !pickup || !returnDate) {
        alert("Please fill in all fields");
        return;
    }

    console.log({
        location,
        pickup,
        returnDate
    });

    // Redirect example
    window.location.href = "Vehicles.html";
});
function scrollSlider(direction) {
    const slider = document.getElementById("carSlider");
    const scrollAmount = 300;

    slider.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth"
    });
}
// No JS needed for this section —
// it's purely HTML/CSS layout.
// If you want to animate it on scroll, add this:

const appSection = document.querySelector('.app-section');

if (appSection) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.15 });

  appSection.style.opacity = '0';
  appSection.style.transform = 'translateY(30px)';
  appSection.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

  observer.observe(appSection);
}
// Scroll-in animation for news cards
const newsCards = document.querySelectorAll('.news-card');

if (newsCards.length) {
  const newsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 120);
        newsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  newsCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(28px)';
    card.style.transition = 'opacity 0.55s ease, transform 0.55s ease, box-shadow 0.3s, background 0.3s';
    newsObserver.observe(card);
  });
}
// Feedback tab
function openFeedback() {
  const msg = prompt("We'd love your feedback! What can we improve?");
  if (msg && msg.trim()) {
    alert("Thank you for your feedback! We appreciate it. 🙏");
  }
}

// Footer link smooth scroll (if linking to page sections)
document.querySelectorAll('.footer-col a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animate footer columns on scroll into view
const footerCols = document.querySelectorAll('.footer-col');
if (footerCols.length) {
  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 80);
        footerObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  footerCols.forEach(col => {
    col.style.opacity = '0';
    col.style.transform = 'translateY(20px)';
    col.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    footerObserver.observe(col);
  });
}
// FAQ2 — Netflix style accordion
function toggleFaq2(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = btn.classList.contains('open');

  // Close all
  document.querySelectorAll('.faq2-q').forEach(q => q.classList.remove('open'));
  document.querySelectorAll('.faq2-a').forEach(a => a.classList.remove('open'));

  // Open clicked if it was closed
  if (!isOpen) {
    btn.classList.add('open');
    answer.classList.add('open');

    // Smooth scroll so answer is visible on mobile
    setTimeout(() => {
      btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  }
}