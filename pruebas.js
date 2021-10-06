 const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(param) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if(array[i] in count) {
        count[array[i]]++
      } else {
        count[array[i]] = 1
      }
    }
    return count
  }