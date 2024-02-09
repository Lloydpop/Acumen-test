export const generateFakeData = (count: number) => {
  const fakeData = Array.from({ length: count }, (_, index) => {
    const randomFactor = Math.random() * 1000000;
    return {
      activeUsers:
        Math.sin(index / 2) * 100000 +
        Math.cos(index / 2) * 400000 +
        randomFactor +
        5000000,
    };
  });
  return fakeData;
};
