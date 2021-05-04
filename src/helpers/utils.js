export function getFirstLetters(name) {
  return name.split(' ').reduce((result, word) => {
    if (word.includes('.')) return '';
    const res = result + word[0];
    return res;
  }, '');
}

export function postsCount(count) {
  return `${count} post${count > 1 ? 's' : ''}`;
}
