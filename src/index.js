module.exports = function check(str, bracketsConfig) {
  let openedBrackets = [];
  let closedBrackets = [];
  let bracketsStack = [];
  let lastItem;
  for (let i = 0; i < bracketsConfig.length; i++) {
    openedBrackets.push(bracketsConfig[i][0]);
    closedBrackets.push(bracketsConfig[i][1]);
  }
  for (let i = 0; i < str.length; i++) {
    if (closedBrackets.includes(str[i]) && bracketsStack.length === 0 && !openedBrackets.includes(str[i])) {
      return false;
    } else if (openedBrackets.includes(str[i]) && !closedBrackets.includes(str[i])) {
      bracketsStack.push(str[i]);
    } else if (openedBrackets.includes(str[i]) && closedBrackets.includes(str[i])) {
        if (!bracketsStack.includes(str[i])){
          bracketsStack.push(str[i]);
        } else {
          bracketsStack.pop();
        }
    } else if (closedBrackets.includes(str[i]) && bracketsStack.length > 0) {
      lastItem = bracketsStack[bracketsStack.length-1];
      if (openedBrackets.indexOf(lastItem) === closedBrackets.indexOf(str[i])) {
        bracketsStack.pop();
      } else {
        return false;
      }
    } 
  }
  return bracketsStack.length === 0;
};
