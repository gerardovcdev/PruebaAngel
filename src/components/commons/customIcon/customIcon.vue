<template>
    <component :is="icon" />
</template>
  
<script lang="ts">

import { defineComponent } from 'vue';
  
import * as components from '././../../../assets/icons';
  
  export default defineComponent({
    components: { ...components },
    props: {
      icon: {
        type: String,
        required: true,
      },
    },
  });
</script>
  