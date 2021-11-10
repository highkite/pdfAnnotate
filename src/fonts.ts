import { ReferencePointer, PDFDocumentParser } from './parser';
import { STANDARD_FONT_DATA } from './font-data';
import { WriterUtil } from './writer-util';
import { Util } from './util';

export enum FontType {
    Type0, Type1, Type3, MMType1, TrueType, CIDFontType0, CIDFontType2
}


export interface FontDescriptor {
    fontName : string
    fontFamily? : string | undefined
    fontStretch? : string | undefined
    fontWeight? : string | undefined
    flags : number | undefined
    fontBBox? : number[] | undefined
    italicAngle : number
    ascent? : number | undefined
    descent? : number | undefined
    leading? : number | undefined
    capHeight? : number | undefined
    xHeight? : number | undefined
    stemV? : number | undefined
    stemH? : number | undefined
    avgWidth? : number | undefined
    maxWidth? : number | undefined
    missingWidth? : number | undefined
}

export class Font {
    object_id : ReferencePointer | undefined = undefined
    /**
     * Determines if the font must be written to the PDF document, since it is not yet defined
     * */
    is_new : boolean = false
    fontType: FontType | undefined = undefined
    name: string | undefined = undefined
    baseFont: string | undefined = undefined
    firstChar: number | undefined = undefined
    lastChar: number | undefined = undefined
    widths: number[] | undefined = undefined
    fontDescriptor : FontDescriptor | undefined = undefined
    encoding: string | undefined = undefined

    constructor(fontType: FontType | undefined = undefined, name : string | undefined = undefined, baseFont : string | undefined = undefined) {
        this.fontType = fontType
        this.name = name
        this.baseFont = baseFont

        if(this.name && !this.name.startsWith("/")) {
            this.name = `/${this.name}`
        }

        if(this.baseFont && !this.baseFont.startsWith("/")) {
            this.baseFont = `/${this.baseFont}`
        }


        if (this.baseFont && Font.isStandardFont(this.baseFont)) {
            this.populateStandardFontData(this.baseFont)

            if(!this.widths) {
                throw Error(`No widths found for standard font "${this.baseFont}"`)
            }
        }
    }

    /**
     * Returns the widths array of a standard font
     * */
    private populateStandardFontData(font_name : string) {
        if(font_name.startsWith("/")) {
            font_name = font_name.substring(1)
        }

        let key = Object.keys(STANDARD_FONT_DATA).filter(name => font_name.localeCompare(name) === 0)

        if (!key || key.length === 0 || key.length > 1) {
            throw Error(`No font widths for standard font ${font_name}`)
        }

        let font_data =  STANDARD_FONT_DATA[key[0] as keyof typeof STANDARD_FONT_DATA]

        if(!font_data) {
            throw Error(`No font data for standard font ${font_name}`)
        }

        this.widths = font_data.widths
        this.firstChar = font_data.firstChar
        this.lastChar = font_data.lastChar
        this.fontDescriptor = {
            fontName: this.baseFont!,
            fontFamily : font_data.familyName,
            fontWeight: font_data.fontWeight,
            italicAngle: font_data.italicAngle,
            fontBBox: font_data.fontBBox,
            capHeight: (font_data as any).capHeight,
            xHeight: (font_data as any).xHeight,
            ascent: (font_data as any).ascent,
            descent: (font_data as any).descent,
            stemH: font_data.stemH,
            stemV: font_data.stemV,
            flags: font_data.flag
        }

    }

    /**
     * Returns a standard font
     * fontName the name reference the font name
     * baseFont the standard font
     * */
    public static createStandardFont(object_id : ReferencePointer, fontName : string, baseFont : string) : Font {
        let font = new Font(FontType.Type1, fontName, baseFont)

        font.object_id = object_id

        return font
    }

