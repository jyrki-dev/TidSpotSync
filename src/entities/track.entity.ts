import { Artist } from '../interfaces/artist.interface';
import { Genre } from '../interfaces/genre.interface';

export class TrackEntity {
  id: string;
  name: string;
  artist: Artist;
  featuring: Artist[];
  length: number;
  genre?: Genre;
}
