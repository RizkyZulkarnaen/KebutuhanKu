<template>
    <div class="flex items-center">
        <InputText v-model="searchQuery" placeholder="Search..." class="w-full p-inputtext-sm p-component" />
        <Button icon="pi pi-search" @click="onSearch" class="ml-2 p-button-sm" />
    </div>
</template>

<script>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

export default {
name: 'SearchComponent',
components: {
    InputText,
    Button
},
setup() {
    const searchQuery = ref('');

    const onSearch = () => {
    console.log('Search query:', searchQuery.value);
    // Implement search logic here
    };

    return {
    searchQuery,
    onSearch
    };
}
};
</script>