console.log('AJAX Basics!');

let textButton = document.querySelector('#text-btn');
textButton.addEventListener('click', function(){
    // AJAX

    // Create an AJAX request

    let xhr = new XMLHttpRequest();

    xhr.open('GET','./data/message.txt',true);
});