    /**
     * True, if the name is a standard font name
     * */
    public static isStandardFont(name : string) : boolean {
        if(name.startsWith("/")) {
            name = name.substring(1)
        }

        switch (name) {
            case "Times-Roman":
                return true
            case "Times-Bold":
                return true
            case "Times-Italic":
                return true
            case "Times-BoldItalic":
                return true
            case "Helvetica":
                return true
            case "Helvetica-Bold":
                return true
            case "Helvetica-Oblique":
                return true
            case "Helvetica-BoldOblique":
                return true
            case "Courier":
                return true
            case "Courier-Oblique":
                return true
            case "Courier-BoldOblique":
                return true
            case "Courier-Bold":
                return true
            case "Symbol":
                return true
            case "ZapfDingbats":
                return true
            default:
                return false
        }
    }

    private typeToNumberArray(fontType : FontType) : number[] {
        switch (fontType) {
            case FontType.Type0:
                return WriterUtil.TYPE0
                break
            case FontType.Type1:
                return WriterUtil.TYPE1
                break
            case FontType.Type3:
                return WriterUtil.TYPE3
                break
            case FontType.MMType1:
                return WriterUtil.MMTYPE1
                break
            case FontType.TrueType:
                return WriterUtil.TRUETYPE
                break
            case FontType.CIDFontType0:
                return WriterUtil.CIDFONTTYPE0
                break
            case FontType.CIDFontType2:
                return WriterUtil.CIDFONTTYPE2
                break
        }

        return []
    }

    public writeFontDescriptor() : number[] {
        if (!this.fontDescriptor)
            return []

        let ret: number[] = []

        ret = ret.concat(WriterUtil.DICT_START)
        ret.push(WriterUtil.SPACE)

        ret = ret.concat(WriterUtil.TYPE_FONTDESCRIPTOR)
        ret.push(WriterUtil.SPACE)

        if(this.baseFont) {
            ret = ret.concat(WriterUtil.FONTNAME)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(Util.convertStringToAscii(this.baseFont))
            ret.push(WriterUtil.SPACE)
        }

        if (this.fontDescriptor.fontFamily) {
            ret = ret.concat(WriterUtil.FONTFAMILY)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(Util.convertStringToByteString(this.fontDescriptor.fontFamily))
            ret.push(WriterUtil.SPACE)
        }

        if (this.fontDescriptor.fontStretch) {
            ret = ret.concat(WriterUtil.FONTSTRETCH)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(Util.convertStringToAscii(this.fontDescriptor.fontStretch))
            ret.push(WriterUtil.SPACE)
        }

        if (this.fontDescriptor.flags) {
            ret = ret.concat(WriterUtil.FLAGS)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(Util.convertNumberToCharArray(this.fontDescriptor.flags))
            ret.push(WriterUtil.SPACE)
        }

        if (this.fontDescriptor.fontBBox) {
            ret = ret.concat(WriterUtil.FONTBBOX)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(WriterUtil.writeNumberArray(this.fontDescriptor.fontBBox))
            ret.push(WriterUtil.SPACE)
        }

        if (this.fontDescriptor.italicAngle) {
            ret = ret.concat(WriterUtil.ITALICANGLE)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(Util.convertNumberToCharArray(this.fontDescriptor.italicAngle))
            ret.push(WriterUtil.SPACE)
        }

        if (this.fontDescriptor.ascent) {
            ret = ret.concat(WriterUtil.ASCENT)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(Util.convertNumberToCharArray(this.fontDescriptor.ascent))
            ret.push(WriterUtil.SPACE)
        }

        if (this.fontDescriptor.descent) {
            ret = ret.concat(WriterUtil.DESCENT)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(Util.convertNumberToCharArray(this.fontDescriptor.descent))
            ret.push(WriterUtil.SPACE)
        }

        if (this.fontDescriptor.leading) {
            ret = ret.concat(WriterUtil.LEADING)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(Util.convertNumberToCharArray(this.fontDescriptor.leading))
            ret.push(WriterUtil.SPACE)
        }

        if (this.fontDescriptor.capHeight) {
            ret = ret.concat(WriterUtil.CAPHEIGHT)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(Util.convertNumberToCharArray(this.fontDescriptor.capHeight))
            ret.push(WriterUtil.SPACE)
        }

        if (this.fontDescriptor.xHeight) {
            ret = ret.concat(WriterUtil.XHEIGHT)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(Util.convertNumberToCharArray(this.fontDescriptor.xHeight))
            ret.push(WriterUtil.SPACE)
        }

        if (this.fontDescriptor.stemV) {
            ret = ret.concat(WriterUtil.STEMV)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(Util.convertNumberToCharArray(this.fontDescriptor.stemV))
            ret.push(WriterUtil.SPACE)
        }

        if (this.fontDescriptor.stemH) {
            ret = ret.concat(WriterUtil.STEMH)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(Util.convertNumberToCharArray(this.fontDescriptor.stemH))
            ret.push(WriterUtil.SPACE)
        }

        if (this.fontDescriptor.avgWidth) {
            ret = ret.concat(WriterUtil.AVGWIDTH)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(Util.convertNumberToCharArray(this.fontDescriptor.avgWidth))
            ret.push(WriterUtil.SPACE)
        }

        if (this.fontDescriptor.maxWidth) {
            ret = ret.concat(WriterUtil.MAXWIDTH)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(Util.convertNumberToCharArray(this.fontDescriptor.maxWidth))
            ret.push(WriterUtil.SPACE)
        }

        if (this.fontDescriptor.missingWidth) {
            ret = ret.concat(WriterUtil.MISSINGWIDTH)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(Util.convertNumberToCharArray(this.fontDescriptor.missingWidth))
            ret.push(WriterUtil.SPACE)
        }

        ret = ret.concat(WriterUtil.DICT_END)
        ret.push(WriterUtil.SPACE)

        return ret
    }

