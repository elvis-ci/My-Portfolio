<script>
export default {
  name: "resume",
  mounted() {
    const faders = document.querySelectorAll(".fade-in");
    const sliders = document.querySelectorAll(".slide-in");
    const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px -10px 0px",
    };
    const appearOnScroll = new IntersectionObserver(function (
      entries,
      appearOnScroll
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("appear");
          appearOnScroll.unobserve(entry.target);
        }
      });
    },
    appearOptions);

    faders.forEach((fader) => {
      appearOnScroll.observe(fader);
    });
    sliders.forEach((slider) => {
      appearOnScroll.observe(slider);
    });

    // Carousel dots logic
    const carousel = document.querySelector(".skill-carousel");
    const items = document.querySelectorAll(".skillset-col");
    const dotsContainer = document.querySelector(".carousel-dots");

    if (carousel && dotsContainer) {
      items.forEach((_, i) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dotsContainer.appendChild(dot);
      });

      const dots = dotsContainer.querySelectorAll(".dot");
      carousel.addEventListener("scroll", () => {
        const scrollLeft = carousel.scrollLeft;
        const itemWidth = items[0].offsetWidth + 12; // account for margin
        const index = Math.round(scrollLeft / itemWidth);
        dots.forEach((d, i) => d.classList.toggle("active", i === index));
      });
    }
  },
};
</script>

