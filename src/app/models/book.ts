export class Book {
  id: number;
  title: string;
  author: string;
  pages: number;
  year: number;
  publisher: string;
  constructor(createId = true) {
    // if (createId) {
    //   this.id = Math.floor(Math.random() * 1000);
    // }
  }
}
