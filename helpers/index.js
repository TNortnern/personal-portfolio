export const getMediaItem = (media) => {
  const wantedFormat = 'medium'
  if (!media) return
  return media.formats[wantedFormat] && media.formats[wantedFormat].url
    ? media.formats[wantedFormat].url
    : media.url
  // return media.formats.medium.url
}
