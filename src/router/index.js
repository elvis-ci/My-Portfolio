import { createRouter, createWebHistory } from "vue-router";

import AboutView from "../views/AboutView.vue";
import Resume from "../views/Resume.vue";
import Blog from "../views/Blog.vue";
import Portfolio from "../views/Portfolio.vue";
import Contact from "../views/Contact.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "about",
      component: AboutView,
      meta: {
        title:
          "About Me – Elvis Izuegbu | Web Developer & Web Accessibility Expert",
        description:
          "Learn about Elvis Izuegbu, a Web Developer and Web Accessibility Expert building inclusive, WCAG-compliant digital experiences.",
        image: "/imgs/myself2.png",
      },
    },

    {
      path: "/resume",
      name: "resume",
      component: Resume,
      meta: {
        title:
          "Resume – Elvis Izuegbu | Frontend Developer & Accessibility Specialist",
        description:
          "View the professional resume of Elvis Izuegbu, including experience in frontend engineering, accessibility compliance, WCAG audits, and inclusive interface design.",
        image: "/imgs/myself2.png",
      },
    },

    {
      path: "/portfolio",
      name: "portfolio",
      component: Portfolio,
      meta: {
        title:
          "Portfolio – Elvis Izuegbu | Web Accessibility Projects & Frontend Work",
        description:
          "Explore the portfolio of Elvis Izuegbu featuring web development projects, accessibility audits, UI/UX improvements, and inclusive digital solutions.",
        image: "/imgs/myself2.png",
      },
    },

    // {
    //   path: "/blog",
    //   name: "blog",
    //   component: Blog,
    //   meta: {
    //     title:
    //       "Blog – Accessibility, Web Development & Inclusive Design by Elvis Izuegbu",
    //     description:
    //       "Read articles and insights from Elvis Izuegbu on accessibility (WCAG, ADA), frontend development, usability, inclusive design, and modern web best practices.",
    //     image: "/imgs/myself2.png",
    //   },
    // },

    {
      path: "/contact",
      name: "contact",
      component: Contact,
      meta: {
        title:
          "Contact Elvis Izuegbu – Hire a Web Developer & Accessibility Expert",
        description:
          "Get in touch with Elvis Izuegbu for accessibility audits, remediation, frontend web development, or digital consulting. Available for freelance and contract work.",
        image: "/imgs/myself2.png",
      },
    },
  ],
});

// ─────────────────────────────────────────────
// 🔥 Dynamic SEO Meta Handling
// ─────────────────────────────────────────────
router.afterEach((to) => {
  // Title
  if (to.meta.title) {
    document.title = to.meta.title;
  }

  // Description
  const desc = document.querySelector('meta[name="description"]');
  if (desc) {
    desc.setAttribute("content", to.meta.description || "");
  }

  // Open Graph
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute("content", to.meta.title || "");
  }

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) {
    ogDesc.setAttribute("content", to.meta.description || "");
  }

  const ogImg = document.querySelector('meta[property="og:image"]');
  if (ogImg) {
    ogImg.setAttribute("content", to.meta.image || "/default.jpg");
  }

  // Twitter
  const twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle) {
    twTitle.setAttribute("content", to.meta.title || "");
  }

  const twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc) {
    twDesc.setAttribute("content", to.meta.description || "");
  }

  const twImg = document.querySelector('meta[name="twitter:image"]');
  if (twImg) {
    twImg.setAttribute("content", to.meta.image || "/default.jpg");
  }
});

export default router;
