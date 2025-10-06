<script>
import Services from "@/components/Services.vue";

export default {
  components: { Services },
  data() {
    return {
      fullBio: "",
      services: [
        {
          name: "Custom Web Development",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          description:
            "Building fast, responsive, and user-friendly websites tailored to business goals using modern technologies like HTML5, CSS3, JavaScript, Vue.js, and React.",
        },
        {
          name: "CMS Development",
          icon: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
          description:
            "Developing and customizing WordPress and other CMS platforms to create scalable, easy-to-manage websites with content workflows that empower non-technical teams.",
        },
        {
          name: "Accessibility Testing & Audit Reports",
          icon: "https://cdn-icons-png.flaticon.com/512/159/159469.png",
          description:
            "Conducting in-depth audits against WCAG 2.1 and Section 508 standards using automated tools and manual testing to uncover accessibility barriers and compliance risks.",
        },
        {
          name: "Accessibility Remediation",
          icon: "https://cdn-icons-png.flaticon.com/512/992/992700.png",
          description:
            "Fixing accessibility issues in existing websites and apps by implementing best practices in semantic HTML, ARIA roles, keyboard navigation, and inclusive design.",
        },
        {
          name: "SEO Optimization",
          icon: "https://cdn-icons-png.flaticon.com/512/2965/2965358.png",
          description:
            "Improving search engine rankings and website visibility through optimized content, clean code structure, metadata, and performance-focused practices.",
        },
        {
          name: "Project Management",
          icon: "https://cdn-icons-png.flaticon.com/512/1006/1006363.png",
          description:
            "Applying Agile and Scrum methodologies to ensure projects are delivered on time, within scope, and aligned with stakeholder goals while promoting team collaboration.",
        },
        {
          name: "Code Cleanup & Refactoring",
          icon: "https://cdn-icons-png.flaticon.com/512/1828/1828911.png",
          description:
            "Reviewing, cleaning, and restructuring existing codebases to improve readability, maintainability, and scalability while eliminating technical debt.",
        },
      ],
    };
  },
  methods: {
    injectFullBio() {
      this.fullBio = `
        <p>
          My tech journey began after earning a Bachelor's degree in Biochemistry, where I developed a strong foundation in structured processes, precision, and documentation. Today, I apply that same rigor to web development, creating standards-driven, measurable, and inclusive web solutions
        </p>
        <p class="">
          My experience includes working with companies like Dreacot and interning with non-profits like Anvaya Feats, where I contributed to projects that enhanced accessibility and aligned with global standards. These efforts didn't just meet compliance—they improved user experience and expanded audience reach.
        </p>
        <p class="">
          Beyond client work, I'm developing an idea for a fully inclusive Learning Management System (LMS) that bridges the gap between traditional tertiary education, special education, and e-learning. This initiative combines technology, ethics, and equity to ensure that every student has equal access to quality education regardless of ability.
        </p>
        <p class="">
          At my core, I'm driven by curiosity, a hunger for growth, social justice, and the belief that the web should empower everyone. If you share a passion for building human-centered, accessible digital experiences, let's connect and collaborate
        </p>
      `;
      this.$nextTick(() => {
        this.$refs.fullBio.focus();
      });
    },
  },
};
</script>
<template>
  <main>
    <section class="About px-4">
      <div class="container">
        <div class="section-header text-center">
          <h1 class="section-title">About Me</h1>
        </div>

        <!-- Description Details -->
        <div class="pt-4">
          <div class="row align-items-top desc-details">
            <!-- Profile Image (Left) -->
            <div class="col-12 col-lg-5 mb-4 about-image-container">
              <img
                src="../assets/imgs/IMG_0022.jpeg"
                alt="Picture of Elvis Izuegbu"
                class="img-thumbnail"
              />
            </div>

            <!-- Bio Summary (Right) -->
            <div class="col-12 col-lg-7">
              <div class="bio-summary">
                <h2>
                  I'm Elvis Izuegbu,<br />
                  A Frontend Developer and Web Accessibility Specialist
                </h2>
                <!-- Short preview -->
                <p class="mt-3">
                  Experienced in building interractive, inclusive UIs with
                  modern web technologies. I also specialize in accessibility
                  testing and remediation using testing tools, section 508, and
                  WCAG guidelines, ensuring legal compliance and driving user
                  retention through improved user experience.
                </p>
                <!-- Hidden full text -->
                <div
                  id="fullBio"
                  aria-live="polite"
                  aria-atomic="true"
                  v-html="fullBio"
                  ref="fullBio"
                ></div>

                <!-- See more / less button -->
                <button
                  class="btn btn-link p-0 mt-2"
                  data-bs-toggle="collapse"
                  data-bs-target="#fullBio"
                  aria-controls="fullBio"
                  @click="injectFullBio"
                >
                  View full bio
                </button>
              </div>
              <!-- Bio Data -->
              <div class="bio-data">
                <div class="name-email row">
                  <div class="col-12 col-md-5">
                    <p>
                      <span class="label fw-bold">Name:</span> Elvis Izuegbu
                    </p>
                  </div>
                  <div class="email col-12 col-md-7">
                    <p>
                      <span class="label fw-bold">Email:</span>
                      <a
                        href="mailto:izuegbuelvis@gmail.com"
                        target="_blank"
                        aria-label="Send me an email"
                      >
                        izuegbuelvis@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-md-5 location">
                    <p>
                      <span class="label fw-bold">From:</span> Lagos, Nigeria
                    </p>
                  </div>
                  <div class="col-12 col-md-6 location">
                    <p>
                      <span class="label fw-bold">Phone:</span> +2349017690869
                    </p>
                  </div>
                </div>
              </div>
              <div class="d-block d-sm-flex align-items-center">
                <!-- CV Button -->
                <button class="cv cv-btn btn btn-success">Download CV</button>
                <!-- Socials -->
                <ul class="socials">
                  <li class="list-inline-item">
                    <a
                      href="https://www.linkedin.com/in/izuegbu-elvis"
                      aria-label="open link to connect with me on linkedin"
                      target="_blank"
                      rel="noreferrer"
                      ><i class="icon ion-logo-linkedin"></i
                    ></a>
                  </li>
                  <li class="list-inline-item">
                    <a
                      href="https://github.com/elvis-ci"
                      target="_blank"
                      aria-label="open link to visit my github"
                      rel="noreferrer"
                      ><i class="icon ion-logo-github"></i
                    ></a>
                  </li>
                  <li class="list-inline-item">
                    <a
                      href="mailto:izuegbuelvis@gmail.com"
                      target="_blank"
                      aria-label="open to send me an email"
                      rel="noreferrer"
                      ><i class="icon ion-md-mail"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="services px-4">
      <Services :services="services" />
    </section>
  </main>
