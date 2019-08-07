function translate(str) {
	let sentence = str.split(' ');
	let vowels = ['a', 'e', 'i', 'o', 'u'];

	for (word in sentence) {
		let letters = sentence[word].split('');
		let isVowel = false;

		while(!isVowel) {
			let lastLetter = letters[letters.length - 1];

			for (char in vowels) {
				if (letters[0] == vowels[char]) {
					if (lastLetter != 'q') {
						isVowel = true;
						letters.push('ay');
					}
				}
			}

			if (!isVowel || lastLetter == 'q') {
				let firstLetter = letters[0];
				letters.push(firstLetter);
				letters.splice(0,1);
			}
		}

		sentence[word] = letters.join('');
	}

	// to put spaces back into the sentence
	let pigSentence = [];
	for (let i = 0; i < sentence.length; i++) {
		pigSentence.push(sentence[i]);
		if (i != sentence.length - 1) {
			pigSentence.push(' ');
		}
	}

	return pigSentence.join('');
}

module.exports = {
	translate
}
