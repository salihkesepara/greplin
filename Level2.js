// Referanses
// https://github.com/KartikTalwar/Puzzles/tree/master/Cue
// https://github.com/sangupta/greplin/tree/master/src/com/sangupta/greplin


(function (num) {
    var go = true;

    // Girilen sayı ile bir döngü başlatılır.
    while (go) {
        // Döngü her tekrar ettiğinde girilen sayı 1 arttırılır.
        ++num;
        // Arttırılan sayı için fibonacci ve asal sayı kontrlleri yapılır.
        if (isFib(num) && isPrime(num)) {
            // Şartın sağlanması durumunda sayı bir arttırılır.
            ++num;
            // Arttırılan sayının asal toplamları hesaplanır ve ekrana yazdırılır.
            console.log(sum(num));
            // Döngüden çıkılır.
            go = false;
        }
    }

    // Referenses
    // http://justindavis.co/2014/10/30/determine-if-a-number-is-in-the-fibonacci-series-using-javascript/
    function isFib(val){
        var prev = 0;
        var curr = 1;
        var status = false;
        while(!status && prev<=val){
            if (prev === val){
                status = true;
            }
            curr = prev + curr;
            prev = curr - prev;
        }

        return status;
    }

    function isPrime(n) {
        var status = true;
        // 2 den başlayarak girilen sayıya kadar döngü kur.
        for (var i = 2; i < n; i++) {
            // Girilen sayının i ye modulus' ü 0 a eşit ise;
            if (n % i === 0) {
                // Döngüyü durdur ve status ü false olarak güncelle.
                status = false
                break;
            };
        }

        return status;
    }

    function sum(n) {
        var total = 0,
        isPrime;
        // 1 den n e kadar döngü kurulur
        for (var i = 1; i <= n; i++)
        {
            // n, i ye kalansız bölünüyor ise;
            if (n % i === 0)
            {
                // 2 den i ye kadar döngü kur.
                for (var j = 2; j < i; j++)
                {
                    // i, j ye kalansız bölünmüyor ise;
                    if (i % j !== 0)
                    {
                        // Asal.
                        isPrime = true;
                    }
                    else {
                        // Asal değil!
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime || i === 2)
                    total += i;
            }
        }
        return total;
    }
})(227000);
