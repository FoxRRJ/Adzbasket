


window.addEventListener("pageshow", function (event) {
  var perfEntries = performance.getEntriesByType("navigation");
  if (perfEntries[0].type === "back_forward") {
    location.reload();
  }
});

// ===============>>>>>>>>>>>>>>>>>>>>>>





var $filterCheckboxes = $("input.filter:checkbox");

var filterFunc = function () {

  var selectedFilters = {};

  $filterCheckboxes.filter(':checked').each(function () {

    if (!selectedFilters.hasOwnProperty(this.name)) {
      selectedFilters[this.name] = [];
    }

    selectedFilters[this.name].push(this.value);

    console.log(selectedFilters)


  });




  // create a collection containing all of the filterable elements
  var $filteredResults = $('.flower');


  // loop over the selected filter name -> (array) values pairs
  $.each(selectedFilters, function (name, filterValues) {


    // filter each .flower element
    $filteredResults = $filteredResults.filter(function () {

      var matched = false,
        currentFilterValues = $(this).data('category').split(' ');


      // loop over each category value in the current .flower's data-category
      $.each(currentFilterValues, function (_, currentFilterValue) {


        // if the current category exists in the selected filters array
        // set matched to true, and stop looping. as we're ORing in each
        // set of filters, we only need to match once

        if ($.inArray(currentFilterValue, filterValues) != -1) {


          matched = true;
          return false;

        }
      });


      // if matched is true the current .flower element is returned

      return matched;

    });

  });


  $('.flower').hide().filter($filteredResults).show();


  var IDs = [];

  for (var i = 0; i < $filteredResults.length; i++) {


    $($filteredResults[i]).each(function () { IDs.push($filteredResults[i].id + "a"); });

  }

  localStorage.setItem("datavalue", JSON.stringify(IDs));
  console.log(IDs)

}

$filterCheckboxes.on('change', filterFunc);
console.log($filterCheckboxes);



window.onload = function(){
  document.getElementById('close').onclick = function(){
    $("#button-popup").hide();
  };
};

$("#floating_btn").draggable({ cancel: '.no-drag' });
$("#floating_btn").click(function () {
  $('#button-popup').slideToggle('fast');

});



/*     adtype logic*/

$(document).ready(function () {
  $("#campaign-btn").click(function () {
    // alert("dsdsadas");

    $("#floating_btn").show();

    var elem = document.getElementById("myBar");

    // $(document).scrollTop($(document).height());

    if ($("#brand-awarness").is(":checked") == true) {
      elem.style.width = "4%";
      $("#card4").fadeIn(2000);
    } else if ($("#brand-awarness").is(":checked") == false) {
      elem.style.width = "0.5%";
    }
    if ($("#traffic").is(":checked") == true) {
      elem.style.width = "6%";
      $("#card4").fadeIn(2000);
    }

    if ($("#conversion").is(":checked") == true) {
      elem.style.width = "8%";
      $("#card4").fadeIn(2000);
    }

    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  });
});

// Target audience ----------------------------------

$(document).ready(function () {
  $("#target-btn").click(function () {
    var elem = document.getElementById("myBar");
    // $(document).scrollTop($(document).height());
    // $(document).scrollTop();

    if ($("#working").is(":checked") == true) {
      elem.style.width = "9%";
      $("#card12").fadeIn(2000);
    }

    if ($("#students").is(":checked") == true) {
      elem.style.width = "10%";
      $("#card12").fadeIn(2000);
    }

    if ($("#millenials").is(":checked") == true) {
      elem.style.width = "12%";
      $("#card12").fadeIn(2000);
    }
    if ($("#housewives").is(":checked") == true) {
      elem.style.width = "13%";
      $("#card12").fadeIn(2000);
    }
    if ($("#travellers").is(":checked") == true) {
      elem.style.width = "14%";
      $("#card12").fadeIn(2000);
    }
    if ($("#net-worth").is(":checked") == true) {
      elem.style.width = "15%";
      $("#card12").fadeIn(2000);
    }


    if ($("#others").is(":checked") == true) {
      elem.style.width = "16%";
      $("#card12").fadeIn(2000);
    }

    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  });
});

