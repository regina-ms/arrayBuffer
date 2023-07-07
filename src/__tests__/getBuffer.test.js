import getBuffer from '../func getBuffer';

test('should return arraybuffer', () => {
  expect(getBuffer()).toBeInstanceOf(ArrayBuffer);
});