<template>
  <main>
    <section class="resume px-4">
      <div class="container">
        <!-- Header -->
        <div class="section-header text-center">
          <h1 class="section-title">My Resume</h1>
          <p class="section-subtitle">
            Here’s a quick overview of my professional experience, education,
            certifications, and skill set as a Web Developer and Accessibility
            Specialist.
          </p>
        </div>

        <!-- Experience -->
        <section class="resume-section">
          <h2 class="sub-section-title">
            <i class="icon ion-md-briefcase"></i> Experience
          </h2>
          <div class="row experience-columns mt-4">
            <!-- Web Development Column -->
            <div class="col-md-6 experience-col">
              <ul class="experience-list">
                <li class="experience-item mb-5">
                  <h3 class="item-header">Frontend Developer</h3>
                  <div class="resume-company">
                    <p>Dreacot Digital (2023 – Present)</p>
                    <p class="location">– Lagos, Nigeria</p>
                  </div>
                  <ul class="resume-text">
                    <li>
                      Optimized website performance by reducing page load time
                      through code splitting, lazy loading, and asset
                      optimization, ensuring faster rendering, scalability, and
                      SEO performance.
                    </li>
                    <li>
                      Developed and deployed interactive frontend features,
                      including Smart Form Validation Systems using JavaScript
                      and AI-powered libraries, and system preference based
                      theme selection, enhancing data accuracy and usability.
                    </li>
                    <li>
                      Implemented accessibility standards across web
                      applications, improving screen reader compatibility,
                      keyboard navigation, and inclusive user experience for
                      diverse users.
                    </li>
                  </ul>
                </li>
                <li class="experience-item mb-5 fade-in slide-in from-bottom">
                  <h3 class="item-header">Web Developer</h3>
                  <div class="resume-company">
                    <p>Freelance (2022 – 2024)</p>
                    <p class="location">– Remote</p>
                  </div>
                  <ul class="resume-text">
                    <li>
                      Created technical documentation using Google Docs,
                      including a user-friendly instructional guide on web
                      accessibility best practices.
                    </li>
                    <li>
                      Leveraged technical and strategic skills to design a
                      scalable learning platform focused on delivering remote,
                      affordable, and inclusive education to diverse learners.
                    </li>
                    <li>
                      Supported digital inclusion at Anvaya Feats through
                      accessible design, effective team collaboration using the
                      RISE framework for clear, inclusive communication.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <!-- Accessibility Column -->
            <div class="col-md-6 experience-col">
              <ul class="experience-list">
                <li class="experience-item mb-5">
                  <h3 class="item-header">Web Accessibility Intern</h3>
                  <div class="resume-company">
                    <p>Anvaya Feats - 501c3 (04/2025 – 07/2025)</p>
                    <p class="location">– Remote</p>
                  </div>
                  <ul class="resume-text">
                    <li>
                      Created technical documentation using Google Docs,
                      including a user-friendly instructional guide on web
                      accessibility best practices.
                    </li>
                    <li>
                      Leveraged technical and strategic skills to design a
                      scalable learning platform focused on delivering remote,
                      affordable, and inclusive education to diverse learners.
                    </li>
                    <li>
                      Supported digital inclusion at Anvaya Feats through
                      accessible design, effective team collaboration using the
                      RISE framework for clear, inclusive communication.
                    </li>
                  </ul>
                </li>
                <li class="experience-item fade-in slide-in from-bottom">
                  <h3 class="item-header">Web Accessibility Specialist</h3>
                  <div class="resume-company">
                    <p>Freelance (2025 – Present)</p>
                    <p class="location">– Remote</p>
                  </div>
                  <ul class="resume-text">
                    <li>
                      Created technical documentation using Google Docs,
                      including a user-friendly instructional guide on web
                      accessibility best practices.
                    </li>
                    <li>
                      Leveraged technical and strategic skills to design a
                      scalable learning platform focused on delivering remote,
                      affordable, and inclusive education to diverse learners.
                    </li>
                    <li>
                      Supported digital inclusion at Anvaya Feats through
                      accessible design, effective team collaboration using the
                      RISE framework for clear, inclusive communication.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Education -->
        <section class="resume-section">
          <h2 class="sub-section-title">
            <i class="icon ion-md-school"></i> Education
          </h2>
          <ul class="education-list mt-4 fade-in slide-in from-bottom">
            <li class="education-item col-md-6">
              <h3 class="item-header">B.Sc. in Biochemistry</h3>
              <div class="resume-company">
                <p>Nnamdi Azikiwe University (2018 – 2021)</p>
                <p class="location">– Nigeria</p>
              </div>
              <p class="resume-text">
                Completed thesis research that strengthened my ability to follow
                structured processes and adhere to standard practices in
                research and documentation. This discipline now informs my
                approach to accessibility, user experience, and overall software
                development, where consistency, precision, and evidence-based
                methods are key to creating effective and inclusive solutions.
              </p>
            </li>
          </ul>
        </section>

        <!-- Certifications -->
        <section class="resume-section">
          <h2 class="sub-section-title">
            <i class="icon ion-md-ribbon"></i> Certifications
          </h2>
          <ul class="cert-list mt-4 fade-in slide-in from-bottom">
            <li>
              <h3 class="item-header">
                DHS Section 508 Trusted Tester Certification
              </h3>
              <div class="resume-company">
                <p class="location">
                  <span class="label fw-bold">Issued by:</span>U.S. Department
                  of Homeland Security
                </p>
                <p>
                  <span class="label fw-bold">Credential ID:</span>
                  TT-2509-07779
                </p>
              </div>
            </li>
            <li>
              <h3 class="item-header">Career Essentials in Generative AI</h3>
              <div class="resume-company">
                <p class="location">
                  <span class="label fw-bold">Issued by: </span>Microsoft and
                  LinkedIn
                </p>
                <p>
                  <span class="label fw-bold">Credential ID:</span>
                  <a
                    href="https://media.licdn.com/dms/image/v2/D4D22AQHZua-mx0jn4g/feedshare-shrink_1280/B4DZe4tnzoH4Ao-/0/1751150657019?e=1760572800&v=beta&t=y4zV0Ij2fQDzxDCsU7s732bm2w62E5BnEAKhVikJIxY"
                    class="location"
                    aria-label="Open link to verify my Generative AI Certification"
                    >...cfc13a5583f41</a
                  >
                </p>
              </div>
            </li>
            <li>
              <h3 class="item-header">Data Analytics</h3>
              <div class="resume-company">
                <p class="location">
                  <span class="label fw-bold">Issued by: </span>ALX Africa
                </p>
                <p>
                  <span class="label fw-bold">Credential ID: </span>
                  <a
                    href="https://intranet.alxswe.com/certificates/LrhyeXCfP9"
                    class="location"
                    aria-label="Open link to verify my Generative AI Certification"
                    >LrhyeXCfP9</a
                  >
                </p>
              </div>
            </li>
          </ul>
        </section>

        <!-- Skillset -->
        <section class="resume-section">
          <h2 class="sub-section-title">
            <i class="icon ion-md-code-working"></i> Skillset
          </h2>

          <!-- Scrollable Carousel -->
          <div class="skill-carousel mt-4 d-flex flex-nowrap overflow-auto">
            <div
              class="skillset-col fade-in slide-in from-bottom flex-shrink-0 me-3 p-3"
            >
              <h3 class="skill-group">Web Development</h3>
              <ul class="skill-list">
                <li>Responsive Web Design (HTML5, CSS3)</li>
                <li>Modern JavaScript (ES6+)</li>
                <li>Frontend Frameworks (Vue.js, React)</li>
                <li>Component-based Styling (Tailwind CSS, Bootstrap)</li>
                <li>Cross-browser & Cross-device Compatibility</li>
                <li>Performance Optimization & Best Practices</li>
              </ul>
            </div>

            <div
              class="skillset-col fade-in slide-in from-bottom flex-shrink-0 me-3 p-3"
            >
              <h3 class="skill-group">Web Accessibility</h3>
              <ul class="skill-list">
                <li>WCAG 2.1 & Section 508 Standards</li>
                <li>Accessible HTML Semantics & ARIA Roles</li>
                <li>Inclusive Design & Usability Patterns</li>
                <li>Keyboard & Assistive Technology Support</li>
                <li>Accessibility-first Development Approach</li>
              </ul>
            </div>

            <div
              class="skillset-col fade-in slide-in from-bottom flex-shrink-0 me-3 p-3"
            >
              <h3 class="skill-group">Accessibility Testing & Audit Report</h3>
              <ul class="skill-list">
                <li>Automated Tools (ANDI, Axe, WAVE)</li>
                <li>Screen Reader Testing (NVDA, JAWS)</li>
                <li>Manual Testing for Edge Cases</li>
                <li>Compliance Audits & Reporting</li>
                <li>Remediation & Continuous Monitoring</li>
              </ul>
            </div>

            <div
              class="skillset-col fade-in slide-in from-bottom flex-shrink-0 p-3"
            >
              <h3 class="skill-group">Communication & Collaboration</h3>
              <ul class="skill-list">
                <li>Version Control & Collaboration (Git, GitHub)</li>
                <li>Team Communication Tools (Slack, Discord, MS Teams)</li>
                <li>Agile & Scrum Methodologies</li>
                <li>Constructive Feedback (RISE Model)</li>
                <li>Technical Documentation & Knowledge Sharing</li>
                <li>Cross-functional Team Collaboration</li>
              </ul>
            </div>
          </div>

          <!-- Carousel dots -->
          <div class="carousel-dots text-center mt-3"></div>
        </section>
      </div>
    </section>
  </main>
