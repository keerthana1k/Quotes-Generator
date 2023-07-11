"use strict"

const nextQuotes = async () => {
    setLoading()
    try{
    const res = await fetch("http://api.quotable.io/random");
    //console.log(res)
    const {_id: id, content: quote, author} = await res.json();
    

    //document.querySelector('.quotes-container').innerHTML = "hii"
    const wrapper = document.querySelector('#container');
    const quotesContainer = document.querySelector('#quotes-container');
    const authorContainer = document.querySelector('#js-author');

    wrapper.dataset.id = id;
    quotesContainer.textContent = quote;
    authorContainer.textContent = author;
}catch(e){
    alert(e.message);
}finally{
    removeLoading()
}
}

function setLoading(){
 const loader =  document.querySelector('.load-icon');
 const quoteDiv = document.querySelector('#container');
 loader.classList.remove("hide");
 quoteDiv.classList.add("hide")
 const button = document.querySelectorAll('.btn');
 button.forEach(child => {
    child.disabled = true;
})
}

function removeLoading() {
    const loader =  document.querySelector('.load-icon');
    const quoteDiv = document.querySelector('#container');
    loader.classList.add("hide");
    quoteDiv.classList.remove("hide")
    const button = document.querySelectorAll('.btn');
    button.forEach(child => {
        child.disabled = false;
    })
     
}







