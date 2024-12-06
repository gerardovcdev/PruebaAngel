<template>
    <div class="chat-message-container">
      <div ref="chatScroll" class="chat-scroll">
        <div class="chat-message-grid" 
             v-for="message in messages" 
             :key="message.date" 
             :class="{'my-message': message.user.fullName === gerardoUser.fullName, 'default-message': message.user.fullName !== gerardoUser.fullName}">
          <div class="chat-message--user">
            <img :src="message.user.image" alt="avatar" class="chat-message--avatar">
            <span class="chat-message--name">{{ message.user.fullName }}</span>
          </div>
          <div :class="['chat-message--message-box', message.user.fullName === gerardoUser.fullName ? 'my-message' : 'default-message']">
            <div class="chat-message--message">
              <p>{{ message.content }}</p>
            </div>
            <div class="chat-message--date">
              <p>{{ formatDate(message.date) }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="chat-input">
        <input v-model="newMessage" @keydown.enter="sendMessage" placeholder="Escribe un mensaje" />
        <button @click="sendMessage">Enviar</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted, ref, nextTick } from 'vue';
  import { useMessages } from '../../../core/composable/useMessages';
  import { useUser } from '../../../core/composable/useUser';
  
  export default defineComponent({
    setup() {
      const { messages, createMessage } = useMessages();
      const { user: gerardoUser } = useUser();
      const newMessage = ref('');
      const chatScroll = ref<HTMLElement | null>(null);
  
      const scrollToBottom = () => {
        nextTick(() => {
          if (chatScroll.value) {
            chatScroll.value.scrollTop = chatScroll.value.scrollHeight;
          }
        });
      };
  
      onMounted(() => {
        scrollToBottom();
      });
  
      const sendMessage = async () => {
        if (newMessage.value.trim()) {
          await createMessage(newMessage.value);
          newMessage.value = '';
          scrollToBottom();
        }
      };
  
      const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleString();
      };
  
      return {
        messages,
        newMessage,
        sendMessage,
        formatDate,
        gerardoUser,
        chatScroll,
      };
    },
  });
  </script>
  
<style scoped lang="sass">

.chat-message-container
  @apply p-5

.chat-scroll
  @apply overflow-y-auto px-8
  max-height: 80vh

.chat-message-grid
  @apply grid gap-3 mb-3 py-4
  grid-template-rows: auto 1fr aut
  border-bottom: 1px solid #ccc
  
.chat-message
    
    &--user
      @apply flex items-center
        
    &--avatar
      @apply w-14 h-14 rounded-full mr-2
      

    &--name 
      @apply font-bold dark:text-white text-2xl
    
    &--message
      @apply dark:text-gray-950 text-xl font-normal
      grid-column: span 2

    &--date 
      @apply text-right text-sm text-gray-700

.chat-input
  @apply flex gap-4 mt-5
  
  input
    @apply flex-1 p-3 border rounded-md border-gray-300 
  
  button
    @apply p-3 bg-orange-500 dark:bg-blue-600 text-white font-medium rounded-md cursor-pointer border-none w-28

.my-message
  @apply justify-end text-right

.my-message .chat-message--message
  @apply order-1
  
.my-message .chat-message--date
  @apply order-3

.chat-message--message-box
  @apply p-3 rounded-lg

  &.my-message
    @apply bg-gray-400 dark:bg-yellow-200 text-black

  &.default-message
    @apply bg-orange-500 dark:bg-gray-200 text-white justify-start

.default-message
  @apply justify-start text-left

</style>