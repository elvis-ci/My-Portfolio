<script></script>

<template>
  <section class="container">
    <div class="section-header text-center">
      <h1 class="section-title">Contact Me</h1>
      <p class="section-subtitle">
        Looking to discuss a new project, explore opportunities, or ask
        questions about my work? Feel free to reach out using the form below or
        through my social channels!
      </p>
    </div>

    <div class="row">
      <!-- Left: Contact Form -->
      <div class="col-lg-7">
        <div class="contact-form">
          <h2 class="form-title">Send Me a Message</h2>
          <p class="form-instructions">
            Fields marked with <span class="required-asterisk">*</span> are
            required.
          </p>

          <form>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="name" class="form-label">
                    Full Name
                    <span class="required-asterisk text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label for="email" class="form-label">
                    Email Address
                    <span class="required-asterisk text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <label for="subject" class="form-label">
                Subject <span class="required-asterisk text-danger">*</span>
              </label>
              <input
                type="text"
                class="form-control"
                id="subject"
                placeholder="Message subject"
                required
              />
            </div>

            <div class="form-group">
              <label for="message" class="form-label">
                Message <span class="required-asterisk text-danger">*</span>
              </label>
              <textarea
                class="form-control"
                id="message"
                rows="5"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <div class="form-actions mt-3">
              <button type="submit" class="btn-submit btn btn-success">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Right: Contact Information -->
      <div class="col-lg-5">
        <div class="contact-info">
          <!-- Heading always at the top -->
          <div class="pb-4">
            <h2 class="form-title">Contact Info</h2>
            <p>
              Always available for freelance work if the right project comes
              along, Feel free to contact me!
            </p>
          </div>
          <!-- Content Row -->
          <div class="d-flex">
            <!-- Icons Column -->
            <div
              class="contact-icons d-flex flex-column align-items-center pe-3 me-3"
            >
              <i class="icon ion-md-pin"></i>
              <i class="icon ion-md-call"></i>
              <i class="icon ion-md-mail"></i>
              <a href="https://www.linkedin.com/in/izuegbu-elvis" aria-label="connect with me on linkedin" target="_blank" rel="noreferrer"><i class="icon ion-logo-linkedin"></i></a>
              <a href="https://github.com/elvis-ci" target="_blank" aria-label="visit my github" rel="noreferrer"><i class="icon ion-logo-github"></i></a>
            </div>

            <!-- Text Column -->
            <div
              class="contact-text d-flex flex-column justify-content-start ps-3"
            >
              <p>Lagos, Nigeria</p>
              <p>+234 901 769 0869</p>
              <p>izuegbuelvis@gmail.com</p>
              <p>linkedin.com/in/izuegbu-elvis</p>
              <p>github.com/elvis-ci</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

/* Shared cards */
.contact-form,
.contact-info {
  background-color: var(--card-bg);
  color: var(--color-text);
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 1.5rem;
  margin-top: 20px;
  display: flex;
  flex-direction: column; /* stack heading on top */
}

.form-title {
  font-weight: 700;
  font-size: 1.75rem;
  color: var(--btn-bg);
  margin-bottom: 1rem; /* give spacing under heading */
}

.form-instructions {
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
}

.required-asterisk {
  color: red;
  margin-right: 0.25rem;
  font-weight: bold;
}

.form-group {
  margin-bottom: 1rem;
}

.form-label {
  font-weight: 600;
  display: block;
  margin-bottom: 0.5rem;
}

.form-control {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  padding: 0.75rem;
  font-size: 1rem;
}

.form-control:focus,
.form-control:hover {
  outline: none;
  border-color: #0d6efd;
  box-shadow: 0 0 0 2px rgba(13, 110, 253, 0.25);
}

.form-actions {
  margin-top: 1.25rem;
}

.btn-submit {
  background: var(--btn-bg) !important;
  border-radius: 30px;
  padding: 10px 35px;
  border: 1px solid #009e66 !important;
  margin-right: 23px;
  transition: all 0.3s ease-in-out;
  color: #ffffff;
}

.btn-submit:hover {
  box-shadow: var(--card-shadow);
  transform: translateY(-4px);
}

/* Right Contact Info */
.contact-info {
  display: flex;
  padding: 1.5rem;
}

.contact-icons {
  padding-right: 1rem;
  margin-right: 1rem;
  border-right: 2px dashed var(--box-shadow);
  position: relative;
}
.contact-icons::after {
  content: "";
  position: absolute;
  top: 0;
  right: -1px; /* align with the border */
  height: 100%;
  border-right: 1px dashed var(--btn-bg); /* dashed line */
  box-shadow: var(--box-shadow); /* optional glow */
}


.contact-icons .icon,
.icon-x, a {
  font-size: 1.5rem;
  height: 38px;
  margin-bottom: 1rem;
  color: var(--color-text);
}

.contact-icons .ion-logo-github {
  color: var(--color-text);
}


/* Contact text */
.contact-text p {
  height: 38px;
  /* margin-bottom: 1rem; */
  font-size: 1rem;
  color: var(--color-text);
}

.contact-text p:last-child {
  margin-bottom: 0;
}
</style>
