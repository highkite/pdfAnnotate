import { ReferencePointer } from './parser';
import { WriterUtil } from './writer-util';
import { Util } from './util';

export interface ResourceDef {
    name: string
    refPtr?: ReferencePointer | undefined
}

export class Resource {
    object_id: ReferencePointer | undefined = undefined
    new_object: boolean = false // indicates to the factory that this object must be created when writing the document

    /**
     * Hoelds the reference pointer of the object to which the resource dictionary is related
     * */
    associatedWith : ReferencePointer | undefined = undefined

    extGState: ResourceDef[] = []
    colorSpace: ResourceDef[] = []
    pattern: ResourceDef[] = []
    shading: ResourceDef[] = []
    xObject: ResourceDef[] = []
    font: ResourceDef[] = []
    procSet: ResourceDef[] = []
    properties: ResourceDef[] = []

    constructor() {}

    private containsResourceDef(def : ResourceDef, list : ResourceDef[]) : boolean {
        return list.filter(d => d.name === def.name && def.refPtr && d.refPtr && def.refPtr.obj === d.refPtr.obj && def.refPtr.generation === d.refPtr.generation).length > 0
    }

    public addGStateDef(def: ResourceDef) {
        if(!this.containsResourceDef(def, this.extGState)) {
            this.extGState.push(def)
        }
    }

    public addColorSpaceDef(def : ResourceDef) {
        if(!this.containsResourceDef(def, this.colorSpace)) {
            this.colorSpace.push(def)
        }
    }

    public addPatternDef(def : ResourceDef) {
        if(!this.containsResourceDef(def, this.pattern)) {
            this.pattern.push(def)
        }
    }

    public addShadingDef(def : ResourceDef) {
        if(!this.containsResourceDef(def, this.shading)) {
            this.shading.push(def)
        }
    }

    public addXObjectDef(def : ResourceDef) {
        if(!this.containsResourceDef(def, this.xObject)) {
            this.xObject.push(def)
        }
    }

    public addFontDef(def : ResourceDef) {
        if(!this.containsResourceDef(def, this.font)) {
            this.font.push(def)
        }
    }

    public addProcSetDef(def : ResourceDef) {
        if(!this.containsResourceDef(def, this.procSet)) {
            this.procSet.push(def)
        }
    }

    public addProperty(def : ResourceDef) {
        if(!this.containsResourceDef(def, this.properties)) {
            this.properties.push(def)
        }
    }

    private writeDictAttribute(defs: ResourceDef[]) : number[] {
        let ret_val : number[] = []

        ret_val = ret_val.concat(WriterUtil.DICT_START)
        ret_val.push(WriterUtil.SPACE)

        for(let def of defs) {
            def.name = def.name.trim()

            if (def.name.charAt(0) !== "/")
                def.name = `/${def.name}`

            ret_val = ret_val.concat(Util.convertStringToAscii(def.name))
            ret_val.push(WriterUtil.SPACE)

            if(!def.refPtr)
                throw Error("Missing reference pointer in resource definition")

            ret_val = ret_val.concat(WriterUtil.writeReferencePointer(def.refPtr, true))
            ret_val.push(WriterUtil.SPACE)
        }

        ret_val = ret_val.concat(WriterUtil.DICT_END)
        return ret_val
    }

    private writeArrayAttribute(defs: ResourceDef[]) : number[] {
        let ret_val : number[] = []

        ret_val = ret_val.concat(WriterUtil.ARRAY_START)

        for(let def of defs) {
            def.name = def.name.trim()

            if (def.name.charAt(0) !== "/")
                def.name = `/${def.name}`

            ret_val = ret_val.concat(Util.convertStringToAscii(def.name))
            ret_val.push(WriterUtil.SPACE)
        }

        ret_val = ret_val.concat(WriterUtil.ARRAY_END)

        return ret_val
    }

