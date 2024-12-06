<template>
    <div class="user-resume-container">
        <div class="user-resume-grid">
            <h1 class="user--name">{{ user.fullName }}, {{ user.age }}</h1>
            <span class="user--location">{{ user.location }}</span>
            <p class="user--description">{{ user.description }}</p>
    
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, PropType} from 'vue';

import { User } from '../../../core/interface/user.interface';

export default defineComponent({
    components: {

    },
    props: {
        user: {
            type: Object as PropType<User>,
            default: () => ({})
        }
    },
    setup() {
    },
  });
</script>
  
<style scoped lang="sass">

.user

  &--name
    @apply text-4xl font-normal text-gray-900 dark:text-white

  &--location
    @apply text-xl font-medium text-orange-500

  &--description
    @apply text-2xl font-normal text-gray-800 mt-4 dark:text-white


</style>
  