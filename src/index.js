import fs from 'fs'

class A {}

class B extends A{

}

let b = Object.values({a:1})
let a = {b,...{c:1}}
let c = new Map()
async function test(){
    let a = await [1,2,3]
}