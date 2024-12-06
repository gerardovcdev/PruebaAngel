<template>
    <div class="profile-image">
        <RouterLink to="/chat"><img :src="userImage" alt="Profile image" /></RouterLink>
        <div class="status-indicator">ONLINE</div>
        <div v-if="isFriend" class="status-indicator--friend"><CustomIcon class="friend-icon"  icon="friend" /></div>
        <div v-else class="status-indicator--friend friend-add"><CustomIcon class="friend-icon add-friend"  icon="addFriend" /></div>
    </div>

</template>
  
<script lang="ts">
  import { defineComponent} from 'vue';
import CustomIcon from '../customIcon/customIcon.vue';

  export default defineComponent({
    components: {
        CustomIcon
    },
    props: {
        userImage: {
            type: String,
            default: 'https://ih1.redbubble.net/image.5039263387.9016/st,extra_large,507x507-pad,600x600,f8f8f8.jpg',
        },
        isFriend: {
            type: Boolean,
            default: true,
        },
    },
    setup() {
    },
  });
</script>
  
<style scoped lang="sass">

.profile-image
  @apply relative 
  height: 60vw
  width: 60vw
  @media screen and (min-width: 1030px)
    height: 20vw
    width: 20vw
  img
    @apply w-full h-full object-cover rounded-full 

.status-indicator
  @apply absolute top-0 right-0 bg-green-400 dark:bg-gray-200 dark:text-orange-500 text-white text-2xl rounded-full flex items-center justify-center font-medium p-4
  height: 8rem
  width: 8rem
  transform: translate(25%, -10%)

  &--friend
    @apply absolute top-auto right-auto bg-blue-400 dark:bg-yellow-400 dark:text-orange-500 text-white text-2xl rounded-full flex items-center justify-center font-medium p-4
    height: 4rem
    width: 4rem
    transform: translate(57%, -126%)
    .friend-icon
      @apply text-xl text-white relative

.friend-add
  @apply bg-orange-400 dark:bg-green-500 dark:text-orange-500 text-white text-2xl rounded-full flex items-center justify-center font-medium p-4
    
</style>
  