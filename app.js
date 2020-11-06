window.onload=function(){
    var btn = document.getElementById("searchbtn");
    
    btn.addEventListener("click", (e) => {
            e.preventDefault();

            var req = new XMLHttpRequest();
            var url = "superheroes.php";

            req.onreadystatechange = getlist;
            req.open("GET", url);
            req.send();
         
       
    function getlist(){
        if(req.readyState === XMLHttpRequest.DONE){
            if(req.status === 200){
                var response = req.responseText;
                alert(response);
            }else{
                alert('there was a problem');
            }
        }
    }
    });
}