import { ref, watch } from 'vue';
import { User } from '../interface/user.interface';

const defaultUser: User = {
  fullName: 'Angel Aguilar',
  location: 'Pampatar, Venezuela',
  description: '"Soy un ingeniero en sistemas con 5 años de experiencia en desarrollo de software. Actualmente, ofrezco servicios de consultoría tecnológica para startups innovadoras. Me apasiona la inteligencia artificial y disfruto de la fotografía y el senderismo en mi tiempo libre."',
  age: 25,
  image: 'https://ih1.redbubble.net/image.5039263387.9016/st,extra_large,507x507-pad,600x600,f8f8f8.jpg',
  isFriend: false,
};

const gerardoUser: User = {
  fullName: 'Gerardo Vargas',
  location: 'Tacarigua, Venezuela',
  description: '"Soy un tio chill de cojones."',
  age: 23,
  image: 'https://imgmedia.larepublica.pe/640x371/larepublica/original/2024/12/02/674e1f7286bb7a5d812c209b.webp',
  isFriend: true,
};

const user = ref<User>(JSON.parse(localStorage.getItem('user') || JSON.stringify(defaultUser)));

const saveUser = () => {
  localStorage.setItem('user', JSON.stringify(user.value));
};

const friendAdd = () => {
  user.value.isFriend = !user.value.isFriend;
  saveUser();
};

watch(user, saveUser);

export function useUser() {
  return {
    user,
    friendAdd,
    saveUser,
    gerardoUser
  };
}