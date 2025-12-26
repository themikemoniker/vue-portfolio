<template>
    <section class="bg-secondary text-white py-20 px-10">
      <div class="container mx-auto grid md:grid-cols-2 gap-10">
        <!-- Text content -->
        <div class="flex flex-col justify-center space-y-6">
          <h1 class="text-4xl font-bold">
            Welcome to My Portfolio
          </h1>
          <p class="text-lg">
            I am a passionate developer creating modern, responsive, and visually stunning applications.
          </p>
        </div>
  
        <!-- SVG Images Grid (3 on top, 2 on bottom) -->
        <div class="grid grid-cols-3 gap-6">
          <!-- Top row -->
          <img src="~/assets/images/angular-svgrepo-com.svg" alt="React Logo" class="w-20 h-20 mx-auto">
          <img src="~/assets/images/react-bw-svgrepo-com.svg" alt="Angular Logo" class="w-20 h-20 mx-auto">
          <img src="~/assets/images/vue-bw-svgrepo-com.svg" alt="Vue Logo" class="w-20 h-20 mx-auto">
  
          <!-- Bottom row (Centered across 3 columns) -->
          <div class="col-span-3 flex justify-center gap-12">
            <img src="~/assets/images/python-127-svgrepo-com.svg" alt="Python Logo" class="w-20 h-20">
            <img src="~/assets/images/aws-svgrepo-com.svg" alt="Node.js Logo" class="w-20 h-20">
          </div>
        </div>
      </div>
    </section>
  </template>
<!-- <img src="~/assets/images/react-svgrepo-com.svg" alt="React Logo SVG" class="max-w-full h-auto"> -->