</template>

<style scoped>
.section-subtitle {
  font-size: 1.5rem;
}

/* EXPERIENCE & EDUCATION — unchanged */
.experience-columns {
  margin-top: 20px;
}
.experience-col {
  position: relative;
  padding: 0 20px;
}
.experience-col:after {
  content: "";
  position: absolute;
  top: 0;
  right: -1px;
  width: 1px;
  height: 100%;
  background: var(--btn-bg);
  box-shadow: var(--box-shadow);
}
.experience-col:last-child::after {
  display: none;
}
.experience-list {
  list-style: none;
  padding-left: 0;
  margin: 0;
}
.experience-item {
  margin-bottom: 2rem;
}
.experience-item:last-child {
  margin-bottom: 0;
}
.resume-role {
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--btn-bg);
}
.item-header {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--btn-bg);
}
.resume-company p {
  font-size: 1rem;
  font-style: italic;
  color: var(--color-text);
  margin: 0 !important;
}
.location {
  font-size: 1.1rem !important;
  font-style: italic;
  color: var(--color-text);
}
.resume-text {
  font-size: 1.1rem;
  color: var(--color-text);
  line-height: 1.6;
}
.resume-text li {
  margin-bottom: 8px;
}
.education-list {
  list-style: none;
  margin: 0;
}
.cert-list {
  list-style: none;
  font-size: 1rem;
  color: var(--color-text);
}
.cert-list li {
  margin-bottom: 30px;
}
.label {
  margin-right: 12px;
}

/* SKILLSET SECTION */
.skill-carousel {
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}
.skillset-col {
  background: var(--bg);
  border-radius: 1rem;
  min-width: 90%;
  scroll-snap-align: center;
}
.skillset-col:last-child {
  margin-right: 0;
}
.skill-group {
  height: 70px;
  font-weight: 700;
  color: var(--btn-bg);
  font-size: 1.3rem;
}
.skill-list {
  list-style: circle;
  font-size: 1.1rem;
  color: var(--color-text);
  padding-left: 20px;
}
.skill-list li {
  margin-bottom: 6px;
}

/* Carousel Dots */
.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
}
.dot {
  width: 10px;
  height: 10px;
  background: var(--color-text);
  opacity: 0.4;
  border-radius: 50%;
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.dot.active {
  opacity: 1;
  transform: scale(1.2);
  background: var(--btn-bg);
}

/* Hide horizontal scrollbar on mobile */
.skill-carousel::-webkit-scrollbar {
  display: none;
}

/* Restore grid layout on large screens */
@media (min-width: 992px) {
  .skill-carousel {
    display: grid !important;
    grid-template-columns: repeat(4, 1fr);
    overflow: visible !important;
  }
  .skillset-col {
    min-width: auto !important;
  }

  .skillset-col::after {
    content: "";
    position: absolute;
    top: 0;
    right: -1px;
    width: 1px;
    height: 100%;
    background: var(--btn-bg);
    box-shadow: var(--box-shadow);
  }
  .skillset-col:last-child::after {
    display: none;
  }

  /* Hide dots on large screens */
  .carousel-dots {
    display: none;
  }
}

/* Remove divider line for smaller screens */
@media (max-width: 767.98px) {
  .experience-col:after {
    display: none;
  }
  .skill-group {
    height: 30px;
  }
}
@media (max-width: 992px) {
  .skillset-col {
    box-shadow: var(--box-shadow);
  }
  .skill-group {
  height: 40px;
  }
}
</style>
