<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  BookOpen,
  BrainCircuit,
  BookMarked,
  Clock,
  Stethoscope,
  GraduationCap,
} from "lucide-vue-next";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "bookOpen",
    title: "Bingung Menentukan Topik",
    description:
      "Sulit menentukan topik penyakit atau diagnosis yang harus diprioritaskan untuk dipelajari.",
  },
  {
    icon: "brainCircuit",
    title: "Kewalahan dengan Banyaknya Materi",
    description:
      "Jumlah materi yang perlu dipelajari terasa terlalu banyak dan membingungkan.",
  },
  {
    icon: "stethoscope",
    title: "Kekhawatiran Nilai Ujian CBT Tidak Cukup",
    description:
      "Takut gagal mencapai skor di atas ambang batas kelulusan UKMPPD.",
  },
  {
    icon: "graduationCap",
    title: "Belajar Tidak Efisien",
    description:
      "Waktu belajar terasa tidak efektif karena tidak terarah dan kurang mendapat umpan balik.",
  },
];

const iconMap: Record<
  string,
  | typeof BookOpen
  | typeof BrainCircuit
  | typeof BookMarked
  | typeof Clock
  | typeof Stethoscope
  | typeof GraduationCap
> = {
  bookOpen: BookOpen,
  brainCircuit: BrainCircuit,
  bookMarked: BookMarked,
  clock: Clock,
  stethoscope: Stethoscope,
  graduationCap: GraduationCap,
};
</script>

<template>
  <section
    id="benefits"
    class="container py-24 sm:py-32"
  >
    <div class="grid lg:grid-cols-2 place-items-center lg:gap-24">
      <div>
        <h2 class="text-lg text-primary mb-2 tracking-wider">Tantangan UKMPPD</h2>

        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Siapkah Anda Mengatasi Tantangan Besar dalam Mempersiapkan UKMPPD?
        </h2>
        <p class="text-xl text-muted-foreground mb-8">
          Kami memahami berbagai kesulitan yang Anda hadapi dalam persiapan CBT UKMPPD. Berikut adalah beberapa tantangan utama yang sering dialami oleh para peserta.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-4 w-full">
        <Card
          v-for="({ icon, title, description }, index) in benefitList"
          :key="title"
          class="bg-muted/50 dark:bg-card hover:bg-background dark:hover:bg-background transition-all delay-75 group/number"
        >
          <CardHeader>
            <div class="flex justify-between">
              <component
                class="size-8 mb-6 text-primary"
                :is="iconMap[icon]"
              />

              <span
                class="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30"
                >0{{ index + 1 }}</span
              >
            </div>

            <CardTitle>{{ title }}</CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground">
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>