alert(Date())



setInterval("getDate()",1000);

function image(){
        document.getElementById("img").src='https://dg.imgix.net/do-you-think-you-re-happy-jgdbfiey-en/landscape/do-you-think-you-re-happy-jgdbfiey-9bb0198eeccd0a3c3c13aed064e2e2b3.jpg?ts=1520525855&ixlib=rails-4.2.0&fit=crop&w=2000&h=1050';

}

function change(){
        var text_change = document.getElementById('paragraph1');
        text_change.innerHTML = 'See, the text has changed!';
}

function keyboard(){
        alert('Ohhhhhhhhhhhhhhhhhhhhhh!');
}

function parachange(){
        var select = document.getElementById('paragraph2');
                select.style.backgroundColor = 'blue';
                select.style.textAlign = 'center';
                select.style.fontFamily = 'Arial';
}

function temp(f){
        return(f-32)*5/9;
}

function temp_change(){
        var select = document.getElementById('temp');
        select.innerHTML = temp(20);
}

function calc(){
        var a = parseFloat(prompt('number 1'));
        var b = parseFloat(prompt('number 2'));
        alert(a+b);
}

function greet(){
        var GN = prompt('First Name:');
        var FM = prompt('Family Name:');
        alert('Nice to meet you '+ GN + ' ' + FM);
}