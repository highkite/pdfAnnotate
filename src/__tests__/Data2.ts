var te = require('text-encoder')
var fs = require('fs')

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

export var pageObject_string_3 = new te.TextEncoder().encode(`
18 0 obj
<< /Type /Page
   /Parent 1 0 R
   /MediaBox [ 0 0 612 792 ]
   /Contents 3 0 R
   /Group <<
      /Type /Group
      /S /Transparency
      /CS /DeviceRGB
   >>
   /Resources 2 0 R
>>
endobj
`)

export var crossReferenceStreamObject_string = new te.TextEncoder().encode(`
625 0 obj
<<
/Length 1644
/ID [<9BFD8283F629F168063225BF31A92429> <6A28637CD303B944B7A012622D2884DD>]
/Info 7 0 R
/Root 1 0 R
/Type /XRef
/Size 626
/Index [0 625]
/W [1 3 0]
/Filter /FlateDecode
>>
stream
endstream
endobj
`)

export var decode = (data: any) => {
    let _data = new Uint8Array(data)

    return new te.TextDecoder().decode(_data)
}

export var loadFromFile = (path: string) => {
    return new Uint8Array(fs.readFileSync(path))
}

export var save = (fileName: string, data: Uint8Array) => {
    fs.writeFile(fileName, Buffer.from(new Uint8Array(data)), (err: any) => {
        if (err) {
            return console.log(err);
        }

        console.log(`The file was written to: ${fileName} `);
    })
}
