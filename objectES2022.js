class ObjectES22 {
    static pi = 3.14
    #privateField = " "

    constructor(){
        this.#privateField = "test"
    }

    getPrivateField() {
        return this.#privateField
    }
    #numberOfValues() {
        return 5
    }
    getValues() {
        return this.#numberOfValues
    }

    static helloStaticWorld() {
        console.log("Hello world from a static method")
    }
}

const object = new ObjectES22()


//console.log(object.numberOfValues())
console.log(object.getValues())
ObjectES22.helloStaticWorld()