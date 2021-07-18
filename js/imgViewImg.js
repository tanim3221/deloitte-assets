 var loadImg = function(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('profile-img-tag-img');
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  };