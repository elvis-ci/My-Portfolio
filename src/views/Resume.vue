<script setup>
import { onMounted, ref } from "vue";

/* ---------------------------------------------------
   EXPERIENCE DATA (DYNAMIC)
--------------------------------------------------- */
const experienceLeft = ref([
  {
    role: "Frontend Developer",
    company: "Dreacot Digital",
    period: "2023 – Present",
    location: "Lagos, Nigeria",
    points: [
      "Optimized website performance with code splitting, lazy loading, and asset optimization for faster rendering and SEO improvements.",
      "Developed interactive frontend features including Smart Form Validation and system preference theme selection.",
      "Ensured WCAG-compliant development to meet legal accessibility obligations and significantly improve screen reader compatibility, keyboard navigation, and inclusive user experience.",
    ],
  },
  {
    role: "Web Developer",
    company: "Freelance",
    period: "2022 – 2024",
    location: "Remote",
    points: [
      "Developed responsive, high-performance websites optimized for accessibility, SEO, and user engagement.",
      "Built scalable online learning and business platforms with modern frontend technologies.",
      "Improved product usability and digital inclusion by applying WCAG standards and collaborating closely with cross-functional teams.",
    ],
  },
]);

const experienceRight = ref([
  {
    role: "Web Accessibility Intern",
    company: "Anvaya Feats - 501c3",
    period: "04/2025 – 07/2025",
    location: "Remote",
    points: [
      "Created technical documentation and accessibility instructional guides.",
      "Designed scalable remote learning platforms for inclusive education.",
      "Supported digital inclusion through accessible design and inclusive team collaboration.",
    ],
  },
  {
    role: "Web Accessibility Specialist",
    company: "Freelance",
    period: "2025 – Present",
    location: "Remote",
    points: [
      "Created technical documentation and accessibility instructional guides.",
      "Designed scalable remote learning platforms for inclusive education.",
      "Supported digital inclusion through accessible design and inclusive team collaboration.",
    ],
  },
]);

/* ---------------------------------------------------
   EDUCATION DATA
--------------------------------------------------- */
const education = ref([
  {
    degree: "B.Sc. in Biochemistry",
    school: "Nnamdi Azikiwe University",
    period: "2018 – 2021",
    location: "Nigeria",
  },
]);

/* ---------------------------------------------------
   CERTIFICATIONS DATA
--------------------------------------------------- */
const certifications = ref([
  {
    title: "DHS Section 508 Trusted Tester Certification",
    issuer: "U.S. Department of Homeland Security",
    credentialId: "TT-2509-077**",
    link: null,
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft and LinkedIn",
    credentialId: "...cfc13a5583f41",
    link: "https://media.licdn.com/dms/image/v2/D4D22AQHZua-mx0jn4g/feedshare-shrink_1280/B4DZe4tnzoH4Ao-/0/1751150657019",
  },
  {
    title: "Data Analytics",
    issuer: "ALX Africa",
    credentialId: "LrhyeXCfP9",
    link: "https://intranet.alxswe.com/certificates/LrhyeXCfP9",
  },
]);

