function Entry(title) {
    this.title = title;
}

Entry.prototype.howManyWords = function(entry) {
  var entryArr = entry.split(' ');
  return entryArr.length;
}

Entry.prototype.howManyVowels = function(entry) {
  var entryArr = entry.replace(/[\. ,:-]+/g, "-").split('');
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var vowelCount = 0;

  entryArr.forEach(function(letter) {
      if (vowels.indexOf(letter) !== -1) {
          vowelCount ++;
      }
  })

  return vowelCount;
}

Entry.prototype.howManyConsonants = function(entry) {
    var entryArr = entry.replace(/[\. ,:-]+/g, "-").split('');
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var consonantCount = 0;

    entryArr.forEach(function(letter) {
        if (vowels.indexOf(letter) === -1) {
            consonantCount ++;
        }
    });

    return consonantCount
}

exports.entryModule = Entry;