$(document).ready(function () {
  $("#industry-btn").click(function () {
    var elem = document.getElementById("myBar");
    

    if ($("#ott").is(":checked") == true) {
      elem.style.width = "17%";
      $("#card5").fadeIn(2000);
    }

    if ($("#ecommerce").is(":checked") == true) {
      elem.style.width = "17%";
      $("#card5").fadeIn(2000);
    }

    if ($("#fintech").is(":checked") == true) {
      elem.style.width = "17%";
      $("#card5").fadeIn(2000);
    }
    if ($("#music").is(":checked") == true) {
      elem.style.width = "17%";
      $("#card5").fadeIn(2000);
    }
    if ($("#news").is(":checked") == true) {
      elem.style.width = "17%";
      $("#card12").fadeIn(2000);
    }
    if ($("#gcommunity").is(":checked") == true) {
      elem.style.width = "17%";
      $("#card5").fadeIn(2000);
    }

    if ($("#telecom").is(":checked") == true) {
      elem.style.width = "17%";
      $("#card5").fadeIn(2000);
    }

    if ($("#health").is(":checked") == true) {
      elem.style.width = "17%";
      $("#card12").fadeIn(2000);
    }

    if ($("#travel").is(":checked") == true) {
      elem.style.width = "17%";
      $("#card5").fadeIn(2000);
    }

    if ($("#matrimony").is(":checked") == true) {
      elem.style.width = "17%";
      $("#card5").fadeIn(2000);
    }

    if ($("#automobile").is(":checked") == true) {
      elem.style.width = "16%";
      $("#card5").fadeIn(2000);
    }

    if ($("#food-delivery").is(":checked") == true) {
      elem.style.width = "17%";
      $("#card5").fadeIn(2000);
    }

    if ($("#gaming").is(":checked") == true) {
      elem.style.width = "17%";
      $("#card5").fadeIn(2000);
    }

    if ($("#smedia").is(":checked") == true) {
      elem.style.width = "17%";
      $("#card5").fadeIn(2000);
    }

    if ($("#other-industry").is(":checked") == true) {
      elem.style.width = "17%";
      $("#card5").fadeIn(2000);
    }

    if ($("#noneind").is(":checked") == true) {
      elem.style.width = "17%";
      $("#card5").fadeIn(2000);
    }

    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  });
});

// demographic content--------------------

$(document).ready(function () {
  $("#demographic-btn").click(function () {
    var elem = document.getElementById("myBar");

    if ($("#age").is(":checked") == true) {
      elem.style.width = "19%";
      $("#card6").fadeIn(2000);
    }
    if ($("#gender").is(":checked") == true) {
      elem.style.width = "21%";
      $("#card6").fadeIn(2000);
    }
    if ($("#parental-status").is(":checked") == true) {
      elem.style.width = "25%";
      $("#card6").fadeIn(2000);
    }
    if ($("#none").is(":checked") == true) {
      elem.style.width = "26%";
      $("#card6").fadeIn(2000);
    }

    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  });
});


// AD TYPE ---------------------------


$(document).ready(function () {
  $("#ad-type-btn").click(function () {
    var elem = document.getElementById("myBar");

    // elem.style.width = "40%";
    if ($("#bannertype").is(":checked") == true) {
      elem.style.width = "32.5%";
      $("#card7").fadeIn(2000);
    }
    if ($("#videotype").is(":checked") == true) {
      elem.style.width = "40%";
      $("#card7").fadeIn(2000);
    }

    if ($("#audiotype").is(":checked") == true) {
      elem.style.width = "41%";
      $("#card7").fadeIn(2000);
    }
   


    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  });
});


/* To hide and unhide cpv and cpcv row if videotype checkbox is clicked */

/* To hide and unhide cpc and cpm cpi  row if bannertype checkbox is clicked */

$(function () {
  $("#bannertype").on("click", function () {
    $("#cpc-row").toggle(this.checked);
    $("#cpm-row").toggle(this.checked);
    $("#cpi-row").toggle(this.checked);
    $("#cpl-row").toggle(this.checked);
    $("#cpe-row").toggle(this.checked);
    $("#cpd-row").toggle(this.checked);
    $("#bidable").toggle(this.checked);
    $("#sccard").toggle(this.checked);
    $("#vouch").toggle(this.checked);
    $("#rpoint").toggle(this.checked);
  });
});

$(function () {
  $("#videotype").on("click", function () {
    $("#cpmv-row").toggle(this.checked);
    $("#cpv-row").toggle(this.checked);
    $("#cpcv-row").toggle(this.checked);
  });
});

