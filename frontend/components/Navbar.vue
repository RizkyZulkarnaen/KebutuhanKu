<template>
    <nav class="bg-white shadow-md">
      <div class="container mx-auto px-4 md:px-8">
        <!-- Navbar untuk Desktop -->
        <div class="hidden md:flex justify-between items-center py-4">
            <!-- Logo -->
            <div class="items-center">
              <p class="text-2xl font-bold text-green-600">
                KebutuhanKu
              </p>
            </div>

            <div class="w-full px-14">
              <UInput
                :ui="{ rounded: 'rounded-full' }"
                icon="i-heroicons-magnifying-glass-20-solid"
                size="md"
                color="white"
                :trailing="false"
                placeholder="Search..."
              />
            </div>

            <!-- Action Buttons -->
            <div class="flex gap-x-6 items-center">
              <div class="flex gap-x-2">
                <!-- notifikasi -->
                <div>
                  <UPopover :popper="{ arrow: true }">
                    <UChip inset text="4" size="md" >
                      <UButton icon="i-heroicons-bell" color="gray" variant="link" />
                    </UChip>
    
                    <template #panel>
                      <div class="p-4">
                        <Placeholder class="h-20 w-48"/>
                      </div>
                    </template>
                  </UPopover>
                </div>
                
                <!-- cart -->
                <div>
                  <UChip inset text="4" size="md">
                    <UButton icon="i-material-symbols:shopping-cart-outline-rounded" color="gray" variant="link"/>
                  </UChip>
                </div>
              </div>

              <div class="border-l border-slate-200 ml-2 pl-6 dark:border-slate-800">
                <div v-if="auth">
                  <UPopover :popper="{ arrow: true }">
                      <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Avatar" size="md"/>
                    <template #panel>
                      <div class="p-4">
                        <Placeholder class="h-20 w-48" />
                      </div>
                    </template>
                  </UPopover>
                </div>
                <div v-else>
                  <div class="flex gap-x-2">
                    <UButton color="primary" variant="solid">Register</UButton>
                    <UButton color="primary" variant="solid">Login</UButton>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <!-- Navbar untuk Mobile -->
        <div class="flex md:hidden justify-between items-center py-4">
            <!-- Logo -->
            <div class="text-2xl font-bold text-purple-600">
                MyBrand
            </div>
            <!-- Hamburger Menu -->
            <button @click="toggleMenu" class="text-gray-600 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>

        <!-- Mobile Menu -->
        <div v-if="menuOpen" class="md:hidden flex flex-col space-y-4 py-4">
        
        </div>
      </div>
    </nav>
</template>
  
<script>
export default {
  data() {
    return {
      menuOpen: false,
      auth: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>