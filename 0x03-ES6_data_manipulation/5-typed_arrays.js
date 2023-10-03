export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw Error('Position outside range');
  }
  // create the buffer
  const arrayBuffer = new ArrayBuffer(length);
  // create the view
  const view = new DataView(arrayBuffer);
  // insert the value at the given position
  view.setInt8(position, value);

  return view;
}
