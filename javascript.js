function confirmarRedirecionamento() {
    var confirma = window.confirm("Você deseja ser redirecionado para a página Nodejs.html?");


    if (confirma) {
      window.location.href ="Nodejs.html"; 
    } else {

      alert("Redirecionamento cancelado");

    }
  }

  function confirmarRedirecionamento2() {
    var confirma = window.confirm("Você deseja ser redirecionado para a página ReactJS.html?");


    if (confirma) {
      window.location.href ="ReactJS.html"; 
    } else {

      alert("Redirecionamento cancelado");

    }
  }

  function mudarimagem() {
    var image = document.getElementById('imageSelect').value;
    document.getElementById('displayImage').src = image;
  }