$(function () {
  $("#audiotype").on("click", function () {
    $("#cpm-row").toggle(this.checked);

  });
});


// Pricing Model -----------------------

$(document).ready(function () {
  $("#pricing-btn").click(function () {
    var elem = document.getElementById("myBar");

    // elem.style.width = "40%";
    if ($("#cpc").is(":checked") == true) {
      elem.style.width = "43%";
      $("#card8").fadeIn(2000);
    }
    if ($("#cpm").is(":checked") == true) {
      elem.style.width = "46%";
      $("#card8").fadeIn(2000);
    }
    if ($("#cpi").is(":checked") == true) {
      elem.style.width = "49%";
      $("#card8").fadeIn(2000);
    }
    if ($("#cpv").is(":checked") == true) {
      elem.style.width = "52%";
      $("#card8").fadeIn(2000);
    }
    if ($("#cpcv").is(":checked") == true) {
      elem.style.width = "55%";
      $("#card8").fadeIn(2000);

    }
    if ($("#cpl").is(":checked") == true) {
      elem.style.width = "56%";
      $("#card8").fadeIn(2000);

    }
    if ($("#cpd").is(":checked") == true) {
      elem.style.width = "57%";
      $("#card8").fadeIn(2000);

    }
    if ($("#bidable1").is(":checked") == true) {
      elem.style.width = "58%";
      $("#card8").fadeIn(2000);
    }
    if ($("#scratchcard").is(":checked") == true) {
      elem.style.width = "58%";
      $("#card8").fadeIn(2000);

    }
    if ($("#vouche").is(":checked") == true) {
      elem.style.width = "58%";
      $("#card8").fadeIn(2000);

    }
    if ($("#rpnts").is(":checked") == true) {
      elem.style.width = "58%";
      $("#card8").fadeIn(2000);
    }
    if ($("#cpe").is(":checked") == true) {
      elem.style.width = "59%";
      $("#card8").fadeIn(2000);
    }
    if ($("#cpmsv").is(":checked") == true) {
      elem.style.width = "60%";
      $("#card8").fadeIn(2000);

    }
  

    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  });
});

// Estimated Budget ---------------------

document.getElementById("budget-btn").addEventListener("click", function () {

  var message = document.getElementById("namez").value;
  var zero_data = 0;
  if (message === "") {
    localStorage.setItem("budgetvalue", JSON.stringify(zero_data));
  } else {
    localStorage.setItem("budgetvalue", JSON.stringify(message));
  }
  

}, false);


$("#st-cmpn").click(function (event) {
  event.preventDefault();
  $(this).hide();
  $('#error').html('Hold Still! We are getting your cart ready');
  // const form = document.forms[0]
  // var budgetss = localStorage.getItem("budgetvalue");
  // var bud_dyn = JSON.parse(budgetss);
  // var formData = $("#campaign-form").serializeArray();

  // $.ajax({
  //   url: 'https://script.google.com/macros/s/AKfycbyR1i4VE6Jz9oFMlyAIs0teEzygFbm2foOm-CEI64-WSLICiKCb59k9cJHsr9YGDCgnOw/exec',
  //   type: 'POST',
  //   dataType: 'text',
  //   data: formData,
  //   success: function (response) {
  //     console.log(response)

  //     if (bud_dyn == 0) {
  //       window.location.href = "basket.html";
  //     }
  //     else {
  //       window.location.href = "suggested-basket.html";
  //     }
  //   }


  // });

  window.location.href = "basket.html";


});


$(document).ready(function () {
  $("#budget-btn").click(function () {
    var elem = document.getElementById("myBar");

    // elem.style.width = "40%";
    if ($("#just-browsing").is(":checked") == true) {
      elem.style.width = "62.5%";
      $("#card9").fadeIn(2000);
    }
    if ($("#start-a-campaign").is(":checked") == true) {
      elem.style.width = "70%";
      $("#card9").fadeIn(2000);
    }
    $("#card9").fadeIn(2000);
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  });
});



// Dates for campaign -----------------------------

