let ApiKey = `d98ebf8297fe47beb7057125c46c6241`
let art = document.querySelector(`#articles`)
let arr ;
let fetcch = () => {
let search = document.querySelector(`#srch`).value
axios.get(`https://newsapi.org/v2/everything?q=${search}&from=2023-04-26&sortBy=publishedAt&apiKey=d98ebf8297fe47beb7057125c46c6241`)
.then((data)=>{
    arr = data.data.articles
 //console.log(arr[1].author)
 console.log(arr)
arr.forEach(element => {
    //console.log(element)
    let author = document.createTextNode(`<h4>\'Author of an Article\'</h4> : ${element.author}`)
    let content = document.createTextNode(element.content)
    let description = document.createTextNode(element.description)
    let published = document.createTextNode(`Published At : ${element.publishedAt.slice(0,10)}`)
    let title = document.createTextNode(element.title)
    let urlToImage = document.createElement(`img`)
    let container = document.createElement(`div`)
    let heading = document.createElement(`h1`)
    let writer = document.createElement(`h6`)
    let someinfo = document.createElement(`p`)
    let DetailedInformation = document.createElement(`p`)
    let datePub = document.createElement(`span`)
    let authpub = document.createElement(`div`)
    let imgDetInfSomInfCont = document.createElement(`div`)
    let infocontainer = document.createElement(`div`)
    container.setAttribute(`class`,` p-1 pl-0 pr-0 border-2`)
    authpub.setAttribute(`class`,`flex justify-around p-1 text-white font-normal border-b-2`)
    heading.setAttribute(`class`,`font-bold text-center border-b-2 text-white`)
    someinfo.setAttribute(`class`,`text-white`)
    DetailedInformation.setAttribute(`class`,`text-white`)
    urlToImage.setAttribute(`class`,`w-1/2`)
    imgDetInfSomInfCont.setAttribute(`class`,`flex`)
    infocontainer.setAttribute(`class`,`flex flex-col w-1/2 text-center justify-center `)
    authpub.appendChild(writer)
    authpub.appendChild(datePub)
    imgDetInfSomInfCont.appendChild(urlToImage)
    infocontainer.appendChild(someinfo)
    infocontainer.appendChild(DetailedInformation)
    imgDetInfSomInfCont.appendChild(infocontainer)
    heading.appendChild(title)
    writer.appendChild(author)
    someinfo.appendChild(content)
    DetailedInformation.appendChild(description)
    datePub.appendChild(published)
    urlToImage.setAttribute(`src`,`${element.urlToImage}`)
    container.appendChild(authpub)
    container.appendChild(heading)
    container.appendChild(imgDetInfSomInfCont)
    art.appendChild(container)
})
})
.catch((error)=>{
console.log(error)
})
}