/* ---------------------------------------------------
   SKILLSET DATA — MATCHES THE IMAGE EXACTLY + ICONS
--------------------------------------------------- */
const skillset = ref([
  {
    category: "Language",
    skills: [
      {
        name: "JavaScript (ES6+)",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "SQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "Dart",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
      },
    ],
  },
  {
    category: "Frontend",
    skills: [
      {
        name: "Vue.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      },
      {
        name: "Nuxt",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxt/nuxt-original.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Tailwind",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      },
      {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
      },
      {
        name: "Responsive Design",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "Wordpress",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
      },
      {
        name: "Wix",
        icon: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Wix_logo_svg.svg",
      },
      {
        name: "Shopify",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg",},

      {
        name: "API Integration",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
      },
      {
        name: "Flutter",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        name: "supabase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
      {
        name: "Node.js (Elementary)",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
    ],
  },
  {
    category: "Accessibility Testing & Audit",
    skills: [
      {
        name: "WCAG 2.1",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/accessibility/accessibility-original.svg",
      },
      {
        name: "Section 508",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/accessibility/accessibility-original.svg",
      },
      {
        name: "Axe",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "ARC Toolkit",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",},
      {
        name: "WAVE",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "ANDI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "Screen Reader Testing (NVDA, JAWS)",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/accessibility/accessibility-original.svg",
      },
      {
        name: "Manual Edge-case Testing",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bugzilla/bugzilla-original.svg",
      },
    ],
  },
  {
    category: "Team Collaboration",
    skills: [
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "Slack",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
      },
      {
        name: "MS Teams",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg",
      },
      {
        name: "Discord",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discord/discord-original.svg",
      },
    ],
  },
  {
    category: "Professional Skills",
    skills: [
      {
        name: "Agile",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
      },
      {
        name: "RISE Feedback",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
      },
      {
        name: "Problem-solving",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/brain/brain-original.svg",
      },
      {
        name: "Time Management",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/clock/clock-original.svg",
      },
      {
        name: "Continuous Learning",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/book/book-original.svg",
      },
    ],
  },
]);

//  ANIMATIONS + CAROUSEL LOGIC
onMounted(() => {
  const faders = document.querySelectorAll(".fade-in");
  const sliders = document.querySelectorAll(".slide-in");

  const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -10px 0px",
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach((el) => appearOnScroll.observe(el));
  sliders.forEach((el) => appearOnScroll.observe(el));

  /* Carousel Dots */
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
      const itemWidth = items[0].offsetWidth + 12;
      const index = Math.round(scrollLeft / itemWidth);

      dots.forEach((d, i) => d.classList.toggle("active", i === index));
    });
  }
});
</script>
<template>
  <main id="main-content" class="px-4 py-10 max-w-7xl mx-auto text-text">
    <!-- HEADER -->
    <section class="text-center mb-12">
      <h1 class="text-4xl font-extrabold text-heading">My Resume</h1>
      <p class="text-base sm:text-lg text-color-text mt-4 max-w-2xl mx-auto">
        Here’s a quick overview of my professional experience, education,
        certifications, and skill set as a Web Developer and Accessibility
        Specialist.
      </p>
    </section>

    <!-- EXPERIENCE -->
    <section class="mb-18">
      <h2
        class="text-xl sm:text-2xl md:text-3xl font-bold text-text mb-6 flex items-center gap-2"
      >
        <i class="icon ion-md-briefcase text-btn-bg"></i> Experience
      </h2>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- LEFT -->
        <div class="space-y-8">
          <div
            v-for="(exp, index) in experienceLeft"
            :key="'left-' + index"
            class="fade-in slide-in py-6 px-3 md:px-6 rounded-xl shadow-custom border-b-2 border-color-text"
          >
            <h3 class="text-lg sm:text-xl font-bold text-btn-bg mb-2">
              {{ exp.role }}
            </h3>
            <p class="text-color-text text-sm sm:text-base mb-1">
              {{ exp.company }} ({{ exp.period }})
            </p>
            <p class="italic text-color-text mb-3 text-xs sm:text-sm">
              – {{ exp.location }}
            </p>
            <ul
              class="list-disc pl-5 space-y-2 text-color-text text-sm sm:text-base"
            >
              <li v-for="(point, i) in exp.points" :key="i">{{ point }}</li>
            </ul>
          </div>
        </div>

        <!-- RIGHT -->
        <div class="space-y-8">
          <div
            v-for="(exp, index) in experienceRight"
            :key="'right-' + index"
            class="fade-in slide-in py-6 px-3 md:px-6 rounded-xl shadow-custom border-b-2 border-color-text"
          >
            <h3 class="text-lg sm:text-xl font-bold text-btn-bg mb-2">
              {{ exp.role }}
            </h3>
            <p class="text-color-text text-sm sm:text-base mb-1">
              {{ exp.company }} ({{ exp.period }})
            </p>
            <p class="italic text-color-text mb-3 text-xs sm:text-sm">
              – {{ exp.location }}
            </p>
            <ul
              class="list-disc pl-5 space-y-2 text-color-text text-sm sm:text-base"
            >
              <li v-for="(point, i) in exp.points" :key="i">{{ point }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- EDUCATION -->
    <section class="mb-18">
      <h2
        class="text-xl sm:text-2xl md:text-3xl font-bold text-text mb-6 flex items-center gap-2"
      >
        <i class="icon ion-md-school text-btn-bg"></i> Education
      </h2>

      <div class="fade-in slide-in space-y-6 md:grid md:grid-cols-2 gap-8">
        <div
          v-for="(edu, i) in education"
          :key="'edu-' + i"
          class="py-6 px-3 md:px-6 bg-card-bg rounded-xl shadow-custom border-b-2 border-color-text"
        >
          <h3 class="text-lg sm:text-xl font-bold text-btn-bg mb-2">
            {{ edu.degree }}
          </h3>
          <p class="text-color-text mb-1 text-sm sm:text-base">
            {{ edu.school }} ({{ edu.period }})
          </p>
          <p class="italic text-color-text text-xs sm:text-sm">
            – {{ edu.location }}
          </p>
        </div>
      </div>
    </section>

    <!-- CERTIFICATIONS -->
    <section class="mb-18">
      <h2
        class="text-xl sm:text-2xl md:text-3xl font-bold text-text mb-6 flex items-center gap-2"
      >
        <i class="icon ion-md-ribbon text-btn-bg"></i> Certifications
      </h2>

      <ul class="space-y-6">
        <li
          v-for="(cert, i) in certifications"
          :key="'cert-' + i"
          class="w-fit py-6 px-3 md:px-6 bg-card-bg rounded-xl shadow-custom border-b-2 border-color-text"
        >
          <h3 class="text-lg sm:text-xl font-bold text-btn-bg mb-2">
            {{ cert.title }}
          </h3>
          <p class="text-color-text mb-1 text-sm sm:text-base">
            <span class="font-semibold">Issued by:</span> {{ cert.issuer }}
          </p>
          <p class="text-color-text text-xs sm:text-sm flex items-center">
            <span class="font-semibold">Credential ID:</span>
            <template v-if="cert.link">
              <a :href="cert.link" target="_blank" class="underline ml-2">{{
                cert.credentialId
              }}</a>
            </template>
            <template v-else>
              <span class="ml-2">{{ cert.credentialId }}</span>
            </template>
          </p>
        </li>
      </ul>
    </section>

    <!-- SKILLSET -->
    <section>
      <h2
        class="text-xl sm:text-2xl md:text-3xl font-bold text-text mb-4 flex items-center gap-2"
      >
        <i class="icon ion-md-code-working text-btn-bg"></i>Tools & Skillset
      </h2>

      <div class="flex flex-wrap gap-2">
        <div
          v-for="(skill, i) in skillset"
          :key="i"
          class="py-3 sm:py-4 px-3 md:px-6 bg-card-bg rounded-xl shadow-custom fade-in slide-in"
        >
          <h3 class="text-lg sm:text-xl font-bold text-btn-bg mb-4">
            {{ skill.category }}
          </h3>
          <ul class="flex flex-wrap gap-2">
            <li
              v-for="(s, j) in skill.skills"
              :key="j"
              class="px-3 py-1 bg-btn-bg/10 text-btn-bg rounded-full text-xs sm:text-sm font-medium border border-btn-bg/20 flex items-center gap-2"
            >
              <img :src="s.icon" alt="" class="w-4 h-4 sm:w-5 sm:h-5" />
              {{ s.name }}
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>
