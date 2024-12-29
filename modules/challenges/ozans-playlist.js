/**
 * Removes duplicate tracks from the playlist.
 * @param {string[]} playlist
 * @returns {string[]}
 */
export function removeDuplicates(playlist) {
  return [...new Set(playlist)];
}

/**
 * Checks if a track is in the playlist.
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean}
 */
export function hasTrack(playlist, track) {
  return playlist.includes(track);
}

/**
 * Adds a track to the playlist if it is not already present.
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]}
 */
export function addTrack(playlist, track) {
  if (!playlist.includes(track)) {
    return [...playlist, track];
  }
  return playlist;
}

/**
 * Deletes a track from the playlist.
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]}
 */
export function deleteTrack(playlist, track) {
  return playlist.filter(t => t !== track);
}

/**
 * Lists all unique artists in the playlist.
 * @param {string[]} playlist
 * @returns {string[]}
 */
export function listArtists(playlist) {
  const artists = playlist.map(track => track.split(' - ')[1]); // "Song Title - Artist Name".
  return [...new Set(artists)];
}