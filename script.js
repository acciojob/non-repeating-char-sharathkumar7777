function firstNonRepeatedChar(str) {
 // Write your code here
	 if (!str || str.length === 0) return null;

    const freq = {};

    // Count frequency of each character
    for (let ch of str) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    // Find first character with frequency 1
    for (let ch of str) {
        if (freq[ch] === 1) {
            return ch;
        }
    }

    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
