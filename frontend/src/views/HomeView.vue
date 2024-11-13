<template>
  <div class="home">
    <HeroHeader/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroHeader from '@/components/HeroHeader.vue';

export default {
  name: 'HomeView',
  components: {
    HeroHeader
  }
}
</script>
