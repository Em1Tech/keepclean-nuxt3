<template>
  <div>
    <header>
      <div class="header_container">
        <img src="../static/logo.png" alt="" />

        <div class="header_items">
          <a href="#">Index</a>
          <a href="#services">Services</a>
          <a href="#about-us">About Us</a>
          <a href="#contact-us">Contact Us</a>
        </div>

        <svg
          @click="menuMobile = !menuMobile"
          id="header_mobile"
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-align-right"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#000000"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="10" y1="12" x2="20" y2="12" />
          <line x1="6" y1="18" x2="20" y2="18" />
        </svg>
      </div>
    </header>

    <!-- mobile_menu -->

    <div class="mobile_menu" v-if="menuMobile">
      <div class="header_menu">
        <svg
          @click="menuMobile = !menuMobile"
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-x"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#000000"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div>
      <div class="header_body">
        <img src="../static/logo.png" alt="" />
        <a href="#">Index</a>
        <a href="#services">Services</a>
        <a href="#about-us">About Us</a>
        <a href="#contact-us">Contact Us</a>
      </div>
    </div>

    <div class="cover">
      <div class="cover_container">
        <div class="cover_text">
          <span>WE CLEAN EVERYTHING</span>
          <h2>
            AN ORGANIZATION WITHOUT <span>CLEANING</span> IS NOT AN
            <span class="span_org">ORGANIZATION</span>
          </h2>
          <p>
            Keep Clean is a leading B2B cleaning company in Ireland. We provide
            tailor-made cleaning solutions to Irish businesses. Our skilled team
            offers high-quality cleaning services that leave a lasting positive
            impression.
          </p>
          <a href="#contact_section" class="cover_btn">How we can help you?</a>
        </div>
        <img src="../static/cover.svg" alt="" />
      </div>
    </div>

    <div class="services_card_container" id="services">
      <div class="title">
        <h2>Our Services</h2>
        <p>
          From cosy houses to bustling shops, towering office blocks to elegant
          apartments, and from charming hotels to modern corporate spaces - we
          leave our mark of cleanliness and professionalism everywhere we go.
        </p>
      </div>

      <div class="services_card">
        <div class="service_card" v-for="service in services" :key="service">
          <div class="card_header">
            <span><img src="../static/spray.png" /></span>
          </div>
          <div class="card_body">
            <h2>{{ service.title }}</h2>
            <p>{{ limitTitle(service.description, 160) }}</p>
            <a class="card_btn" @click="store.changeModalState(true, service)"
              >Read More</a
            >
          </div>
        </div>
      </div>
    </div>

    <!-- about us -->

    <div class="about_container" id="about-us">
      <div class="title_left">
        <h2>About Us</h2>
      </div>
      <div class="about_us">
        <img src="../static/about_us.jpg" alt="" />
        <div class="about_us_text">
          <h2>WE CLEAN TOGETHER,</h2>
          <h2>WE ORGANIZE TOGETHER</h2>
          <span>Our Story</span>
          <p>
            Founded in 2020, Keep Clean is a forward-thinking B2B cleaning
            company headquartered in the vibrant heart of Dublin. We embarked on
            this journey with a vision to revolutionise the cleaning industry,
            setting new standards in professionalism, environmental
            sustainability, and customer service.
          </p>
          <span>Our Mission</span>
          <p>
            We provide clean and pleasant environments, improving people's
            quality of life, with environmental and social responsibility.
          </p>
          <p>
            At Keep Clean, our mission is the cornerstone of everything we do.
            We are driven by the belief that a clean and well-maintained
            environment not only enhances productivity but also contributes to
            the overall well-being of individuals. Our commitment to
            environmental and social responsibility ensures that every service
            we deliver makes a positive impact.
          </p>
          <span>Our Vision</span>
          <p>
            To be the main reference in the quality of services provided and
            customer service.
          </p>
          <p>
            Our vision guides us towards becoming the leading company in service
            quality and customer care. We aspire to be the go-to partner for
            businesses seeking impeccable cleaning solutions. Our dedication to
            continuous improvement ensures that we are always evolving to meet
            the evolving needs of our clients.
          </p>
        </div>
      </div>
    </div>

    <site-points />

    <!-- contact us  -->

    <div class="contact_container" id="contact-us">
      <div class="contact_us">
        <div class="contact_text">
          <span>CONTACT US</span>
          <h2>HOW CAN WE HELP U??</h2>
          <p>
            If you're looking for additional information, wish to discuss an
            enquiry or want to chat about your service needs, you've come to the
            right place.
          </p>
          <p>
            Contact us today to schedule a consultation and experience the Keep
            Clean difference.
          </p>
          <div class="contact_item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-device-mobile"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#000000"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="7" y="4" width="10" height="16" rx="1" />
              <line x1="11" y1="5" x2="13" y2="5" />
              <line x1="12" y1="17" x2="12" y2="17.01" />
            </svg>
            <p>+353 83 8113241</p>
          </div>
          <div class="contact_item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-mail-forward"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#000000"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"
              />
              <path d="M3 6l9 6l9 -6" />
              <path d="M15 18h6" />
              <path d="M18 15l3 3l-3 3" />
            </svg>
            <p>contact@keepcleanireland.ie</p>
          </div>
          <div
            class="contact_item cursor_pointer"
            @click="moveTo('https://instagram.com/keepcleanie')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-instagram"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#000000"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="4" />
              <circle cx="12" cy="12" r="3" />
              <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
            </svg>
            <p>@keepcleanie</p>
          </div>
        </div>

        <div class="contact_form">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="E-mail" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </div>
      </div>
    </div>

    <site-faq />

    <!-- service request -->

    <!-- <div class="subscribe_container">
      <div class="subscribe">
         <div class="subscribe_title">
         <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-truck-delivery" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="7" cy="17" r="2" />
            <circle cx="17" cy="17" r="2" />
            <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
            <line x1="3" y1="9" x2="7" y2="9" />
         </svg>
         <h2>Subscribe now, <br> It's Free!!</h2>
         </div>
         <div class="subscribe_form">
         <input type="text" placeholder="E-mail">
         <button>Subscribe</button>
         </div>
      </div>
   </div> -->

    <!-- footer -->

    <footer>
      <div class="footer">
        <div class="footer_container">
          <div class="footer_item">
            <img src="../static/logo.png" alt="" />
          </div>
          <div class="footer_item">
            <h2>LINKS</h2>
            <a href="#">Index</a>
            <a href="#services">Our Services</a>
            <a href="#about-us">About US</a>
            <a href="#contact-us">Contact US</a>
          </div>
          <div class="footer_item">
            <h2>SOCIAL NETWORKS</h2>
            <a href="https://www.instagram.com/keepcleanie" target="_blank">Instagram</a>
          </div>
        </div>
        <div class="footer_bar">
          <p>
            © {{ new Date().getFullYear() }} KeepClean. All rights reserved.
          </p>
        </div>
      </div>
    </footer>

    <services-modal />
  </div>
