import { Book } from '../models/book';
export const BOOKS: Book[] = [
  {
    id: randomId(),
    title: 'stranger in a strange land',
    author: 'robert',
    publisher: 'G. P. Punham',
    year: 1961,
    pages: 200
  },
  {
    id: randomId(),
    title: 'stranger in a strange land',
    author: 'robert',
    publisher: 'G. P. Punham',
    year: 1961,
    pages: 200
  },
  {
    id: randomId(),
    title: 'stranger in a strange land',
    author: 'robert',
    publisher: 'G. P. Punham',
    year: 1961,
    pages: 200
  },
  {
    id: randomId(),
    title: 'stranger in a strange land',
    author: 'robert',
    publisher: 'G. P. Punham',
    year: 1961,
    pages: 200
  },
  {
    id: randomId(),
    title: 'stranger in a strange land',
    author: 'robert',
    publisher: 'G. P. Punham',
    year: 1961,
    pages: 200
  }
];
function randomId(): number {
  return Math.floor(Math.random() * 1000);
}
