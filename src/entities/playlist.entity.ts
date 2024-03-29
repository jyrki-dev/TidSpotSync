import { Track } from '../interfaces/track.interface';
import { User } from '../interfaces/user.interface';

export class PlaylistEntity {
  id: string;
  name: string;
  description?: string;
  tracks: Track[];
  trackCount: number;
  totalLength: number;
  createdBy?: User;
  createdAt?: Date;

  updateTrackCount(): number {
    this.trackCount = this.tracks.length - 1;
    return this.trackCount;
  }
}
