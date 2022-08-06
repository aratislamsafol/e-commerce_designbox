  $(document).ready(function(){
    $('#fun').click(function(){
    $('#set').slideToggle(400);
    });
  });

  function openNav() {
  document.getElementById("mySidenav").style.width = "68%";
  document.getElementById("main").style.marginLeft = "0px";
  }

  function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  }

  // const icon  = document.querySelector('.icon');
  // const search  = document.querySelector('.search');

  // icon.onclick  = function(){
  //   search.classList.toggle('active');
  // }
  
  



