alert('Bienvenido a mi blog!');

function changeClass()
{
 document.getElementById("ham").classList.toggle('show');
}

window.onload = function() 
{
  document.getElementById("ham").addEventListener( 'click' , changeClass ); 
}