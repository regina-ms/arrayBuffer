import ArrayBufferConverter from '../class ArrayBufferConverter';
import getBuffer from '../func getBuffer';

test('should create a new ArrayBufferConverter', () => {
  const data = new ArrayBufferConverter();
  expect(data).toBeInstanceOf(ArrayBufferConverter);
});

test('should return TypedArray', () => {
  const data = new ArrayBufferConverter();
  const buf = getBuffer();
  expect(data.load(buf)).toBeInstanceOf(Uint8Array);
});

test('should return string', () => {
  const data = new ArrayBufferConverter();
  const buf = getBuffer();
  expect(typeof data.toString(buf) === 'string').toBeTruthy();
});