</template>

<script setup>
const store = useServiceModal();
const { menuMobile } = storeToRefs(store);
const { services } = storeToRefs(store);

useHead({
  title: "KeepClean",
});

const moveTo = (url) => {
  window.open(url, "_blank");
};
</script>

<style scoped>
/* 
   
   VERDE #bad00f
   AZUL #021751
   LARANJA #ffbb00
   
   */

/* header */

header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background: none;
  position: absolute;
  top: 0;
  left: 0;
}

#header_mobile {
  display: none;
}

header .header_container {
  width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header .header_container img {
  width: 200px;
}

header .header_container .header_items {
  display: flex;
  justify-content: center;
  align-items: center;
}

header .header_container .header_items a {
  padding: 10px 20px;
  font-weight: 600;
  font-size: 14px;
  color: white;
  transition: 0.5s;
}

header .header_container .header_items a:hover {
  border-radius: 4px;
  background: #ffcc41;
}

/* mobile_menu */

.mobile_menu {
  display: none;
}

/* title */

.title {
  width: 1300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.title p {
  width: 500px;
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  color: #a7a7a7;
  margin-top: 20px;
}

.title_left {
  width: 1300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 40px;
}

.title h2 {
  font-size: 29px;
  font-weight: bold;
  color: #021751;
}

.title_left h2 {
  font-size: 29px;
  font-weight: bold;
  color: #021751;
}

/* cover */

.cover {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffbb00 !important;
}

.cover .cover_container {
  width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 0px;
}

.cover .cover_container .cover_text {
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.cover .cover_container .cover_text span {
  font-size: 20px;
  font-weight: 800;
  color: #fdf6e3;
}

.cover .cover_container .cover_text h2 {
  font-size: 41px;
  font-weight: 800;
  color: white;
  margin-bottom: 20px;
}

.cover .cover_container .cover_text h2 span {
  font-size: 45px;
  font-weight: 800;
  background: #bad00f;
  color: white;
}

.cover .cover_container .cover_text h2 .span_org {
  font-size: 45px;
  font-weight: 800;
  background: #021751;
  color: white;
}

.cover .cover_container .cover_text p {
  font-size: 14px;
  font-weight: 500;
  color: #ffefc2;
  line-height: 20px;
  margin-bottom: 20px;
}

.cover .cover_container .cover_text .cover_btn {
  padding: 10px 30px;
  font-weight: 600;
  font-size: 14px;
  color: white;
  border: none;
  border-radius: 20px;
  background: #ffcc41;
  transition: 0.5s;
}

.cover .cover_container .cover_text .cover_btn:hover {
  padding: 10px 40px;
}

.cover .cover_container img {
  width: 500px;
}

/* services */

.services_container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.services {
  width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0px;
}

.services .service {
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.9s;
}

.services .service:hover {
  background: #0217510e;
  cursor: pointer;
}

.services .service .service_header {
  width: 150px;
  height: 150px;
  background: #02175106;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.services .service h2 {
  font-size: 17px;
  font-weight: 600;
  color: #021751;
  margin-top: 15px;
  margin-bottom: 6px;
  text-align: center;
}

.services .service p {
  font-size: 13px;
  font-weight: 500;
  color: #8d8d8d;
  line-height: 20px;
  text-align: center;
  margin-bottom: 20px;
  line-height: 20px;
}

.services_card_container {
  width: 100%;
  background: #02175106;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.services_card_container .services_card {
  width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0px;
  flex-wrap: wrap;
  row-gap: 40px;
  column-gap: 40px;
  margin-bottom: 40px;
}

.services_card_container .services_card .service_card {
  width: 400px;
  background: white;
  border-radius: 6px;
  padding: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  transition: 0.5s;
}

.services_card_container .services_card .service_card:hover {
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.05);
}

.services_card_container .services_card .service_card .card_header {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.services_card_container .services_card .service_card .card_header span {
  width: 60px;
  height: 60px;
  border-radius: 10px;
  background: #02175106;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
}

.services_card_container .services_card .service_card .card_header span img {
  width: 30px;
}

.services_card_container .services_card .service_card .card_body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.services_card_container .services_card .service_card .card_body h2 {
  font-size: 20px;
  font-weight: bold;
  color: #bad00f;
  margin-bottom: 10px;
}

.services_card_container .services_card .service_card .card_body p {
  font-size: 12px;
  font-weight: 500;
  color: #8d8d8d;
  line-height: 20px;
  margin-bottom: 20px;
  line-height: 20px;
}

.services_card_container .services_card .service_card .card_body .card_btn {
  padding: 7px 20px;
  font-weight: 500;
  font-size: 13px;
  color: white;
  border: none;
  border-radius: 20px;
  background: #ffbb00;
  transition: 0.5s;
  cursor: pointer;
}

.services_card_container
  .services_card
  .service_card
  .card_body
  .card_btn:hover {
  padding: 7px 25px;
}

/* about us */

.about_container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about_container .about_us {
  width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0px;
}

.about_container .about_us img {
  width: 600px;
  box-shadow: -20px -20px 0px 0px #bad00f;
  margin-left: 20px;
}

.about_container .about_us .about_us_text {
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.about_container .about_us .about_us_text h2 {
  font-size: 43px;
  font-weight: 800;
  color: white;
  margin-bottom: 20px;
  background: #021751;
}

.about_container .about_us .about_us_text h2:first-child {
  margin-bottom: 0px;
  color: #021751;
  background: #bad00f;
}

.about_container .about_us .about_us_text p {
  font-size: 13px;
  font-weight: 300;
  color: #9b9b9b;
  margin-bottom: 10px;
}

.about_container .about_us .about_us_text span {
  font-size: 14px;
  font-weight: 600;
  color: #707070;
}

/* contact us */

.contact_container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0px;
}

.contact_container .contact_us {
  width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.contact_container .contact_us .contact_text {
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 100px;
}

.contact_container .contact_us .contact_text span {
  font-size: 20px;
  font-weight: 800;
  color: #c9c9c9;
  margin-bottom: -10px;
}

.contact_container .contact_us .contact_text h2 {
  font-size: 43px;
  font-weight: 800;
  color: #bad00f;
  margin-bottom: 10px;
}

.contact_container .contact_us .contact_text p {
  font-size: 14px;
  font-weight: 500;
  color: #757575;
  line-height: 20px;
  margin-bottom: 30px;
}

.contact_container .contact_us .contact_text .contact_item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #0217511c;
}

.contact_container .contact_us .contact_text .contact_item svg {
  width: 30px;
  height: 30px;
  stroke: #bad00f;
}

.contact_container .contact_us .contact_text .contact_item p {
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: #757575;
  margin-left: 10px;
}

.contact_container .contact_us .contact_form {
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #02175106;
  border-radius: 5px;
  border: 2px solid rgb(245, 245, 245);
  padding: 30px;
  row-gap: 30px;
}

.contact_container .contact_us .contact_form input {
  width: 100%;
  padding: 14px;
  background: white;
  border: 1px solid white;
  border-radius: 4px;
  transition: 0.9s;
}

.contact_container .contact_us .contact_form input:focus {
  border: 1px solid #0217517a;
}

.contact_container .contact_us .contact_form textarea {
  width: 100%;
  padding: 14px;
  height: 120px;
  resize: none;
  border: none;
  background: white;
  border: 1px solid white;
  border-radius: 4px;
  transition: 0.9s;
}

.contact_container .contact_us .contact_form textarea:focus {
  border: 1px solid #0217517a;
}

.contact_container .contact_us .contact_form button {
  width: 100%;
  padding: 17px;
  cursor: pointer;
  border: none;
  font-size: 12px;
  background: #ffbb00;
  color: white;
  font-weight: 600;
  border-radius: 4px;
  transition: 0.5s;
}

.contact_container .contact_us .contact_form button:hover {
  background: #ffd359;
}

/* subscribe */

.subscribe_container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.subscribe_container .subscribe {
  width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #02175106;
  border: 2px solid rgb(245, 245, 245);
  border-radius: 5px;
  padding: 40px;
}

.subscribe_container .subscribe .subscribe_title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.subscribe_container .subscribe .subscribe_title svg {
  padding: 15px;
  border-radius: 50%;
  background: #ffbb00;
  stroke: white;
  width: 70px;
  height: 70px;
  margin-right: 20px;
}

.subscribe_container .subscribe .subscribe_title h2 {
  font-size: 23px;
  font-weight: bold;
  color: rgb(156, 156, 156);
}

.subscribe_container .subscribe .subscribe_form {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.subscribe_container .subscribe .subscribe_form input {
  width: 250px;
  padding: 17px;
  font-size: 12px;
  background: white;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  transition: 0.9s;
}

.subscribe_container .subscribe .subscribe_form button {
  width: 100px;
  padding: 17px;
  cursor: pointer;
  border: none;
  font-size: 12px;
  background: #bad00f;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: white;
  font-weight: 600;
  transition: 0.5s;
}

/* footer */

footer {
  width: 100%;
  margin-top: 200px;
  background: #02175106;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0px;
}

footer .footer_container {
  width: 1300px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 20px;
}

footer .footer_container .footer_item {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

footer .footer_container .footer_item img {
  width: 130px;
  margin-top: -50px;
}

footer .footer_container .footer_item h2 {
  font-size: 14px;
  font-weight: 800;
  color: #12338d;
  margin-bottom: 20px;
}

footer .footer_container .footer_item a {
  font-size: 12px;
  font-weight: 600;
  color: #8d8d8d;
  line-height: 20px;
}

footer .footer_bar {
  width: 1300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}

footer .footer_bar p {
  font-size: 12px;
  font-weight: 600;
  color: #ffbb00;
}

/* responsive */

@media (max-width: 1320px) {

   .cursor_pointer {
    cursor: pointer;
   }

   /* header */

  header .header_container {
    width: 900px;
  }

  /* title */

  .title {
    width: 900px;
  }

  .title_left {
    width: 900px;
  }

  /* cover */

  .cover .cover_container {
    width: 900px;
  }

  .cover .cover_container .cover_text span {
    font-size: 15px;
  }

  .cover .cover_container .cover_text h2 {
    font-size: 35px;
  }

  .cover .cover_container .cover_text h2 span {
    font-size: 35px;
  }

  .cover .cover_container .cover_text h2 .span_org {
    font-size: 35px;
  }

  .cover .cover_container .cover_text p {
    font-size: 12px;
  }

  .cover .cover_container img {
    width: 400px;
  }

  /* services */

  .services {
    width: 900px;
  }

  .services .service {
    width: 200px;
  }

  .services_card_container .services_card {
    width: 900px;
    row-gap: 20px;
    column-gap: 20px;
    margin-bottom: 40px;
  }

  .services_card_container .services_card .service_card {
    width: 280px;
    padding: 15px;
  }

  .services_card_container .services_card .service_card .card_header span {
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }

  .services_card_container .services_card .service_card .card_header span img {
    width: 18px;
  }

  .services_card_container .services_card .service_card .card_body h2 {
    font-size: 18px;
  }

  .services_card_container .services_card .service_card .card_body p {
    font-size: 11px;
    line-height: 17px;
  }

  .services_card_container .services_card .service_card .card_body .card_btn {
    padding: 7px 20px;
    font-size: 12px;
  }

  /* about us */

  .about_container .about_us {
    width: 900px;
  }

  .about_container .about_us img {
    width: 400px;
    margin-left: 20px;
  }

  .about_container .about_us .about_us_text {
    width: 450px;
  }

  .about_container .about_us .about_us_text h2 {
    font-size: 28px;
  }

  .about_container .about_us .about_us_text p {
    font-size: 12px;
    line-height: 17px;
  }

  /* contact us */

  .contact_container .contact_us {
    width: 900px;
  }

  .contact_container .contact_us .contact_text {
    width: 600px;
    margin-right: 50px;
  }

  .contact_container .contact_us .contact_text span {
    font-size: 16px;
    margin-bottom: 5px;
  }

  .contact_container .contact_us .contact_text h2 {
    font-size: 35px;
  }

  .contact_container .contact_us .contact_text p {
    font-size: 12px;
    line-height: 15px;
  }

  .contact_container .contact_us .contact_text .contact_item svg {
    width: 24px;
    height: 24px;
  }

  .contact_container .contact_us .contact_text .contact_item p {
    margin: 0;
    font-size: 12px;
    margin-left: 10px;
  }

  .contact_container .contact_us .contact_form {
    width: 450px;
    padding: 20px;
    row-gap: 20px;
  }

  .contact_container .contact_us .contact_form input {
    width: 100%;
    padding: 14px;
    background: white;
    border: 1px solid white;
    border-radius: 4px;
    transition: 0.9s;
  }

  .contact_container .contact_us .contact_form input:focus {
    border: 1px solid #0217517a;
  }

  .contact_container .contact_us .contact_form textarea {
    width: 100%;
    padding: 14px;
    height: 120px;
    resize: none;
    border: none;
    background: white;
    border: 1px solid white;
    border-radius: 4px;
    transition: 0.9s;
  }

  .contact_container .contact_us .contact_form textarea:focus {
    border: 1px solid #0217517a;
  }

  .contact_container .contact_us .contact_form button {
    width: 100%;
    padding: 17px;
    cursor: pointer;
    border: none;
    font-size: 12px;
    background: #ffbb00;
    color: white;
    font-weight: 600;
    border-radius: 4px;
    transition: 0.5s;
  }

  .contact_container .contact_us .contact_form button:hover {
    background: #ffd359;
  }

  /* subscribe */

  .subscribe_container .subscribe {
    width: 900px;
  }

  .subscribe_container .subscribe .subscribe_title svg {
    padding: 12px;
    width: 60px;
    height: 60px;
  }

  .subscribe_container .subscribe .subscribe_title h2 {
    font-size: 18px;
  }

  /* footer */

  footer .footer_container {
    width: 900px;
  }

  footer .footer_container .footer_item {
    width: 290px;
  }

  footer .footer_bar {
    width: 900px;
  }
}

@media (max-width: 920px) {
  /* header */

  header .header_container {
    width: 100%;
    padding: 0px 20px;
  }

  header .header_container img {
    width: 140px;
  }

  header .header_container .header_items a {
    font-size: 12px;
  }

  /* title */

  .title {
    width: 100%;
    padding: 0px 20px;
  }

  .title_left {
    width: 100%;
    padding: 0px 20px;
  }

  .title h2 {
    font-size: 20px;
  }

  .title_left h2 {
    font-size: 20px;
  }

  /* cover */

  .cover .cover_container {
    width: 600px;
  }

  .cover .cover_container .cover_text span {
    font-size: 12px;
  }

  .cover .cover_container .cover_text h2 {
    font-size: 20px;
    margin-bottom: 5px;
  }

  .cover .cover_container .cover_text h2 span {
    font-size: 20px;
  }

  .cover .cover_container .cover_text h2 .span_org {
    font-size: 20px;
  }

  .cover .cover_container .cover_text p {
    font-size: 10;
    line-height: 15px;
  }

  .cover .cover_container img {
    width: 300px;
  }

  /* services */

  .services {
    width: 600px;
    flex-wrap: wrap;
  }

  .services .service {
    width: 200px;
  }

  .services_card_container .services_card {
    width: 600px;
  }

  .services_card_container .services_card .service_card {
    width: 280px;
  }

  /* about us */

  .about_container .about_us {
    width: 600px;
    align-items: flex-start;
  }

  .about_container .about_us img {
    display: none;
  }
  /* .about_container .about_us img {
      width: 230px;
      margin-left: 6px;
      margin-top: 6px;
      box-shadow: -6px -6px 0px 0px #bad00f;
   } */

  .about_container .about_us .about_us_text {
    width: 100%;
  }

  .about_container .about_us .about_us_text h2 {
    font-size: 18px;
    margin-bottom: 8px;
  }

  .about_container .about_us .about_us_text p {
    font-size: 10px;
    line-height: 15px;
    margin-bottom: 5px;
  }

  /* contact us */

  .contact_container .contact_us {
    width: 600px;
  }

  .contact_container .contact_us .contact_text {
    width: 300px;
    margin-right: 20px;
  }

  .contact_container .contact_us .contact_text span {
    font-size: 14px;
  }

  .contact_container .contact_us .contact_text h2 {
    font-size: 20px;
  }

  .contact_container .contact_us .contact_text p {
    font-size: 10px;
  }

  .contact_container .contact_us .contact_text .contact_item svg {
    width: 20px;
    height: 20px;
  }

  .contact_container .contact_us .contact_text .contact_item p {
    font-size: 10px;
  }

  .contact_container .contact_us .contact_form {
    width: 300px;
    padding: 10px;
    row-gap: 10px;
  }

  .contact_container .contact_us .contact_form input {
    padding: 13px;
    font-size: 10px;
  }

  .contact_container .contact_us .contact_form textarea {
    padding: 13px;
    font-size: 10px;
  }

  .contact_container .contact_us .contact_form textarea:focus {
    border: 1px solid #0217517a;
  }

  .contact_container .contact_us .contact_form button {
    padding: 13px;
    font-size: 10px;
  }

  /* subscribe */

  .subscribe_container .subscribe {
    width: 600px;
  }

  .subscribe_container .subscribe .subscribe_title svg {
    padding: 8px;
    width: 40px;
    height: 40px;
  }

  .subscribe_container .subscribe .subscribe_title h2 {
    font-size: 14px;
  }

  .subscribe_container .subscribe .subscribe_form input {
    width: 140px;
    padding: 13px;
    font-size: 10px;
  }

  .subscribe_container .subscribe .subscribe_form button {
    padding: 13px;
    font-size: 10px;
  }

  /* footer */

  footer .footer_container {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  footer .footer_container .footer_item {
    width: 100%;
    margin-bottom: 20px;
    align-items: center;
  }

  footer .footer_bar {
    width: 100%;
  }
}

@media (max-width: 670px) {
  #header_mobile {
    display: flex;
    padding: 4px;
    width: 34px;
    height: 34px;
    stroke: white;
    stroke-width: 2;
  }

  header .header_container .header_items {
    display: none;
  }

  /* mobile menu */

  .mobile_menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px;
    z-index: 20;
    background: #bad00f;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    position: absolute;
    top: 0px;
    left: 0;
    animation: 0.9s fromTop;
  }

  .mobile_menu .header_menu {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
  }

  .mobile_menu .header_menu svg {
    width: 34px;
    height: 34px;
    padding: 3px;
    stroke: white;
    stroke-width: 2;
  }

  .mobile_menu .header_body {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    width: 100%;
  }

  .mobile_menu .header_body img {
    width: 100px;
    margin-top: -60px;
  }

  .mobile_menu .header_body a {
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    font-size: 12px;
    border-radius: 4px;
  }

  /* title */

  .title p {
    width: 300px;
    font-size: 13px;
  }

  /* cover */

  .cover {
    padding: 0px 20px;
  }

  .cover .cover_container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    padding-bottom: 30px;
  }

  .cover .cover_container .cover_text {
    width: 100%;
    margin-bottom: 20px;
  }

  .cover .cover_container img {
    width: 60%;
  }

  /* services */

  .services_container {
    padding: 0px 20px;
  }

  .services {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  .services .service {
    width: 100%;
  }

  .services_card_container {
    padding: 0px 20px;
  }

  .services_card_container .services_card {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  .services_card_container .services_card .service_card {
    width: 100%;
  }

  /* about us */

  .about_container {
    padding: 0px 20px;
  }

  .about_container .about_us {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }

  .about_container .about_us img {
    width: 70%;
    margin-left: 0px;
    margin-bottom: 20px;
  }

  .about_container .about_us .about_us_text {
    width: 100%;
  }

  .contact_container {
    padding: 0px 20px;
  }

  .contact_container .contact_us {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  .contact_container .contact_us .contact_text {
    width: 100%;
    margin: 0;
  }

  .contact_container .contact_us .contact_form {
    width: 100%;
  }

  /* subscribe */

  .subscribe_container {
    padding: 0px 20px;
  }

  .subscribe_container .subscribe {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
  }

  .subscribe_container .subscribe .subscribe_form {
    margin-top: 30px;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  .subscribe_container .subscribe .subscribe_form input {
    width: 100%;
  }

  .subscribe_container .subscribe .subscribe_form button {
    margin-top: 20px;
    width: 100%;
  }
}

/* keyframes */

@keyframes modal {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fromTop {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
