// Referanses
// https://github.com/KartikTalwar/Puzzles/tree/master/Cue
// https://github.com/sangupta/greplin/tree/master/src/com/sangupta/greplin


(function (arr) {
  var count = 0;
  // Grilen array kadar döngü kur.
  arr.forEach(function(item) {
    // Array içerisindeki her item için sum fonsiyonunu çağır ve topla.
    count += sum(item, 0);
  });

  count -= arr.length;
  console.log(count);

  function sum(item, i) {
    var num = arr[i];

    if(item < num) {
			return 0;
		}

    if(item > num) {
			return sum((item - num), i + 1) + sum(item, i + 1);
		}

    // item ile num değerleri birbirine eşit ise count değerini 1 arttır.
    return 1;
  }

})([3, 4, 9, 14, 15, 19, 28, 37, 47, 50, 54, 56, 59, 61, 70, 73, 78, 81, 92, 95, 97, 99]);
