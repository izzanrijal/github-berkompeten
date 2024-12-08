<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Brain,
  ListTodo,
  GraduationCap,
  LineChart,
  Clock,
  Trophy
} from "lucide-vue-next";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "brain",
    title: "Rekomendasi Belajar Personal",
    description:
      "Dapatkan saran topik pembelajaran yang dirancang khusus berdasarkan kebutuhan dan kemampuan Anda.",
  },
  {
    icon: "listTodo",
    title: "Prioritas Topik Belajar",
    description:
      "Panduan terstruktur untuk menentukan urutan pembelajaran yang paling efektif sesuai kebutuhan Anda.",
  },
  {
    icon: "graduationCap",
    title: "Latihan Soal UKMPPD Lengkap",
    description:
      "Akses ribuan soal latihan yang mencakup seluruh topik SKDI untuk memperkuat pemahaman Anda.",
  },
  {
    icon: "lineChart",
    title: "Umpan Balik yang Akurat",
    description:
      "Tinjau kemajuan Anda dengan analitik yang menunjukkan area kekuatan dan kelemahan Anda.",
  },
  {
    icon: "clock",
    title: "Efisiensi Belajar secara Maksimal",
    description:
      "Rancang jadwal belajar yang efisien untuk memanfaatkan waktu Anda secara produktif.",
  },
  {
    icon: "trophy",
    title: "Percaya Diri Menghadapi Ujian",
    description:
      "Dengan latihan terarah dan dukungan penuh, tingkatkan rasa percaya diri Anda menghadapi CBT UKMPPD.",
  },
];

const iconMap: Record<
  string,
  typeof Brain | typeof ListTodo | typeof GraduationCap | typeof LineChart | typeof Clock | typeof Trophy
> = {
  brain: Brain,
  listTodo: ListTodo,
  graduationCap: GraduationCap,
  lineChart: LineChart,
  clock: Clock,
  trophy: Trophy,
};
</script>

<template>
  <section
    id="features"
    class="container py-24 sm:py-32"
  >
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      Features
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
    Kenapa Memilih Berkompeten.id?
    </h2>

    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
    Berkompeten.id adalah solusi pintar untuk membantu Anda mempersiapkan UKMPPD dengan lebih efektif dan percaya diri. Kami menawarkan latihan soal lengkap, analitik personal, dan rekomendasi belajar yang disesuaikan untuk kebutuhan Anda.
    </h3>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="{ icon, title, description } in featureList"
        :key="title"
      >
        <Card class="h-full bg-background border-0 shadow-none">
          <CardHeader class="flex justify-center items-center">
            <div
              class="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4"
            >
              <component
                :is="iconMap[icon]"
                class="size-6 text-primary"
              />
            </div>

            <CardTitle>
              {{ title }}
            </CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground text-center">
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>