<template>
    <div class="profile-container">
        <ProfileImage :userImage="user.image" :isFriend="user.isFriend" />
        <UserResume :user="user" />
        <CustomButton :buttonLabel="buttonLabel" @click="addToFriends()" />
    </div>
</template>
  
<script lang="ts">
import { defineComponent, computed} from 'vue';
import { useDark, useToggle } from "@vueuse/core";

import ProfileImage from '../components/commons/profileImage/profileImage.vue';
import UserResume from '../components/commons/userResume/userResume.vue';
import CustomButton from '../components/commons/customButton/customButton.vue';

import { useUser } from '../core/composable/useUser';
import Swal from 'sweetalert2'

export default defineComponent({
    components: {
        ProfileImage,
        UserResume,
        CustomButton,
    },
    props: {
    },
    setup() {

    const { user, friendAdd } = useUser();

    const buttonLabel = computed(() => {
      return user.value.isFriend ? 'Eliminar amigo' : 'Agregar amigo';
    });
        
    const isDark = useDark();
    const toggleDark = useToggle(isDark);

    const addToFriends = () => {
        friendAdd();
        toggleDark();
        const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })

            const wasFriend = user.value.isFriend;
            if (wasFriend) {
                Toast.fire({
              icon: 'success',
              title: 'Ahora eres amigo de ' + user.value.fullName
            })
            } else {
                Toast.fire({
              icon: 'error',
              title: 'Ya no eres amigo de ' + user.value.fullName
            })
               
            }
            
    }

    return {
        user,
        addToFriends,
        buttonLabel,
    }
    },
  });
</script>
  
<style scoped lang="sass">

.profile-container
  @apply w-full h-full grid place-items-center p-6 m-auto justify-center
  @media screen and (min-width: 1030px)
    max-width: 40vw

  
</style>
  