export const moneyConvert = (money: number) => {
  return money.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
};