    public writeFont() : number[] {
        if(!this.object_id)
            throw Error("object_id of font not set")

        let ret: number[] = WriterUtil.writeReferencePointer(this.object_id)
        ret.push(WriterUtil.SPACE)
        ret = ret.concat(WriterUtil.OBJ)
        ret.push(WriterUtil.CR)
        ret.push(WriterUtil.LF)
        ret = ret.concat(WriterUtil.DICT_START)
        ret.push(WriterUtil.SPACE)

        ret = ret.concat(WriterUtil.TYPE_FONT)
        ret.push(WriterUtil.SPACE)

        if (!this.fontType) {
            throw Error("Font Type not set")
        }

        ret = ret.concat(WriterUtil.SUBTYPE)
        ret.push(WriterUtil.SPACE)
        ret = ret.concat(this.typeToNumberArray(this.fontType))
        ret.push(WriterUtil.SPACE)

        if (this.baseFont) {
            ret = ret.concat(WriterUtil.BASEFONT)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(Util.convertStringToAscii(this.baseFont))
            ret.push(WriterUtil.SPACE)
        }

        if (this.firstChar) {
            ret = ret.concat(WriterUtil.FIRSTCHAR)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(Util.convertNumberToCharArray(this.firstChar))
            ret.push(WriterUtil.SPACE)
        }

        if (this.lastChar) {
            ret = ret.concat(WriterUtil.LASTCHAR)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(Util.convertNumberToCharArray(this.lastChar))
            ret.push(WriterUtil.SPACE)
        }

        if (this.widths) {
            ret = ret.concat(WriterUtil.WIDTHS)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(WriterUtil.writeNumberArray(this.widths))
            ret.push(WriterUtil.SPACE)
        }

        if (this.fontDescriptor) {
            ret = ret.concat(WriterUtil.FONTDESCRIPTOR)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(this.writeFontDescriptor())
            ret.push(WriterUtil.SPACE)
        }

        if (this.encoding) {
            ret = ret.concat(WriterUtil.ENCODING)
            ret.push(WriterUtil.SPACE)
            ret = ret.concat(Util.convertStringToAscii(this.encoding))
            ret.push(WriterUtil.SPACE)
        }

        ret = ret.concat(WriterUtil.DICT_END)
        ret.push(WriterUtil.CR)
        ret.push(WriterUtil.LF)

        ret = ret.concat(WriterUtil.ENDOBJ)
        ret.push(WriterUtil.CR)
        ret.push(WriterUtil.LF)

        return ret
    }
}

