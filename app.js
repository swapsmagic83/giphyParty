const form= document.querySelector('#form')
const btn= document.querySelector('#btn')
const removeBtn= document.querySelector('#remove')
let input= document.querySelector('#input')
const div=document.querySelector('#results')

async function getGIF(){
    let searchItem=input.value.toLowerCase()
    let url=`http://api.giphy.com/v1/gifs/search?q=${searchItem}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
    let res= await axios.get(url)
    let resArr=res.data.data
    console.log(resArr)
    let img=document.createElement('img')
    let option= Math.floor(Math.random()*resArr.length)
     img.src=resArr[option].images.original.url
     div.append(img)   
}

btn.addEventListener('click',function(e){
    e.preventDefault()

    getGIF()
})
removeBtn.addEventListener('click',function(){
    div.innerHTML=""
})
