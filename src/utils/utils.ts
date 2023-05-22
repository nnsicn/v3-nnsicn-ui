import { nanoid,customAlphabet } from 'nanoid'
export const generateId = (num:number=10):string=>{
    const nanoid = customAlphabet('1234567890', num);
    return nanoid()
}