module.exports = function (text) {
	if(!(typeof text === 'string')) {
		const error = {}

		error.msg = 'Invalid argument: counter expects a string'
		error.arg = text

		return (error)
	}

	const result = {}

	result.spaces = 0
	result.characters = 0
	result.words = 0
	result.paragraphs = 0

	let i
	let c

	text = text + '\n'

	c = text.charAt(0)
	if(!(c === ' ' || c === '\t' || c ==='\n'))
		++result.characters
	else if(c === ' ')
		++result.spaces

	for(i = 1; i < text.length; ++i) {
		c = text.charAt(i)
		if(c === ' ' || c === '\t' || c === '\n') {
			const prev = text.charAt(i-1)
			if(c === ' ') {
				++result.spaces
				if(!(prev === ' ' || prev === '\t' || prev ==='\n'))
					++result.words
			} else if(c === '\n') {
				if(!(prev === '\n'))
					++result.paragraphs
			}

		} else
			++result.characters
	}
	return (result)
}