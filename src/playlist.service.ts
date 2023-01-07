import { Playlist } from './interfaces/playlist.interface';
import { Track } from './interfaces/track.interface';

export class PlaylistService {
  addTracksToPlaylist(tracks: Track[], playlist: Playlist): Playlist {
    const modifiedPlaylist = { ...playlist };
    modifiedPlaylist.tracks = playlist.tracks.concat(tracks);
    modifiedPlaylist.totalLength = playlist.totalLength + playlist.totalLength;
    return modifiedPlaylist;
  }

  addSingleTrackToPlaylist(track: Track, playlist: Playlist): Playlist {
    return this.addTracksToPlaylist([track], playlist);
  }
}
