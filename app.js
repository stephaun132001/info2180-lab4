window.onload=function(){
    var btn = document.getElementById("searchbtn");
    
    btn.addEventListener("click", (e) => {
            e.preventDefault();
            var searchQ = document.getElementById("name").value;
            var req = new XMLHttpRequest();
            var url = "superheroes.php?name=" + searchQ;

            req.onreadystatechange = getlist;
            req.open("GET", url);
            req.send();
         
       
    function getlist(){
        if(req.readyState === XMLHttpRequest.DONE){
            if(req.status === 200){
                var response = req.responseText;
                var result = document.getElementById("result");
                result.innerHTML = response;
            }else{
                alert('There was a problem');
            }
        }
    }
    });
}