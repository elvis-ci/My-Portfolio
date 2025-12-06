<script setup>
import { ref, nextTick } from "vue";
import Services from "@/components/Services.vue";
import VueTyper from "vue3-typer";
import "vue3-typer/dist/vue-typer.css";

/* State */
const fullBio = ref("");
const bioVisible = ref(false);
const fullBioRef = ref(null);
const firstInjected = ref(false);

/* Data */
const services = ref([
  {
    name: "Custom Web Development",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    description:
      "Building responsive, high performance, and user-friendly websites tailored to business goals using modern web technologies like HTML5, CSS3, JavaScript, Vue.js, and React.",
  },
  {
    name: "Wix & WordPress Development",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
    description:
      "Building and customizing easy-to-manage websites with WordPress and Wix so you can update content, publish pages, and run your site without needing technical skills.",
  },
  {
    name: "Accessibility Audits & Remediation",
    icon: "https://cdn-icons-png.flaticon.com/512/159/159469.png",
    description:
      "Providing end-to-end accessibility support through comprehensive audits and hands-on remediation using WCAG 2.1 ensure products meet global accessibility standards. I collaborate with teams to identify barriers, enhance keyboard and screen-reader usability.",
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
]);

/* Inject full bio HTML (only once) */
function injectFullBio() {
  if (!firstInjected.value) {
    fullBio.value = `
      <p class="mb-3">
        My tech journey began after earning a Bachelor's degree in Biochemistry, where I developed a strong foundation in structured processes, precision, and documentation. Today, I apply that same rigor to web development, creating standards-driven, measurable, and inclusive web solutions.
      </p>
      <p class="mb-3">
        My experience includes working with companies like Dreacot and interning with non-profits like Anvaya Feats, where I contributed to projects that enhanced accessibility and aligned with global standards. These efforts didn't just meet compliance—they improved user experience and expanded audience reach.
      </p>
      <p class="mb-3">
        Beyond client work, I'm developing an idea for a fully inclusive Learning Management System (LMS) that bridges the gap between traditional tertiary education, special education, and e-learning. This initiative combines technology, ethics, and equity to ensure that every student has equal access to quality education regardless of ability.
      </p>
      <p>
        At my core, I'm driven by curiosity, a hunger for growth, social justice, and the belief that the web should empower everyone. If you share a passion for building human-centered, accessible digital experiences, let's connect and collaborate.
      </p>
    `;
    firstInjected.value = true;
  }
}

/* Toggle handler (animates height via transition hooks in template) */
async function toggleBio() {
  bioVisible.value = !bioVisible.value;
  if (bioVisible.value) {
    injectFullBio();
    await nextTick();
    // focus for accessibility
    if (fullBioRef.value) {
      fullBioRef.value.focus();
    }
  }
}

/* Transition hooks for smooth height animation (used on <transition>) */
function beforeEnter(el) {
  el.style.height = "0px";
  el.style.opacity = "0";
  el.style.overflow = "hidden";
}
function enter(el) {
  const height = el.scrollHeight + "px";
  el.style.transition = "height 300ms ease, opacity 250ms ease";
  requestAnimationFrame(() => {
    el.style.height = height;
    el.style.opacity = "1";
  });
}
function afterEnter(el) {
  el.style.height = "auto";
  el.style.overflow = "";
  el.style.transition = "";
}
function beforeLeave(el) {
  el.style.height = el.scrollHeight + "px";
  el.style.opacity = "1";
  el.style.overflow = "hidden";
}
function leave(el) {
  // Force reflow so transition works
  void el.offsetHeight;
  el.style.transition = "height 300ms ease, opacity 250ms ease";
  requestAnimationFrame(() => {
    el.style.height = "0px";
    el.style.opacity = "0";
  });
}
function afterLeave(el) {
  el.style.height = "";
  el.style.opacity = "";
  el.style.overflow = "";
  el.style.transition = "";
}
</script>

<template>
  <main
    id="main-content" class="px-4 py-10 max-w-7xl mx-auto text-text"
  >
      <!-- SECTION HEADER -->
      <section class="text-center mb-12">
        <h1 class="text-4xl font-extrabold text-heading">About Me</h1>
      </section>

      <!-- MAIN GRID -->
      <div
        class="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
      >
        <!-- IMAGE (Left on desktop / Top on mobile) -->
        <figure
          class="md:col-span-5 flex justify-center md:justify-center"
          aria-hidden="false"
        >
          <img
            src="../assets/imgs/myself2.png"
            alt="Picture of Elvis Izuegbu"
            class="w-[220px] h-[220px] max-w-full md:w-[400px] md:h-auto object-cover object-top rounded-full md:rounded-lg shadow-sm border border-border"
            loading="lazy"
          />
        </figure>

        <!-- CONTENT (Right on desktop / Bottom on mobile) -->
        <div class="md:col-span-7 space-y-6">
          <!-- Typer Header -->
          <div>
            <p class="sr-only">
              Hello, I am Elvis Izuegbu, a Web Developer, And Web Accessibility
              Expert.
            </p>

            <p
              class="text-heading text-2xl md:text-3xl font-extrabold leading-tight sm:leading-11 text-start break-normal whitespace-normal"
            >
              <VueTyper
                :text="[
                  'Hello, I am Elvis Izuegbu, A Web Developer, And Web Accessibility Expert.',
                ]"
                :type-delay="100"
                :cursor-blink="true"
                :repeat="0"
                :initial-action-delay="500"
                class="inline-block"
              />
            </p>
          </div>

          <!-- Short preview -->
          <div class="space-y-2">
            <p
              class="text-text text-sm sm:text-base md:text-lg leading-relaxed"
            >
              Experienced in building interactive, inclusive UIs with modern web
              technologies.
            </p>
            <p
              class="text-text text-sm sm:text-base md:text-lg leading-relaxed"
            >
              I also specialize in manual and automated accessibility testing
              and remediation using testing tools, Section 508, and WCAG
              guidelines—ensuring legal compliance and driving user retention
              through improved user experience.
            </p>
          </div>
          <hr class="text-small-text/50" />
          <!-- Bio Data -->
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-sm md:text-base"
          >
            <div class="space-y-2">
              <p class="text-small-text">
                <strong>Name:</strong> <span class="ml-3">Elvis Izuegbu</span>
              </p>
              <p class="text-small-text">
                <strong>Location:</strong>
                <span class="ml-3">Lagos, Nigeria</span>
              </p>
            </div>
            <div class="space-y-2">
              <p class="text-small-text">
                <strong>Email:</strong>
                <a
                  href="mailto:izuegbuelvis@gmail.com"
                  class="underline hover:no-underline ml-3 text-btn-bg"
                  >izuegbuelvis@gmail.com</a
                >
              </p>
              <p class="text-small-text">
                <strong>Phone:</strong> <span class="ml-3">+2349017690869</span>
              </p>
            </div>
          </div>

          <!-- Socials -->
          <div class="pt-2 flex">
            <!-- Contact CTA -->
            <router-link
              to="/contact"
              class="inline-flex items-center rounded-full px-3 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold border border-border bg-btn-green hover:bg-btn-bg text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-btn-bg"
              >Contact Me</router-link
            >

            <div class="flex items-center gap-4 ml-4">
              <span class="w-14 h-0.5 bg-border inline-block"></span>
              <ul class="flex items-center gap-4 m-0 p-0 list-none">
                <li>
                  <a
                    href="https://www.linkedin.com/in/izuegbu-elvis"
                    aria-label="open link to connect with me on linkedin"
                    target="_blank"
                    rel="noreferrer"
                    class="text-text hover:text-btn-bg transition-colors"
                  >
                    <i class="icon ion-logo-linkedin text-2xl"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/elvis-ci"
                    target="_blank"
                    aria-label="open link to visit my github"
                    rel="noreferrer"
                    class="text-text hover:text-btn-bg transition-colors"
                  >
                    <i class="icon ion-logo-github text-2xl"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:izuegbuelvis@gmail.com"
                    aria-label="open to send me an email"
                    class="text-text hover:text-btn-bg transition-colors"
                  >
                    <i class="icon ion-md-mail text-2xl"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <!-- Animated Full Bio (collapsible) -->
          <div>
            <div class="flex items-start gap-4">
              <button
                @click="toggleBio"
                :aria-expanded="bioVisible.toString()"
                aria-controls="full-bio"
                class="inline-flex items-center text-btn-green justify-center rounded-full text-xs sm:text-sm font-semibold underline"
              >
                <span v-if="!bioVisible">View full bio</span>
                <span v-else>Hide bio</span>
              </button>
            </div>

            <!-- Transition wrapper for smooth height animation -->
            <transition
              @before-enter="beforeEnter"
              @enter="enter"
              @after-enter="afterEnter"
              @before-leave="beforeLeave"
              @leave="leave"
              @after-leave="afterLeave"
            >
              <div
                v-show="bioVisible"
                id="full-bio"
                ref="fullBioRef"
                role="region"
                tabindex="-1"
                aria-live="polite"
                class="mt-4 prose max-w-none text-text text-sm sm:text-base md:text-lg leading-relaxed border-l-4 border-border pl-4"
                v-html="fullBio"
              ></div>
            </transition>
          </div>
        </div>
      </div>

      <!-- SERVICES -->
      <section class="mt-12">
        <Services :services="services" />
      </section>
  </main>
</template>

<style scoped>
/* Minimal scoped styles to keep vue-typer visuals consistent and to style prose */
::v-deep(.vue-typer) {
  --char-typed-color: var(--color-heading);
  --char-selected-color: var(--color-heading);
  --caret-idle-color: var(--color-heading);
  --caret-typing-color: var(--color-heading);
  --caret-erasing-color: var(--color-heading);
  --caret-complete-color: var(--color-heading);
  --caret-selecting-color: var(--color-heading);
}

/* Make prose text inherit theme colors when user uses the prose class (from tailwind-typography plugin) */
.prose {
  color: var(--color-text);
}

.icon {
  /* If you use an icon font like Ionicons, keep this. Otherwise swap with inline SVGs */
  font-size: 1.5rem;
}
</style>
