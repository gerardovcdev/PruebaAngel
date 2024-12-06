<template>
    <div class="button-container">
        <button class="button">{{ buttonLabel }}</button>
    </div>

</template>
  
<script lang="ts">
  import { defineComponent} from 'vue';

  export default defineComponent({
    components: {

    },
    props: {
        buttonLabel: {
            type: String,
            default: 'Boton',
        },
    },
    setup() {
    },
  });
</script>
  
<style scoped lang="sass">

.button-container
  @apply w-full

  @media screen and (min-width: 1030px)
    max-width: 30vw
    
.button
    @apply bg-orange-400 dark:bg-slate-200 text-white dark:text-orange-500 font-bold py-2 px-4 rounded-2xl w-full text-2xl cursor-pointer
    height: 4rem
    transition: all 0.3s ease
    &:hover
        @apply bg-orange-500 dark:bg-slate-300


</style>
  