import { Track } from '../interfaces/track.interface';
import { User } from '../interfaces/user.interface';

export class PlaylistEntity {
  id: string;
  name: string;
  description?: string;
  tracks: Track[];
  // TODO: make calculated
  trackCount: number;
  totalLength: number;
  createdBy?: User;
  createdAt?: Date;
}
