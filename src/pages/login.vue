<template>
   <div class="login-container">
    <div class="login-card">
        <CustomIcon class="login--icon" icon="login" />
        <h1 class="login--title">Inicio de sesion</h1>
        <p class="login--label">Haz click para iniciar sesion</p>
        <router-link to="profile">
            <CustomButton buttonLabel="Iniciar sesion" />
        </router-link>
    </div>
   </div>
    
</template>
<script lang="ts">
import { defineComponent} from 'vue';
import CustomButton from '../components/commons/customButton/customButton.vue';
import CustomIcon from '../components/commons/customIcon/customIcon.vue';

export default defineComponent({
    components: {
        CustomButton,
        CustomIcon
    },
    props: {
  
    },
    setup() {

  
      return{
      }
    },
  });
</script>
  
<style scoped lang="sass">

.login-container
  @apply flex items-center justify-center h-screen bg-gray-200

.login-card
  @apply flex flex-col items-center justify-evenly bg-gray-100 border border-orange-200 rounded-2xl p-4 shadow-sm m-auto px-11
  min-height: 80vh
  min-width: 30vw

  @media screen and (max-width: 1030px)
    @apply w-full
    height: 100vh

.login

  &--icon
    @apply text-6xl text-blue-500

  &--title
    @apply text-5xl font-semibold text-orange-500 text-center

  &--label
    @apply text-3xl text-gray-700 text-center font-normal

  
  
</style>
  