</template>

<style scoped>
.socials {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.socials::before {
  background-color: var(--color-text);
  content: "";
  height: 2px;
  margin-right: 23px;
  width: 60px;
}
.socials li:not(last-child) {
  margin-right: 14px !important;
}
.socials a {
  line-height: 100%;
  color: var(--color-text);
}
.icon {
  font-size: 1.8rem;
  transition: all 0.3s ease-in-out;
}
.section-header {
  margin: 0 auto 50px;
  padding-bottom: 20px;
  text-align: center;
}
.section-title {
  margin-block: 70px 30px;
  font-weight: bolder;
  color: var(--color-heading);
}
/* .section-title::after {
  content: "";
  display: block;
  width: 60px;
  height: 4px;
  margin: 12px auto 0;
  background: linear-gradient(90deg, #ae7ffb, #6610f2);
  border-radius: 2px;
} */
.sub-section-title {
  margin-block: 70px 30px;
  font-weight: bolder;
  color: var(--color-heading);
  display: block;
  width: fit-content;
}
/* .sub-section-title:after{
  content: "";
  display: flex;
  width: 20%;
  height: 4px;
  margin: 12px 0 0;
  background: linear-gradient(90deg, #ae7ffb, #6610f2);
  border-radius: 2px;

}
 */
.desc-details {
}
.about-image-container img {
  background-color: transparent;
  width: 430px;
  max-height: 600px;
  object-fit: cover;
  margin-inline: auto !important;
  justify-content: center;
  display: flex;
}

.bio-summary {
  border-bottom: 3px solid rgba(91, 91, 91, 0.259);
  padding-bottom: 20px;
  font-size: 1.2rem;
}
.bio-summary h2 {
  font-weight: 800;
  line-height: 1.4;
  color: var(--color-heading);
  text-align: start;
}
.bio-summary p {
  font-size: 1.4rem;
}
.bio-data {
  padding: 20px 0;
  font-size: 1.4rem;
  text-align: justify;
}
.name-email {
  margin-bottom: 15px;
}
.label {
  margin-right: 12px;
}
.email a {
  text-decoration: none;
  color: var(--btn-bg);
}
.location {
  margin: 0;
}
.cv-btn {
  background: var(--btn-color) !important;
  border-radius: 30px;
  padding: 10px 35px;
  border: 1px solid #009e66 !important;
  margin-right: 23px;
  transition: all 0.3s ease-in-out;
  color: #ffffff;
}
.cv:hover {
  box-shadow: var(--card-shadow);
  transform: translateY(-4px);
}

@media (max-width: 991px) {
  .about-image-container img {
    width: 300px;
    max-height: 300px;
    border-radius: 50%;
  }
  .bio-summary h2 {
    font-size: 1.5rem;
  }
  .bio-summary p {
    font-size: 1rem;
  }
  .bio-data {
    font-size: 1rem;
  }
  .name-email {
    margin-bottom: 0px;
  }
  .icon {
    font-size: 1.3rem;
    transition: all 0.3s ease-in-out;
  }
  .socials {
    margin-top: 15px;
  }
}
@media (min-width: 992px) {
  .bio-data,
  .bio-summary p,
  button,
  a {
    font-size: 1.1rem;
  }
  .bio-summary h2 {
    font-size: 1.7rem;
  }
}
@media (min-width: 1201px) {
  .bio-data,
  .bio-summary p,
  button,
  a {
    font-size: 1.3rem;
  }
  .bio-summary h2 {
    font-size: 1.8rem;
  }
}
</style>
