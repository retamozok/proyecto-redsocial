import * as controllerIndex from '../controllers/controllerIndex.js'


const routesIndex = (app) => {
    app.get('/instagram',controllerIndex.viewpubli)
    app.post('/instagram',controllerIndex.create)
}  

export default routesIndex 
