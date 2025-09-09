<script >
import Services from '@/components/Services.vue'

export default {
  components: { Services },
  data() {
    return {
      fullBio: "",
      services: [
        {
          name: "Custom Web Development",
          icon: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
          description: "tyfuyfguyfgugyguyguigihghouihiuhuihuihuhuouih"
        },
        {
          name: "CMS Development",
          icon: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
          description: "cfxbfgabevdfsisdufoijewofueiowhfdhcahsdhfiuohewifhuwehfuihweihfuiwehfuiwehiudfhuiewhui"
        },
        {
          name: "Accessibility Testing / Audit Report",
          icon: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
          description: "cfxbfgabevdfsisdufoijewofueiowhfdhcahsdhfiuohewifhuwehfuihweihfuiwehfuiwehiudfhuiewhui"
        },
        {
          name: "Accessibility Remediation",
          icon: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
          description: "cfxbfgabevdfsisdufoijewofueiowhfdhcahsdhfiuohewifhuwehfuihweihfuiwehfuiwehiudfhuiewhui"
        },
      ]
    }
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
      `
      this.$nextTick(() =>{
        this.$refs.fullBio.focus()
      })
    }
  }
}

</script>
<template>  
<section class="about-desc px-4">
  <!-- About Title -->
  <h1 class="section-title text-center">
    About Me
  </h1>


  <!-- Description Details -->
  <div class="container pt-4">
    <div class="row align-items-top desc-details">
      <!-- Profile Image (Left) -->
      <div class="col-12 col-lg-5 col-md-4 mb-4 mb-md-0 about-image-container">
        <img src="../assets/imgs/IMG_0022.jpeg" alt="Picture of Elvis Izuegbu" class="img-fluid img-thumbnail" />
      </div>

      <!-- Bio Summary (Right) -->
      <div class="col-12 col-lg-7 col-md-8">
        <div class="bio-summary">
          <h2>
            I'm Elvis Izuegbu, a Web Developer, Accessibility Specialist and Section 508 Certified Tester
          </h2>
          <!-- Short preview -->
          <p class=" mt-3">
            I’m a web developer with 3 years of experience building responsive, interractive, and accessible web solutions using HTML5, CSS3, JavaScript (Vue & React), Tailwind CSS, and WCAG standards. I also specialize in identifying and removing digital barriers through manual and automated testing with ANDI, Axe, WAVE, and NVDA, ensuring legal compliance and driving user retention through improved user experience.

          </p>
          <p class=" mt-3">
          </p>
          <!-- Hidden full text -->
          <div  id="fullBio" aria-live="polite" aria-atomic="true" v-html="fullBio" ref="fullBio">
          </div>

          <!-- See more / less button -->
          <button class="btn btn-link p-0 mt-2" data-bs-toggle="collapse" data-bs-target="#fullBio"  aria-controls="fullBio" @click="injectFullBio">
            View full bio
          </button>
        </div>
        <!-- Bio Data -->
        <div class="bio-data ">
          <div class="name-email row">
            <div class="col-12 col-md-6">
              <span class="label fw-bold">Name:</span>
              <span class=" name">Elvis Izuegbu</span>
            </div>
            <div class="email col-12 col-md-6">
              <span class=" fw-bold">Email:</span>
              <a href="mailto:izuegbuelvis@gmail.com" target="_blank" class="name">
                izuegbuelvis@gmail.com
              </a>
            </div>
          </div>
          <div class="row">
            <p class="col-12 col-md-6 location">
              <span class="label fw-bold">From:</span>
              <span class=" name">Lagos, Nigeria</span>
            </p>
          </div>
        </div>
        <div class="d-block d-sm-flex align-items-center">
          <!-- CV Button -->
          <button class="cv cv-btn btn btn-success ">
            Download CV
          </button>
          <!-- Socials -->
          <ul class="socials">
            <li class="list-inline-item">
              <a href="https://www.linkedin.com/in/izuegbu-elvis" target="_blank" rel="noreferrer"><i class="icon ion-logo-linkedin"></i></a>
            </li>
            <li class="list-inline-item">
              <a href="https://github.com/elvis-ci" target="_blank" rel="noreferrer"><i class="icon ion-logo-github"></i></a>
            </li>
            <li class="list-inline-item">
              <a href="mailto:izuegbuelvis@gmail.com" target="_blank" rel="noreferrer"><i class="icon ion-md-mail"></i></a>
            </li>
          </ul>
  
        </div>
      </div>

    </div>

  </div>
</section>

<section class="services px-4">
  <Services :services="services" />
</section>
</template>

<style >
.socials{
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.socials::before{
  background-color:var(--color-text);
  content: '';
  height: 2px;
  margin-right: 23px;
  width: 60px;
}
.socials li:not(last-child) {
  margin-right: 14px !important;
}
.socials a{
  line-height:100%;
  font-size: 21px;
  color: var(--color-text)
}
.desc-details{
  font-size: 17px;
}
.section-title{
  margin-block: 50px;
  font-weight: bolder;
  color: var(--color-heading);
}
.about-image-container img{
  background-color: transparent;
  width: 430px;
  max-height: 600px;
  border-color: rgba(0, 0, 0, 0.18);
}
.bio-summary{
  border-bottom: 3px solid rgba(91, 91, 91, 0.259);
  padding-bottom: 20px;
  font-size: 16px;
}
.bio-summary h2{
  font-size: 30px;
  font-weight: 700;
  line-height: 1.4;
  color: var(--color-heading);
}
.bio-data{
  font-size: 17px;
  padding: 29px 0;
}
.bio-data .label{
  display:inline-block;
  width: 55px;
}
.name-email{
  margin-bottom: 20px
}
.name{
  margin-left: 12px;
}
.email a{
  text-decoration: none;
  color: #009e66;
}
.location{
margin: 0;
}
.cv-btn{
  background: #009e66 !important;
  border-radius: 30px;
  font-size: 14px;
  padding: 10px 35px;
  border: 1px solid #009e66 !important;
  margin-right: 23px;
  transition: all 0.3s ease-in-out;
}
.cv:hover{
  box-shadow: 0 0 7px rgba(0, 255, 200, 0.9),
              0 0 15px rgba(0, 255, 200, 0.7),
              0 0 30px rgba(0, 255, 200, 0.6);
  transform: translateY(-4px);
}

/* Small & Medium devices (<=768px)*/
@media (max-width: 990px) {
  .about-title{
  font-size: 46px;
  width: fit-content;
  margin: 60px auto;
  font-weight: bolder;
}
.about-image-container{
  height: 250px;
  width: 250px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0px auto 40px;
  background-color: transparent;
  width: 430px;
  border-color: rgba(0, 0, 0, 0.18);
}

.bio-summary{
  padding-bottom: 33px;
}
.bio-summary h2{
  font-size: 28px;
}
.bio-summary p{
  font-size: 1.2rem;
  line-height: 35px;  
}

}
/* @media (min-width: 1024px) {
  .about-desc{
    display: grid;
    grid-template-columns: 1fr 1.7fr;
    column-gap: 100px;
  }
  .name-email{
  width: 100%;
  display: flex;
  justify-content: space-between;
}

} */
</style>
