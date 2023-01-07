import { Album } from '../interfaces/album.interface';
import { Track } from '../interfaces/track.interface';

export class ArtistEntity {
  id: string;
  name: string;
  tracks: Track[];
  albums?: Album[];
}
