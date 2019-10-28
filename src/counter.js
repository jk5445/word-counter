function display(count) {
	const s = `${count.words || 0} WORDS ${count.allcharacters || 0} CHARACTERS`

	document.getElementById('summary').innerHTML = s

	//document.getElementById('charonly').innerHTML = count.characters || 0
	document.getElementById('char').innerHTML = count.allcharacters || 0
	document.getElementById('space').innerHTML = count.spaces || 0
	document.getElementById('word').innerHTML = count.words || 0
	document.getElementById('par').innerHTML = count.paragraphs || 0
}

function count () {
	let text = document.getElementById("text").value;

	const result = {}
	result.spaces = 0
	result.characters = 0
	result.allcharacters = 0
	result.words = 0
	result.paragraphs = 0

	if(!(typeof text === 'string')) {
		display(result)
	}

	let i
	let c

	text = text + '\n'

	c = text.charAt(0)
	if(!(c === ' ' || c === '\t' || c ==='\n'))
		++result.characters
	else if(c === ' ')
		++result.spaces

	for(i = 1; i < text.length; ++i) {
		++result.allcharacters
		c = text.charAt(i)
		if(c === ' ' || c === '\t' || c === '\n') {
			const prev = text.charAt(i-1)
			if(c === ' ' || c === '\t')
				++result.spaces
			else if(c === '\n') {
				if(!(prev === '\n'))
					++result.paragraphs
			}
			if(!(prev === ' ' || prev === '\t' || prev ==='\n'))
					++result.words

		} else
			++result.characters
	}

	display(result)
}