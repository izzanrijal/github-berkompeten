<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Check } from "lucide-vue-next";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  originalPrice: number | string;
  discountedPrice: number | string;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Trial",
    popular: 0,
    originalPrice: "GRATIS",
    discountedPrice: "GRATIS",
    description: "Cobalah platform kami secara gratis untuk mengenal fitur-fitur unggulan.",
    buttonText: "Mulai Trial Gratis",
    benefitList: [
      "40+ Soal Latihan (1 Paket Soal)",
      "Contoh Hasil Analisis dan Advis",
      "Akses selama 14 Hari",
    ],
  },
  {
    title: "Gold",
    popular: 1,
    originalPrice: 600000,
    discountedPrice: 225000,
    description: "Solusi lengkap untuk persiapan maksimal.",
    buttonText: "Pilih Gold",
    benefitList: [
      "1200+ Soal Latihan (6 Paket Soal)",
      "2x Analisis Lengkap",
      "Akses selama 3 Bulan",
      "Pembahasan Soal (Akan Datang)",
      "Akses Prioritas ke Fitur Baru",
    ],
  },
  {
    title: "Silver",
    popular: 0,
    originalPrice: 300000,
    discountedPrice: 175000,
    description: "Cocok untuk persiapan awal dengan akses ke soal-soal latihan yang komprehensif.",
    buttonText: "Pilih Silver",
    benefitList: [
      "600+ Soal Latihan (3 Paket Soal)",
      "1x Analisis Lengkap",
      "Akses selama 3 Bulan",
      "Pembahasan Soal (Akan Datang)",
    ],
  },
];

const formatPrice = (price: number | string) => {
  if (typeof price === "string") return price;
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};
</script>

<template>
  <section id="pricing" class="container py-24 sm:py-32">
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      Harga
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Promo Pengguna Baru
    </h2>

    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
      Diskon hingga 63% untuk semua paket! Jangan lewatkan kesempatan ini.
    </h3>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
      <Card
        v-for="{
          title,
          popular,
          originalPrice,
          discountedPrice,
          description,
          buttonText,
          benefitList,
        } in plans"
        :key="title"
        :class="{
          'drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]':
            popular === PopularPlan?.YES,
        }"
      >
        <CardHeader>
          <CardTitle class="pb-2">
            {{ title }}
          </CardTitle>

          <CardDescription class="pb-4">{{ description }}</CardDescription>

          <div class="flex flex-col">
            <span
              v-if="typeof originalPrice === 'number'"
              class="text-lg line-through text-muted-foreground"
            >
              {{ formatPrice(originalPrice) }}
            </span>
            <div class="flex items-center gap-2">
              <span class="text-3xl font-bold">{{ formatPrice(discountedPrice) }}</span>
              <span
                v-if="typeof originalPrice === 'number'"
                class="text-sm text-primary font-semibold"
              >
                {{ ((1 - discountedPrice / originalPrice) * 100).toFixed(0) }}% OFF
              </span>
            </div>
            <span
              v-if="typeof discountedPrice === 'number'"
              class="text-muted-foreground text-sm"
            >
              /sekali bayar
            </span>
          </div>
        </CardHeader>

        <CardContent class="flex">
          <div class="space-y-4">
            <span
              v-for="benefit in benefitList"
              :key="benefit"
              class="flex"
            >
              <Check class="text-primary mr-2" />
              <h3>{{ benefit }}</h3>
            </span>
          </div>
        </CardContent>

        <CardFooter>
          <Button
            :variant="popular === PopularPlan?.NO ? 'secondary' : 'default'"
            class="w-full"
          >
            <a href="https://app.berkompeten.com/login" class="w-full">
              {{ buttonText }}
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>