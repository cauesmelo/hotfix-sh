export const getReadingTime = (text: string) => {
  const wordsPerMinute = 165;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};
