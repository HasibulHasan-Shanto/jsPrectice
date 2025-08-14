function  onlyCharacter( str ) {
        if (typeof str !== 'string') {
            return 'Invalid'
        }
        const string = str.replaceAll(' ', '').toUpperCase()
        return string
}
const char = onlyCharacter(true)
console.log(char)

