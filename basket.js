





var ds = localStorage.getItem("datavalue");
var budgetss = localStorage.getItem("budgetvalue");

var dyn_img = JSON.parse(ds);
// console.log(dyn_img)
var dyn_img_temp_array = dyn_img;

// console.log(dyn_img_temp_array)


var bud_dyn = JSON.parse(budgetss);


var gst = 18 / 100 * bud_dyn;
var total_bud_gst = parseInt (bud_dyn) + gst;
$('#auto_data_total').val( bud_dyn);
$('#auto_data_gst').val( gst);
$('#auto_data_budget').val(total_bud_gst);

$('.bud').html(bud_dyn);
$('.bud-gst').html(gst);
/* retrieving budget value entered budget section frm campaign page and dynamically updating it in total amount section in suggested basket page  */


var lengthany = dyn_img.length;

var budget_data = Math.floor(bud_dyn / lengthany);
$('.bd-data').attr('placeholder', budget_data);





if (dyn_img.includes("1")) {
  $("#sg1").show();
}
if (dyn_img.includes("2")) {
  $("#sg2").show();
}
if (dyn_img.includes("3")) {
  $("#sg3").show();
}
if (dyn_img.includes("4")) {
  $("#sg4").show();
}
if (dyn_img.includes("5")) {
  $("#sg5").show();
}
if (dyn_img.includes("6")) {
  $("#sg6").show();
}
if (dyn_img.includes("7")) {
  $("#sg7").show();
}
if (dyn_img.includes("8")) {
  $("#sg8").show();
}
if (dyn_img.includes("9")) {
  $("#sg9").show();
}
if (dyn_img.includes("10")) {
  $("#sg10").show();
}

if (dyn_img.includes("10")) {
  $("#sg10").show();
}
if (dyn_img.includes("12")) {
  $("#sg12").show();
}
if (dyn_img.includes("13")) {
  $("#sg13").show();
}
if (dyn_img.includes("14")) {
  $("#sg14").show();
}
if (dyn_img.includes("15")) {
  $("#sg15").show();
}
if (dyn_img.includes("16")) {
  $("#sg16").show();
}
if (dyn_img.includes("17")) {
  $("#sg17").show();
}
if (dyn_img.includes("18")) {
  $("#sg18").show();
}
if (dyn_img.includes("19")) {
  $("#sg19").show();
}

if (dyn_img.includes("20")) {
  $("#sg20").show();
}

if (dyn_img.includes("21")) {
  $("#sg21").show();
}

if (dyn_img.includes("22")) {
  $("#sg22").show();
}

if (dyn_img.includes("23")) {
  $("#sg23").show();
}

if (dyn_img.includes("24")) {
  $("#sg24").show();
}

if (dyn_img.includes("25")) {
  $("#sg25").show();
}

if (dyn_img.includes("26")) {
  $("#sg26").show();
}

if (dyn_img.includes("27")) {
  $("#sg27").show();
}

if (dyn_img.includes("28")) {
  $("#sg28").show();
}
if (dyn_img.includes("29")) {
  $("#sg29").show();
}
if (dyn_img.includes("30")) {
  $("#sg30").show();
}
if (dyn_img.includes("31")) {
  $("#sg31").show();
}
if (dyn_img.includes("32")) {
  $("#sg32").show();
}
if (dyn_img.includes("33")) {
  $("#sg33").show();
}
if (dyn_img.includes("34")) {
  $("#sg34").show();
}
if (dyn_img.includes("35")) {
  $("#sg35").show();
}
if (dyn_img.includes("36")) {
  $("#sg36").show();
}
if (dyn_img.includes("37")) {
  $("#sg37").show();
}
if (dyn_img.includes("38")) {
  $("#sg38").show();
}
if (dyn_img.includes("39")) {
  $("#sg39").show();
}
if (dyn_img.includes("40")) {
  $("#sg40").show();
}
if (dyn_img.includes("41")) {
  $("#sg41").show();
}
if (dyn_img.includes("42")) {
  $("#sg42").show();
}
if (dyn_img.includes("43")) {
  $("#sg43").show();
}
if (dyn_img.includes("44")) {
  $("#sg44").show();
}
if (dyn_img.includes("45")) {
  $("#sg45").show();
}
if (dyn_img.includes("46")) {
  $("#sg46").show();
}
if (dyn_img.includes("47")) {
  $("#sg47").show();
}
if (dyn_img.includes("48")) {
  $("#sg48").show();
}
if (dyn_img.includes("50")) {
  $("#sg50").show();
}
if (dyn_img.includes("51")) {
  $("#sg51").show();
}
if (dyn_img.includes("52")) {
  $("#sg52").show();
}
if (dyn_img.includes("53")) {
  $("#sg53").show();
}
if (dyn_img.includes("55")) {
  $("#sg55").show();
}
if (dyn_img.includes("56")) {
  $("#sg56").show();
}
if (dyn_img.includes("57")) {
  $("#sg57").show();
}
if (dyn_img.includes("58")) {
  $("#sg58").show();
}
if (dyn_img.includes("59")) {
  $("#sg59").show();
}

