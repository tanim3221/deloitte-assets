 var loadPro = function(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('profile-img-tag-pro');
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  };