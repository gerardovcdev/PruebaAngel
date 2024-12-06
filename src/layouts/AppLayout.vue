<template>
    <div class="app-layout">
        <HeaderBar />
        <router-view />
    </div>
</template>
  
<script lang="ts">
  import { defineComponent} from 'vue';
import HeaderBar from '../components/HeaderBar/HeaderBar.vue';
  export default defineComponent({
    components: {
      HeaderBar
    },
    props: {
    },
    setup() {
      // Setup logic here
    },
  });
</script>
  
<style scoped lang="sass">

.app-layout
  @apply w-full grid overflow-hidden dark:bg-gray-700
  grid-template-rows: max-content 1fr
  height: 100vh

</style>
  