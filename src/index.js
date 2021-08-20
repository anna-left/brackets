module.exports = function check(str, bracketsConfig) {
 
    let openBrack = [];
    let pairBrack = {};
    conf.forEach((element) => {
        openBrack.push(element[0]);
        pairBrack[`${element[1]}`] = element[0];
    })
    let stackBrack = [];
    for (let i = 0; i < strBrack.length; i++) {
        let curSymb = strBrack[i];
        //если это открывающая скобка - кладем ее в стек
        if (openBrack.includes(curSymb)) {
            stackBrack.push(curSymb);
        }
        else { //если закрывающая
            //стек пуст - скобка непарная - ошибка
            if (stackBrack.length === 0) {
                return false;
            }
            //находим верхний элемент в стеке
            let topElStack = stackBrack[stackBrack.length - 1];
            // ищем парную (открывающую) скобку к нашему текущему элементу
            // и если это и есть верхний элемент стека, обе скобки удаляем
            if (pairBrack[curSymb] === topElStack) {
                stackBrack.pop();
            } else {
                return false;
            }
        }
    }
    return stackBrack.length === 0;
}
