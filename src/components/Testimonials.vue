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
    name: "Dr. Sarah Wijaya",
    userName: "Dokter Muda",
    comment:
      "Platform ini sangat membantu dalam persiapan UKMPPD saya. Rekomendasi topik belajarnya sangat tepat sasaran!",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Dr. Ahmad Fauzi",
    userName: "Dokter Muda",
    comment:
      "Saya suka cara platform ini menganalisis performa dan memberikan saran yang personal untuk perbaikan.",
    rating: 4.8,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Dr. Maya Putri",
    userName: "Dokter Muda",
    comment:
      "Bank soal yang lengkap dan terstruktur membuat persiapan UKMPPD jadi lebih terarah.",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Dr. Reza Pratama",
    userName: "Dokter Muda",
    comment:
      "Fitur analisis personal sangat membantu saya fokus pada topik yang masih lemah.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Dr. Linda Susanti",
    userName: "Dokter Muda",
    comment:
      "Berkat Berkompeten.id, saya bisa lebih percaya diri menghadapi UKMPPD.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Dr. Budi Santoso",
    userName: "Dokter Muda",
    comment:
      "Rekomendasi belajar yang diberikan sangat membantu mengoptimalkan waktu persiapan UKMPPD saya.",
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