
import type { Transition } from 'vue';
<template>
   
   <div class="faq_body">
      <div class="faq_title">
         <h2>Frequently Asked Questions (FAQs)</h2>
      </div>
      <div class="faq_container">
         
         <div class="faq_card"
            v-for="(faq, index) in faqs"
            :key="index"
            @click="store.changeFaqState(index)"
         >
            <div class="faq_header">
               <h2>{{ faq.question }}</h2>
               <icon class="faq_icon" v-if="!faq.state" name="ph:caret-right-bold" />
               <icon class="faq_icon" v-if="faq.state" name="ph:caret-down-bold" />
            </div>
            
            <Transition name="fade">
               <div class="faq_content" v-if="faq.state">
                  <p>{{ faq.answer }}</p>
               </div>
            </Transition>
         </div>
         
      </div>
   </div>
   
</template>

<script setup>

   const faqState = ref(false);

   const store = useServiceModal();
   const {aboutPoints} = storeToRefs(store);
   const {faqs} = storeToRefs(store);

</script>

<style scoped>

   .faq_body {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 100px;
   }
   
   .faq_title {
      width: 100%;
      display: flex;
      justify-content: center;
   }
   
   .faq_title h2 {
      font-size: 25px;
      font-weight: bold;
      color: #021751;
   }

   .faq_container {
      width: 900px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      margin: 50px 0px;
      row-gap: 15px;
      column-gap: 15px;
   }
   
   .faq_card {
      width: 100%;
      padding-top: 3px;
   }
   
   .faq_header {
      width: 100%;
      padding: 20px;
      border-radius: 6px;
      transition: .3s;
      /* box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.043); */
      cursor: pointer;
      box-shadow: 0 0 8px #0000000e;
      display: flex;
      justify-content: space-between;
      align-items: center;
   }
   
   .faq_header:hover {
      box-shadow: 0 0 8px #0000002c;
   }
   
   .faq_header h2 {
      font-size: 16px;
      font-weight: 600;
      color: #021751;
      flex: 1;
   }
   
   .faq_icon {
      font-size: 25px;
      color: #021751;
   }
   
   .faq_content p {
      padding: 20px;
      font-size: 16px;
      font-weight: 400;
      color: #9e9e9e;
   }
   
   @media screen and (max-width: 1310px) {
      
      .faq_container {
         width: 900px;
      }
      
   }
   
   @media screen and (max-width: 910px) {
      
      .faq_container {
         width: 600px;
      }
      
   }
   
   @media screen and (max-width: 610px) {
      
      .faq_container {
         width: 100%;
         padding: 0px 20px;
      }
      
   }
   
   .fade-enter-active,
   .fade-leave-active {
      transition: transform 0.3s ease-in-out;
      transform-origin: top;
   }

   .fade-enter-from,
   .fade-leave-to {
      transform: scaleY(0);
   }

</style>