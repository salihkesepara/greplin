// Referanses
// http://articles.leetcode.com/longest-palindromic-substring-part-ii
// https://en.wikipedia.org/wiki/Longest_palindromic_substring
// http://stackoverflow.com/questions/1115001/write-a-function-that-returns-the-longest-palindrome-in-a-given-string
// https://github.com/KartikTalwar/Puzzles/tree/master/Cue


(function (text) {
  var palindrome = '';
  console.log('Please wait...');

  // İç içe iki döngü oluşturulur. ilk döngü her tekrar ettiğinde metnin ilk karakterini siler.
  for (var i = 0; i < text.length ; i++) {
    var str1 = text.substr(i, text.length);
    // İkinci döngü her tekrar ettiğinde metnin son karakterini siler.
    for (var j = str1.length; j >= 0; j--) {
      var str2 = str1.substr(0, j);
      // Kalan karakter sayısı 1 veya 1 in altında ise ikinci döngü kırılarak ilk döngüden devam edilir.
      if (str2.length <= 1) {
        continue;
      }

      // metin terslenerek kendisi ile eşitliği sorgulanır. Eşit ise ve kayıt edilen en büyük metinden daha büyük ise palindrome degiskeni overwrite edilir.
      if (str2 === str2.split("").reverse().join("") && str2.length > palindrome.length) {
        palindrome = str2;
      }
    }
  }

  console.clear();
  console.log(palindrome);
})(`FourscoreandsevenyearsagoourfaathersbroughtforthonthiscontainentanewnationconceivedinzLibertyanddedicatedtothepropositionthata
llmenarecreatedequalNowweareengagedinagreahtcivilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmeton
agreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightli
veItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivi
nganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutit
canneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvanced
Itisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygav
ethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedom
andthat`);
