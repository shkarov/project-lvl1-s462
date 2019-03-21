
export const getRandomInt = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

export const getSignRandom = (num) => {
  if (num === 1) {
    return '+';
  }
  if (num === 2) {
    return '-';
  }
  if (num === 3) {
    return '*';
  }
  return '';
};

export const calculateNums = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return num1;
  }
};

export const welcome = () => console.log('Welcome to the Brain Games!');

export const ruleOfGame = ruleGame => console.log(ruleGame);

export const helloPlayer = player => console.log(`Hello, ${player} !`);
