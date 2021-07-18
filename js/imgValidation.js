function Validate()
{
     var image =document.getElementById("image_pro").value;
     if(image!='')
     {
           var checkimg = image.toLowerCase();
          if (!checkimg.match(/(\.jpg|\.png|\.JPG|\.PNG|\.jpeg|\.JPEG)$/)){ // validation of file extension using regular expression before file upload
              document.getElementById("image_pro").focus();
              alert (document.getElementById("error_pro").innerHTML="Please choose only JPG, JPEG, PNG format images."); 
              return false;
           }
            var img = document.getElementById("image_pro"); 
           // alert(img.files[0].size);
            if(img.files[0].size > 307200)  // validation according to file size
            {
            alert(document.getElementById("error_pro").innerHTML="Please choose image file maximum 300 KB.");
            return false;
             }
             return true;
      }
}


function Validate_img()
{
     var image =document.getElementById("image_img").value;
     if(image!='')
     {
           var checkimg = image.toLowerCase();
          if (!checkimg.match(/(\.jpg|\.png|\.JPG|\.PNG|\.jpeg|\.JPEG)$/)){ // validation of file extension using regular expression before file upload
              document.getElementById("image_img").focus();
              alert (document.getElementById("error_img").innerHTML="Please choose only JPG, JPEG, PNG format images."); 
              return false;
           }
            var img = document.getElementById("image_img"); 
           // alert(img.files[0].size / 1024);
            if(img.files[0].size > 307200)  // validation according to file size
            {
            alert(document.getElementById("error_img").innerHTML="Please choose image file maximum 300 KB.");
            return false;
             }
             return true;
      }
}




function Validate2()
{
     var image =document.getElementById("image").value;
     if(image!='')
     {
           var checkimg = image.toLowerCase();
          if (!checkimg.match(/(\.jpg|\.png|\.JPG|\.PNG|\.jpeg|\.JPEG)$/)){ // validation of file extension using regular expression before file upload
              document.getElementById("image").focus();
              alert (document.getElementById("errorName5").innerHTML="<?=_PHOTOERRSIZE?>"); 
              return false;
           }
            var img = document.getElementById("image"); 
           // alert(img.files[0].size);
            if(img.files[0].size >  200000)  // validation according to file size
            {
            alert(document.getElementById("errorName5").innerHTML="<?=_PHOTOERRTYPE?>");
            return false;
             }
             return true;
      }
}


function Validate1()
{
     var image =document.getElementById("image").value;
     if(image!='')
     {
           var checkimg = image.toLowerCase();
          if (!checkimg.match(/(\.jpg|\.png|\.JPG|\.PNG|\.jpeg|\.JPEG)$/)){ // validation of file extension using regular expression before file upload
              document.getElementById("image").focus();
              alert(document.getElementById("errorName5").innerHTML="Please choose only JPG, JPEG, PNG format images"); 
             
              return false;
           }
            var img = document.getElementById("image"); 
           // alert(img.files[0].size);
            if(img.files[0].size >  1024000)  // validation according to file size
            {
            alert(document.getElementById("errorName5").innerHTML="Please choose image file maximum 1 MB (1024 KB)");
            return false;
             }
             return true;
      }
}

function Validategallery()
{
     var image =document.getElementById("image").value;
     if(image!='')
     {
           var checkimg = image.toLowerCase();
          if (!checkimg.match(/(\.jpg|\.png|\.JPG|\.PNG|\.jpeg|\.JPEG)$/)){ // validation of file extension using regular expression before file upload
              document.getElementById("image").focus();
              alert(document.getElementById("errorName5").innerHTML="Please choose only JPG, JPEG, PNG format images"); 
             
              return false;
           }
            var img = document.getElementById("image"); 
           // alert(img.files[0].size);
            if(img.files[0].size >  10485700)  // max 10 MB
            {
            alert(document.getElementById("errorName5").innerHTML="Please choose image file maximum 10 MB");
            return false;
             }
             return true;
      }
}
function Validatefile()
{
     var file =document.getElementById("file").value;
     if(file!='')
     {
           var checkimg = file.toLowerCase();
          if (!checkimg.match(/(\.pdf|\.doc|\.docx|\.ppt|\.PNG|\.png|\.jpg|\.jpeg)$/)){ // validation of file extension using regular expression before file upload
              document.getElementById("file").focus();
              alert(document.getElementById("errorName5").innerHTML="Please choose only PDF, DOC, PPT, PNG, JPG format files"); 
             
              return false;
           }
            var img = document.getElementById("file"); 
           // alert(img.files[0].size);
            if(img.files[0].size >  5242880)  // validation according to file size
            {
            alert(document.getElementById("errorName5").innerHTML="Please choose file maximum 5 MB");
            return false;
             }
             return true;
      }
}