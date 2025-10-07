<script>
export default {
  name: "blog-articles",
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    const faders = document.querySelectorAll(".fade-in");
    const sliders = document.querySelectorAll(".slide-in");
    const appearOptions = {
      threshold: 1,
      rootMargin: "0px 0px 350px 0px",
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
  },
};
</script>

<template>
  <ul class="row list-unstyled">
    <li
      v-for="post in posts"
      :key="post.id"
      class="col-12 col-md-6 mb-4"
      :aria-labelledby="'post-title-' + post.id"
    >
      <article
        class="blog-card resume-card h-100 px-3 py-3 fade-in slide-in from-bottom from-top"
      >
        <figure v-if="post.image" class="blog-figure">
          <img
            :src="post.image"
            :alt="post.imageAlt || ''"
            class="blog-image"
          />
        </figure>

        <div class="card-body pt-3">
          <h3 :id="'post-title-' + post.id" class=" resume-role mb-2">
            {{ post.title }}
          </h3>

          <p class="small small-text mb-3">
            <i class="icon ion-md-calendar" aria-hidden="true"></i>
            <span class=""> Published on</span>
            {{ post.date }}
            <span class="mx-2">·</span>
            <i class="icon ion-md-person" aria-hidden="true"></i>
            <span class="resume-text px-1">
              {{ post.author }}
            </span>
          </p>

          <p class="resume-text mb-3">
            {{ post.excerpt }}
          </p>

          <div
            class="d-flex align-items-center justify-content-between mt-auto"
          >
            <a
              :href="post.link"
              class="cv-btn read-more"
              :aria-label="`Read more about ${post.title}`"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read full post &rarr;
            </a>
            <span class="post-read-time small text-muted" aria-hidden="true">
              {{ post.readTime }}
            </span>
          </div>
        </div>
      </article>
    </li>
  </ul>
</template>

<style>
.small-text {
  color: var(--small-text);
}
.card-body {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0;
  padding: 0;
}
.card-body h3 {
  font-size: 1.3rem;
}

/* Reuse your card / resume visual language */
.resume-card,
.blog-card {
  background: var(--card-bg);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: var(--card-shadow);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
  font-size: 1.1rem;
}

/* image styling consistent with your about page */
.blog-figure {
  margin: 0;
  width: 100%;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.03), transparent);
}
.blog-image {
  width: 100%;
  height: 160px;
  object-fit: cover;
  display: block;
}

/* hover lift (keeps your existing vibe) */
.blog-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25), var(--card-shadow);
}

/* title + excerpt reuse */
.resume-role {
  font-weight: 700;
  font-size: 1.05rem;
  line-height: 1.25;
  color: var(--btn-bg);
}
.resume-text {
  color: var(--color-text);
  line-height: 1.6;
}

/* align read more to match your CV button look */
.read-more {
  background: var(--btn-color) !important;
  color: #fff !important;
  padding: 8px 18px;
  border-radius: 24px;
  text-decoration: none;
  font-weight: 600;
  border: 1px solid var(--btn-bg) !important;
}
.read-more:hover,
.read-more:focus {
  box-shadow: var(--card-shadow);
  transform: translateY(-2px);
  text-decoration: none;
}

/* small responsiveness & spacing */
.post-read-time {
  color: var(--color-text);
}

/* make sure blog grid spacing is consistent on small screens */
@media (max-width: 767.98px) {
  .blog-image {
    height: 180px;
  }
}
</style>
