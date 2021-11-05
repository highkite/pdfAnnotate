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

    extGState: ResourceDef[] = []
    colorSpace: ResourceDef[] = []
    pattern: ResourceDef[] = []
    shading: ResourceDef[] = []
    xObject: ResourceDef[] = []
    font: ResourceDef[] = []
    procSet: ResourceDef[] = []
    properties: ResourceDef[] = []

    constructor() {}

    public addGStateDef(def: ResourceDef) {
        this.extGState.push(def)
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
}
