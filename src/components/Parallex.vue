<template>
   <div class="img-parallex">
      <q-img src="https://images8.alphacoders.com/115/1156488.png" style="max-height: 800px;">
      </q-img>
      <div class="text-typing-panel">
         <p class="typing-text">{{ title }}</p>
      </div>
   </div>
</template>

<script setup>
import {
   onMounted
} from "@vue/runtime-core";
let i = 0;
let speed = 200;
let text = "Full Stack Developer"
let typingText = '';
const title = $ref('');

const typeWriter = () => {
   if (i < text.length) {
      typingText += text.charAt(i);
      title = typingText;
      i++;
      setTimeout(typeWriter, speed);
   }
};

onMounted(() => {
   typeWriter();
})
</script>

<style scoped>
.img-parallex {
   position: relative;
   /* display: inline-block; */
}

.text-typing-panel {
   position: absolute;
   top: 10%;
   left: 0;
   right: 0;
   margin-left: auto;
   margin-right: auto;
   color: white;
}

@media only screen and (min-width: 1281px) {
   .text-typing-panel p {
      font-size: 7rem;
   }
}

@media only screen and (max-width: 1280px) {
   .text-typing-panel p {
      font-size: 4rem;
   }
}

@media only screen and (max-width: 700px) {
   .text-typing-panel p {
      font-size: 2rem;
   }
}
</style>
