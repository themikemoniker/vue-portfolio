<template>
    <section id="about" class="py-16 bg-neutral">
      <div class="container mx-auto text-center">
        <!-- avatar -->
        <img
            src="~/assets/images/cartoon-headshot.png"
            alt="cartoon headshot"
            class="rounded-full w-48 h-48 mx-auto mb-6 shadow-xl border-4 border-dashed border-primary"
        />
        <!-- about me -->
         <p>
         Hi there! I'm Jordan Carlile, a full stack developer with passion for building performant and user-friendly web applications. With expertese in React, Vue, and Angular on the front end,
         I take pride in crafting solutions that are not only functional but also elegantly coded.
        </p>
        <!-- Skills -->
         <div class="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
            <skill-chip>Javascript | Typescript</skill-chip>
            <skill-chip>React | NextJS</skill-chip>
            <skill-chip>Vue | Nuxt</skill-chip>
            <skill-chip>Angular v19</skill-chip>
            <skill-chip>Python | FastAPI</skill-chip>
            <skill-chip>Python | Django</skill-chip>
            <skill-chip>Python | Flask</skill-chip>
            <skill-chip>NodeJS | Typescript</skill-chip>
            <skill-chip>Express</skill-chip>
            <skill-chip>NestJS</skill-chip>
            <skill-chip>PHP | Laravel</skill-chip>
            <skill-chip>Java | Spring Boot</skill-chip>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  </script>