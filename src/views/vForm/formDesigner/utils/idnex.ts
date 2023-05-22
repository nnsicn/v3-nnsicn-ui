import { generateId } from "@/utils/utils"
// 生成唯一标识
export const uniqId = (num:number=5):string => generateId(num)