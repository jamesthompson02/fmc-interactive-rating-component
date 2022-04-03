let btn1 = document.getElementById('btn-1');
let btn2 = document.getElementById('btn-2');
let btn3 = document.getElementById('btn-3');
let btn4 = document.getElementById('btn-4');
let btn5 = document.getElementById('btn-5');
let submit_btn = document.getElementById('submit-btn'); 

let list_of_ratings = [];
let last_ratings = [];

btn1.addEventListener('click', () => {
    btn1.style.backgroundColor = 'hsl(217, 12%, 63%)';
    btn1.style.color = 'white';

    btn2.style.backgroundColor = '#262f38';
    btn3.style.backgroundColor = '#262f38';
    btn4.style.backgroundColor = '#262f38';
    btn5.style.backgroundColor = '#262f38';
})

btn1.addEventListener('click', () => {
    const rating = document.getElementById('btn-1').textContent;
    list_of_ratings.push(rating);
    const last_rating = list_of_ratings[(list_of_ratings.length - 1)];
    last_ratings.push(last_rating);
    console.log(last_ratings.length);
})

btn2.addEventListener('click', () => {
    btn2.style.backgroundColor = 'hsl(217, 12%, 63%)';
    btn2.style.color = 'white';

    btn1.style.backgroundColor = '#262f38';
    btn3.style.backgroundColor = '#262f38';
    btn4.style.backgroundColor = '#262f38';
    btn5.style.backgroundColor = '#262f38';
})

btn2.addEventListener('click', () => {
    const rating = document.getElementById('btn-2').textContent;
    list_of_ratings.push(rating);
    const last_rating = list_of_ratings[(list_of_ratings.length - 1)];
    last_ratings.push(last_rating);
    console.log(last_ratings.length);
})

btn3.addEventListener('click', () => {
    btn3.style.backgroundColor = 'hsl(217, 12%, 63%)';
    btn3.style.color = 'white';

    btn1.style.backgroundColor = '#262f38';
    btn2.style.backgroundColor = '#262f38';
    btn4.style.backgroundColor = '#262f38';
    btn5.style.backgroundColor = '#262f38';
})

btn3.addEventListener('click', () => {
    const rating = document.getElementById('btn-3').textContent;
    list_of_ratings.push(rating);
    const last_rating = list_of_ratings[(list_of_ratings.length - 1)];
    last_ratings.push(last_rating);
    console.log(last_ratings.length);
})

btn4.addEventListener('click', () => {
    btn4.style.backgroundColor = 'hsl(217, 12%, 63%)';
    btn4.style.color = 'white';

    btn1.style.backgroundColor = '#262f38';
    btn2.style.backgroundColor = '#262f38';
    btn3.style.backgroundColor = '#262f38';
    btn5.style.backgroundColor = '#262f38';
})

btn4.addEventListener('click', () => {
    const rating = document.getElementById('btn-4').textContent;
    list_of_ratings.push(rating);
    const last_rating = list_of_ratings[(list_of_ratings.length - 1)];
    last_ratings.push(last_rating);
    console.log(last_ratings.length);
})

btn5.addEventListener('click', () => {
    btn5.style.backgroundColor = 'hsl(217, 12%, 63%)';
    btn5.style.color = 'white';

    btn1.style.backgroundColor = '#262f38';
    btn2.style.backgroundColor = '#262f38';
    btn3.style.backgroundColor = '#262f38';
    btn4.style.backgroundColor = '#262f38';
})

btn5.addEventListener('click', () => {
    const rating = document.getElementById('btn-5').textContent;
    list_of_ratings.push(rating);
    const last_rating = list_of_ratings[(list_of_ratings.length - 1)];
    last_ratings.push(last_rating);
    console.log(last_ratings.length);
})

submit_btn.addEventListener('click', () => {
    if (last_ratings.length > 0) {
        let final_rating = document.getElementById('feedback-rating');
        final_rating.innerHTML = 'You selected ' + last_ratings[(last_ratings.length - 1)] + ' out of 5';
        let feedback_container = document.getElementById('feedback-container');
        feedback_container.style.display = 'none';
        let post_feedback = document.getElementById('post-submission-container');
        post_feedback.style.display = 'flex';
    } else {
        alert('You have not selected a rating yet');
    }
})
