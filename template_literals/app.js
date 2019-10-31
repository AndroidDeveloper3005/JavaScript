const name ='himel';
const age =31;
const job = 'android devb';
const city = 'dhaka';

//without template strings(es5)
html = '<ul> '+ 
'<li>Name: '+ name +'</li>'+
'<li>Age: '+age +'</li>'+
'<li> Job: ' + job + '</li>'+
'<li>City: ' +city + '</li>'+
'</ul>';

function hello(){
    return 'hello';
}

// with template string es6
html =`
<ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li> ${2+2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'over 30' : 'under 30'}</li>
</ul>
`;

document.body.innerHTML = html;