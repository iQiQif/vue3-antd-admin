const allModules = import.meta.globEager('./*.vue')
const components = {}
Object.keys(allModules).forEach(path => {
    const fileName = path.replace(/(.*\/)*([^.]+).*/ig,"$2")
    components[fileName] = allModules[path].default
})
export default components
