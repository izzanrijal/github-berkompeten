<script setup lang="ts">
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
</script>

<template>
  <section
    id="community"
    class="py-12"
  >
    <hr />
    <div class="container py-20 sm:py-20">
      <div class="lg:w-[60%] mx-auto">
        <Card
          class="bg-background shadow-none text-center flex flex-col items-center justify-center border-0"
        >
          <CardHeader>
            <CardTitle class="text-4xl md:text-5xl font-bold">
              Siap Untuk Memulai Perjalanan Menuju Kelulusan<span
                class="text-transparent bg-gradient-to-r from-[#0080FF] to-[#66B2FF] bg-clip-text"
              >
                UKMPPD</span>?
            </CardTitle>
          </CardHeader>
          <CardContent class="lg:w-[80%] text-xl text-muted-foreground">
            Dapatkan akses penuh ke latihan soal CBT UKMPPD, analisis personal, dan rekomendasi belajar khusus untuk memaksimalkan persiapan UKMPPD Anda. Klik untuk coba sekarang!
          </CardContent>

          <CardFooter>
            <Button as-child>
              <a
                href="#"
                target="_blank"
              >
                Coba Gratis Sekarang
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
    <hr />
  </section>
</template>