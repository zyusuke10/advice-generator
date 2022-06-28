const button = document.querySelector('.button-container');
const quote = document.querySelector('.quote-h2')
const num = document.querySelector('span');

const fetched = ()=>{
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data=>showJokes(data));
}

const showJokes = (data)=>{
    const {id} = data.slip;
    const {advice} = data.slip;
    num.innerText = id;
    quote.innerText = advice;
}

button.addEventListener('click',()=>{
    fetched();
})