    public writeResource() : number[] {
        let ret_val : number[] = []

        ret_val = ret_val.concat(WriterUtil.DICT_START)
        ret_val.push(WriterUtil.SPACE)

        if (this.extGState.length > 0) {
            ret_val = ret_val.concat(WriterUtil.EXTGSTATE)
            ret_val.push(WriterUtil.SPACE)
            ret_val = ret_val.concat(this.writeDictAttribute(this.extGState))
            ret_val.push(WriterUtil.SPACE)
        }

        if (this.colorSpace.length > 0) {
            ret_val = ret_val.concat(WriterUtil.COLORSPACE)
            ret_val.push(WriterUtil.SPACE)
            ret_val = ret_val.concat(this.writeDictAttribute(this.colorSpace))
            ret_val.push(WriterUtil.SPACE)
        }

        if (this.pattern.length > 0) {
            ret_val = ret_val.concat(WriterUtil.PATTERN)
            ret_val.push(WriterUtil.SPACE)
            ret_val = ret_val.concat(this.writeDictAttribute(this.pattern))
            ret_val.push(WriterUtil.SPACE)
        }

        if (this.shading.length > 0) {
            ret_val = ret_val.concat(WriterUtil.SHADING)
            ret_val.push(WriterUtil.SPACE)
            ret_val = ret_val.concat(this.writeDictAttribute(this.shading))
            ret_val.push(WriterUtil.SPACE)
        }

        if (this.xObject.length > 0) {
            ret_val = ret_val.concat(WriterUtil.XOBJECT)
            ret_val.push(WriterUtil.SPACE)
            ret_val = ret_val.concat(this.writeDictAttribute(this.xObject))
            ret_val.push(WriterUtil.SPACE)
        }

        if (this.font.length > 0) {
            ret_val = ret_val.concat(WriterUtil.FONT)
            ret_val.push(WriterUtil.SPACE)
            ret_val = ret_val.concat(this.writeDictAttribute(this.font))
            ret_val.push(WriterUtil.SPACE)
        }

        if (this.procSet.length > 0) {
            ret_val = ret_val.concat(WriterUtil.PROCSET)
            ret_val.push(WriterUtil.SPACE)
            ret_val = ret_val.concat(this.writeArrayAttribute(this.procSet))
            ret_val.push(WriterUtil.SPACE)
        }

        if (this.properties.length > 0) {
            ret_val = ret_val.concat(WriterUtil.PROPERTIES)
            ret_val.push(WriterUtil.SPACE)
            ret_val = ret_val.concat(this.writeDictAttribute(this.properties))
            ret_val.push(WriterUtil.SPACE)
        }

        ret_val = ret_val.concat(WriterUtil.DICT_END)
        return ret_val
    }

    /**
     * Extract the resource mappings from a dictionary
     * */
    public extract(value: any) {
        if (value["/ExtGState"]) {
            for(let key of Object.keys(value["/ExtGState"])) {
                this.addGStateDef({name : key, refPtr: value["/ExtGState"][key]})
            }
        }

        if (value["/ColorSpace"]) {
            for(let key of Object.keys(value["/ColorSpace"])) {
                this.addColorSpaceDef({name : key, refPtr: value["/ColorSpace"][key]})
            }
        }

        if (value["/Pattern"]) {
            for(let key of Object.keys(value["/Pattern"])) {
                this.addPatternDef({name : key, refPtr: value["/Pattern"][key]})
            }
        }

        if (value["/Shading"]) {
            for(let key of Object.keys(value["/Shading"])) {
                this.addShadingDef({name : key, refPtr: value["/Shading"][key]})
            }
        }

        if (value["/XObject"]) {
            for(let key of Object.keys(value["/XObject"])) {
                this.addXObjectDef({name : key, refPtr: value["/XObject"][key]})
            }
        }

        if (value["/Font"]) {
            for(let key of Object.keys(value["/Font"])) {
                this.addFontDef({name : key, refPtr: value["/Font"][key]})
            }
        }

        if (value["/ProcSet"]) {
            for(let key of Object.keys(value["/ProcSet"])) {
                this.addProcSetDef({name : key, refPtr: value["/ProcSet"][key]})
            }
        }

        if (value["/Properties"]) {
            for(let key of Object.keys(value["/Properties"])) {
                this.addProperty({name : key, refPtr: value["/Properties"][key]})
            }
        }
    }
}
