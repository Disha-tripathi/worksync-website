// let t1 = gsap.timeline();
// gsap.from(" .service-card",{
//   opacity:0,
//   duration:1,
//   y:100,
//   scrollTrigger:{
//     trigger:".service-card",
//     scroller: 'body',
//     marker: true
//   }
// })
// Select elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Add click event to the hamburger
hamburger.addEventListener('click', () => {
  // Toggle the 'active' class for the hamburger and nav-links
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
  
});

// Import GSAP and ScrollTrigger

  // GSAP animation with timeline
  gsap.registerPlugin(ScrollTrigger);

  // Create a timeline for the animations
  gsap.from(".main", {
    opacity: 0, // Start with the section being invisible
    y: 50,      // Move the section from below
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".main",   // Use the .main div to trigger the animation
      start: " 40%",    // The animation starts when the top of the .main div hits 80% of the viewport height
      end: "bottom 20%",   // The animation ends when the bottom of the .main div reaches 20% of the viewport height
      scrub: false,         // Creates smooth scroll interaction
      markers: false        // Show markers for debugging (can be removed after testing)
    },
  });
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero",
      start: "top 40%", // Start when the section enters the viewport
      toggleActions: "play none none reverse", // Play on scroll in, reverse on scroll out
    },
  });

  // Text animation: Slide up and fade in
  tl.from(".hero-content h1 span", {
    opacity: 0,
    y: 50, // Slide up from below
    duration: 0.5,
    stagger: 0.2, // Stagger each span
    ease: "power2.out",
  })
    .from(
      ".hero-content p",
      {
        opacity: 0,
        y: 50, // Slide up from below
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.3" // Overlap with the previous animation
    )
    .from(
      ".cta-buttons button",
      {
        opacity: 0,
        y: 50, // Slide up from below
        duration: 0.5,
        stagger: 0.2, // Stagger the buttons
        ease: "power2.out",
      },
      "-=0.3" // Overlap with the previous animation
    )
    .from(
      ".hero-image img",
      {
        opacity: 0,
        y: 50, // Slide up from below
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.5" // Overlap with the button animation
    );
  // Create a timeline for the services section
  gsap.timeline({
    scrollTrigger: {
      trigger: ".services-section",
      start: "top 50%", // Start when section reaches 80% of viewport height
      toggleActions: "play none none reverse", // Play on scroll, reverse when scrolled out
    },
  })
    .from(".service_text h1", {
      opacity: 0,
      y: 50, // Slide up
      duration: 0.6,
      ease: "power2.out",
    })
    .from(
      ".service_text p",
      {
        opacity: 0,
        y: 50,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4" // Overlap animation with the previous one
    )
    .from(
      ".service_text .cta-btn",
      {
        opacity: 0,
        y: 50,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4"
    )
    .from(
      ".services-grid .service-card",
      {
        opacity: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.3, // Stagger each card animation
        ease: "power2.out",
      },
      "-=0.4" // Overlap with previous animations
    );



  // Timeline for the steps section
  const stepsTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".steps-section",
      start: "top 50%", // Starts when section enters viewport
      toggleActions: "play none none reverse", // Play forward and reverse
    },
  });

  // Animate the heading and paragraph
  stepsTimeline.from(".steps_write h2", {
    opacity: 0,
    y: 50, // Slide up
    duration: 0.6,
    ease: "power2.out",
  }).from(
    ".steps_write p",
    {
      opacity: 0,
      y: 50, // Slide up
      duration: 0.6,
      ease: "power2.out",
    },
    "-=0.4" // Overlap with the previous animation
  );

  // Animate numbers and features
  stepsTimeline.from(
    ".text-wrapper",
    {
      opacity: 0,
      y: 50,
      duration: 0.6,
      stagger: 0.2, // Sequential animation
      ease: "power2.out",
    },
    "-=0.4"
  );

  stepsTimeline.from(
    ".feature",
    {
      opacity: 0,
      x: -50, // Slide from left
      duration: 0.6,
      stagger: 0.3, // Sequential animation
      ease: "power2.out",
    },
    "-=0.6" // Overlap with the numbers animation
  );

  // Animate timeline dots and line
  stepsTimeline.from(
    ".timeline-dot",
    {
      scale: 0, // Dots scale up
      duration: 0.4,
      stagger: 0.2, // Sequential animation
      ease: "back.out(1.7)",
    },
    "-=0.6"
  ).from(
    ".line",
    {
      scaleY: 0, // Line grows vertically
      transformOrigin: "top center",
      duration: 0.8,
      ease: "power2.out",
    },
    "-=0.4"
  );
// Animation for the testimonial section
gsap.timeline({
  scrollTrigger: {
    trigger: ".testimonial_section",
    start: "top 80%", // Start animation when section enters the viewport
    toggleActions: "play none none reverse", // Play forward and reverse when scrolling out
  },
})
  .from(".testimonial_heading h2", {
    opacity: 0,
    y: 50, // Slide up
    duration: 0.6,
    ease: "power2.out",
  })
  .from(
    ".text-container",
    {
      opacity: 0,
      x: -100, // Slide in from left
      duration: 0.8,
      ease: "power2.out",
    },
    "-=0.4" // Overlap with heading animation
  )
  .from(
    ".image-container",
    {
      opacity: 0,
      x: 100, // Slide in from right
      duration: 0.8,
      ease: "power2.out",
    },
    "-=0.6" // Overlap with text animation
  );
  // Timeline for the Explore Section
  const exploreTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".explore-section",
      start: "top 80%", // Start animation when section is in view
      toggleActions: "play none none reverse", // Play forward and reverse on scroll out
    },
  });

  // Animate the text content
  exploreTimeline
    .from(".text h6", {
      opacity: 0,
      y: 50, // Slide up
      duration: 0.6,
      ease: "power2.out",
    })
    .from(
      ".text p",
      {
        opacity: 0,
        y: 50, // Slide up
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4" // Overlap animations
    );

  // Animate the columns
  exploreTimeline.from(
    ".column",
    {
      opacity: 0,
      scale: 0.9, // Slight scaling effect
      duration: 0.8,
      stagger: 0.2, // Sequential animation for columns
      ease: "power2.out",
    },
    "-=0.6" // Overlap with text animation
  );
  // Footer Animation Timeline
  const footerTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer",
      start: "top 80%", // Start animation when the footer comes into view
      toggleActions: "play none none reverse", // Play forward and reverse when scrolling out
    },
  });

  // Animate footer heading (h2)
  footerTimeline.from(".footer h2", {
    opacity: 0,
    y: 50, // Slide up
    duration: 0.6,
    ease: "power2.out",
  });

  // Animate footer sections (individual blocks)
  footerTimeline.from(
    ".footer-section",
    {
      opacity: 0,
      x: -100, // Slide in from the left
      duration: 0.8,
      stagger: 0.2, // Sequential animations
      ease: "power2.out",
    },
    "-=0.6" // Slight overlap with heading animation
  );

  // Animate footer bottom (the copyright and links section)
  footerTimeline.from(
    ".footer-bottom",
    {
      opacity: 0,
      y: 50, // Fade and slide up
      duration: 0.6,
      ease: "power2.out",
    },
    "-=0.4" // Overlap slightly with footer sections
  );
