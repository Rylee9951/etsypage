$(document).ready(function(){
    $.get("https://api.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop", function(data){
       putInDom(data)
   })
})


function putInDom(data) {
    var ourData = data.results.map(function(item){
        return {
            price: item.price,
            link: item.url,
            title: item.title,
            img: item.Images[0].url_570xN
        }
    })

    var htmlStr = "";
    ourData.forEach(function(item){
        htmlStr += `
        <div class="pics">
            <a href=${item.link}>
            <div><img src="${item.img}" /></div>
            <p class="truncate"> ${item.title} </p>
            <p> ${item.price} </p>
            
            </a>
        </div>
        `
    })

    $("#gallery").html(htmlStr)
}