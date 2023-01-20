var title = document.getElementById("title");
var content = document.getElementById("content");
var button = document.getElementById('bto');
var list = document.getElementById('list');





button.addEventListener("click",function(){
    list.innerHTML = list.innerHTML + `
    <div id="class">
        <h2>${title.value}</h2>
        <p>${content.value}<p>
        <br/>
        <hr/>
    </div>
    `;

})