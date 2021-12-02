const inputTest = [
  { start: 10, end: 30 },
  { start: 20, end: 30 },
  { start: 40, end: 50 },
  { start: 10, end: 20 },
  { start: 45, end: 60 },
  { start: 60, end: 90 },
  { start: 70, end: 100 },
  { start: 60, end: 80 },
  { start: 125, end: 130 },
  { start: 75, end: 120 },
]

const unionOverlappingItems = array => {
  let sortedArray = array.sort((a, b) => a.start - b.start);
  for (let i = 0; i < sortedArray.length - 1; i++) {
    const currentItem = sortedArray[i];
    const nextItem = sortedArray[i+1];
    if (currentItem.end < nextItem.start) {
      continue;
    } else if (currentItem.end >= nextItem.start) {
      sortedArray[i+1] = { start: currentItem.start, end: Math.max(currentItem.end, nextItem.end) };
      sortedArray[i] = null;
    } else {
      continue;
    }
  }
  const result = sortedArray.filter(element => !!element);
  return result;
}

console.log(`result:`, unionOverlappingItems(inputTest))