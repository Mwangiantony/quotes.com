var quotes = [
    {
        'author': '-Jim Rohn',
        'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {
        'author': '-Epictetus',
        'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {
        'author': '-Frank Sinatra',
        'quote': 'The best revenge is massive success.'
    },
    {
        'author': '-Wayne Gretzy',
        'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {
        'author': '-Nelson Mandela',
        'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {
        'author': '-Elbert Hubbard',
        'quote': 'Do not take life too seriously. You will not get out alive.'
    },
];

var colors = [
    "#20B2AA",
    "#32CD32",
    "#A52A2A",
    "#8A2BE2",
    "#FF1493",
    "#00FA9A",
    "#000080",
    "#FF4500",
    "#800080",
    "teal",
]


document.getElementById("new-quote").addEventListener("click", function () {
    const random = Math.floor(Math.random() * quotes.length);
    document.getElementById('text').innerHTML = quotes[random].quote;
    document.getElementById('author').innerHTML = quotes[random].author;

    const randomcolors = Math.floor(Math.random() * colors.length);
    $(document).ready(function () {
        $('html body').css({
            backgroundColor: colors[randomcolors],
            color: colors[randomcolors]
        }, 500);
        $('#new-quote').css({ backgroundColor: colors[randomcolors] }, 500);
        $('h3').css("color", "#FFF", 500);
        $('.card').css({ Color: colors[randomcolors] }, 500);
        
    });
});