<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface HowItWorksProps {
  badgeTitle: string;
  title: string;
  description: string;
  image: string;
}

const HowItWorksList: HowItWorksProps[] = [
  {
    badgeTitle: "Langkah 1: Kerjakan Paket Soal",
    title: "Mulailah dengan Menyelesaikan Minimal 3 Paket Soal.",
    description:
      "Soal dirancang untuk mengukur pemahaman Anda terhadap topik penting dalam SKDI. Pastikan untuk mengerjakan dengan fokus agar kami dapat menganalisis hasil Anda secara akurat.",
    image: "roboto.png",
  },
  {
    badgeTitle: "Langkah 2: Analisis Personal",
    title: "Kami Akan Menganalisis Hasil Pengerjaan Soal Anda.",
    description:
      "Setelah Anda menyelesaikan soal, sistem kami secara otomatis akan melakukan analisis mendalam untuk mengetahui kekuatan dan kelemahan Anda.",
    image: "runner.png",
  },
  {
    badgeTitle: "Langkah 3: Prioritas Topik Belajar",
    title: "Dapatkan Insight Mengenai Prioritas Belajar Anda.",
    description:
      "Kami akan menyajikan panduan personal yang menunjukkan topik mana yang perlu Anda fokuskan terlebih dahulu untuk hasil yang optimal.",
    image: "pacheco.png",
  },
  {
    badgeTitle: "Langkah 4: Belajar Mandiri",
    title: "Belajar Secara Mandiri Berdasarkan Rekomendasi Topik.",
    description:
      "Gunakan panduan prioritas kami untuk belajar secara lebih efisien dan terarah, sehingga Anda lebih siap menghadapi CBT UKMPPD.",
    image: "gamestation.png",
  },
];
</script>

<template>
  <section
    id="features"
    class="container py-24 sm:py-32"
  >
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
        Bagaimana Berkompeten.id Membantu Anda
      </h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold">
        Langkah-Langkah Praktis
      </h2>
    </div>

    <div class="lg:w-[80%] mx-auto relative">
      <div
        v-for="(
          { badgeTitle, title, description, image }, index
        ) in HowItWorksList"
        :key="title"
        :class="[
          'flex mb-8 items-center',
          { ' flex-row-reverse': index % 2 !== 0 },
        ]"
      >
        <Card class="h-full bg-transparent border-0 shadow-none">
          <CardHeader>
            <div class="pb-4">
              <Badge>{{ badgeTitle }}</Badge>
            </div>

            <CardTitle>
              {{ title }}
            </CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground w-[80%]">
            {{ description }}
          </CardContent>
        </Card>

        <img
          :src="image"
          :alt="`Image describing ${title} `"
          className="w-[150px]  md:w-[250px] lg:w-[300px] mx-auto -scale-x-100 "
        />
        <div
          :class="[
            '-z-10 absolute right-0 w-44 h-72  lg:w-64 lg:h-80 rounded-full bg-primary/15 dark:bg-primary/10 blur-3xl',
            {
              'left-0': index % 2 !== 0,
            },
          ]"
        ></div>
      </div>
    </div>
  </section>
</template>