if (dyn_img.includes("60")) {
  $("#sg60").show();
}





/*  function toremove a value from an array   */

function remove_array_value(array, value) {
    var index = array.indexOf(value);
    if (index >= 0) {
        array.splice(index, 1);
        reindex_array(array);
    }
}

function reindex_array(array) {
    var result = [];
    for (var key in array) {
        result.push(array[key]);
    }
    return result;
}


$(document).ready(function () {

    $(".del").click(function () {

        var del_id = [];


        var clicked_ids = ($(this).attr("id")); /* get the id of button clicked  */

        del_id.push(clicked_ids)

        var str_del_id = del_id.toString(); /* convert the id clicked into string to pass it as a value to remove from array function   */

        var del_img = "sg" + del_id;  /* creating a variable to create a clone of the id value of div in basket page */

        $("#" + del_img).hide();

        var del_tot = del_id + "a";

        var delete_budgetvalue_total = $('#' + del_tot).attr('placeholder');
        var total = document.getElementById("budget-total").innerHTML;

        var delete_total = total - delete_budgetvalue_total;
        var delete_total_gst = 18 / 100 * delete_total;
        var total_budget_gst = delete_total + delete_total_gst;
        $(".bud").html(delete_total.toFixed(2));
        $(".bud-gst").html(delete_total_gst.toFixed(2));
        $('#auto_data_budget').val( total_budget_gst);
        $('#auto_data_total').val( delete_total);
        $('#auto_data_gst').val( delete_total_gst);






    });

});


// to enable editing of budget //////////////////////////////////

