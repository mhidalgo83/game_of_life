export const create2dArray = (num1, num2, num3) => {
    let arr = [];
    for (let i = 0; i < num1; i++) {
      arr[i] = [];
      for (let j = 0; j < num2; j++) {
        arr[i].push(num3);
      }
    }
    return arr;
  };