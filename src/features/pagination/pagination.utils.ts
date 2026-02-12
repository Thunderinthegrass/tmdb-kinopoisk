
export const getPaginationRange = (
  current: number,
  total: number,
  delta = 1
): (number | string)[] => {
  // Получаем массив чисел, которые будут отображаться
  const numbers: number[] = [];

  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
      numbers.push(i);
    }
  }

  //финальный массив с многоточиями
  return numbers.reduce<(number | string)[]>((result, page, index) => {
    if (index > 0) {
      const prevPage = numbers[index - 1];
      const diff = page - prevPage;

      if (diff === 2) {
        result.push(prevPage + 1); // Пропущена одна страница
      } else if (diff > 2) {
        result.push("..."); // Пропущено несколько страниц
      }
    }

    result.push(page);
    // console.log(result)
    return result;
  }, []);
};