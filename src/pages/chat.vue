<template>
 <chatMessage />
</template>
<script lang="ts">
import { defineComponent} from 'vue';

import chatMessage from '../components/commons/chatMessage/chatMessage.vue';

export default defineComponent({
  components: {
    chatMessage
  },
  props: {

  },
  setup() {
  },
});
</script>

<style scoped lang="sass">


</style>
