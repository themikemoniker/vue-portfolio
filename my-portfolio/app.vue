<!-- app.vue -->
<template>
  <div class="bg-neutral">
    <Header />
    <Hero />
    <AboutMe />
    <curved-divider />
    <section id="showcase" class="py-16 bg-slate-200">
      <h2 class="text-primary text-3xl mb-8 text-center">
        My Work
      </h2>
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <project-showcase
          v-for="project in projects"
          :key="project.name"
          :project="project"
          />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    name: "FIU Security Research Hub",
    description: "React app with python backend. Uses Mapbox with custom layers to populate locations from news articles stored and queried with Google BigQuery big data solution.",
    image: "images/FIU-screenshot.png"
  },
  {
    name: "Landis Responsive Web App",
    description: "Vue and node app using graphql. Enabling signup and onboarding as well as internal property and client management.",
    image: "images/landis-desktop.png"
  },
  {
    name: "Integrichain Contracts and Pricing Platform",
    description: "Angular application with Flask backend to enable Government Pricing, Rebate Management, Chargeback Management, and Script Management.",
    image: "images/integrichain-overview.png"
  }
]
</script>