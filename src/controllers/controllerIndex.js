let publi = [

]

export const viewpubli = (req,res)=>{
    res.status(200).render('publicacion',{publicacion:publi})
    
}


export const create = async (req,res)=>{
  let fotografia = req.body
  fotografia.id = Math.floor(Math.random()*1000000000)
  console.log(publicacion)
  publicacion.push(req.body) 
  product.url =req.body.nombre + req.body.id + ".png" 

  const EDFile = req.files.url
  
  EDFile.mv(`./public/img/misfotos/${product.url}`,err => {
    if(err) return res.status(500).send({ message : err })
    return res.status(200).render("nofound",{message:"no se encontró la foto"})
    })

  res.status(200).redirect('/instagram')
 }


  
 