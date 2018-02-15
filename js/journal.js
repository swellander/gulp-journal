function Entry(title) {
    this.title = title;
}

Entry.prototype.howManyWords = function(entry) {
  var entryArr = entry.split(' ');
  return entryArr.length;
};

Entry.prototype.howManyVowels = function(entry) {
  var entryArr = entry.replace(/[\. ,:-]+/g, "-").split('');
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var vowelCount = 0;

  entryArr.forEach(function(letter) {
      if (vowels.indexOf(letter) !== -1) {
          vowelCount ++;
      }
  });

  return vowelCount;
};

Entry.prototype.howManyConsonants = function(entry) {
    var entryArr = entry.replace(/[\. ,:-]+/g, "-").split('');
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var consonantCount = 0;

    entryArr.forEach(function(letter) {
        if (vowels.indexOf(letter) === -1) {
            consonantCount ++;
        }
    });

    return consonantCount;
};

Entry.prototype.getTeaser = function(entryBody) {
    var teaser = [];

    entryBody.split(' ').forEach(function(word, index) {
        var notEnd = word.indexOf('.') === -1;
        
        if (notEnd && index < 8) {
            teaser.push(word);
        }
    });

    teaser = teaser.join(' ');

    if (teaser[teaser.length -1] !== '.') {
        teaser += '...';
    }

    return teaser;
};

exports.entryModule = Entry;