$(document).ready(function () {
  $("#date-btn").click(function () {
    var elem = document.getElementById("myBar");
    var valueDate = document.getElementById("start-date").value;
    var valueDate1 = document.getElementById("end-date").value;
    var valueDate2 = document.getElementById("start-time").value;
    var valueDate3 = document.getElementById("end-time").value;
    if (valueDate == null || valueDate == "") {
      alert("start-Date is empty");
    } else {
      elem.style.width = "75%";
    }
    ////////////////////////

    if (valueDate1 == null || valueDate1 == "") {
      alert("End-Date is empty");
    } else {
      elem.style.width = "78%";
      $("#card10").fadeIn(2000);
    }

    ////////////////////
    if (valueDate2 == null || valueDate2 == "") {
      // alert('start-Time is empty');
    } else {
      elem.style.width = "82%";
    }
    ///////////////////////

    if (valueDate3 == null || valueDate3 == "") {
      // alert('End-Time is empty');
    } else {
      elem.style.width = "85%";
    }

    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  });
});

$(function () {
  var dtToday = new Date();

  var month = dtToday.getMonth() + 1;
  var day = dtToday.getDate();
  var year = dtToday.getFullYear();
  if (month < 10) month = "0" + month.toString();
  if (day < 10) day = "0" + day.toString();

  var maxDate = year + "-" + month + "-" + day;

  // or instead:
  // var maxDate = dtToday.toISOString().substr(0, 10);

  // alert(maxDate);
  $("#start-date").attr("min", maxDate);
});

$(function () {
  var dtToday = new Date();

  var month = dtToday.getMonth() + 1;
  var day = dtToday.getDate();
  var year = dtToday.getFullYear();
  if (month < 10) month = "0" + month.toString();
  if (day < 10) day = "0" + day.toString();

  var maxDate = year + "-" + month + "-" + day;

  // or instead:
  // var maxDate = dtToday.toISOString().substr(0, 10);

  // alert(maxDate);
  $("#end-date").attr("min", maxDate);

  $('#end-date').on('change', function () {
    var startDate = $('#start-date').val();
    var endDate = $('#end-date').val();
    if (endDate < startDate) {
      alert('End date should be greater than Start date.');
      $('#end-date').val('');
    }
  });
});



// Location -----------------------

$(document).ready(function () {
  $("#location-btn").click(function () {
    var elem = document.getElementById("myBar");

    if ($("#bangalore").is(":checked") == true) {
      elem.style.width = "86.6%";
      $("#card11").fadeIn(2000);
    }

    if ($("#mumbai").is(":checked") == true) {
      elem.style.width = "87.4%";
      $("#card11").fadeIn(2000);
    }

    if ($("#delhi").is(":checked") == true) {
      elem.style.width = "89%";
      $("#card11").fadeIn(2000);
    }
    if ($("#chennai").is(":checked") == true) {
      elem.style.width = "90.6%";
      $("#card11").fadeIn(2000);
    }
    if ($("#kolkata").is(":checked") == true) {
      elem.style.width = "92%";
      $("#card11").fadeIn(2000);
    }
    if ($("#ahmedabad").is(":checked") == true) {
      elem.style.width = "94%";
      $("#card11").fadeIn(2000);
    }
    if ($("#Hyderabad").is(":checked") == true) {
      elem.style.width = "96%";
      $("#card11").fadeIn(2000);
    }
    if ($("#pune").is(":checked") == true) {
      elem.style.width = "98%";
      $("#card11").fadeIn(2000);
    }
    if ($("#coimbatore").is(":checked") == true) {
      elem.style.width = "100%";
      $("#card11").fadeIn(2000);
    }
    if ($("#Vijayawada").is(":checked") == true) {
      elem.style.width = "100%";
      $("#card11").fadeIn(2000);
    }
    if ($("#Indore").is(":checked") == true) {
      elem.style.width = "100%";
      $("#card11").fadeIn(2000);
    }
    if ($("#Mysuru").is(":checked") == true) {
      elem.style.width = "100%";
      $("#card11").fadeIn(2000);
    }
    if ($("#Pan-India").is(":checked") == true) {
      elem.style.width = "100%";
      $("#card11").fadeIn(2000);
    }

    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  });
});

$(document).ready(function () {
  $("#submit-vyab").on("click", function () {
    $(this).hide();
    $("#card12").fadeIn(2000);
  });
});





































/*   get checkbox values*/
// console.log("linked");
// var listarray = [];
// var checkboxes = document.querySelectorAll(".form-check-input");
// console.log(checkboxes);

// for (var checkbox of checkboxes) {
//   checkbox.addEventListener("click", function () {
//     if (this.checked == true) {
//       listarray.push(this.value);
//       console.log(this.value);
//     }

//     else {

//       console.log(" you have unchecked the box");
//     }
//   })
// }