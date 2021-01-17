import { Timestamp } from '@firebase/firestore-types';

export interface Certificate {
    title: string
    platform:string
    createdAt: Timestamp
    categories: string[]
    image: string[]
}
