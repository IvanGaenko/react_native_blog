// App Imports
import { getFirstLetters, postsCount } from '../utils';

const namesTest = {
  correct: 'Hello World',
  wrong: 'Mr. Hello World',
  correctResult: 'HW',
  one: '1',
  oneResult: '1 post',
  two: '2',
  twoResult: '2 posts',
};

describe('Utils', () => {
  it('getFirstLetters', () => {
    expect(getFirstLetters(namesTest.correct)).toBe(namesTest.correctResult);
    expect(getFirstLetters(namesTest.wrong)).toBe(namesTest.correctResult);
  });

  it('postsCount', () => {
    expect(postsCount(namesTest.one)).toBe(namesTest.oneResult);
    expect(postsCount(namesTest.two)).toBe(namesTest.twoResult);
  });
});
