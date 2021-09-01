function addUser(){
    p1=document.getElementById("p1").value;
    p2=document.getElementById("p2").value;
    localStorage.setItem("player1",p1);
    localStorage.setItem("player2",p2);
    window.location="game_page.html"
}