<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    "question": "Bagaimana saya bisa mengetahui topik prioritas belajar saya?",
    "answer": "Untuk mengetahui topik prioritas Anda, cukup kerjakan beberapa paket soal yang telah kami siapkan. Berdasarkan jawaban Anda, kami akan melakukan analisis mendalam menggunakan formula khusus untuk menentukan topik prioritas yang perlu Anda pelajari. Dengan mengikuti rekomendasi ini, diharapkan skor Anda dapat meningkat secara signifikan.",
    "value": "item-1"
  },
  {
    "question": "Apakah ada simulasi CBT yang tersedia?",
    "answer": "Ya, kami menyediakan simulasi dengan jumlah soal yang sama seperti ujian CBT asli, yaitu 200 soal untuk setiap paket soal. Namun, simulasi ini tidak kami batasi dengan waktu pengerjaan agar Anda bisa mengerjakan sesuai kesempatan tanpa tekanan waktu. Dengan demikian, analisis profil kemampuan Anda akan menjadi lebih akurat.",
    "value": "item-2"
  },
  {
    "question": "Apakah saya bisa mengulang soal latihan yang sudah saya kerjakan?",
    "answer": "Tidak, soal latihan yang telah dikerjakan tidak dapat diulang. Namun, Anda tetap bisa meninjau kembali soal dan jawaban Anda, lengkap dengan penanda jawaban yang benar. Saat ini, kami belum menyediakan pembahasan untuk soal-soal tersebut.",
    "value": "item-3"
  },
  {
    "question": "Apakah ada tutor atau fasilitator yang tersedia?",
    "answer": "Karena ini adalah platform mandiri, kami belum bekerja sama dengan tutor atau fasilitator saat ini. Namun, di masa depan, kami terbuka untuk kemungkinan kolaborasi dengan tutor profesional.",
    "value": "item-4"
  },
  {
    "question": "Berapa lama saya bisa mengakses aplikasi ini?",
    "answer": "Durasi akses tergantung pada paket yang Anda pilih:\n- Paket Trial: 14 hari.\n- Paket Berbayar Silver dan Gold: 3 bulan.\nPastikan jadwal UKMPPD Anda berada dalam periode tersebut untuk memaksimalkan manfaat aplikasi.",
    "value": "item-5"
  },
  {
    "question": "Bagaimana cara pembayaran di Berkompeten.com? Apakah bisa melalui transfer bank?",
    "answer": "Kami bekerja sama dengan payment gateway terpercaya yang mendukung berbagai metode pembayaran, termasuk QRIS, e-wallet, transfer bank, dan pembayaran melalui minimarket terdekat. Pilih metode yang paling nyaman untuk Anda.",
    "value": "item-6"
  },
  {
    "question": "Apakah Berkompeten.com bisa diakses melalui handphone?",
    "answer": "Ya, Berkompeten.com dapat diakses melalui handphone. Namun, untuk pengalaman terbaik dan fokus maksimal saat mengerjakan soal, kami menyarankan menggunakan PC atau laptop.",
    "value": "item-7"
  }
]
;
</script>

<template>
  <section
    id="faq"
    class="container md:w-[700px] py-24 sm:py-32"
  >
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">F.A.Q</h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold">
        Pertanyaan yang Sering Diajukan
      </h2>
    </div>

    <Accordion
      type="single"
      collapsible
      class="AccordionRoot"
    >
      <AccordionItem
        v-for="{ question, answer, value } in FAQList"
        :key="value"
        :value="value"
      >
        <AccordionTrigger class="text-left"> {{ question }} </AccordionTrigger>

        <AccordionContent>{{ answer }}</AccordionContent>
      </AccordionItem>
    </Accordion>

    <h3 class="font-medium mt-4">
      Still have questions?
      <a
        href="#"
        class="text-muted-foreground"
      >
        <a
          href="#"
          class="underline"
          >Contact us</a
        >
      </a>
    </h3>
  </section>
</template>
