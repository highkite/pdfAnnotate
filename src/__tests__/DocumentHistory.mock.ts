
export interface XRef {
    id: number
    pointer: number
    generation: number
    free: boolean
    update: boolean
}

export interface ObjectLookupTable {
    [id: number]: XRef
}


export class DocumentHistory {

    obj_lookup_table: ObjectLookupTable = {}

    constructor() { }

    createObjectLookupTable(): ObjectLookupTable {
        return this.obj_lookup_table
    }

    mock(id: number, ptr: number, gen: number = 0, free: boolean = false, update: boolean = true) {
        this.obj_lookup_table[id] = {
            id: id,
            pointer: ptr,
            generation: gen,
            free: free,
            update: update
        }
        return this
    }
}