$(document).ready(function () {
    $("#disney-btn").click(function () {
        $('.disneybudget').prop('readonly', false).focus();


    });

    $("#ola-btn").click(function () {
        $('.ola').prop('readonly', false).focus();
    });

    $("#paytm-btn").click(function () {
        $('.paytm').prop('readonly', false).focus();
    });

    $("#phone-pay-btn").click(function () {
        $('.phone-pay').prop('readonly', false).focus();
    });

    $("#mmt-btn").click(function () {
        $('.mmt-budget').prop('readonly', false).focus();
    });

    $("#ibibo-btn").click(function () {
        $('.ibibo-budget').prop('readonly', false).focus();
    });

    $("#hb-btn").click(function () {
        $('.bolly-budget').prop('readonly', false).focus();
    });

    $("#hm-btn").click(function () {
        $('.bollymusic-budget').prop('readonly', false).focus();
    });


    $("#pm-btn").click(function () {
        $('.mall-budget').prop('readonly', false).focus();
    });


    $("#rediff-btn").click(function () {
        $('.red-budget').prop('readonly', false).focus();
    });

    $("#swiggy-btn").click(function () {
        $('.swig-budget').prop('readonly', false).focus();
    });

    $("#tata-btn").click(function () {
        $('.tata-budget').prop('readonly', false).focus();
    });

    $("#rbus-btn").click(function () {
        $('.rbus-budget').prop('readonly', false).focus();
    });

    $("#alt-btn").click(function () {
        $('.alt-budget').prop('readonly', false).focus();
    });

    $("#xt-btn").click(function () {
        $('.xt-budget').prop('readonly', false).focus();
    });

    $("#wyn-btn").click(function () {
        $('.wyn-budget').prop('readonly', false).focus();
    });

    $("#thnx-btn").click(function () {
        $('.thnx-budget').prop('readonly', false).focus();
    });

    $("#games-btn").click(function () {
        $('.games-budget').prop('readonly', false).focus();
    });

    $("#mc-btn").click(function () {
        $('.mc-budget').prop('readonly', false).focus();
    });

    $("#ssg-btn").click(function () {
        $('.ssg-budget').prop('readonly', false).focus();
    });
    $("#sn-btn").click(function () {
        $('.sn-budget').prop('readonly', false).focus();
    });

    $("#ie-btn").click(function () {
        $('.ie-budget').prop('readonly', false).focus();
    });

    $("#zee-btn").click(function () {
        $('.zee-budget').prop('readonly', false).focus();
    });

    $("#vt-btn").click(function () {
        $('.vt-budget').prop('readonly', false).focus();
    });

    $("#mg-btn").click(function () {
        $('.mg-budget').prop('readonly', false).focus();
    });

    $("#tc-btn").click(function () {
        $('.tc-budget').prop('readonly', false).focus();
    });

    $("#part-btn").click(function () {
        $('.part-budget').prop('readonly', false).focus();
    });

    $("#inshot-btn").click(function () {
        $('.inshot-budget').prop('readonly', false).focus();
    });
    
    
  $("#amzn-btn").click(function () {
    $('.amzn-budget').prop('readonly', false).focus();
  });
  $("#bms-btn").click(function () {
    $('.bms-budget').prop('readonly', false).focus();
  });
  $("#mbskt-btn").click(function () {
    $('.mbskt-budget').prop('readonly', false).focus();
  });
  $("#nbh-btn").click(function () {
    $('.nbh-budget').prop('readonly', false).focus();
  });
  $("#pheasy-btn").click(function () {
    $('.pheasy-budget').prop('readonly', false).focus();
  });
  $("#mbwik-btn").click(function () {
    $('.mbwik-budget').prop('readonly', false).focus();
  });
  $("#gln-btn").click(function () {
    $('.gln-budget').prop('readonly', false).focus();
  });
  $("#gpy-btn").click(function () {
    $('.gpy-budget').prop('readonly', false).focus();
  });
  $("#svn-btn").click(function () {
    $('.svn-budget').prop('readonly', false).focus();
  });
  $("#dhunt-btn").click(function () {
    $('.dhunt-budget').prop('readonly', false).focus();
  });
  $("#jio-btn").click(function () {
    $('.jio-budget').prop('readonly', false).focus();
  });
  $("#mtm-btn").click(function () {
    $('.mtm-budget').prop('readonly', false).focus();
  });
  $("#cwl-btn").click(function () {
    $('.cwl-budget').prop('readonly', false).focus();
  });
  $("#uber-btn").click(function () {
    $('.uber-budget').prop('readonly', false).focus();
  });
  $("#pfm-btn").click(function () {
    $('.pfm-budget').prop('readonly', false).focus();
  });
  $("#gaana-btn").click(function () {
    $('.gaana-budget').prop('readonly', false).focus();
  });
  $("#cred-btn").click(function () {
    $('.cred-budget').prop('readonly', false).focus();
  });
  $("#tataplay-btn").click(function () {
    $('.tataplay-budget').prop('readonly', false).focus();
  });
  $("#snap-btn").click(function () {
    $('.snap-budget').prop('readonly', false).focus();
  });
  $("#ixigo-btn").click(function () {
    $('.ixigo-budget').prop('readonly', false).focus();
  });
  $("#vi-btn").click(function () {
    $('.vi-budget').prop('readonly', false).focus();
  });
  $("#ching-btn").click(function () {
    $('.ching-budget').prop('readonly', false).focus();
  });
  $("#sliv-btn").click(function () {
    $('.sliv-budget').prop('readonly', false).focus();
  });
  $("#wtr-btn").click(function () {
    $('.wtr-budget').prop('readonly', false).focus();
  });
  $("#flkt-btn").click(function () {
    $('.flkt-budget').prop('readonly', false).focus();
  });
  $("#ftv-btn").click(function () {
    $('.ftv-budget').prop('readonly', false).focus();
  });
  $("#share-btn").click(function () {
    $('.share-budget').prop('readonly', false).focus();
  });
  
  $("#crex-btn").click(function () {
        $('.crex-budget').prop('readonly', false).focus();
    });

    $("#spotify-btn").click(function () {
        $('.spotify-budget').prop('readonly', false).focus();
    });

    $("#adda-btn").click(function () {
        $('.adda-budget').prop('readonly', false).focus();
    });


});

