export const sortItemsText = (a, b) => {
  const titleA = a.title.toUpperCase();
  const titleB = b.title.toUpperCase();
  return titleA < titleB ? -1 : 1;
};

export const sortItemsNumber = (a, b) => {
  return a - b;
};
