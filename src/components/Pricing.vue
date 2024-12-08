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
  originalPrice: number;
  discountedPrice: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Basic",
    popular: 0,
    originalPrice: 500000,
    discountedPrice: 250000,
    description:
      "Akses dasar ke platform untuk persiapan UKMPPD Anda",
    buttonText: "Mulai Trial Gratis",
    benefitList: [
      "500+ Soal Latihan",
      "Analisis Dasar",
      "Forum Komunitas",
      "Panduan Belajar Dasar",
      "Email Support",
    ],
  },
  {
    title: "Premium",
    popular: 1,
    originalPrice: 1000000,
    discountedPrice: 500000,
    description:
      "Akses lengkap ke semua fitur untuk hasil maksimal",
    buttonText: "Pilih Premium",
    benefitList: [
      "2000+ Soal Latihan",
      "Analisis Mendalam",
      "Konsultasi Personal",
      "Panduan Belajar Premium",
      "24/7 Priority Support",
    ],
  },
  {
    title: "Ultimate",
    popular: 0,
    originalPrice: 2000000,
    discountedPrice: 1000000,
    description:
      "Solusi lengkap dengan bimbingan personal",
    buttonText: "Hubungi Kami",
    benefitList: [
      "5000+ Soal Latihan",
      "Analisis Expert",
      "Mentoring One-on-One",
      "Panduan Belajar Custom",
      "Dedicated Support Team",
    ],
  },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
</script>

<template>
  <section class="container py-24 sm:py-32">
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      Pricing
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Pilih Paket Sesuai Kebutuhan Anda
    </h2>

    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
      Diskon 50% untuk semua paket! Jangan lewatkan kesempatan ini.
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
            <span class="text-lg line-through text-muted-foreground">{{ formatPrice(originalPrice) }}</span>
            <div class="flex items-center gap-2">
              <span class="text-3xl font-bold">{{ formatPrice(discountedPrice) }}</span>
              <span class="text-sm text-primary font-semibold">50% OFF</span>
            </div>
            <span class="text-muted-foreground text-sm">/bulan</span>
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
            {{ buttonText }}
          </Button>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>