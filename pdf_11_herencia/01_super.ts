export {};

class Parent {
    constructor(private privado:string) {}
}

class Child extends Parent {
    constructor(foo:string) {
        super(foo)
    }
}