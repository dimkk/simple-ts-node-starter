export const usefulClass = class {
    _name:string
    /**
     *
     */
    constructor(name) {
        this._name = name;
    }

    public getName = () => {
        return this._name
    }
}