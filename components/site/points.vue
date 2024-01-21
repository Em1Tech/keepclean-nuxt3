<template>
   
   <div class="points_body">
      <div class="points_title">
         <h2>Our Core Values</h2>
      </div>
      <div class="points_container">
         <div class="points_card"
            v-for="item in aboutPoints"
            :key="item"
         >
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
         </div>
      </div>
   </div>
   
</template>

<script setup>

   const store = useServiceModal();
   const {aboutPoints} = storeToRefs(store);

</script>

<style scoped>

   .points_body {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
   }
   
   .points_title {
      width: 100%;
      display: flex;
      justify-content: center;
   }
   
   .points_title h2 {
      font-size: 25px;
      font-weight: bold;
      color: #021751;
   }

   .points_container {
      width: 1300px;
      display: flex;
      justify-content: center;
      column-gap: 20px;
      row-gap: 20px;
      align-items: stretch;
      flex-wrap: wrap;
      margin: 50px 0px;
   }
   
   .points_card {
      width: 300px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 20px;
      box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.043);
      border-radius: 8px;
   }
   
   .points_card h2 {
      font-size: 18px;
      font-weight: 600;
      color: #bad00f;
      margin-bottom: 10px;
   }
   
   .points_card p {
      font-size: 14px;
      font-weight: 400;
      color: #6b6b6b;
      text-align: start;
   }
   
   @media screen and (max-width: 1310px) {
      
      .points_container {
         width: 900px;
      }
      
      .points_card {
         width: 260px;
      }
      
   }
   
   @media screen and (max-width: 910px) {
      
      .points_container {
         width: 600px;
      }
      
      .points_card {
         width: 260px;
      }
      
   }
   
   @media screen and (max-width: 610px) {
      
      .points_container {
         width: 100%;
         padding: 0px 20px;
      }
      
      .points_card {
         width: 100%;
      }
      
   }

</style>