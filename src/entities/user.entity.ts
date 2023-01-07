import { Playlist } from '../interfaces/playlist.interface';

export class UserEntity {
  id: string;
  username: string;
  createdPlaylists?: Playlist[];
}
