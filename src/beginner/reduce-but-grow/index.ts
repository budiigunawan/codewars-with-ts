const grow = (arr: number[]): number => {
  return arr.reduce((acc, curr) => acc * curr, 1);
};

export default grow;
