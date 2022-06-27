$(function(){
  $("#form1").validate({
      rules: {
        username:{
          required: true,
          minlength: 5
        },
        phone:{
          required: true,
          phoneUS:true
        },
        email: {
          required: true
        },
        course:{
         required: true,
         minlength:6,
         maxlength: 6
       },
       studentNum:{
         required: true,
         minlength: 9,
         maxlength: 9
       },
        about:{
          minlength: 20
        },
        publish:{
          minlength: 4,
          maxlength: 4
        },
        date:{
          required: true,
          minlength: 8
        }
      },
    messages: {
      username: {
        required: "Please enter your username",
        minlength:"Please enter atleast 5 characters"
      },
      phone:{
        required: "Please enter your phone number",
        phoneUS: "Please specify a valid phone number"
      },
      course:{
        required: "Please enter your phone number",
        maxlength: "Please enter only 6 digits",
        minlength: "Please enter only 6 digits"
      },
      studentNum:{
        required: "Please enter your phone number",
        minlength: "Please enter exactlY 9 digits",
        maxlength: "Please enter exactly 9 digits"
      },
      email:{
        required:"Please enter your email address"
      },
      about:{
        minlength:" Please enter atleast 20 characters"
      },
      publish:{
        minlength: "Enter a year XXXX",
        maxlength: "Enter a year XXXX"
      },
      date:{
        required:"Please enter the date",
        minlength:" Please enter the date DD-MM-YY"
      }

    }
  }
  )
  document.getElementById("scale").oninput = function() {
  document.getElementById("spanscale").innerHTML = this.value;
}
});
