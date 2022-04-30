type NameList = {
  name:string
}

export const axios = (url:string):Promise<NameList[]> => {
  return new Promise((resolve,reject) => {
    const xhr:XMLHttpRequest = new XMLHttpRequest()
    xhr.open('GET',url)

    xhr.onreadystatechange = () => {
      if(xhr.readyState == 4 && xhr.status == 200) {
        setInterval(() => {
          resolve(JSON.parse(xhr.responseText))
        },2000)
      }
    }
    xhr.send(null)
  })
}