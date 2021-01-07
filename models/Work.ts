import { Timestamp } from '@firebase/firestore-types';
export default interface Work {
    id: string
    name: string;
    description: string;
    uid?: string;
    link?: string;
    height: number;
    images: string[];
    categories: string[];
    createdAt: Timestamp;
}
