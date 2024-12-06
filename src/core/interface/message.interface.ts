import { User } from '../interface/user.interface';

export interface Message {
    user: User;
    content: string;
    date: Date;
}