<script setup>

import { onMounted, computed } from "vue-demi";
import { usePersonalStore } from "../stores/about/personal.store";
import { useEducationStore } from "../stores/about/education.store";
import { useContactStore } from "../stores/about/contact.store";

const personalStore = usePersonalStore();
const educationStore = useEducationStore();
const contactStore = useContactStore();

onMounted(() => {
   personalStore.initPersonalData();
   educationStore.initEducationData();
   contactStore.initContactData();
});
</script>

<template>
   <div class="q-pa-md about">
      <div class="text-white title justify-center">
         <div class="text-h3">ABOUT ME</div>
         <div class="text-subtitle2">HOPE TO KNOW YOU AFTER</div>
      </div>
      <img
         alt="Vue logo"
         src="https://icon-library.com/images/icon-programmer/icon-programmer-14.jpg"
         style="max-width: 200px;"
      />

      <div class="row">
         <div class="col-md-6 col-sm-12">
            <div class="text-h5 text-white text-left text-bold q-mt-xl">Personal</div>
            <q-separator class="q-mr-xl" color="orange" />

            <p
               v-for="(item, index) in personalStore.getPersonalInformation"
               :key="index"
               class="text-body1 text-white text-left q-mt-md"
            >
               <strong class="text-blue-5">{{ item.key }} :</strong>
               {{ item.value }}
               <q-icon name="fas fa-syringe" class="text-green" v-if="item.key === 'Vaccined'" />
               <q-icon name="fas fa-syringe" class="text-green" v-if="item.key === 'Vaccined'" />
               <q-icon name="fas fa-syringe" class="text-green" v-if="item.key === 'Vaccined'" />
            </p>

            <div class="text-h5 text-white text-left text-bold q-mt-xl">Contact</div>
            <q-separator class="q-mr-xl" color="orange" />

            <p class="text-body1 text-white text-left q-mt-md">
               <strong class="text-blue-5">Email :</strong>
               {{ contactStore.contact.email }}
            </p>
            <p class="text-body1 text-white text-left q-mt-md">
               <strong class="text-blue-5">Phone :</strong>
               {{ contactStore.contact.phone }}
            </p>
            <p class="text-body1 text-white text-left q-mt-md">
               <strong class="text-blue-5">Github :</strong>
               {{ contactStore.contact.github }}
            </p>
         </div>
         <div class="col-md-6 col-sm-12">
            <div class="text-h5 text-white text-left text-bold q-mt-xl">Education</div>
            <q-separator class="q-mr-xl" color="orange" />
            <div
               class="q-mt-md q-mb-xl"
               v-for="(item, index) in educationStore.getEducationInformation"
               :key="index"
            >
               <p class="text-body1 text-white text-left">
                  <strong class="text-blue-5">Education Level :</strong>
                  {{ item.level }}
               </p>
               <p class="text-body1 text-white text-left">
                  <strong class="text-blue-5">Major :</strong>
                  {{ item.major }}
               </p>
               <p class="text-body1 text-white text-left">
                  <strong class="text-blue-5">Institute</strong>
                  {{ item.institutions }}
               </p>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped>
p {
   line-height: 0.8;
}
</style>
