// Initialize button with user's preferred color
console.log("before");
let changeColor = document.getElementById("changeColor");


// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {

  toggleState();

});

chrome.storage.sync.get(["usage"], function(result) {
    var usage = result.usage;
    if(usage == 'true'){
        changeColor.style.backgroundColor = "#efefef";
            changeColor.textContent = '开启';
    }else{
        changeColor.style.backgroundColor = "#e45547";
        changeColor.textContent = '关闭';
    }
});


function toggleState(){
    chrome.storage.sync.get(["usage"], function(result) {
        var usage = result.usage;
        if(usage == 'true'){
          chrome.runtime.sendMessage({greeting:'true'}, function(response) {
            changeColor.style.backgroundColor = "#e45547";
            changeColor.textContent = '关闭';
          });
        }else if(usage == 'false'){
          chrome.runtime.sendMessage({greeting:'false'}, function(response) {
            changeColor.style.backgroundColor = "#efefef";
            changeColor.textContent = '开启';
          });
        }
          
   });
}

