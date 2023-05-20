interface modulesFormat{
    path?:string,
    [key:string]:any
}
let comps:modulesFormat = {}
const modules:modulesFormat = import.meta.globEager('./**/*.vue')

for (const path in modules) {
  let cname = modules[path].default.name
  comps[cname] = modules[path].default
}

export default comps
