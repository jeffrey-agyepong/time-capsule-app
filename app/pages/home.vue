<script setup lang="ts">
definePageMeta({
  layout: false,
});
import NavBar from "~/components/home/NavBar.vue";
import Hero from "~/components/home/Hero.vue";
import BCTA from "~/components/home/BCTA.vue";
import Footer from "~/components/home/Footer.vue";
</script>
<template>
  <NavBar />
  <Hero />
    <BCTA />

  <Footer />
</template>
