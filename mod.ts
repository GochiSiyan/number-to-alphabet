/**
 * Converts a 1-indexed number to an Excel-style column name (e.g., 1 -> A, 27 -> AA).
 */
export function numberToAlphabet(num: number): string {
	let alphabet = ''
	while (num > 0) {
		const rem = (num - 1) % 26
		alphabet = String.fromCharCode(65 + rem) + alphabet
		num = Math.floor((num - rem) / 26)
	}
	return alphabet
}

/**
 * Converts an Excel-style alphabet name to a 1-indexed number (e.g., A -> 1, AA -> 27).
 */
export function alphabetToNumber(alphabet: string): number {
	let num = 0
	for (let i = 0; i < alphabet.length; i++) {
		num = num * 26 + (alphabet.charCodeAt(i) - 64)
	}
	return num
}