function calculateSum() {

    var sum = 0;
    var gst = 0;
    var total_sg = 0;
    //iterate through each textboxes and add the values
    $(".bd-data").each(function () {

        //add only if the value is number
        if (!isNaN(this.value) && this.value.length != 0) {
            sum += parseFloat(this.value);
            gst = (18 / 100) * sum;
            total_sg = sum + gst;

        }


    });
    //.toFixed() method will roundoff the final sum to 2 decimal places
    $(".bud").html(sum.toFixed(2));
    $(".bud-gst").html(gst.toFixed(2));
    $('#auto_data_budget').val(total_sg);
    $('#auto_data_total').val( sum.toFixed(2));
    $('#auto_data_gst').val( gst.toFixed(2));
}

function ola(ele) {


    $("#2a").on("change keyup paste", function () {
        var x = parseInt(ele.value);
        $('#2a').attr('placeholder', x);
        var edit_ola = x - bud_dyn;
        var olaImpression = Math.floor(x / 332 * 1000);
        calculateSum();
        $('.olati').html(olaImpression);
    });
}

function swiggy(ele) {

    $("#11a").on("change keyup paste", function () {
        var x = parseInt(ele.value);
        $('#11a').attr('placeholder', x);
        var edit_swiggy = x - bud_dyn;
        var swiggyImpression = Math.floor(x / 108 * 1000);

        $('.swiggyti').html(swiggyImpression);
    });

}

function paytm(ele) {


    $("#3a").on("change keyup paste", function () {
        var x = parseInt(ele.value);
        $('#3a').attr('placeholder', x);
        var edit_paytm = x - bud_dyn;

        var paytmImpression = Math.floor(x / 250 * 1000);

        calculateSum();

        $('.paytmti').html(paytmImpression);

    });

}

function paytmm(ele) {
    var x = ele.value;
    var edit_paytm = x - bud_dyn;

    var paytmImpression = Math.floor(x / 250 * 1000);

    if (event.key === 'Enter') {

        calculateSum();

        $('.paytmmti').html(paytmImpression);

    }

}

function phonepe(ele) {

    $("#4a").on("change keyup paste", function () {
        var x = parseInt(ele.value);
        $('#4a').attr('placeholder', x);
        var edit_phpe = x - bud_dyn;
        var phonepeImpression = Math.floor(x / 201 * 1000);
        calculateSum();
        $('.phonepeti').html(phonepeImpression);
    });

}

function mc(ele) {

    $("#19a").on("change keyup paste", function () {
        var x = parseInt(ele.value);
        $('#19a').attr('placeholder', x);
        var edit_mc = x - bud_dyn;
        var mcImpression = Math.floor(x / 231 * 1000);

        calculateSum();
        $('.mcti').html(mcImpression);
    });

}

function mmt(ele) {

    $("#5a").on("change keyup paste", function () {
        var x = parseInt(ele.value);
        $('#5a').attr('placeholder', x);
        var edit_mmt = x - bud_dyn;
        var mmtImpression = Math.floor(x / 228 * 1000);

        calculateSum();
        $('.mmtti').html(mmtImpression);
    });

}

function voot(ele) {

    $("#24a").on("change keyup paste", function () {
        var x = parseInt(ele.value);
        $('#24a').attr('placeholder', x);
        var edit_voot = x - bud_dyn;
        var vootImpression = Math.floor(x / 94 * 1000);

        calculateSum();
        $('.vootti').html(vootImpression);
    });

}

function airtelx(ele) {

    $("#15a").on("change keyup paste", function () {
        var x = parseInt(ele.value);
        $('#15a').attr('placeholder', x);
        var edit_airtelx = x - bud_dyn;
        var airtelImpression = Math.floor(x / 216 * 1000);

        calculateSum();
        $('.airtelxImpti').html(airtelImpression);
    });

}
function airtelw(ele) {

    $("#16a").on("change keyup paste", function () {

        var x = parseInt(ele.value);
        $('#16a').attr('placeholder', x);
        var edit_airtelw = x - bud_dyn;
        var airtelImpression = Math.floor(x / 216 * 1000);
        calculateSum();
        $('.airtelwImpti').html(airtelImpression);
    });


}
function airtelt(ele) {

    $("#17a").on("change keyup paste", function () {
        var x = parseInt(ele.value);
        $('#17a').attr('placeholder', x);
        var edit_airtelt = x - bud_dyn;
        var airtelImpression = Math.floor(x / 216 * 1000);
        calculateSum();
        $('.airteltImpti').html(airtelImpression);
    });

}