export class FontManager {
    /**
     * The fonts in the document
     * */
    fonts: Font[] = []

    constructor(private parser : PDFDocumentParser) { }

    /**
     * Returns the font with the corresponding reference pointer or name or basefont
     *
     * If there is no such font it returns undefined
     * */
    public getFont(font : ReferencePointer | Font | string) : Font | undefined {
        for (let f of this.fonts) {
            if (typeof font === 'string') {
                if (f.name === font || f.baseFont === font)
                    return f
            } else if (font instanceof Font) {
                if(font.object_id && f.object_id) {
                    if (f.object_id.obj === font.object_id.obj && f.object_id.generation === font.object_id.generation)
                        return f
                } else if(font.name && f.name) {
                    if (f.name === font.name)
                        return f
                } else if(font.baseFont && f.baseFont) {
                    if (f.baseFont === font.baseFont)
                        return f
                }
            } else{
                if (f.object_id!.obj === (font as ReferencePointer).obj && f.object_id!.generation === (font as ReferencePointer).generation)
                    return f
            }
        }

        return undefined
    }

    /**
     * Adds a font, if it does not already exists.
     * */
    public addFont(font : Font | string) : Font | undefined {

        if(this.hasFont(font)) {
            return undefined
        }

        if(typeof font === "string") {
            if(Font.isStandardFont(font)) {
                font = Font.createStandardFont(this.parser.getFreeObjectId(), this.getUnusedFontName(), font)
            }
        }

        if(!(font instanceof Font)) {
            throw Error('Could not add font')
        }

        font.is_new = true

        this.fonts.push(font)

        return font
    }

                /**
                 * Returns a font name that is not used yet
                 * */
                public getUnusedFontName() : string {
                    let font_name : string = `/F${this.fonts.length}`

                    let i = 1
                    while(this.hasFont(font_name)) {
                        font_name = `/F${this.fonts.length + i++}`
                    }

                    return font_name
                }

                /**
                 * Retutrns true, if the font is already part of the font manager
                 *
                 * Font can be a Font object, a reference pointer of a font object a font name or a base font
                 * */
                public hasFont(font_ptr : Font | ReferencePointer | string) : boolean {
                    if (font_ptr instanceof Font && font_ptr.object_id) {
                        font_ptr = font_ptr.object_id
                    } else if (typeof font_ptr === "string") {
                        return this.fonts.filter(f => f.name === font_ptr ||
                            f.baseFont === font_ptr).length > 0
                    }

                    return this.fonts.filter(f => f.object_id && f.object_id.obj === (font_ptr as ReferencePointer).obj &&
                        f.object_id.generation === (font_ptr as ReferencePointer).generation).length > 0
                }

                /**
                 * Returns true, if the font with the given name is registered, or if it is the name of a standard font.
                 * */
                public isRegisteredFont(font : string | Font) : boolean {
                    if (typeof font === 'string') {
                        if (Font.isStandardFont(font))
                            return true

                        for(let _font of this.fonts) {
                            if (_font.name === font) {
                                return true
                            }
                        }
                    } else if (font instanceof Font) {
                        for(let _font of this.fonts) {
                            if (_font.name === font.name) {
                                return true
                            }
                        }
                    }

                    return false
                }

                /**
                 * Returns the new fonts that must be appended to the document
                 * */
                public getFontsToWrite() : Font[] {
                    return this.fonts.filter(x => x.is_new)
                }
            }
