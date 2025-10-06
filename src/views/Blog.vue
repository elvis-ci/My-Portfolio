<script>
import BlogArticle from "@/components/BlogArticle.vue";
import leftbehind from "@/assets/imgs/thumbnails/left-behind.jpg";
import barriersToBridges from "@/assets/imgs/thumbnails/barriers-to-bridges.png";
import anvaya from "@/assets/imgs/thumbnails/anvaya.jpg";
export default {
  components:{
    BlogArticle,
  },
  name: "BlogPage",
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Left Behind Online: WCAG Compliance and Nigeria’s Digital Divide",
          date: "Jun 14, 2025",
          author: "Elvis Izuegbu",
          excerpt:
            "As Nigeria embraces rapid digital transformation, accessibility remains a neglected priority.",
          image: leftbehind,
          imageAlt: "Image of a woman struugling to read text on a screen",
          link: "https://www.linkedin.com/pulse/left-behind-online-wcag-compliance-nigerias-digital-divide-izuegbu-rnm4f",
          readTime: "4 min read"
        },
        {
          id: 2,
          title: "From Barriers to Bridges: A Developer’s Guide to Accessibility in Web Development",
          date: "Jun 27, 2025",
          author: "Elvis Izuegbu",
          excerpt:
            "Over 96% of the world's top one million web pages have an average of 50.8 errors per homepage. ",
          image: barriersToBridges,
          imageAlt: "Image Illustration of four principles of accessibility",
          link: "https://www.linkedin.com/pulse/from-barriers-bridges-developers-guide-accessibility-web-izuegbu-vwmqf",
          readTime: "6 min read"
        },
        {
          id: 3,
          title: "Reflecting on My Internship Journey at Anvaya Feats",
          date: "Aug 22, 2025",
          author: "Elvis Izuegbu",
          excerpt:
            "My favorite thing about Anvaya Feats is the genuine commitment to inclusion, creativity, and impact. ",
          image: anvaya,
          imageAlt: "Image of text that reads: Anvaya Feats   ",
          link: "https://www.linkedin.com/pulse/reflecting-my-internship-journey-anvaya-feats-elvis-izuegbu-w1hjf",
          readTime: "5 min read"
        },
        // add more posts as needed
      ],
      categories: ["Accessibility", "Frontend", "Performance", "Tools"],
      tags: ["WCAG", "Vue.js", "SEO", "Axe", "Performance"]
    };
  }
};
</script>


<template>
  <main id="main-content" class="container resume-section blog-div">
    <!-- Page header landmark -->
    <section class="section-header text-center">
      <h1 class="section-title">My Blog</h1>
      <p class="section-subtitle">
        Thoughts on web development, accessibility, and practical guides.
        Short reads and deep dives to help teams build better digital experiences.
      </p>
    </section>

    <!-- Two-column layout -->
    <div class="row g-4">
      <!-- Primary blog articles -->
      <section class="col-lg-9" aria-labelledby="blog-articles-heading">
        <h2 id="blog-articles-heading" class="visually-hidden">Blog Articles</h2>

        <BlogArticle :posts="posts"/>

        <!-- Pagination -->
        <nav aria-label="Blog pagination" class="mt-4 mx-auto">
          <ul class="pagination justify-content-center mb-0">
            <li class="page-item  disabled"><button class="page-link"> &lsaquo; Prev</button></li>
            <li class="page-item  active"><button class="page-link">1</button></li>
            <li class="page-item "><button class="page-link">2</button></li>
            <li class="page-item "><button class="page-link">Next &rsaquo;</button></li>
          </ul>
        </nav>
      </section>

      <!-- Sidebar -->
      <aside class="col-lg-3" aria-label="Blog sidebar">
        <div class="sidebar-card p-3 mb-4" aria-labelledby="categories-heading">
          <h3 id="categories-heading" class="sub-section-title">Categories</h3>
          <ul class="skill-list mt-4">
            <li v-for="(cat, i) in categories" :key="i">
              <a :href="'#' + cat" class="text-link" :aria-label="'Filter by ' + cat">{{ cat }}</a>
            </li>
          </ul>
        </div>

        <div class="sidebar-card p-3 mb-4" aria-labelledby="tags-heading">
          <h3 id="tags-heading" class="sub-section-title">Tags</h3>
          <div class="mt-4">
            <button
              v-for="(tag, t) in tags"
              :key="t"
              class="badge tag-badge me-1 mb-1"
              aria-pressed="false"
              type="button"
            >
              {{ tag }}
            </button>
          </div>
        </div>

        <div class="sidebar-card p-3 pt-4" aria-labelledby="about-heading">
          <h3 id="about-heading" class="sub-section-title">About</h3>
          <p class="resume-text mb-2 mt-4">
            I'm Elvis — a web developer and accessibility specialist.
          </p>
          <a href="/about" class="text-link">Read my full bio →</a>
        </div>
      </aside>
    </div>
  </main>
</template>


<style scoped>
.article-section{
  margin-block:0;
}
.sub-section-title{
  margin-block: 10px;
  font-weight: bolder;
  color: var(--color-heading);
  display: block;
  width: fit-content;
}

/* Sidebar cards reuse contact/about card style (light weight) */
.sidebar-card {
  background: var(--card-bg);
  border: 1px solid var(--color-border);
  border-radius: 12px;
}

/* category/tag/list styles (re-using skill-list) */
.skill-list {
  list-style: none;
  padding-left: 0;
  margin: 0;
}
.skill-list li {
  margin-bottom: 0.5rem;
}
.text-link {
  color: var(--btn-bg);
  text-decoration: none;
}
.text-link:hover,
.text-link:focus {
  color: var(--nav-hover);
  text-decoration: underline;
}

/* tag badge */
.tag-badge {
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.85rem;
}

/* small responsiveness & spacing */
.post-read-time {
  color: var(--color-text);
}
.section-header {
  margin: 0 auto 50px;
  padding-bottom: 20px;
  text-align: center;
}

/* header {
  padding: 1.3rem 3rem;
  display: block;
  position: static;
  z-index: 999;
} */

.active>.page-link, .page-link.active {
    z-index: 3;
    color: var(--bs-pagination-active-color);
    background-color: var(--btn-color);
    border-color: var(--bs-pagination-active-border-color);
    font-weight: bold;
}
/* make sure blog grid spacing is consistent on small screens */
@media (max-width: 767.98px) {
  .blog-image {
    height: 180px;
  }
}
</style>
