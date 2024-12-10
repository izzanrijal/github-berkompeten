<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { onMounted, ref } from 'vue';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Star } from "lucide-vue-next";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "dr. Melia Budi",
    userName: "FK Universitas Hasanuddin",
    comment:
      "Special thanks buat team Berkompeten.id, Sistemnya keren dan inovatif! Salut! Dengan begitu banyak jenis Bank Soal yang disediakan dan bisa diakses kapanpun dan dimanapun menjadikan persiapan ujian lebih mantap. Sangat membantu analisa kemampuan belajar dengan sangat akurat.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "dr. Rais Dahyar",
    userName: "FK Universitas Hasanuddin",
    comment:
      "Berkompeten.id mengajarkan bahkan menuntut kita BERDIKARI, dan yang terpenting, kita bisa setidaknya memprediksi letak salah serta benar dengan tingkat akurasi yang cukup tinggi tanpa mendahului takdir Tuhan.",
    rating: 4.8,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "dr. Dewi Damayanti",
    userName: "FK Universitas Muslim Indonesia",
    comment:
      "Semenjak ikut Berkompeten.id, cara belajarku mulai berubah dengan seringnya latihan soal yang diberikan. Terutama Hasil Analisa dan Advisnya sangat membantu menutupi kekuranganku. Semoga kedepannya Berkompeten.id lebih baik lagi.",
    rating: 4.9,
  },
];

const api = ref(null);

onMounted(() => {
  const autoPlayInterval = setInterval(() => {
    if (api.value) {
      api.value.scrollNext();
    }
  }, 3000);

  return () => clearInterval(autoPlayInterval);
});
</script>

<template>
  <section
    id="testimonials"
    class="container py-24 sm:py-32"
  >
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
        Testimonials
      </h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
        Apa Kata Mereka?
      </h2>
    </div>

    <Carousel
      :opts="{
        align: 'start',
        loop: true,
      }"
      class="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      @init-api="api = $event"
    >
      <CarouselContent>
        <CarouselItem
          v-for="review in reviewList"
          :key="review.name"
          class="md:basis-1/2 lg:basis-1/3"
        >
          <Card class="bg-muted/50 dark:bg-card">
            <CardContent class="pt-6 pb-0">
              <div class="flex gap-1 pb-6">
                <Star class="size-4 fill-primary text-primary" />
                <Star class="size-4 fill-primary text-primary" />
                <Star class="size-4 fill-primary text-primary" />
                <Star class="size-4 fill-primary text-primary" />
                <Star class="size-4 fill-primary text-primary" />
              </div>

              "{{ review.comment }}"
            </CardContent>

            <CardHeader>
              <div class="flex flex-row items-center gap-4">
                <Avatar>
                  <AvatarImage
                    :src="review.image"
                    :alt="review.name"
                  />
                  <AvatarFallback>{{ review.name.charAt(0) }}</AvatarFallback>
                </Avatar>

                <div class="flex flex-col">
                  <CardTitle class="text-lg">{{ review.name }}</CardTitle>
                  <CardDescription>{{ review.userName }}</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </section>
</template>