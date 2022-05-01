# TidSpotSync

Application for syncing Tidal and Spotify playlists.

## Description

Tool for synchronising and managing playlists in Tidal
and Spotify. Also includes the features to 'send' playlists from one service to
another, querying playlist information, and creating and deleting playlists.

## Functionality

The main function of the application runs a query for an users playlists in both
services, and then compares contents of each requests, then creating, modifying
or deleting playlists and their contents accordingly.

The application will attemps to add exact matches for songs, but if no exact
match is found, it will search and add the nearest `artist - song` match. If no
matching song if found from the artists, the event will be logged and the user
will be informed in the action conclusion report.

***For example:***

> A Spotify playlist `PartyPlaylist` contains a song called `Famous Band - Popular Song (2020 Remaster)`.
>
> TidSpotSync will then search for the exact match in Tidal, but if none is found, it will search for `Famous Band - Popular Song` and attempt adding that version to the Tidal playlist `PartyPlayList`. (The playlist will be created if no matching playlist is found in Tidal).
>
> If no match is found, the song will be skipped.

## Planned Features

- [ ] Rewrite in TypeScript, following OOP / Clean Architecture paradigms more strictly.
- [ ] Encrypted .env files
- [ ] Cross platform compatible Chromium wrapper / desktop application
- [ ] Containerisation with Docker
- [ ] Chromium extension

## Getting Started

### Dependencies

* NodeJS (version >= 17.9.0 )
* npm (version >= 8.5.5)
* Google Chrome / Chromium / Firefox / Microsoft Edge
* macOS / Linux / Windows (tested in macOS & Linux)

### Installing

*To be changed*

1. Clone the repository: `git clone https://github.com/jyjokokk/TidSpotSync.git`
2. Enter the cloned repository: `cd TidSpotSync`
3. Run `npm install`

### Executing program

1. Run `./tidSpotSync` in the installation directory
2. Navigate to <http://localhost:8080/>

## Help

Currently only in the documentation.

## Authors

[jyjokokk](mailto:j.j.kokkola@gmail.com)

## Version History

* 0.1
    * Initial Release

## License

This project is licensed under the MIT License - see the LICENSE file for details
