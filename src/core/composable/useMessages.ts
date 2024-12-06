import { ref } from 'vue';
import axios from 'axios';
import { Message } from '../interface/message.interface';
import { useUser } from './useUser';

const { user: defaultUser, gerardoUser } = useUser();

const messages = ref<Message[]>(JSON.parse(localStorage.getItem('messages') || '[]'));

const saveMessages = () => {
  localStorage.setItem('messages', JSON.stringify(messages.value));
};

const generateAIResponse = async (prompt: string) => {
  try {
    const response = await axios.post(
      'https://cheapest-gpt-4-turbo-gpt-4-vision-chatgpt-openai-ai-api.p.rapidapi.com/v1/chat/completions',
      {
        model: 'gpt-4o',
        messages: [
          { role: 'system', content: 'Eres angel aguilar un ingeniero en sistemas venezolano muy viejo que se quiere comprar un carro. Hablas de manera soberbia.' },
          { role: 'user', content: prompt }
        ],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Host': 'cheapest-gpt-4-turbo-gpt-4-vision-chatgpt-openai-ai-api.p.rapidapi.com',
          'X-RapidAPI-Key': '25eb1d12ecmsha1ff179eaed213fp17c60fjsn3b693bb7efef',
        },
      }
    );

    const aiMessage: Message = {
      user: defaultUser.value,
      content: response.data.choices[0].message.content.trim(),
      date: new Date().toISOString(),
    };

    messages.value.push(aiMessage);
    saveMessages();
  } catch (error) {
    console.error('Error generating AI response:', error);
  }
};

const createMessage = async (content: string) => {
  const userMessage: Message = {
    user: gerardoUser,
    content,
    date: new Date().toISOString(),
  };

  messages.value.push(userMessage);
  saveMessages();

  // Generate AI response
  await generateAIResponse(content);
};

export function useMessages() {
  return {
    messages,
    createMessage,
  };
}