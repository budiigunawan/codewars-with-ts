const reverseSeq = (n: number): number[] => {
  return [...Array(n)].map((el, idx) => n - idx);
};

export default reverseSeq;
