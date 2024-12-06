<template>
    <div class="bg-gradient-to-b from-green-600 to-green-800">
        <div class="mt-16">
            <!-- Hero -->
            <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Grid -->
                <div class="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
                    <div class="lg:col-span-3">
                        <section class="py-16">
                            <div class="container mx-auto px-4">
                                <h1 class="text-white text-4xl sm:text-6xl font-bold leading-tight">
                                Temukan Kebutuhan Organik Anda di <span class="underline decoration-green-400">KebutuhanKu</span>
                                </h1>
                                <p class="text-white text-lg sm:text-xl mt-4 mb-4">
                                Belanja bahan-bahan organik berkualitas tinggi untuk gaya hidup sehat dan berkelanjutan.
                                </p>
                                <UButton
                                    :ui="{rounded:'rounded-full'}"
                                    icon="i-material-symbols:arrow-right-alt-rounded"
                                    size="xl"
                                    color="white"
                                    variant="solid"
                                    label="Mulai Belanja"
                                    :trailing="true"
                                    class="text-green-600 font-semibold"
                                />
                            </div>
                        </section>
                    </div>
                    <!-- End Col -->
    
                    <div class="hidden lg:block lg:col-span-4 mt-10 lg:mt-0">
                        <img src="/img/snapedit_1733393165607.png" class="drop-shadow-2xl" alt="product" />
                    </div>
                    <!-- End Col -->
                </div>
                <!-- End Grid -->
            </div>
            <!-- End Hero -->
        </div>
        <div>
            <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 mt-4 lg:grid-cols-3">
                    <div class="bg-white p-6">
                        <h2 class="text-2xl font-bold text-gray-800 dark:text-neutral-400">Embrace Nature, Live Purely</h2>
                        <p class="mt-3 text-gray-600 dark:text-neutral-300">Temukan produk organik terbaik yang mendukung gaya hidup sehat dan berkelanjutan.</p>
                    </div>
                    <div class="bg-white p-6">
                        <h2 class="text-2xl font-bold text-gray-800 dark:text-neutral-400">Development</h2>
                        <p class="mt-3 text-gray-600 dark:text-neutral-300">Development is the process of creating a computer program or a set of programs to perform tasks.</p>
                    </div>
                    <div class="bg-white p-6">
                        <h2 class="text-2xl font-bold text-gray-800 dark:text-neutral-400">Marketing</h2>
                        <p class="mt-3 text-gray-600 dark:text-neutral-300">Marketing refers to activities a company undertakes to promote the buying or selling of a product or service.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.drop-shadow-2xl {
    --tw-drop-shadow: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.4));
}
</style>