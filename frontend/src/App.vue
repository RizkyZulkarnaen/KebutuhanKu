<template>
  <nav>
    <div class="card">
        <Menubar class="!border-none !rounded-none">
            <template #start>
              <div>
                <a class="inline-flex items-center gap-x-1 text-xl font-semibold dark:text-white focus:outline-none focus:opacity-80" href="#" aria-label="Brand">
                  <img class="w-10 h-auto" src="./assets/logo.png" alt="Logo">
                  <span class="font-semibold text-2xl dark:text-white lg:block md:block hidden">
                    KebutuhanKu
                  </span>
                </a>
              </div>
            </template>
            <template #end>
              <div class="inline-flex items-center gap-2">
                  <searchcomponent/>
                  <Button label="Account" variant="outlined" icon="pi pi-user" class="!items-baseline"/>
                  <Button label="Cart" icon="pi pi-shopping-cart" variant="outlined" aria-label="Filter" class="!items-baseline"/>
                </div>
            </template>
        </Menubar>
        <MegaMenu :model="items" class="!border-none !rounded-none !py-0 px-2 !text-start !md:block"/>
      </div>
    </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@media (max-width: 768px) {
  .p-megamenu {
    display: none !important;
  }
}
</style>

<script setup>
import { ref } from "vue";
import Menubar from 'primevue/menubar';
import MegaMenu from 'primevue/megamenu';
import Button from 'primevue/button';
import searchcomponent from './components/Search.vue';

const items = ref([
    {
        label: 'Furniture',
        icon: 'pi pi-box',
        items: [
            [
                {
                    label: 'Living Room',
                    items: [{ label: 'Accessories' }, { label: 'Armchair' }, { label: 'Coffee Table' }, { label: 'Couch' }, { label: 'TV Stand' }],
                }
            ],
            [
                {
                    label: 'Kitchen',
                    items: [{ label: 'Bar stool' }, { label: 'Chair' }, { label: 'Table' }]
                },
                {
                    label: 'Bathroom',
                    items: [{ label: 'Accessories' }]
                }
            ],
            [
                {
                    label: 'Bedroom',
                    items: [{ label: 'Bed' }, { label: 'Chaise lounge' }, { label: 'Cupboard' }, { label: 'Dresser' }, { label: 'Wardrobe' }]
                }
            ],
            [
                {
                    label: 'Office',
                    items: [{ label: 'Bookcase' }, { label: 'Cabinet' }, { label: 'Chair' }, { label: 'Desk' }, { label: 'Executive Chair' }]
                }
            ]
        ]
    },
    {
        label: 'Electronics',
        icon: 'pi pi-mobile',
        items: [
            [
                {
                    label: 'Computer',
                    items: [{ label: 'Monitor' }, { label: 'Mouse' }, { label: 'Notebook' }, { label: 'Keyboard' }, { label: 'Printer' }, { label: 'Storage' }]
                }
            ],
            [
                {
                    label: 'Home Theater',
                    items: [{ label: 'Projector' }, { label: 'Speakers' }, { label: 'TVs' }]
                }
            ],
            [
                {
                    label: 'Gaming',
                    items: [{ label: 'Accessories' }, { label: 'Console' }, { label: 'PC' }, { label: 'Video Games' }]
                }
            ],
            [
                {
                    label: 'Appliances',
                    items: [{ label: 'Coffee Machine' }, { label: 'Fridge' }, { label: 'Oven' }, { label: 'Vaccum Cleaner' }, { label: 'Washing Machine' }]
                }
            ]
        ]
    },
    {
        label: 'Sports',
        icon: 'pi pi-clock',
        items: [
            [
                {
                    label: 'Football',
                    items: [{ label: 'Kits' }, { label: 'Shoes' }, { label: 'Shorts' }, { label: 'Training' }]
                }
            ],
            [
                {
                    label: 'Running',
                    items: [{ label: 'Accessories' }, { label: 'Shoes' }, { label: 'T-Shirts' }, { label: 'Shorts' }]
                }
            ],
            [
                {
                    label: 'Swimming',
                    items: [{ label: 'Kickboard' }, { label: 'Nose Clip' }, { label: 'Swimsuits' }, { label: 'Paddles' }]
                }
            ],
            [
                {
                    label: 'Tennis',
                    items: [{ label: 'Balls' }, { label: 'Rackets' }, { label: 'Shoes' }, { label: 'Training' }]
                }
            ]
        ]
    }
]);
</script>
