var te = require('text-encoder')

export var pageObject_string = new te.TextEncoder().encode(`
2 0 obj <<
/Type /Page
/Contents 10 0 R
/Resources 9 0 R
/MediaBox [0 0 612 792]
/Parent 23 0 R
/Annots [ 3 0 R 4 0 R 5 0 R 6 0 R 7 0 R 8 0 R ]
>> endobj
`)


export var pageObject_string_2 = new te.TextEncoder().encode(`
2 0 obj <<
/Type /Page
/Contents 10 0 R
/Resources 9 0 R
/MediaBox [0 0 612 792]
/Parent 23 0 R >> endobj
`)

export var decode = (data: any) => {
    let _data = new Uint8Array(data)

    return new te.TextDecoder().decode(_data)
}
