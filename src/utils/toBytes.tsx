export const toBytes = (bytes: number) => {
  const gbValue = bytes / (1024 * 1024 * 1024);
  const formattedValue =
    gbValue % 1 === 0 ? gbValue.toFixed(0) : gbValue.toFixed(2);
  return `${formattedValue} GB`;
};
export const bytesToMB = (bytes: number) => {
  const megabytes = bytes / (1024 * 1024);
  const formattedValue =
    megabytes % 1 === 0 ? megabytes.toFixed(0) : megabytes.toFixed(2);
  return `${formattedValue} MB`;
};
