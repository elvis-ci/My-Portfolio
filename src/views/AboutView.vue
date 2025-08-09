<template>
  <section class="about-desc">
    <h1 class="about-title">About Me</h1>
    <div class="about-image-container">
      <img src="../assets/imgs/IMG_0022.jpeg" alt="Picture of Elvis Izuegbu">
    </div>
    <div class="desc-details">
      <div class="bio-summary">
        <h2>I'm Elvis Izuegbu, a web developer and WEB Acessibility Specialist</h2>
        <br>
        <p>asd afewasda asdawdawdas asd asda sdasd awwawdwd asd asda sdadasds asd sdasd aefrhyjtj rsadadh addffdd dffssdvaf dfdvadvvfr acv sdsdvsd asd sd sac svsocjosadjcpos cscjsodjcos io jjs sdciweui9chwhcisdc s cioshcioscio jsjasio sdjf jsiojojsjc jiw sodc sjapdojo</p>
      </div>
      <div class="bio-data">
        <div class="name-email">
          <p><span>Name:</span>Elvis Izuegbu</p>
          <p class="email"><span>Email:</span><a href="mailto:izuegbuelvis@gmail.com" target="_blank">izuegbuelvis@gmail.com</a></p>
          <p><span>From:</span>Lagos, Nigeria</p>
        </div>
        <div class="">
          <button class="cv-btn">Download CV</button>
          <ul class="">
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-title{
  font-size: 45px;
  width: fit-content;
  margin: 60px auto;
  color:rgb(229, 229, 229);
  font-weight: bolder;
}
.about-desc{
}
.about-image-container{
  height: 250px;
  width: 250px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0px auto 40px;
}
.bio-summary{
  padding-bottom: 33px;
  border-bottom: 3px solid rgba(91, 91, 91, 0.259);
}
.bio-summary h2{
  font-size: 28px;
  color:rgb(229, 229, 229)
}
.bio-summary p{
  font-size: 1.2rem;
  line-height: 35px;  
}
.bio-data{
  width: 100%;
  padding-block: 29px; 
  font-size: 1.2rem;
  line-height: 50px;
}
.name-email{
  width: 100%;
}
.bio-data p{
  width: fit-content;
}
p.email{
  color: #009e66;
}
.bio-data span{
  padding-right: 10px;
  color: white;
}
.cv-btn{
  background: #009e66;
  border-radius: 30px;
  color: white;
  font-size: 1.2rem;
  padding: 5px 35px;
  border: 1px solid #009e66 !important;
}
@media (min-width: 1024px) {
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

}
</style>
