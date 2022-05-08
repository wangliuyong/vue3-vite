

type Options= {
  el:string
}

const toBase64 = (el:HTMLImageElement):string => {
  const canvas:HTMLCanvasElement = document.createElement('canvas')

  const ctx = canvas.getContext('2d')

  canvas.width = el.width
  canvas.height = el.height

  ctx?.drawImage(el,0,0,canvas.width,canvas.height)
  return canvas.toDataURL('image/png')

}


export default (options:Options):Promise<{imageUrl:string}> => {
  
  return new Promise((resolve,reject) => {
    onMounted(() => {
      const image:HTMLImageElement = document.getElementById(options.el) as HTMLImageElement

      image.onload = () => {
        resolve({
          imageUrl:toBase64(image)
        })
        
      }
    })
  })  
}

