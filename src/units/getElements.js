export const getElements = (store) => {
  const elements = [];
  console.log('Refreshing elements');
  console.log('store >>', store)
  const obj = store.results;
  for (let i = 0; i < obj.length; i++) {
    // if (obj.labels[i].includes('element')) {
      elements.push(obj[i]);
    // }
  }

  return elements;
};
