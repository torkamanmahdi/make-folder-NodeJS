const fs = require('fs')
let folderName = process.argv[2]
let loopCount = process.argv[3]
for(let i = 1; i <= loopCount; i++) {
	fs.mkdir('./' + folderName + i, () => {})
}