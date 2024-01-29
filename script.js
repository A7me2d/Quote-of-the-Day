


var quotes = [
    { text: "Be yourself; everyone else is already taken.", author: "--Oscar Wilde" },
    { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "--Albert Einstein" },
    { text: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", author: "--Marilyn Monroe" },
    { text: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", author: "--Bernard M. Baruch" },
];
 
var selecter = [];
function getNumber(){
    if(selecter.length === quotes.length){
        alert('No more quotes')
        return;
    }
    do{
        var num = Math.floor(Math.random() * quotes.length);
    }
while

   ( selecter.includes(num ));
    
    var num2 = quotes[num];
    selecter.push(num)
    // console.log(num);
    document.getElementById('call').innerHTML =num2.text;
    document.getElementById('call2').innerHTML =num2.author;
}



//                      2
// const quotes = [
//       { text: "Be yourself; everyone else is already taken.", author: "--Oscar Wilde" },
//     { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "--Albert Einstein" },
//     { text: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", author: "--Marilyn Monroe" },
//     { text: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", author: "--Bernard M. Baruch" },
// ];

// function getNumber() {
//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     const randomQute = quotes[randomIndex];

//     document.getElementById('call').innerHTML=randomQute;
//        document.getElementById('call').innerHTML =num2.text;
//     document.getElementById('call2').innerHTML =num2.author;
// }