
var prodectcontainer = document.getElementById("prodectcontainer")
var search = document.getElementById("search")
var prodectlist = prodectcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){

    var enteredValue = event.target.value.toUpperCase()

    for(count=0; count<prodectlist.length; count=count+1){

        var prodectname = prodectlist[count].querySelector("h2").textContent.toUpperCase()

        if(prodectname.indexOf(enteredValue)<0){

            prodectlist[count].style.display="none"
        }

        else{
            prodectlist[count].style.display="block"
        }
    }
})

