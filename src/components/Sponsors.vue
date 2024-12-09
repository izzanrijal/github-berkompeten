<script setup lang="ts">
import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/style.css";

interface Sponsor {
  logo: string;
  name: string;
}

const sponsors: Sponsor[] = [
  {
    logo: "/public/unhas.png", // Logo Universitas Hasanuddin
    name: "Universitas Hasanuddin",
  },
  {
    logo: "/public/umi.png", // Logo Universitas Muslim Indonesia
    name: "Universitas Muslim Indonesia",
  },
  {
    logo: "/public/unismuh.png", // Logo Universitas Muhammadiyah Makassar
    name: "Universitas Muhammadiyah Makassar",
  },
];
</script>

<template>
  <section
    id="sponsors"
    class="mx-auto pb-24 sm:pb-32 max-w-[600px]"
  >
    <h2 class="text-lg md:text-xl text-center mb-6">
      Dipercaya oleh Mahasiswa Kedokteran dari Berbagai Kampus Ternama
    </h2>

    <div class="mx-auto overflow-hidden">
      <Marquee
        class="overflow-hidden"
        innerClassName="flex gap-24 items-center whitespace-nowrap"
        :pauseOnHover="true"
        :fade="true"
        speed="20"
      >
        <div
          v-for="{ logo, name } in sponsors"
          :key="name"
          class="flex-none w-[250px] flex items-center justify-start gap-4"
        >
          <img
            :src="logo"
            :alt="name"
            class="max-w-[60px] md:max-w-[80px] flex-shrink-0"
          />
          <div class="text-base md:text-lg font-medium text-left whitespace-normal break-words leading-normal max-w-[150px]">
            {{ name }}
          </div>
        </div>
      </Marquee>
    </div>
  </section>
</template>
