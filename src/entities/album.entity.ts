import { Artist } from '../interfaces/artist.interface';
import { Track } from '../interfaces/track.interface';

export class AlbumEntity {
  id: string;
  name: string;
  artist: Artist;
  tracks: Track[];
  trackCount: number;
  lenght?: number | string | Date;
  cover?: BinaryType | URL;
  artists?: string[];
  duration?: number | string | Date;
  releaseDate?: Date;
}
