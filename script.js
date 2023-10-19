const menuBtns = document.querySelector('.menuBtns').children;
const main = document.querySelector('.items').children;

for(let i=0; i <menuBtns.length ; i++)
{
   menuBtns[i].onclick = function(){
    for(let x=0; x <menuBtns.length ; x++)
    {
         menuBtns[x].classList.remove('active-btn');
    }
     this.classList.add('active-btn');
     const displayItems = this.getAttribute('data-filter');

     for ( let z = 0 ; z <main.length ; z++)
     {
        main[z].style.transform = 'scale(0)';
        setTimeout(()=> {
            main[z].style.display = 'none';
        }, 500);

        if ((main[z].getAttribute('data-category')==displayItems)||
        displayItems== 'all')
        {
            main[z].style.transform = 'scale(1)';
             setTimeout (()=>{
                main[z].style.display = 'block'
             }, 500);
        }
     }
   }
}



let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameField = document.getElementById("nameField");
let Title = document.getElementById("Title");

signIn.onclick = function () {
   nameField.style.maxHeight= '0';
   Title.innerHTML = "Sign In";
   signUp.classList.add("signin"); 
   signUp.classList.remove("signup"); 
   signIn.classList.remove("signin");
   signIn.classList.add("signup");
}

signUp.onclick = function () {
   nameField.style.maxHeight = '70px';
   Title.innerHTML = "Sign Up";
   signUp.classList.remove("signin");
   signUp.classList.add("signup");
   signIn.classList.add("signin");
   signIn.classList.remove("signup");
}




function search() {
   let filter = document.getElementById('myInput').value.toUpperCase();
   let items = document.querySelectorAll('.movie-filter');
   let headers = document.getElementsByTagName('h2');
   

   for (var i = 0; i < headers.length; i++) {
       let a = items[i].getElementsByTagName('h2')[0];
       let value = a.innerHTML || a.innerText || a.textContent;

       if (value.toUpperCase().indexOf(filter) > -1) {
           items[i].style.display = "";
       } else {
           items[i].style.display = "none";
       }
   }

   


}









