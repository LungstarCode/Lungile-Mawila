
const h1 = document.querySelector("#heading-bold");
let words = ["Growth" , "Excellence" , "Success" , "Fulfillment", "Innovation"]


let i = 0;
setInterval(() => {
    h1.innerText= words[i];
    i = (i + 1) % words.length
}, 2000)

