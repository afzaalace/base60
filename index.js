module.exports = (function(Base60) {
	var DEFAULT_CHARACTER_SET = "0123456789abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ_-";
	var s, val, base60Chars;
	Base60.encode = function(integer) {
		s = '';
		while (integer > 0) {
			s = Base60.characterSet[integer % Base60.indexLength] + s;
			integer = Math.floor(integer / Base60.indexLength);
		}
		return s !== '' ? s : '0';
	};

	Base60.decode = function(base60String) {
		val = 0;
		base60Chars = base60String.split("").reverse();
		base60Chars.forEach(function(character, index) {
			val += Base60.characterSet.indexOf(character) * Math.pow(Base60.indexLength, index);
		});
		return val;
	};

	Base60.setCharacterSet = function(chars) {
		var arrayOfChars = chars.split(""),
			uniqueCharacters = [];

		arrayOfChars.forEach(function(char) {
			if (!~uniqueCharacters.indexOf(char)) {
				uniqueCharacters.push(char);
			} else {
				throw Error("You must use unique characters.");
			}
		});
		Base60.indexLength = arrayOfChars.length;
		Base60.characterSet = arrayOfChars;
	};

	Base60.setCharacterSet(DEFAULT_CHARACTER_SET);
	return Base60;
}({}));
