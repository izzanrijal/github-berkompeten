<script setup lang="ts">
import Separator from "./ui/separator/Separator.vue";

// Import the new logo
import logoSvg from "@/assets/logo.svg";
</script>

<template>
  <footer
    id="footer"
    class="container py-16 sm:py-24"
  >
    <div class="p-10 bg-muted/50 dark:bg-card border rounded-2xl">
      <!-- Logo Section -->
      <div class="flex items-center space-x-3 mb-6">
        <img
          src="@/assets/logo.svg"
          alt="Berkompeten Logo"
          class="h-10 w-auto"
        />
        <span class="text-xl font-bold">Berkompeten.id</span>
      </div>

      <!-- Essential Footer Links -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Contact Section -->
        <div>
          <h3 class="font-bold text-lg mb-2">Contact</h3>
          <p class="text-sm opacity-70">123 Competent Street</p>
          <p class="text-sm opacity-70">Jakarta, Indonesia</p>
          <p class="text-sm opacity-70">Email: <a href="mailto:support@berkompeten.id" class="text-primary">support@berkompeten.id</a></p>
          <p class="text-sm opacity-70">Phone: +62-123-456-7890</p>
        </div>

        <!-- FAQ Section -->
        <div>
          <h3 class="font-bold text-lg mb-2">FAQ</h3>
          <ul class="space-y-2">
            <li>
              <a href="#faq" class="text-sm opacity-70 hover:text-primary">What is Berkompeten?</a>
            </li>
            <li>
              <a href="#faq" class="text-sm opacity-70 hover:text-primary">How do I get started?</a>
            </li>
            <li>
              <a href="#faq" class="text-sm opacity-70 hover:text-primary">Pricing and Plans</a>
            </li>
          </ul>
        </div>

        <!-- Social Media -->
        <div>
          <h3 class="font-bold text-lg mb-2">Follow Us</h3>
          <ul class="space-y-2">
            <li>
              <a href="https://twitter.com/berkompeten" target="_blank" class="text-sm opacity-70 hover:text-primary">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://instagram.com/berkompeten" target="_blank" class="text-sm opacity-70 hover:text-primary">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/company/berkompeten" target="_blank" class="text-sm opacity-70 hover:text-primary">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <h3 class="font-bold text-lg mb-2">Legal</h3>
          <ul class="space-y-2">
            <li>
              <a href="#privacy" class="text-sm opacity-70 hover:text-primary">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms" class="text-sm opacity-70 hover:text-primary">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Separator -->
      <Separator class="my-6" />

      <!-- Footer Credit -->
      <section class="text-center">
        <p class="text-sm opacity-70">
          &copy; 2024 Made with ❤︎ by
          <a
            target="_blank"
            href="https://github.com/leoMirandaa"
            class="text-primary transition-all border-primary hover:border-b-2"
          >
            Berkompeten.id Team
          </a>
        </p>
      </section>
    </div>
  </footer>
</template>

<style scoped>
img {
  max-height: 2.5rem; /* Logo height consistency */
}

a {
  text-decoration: none;
}
</style>
