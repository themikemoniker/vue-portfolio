<template>
    <header class="bg-secondary text-white p-6">
      <div class="container mx-auto flex justify-between items-center">
        <div class="text-xl font-light uppercase">
          Jordan Carlile
        </div>
        <nav class="hidden md:block">
          <ul class="flex gap-x-4">
            <li v-for="item in headerLinks" :key="item.name">
              <a :href="item.link" class="transition hover:text-primary">
                {{ item.name }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </template>

  <script setup lang="ts">
  const headerLinks = [
    { name: "Linkedin", link: "https://www.linkedin.com/in/contact-jordan-swe/" },
    { name: "Github", link: "https://github.com/themikemoniker" },
    { name: "Resume", link: "documents/JordanCarlileResumeJan2026.pdf" },
  ];
  </script>