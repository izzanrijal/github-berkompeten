<template>
  <header
    class="w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border z-40 rounded-2xl flex justify-between items-center p-4 bg-card shadow-md"
  >
    <!-- Logo + Text -->
    <a href="/" class="flex items-center space-x-3">
      <img
        src="@/assets/logo.svg"
        alt="Berkompeten Logo"
        class="h-9 w-auto"
      />
      <span class="text-lg font-bold text-foreground">Berkompeten.id</span>
    </a>

    <!-- Desktop Navigation -->
    <NavigationMenu class="hidden lg:flex">
      <NavigationMenuList class="flex space-x-4">
        <NavigationMenuItem>
          <NavigationMenuTrigger class="bg-transparent text-base">
            Features
          </NavigationMenuTrigger>
        </NavigationMenuItem>
        <NavigationMenuItem v-for="{ href, label } in routeList" :key="label">
          <NavigationMenuLink as-child>
            <a
              :href="href"
              class="text-base font-medium text-foreground hover:text-primary"
            >
              {{ label }}
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

    <!-- Call-to-Action Button -->
    <Button class="hidden lg:block bg-primary text-white hover:bg-primary/90">
      <a href="#" class="flex items-center gap-2">
        <span>Coba Sekarang</span>
      </a>
    </Button>

    <!-- Mobile Navigation -->
    <div class="lg:hidden">
      <Sheet v-model:open="isOpen">
        <SheetTrigger as-child>
          <Menu class="cursor-pointer" />
        </SheetTrigger>

        <SheetContent
          side="left"
          class="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card"
        >
          <div>
            <!-- Mobile Header -->
            <SheetHeader class="mb-4 ml-4">
              <SheetTitle class="flex items-center space-x-3">
                <img
                  src="@/assets/logo.svg"
                  alt="Berkompeten Logo"
                  class="h-8 w-auto"
                />
                <span class="text-base font-bold text-foreground">
                  Berkompeten.id
                </span>
              </SheetTitle>
            </SheetHeader>

            <!-- Mobile Navigation Links -->
            <div class="flex flex-col gap-2">
              <Button
                v-for="{ href, label } in routeList"
                :key="label"
                as-child
                variant="ghost"
                class="justify-start text-base"
              >
                <a
                  @click="isOpen = false"
                  :href="href"
                  class="text-base text-foreground"
                >
                  {{ label }}
                </a>
              </Button>
            </div>
          </div>

          <SheetFooter class="flex-col sm:flex-col justify-start items-start">
            <Separator class="mb-2" />
            <Button class="w-full bg-primary text-white">
              <a href="#" class="flex items-center gap-2">
                <span>Coba Sekarang</span>
              </a>
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Menu } from "lucide-vue-next";

// Import logo
import logoSvg from "@/assets/logo.svg";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  { href: "#testimonials", label: "Testimonials" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
  { href: "#faq", label: "FAQ" },
];

const isOpen = ref(false);
</script>

<style scoped>
img {
  max-height: 2.5rem;
}
a {
  text-decoration: none;
}
</style>