function zee(ele) {

    $("#23a").on("change keyup paste", function () {
        var x = parseInt(ele.value);
        $('#23a').attr('placeholder', x);
        var edit_zee = x - bud_dyn;
        var zeeImpression = Math.floor(x / 112 * 1000);
        calculateSum();


        $('.zee5Impti').html(zeeImpression);
    });

}

function disney(ele) {
    $("#1a").on("change keyup paste", function () {
        var x = parseInt(ele.value);
        $('#1a').attr('placeholder', x);

        var disneyImpression = Math.floor(x / 52 * 1000);
        calculateSum();

        $('.disneyti').html(disneyImpression);
    });



}

function altt(ele) {


    $("#14a").on("change keyup paste", function () {
        var x = parseInt(ele.value);
        $('#14a').attr('placeholder', x);
        var edit_alt = x - bud_dyn;
        var altImpression = Math.floor(x / 5 * 1000);

        calculateSum();
        $('.altti').html(altImpression);
    });
}

function mygate(ele) {


    $("#25a").on("change keyup paste", function () {
        var x = parseInt(ele.value);
        $('#25a').attr('placeholder', x);
        var edit_mygate = x - bud_dyn;
        var mygImpression = Math.floor(x / 16 * 1000);

        calculateSum();
        $('.mygateImpti').html(mygImpression);
    });
}

function inshort(ele) {


    $("#28a").on("change keyup paste", function () {
        var x = parseInt(ele.value);
        $('#28a').attr('placeholder', x);
        var edit_inshort = x - bud_dyn;
        var inshortImpression = Math.floor(x / 360 * 1000);

        calculateSum();
        $('.inshortsImpti').html(inshortImpression);
    });
}

function croma(ele) {


    $("#12a").on("change keyup paste", function () {

        var x = parseInt(ele.value);
        $('#12a').attr('placeholder', x);
        var edit_croma = x - bud_dyn;
        var cromaImpression = Math.floor(x / 222 * 1000);


        calculateSum();
        $('.cromaImpti').html(cromaImpression);
    });
}

function trucaller(ele) {


    $("#26a").on("change keyup paste", function () {
        var x = parseInt(ele.value);
        $('#26a').attr('placeholder', x);
        var edit_tc = x - bud_dyn;
        var trucallerImpression = Math.floor(x / 65 * 1000);
        calculateSum();
        $('.truti').html(trucallerImpression);
    });
}
function picksart(ele) {


    $("#27a").on("change keyup paste", function () {
        var x = parseInt(ele.value);
        $('#27a').attr('placeholder', x);
        var edit_part = x - bud_dyn;
        var picImpression = Math.floor(x / 6 * 1000);

        calculateSum();
        $('.picsti').html(picImpression);
    });
}


function express(ele) {


    $("#22a").on("change keyup paste", function () {
        var x = parseInt(ele.value);
        $('#22a').attr('placeholder', x);
        var edit_exprs = x - bud_dyn;
        var expressImpression = Math.floor(x / 140 * 1000);

        calculateSum();
        $('.expressti').html(expressImpression);
    });
}

function ssg(ele) {


    $("#20a").on("change keyup paste", function () {
        var x = parseInt(ele.value);
        $('#20a').attr('placeholder', x);
        var edit_ssg = x - bud_dyn;
        var ssgImpression = Math.floor(x / 100 * 1000);

        calculateSum();
        $('.ssgti').html(ssgImpression);
    });
}

function rediff(ele) {


    $("#10a").on("change keyup paste", function () {
        var x = parseInt(ele.value);
        $('#10a').attr('placeholder', x);
        var edit_rediff = x - bud_dyn;
        var rediffImpression = Math.floor(x / 140 * 1000);


        calculateSum();
        $('.rediffti').html(rediffImpression);
    });
}

function sunxt(ele) {


    $("#21a").on("change keyup paste", function () {
        var x = parseInt(ele.value);
        $('#21a').attr('placeholder', x);
        var edit_snxt = x - bud_dyn;
        var sunxtImpression = Math.floor(x / 442 * 1000);
        calculateSum();
        $('.sunxtti').html(sunxtImpression);
    });
}


function hb(ele) {


    $("#7a").on("change keyup paste", function () {
        var x = parseInt(ele.value);
        $('#7a').attr('placeholder', x);
        var edit_hb = x - bud_dyn;
        var hbImpression = Math.floor(x / 160 * 1000);

        calculateSum();
        $('.hbti').html(hbImpression);
    });
}


