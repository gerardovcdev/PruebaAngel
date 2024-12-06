<template>
  <header class="header-container">
    <div class="header-grid">
      <CustomIcon class="back-icon" icon="atras" @click="$router.go(-1)"/>
      <h1>{{user.fullName}}</h1>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import CustomIcon from '../commons/customIcon/customIcon.vue';

import { useUser } from '../../core/composable/useUser';

export default defineComponent({
  components: {
    CustomIcon
  },
  props: {

  },
  setup() {
    const { user } = useUser();

    return{
      user,
    }
  },
});
</script>

<style scoped lang="sass">

.header-container
  @apply bg-orange-400 dark:bg-gray-800 text-white p-4 text-2xl text-center w-full font-medium

.header-grid
  @apply grid items-center
  grid-template-columns: max-content 1fr

.back-icon
  @apply text-xl cursor-pointer
</style>
