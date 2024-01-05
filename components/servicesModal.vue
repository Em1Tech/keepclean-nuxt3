<template>
   <div class="bg_modal" v-if="modalState">
      <div class="request_modal">
         <div class="request_modal_header">
            <h2>{{ modalContent.title }}</h2>
            <svg @click="store.changeModalState(false, {})" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
               <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
               <line x1="18" y1="6" x2="6" y2="18" />
               <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
         </div>
         
         <div class="request_modal_body">
            <p>{{ modalContent.description }}</p>
         </div>
      </div>
   </div>
</template>


<script setup>

const store = useServiceModal();
const {modalState} = storeToRefs(store);
const {modalContent} = storeToRefs(store);

</script>

<style>

/* modal */

   .bg_modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2;
      animation: modal .9s;
   }

   .bg_modal .request_modal {
      width: 400px;
      background: white;
      border-radius: 5px;
      padding: 20px;
      padding-bottom: 80px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 30px;
   }

   .request_modal_header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
   }
   
   .request_modal_header h2 {
      font-size: 17px;
      font-weight: bold;
      color: #ffbb00;
   }

   .request_modal_header svg {
      width: 30px;
      height: 30px;
      stroke: #ffbb00;
      stroke-width: 2;
      padding: 2px;
      border-radius: 4px;
      cursor: pointer;
   }

   .request_modal_header svg:hover {
      background: rgb(238, 238, 238);
   }
   
   .request_modal_body {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
   }
   
   .request_modal_body p {
      font-size: 14px;
      color: #a9a9a9;
      font-weight: 300;
   }

</style>