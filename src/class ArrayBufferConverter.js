export default class ArrayBufferConverter {
  load(buffer) {
    return new Uint8Array(buffer);
  }

  toString(buffer) {
    return this.load(buffer).toString();
  }
}
