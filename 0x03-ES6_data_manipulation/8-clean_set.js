export default function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  const result = [];
  set.forEach((element) => {
    if (element !== undefined && element.startsWith(startString)) {
      result.push(element.slice(startString.length));
    }
  });
  return result.join('-');
}
