class Person{
    constructor (name,age){
        this.name=name
        this.age=age
    }
    sayhi(){
        console.log('hello')
    }
}

class American extends Person{

}
const a1=new American('jack',20)
console.log(a1)

class Chinese extends Person{
    constructor(name,age,id){
        super(name,age)
        this.id=id
    }
}
const c1=new Chinese('zs',18,13131313)
console.log(c1)