function hm(ele) {


    $("#8a").on("change keyup paste", function () {
        var x = parseInt(ele.value);
        $('#8a').attr('placeholder', x);
        var edit_hm = x - bud_dyn;
        var hmImpression = Math.floor(x / 160 * 1000);


        calculateSum();
        $('.hmti').html(hmImpression);
    });
}



function hg(ele) {


    $("#18a").on("change keyup paste", function () {
        var x = parseInt(ele.value);
        $('#18a').attr('placeholder', x);
        var edit_hm = x - bud_dyn;
        var hmImpression = Math.floor(x / 160 * 1000);


        calculateSum();
        $('.hgti').html(hmImpression);
    });
}




function amzn(ele) {


    $("#29a").on("change keyup paste", function () {
      var x = parseInt(ele.value);
      $('#29a').val(x);
      $('#29a').attr('placeholder', x);
      var edit_inshort = x - bud_dyn;
      var amznImpression = Math.floor(x / 330 * 1000);
    
        calculateSum();
      $('.amznImpti').html(amznImpression);
    });
  }
  
  
  function bms(ele) {
  
  
    $("#30a").on("change keyup paste", function () {
      var x = parseInt(ele.value);
      $('#30a').val(x);
      $('#30a').attr('placeholder', x);
      var edit_inshort = x - bud_dyn;
      var bmsImpression = Math.floor(x / 332 * 1000);
     
        calculateSum();
  
      $('.bmsImpti').html(bmsImpression);
    });
  }
  
  
  function mbskt(ele) {
  
  
    $("#31a").on("change keyup paste", function () {
      var x = parseInt(ele.value);
      $('#31a').val(x);
      $('#31a').attr('placeholder', x);
      var edit_inshort = x - bud_dyn;
      var mbsktImpression = Math.floor(x / 310 * 1000);
      
        calculateSum();
      $('.mbsktImpti').html(mbsktImpression);
    });
  }
  
  
  function nbh(ele) {
  
  
    $("#32a").on("change keyup paste", function () {
      var x = parseInt(ele.value);
      $('#32a').val(x);
      $('#32a').attr('placeholder', x);
      var edit_inshort = x - bud_dyn;
      var nbhImpression = Math.floor(x / 130 * 1000);  
        calculateSum();

      $('.nbhImpti').html(nbhImpression);
    });
  }
  
  
  
  
  function pheasy(ele) {
  
  
    $("#33a").on("change keyup paste", function () {
      var x = parseInt(ele.value);
      $('#33a').val(x);
      $('#33a').attr('placeholder', x);
      var edit_inshort = x - bud_dyn;
      var pheasyImpression = Math.floor(x / 130 * 1000);
      
        calculateSum();
      $('.pheasyImpti').html(pheasyImpression);
    });
  }
  
  
  
  
  function mbwik(ele) {
  
  
    $("#34a").on("change keyup paste", function () {
      var x = parseInt(ele.value);
      $('#34a').val(x);
      $('#34a').attr('placeholder', x);
      var edit_inshort = x - bud_dyn;
      var mbwikImpression = Math.floor(x / 130 * 1000);
         calculateSum();
      $('.mbwikImpti').html(mbwikImpression);
    });
  }
  
  
  
  
  function gln(ele) {
  
  
    $("#35a").on("change keyup paste", function () {
      var x = parseInt(ele.value);
      $('#35a').val(x);
      $('#35a').attr('placeholder', x);
      var edit_inshort = x - bud_dyn;
      var glnImpression = Math.floor(x / 130 * 1000);
      
        calculateSum();
      $('.glnImpti').html(glnImpression);
    });
  }
  
  
  
  
  function gpy(ele) {
  
  
    $("#36a").on("change keyup paste", function () {
      var x = parseInt(ele.value);
      $('#36a').val(x);
      $('#36a').attr('placeholder', x);
      var edit_inshort = x - bud_dyn;
      var gpyImpression = Math.floor(x / 230 * 1000);
      
        calculateSum();
      $('.gpyImpti').html(gpyImpression);
    });
  }
  
  
  
  function svn(ele) {
  
  
    $("#37a").on("change keyup paste", function () {
      var x = parseInt(ele.value);
      $('#37a').val(x);
      $('#37a').attr('placeholder', x);
      var edit_inshort = x - bud_dyn;
      var svnImpression = Math.floor(x / 130 * 1000);
    
        calculateSum();
      $('.svnImpti').html(svnImpression);
    });
  }
  
  
  
  function dhunt(ele) {
  
  
    $("#38a").on("change keyup paste", function () {
      var x = parseInt(ele.value);
      $('#38a').val(x);
      $('#38a').attr('placeholder', x);
      var edit_inshort = x - bud_dyn;
      var dhuntImpression = Math.floor(x / 130 * 1000);
     
        calculateSum();
  $('.dhuntImpti').html(dhuntImpression);
    });
  }
  
  
  function jio(ele) {
  
  
    $("#39a").on("change keyup paste", function () {
      var x = parseInt(ele.value);
      $('#39a').val(x);
      $('#39a').attr('placeholder', x);
      var edit_inshort = x - bud_dyn;
      var jioImpression = Math.floor(x / 130 * 1000);
     
        calculateSum();
  
      $('.jioImpti').html(jioImpression);
    });
  }
  
  
  
  
  function mtm(ele) {
  
  
    $("#40a").on("change keyup paste", function () {
      var x = parseInt(ele.value);
      $('#40a').val(x);
      $('#40a').attr('placeholder', x);
      var edit_inshort = x - bud_dyn;
      var mtmImpression = Math.floor(x / 180 * 1000);
     
        calculateSum();
  
      $('.mtmImpti').html(mtmImpression);
    });
  }
  
  
  
  function cwl(ele) {
  
  
    $("#41a").on("change keyup paste", function () {
      var x = parseInt(ele.value);
      $('#41a').val(x);
      $('#41a').attr('placeholder', x);
      var edit_inshort = x - bud_dyn;
      var cwlImpression = Math.floor(x / 235 * 1000);
      
        calculateSum();
  
      $('.cwlImpti').html(cwlImpression);
    });
  }
  
  
  
  function uber(ele) {
  
  
    $("#42a").on("change keyup paste", function () {
      var x = parseInt(ele.value);
      $('#42a').val(x);
      $('#42a').attr('placeholder', x);
      var edit_inshort = x - bud_dyn;
      var uberImpression = Math.floor(x / 150 * 1000);
     
        calculateSum();
  
      $('.uberImpti').html(uberImpression);
    });
  }
  
  
  
  function pfm(ele) {
  
  
    $("#43a").on("change keyup paste", function () {
      var x = parseInt(ele.value);
      $('#43a').val(x);
      $('#43a').attr('placeholder', x);
      var edit_inshort = x - bud_dyn;
      var pfmImpression = Math.floor(x / 120 * 1000);
 
        calculateSum();
 
      $('.pfmImpti').html(pfmImpression);
    });
  }
  
  
  
  function gaana(ele) {
  
  
    $("#44a").on("change keyup paste", function () {
      var x = parseInt(ele.value);
      $('#44a').val(x);
      $('#44a').attr('placeholder', x);
      var edit_inshort = x - bud_dyn;
      var gaanaImpression = Math.floor(x / 48 * 1000);

        calculateSum();
  
      $('.gaanaImpti').html(gaanaImpression);
    });
  }
  
  
  
  function cred(ele) {
  
  
    $("#45a").on("change keyup paste", function () {
      var x = parseInt(ele.value);
      $('#45a').val(x);
      $('#45a').attr('placeholder', x);
      var edit_inshort = x - bud_dyn;
      var credImpression = Math.floor(x / 240 * 1000);
     
        calculateSum();

      $('.credImpti').html(credImpression);
    });
  }
  
  
  
  function tataplay(ele) {
  
  
    $("#46a").on("change keyup paste", function () {
      var x = parseInt(ele.value);
      $('#46a').val(x);
      $('#46a').attr('placeholder', x);
      var edit_inshort = x - bud_dyn;
      var tataplayImpression = Math.floor(x / 96 * 1000);
   
        calculateSum();

      $('.tataplayImpti').html(tataplayImpression);
    });
  }
  
  
  
  function snap(ele) {
  
  
    $("#47a").on("change keyup paste", function () {
      var x = parseInt(ele.value);
      $('#47a').val(x);
      $('#47a').attr('placeholder', x);
      var edit_inshort = x - bud_dyn;
      var snapImpression = Math.floor(x / 50 * 1000);
 
        calculateSum();

      $('.snapImpti').html(snapImpression);
    });
  }
  
  
  
  function ixigo(ele) {
  
  
    $("#50a").on("change keyup paste", function () {
      var x = parseInt(ele.value);
      $('#50a').val(x);
      $('#50a').attr('placeholder', x);
      var edit_inshort = x - bud_dyn;
      var ixigoImpression = Math.floor(x / 130 * 1000);
   
        calculateSum();
 
      $('.ixigoImpti').html(ixigoImpression);
    });
  }
  
  
  
  function vi(ele) {
  
  
    $("#52a").on("change keyup paste", function () {
      var x = parseInt(ele.value);
      $('#52a').val(x);
      $('#52a').attr('placeholder', x);
      var edit_inshort = x - bud_dyn;
      var viImpression = Math.floor(x / 130 * 1000);
   
        calculateSum();

      $('.viImpti').html(viImpression);
    });
  }
  
  
  
  function ching(ele) {
  
  
    $("#55a").on("change keyup paste", function () {
      var x = parseInt(ele.value);
      $('#55a').val(x);
      $('#55a').attr('placeholder', x);
      var edit_inshort = x - bud_dyn;
      var chingImpression = Math.floor(x / 130 * 1000);
  
        calculateSum();
  
      $('.chingImpti').html(chingImpression);
    });
  }
  
  
  
  function sliv(ele) {
  
  
    $("#56a").on("change keyup paste", function () {
      var x = parseInt(ele.value);
      $('#56a').val(x);
      $('#56a').attr('placeholder', x);
      var edit_inshort = x - bud_dyn;
      var slivImpression = Math.floor(x / 319 * 1000);
  
        calculateSum();

      $('.slivImpti').html(slivImpression);
    });
  }
  
  
  
  
  function wtr(ele) {
  
  
    $("#57a").on("change keyup paste", function () {
      var x = parseInt(ele.value);
      $('#57a').val(x);
      $('#57a').attr('placeholder', x);
      var edit_inshort = x - bud_dyn;
      var wtrImpression = Math.floor(x / 52 * 1000);
    
        calculateSum();
      $('.wtrImpti').html(wtrImpression);
    });
  }
  
  
  function share(ele) {
  
  
    $("#58a").on("change keyup paste", function () {
      var x = parseInt(ele.value);
      $('#58a').val(x);
      $('#58a').attr('placeholder', x);
      var edit_inshort = x - bud_dyn;
      var shareImpression = Math.floor(x / 46 * 1000);
  
        calculateSum();
      $('.shareImpti').html(shareImpression);
    });
  }
  
  
  
  function flkt(ele) {
  
  
    $("#59a").on("change keyup paste", function () {
      var x = parseInt(ele.value);
      $('#59a').val(x);
      $('#59a').attr('placeholder', x);
      var edit_inshort = x - bud_dyn;
      var flktImpression = Math.floor(x / 108 * 1000);
    
        calculateSum();
  
      $('.flktImpti').html(flktImpression);
    });
  }
  
  
  
  function ftv(ele) {
  
  
    $("#60a").on("change keyup paste", function () {
      var x = parseInt(ele.value);
      $('#60a').val(x);
      $('#60a').attr('placeholder', x);
      var edit_inshort = x - bud_dyn;
      var ftvImpression = Math.floor(x / 53 * 1000);
    
        calculateSum();
  
      $('.ftvImpti').html(ftvImpression);
    });
  }



function crex(ele) {


    $("#48a").on("change keyup paste", function () {
      var x = parseInt(ele.value);
      $('#48a').val(x);
      $('#48a').attr('placeholder', x);
      var edit_inshort = x - bud_dyn;
      var crexImpression = Math.floor(x / 253 * 1000);
      
        calculateSum();
  
      $('.crexImpti').html(crexImpression);
    });
  }
  
  
  
  function adda(ele) {
  
  
    $("#51a").on("change keyup paste", function () {
      var x = parseInt(ele.value);
      $('#51a').val(x);
      $('#51a').attr('placeholder', x);
      var edit_inshort = x - bud_dyn;
      var addaImpression = Math.floor(x / 153 * 1000);
    
        calculateSum();
  
      $('.addaImpti').html(addaImpression);
    });
  }
  
  
  
  function spotify(ele) {
  
  
    $("#53a").on("change keyup paste", function () {
      var x = parseInt(ele.value);
      $('#53a').val(x);
      $('#53a').attr('placeholder', x);
      var edit_inshort = x - bud_dyn;
      var spotifyImpression = Math.floor(x / 253 * 1000);
      
        calculateSum();
  
      $('.spotifyImpti').html(spotifyImpression);
    });
  }








