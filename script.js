
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

    let items = document.querySelectorAll('.item');
    console.log(items)

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item');
    console.log(items)
    let slide = document.querySelector('.slide');

    let firstItem = items[0].cloneNode(true); // Clone the first item
    slide.appendChild(firstItem); // Append the cloned item to the end
    slide.removeChild(items[0]);
});

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item');
    let slide = document.querySelector('.slide');
    slide.insertBefore(items[items.length - 1].cloneNode(true), items[0]); // cloneNode to avoid reference issues
    slide.removeChild(items[items.length - 1]);
});

/*let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
}) */
