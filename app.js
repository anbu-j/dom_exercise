/* EXERCISE
create a new folder in DOM named w2d4
add an app.js file and an index.html
connect your app.js to your index.html
create an h1 with 'perscholas'
create a ul with 5 li elems - each li can hold your favorite hobbies
in your app.js use selectors to select your h1 and ul elems
use dom properties to
change the text of you h1 to your name
give each li its own color
use an eventlistener to make the text change in your h1 and your li elems to change color
*/
      //var header = document.getElementById('heading');
      var header = document.getElementsByTagName('h1')
      console.log(header)
      //var List = document.getElementsByClassName('List')
      var uls = document.getElementsByTagName('li')
      console.log(uls)
      //var cls = document.querySelectorAll('ul')
      var cls = document.querySelector('ul')
      //var cls1 = document.getElementsByTagName('li')
      console.log(cls)

  // DOM Properties

      //heading.innerText = "Anbu's text"
      header.innerText = "Anbu's code"
      
      var clr = cls.getElementsByTagName('li')
      clr[0].style.color = 'red'
      clr[1].style.color = 'green'
      clr[2].style.color = 'violet'

      
      
  // EVENT LISTENERS

      var button =document.getElementById('btn')
      
      button.addEventListener("click",changeTextnColor);
      function changeTextnColor(){
          document.getElementById("heading").innerHTML = "Header updated with click of button!";
          //document.getElementsByTagName("li").style.color = 'brown';
          clr[0].style.color = 'brown';
          clr[1].style.color = 'brown';
          clr[2].style.color = 'brown';
  }

      