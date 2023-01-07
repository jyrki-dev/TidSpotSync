import { Artist } from '../interfaces/artist.interface';

export class GenreEntity {
  id: string;
  name: string;
  description: string;
  artists: Artist;
}
