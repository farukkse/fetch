// JSON 
// JAVSACRIPT OBJECT NOTATION

// RESTful
// REST Api

const btn = document.querySelector('#ozluSozGetiriciButton');
const loadingInd = document.querySelector('#loadingIndicator');
const quotesList = document.querySelector('#quotesList')
let quotes;

// btn.addEventListener('click',() => {
//     // get istegi yaparken
//     console.log('fetch oncesi mesaji')
//     fetch('https://dummyjson.com/quotes')
//     .then(res => res.json())
//     .then(json => {
//         quotes = json;
//         console.log('fetchh icinde then kismina yazdigim mesaj')
//         console.table(quotes.quotes);
//     });
//     console.log('fetch sonrasi mesaji')
// });

btn.addEventListener('click',() => {
   
//     loadingInd.style.display = 'block';
//     fetch('https://dummyjson.com/quotes')
//     .then(res => res.json())
//     .then(json => {
//         quotes = json;
//     loadingInd.style.display = 'none';
//     });
// });

// bir method cagirip
// quote listesini ekrana yazdirin

    
    loadingInd.style.display = 'block';
    fetch('https://dummyjson.com/quotes')
    .then(res => res.json())
    .then(json => {
        quotes = json;
    loadingInd.style.display = 'none';
        
    list();
    

     });
});

// let list = ()=>{
//     quotes.quotes.forEach(element => quotesList.innerHTML +=`<li        title='${element.author}'>${element.quote}</li>`);
// }

// 2.asama
// quote listesinde author bilgisini gizli olsun tiklaninca gorunsun

// let list = ()=>{
//     btn.remove();
//     quotes.quotes.forEach(element => quotesList.innerHTML +=
//         `<details>
//         <summary>${element.quote}</summary>
//         ${element.author}
//         </details>`);
//     };

// ul li ile
let list = ()=>{
    btn.remove();
    quotes.quotes.forEach(element => quotesList.innerHTML +=
        `<li><strong> ${element.author} diyor ki; </strong> ${element.quote}
        </li>
       
        `);

        document.querySelectorAll('#quotesList li')
        .forEach(x => x.addEventListener('click', function () {
            this.classList.toggle('showAuthor');
        }))
    };

    let toggleAuthor = function () {
        
    }