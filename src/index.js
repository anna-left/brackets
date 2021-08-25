module.exports = function check(str, bracketsConfig) {
    let openBrack = [];
    let pairBrack = {};
    bracketsConfig.forEach((element) => {
        openBrack.push(element[0]);
        pairBrack[`${element[1]}`] = element[0];
    })
    let stackBrack = [];
    for (let i = 0; i < str.length; i++) {
        let curSymb = str[i];
        // ищем парную (открывающую) скобку к нашему текущему элементу
        let pairSymb = pairBrack[curSymb];
        //находим верхний элемент в стеке
        let topElStack = stackBrack[stackBrack.length - 1];
        //если это открывающая скобка 
        if (openBrack.includes(curSymb)) {
            // открывающая и закрывающая - одинаковые
            if (curSymb === pairSymb && curSymb === topElStack) {
                stackBrack.pop();
            } else {
                // - кладем ее в стек
                stackBrack.push(curSymb);
            }


        } else { //если закрывающая
            //стек пуст - скобка непарная - ошибка
            if (stackBrack.length === 0) {
                return false;
            }
            // и если это и есть верхний элемент стека, обе скобки удаляем
            if (pairSymb === topElStack) {
                stackBrack.pop();
            } else {
                return false;
            }
        }
    }
    return stackBrack.length === 0;
}
