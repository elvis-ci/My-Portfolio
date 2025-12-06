<script setup>
import { ref } from "vue";
import emailjs from "emailjs-com";

// Reactive state
const loading = ref(false);
const statusMessage = ref("");
const currentTime = ref(new Date().toLocaleString());

// Form ref
const contactForm = ref(null);

// Send email function
const sendEmail = async () => {
  loading.value = true;
  statusMessage.value = "";

  try {
    const result = await emailjs.sendForm(
      "service_14f4hin",
      "template_ulz7xor",
      contactForm.value,
      "fWqSMbfwUo3YAzNt8"
    );

    statusMessage.value = "✅ Message sent successfully!";
    console.log("SUCCESS:", result.text);
  } catch (error) {
    statusMessage.value = "❌ Failed to send message. Please try again.";
    console.error("FAILED...", error);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <main id="main-content" class="px-4 py-10 max-w-7xl mx-auto text-text">
    <!-- Header -->
    <section class="text-center mb-12">
      <h1 class="text-3xl sm:text-4xl font-extrabold text-heading">
        Contact Me
      </h1>
      <p class="text-base sm:text-lg text-color-text mt-4 max-w-2xl mx-auto">
        Have a project idea, question, or want to collaborate? Send me an email
        or reach out on any of the platforms listed, and I’ll get back to you as
        soon as possible!
      </p>
    </section>

    <!-- Main grid -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
      <!-- Form Column -->
      <div
        class="lg:col-span-8 bg-card-bg border border-gray-300 rounded-xl py-6 px-4 sm:p-8 shadow-lg"
      >
        <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-btn-bg mb-6">
          Send a Message
        </h2>
        <form ref="contactForm" @submit.prevent="sendEmail" class="space-y-6">
          <input type="hidden" name="time" :value="currentTime" />

          <!-- Name & Email -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex flex-col">
              <label class="text-sm sm:text-base font-semibold mb-1" for="name"
                >Full Name <span class="text-red-500">*</span></label
              >
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
                class="border bg-background/40 rounded-lg px-4 py-1.5 sm:py-2 focus:outline-none focus:ring-2 focus:ring-btn-bg"
              />
            </div>

            <div class="flex flex-col">
              <label class="text-sm sm:text-base font-semibold mb-1" for="email"
                >Email Address <span class="text-red-500">*</span></label
              >
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
                class="bg-background/40 border rounded-lg px-4 py-1.5 sm:py-2 focus:outline-none focus:ring-2 focus:ring-btn-bg"
              />
            </div>
          </div>

          <!-- Subject -->
          <div class="flex flex-col">
            <label class="text-sm sm:text-base font-semibold mb-1" for="subject"
              >Subject <span class="text-red-500">*</span></label
            >
            <input
              id="subject"
              name="title"
              type="text"
              placeholder="Message subject"
              required
              class="bg-background/40 border rounded-lg px-4 py-1.5 sm:py-2 focus:outline-none focus:ring-2 focus:ring-btn-bg"
            />
          </div>

          <!-- Message -->
          <div class="flex flex-col">
            <label class="text-sm sm:text-base font-semibold mb-1" for="message"
              >Message <span class="text-red-500">*</span></label
            >
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Write your message..."
              required
              class="bg-background/40 border rounded-lg px-4 py-1.5 sm:py-2 focus:outline-none focus:ring-2 focus:ring-btn-bg resize-none"
            ></textarea>
          </div>

          <!-- Submit -->
          <div>
            <button
              type="submit"
              class="bg-btn-bg text-white font-semibold px-6 py-3 rounded-full hover:shadow-xl transition disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
              :disabled="loading"
            >
              {{ loading ? "Sending..." : "Send Message" }}
            </button>
            <p v-if="statusMessage" class="mt-3 text-sm text-color-text">
              {{ statusMessage }}
            </p>
          </div>
        </form>
      </div>

      <!-- Info Column -->
      <div class="lg:col-span-4 flex flex-col gap-6">
        <div class="bg-card-bg border border-gray-300 rounded-xl p-6 shadow-lg">
          <h2 class="text-xl sm:text-2xl font-bold text-btn-bg mb-4">
            Contact Info
          </h2>
          <p class="mb-4">
            Available for freelance work and collaborations. Feel free to reach
            out!
          </p>

          <div class="flex flex-col space-y-4">
            <!-- Location -->
            <div class="flex items-center gap-3">
              <i class="icon ion-md-pin text-xl"></i>
              <span>Lagos, Nigeria</span>
            </div>

            <!-- Phone -->
            <div class="flex items-center gap-3">
              <i class="icon ion-md-call text-xl"></i>
              <a href="tel:+2349017690869" class="hover:text-btn-bg transition">
                +234 901 769 0869
              </a>
            </div>

            <!-- Email -->
            <div class="flex items-center gap-3">
              <i class="icon ion-md-mail text-xl"></i>
              <a
                href="mailto:izuegbuelvis@gmail.com"
                class="hover:text-btn-bg transition"
              >
                izuegbuelvis@gmail.com
              </a>
            </div>

            <!-- LinkedIn -->
            <a
              href="https://www.linkedin.com/in/izuegbu-elvis"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              class="flex items-center gap-3 hover:text-btn-bg transition"
            >
              <i class="icon ion-logo-linkedin text-xl"></i>
              <span>linkedin.com/in/izuegbu-elvis</span>
            </a>

            <!-- GitHub -->
            <a
              href="https://github.com/elvis-ci"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              class="flex items-center gap-3 hover:text-btn-bg transition"
            >
              <i class="icon ion-logo-github text-xl"></i>
              <span>github.com/elvis-ci</span>
            </a>
          </div>
        </div>
        <div class="bg-card-bg border border-gray-300 rounded-xl p-6 shadow-lg">
          <h2 class="text-xl sm:text-2xl font-semibold mb-2 text-btn-bg">
            Follow Me
          </h2>
          <p class="mb-4">Connect on social media for updates and projects</p>
          <div class="flex justify-start gap-6 text-2xl">
            <a
              href="https://www.linkedin.com/in/izuegbu-elvis"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile link"
              ><i class="icon ion-logo-linkedin"></i
            ></a>
            <a
              href="https://github.com/elvis-ci"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile link"
              ><i class="icon ion-logo-github"></i
            ></a>
            <a href="mailto:izuegbuelvis@gmail.com" aria-label="email link"
              ><i class="icon ion-md-mail"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
