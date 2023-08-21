

      function myFunction() {
        var cust_name = document.getElementById("name").value;

        localStorage.setItem("custr_name", JSON.stringify(cust_name));

     }
      
       
$("#st-cmpn").click(function (event) {
  event.preventDefault();
   $(this).hide();
  $('#error').html(' Thank you for submitting your details.Lets Get Your Campaign Started!');
  myFunction()
  var formData = $("#form").serializeArray();

//   $.ajax({
//     url: 'https://script.google.com/macros/s/AKfycbxw-dkwmU9voQZZgfgjsOMI87nLMqYWwl0jetE4aYcwWa1x4IUFbqJkcmz5Wxt3jDn6vg/exec',
//     type: 'POST',
//     dataType: 'text',
//     data: formData ,
//     success: function (response) {
//       console.log(response)
      window.location.href = "campaign-information.html";
//     }
  
  
//   });
  
 

});

window.addEventListener("pageshow", function (event) {
  var perfEntries = performance.getEntriesByType("navigation");
  if (perfEntries[0].type === "back_forward") {
    location.reload();
  }
});



// prevent entering numbers in personal information page




$("#name").bind('keydown', function (event) {
  var key = event.which;
  if (key >= 48 && key <= 57) {
    event.preventDefault();
  }
});


$("#company-name").bind('keydown', function (event) {
  var key = event.which;
  if (key >= 48 && key <= 57) {
    event.preventDefault();
  }
});



$("#designation").bind('keydown', function (event) {
  var key = event.which;
  if (key >= 48 && key <= 57) {
    event.preventDefault();
  }
});

$("#industry").bind('keydown', function (event) {
  var key = event.which;
  if (key >= 48 && key <= 57) {
    event.preventDefault();
  }
});


/////////////////////////////////////////////////////////////////////////////

// ================= Name card ==================== 

$(document).ready(function () {
  $("#name-btn").click(function () {
    var elem = document.getElementById("myBar");

    var FirstName = $("#name").val();
    if (FirstName === "") {
      alert("Name cannot be empty");
      elem.style.width = "1%";
    } else {
      elem.style.width = "30%";
      $("#card2").fadeIn(2000);
    }
  });
});

// name card ends-------------------------------------------

// -------------------------------------------------------------------------- company card
$(document).ready(function () {
  $("#company-btn").click(function () {
    var elem = document.getElementById("myBar");
    var CompanyName = $("#company-name").val();
    if (CompanyName === "") {
      alert("company Name cannot be empty");
      // elem.style.width = "39%";;
    } else {
      elem.style.width = "60%";
      $("#card3").fadeIn(2000);
      window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
    }
  });
});

// company card ends --------------------------------------

// ============================= designation card  ==========================

$(document).ready(function () {
  $("#designation-btn").click(function () {
    var elem = document.getElementById("myBar");
    var Designtn = $("#designation").val();
    if (Designtn === "") {
      alert("Designation cannot be empty");

    } else {
      elem.style.width = "80%";
      $("#card4").fadeIn(2000);
      window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });

    }

  });


});


$(document).ready(function () {
  $("#industry-btn").click(function () {
    var elem = document.getElementById("myBar");
    var indstry = $("#industry").val();
    if (indstry === "") {
      alert("industry cannot be empty");

    } else {
      elem.style.width = "100%";
      $("#st-cmpn").fadeIn(2000);
      window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });

    }

  });


});




