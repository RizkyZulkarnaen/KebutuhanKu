<template>
    <IconField>
        <InputText class="!rounded-full !h-10 !w-60" v-model="value1" placeholder="Search" />
        <InputIcon class="pi pi-search" />
    </IconField>
</template>

<script>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';

export default {
name: 'SearchComponent',
components: {
    InputText,
    IconField,
    InputIcon
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