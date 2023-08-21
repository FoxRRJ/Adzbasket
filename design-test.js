var ds = localStorage.getItem("datavalue");
var budgetss = localStorage.getItem("budgetvalue");

var bud_dyn = JSON.parse(budgetss);

console.log(bud_dyn);

var dyn_img = JSON.parse(ds);
var lengthany = dyn_img.length;
console.log(dyn_img);

// total calculation of budgetand GST

var gst = 0.18 * bud_dyn;

var total_sum_gst_data = parseInt(bud_dyn) + parseInt(gst);
console.log(total_sum_gst_data);

function platform1a(value) {
  var dis_budget = Math.round((value / 52) * 1000);
  var dis_video = Math.round((value / 332) * 1000);
  document.getElementById("disBudget").setAttribute("value", dis_budget / 2);
  document.getElementById("disvideo").setAttribute("value", dis_video / 2);
  document.getElementById("dis_banner_budget").setAttribute("value", value / 2);
  document.getElementById("dis_video_budget").setAttribute("value", value / 2);
}

function platform2a(value) {
  var ola_budget = Math.round((value / 332) * 1000);
  var ola_video = Math.round((value / 150) * 1000);
  document.getElementById("olaBudget").setAttribute("value", ola_budget / 2);
  document.getElementById("olavideo").setAttribute("value", ola_video / 2);
  document.getElementById("ola_banner_budget").setAttribute("value", value / 2);
  document.getElementById("ola_video_budget").setAttribute("value", value / 2);
}

function platform3a(value) {
  var pay_budget = Math.round((value / 250) * 1000);
  var pay_video = Math.round((value / 150) * 1000);
  document.getElementById("payBudget").setAttribute("value", pay_budget / 2);
  document.getElementById("payvideo").setAttribute("value", pay_video / 2);
  document.getElementById("paytm_banner_budget").setAttribute("value", value / 2);
  document.getElementById("paytm_video_budget").setAttribute("value", value / 2);
}

function platform4a(value) {
  var ph_budget = Math.round((value / 201) * 1000);
  var ph_video = Math.round((value / 201) * 1000);
  document.getElementById("phBudget").setAttribute("value", ph_budget / 2);
  document.getElementById("phvideo").setAttribute("value", ph_video / 2);
  document.getElementById("ph_banner_budget").setAttribute("value", value / 2);
  document.getElementById("ph_video_budget").setAttribute("value", value / 2);
}

function platform5a(value) {
  var mmt_budget = Math.round((value / 228) * 1000);
  var mmt_video = Math.round((value / 150) * 1000);
  document.getElementById("mmtBudget").setAttribute("value", mmt_budget / 2);
  document.getElementById("mmtvideo").setAttribute("value", mmt_video / 2);
  document.getElementById("mmt_banner_budget").setAttribute("value", value / 2);
  document.getElementById("mmt_video_budget").setAttribute("value", value / 2);
}

function platform7a(value) {
  var hb_budget = Math.round((value / 150) * 1000);
  var hb_video = Math.round((value / 150) * 1000);
  var hb_audio = Math.round((value / 150) * 1000);
  document.getElementById("hbBudget").setAttribute("value", hb_budget / 2);
  document.getElementById("hbvideo").setAttribute("value", hb_video / 2);
  document.getElementById("hb_banner_budget").setAttribute("value", value / 2);
  document.getElementById("hb_video_budget").setAttribute("value", value / 2);
  //   document.getElementById('hbaudio').setAttribute("value", hb_audio / 3);
}

function platform8a(value) {
  var hm_budget = Math.round((value / 160) * 1000);
  var hm_video = Math.round((value / 260) * 1000);
  var hm_audio = Math.round((value / 150) * 1000);
  document.getElementById("hmBudget").setAttribute("value", hm_budget / 3);
  document.getElementById("hmvideo").setAttribute("value", hm_video / 3);
  document.getElementById('hmaudio').setAttribute("value", hm_audio / 3);
  document.getElementById("hm_banner_budget").setAttribute("value", value / 3);
  document.getElementById("hm_video_budget").setAttribute("value", value / 3);
  document.getElementById("hm_audio_budget").setAttribute("value", value / 3);
}

function platform9a(value) {
  var pmall_budget = Math.round((value / 250) * 1000);
  var pmall_video = Math.round((value / 150) * 1000);
  document.getElementById("pmallBudget").setAttribute("value", pmall_budget / 2);
  document.getElementById("pmallvideo").setAttribute("value", pmall_video / 2);
  document.getElementById("pmall_banner_budget").setAttribute("value", value / 2);
  document.getElementById("pmall_video_budget").setAttribute("value", value / 2);
}

function platform10a(value) {
  var red_budget = Math.round((value / 140) * 1000);
  var red_video = Math.round((value / 150) * 1000);
  document.getElementById("redBudget").setAttribute("value", red_budget / 2);
  document.getElementById("redvideo").setAttribute("value", red_video / 2);
  document.getElementById("red_banner_budget").setAttribute("value", value / 2);
  document.getElementById("red_video_budget").setAttribute("value", value / 2);
}

function platform11a(value) {
  var swiggy_budget = Math.round((value / 108) * 1000);
  var swiggy_video = Math.round((value / 231) * 1000);
  document.getElementById("swiggyBudget").setAttribute("value", swiggy_budget / 2);
  document.getElementById("swiggyvideo").setAttribute("value", swiggy_video / 2);
  document.getElementById("swiggy_banner_budget").setAttribute("value", value / 2);
  document.getElementById("swiggy_video_budget").setAttribute("value", value / 2);
}

function platform14a(value) {
  var bal_budget = Math.round((value / 5) * 1000);
  var bal_video = Math.round((value / 50) * 1000);
  document.getElementById("balBudget").setAttribute("value", bal_budget / 2);
  document.getElementById("balvideo").setAttribute("value", bal_video / 2);
  document.getElementById("bal_banner_budget").setAttribute("value", value / 2);
  document.getElementById("bal_video_budget").setAttribute("value", value / 2);
}

function platform16a(value) {
  var wynk_budget = Math.round((value / 150) * 1000);
  var wynk_video = Math.round((value / 150) * 1000);
  var wynk_audio = Math.round((value / 150) * 1000);
  document.getElementById("wynkBudget").setAttribute("value", wynk_budget / 3);
  document.getElementById("wynkvideo").setAttribute("value", wynk_video / 3);
  document.getElementById('wynkaudio').setAttribute("value", wynk_audio / 3);
  document.getElementById("wynk_banner_budget").setAttribute("value", value / 3);
  document.getElementById("wynk_video_budget").setAttribute("value", value / 3);
  document.getElementById("wynk_audio_budget").setAttribute("value", value / 3);
}

function platform15a(value) {
  var xstream_budget = Math.round((value / 216) * 1000);
  var xstream_video = Math.round((value / 260) * 1000);
  document.getElementById("xstreamBudget").setAttribute("value", xstream_budget / 2);
  document.getElementById("xstreamvideo").setAttribute("value", xstream_video / 2);
  document.getElementById("xstream_banner_budget").setAttribute("value", value / 2);
  document.getElementById("xstream_video_budget").setAttribute("value", value / 2);
}

function platform17a(value) {
  var thanks_budget = Math.round((value / 150) * 1000);
  var thanks_video = Math.round((value / 150) * 1000);
  document.getElementById("thanksBudget").setAttribute("value", thanks_budget / 2);
  document.getElementById("thanksvideo").setAttribute("value", thanks_video / 2);
  document.getElementById("thanks_banner_budget").setAttribute("value", value / 2);
  document.getElementById("thanks_video_budget").setAttribute("value", value / 2);
}

function platform18a(value) {
  var hg_budget = Math.round((value / 150) * 1000);
  var hg_video = Math.round((value / 150) * 1000);
  var hg_audio = Math.round((value / 150) * 1000);
  document.getElementById("hgBudget").setAttribute("value", hg_budget / 3);
  document.getElementById("hgvideo").setAttribute("value", hg_video / 3);
  document.getElementById("hg_banner_budget").setAttribute("value", value / 2);
  document.getElementById("hg_video_budget").setAttribute("value", value / 2);
  //   document.getElementById('hgaudio').setAttribute("value", hg_audio / 3);
}

function platform19a(value) {
  var mc_budget = Math.round((value / 231) * 1000);
  var mc_video = Math.round((value / 150) * 1000);
  document.getElementById("mcBudget").setAttribute("value", mc_budget / 2);
  document.getElementById("mcvideo").setAttribute("value", mc_video / 2);
  document.getElementById("mc_banner_budget").setAttribute("value", value / 2);
  document.getElementById("mc_video_budget").setAttribute("value", value / 2);
}

function platform20a(value) {
  var ssgo_budget = Math.round((value / 150) * 1000);
  var ssgo_video = Math.round((value / 150) * 1000);
  document.getElementById("ssgBudget").setAttribute("value", ssgo_budget / 2);
  document.getElementById("ssgvideo").setAttribute("value", ssgo_video / 2);
  document.getElementById("ssg_banner_budget").setAttribute("value", value / 2);
  document.getElementById("ssg_video_budget").setAttribute("value", value / 2);
}

function platform21a(value) {
  var nxt_budget = Math.round((value / 150) * 1000);
  var nxt_video = Math.round((value / 442) * 1000);
  document.getElementById("nxtBudget").setAttribute("value", nxt_budget / 2);
  document.getElementById("nxtvideo").setAttribute("value", nxt_video / 2);
  document.getElementById("nxt_banner_budget").setAttribute("value", value / 2);
  document.getElementById("nxt_video_budget").setAttribute("value", value / 2);
}

function platform22a(value) {
  var tie_budget = Math.round((value / 140) * 1000);
  var tie_video = Math.round((value / 150) * 1000);
  document.getElementById("tieBudget").setAttribute("value", tie_budget / 2);
  document.getElementById("tievideo").setAttribute("value", tie_video / 2);
  document.getElementById("tie_banner_budget").setAttribute("value", value / 2);
  document.getElementById("tie_video_budget").setAttribute("value", value / 2);
}

function platform23a(value) {
  var zee_budget = Math.round((value / 112) * 1000);
  var zee_video = Math.round((value / 180) * 1000);
  document.getElementById("zeeBudget").setAttribute("value", zee_budget / 2);
  document.getElementById("zeevideo").setAttribute("value", zee_video / 2);
  document.getElementById("zee_banner_budget").setAttribute("value", value / 2);
  document.getElementById("zee_video_budget").setAttribute("value", value / 2);
}

function platform24a(value) {
  var voot_budget = Math.round((value / 94) * 1000);
  var voot_video = Math.round((value / 150) * 1000);
  document.getElementById("vootBudget").setAttribute("value", voot_budget / 2);
  document.getElementById("vootvideo").setAttribute("value", voot_video / 2);
  document.getElementById("voot_banner_budget").setAttribute("value", value / 2);
  document.getElementById("voot_video_budget").setAttribute("value", value / 2);
}

function platform25a(value) {
  var myg_budget = Math.round((value / 16) * 1000);
  var myg_video = Math.round((value / 150) * 1000);
  document.getElementById("mygBudget").setAttribute("value", myg_budget / 2);
  document.getElementById("mygvideo").setAttribute("value", myg_video / 2);
  document.getElementById("myg_banner_budget").setAttribute("value", value / 2);
  document.getElementById("myg_video_budget").setAttribute("value", value / 2);
}

function platform26a(value) {
  var tcall_budget = Math.round((value / 65) * 1000);
  var tcall_video = Math.round((value / 150) * 1000);
  document.getElementById("tcallBudget").setAttribute("value", tcall_budget / 2);
  document.getElementById("tcallvideo").setAttribute("value", tcall_video / 2);
  document.getElementById("tcall_banner_budget").setAttribute("value", value / 2);
  document.getElementById("tcall_video_budget").setAttribute("value", value / 2);
}

function platform27a(value) {
  var pic_budget = Math.round((value / 6) * 1000);
  var pic_video = Math.round((value / 150) * 1000);
  document.getElementById("picBudget").setAttribute("value", pic_budget / 2);
  document.getElementById("picvideo").setAttribute("value", pic_video / 2);
  document.getElementById("pic_banner_budget").setAttribute("value", value / 2);
  document.getElementById("pic_video_budget").setAttribute("value", value / 2);
}

function platform28a(value) {
  var inshrt_budget = Math.round((value / 360) * 1000);
  var inshrt_video = Math.round((value / 480) * 1000);
  document.getElementById("inshrtBudget").setAttribute("value", inshrt_budget / 2);
  document.getElementById("inshrtvideo").setAttribute("value", inshrt_video / 2);
  document.getElementById("inshrt_banner_budget").setAttribute("value", value / 2);
  document.getElementById("inshrt_video_budget").setAttribute("value", value / 2);
}

function platform29a(value) {
  var amz_budget = Math.round((value / 300) * 1000);
  var amz_video = Math.round((value / 180) * 1000);
  document.getElementById("amzBudget").setAttribute("value", amz_budget / 2);
  document.getElementById("amzvideo").setAttribute("value", amz_video / 2);
  document.getElementById("amz_banner_budget").setAttribute("value", value / 2);
  document.getElementById("amz_video_budget").setAttribute("value", value / 2);
}

function platform30a(value) {
  var bms_budget = Math.round((value / 332) * 1000);
  var bms_video = Math.round((value / 442) * 1000);
  document.getElementById("bmsBudget").setAttribute("value", bms_budget / 2);
  document.getElementById("bmsvideo").setAttribute("value", bms_video / 2);
  document.getElementById("bms_banner_budget").setAttribute("value", value / 2);
  document.getElementById("bms_video_budget").setAttribute("value", value / 2);
}

function platform31a(value) {
  var mb_budget = Math.round((value / 50000) * 1000);
  var mb_video = Math.round((value / 150) * 1000);
  document.getElementById("mbBudget").setAttribute("value", mb_budget / 2);
  document.getElementById("mbvideo").setAttribute("value", mb_video / 2);
  document.getElementById("mb_banner_budget").setAttribute("value", value / 2);
  document.getElementById("mb_video_budget").setAttribute("value", value / 2);
}

function platform32a(value) {
  var nbh_budget = Math.round((value / 150) * 1000);
  var nbh_video = Math.round((value / 150) * 100);
  document.getElementById("nbhBudget").setAttribute("value", nbh_budget / 2);
  document.getElementById("nbhvideo").setAttribute("value", nbh_video / 2);
  document.getElementById("nbh_banner_budget").setAttribute("value", value / 2);
  document.getElementById("nbh_video_budget").setAttribute("value", value / 2);
}

function platform33a(value) {
  var peasy_budget = Math.round((value / 150) * 1000);
  var peasy_video = Math.round((value / 150) * 1000);
  document.getElementById("peasyBudget").setAttribute("value", peasy_budget / 2);
  document.getElementById("peasyvideo").setAttribute("value", peasy_video / 2);
  document.getElementById("peasy_banner_budget").setAttribute("value", value / 2);
  document.getElementById("peasy_video_budget").setAttribute("value", value / 2);
}

function platform34a(value) {
  var mobi_budget = Math.round((value / 156) * 1000);
  var mobi_video = Math.round((value / 150) * 1000);
  document.getElementById("mobiBudget").setAttribute("value", mobi_budget / 2);
  document.getElementById("mobivideo").setAttribute("value", mobi_video / 2);
  document.getElementById("mobi_banner_budget").setAttribute("value", value / 2);
  document.getElementById("mobi_video_budget").setAttribute("value", value / 2);
}

function platform35a(value) {
  var glance_budget = Math.round((value / 144) * 1000);
  var glance_video = Math.round((value / 180) * 1000);
  document.getElementById("glanceBudget").setAttribute("value", glance_budget / 2);
  document.getElementById("glancevideo").setAttribute("value", glance_video / 2);
  document.getElementById("glance_banner_budget").setAttribute("value", value / 2);
  document.getElementById("glance_video_budget").setAttribute("value", value / 2);
}

function platform36a(value) {
  var g_budget = Math.round((value / 5) * 1000);
  var g_video = Math.round((value / 150) * 1000);
  document.getElementById("gBudget").setAttribute("value", g_budget / 2);
  document.getElementById("gvideo").setAttribute("value", g_video / 2);
  document.getElementById("g_banner_budget").setAttribute("value", value / 2);
  document.getElementById("g_video_budget").setAttribute("value", value / 2);
}

function platform37a(value) {
  var savaan_budget = Math.round((value / 150) * 1000);
  var savaan_video = Math.round((value / 150) * 1000);
  var savaan_audio = Math.round((value / 150) * 1000);
  document.getElementById("Budget").setAttribute("value", savaan_budget / 3);
  document.getElementById("video").setAttribute("value", savaan_video / 3);
  document.getElementById('audio').setAttribute("value", savaan_audio / 3);
  document.getElementById("saavn_banner_budget").setAttribute("value", value / 3);
  document.getElementById("saavn_video_budget").setAttribute("value", value / 3);
  document.getElementById("saavn_audio_budget").setAttribute("value", value / 3);
}

function platform38a(value) {
  var daily_budget = Math.round((value / 180) * 1000);
  var daily_video = Math.round((value / 240) * 1000);
  document.getElementById("dailyBudget").setAttribute("value", daily_budget / 2);
  document.getElementById("dailyvideo").setAttribute("value", daily_video / 2);
  document.getElementById("daily_banner_budget").setAttribute("value", value / 2);
  document.getElementById("daily_video_budget").setAttribute("value", value / 2);
}

function platform39a(value) {
  var jio_budget = Math.round((value / 150) * 1000);
  var jio_video = Math.round((value / 150) * 1000);
  document.getElementById("jioBudget").setAttribute("value", jio_budget / 2);
  document.getElementById("jiovideo").setAttribute("value", jio_video / 2);
  document.getElementById("jio_banner_budget").setAttribute("value", value / 2);
  document.getElementById("jio_video_budget").setAttribute("value", value / 2);
}

function platform40a(value) {
  var mat_budget = Math.round((value / 150) * 1000);
  var mat_video = Math.round((value / 150) * 1000);
  document.getElementById("matBudget").setAttribute("value", mat_budget / 2);
  document.getElementById("matvideo").setAttribute("value", mat_video / 2);
  document.getElementById("mat_banner_budget").setAttribute("value", value / 2);
  document.getElementById("mat_video_budget").setAttribute("value", value / 2);
}

function platform41a(value) {
  var car_budget = Math.round((value / 240) * 1000);
  var car_video = Math.round((value / 150) * 1000);
  document.getElementById("carBudget").setAttribute("value", car_budget / 2);
  document.getElementById("carvideo").setAttribute("value", car_video / 2);
  document.getElementById("car_banner_budget").setAttribute("value", value / 2);
  document.getElementById("car_video_budget").setAttribute("value", value / 2);
}

function platform42a(value) {
  var uber_budget = Math.round((value / 150) * 1000);
  var uber_video = Math.round((value / 150) * 1000);
  document.getElementById("uberBudget").setAttribute("value", uber_budget / 2);
  document.getElementById("ubervideo").setAttribute("value", uber_video / 2);
  document.getElementById("dis_banner_budget").setAttribute("value", value / 2);
  document.getElementById("dis_video_budget").setAttribute("value", value / 2);
}

function platform43a(value) {
  var pfm_budget = Math.round((value / 120) * 1000);
  var pfm_video = Math.round((value / 264) * 1000);
  var pfm_audio = Math.round((value / 150) * 1000);
  document.getElementById("pfmBudget").setAttribute("value", pfm_budget / 2);
  document.getElementById("pfmvideo").setAttribute("value", pfm_video / 2);
  document.getElementById("pfm_banner_budget").setAttribute("value", value / 2);
  document.getElementById("pfm_video_budget").setAttribute("value", value / 2);
  //   document.getElementById('pfmaudio').setAttribute("value", pfm_audio / 3);
}

function platform44a(value) {
  var gaana_budget = Math.round((value / 48) * 1000);
  var gaana_video = Math.round((value / 360) * 1000);
  var gaana_audio = Math.round((value / 150) * 1000);
  document.getElementById("gaanaBudget").setAttribute("value", gaana_budget / 3);
  document.getElementById("gaanavideo").setAttribute("value", gaana_video / 3);
  document.getElementById('gaanaaudio').setAttribute("value", gaana_audio / 3);
  document.getElementById("gaana_banner_budget").setAttribute("value", value / 3);
  document.getElementById("gaana_video_budget").setAttribute("value", value / 3);
  document.getElementById("gaana_audio_budget").setAttribute("value", value / 3);
  
}

function platform45a(value) {
  var cred_budget = Math.round((value / 240) * 1000);
  var cred_video = Math.round((value / 150) * 1000);
  document.getElementById("credBudget").setAttribute("value", cred_budget / 2);
  document.getElementById("credvideo").setAttribute("value", cred_video / 2);
  document.getElementById("cred_banner_budget").setAttribute("value", value / 2);
  document.getElementById("cred_video_budget").setAttribute("value", value / 2);
}

function platform46a(value) {
  var tplay_budget = Math.round((value / 96) * 1000);
  var tplay_video = Math.round((value / 150) * 1000);
  document.getElementById("tplayBudget").setAttribute("value", tplay_budget / 2);
  document.getElementById("tplayvideo").setAttribute("value", tplay_video / 2);
  document.getElementById("tplay_banner_budget").setAttribute("value", value / 2);
  document.getElementById("tplay_video_budget").setAttribute("value", value / 2);
}

function platform47a(value) {
  var snap_budget = Math.round((value / 50) * 1000);
  var snap_video = Math.round((value / 200) * 1000);
  document.getElementById("snapBudget").setAttribute("value", snap_budget / 2);
  document.getElementById("snapvideo").setAttribute("value", snap_video / 2);
  document.getElementById("snap_banner_budget").setAttribute("value", value / 2);
  document.getElementById("snap_video_budget").setAttribute("value", value / 2);
}

function platform48a(value) {
  var crex_budget = Math.round((value / 150) * 1000);
  var crex_video = Math.round((value / 150) * 1000);
  document.getElementById("crexBudget").setAttribute("value", crex_budget / 2);
  document.getElementById("crexvideo").setAttribute("value", crex_video / 2);
  document.getElementById("crex_banner_budget").setAttribute("value", value / 2);
  document.getElementById("crex_video_budget").setAttribute("value", value / 2);
}

function platform50a(value) {
  var ix_budget = Math.round((value / 150) * 1000);
  var ix_video = Math.round((value / 150) * 1000);
  document.getElementById("ixBudget").setAttribute("value", ix_budget / 2);
  document.getElementById("ixvideo").setAttribute("value", ix_video / 2);
  document.getElementById("ix_banner_budget").setAttribute("value", value / 2);
  document.getElementById("ix_video_budget").setAttribute("value", value / 2);
}

function platform51a(value) {
  var adda_budget = Math.round((value / 150) * 1000);
  var adda_video = Math.round((value / 150) * 1000);
  document.getElementById("addaBudget").setAttribute("value", adda_budget / 2);
  document.getElementById("addavideo").setAttribute("value", adda_video / 2);
  document.getElementById("adda_banner_budget").setAttribute("value", value / 2);
  document.getElementById("adda_video_budget").setAttribute("value", value / 2);
}

function platform52a(value) {
  var vi_budget = Math.round((value / 150) * 1000);
  var vi_video = Math.round((value / 150) * 1000);
  document.getElementById("viBudget").setAttribute("value", vi_budget / 2);
  document.getElementById("vivideo").setAttribute("value", vi_video / 2);
  document.getElementById("vi_banner_budget").setAttribute("value", value / 2);
  document.getElementById("vi_video_budget").setAttribute("value", value / 2);
}

function platform53a(value) {
  var spot_budget = Math.round((value / 150) * 1000);
  var spot_video = Math.round((value / 150) * 1000);
  document.getElementById("spotBudget").setAttribute("value", spot_budget / 2);
  document.getElementById("spotvideo").setAttribute("value", spot_video / 2);
  document.getElementById("spot_banner_budget").setAttribute("value", value / 2);
  document.getElementById("spot_video_budget").setAttribute("value", value / 2);
}

function platform55a(value) {
  var ching_budget = Math.round((value / 150) * 1000);
  var ching_video = Math.round((value / 150) * 1000);
  document.getElementById("chingBudget").setAttribute("value", ching_budget / 2);
  document.getElementById("chingvideo").setAttribute("value", ching_video / 2);
  document.getElementById("ching_banner_budget").setAttribute("value", value / 2);
  document.getElementById("ching_video_budget").setAttribute("value", value / 2);
}

function platform56a(value) {
  var sony_budget = Math.round((value / 150) * 1000);
  var sony_video = Math.round((value / 319) * 1000);
  document.getElementById("sonyBudget").setAttribute("value", sony_budget / 2);
  document.getElementById("sonyvideo").setAttribute("value", sony_video / 2);
  document.getElementById("sony_banner_budget").setAttribute("value", value / 2);
  document.getElementById("sony_video_budget").setAttribute("value", value / 2);
}

function platform57a(value) {
  var we_budget = Math.round((value / 300) * 1000);
  var we_video = Math.round((value / 150) * 1000);
  document.getElementById("weBudget").setAttribute("value", we_budget / 2);
  document.getElementById("wevideo").setAttribute("value", we_video / 2);
  document.getElementById("we_banner_budget").setAttribute("value", value / 2);
  document.getElementById("we_video_budget").setAttribute("value", value / 2);
}

function platform58a(value) {
  var share_budget = Math.round((value / 46) * 1000);
  var share_video = Math.round((value / 46) * 1000);
  document.getElementById("shareBudget").setAttribute("value", share_budget / 2);
  document.getElementById("sharevideo").setAttribute("value", share_video / 2);
  document.getElementById("share_banner_budget").setAttribute("value", value / 2);
  document.getElementById("share_video_budget").setAttribute("value", value / 2);
}

function platform59a(value) {
  var flip_budget = Math.round((value / 150) * 1000);
  var flip_video = Math.round((value / 150) * 1000);
  document.getElementById("flipBudget").setAttribute("value", flip_budget / 2);
  document.getElementById("flipvideo").setAttribute("value", flip_video / 2);
  document.getElementById("flip_banner_budget").setAttribute("value", value / 2);
  document.getElementById("flip_video_budget").setAttribute("value", value / 2);
}

function platform60a(value) {
  var fire_budget = Math.round((value / 300) * 1000);
  var fire_video = Math.round((value / 300) * 1000);
  document.getElementById("fireBudget").setAttribute("value", fire_budget / 2);
  document.getElementById("firevideo").setAttribute("value", fire_video / 2);
  document.getElementById("fire_banner_budget").setAttribute("value", value / 2);
  document.getElementById("fire_video_budget").setAttribute("value", value / 2);
}

var temp_bud = 2500000;

var temp_bud_data = 0;

var array1 = [];
var array2 = [];

for (var i = 0; i < dyn_img.length; i++) {
  var dataset_dyn = "platform" + dyn_img[i];
  var parent_dataset = document.querySelector("#" + dataset_dyn);
  var parent_dataset_budget = parent_dataset.querySelector(".tot");
  var parent_dataset_ribbon = parent_dataset.querySelector(".ribbon");
  var parent_dataset_editbtn = parent_dataset.querySelector(".edit-btn");
  var parent_dataset_increase_btn = parent_dataset.querySelector(".incr");
  var min_bud_attr = document.getElementById(dataset_dyn).getAttribute("min-bud");

  console.log(typeof min_bud_attr);
  if (min_bud_attr <= parseInt(bud_dyn)) {
    array1.push(dyn_img[i]);
    parent_dataset_budget.value = min_bud_attr;
    bud_dyn -= min_bud_attr;
    temp_bud_data += parseInt(min_bud_attr);
    window[dataset_dyn](min_bud_attr);
  } else {
    array2.push(dyn_img[i]);
    parent_dataset_ribbon.classList.remove("hide-rib");
    parent_dataset_editbtn.classList.add("hide-rib");
    parent_dataset_increase_btn.classList.remove("hide-rib");
  }
}

var array3 = array1.concat(array2);
total_gst = 0.18 * temp_bud_data;
var total_auto_budget_data = temp_bud_data + total_gst;

console.log(array1);
console.log(array2);
console.log(array3);
console.log(total_auto_budget_data);

$("#total_sum").html(Math.round(temp_bud_data));
$("#total_gst").html(Math.round(total_gst));
$("#auto_data_budget").html(Math.round(total_auto_budget_data));

for (var i = 0; i < array3.length; i++) {
  console.log(array3[i]);

  var cloneCount = "1";
  var clonealpha = "a";
  var clone_div = $("#platform" + array3[i])
    .clone(true)
    .show();
  var get_clone_banner_id = clone_div.find(".banner-imp").attr("id");
  var get_clone_video_id = clone_div.find(".video-imp").attr("id");
  var get_clone_audio_id = clone_div.find(".audio-imp").attr("id");
  var get_clone_banner_budget_id = clone_div.find(".banner-budget").attr("id");
  var get_clone_video_budget_id = clone_div.find(".video-budget").attr("id");
  var get_clone_audio_budget_id = clone_div.find(".audio-budget").attr("id");
  var get_clone_ribbon = clone_div.find(".ribbon").attr("id");
  var get_clone_note = clone_div.find(".budget-note").attr("id");
  var get_clone_total_budget_id = clone_div.find(".tot").attr("id");
  var get_clone_banner_checkbox = clone_div.find(".banner-checkbox").attr("id");
  var get_clone_video_checkbox = clone_div.find(".video-checkbox").attr("id");
  var get_clone_audio_checkbox = clone_div.find(".audio-checkbox").attr("id");

  var new_clone_banner_id = get_clone_banner_id + cloneCount;
  var new_clone_video_id = get_clone_video_id + cloneCount;
  var new_clone_audio_id = get_clone_audio_id + cloneCount;
  var new_clone_banner_budget_id = get_clone_banner_budget_id + cloneCount;
  var new_clone_video_budget_id = get_clone_video_budget_id + cloneCount;
  var new_clone_audio_budget_id = get_clone_audio_budget_id + cloneCount;
  var new_clone_ribbon_id = get_clone_ribbon + clonealpha;
  var new_clone_note_id = get_clone_note + clonealpha;
  var new_clone_total_budget_id = get_clone_total_budget_id + cloneCount;
  var new_clone_checkbox_banner_id = get_clone_banner_checkbox + cloneCount;
  var new_clone_checkbox_video_id = get_clone_video_checkbox + cloneCount;
  var new_clone_checkbox_audio_id = get_clone_audio_checkbox + cloneCount;

  clone_div.find(".banner-imp").attr("id", new_clone_banner_id);
  clone_div.find(".video-imp").attr("id", new_clone_video_id);
  clone_div.find(".audio-imp").attr("id", new_clone_audio_id);
  clone_div.find(".banner-budget").attr("id", new_clone_banner_budget_id);
  clone_div.find(".video-budget").attr("id", new_clone_video_budget_id);
  clone_div.find(".audio-budget").attr("id", new_clone_audio_budget_id);
  clone_div.find(".ribbon").attr("id", new_clone_ribbon_id);
  clone_div.find(".budget-note").attr("id", new_clone_note_id);
  clone_div.find(".tot").attr("id", new_clone_total_budget_id);
  clone_div.find(".banner-checkbox").attr("id", new_clone_checkbox_banner_id);
  clone_div.find(".video-checkbox").attr("id", new_clone_checkbox_video_id);
  clone_div.find(".audio-checkbox").attr("id", new_clone_checkbox_audio_id);
  clone_div.appendTo("#hero11");
}



/** setting budget & impression on increase budget click  */




function disa(value) {
  var dis_budget = Math.round(value / 52 * 1000);
  var dis_video = Math.round(value / 332 * 1000);
  document.getElementById('disBudget1').setAttribute("value", dis_budget / 2);
  document.getElementById('disvideo1').setAttribute("value", dis_video / 2);

}



function olaa(value) {
  var ola_budget = Math.round(value / 332 * 1000);
  var ola_video = Math.round(value / 150 * 1000);
  document.getElementById('olaBudget1').setAttribute("value", ola_budget / 2);
  document.getElementById('olavideo1').setAttribute("value", ola_video / 2);

}


function paya(value) {
  var pay_budget = Math.round(value / 250 * 1000);
  var pay_video = Math.round(value / 150 * 1000);
  document.getElementById('payBudget1').setAttribute("value", pay_budget / 2);
  document.getElementById('payvideo1').setAttribute("value", pay_video / 2);
}



function pha(value) {
  var ph_budget = Math.round(value / 201 * 1000);
  var ph_video = Math.round(value / 201 * 1000);
  document.getElementById('phBudget1').setAttribute("value", ph_budget / 2);
  document.getElementById('phvideo1').setAttribute("value", ph_video / 2);

}



function mmta(value) {
  var mmt_budget = Math.round(value / 228 * 1000);
  var mmt_video = Math.round(value / 150 * 1000);
  document.getElementById('mmtBudget1').setAttribute("value", mmt_budget / 2);
  document.getElementById('mmtvideo1').setAttribute("value", mmt_video / 2);

}


function hba(value) {
  var hb_budget = Math.round(value / 150 * 1000);
  var hb_video = Math.round(value / 150 * 1000);
  var hb_audio = Math.round(value / 150 * 1000);
  document.getElementById('hbBudget1').setAttribute("value", hb_budget / 2);
  document.getElementById('hbvideo1').setAttribute("value", hb_video / 2);

}


function hma(value) {
  var hm_budget = Math.round(value / 160 * 1000);
  var hm_video = Math.round(value / 260 * 1000);
  var hm_audio = Math.round(value / 150 * 1000);
  document.getElementById('hmBudget1').setAttribute("value", hm_budget / 3);
  document.getElementById('hmvideo1').setAttribute("value", hm_video / 3);
  document.getElementById('hmaudio1').setAttribute("value", hm_audio / 3);

}


function pmalla(value) {
  var pmall_budget = Math.round(value / 250 * 1000);
  var pmall_video = Math.round(value / 150 * 1000);
  document.getElementById('pmallBudget1').setAttribute("value", pmall_budget / 2);
  document.getElementById('pmallvideo1').setAttribute("value", pmall_video / 2);

}

function reda(value) {
  var red_budget = Math.round(value / 140 * 1000);
  var red_video = Math.round(value / 150 * 1000);
  document.getElementById('redBudget1').setAttribute("value", red_budget / 2);
  document.getElementById('redvideo1').setAttribute("value", red_video / 2);

}

function swiggya(value) {

  var swiggy_budget = Math.round(value / 108 * 1000);
  var swiggy_video = Math.round(value / 231 * 1000);

  document.getElementById('swiggyBudget1').setAttribute("value", swiggy_budget / 2);
  document.getElementById('swiggyvideo1').setAttribute("value", swiggy_video / 2);


}



function bala(value) {
  var bal_budget = Math.round(value / 5 * 1000);
  var bal_video = Math.round(value / 50 * 1000);
  document.getElementById('balBudget1').setAttribute("value", bal_budget / 2);
  document.getElementById('balvideo1').setAttribute("value", bal_video / 2);

}

function wynka(value) {
  var wynk_budget = Math.round(value / 150 * 1000);
  var wynk_video = Math.round(value / 150 * 1000);
  var wynk_audio = Math.round(value / 150 * 1000);
  document.getElementById('wynkBudget1').setAttribute("value", wynk_budget / 3);
  document.getElementById('wynkvideo1').setAttribute("value", wynk_video / 3);
  document.getElementById('wynkaudio1').setAttribute("value", wynk_audio / 3);
}

function xstreama(value) {
  var xstream_budget = Math.round(value / 216 * 1000);
  var xstream_video = Math.round(value / 260 * 1000);
  document.getElementById('xstreamBudget1').setAttribute("value", xstream_budget / 2);
  document.getElementById('xstreamvideo1').setAttribute("value", xstream_video / 2);

}


function thanksa(value) {
  var thanks_budget = Math.round(value / 150 * 1000);
  var thanks_video = Math.round(value / 150 * 1000);
  document.getElementById('thanksBudget1').setAttribute("value", thanks_budget / 2);
  document.getElementById('thanksvideo1').setAttribute("value", thanks_video / 2);

}

function hga(value) {
  var hg_budget = Math.round(value / 150 * 1000);
  var hg_video = Math.round(value / 150 * 1000);
  var hg_audio = Math.round(value / 150 * 1000);
  document.getElementById('hgBudget1').setAttribute("value", hg_budget / 2);
  document.getElementById('hgvideo1').setAttribute("value", hg_video / 2);
}

function mca(value) {
  var mc_budget = Math.round(value / 231 * 1000);
  var mc_video = Math.round(value / 150 * 1000);
  document.getElementById('mcBudget1').setAttribute("value", mc_budget / 2);
  document.getElementById('mcvideo1').setAttribute("value", mc_video / 2);
}



function ssgoa(value) {
  var ssgo_budget = Math.round(value / 150 * 1000);
  var ssgo_video = Math.round(value / 150 * 1000);
  document.getElementById('ssgBudget1').setAttribute("value", ssgo_budget / 2);
  document.getElementById('ssgvideo1').setAttribute("value", ssgo_video / 2);
}


function nxta(value) {
  var nxt_budget = Math.round(value / 150 * 1000);
  var nxt_video = Math.round(value / 442 * 1000);
  document.getElementById('nxtBudget1').setAttribute("value", nxt_budget / 2);
  document.getElementById('nxtvideo1').setAttribute("value", nxt_video / 2);

}

function tiea(value) {
  var tie_budget = Math.round(value / 140 * 1000);
  var tie_video = Math.round(value / 150 * 1000);
  document.getElementById('tieBudget1').setAttribute("value", tie_budget / 2);
  document.getElementById('tievideo1').setAttribute("value", tie_video / 2);

}

function zeea(value) {
  var zee_budget = Math.round(value / 112 * 1000);
  var zee_video = Math.round(value / 180 * 1000);
  document.getElementById('zeeBudget1').setAttribute("value", zee_budget / 2);
  document.getElementById('zeevideo1').setAttribute("value", zee_video / 2);

}


function voota(value) {
  var voot_budget = Math.round(value / 94 * 1000);
  var voot_video = Math.round(value / 150 * 1000);
  document.getElementById('vootBudget1').setAttribute("value", voot_budget / 2);
  document.getElementById('vootvideo1').setAttribute("value", voot_video / 2);

}





function myga(value) {
  var myg_budget = Math.round(value / 16 * 1000);
  var myg_video = Math.round(value / 150 * 1000);
  document.getElementById('mygBudget1').setAttribute("value", myg_budget / 2);
  document.getElementById('mygvideo1').setAttribute("value", myg_video / 2);

}




function tcalla(value) {
  var tcall_budget = Math.round(value / 65 * 1000);
  var tcall_video = Math.round(value / 150 * 1000);
  document.getElementById('tcallBudget1').setAttribute("value", tcall_budget / 2);
  document.getElementById('tcallvideo1').setAttribute("value", tcall_video / 2);

}


function pica(value) {
  var pic_budget = Math.round(value / 6 * 1000);

  var pic_video = Math.round(value / 150 * 1000);
  document.getElementById('picBudget1').setAttribute("value", pic_budget / 2);
  document.getElementById('picvideo1').setAttribute("value", pic_video / 2);

}





function inshrta(value) {
  var inshrt_budget = Math.round(value / 360 * 1000);
  var inshrt_video = Math.round(value / 480 * 1000);
  document.getElementById('inshrtBudget1').setAttribute("value", inshrt_budget / 2);
  document.getElementById('inshrtvideo1').setAttribute("value", inshrt_video / 2);

}



function amza(value) {
  var amz_budget = Math.round(value / 300 * 1000);
  var amz_video = Math.round(value / 180 * 1000);
  document.getElementById('amzBudget1').setAttribute("value", amz_budget / 2);
  document.getElementById('amzvideo1').setAttribute("value", amz_video / 2);

}


function bmsa(value) {
  var bms_budget = Math.round(value / 332 * 1000);
  var bms_video = Math.round(value / 442 * 1000);
  document.getElementById('bmsBudget1').setAttribute("value", bms_budget / 2);
  document.getElementById('bmsvideo1').setAttribute("value", bms_video / 2);

}

function mba(value) {
  var mb_budget = Math.round(value / 50000 * 1000);
  var mb_video = Math.round(value / 150 * 1000);
  document.getElementById('mbBudget1').setAttribute("value", mb_budget / 2);
  document.getElementById('mbvideo1').setAttribute("value", mb_video / 2);

}


function nbha(value) {
  var nbh_budget = Math.round(value / 150 * 1000);
  var nbh_video = Math.round(value / 150 * 1000);
  document.getElementById('nbhBudget1').setAttribute("value", nbh_budget / 2);
  document.getElementById('nbhvideo1').setAttribute("value", nbh_video / 2);

}


function peasya(value) {
  var peasy_budget = Math.round(value / 150 * 1000);
  var peasy_video = Math.round(value / 150 * 1000);
  document.getElementById('peasyBudget1').setAttribute("value", peasy_budget / 2);
  document.getElementById('peasyvideo1').setAttribute("value", peasy_video / 2);

}


function mobia(value) {
  var mobi_budget = Math.round(value / 156 * 1000);
  var mobi_video = Math.round(value / 150 * 1000);
  document.getElementById('mobiBudget1').setAttribute("value", mobi_budget / 2);
  document.getElementById('mobivideo1').setAttribute("value", mobi_video / 2);
}


function glancea(value) {
  var glance_budget = Math.round(value / 144 * 1000);
  var glance_video = Math.round(value / 180 * 1000);
  document.getElementById('glanceBudget1').setAttribute("value", glance_budget / 2);
  document.getElementById('glancevideo1').setAttribute("value", glance_video / 2);

}

function savaana(value) {
  var savaan_budget = Math.round(value / 150 * 1000);
  var savaan_video = Math.round(value / 150 * 1000);
  var savaan_audio = Math.round(value / 150 * 1000);
  document.getElementById('saavnBudget1').setAttribute("value", savaan_budget / 3);
  document.getElementById('saavnvideo1').setAttribute("value", savaan_video / 3);
  document.getElementById('saavnaudio1').setAttribute("value", savaan_audio / 3);
}




function dailya(value) {


  var daily_budget = Math.round(value / 180 * 1000);
  var daily_video = Math.round(value / 240 * 1000);
  document.getElementById('dailyBudget1').setAttribute("value", daily_budget / 2);
  document.getElementById('dailyvideo1').setAttribute("value", daily_video / 2);


}


function jioa(value) {
  var jio_budget = Math.round(value / 150 * 1000);
  var jio_video = Math.round(value / 150 * 1000);
  document.getElementById('jioBudget1').setAttribute("value", jio_budget / 2);
  document.getElementById('jiovideo1').setAttribute("value", jio_video / 2);

}

function mata(value) {
  var mat_budget = Math.round(value / 150 * 1000);
  var mat_video = Math.round(value / 150 * 1000);
  document.getElementById('matBudget1').setAttribute("value", mat_budget / 2);
  document.getElementById('matvideo1').setAttribute("value", mat_video / 2);

}


function cara(value) {
  var car_budget = Math.round(value / 240 * 1000);
  var car_video = Math.round(value / 150 * 1000);
  document.getElementById('carBudget1').setAttribute("value", car_budget / 2);
  document.getElementById('carvideo1').setAttribute("value", car_video / 2);

}


function ubera(value) {
  var uber_budget = Math.round(value / 150 * 1000);
  var uber_video = Math.round(value / 150 * 1000);
  document.getElementById('uberBudget1').setAttribute("value", uber_budget / 2);
  document.getElementById('ubervideo1').setAttribute("value", uber_video / 2);

}


function pfma(value) {
  var pfm_budget = Math.round(value / 120 * 1000);
  var pfm_video = Math.round(value / 264 * 1000);
  var pfm_audio = Math.round(value / 150 * 1000);
  document.getElementById('pfmBudget1').setAttribute("value", pfm_budget / 3);
  document.getElementById('pfmvideo1').setAttribute("value", pfm_video / 3);
  document.getElementById('pfmaudio1').setAttribute("value", pfm_audio / 3);
}


function gaanaa(value) {
  var gaana_budget = Math.round(value / 48 * 1000);
  var gaana_video = Math.round(value / 360 * 1000);
  var gaana_audio = Math.round(value / 150 * 1000);
  document.getElementById('gaanaBudget1').setAttribute("value", gaana_budget / 3);
  document.getElementById('gaanavideo1').setAttribute("value", gaana_video / 3);
  document.getElementById('gaanaaudio1').setAttribute("value", gaana_audio / 3);

}



function creda(value) {
  var cred_budget = Math.round(value / 240 * 1000);
  var cred_video = Math.round(value / 150 * 1000);
  document.getElementById('credBudget1').setAttribute("value", cred_budget / 2);
  document.getElementById('credvideo1').setAttribute("value", cred_video / 2);

}


function tplaya(value) {
  var tplay_budget = Math.round(value / 96 * 1000);
  var tplay_video = Math.round(value / 150 * 1000);
  document.getElementById('tplayBudget1').setAttribute("value", tplay_budget / 2);
  document.getElementById('tplayvideo1').setAttribute("value", tplay_video / 2);

}



function snapa(value) {
  var snap_budget = Math.round(value / 50 * 1000);
  var snap_video = Math.round(value / 200 * 1000);
  document.getElementById('snapBudget1').setAttribute("value", snap_budget / 2);
  document.getElementById('snapvideo1').setAttribute("value", snap_video / 2);

}


function crexa(value) {
  var crex_budget = Math.round(value / 150 * 1000);
  var crex_video = Math.round(value / 150 * 1000);
  document.getElementById('crexBudget1').setAttribute("value", crex_budget / 2);
  document.getElementById('crexvideo1').setAttribute("value", crex_video / 2);

}


function ixa(value) {
  var ix_budget = Math.round(value / 150 * 1000);
  var ix_video = Math.round(value / 150 * 1000);
  document.getElementById('ixBudget1').setAttribute("value", ix_budget / 2);
  document.getElementById('ixvideo1').setAttribute("value", ix_video / 2);

}


function addaa(value) {
  var adda_budget = Math.round(value / 150 * 1000);
  var adda_video = Math.round(value / 150 * 1000);
  document.getElementById('addaBudget1').setAttribute("value", adda_budget / 2);
  document.getElementById('addavideo1').setAttribute("value", adda_video / 2);

}


function via(value) {
  var vi_budget = Math.round(value / 150 * 1000);
  var vi_video = Math.round(value / 150 * 1000);
  document.getElementById('viBudget1').setAttribute("value", vi_budget / 2);
  document.getElementById('vivideo1').setAttribute("value", vi_video / 2);

}



function spota(value) {
  var spot_budget = Math.round(value / 150 * 1000);
  var spot_video = Math.round(value / 150 * 1000);
  document.getElementById('spotBudget1').setAttribute("value", spot_budget / 2);
  document.getElementById('spotvideo1').setAttribute("value", spot_video / 2);

}



function chinga(value) {
  var ching_budget = Math.round(value / 150 * 1000);
  var ching_video = Math.round(value / 150 * 1000);
  document.getElementById('chingBudget1').setAttribute("value", ching_budget / 2);
  document.getElementById('chingvideo1').setAttribute("value", ching_video / 2);

}


function sonya(value) {
  var sony_budget = Math.round(value / 150 * 1000);
  var sony_video = Math.round(value / 319 * 1000);
  document.getElementById('sonyBudget1').setAttribute("value", sony_budget / 2);
  document.getElementById('sonyvideo1').setAttribute("value", sony_video / 2);

}



function wea(value) {
  var we_budget = Math.round(value / 300 * 1000);
  var we_video = Math.round(value / 150 * 1000);
  document.getElementById('weBudget1').setAttribute("value", we_budget / 2);
  document.getElementById('wevideo1').setAttribute("value", we_video / 2);

}


function sharea(value) {
  var share_budget = Math.round(value / 46 * 1000);
  var share_video = Math.round(value / 46 * 1000);
  document.getElementById('shareBudget1').setAttribute("value", share_budget / 2);
  document.getElementById('sharevideo1').setAttribute("value", share_video / 2);

}


function flipa(value) {
  var flip_budget = Math.round(value / 150 * 1000);
  var flip_video = Math.round(value / 150 * 1000);
  document.getElementById('flipBudget1').setAttribute("value", flip_budget / 2);
  document.getElementById('flipvideo1').setAttribute("value", flip_video / 2); 1

}


function firea(value) {
  var fire_budget = Math.round(value / 300 * 1000);
  var fire_video = Math.round(value / 300 * 1000);
  document.getElementById('fireBudget1').setAttribute("value", fire_budget / 2);
  document.getElementById('firevideo1').setAttribute("value", fire_video / 2);

}
function ga(value) {
  var g_budget = Math.round(value / 5 * 1000);
  var g_video = Math.round(value / 150 * 1000);
  document.getElementById('gBudget1').setAttribute("value", g_budget / 2);
  document.getElementById('gvideo1').setAttribute("value", g_video / 2);

}





/** out of budget  */

var conf_overlay_disbox = document.querySelector(".pl1");
var conf_cancel_disbtn = document.querySelector(".dis-c");
var conf_confirm_disbtn = document.querySelector(".dis-con");

$(".platform1a-btn").click(function () {
  conf_overlay_disbox.classList.add("show-del-conf-overl-box");
});

conf_cancel_disbtn.addEventListener("click", function () {
  conf_overlay_disbox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_disbtn.addEventListener("click", disconfBox);

function disconfBox() {
  var min_bud = 500000;
  $(".platform1a-btn").hide();
  $(".disney-btn").removeClass("hide-rib");
  conf_overlay_disbox.classList.remove("show-del-conf-overl-box");
  $("#rib1a").addClass("hide-rib");
  document.getElementById("platform1a_platform1a1").setAttribute("value", min_bud);
  document.getElementById("dis_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("dis_video_budget1").setAttribute("value", min_bud / 2);
  disa(min_bud);
  calculateSum();
}

var conf_overlay_olabox = document.querySelector(".pl2");
var conf_cancel_olabtn = document.querySelector(".ola-c");
var conf_confirm_olabtn = document.querySelector(".ola-con");

$(".platform2a-btn").click(function () {
  conf_overlay_olabox.classList.add("show-del-conf-overl-box");
});

conf_cancel_olabtn.addEventListener("click", function () {
  conf_overlay_olabox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_olabtn.addEventListener("click", olaconfBox);

function olaconfBox() {
  var min_bud = 200000;
  $(".platform2a-btn").hide();
  $(".ola-btn").removeClass("hide-rib");
  conf_overlay_olabox.classList.remove("show-del-conf-overl-box");
  $("#rib2a").addClass("hide-rib");
  document.getElementById("platform2a_platform2a1").setAttribute("value", min_bud);
  document.getElementById("ola_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("ola_video_budget1").setAttribute("value", min_bud / 2);
  olaa(min_bud);
  calculateSum();
}

var conf_overlay_paybox = document.querySelector(".pl3");
var conf_cancel_paybtn = document.querySelector(".pay-c");
var conf_confirm_paybtn = document.querySelector(".pay-con");

$(".platform3a-btn").click(function () {
  conf_overlay_paybox.classList.add("show-del-conf-overl-box");
});

conf_cancel_paybtn.addEventListener("click", function () {
  conf_overlay_paybox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_paybtn.addEventListener("click", payconfBox);

function payconfBox() {
  var min_bud = 400000;
  $(".platform3a-btn").hide();
  $(".paytm-btn").removeClass("hide-rib");
  conf_overlay_paybox.classList.remove("show-del-conf-overl-box");
  $("#rib3a").addClass("hide-rib");
  document.getElementById("platform3a_platform3a1").setAttribute("value", min_bud);
  document.getElementById("paytm_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("paytm_video_budget1").setAttribute("value", min_bud / 2);
  paya(min_bud);
  calculateSum();
}

var conf_overlay_phobox = document.querySelector(".pl4");
var conf_cancel_phobtn = document.querySelector(".pho-c");
var conf_confirm_phobtn = document.querySelector(".pho-con");

$(".platform4a-btn").click(function () {
  conf_overlay_phobox.classList.add("show-del-conf-overl-box");
});

conf_cancel_phobtn.addEventListener("click", function () {
  conf_overlay_phobox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_phobtn.addEventListener("click", phoconfBox);

function phoconfBox() {
  var min_bud = 200000;
  $(".platform4a-btn").hide();
  $(".phonepe-btn").removeClass("hide-rib");
  conf_overlay_phobox.classList.remove("show-del-conf-overl-box");
  $("#rib4a").addClass("hide-rib");
  document.getElementById("platform4a_platform4a1").setAttribute("value", min_bud);
  document.getElementById("ph_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("ph_video_budget1").setAttribute("value", min_bud / 2);
  pha(min_bud);
  calculateSum();
}

var conf_overlay_mmtbox = document.querySelector(".pl5");
var conf_cancel_mmtbtn = document.querySelector(".mmt-c");
var conf_confirm_mmtbtn = document.querySelector(".mmt-con");

$(".platform5a-btn").click(function () {
  conf_overlay_mmtbox.classList.add("show-del-conf-overl-box");
});

conf_cancel_mmtbtn.addEventListener("click", function () {
  conf_overlay_mmtbox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_mmtbtn.addEventListener("click", mmtconfBox);

function mmtconfBox() {
  var min_bud = 200000;
  $(".platform5a-btn").hide();
  $(".mmt-btn").removeClass("hide-rib");
  conf_overlay_mmtbox.classList.remove("show-del-conf-overl-box");
  $("#rib5a").addClass("hide-rib");
  document.getElementById("platform5a_platform5a1").setAttribute("value", min_bud);
  document.getElementById("mmt_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("mmt_video_budget1").setAttribute("value", min_bud / 2);
  mmta(min_bud);
  calculateSum();
}

var conf_overlay_hbbox = document.querySelector(".pl7");
var conf_cancel_hbbtn = document.querySelector(".hb-c");
var conf_confirm_hbbtn = document.querySelector(".hb-con");

$(".platform7a-btn").click(function () {
  conf_overlay_hbbox.classList.add("show-del-conf-overl-box");
});

conf_cancel_hbbtn.addEventListener("click", function () {
  conf_overlay_hbbox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_hbbtn.addEventListener("click", hbconfBox);

function hbconfBox() {
  var min_bud = 200000;
  $(".platform7a-btn").hide();
  $(".hb-btn").removeClass("hide-rib");
  conf_overlay_hbbox.classList.remove("show-del-conf-overl-box");
  $("#rib7a").addClass("hide-rib");
  document.getElementById("platform7a_platform7a1").setAttribute("value", min_bud);
  document.getElementById("hb_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("hb_video_budget1").setAttribute("value", min_bud / 2);
  hba(min_bud);
  calculateSum();
}

var conf_overlay_hmbox = document.querySelector(".pl8");
var conf_cancel_hmbtn = document.querySelector(".hm-c");
var conf_confirm_hmbtn = document.querySelector(".hm-con");

$(".platform8a-btn").click(function () {
  conf_overlay_hmbox.classList.add("show-del-conf-overl-box");
});

conf_cancel_hmbtn.addEventListener("click", function () {
  conf_overlay_hmbox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_hmbtn.addEventListener("click", hmconfBox);

function hmconfBox() {
  var min_bud = 200000;
  $(".platform8a-btn").hide();
  $(".hm-btn").removeClass("hide-rib");
  conf_overlay_hmbox.classList.remove("show-del-conf-overl-box");
  $("#rib8a").addClass("hide-rib");
  document.getElementById("platform8a_platform8a1").setAttribute("value", min_bud);
  document.getElementById("hm_banner_budget1").setAttribute("value", min_bud / 3);
  document.getElementById("hm_video_budget1").setAttribute("value", min_bud / 3);
  document.getElementById("hm_audio_budget1").setAttribute("value", min_bud / 3);
  hma(min_bud);
  calculateSum();
}

var conf_overlay_pmallbox = document.querySelector(".pl9");
var conf_cancel_pmallbtn = document.querySelector(".pmall-c");
var conf_confirm_pmallbtn = document.querySelector(".pmall-con");

$(".platform9a-btn").click(function () {
  conf_overlay_pmallbox.classList.add("show-del-conf-overl-box");
});

conf_cancel_pmallbtn.addEventListener("click", function () {
  conf_overlay_pmallbox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_pmallbtn.addEventListener("click", pmallconfBox);

function pmallconfBox() {
  var min_bud = 400000;
  $(".platform9a-btn").hide();
  $(".pmall-btn").removeClass("hide-rib");
  conf_overlay_pmallbox.classList.remove("show-del-conf-overl-box");
  $("#rib9a").addClass("hide-rib");
  document.getElementById("platform9a_platform9a1").setAttribute("value", min_bud);
  document.getElementById("pmall_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("pmall_video_budget1").setAttribute("value", min_bud / 2);
  pmalla(min_bud);
  calculateSum();
}

var conf_overlay_redbox = document.querySelector(".pl10");
var conf_cancel_redbtn = document.querySelector(".red-c");
var conf_confirm_redbtn = document.querySelector(".red-con");

$(".platform10a-btn").click(function () {
  conf_overlay_redbox.classList.add("show-del-conf-overl-box");
});

conf_cancel_redbtn.addEventListener("click", function () {
  conf_overlay_redbox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_redbtn.addEventListener("click", redconfBox);

function redconfBox() {
  var min_bud = 200000;
  $(".platform10a-btn").hide();
  $(".rediff-btn").removeClass("hide-rib");
  conf_overlay_redbox.classList.remove("show-del-conf-overl-box");
  $("#rib10a").addClass("hide-rib");
  document.getElementById("platform10a_platform10a1").setAttribute("value", min_bud);
  document.getElementById("red_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("red_video_budget1").setAttribute("value", min_bud / 2);
  reda(min_bud);
  calculateSum();
}

var conf_overlay_swibox = document.querySelector(".pl11");
var conf_cancel_swibtn = document.querySelector(".swi-c");
var conf_confirm_swibtn = document.querySelector(".swi-con");

$(".platform11a-btn").click(function () {
  conf_overlay_swibox.classList.add("show-del-conf-overl-box");
});

conf_cancel_swibtn.addEventListener("click", function () {
  conf_overlay_swibox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_swibtn.addEventListener("click", swiconfBox);

function swiconfBox() {
  var min_bud = 100000;
  $(".platform11a-btn").hide();
  $(".swiggy-btn").removeClass("hide-rib");
  conf_overlay_swibox.classList.remove("show-del-conf-overl-box");
  $("#rib11a").addClass("hide-rib");
  document.getElementById("platform11a_platform11a1").setAttribute("value", min_bud);
  document.getElementById("swiggy_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("swiggy_video_budget1").setAttribute("value", min_bud / 2);
  swiggya(min_bud);
  calculateSum();
}

var conf_overlay_altbox = document.querySelector(".pl14");
var conf_cancel_altbtn = document.querySelector(".alt-c");
var conf_confirm_altbtn = document.querySelector(".alt-con");

$(".platform14a-btn").click(function () {
  conf_overlay_altbox.classList.add("show-del-conf-overl-box");
});

conf_cancel_altbtn.addEventListener("click", function () {
  conf_overlay_altbox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_altbtn.addEventListener("click", altconfBox);

function altconfBox() {
  var min_bud = 500000;
  $(".platform14a-btn").hide();
  $(".alt-btn").removeClass("hide-rib");
  conf_overlay_altbox.classList.remove("show-del-conf-overl-box");
  $("#rib14a").addClass("hide-rib");
  document.getElementById("platform14a_platform14a1").setAttribute("value", min_bud);
  document.getElementById("bal_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("bal_video_budget1").setAttribute("value", min_bud / 2);
  bala(min_bud);
  calculateSum();
}

var conf_overlay_axbox = document.querySelector(".pl15");
var conf_cancel_axbtn = document.querySelector(".ax-c");
var conf_confirm_axbtn = document.querySelector(".ax-con");

$(".platform15a-btn").click(function () {
  conf_overlay_axbox.classList.add("show-del-conf-overl-box");
});

conf_cancel_axbtn.addEventListener("click", function () {
  conf_overlay_axbox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_axbtn.addEventListener("click", axconfBox);

function axconfBox() {
  var min_bud = 200000;
  $(".platform15a-btn").hide();
  $(".Xtream-btn").removeClass("hide-rib");
  conf_overlay_axbox.classList.remove("show-del-conf-overl-box");
  $("#rib15a").addClass("hide-rib");
  document.getElementById("platform15a_platform15a1").setAttribute("value", min_bud);
  document.getElementById("xstream_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("xstream_video_budget1").setAttribute("value", min_bud / 2);
  xstreama(min_bud);
  calculateSum();
}

var conf_overlay_awbox = document.querySelector(".pl16");
var conf_cancel_awbtn = document.querySelector(".aw-c");
var conf_confirm_awbtn = document.querySelector(".aw-con");

$(".platform16a-btn").click(function () {
  conf_overlay_awbox.classList.add("show-del-conf-overl-box");
});

conf_cancel_awbtn.addEventListener("click", function () {
  conf_overlay_awbox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_awbtn.addEventListener("click", awconfBox);

function awconfBox() {
  var min_bud = 200000;
  $(".platform16a-btn").hide();
  $(".Wynk-btn").removeClass("hide-rib");
  conf_overlay_awbox.classList.remove("show-del-conf-overl-box");
  $("#rib16a").addClass("hide-rib");
  document.getElementById("platform16a_platform16a1").setAttribute("value", min_bud);
  document.getElementById("wynk_banner_budget1").setAttribute("value", min_bud / 3);
  document.getElementById("wynk_video_budget1").setAttribute("value", min_bud / 3);
  document.getElementById("wynk_audio_budget1").setAttribute("value", min_bud / 3);
  wynka(min_bud);
  calculateSum();
}

var conf_overlay_atbox = document.querySelector(".pl17");
var conf_cancel_atbtn = document.querySelector(".at-c");
var conf_confirm_atbtn = document.querySelector(".at-con");

$(".platform17a-btn").click(function () {
  conf_overlay_atbox.classList.add("show-del-conf-overl-box");
});

conf_cancel_atbtn.addEventListener("click", function () {
  conf_overlay_atbox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_atbtn.addEventListener("click", atconfBox);

function atconfBox() {
  var min_bud = 200000;
  $(".platform17a-btn").hide();
  $(".Thanks-btn").removeClass("hide-rib");
  conf_overlay_atbox.classList.remove("show-del-conf-overl-box");
  $("#rib17a").addClass("hide-rib");
  document.getElementById("platform17a_platform17a1").setAttribute("value", min_bud);
  document.getElementById("thanks_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("thanks_video_budget1").setAttribute("value", min_bud / 2);
  thanksa(min_bud);
  calculateSum();
}

var conf_overlay_hgbox = document.querySelector(".pl18");
var conf_cancel_hgbtn = document.querySelector(".hg-c");
var conf_confirm_hgbtn = document.querySelector(".hg-con");

$(".platform18a-btn").click(function () {
  conf_overlay_hgbox.classList.add("show-del-conf-overl-box");
});

conf_cancel_hgbtn.addEventListener("click", function () {
  conf_overlay_hgbox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_hgbtn.addEventListener("click", hgconfBox);

function hgconfBox() {
  var min_bud = 200000;
  $(".platform18a-btn").hide();
  $(".Games-btn").removeClass("hide-rib");
  conf_overlay_hgbox.classList.remove("show-del-conf-overl-box");
  $("#rib18a").addClass("hide-rib");
  document.getElementById("platform18a_platform18a1").setAttribute("value", min_bud);
  document.getElementById("hg_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("hg_video_budget1").setAttribute("value", min_bud / 2);
  hga(min_bud);
  calculateSum();
}

var conf_overlay_mcbox = document.querySelector(".pl19");
var conf_cancel_mcbtn = document.querySelector(".mc-c");
var conf_confirm_mcbtn = document.querySelector(".mc-con");

$(".platform19a-btn").click(function () {
  conf_overlay_mcbox.classList.add("show-del-conf-overl-box");
});

conf_cancel_mcbtn.addEventListener("click", function () {
  conf_overlay_mcbox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_mcbtn.addEventListener("click", mcconfBox);

function mcconfBox() {
  var min_bud = 500000;
  $(".platform19a-btn").hide();
  $(".Money-btn").removeClass("hide-rib");
  conf_overlay_mcbox.classList.remove("show-del-conf-overl-box");
  $("#rib19a").addClass("hide-rib");
  document.getElementById("platform19a_platform19a1").setAttribute("value", min_bud);
  document.getElementById("mc_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("mc_video_budget1").setAttribute("value", min_bud / 2);
  mca(min_bud);
  calculateSum();
}

var conf_overlay_ssgbox = document.querySelector(".pl20");
var conf_cancel_ssgbtn = document.querySelector(".ssg-c");
var conf_confirm_ssgbtn = document.querySelector(".ssg-con");

$(".platform20a-btn").click(function () {
  conf_overlay_ssgbox.classList.add("show-del-conf-overl-box");
});

conf_cancel_ssgbtn.addEventListener("click", function () {
  conf_overlay_ssgbox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_ssgbtn.addEventListener("click", ssgconfBox);

function ssgconfBox() {
  var min_bud = 200000;
  $(".platform20a-btn").hide();
  $(".StepSetGo-btn").removeClass("hide-rib");
  conf_overlay_ssgbox.classList.remove("show-del-conf-overl-box");
  $("#rib20a").addClass("hide-rib");
  document.getElementById("platform20a_platform20a1").setAttribute("value", min_bud);
  document.getElementById("ssg_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("ssg_video_budget1").setAttribute("value", min_bud / 2);
  ssgoa(min_bud);
  calculateSum();
}

var conf_overlay_sunbox = document.querySelector(".pl21");
var conf_cancel_sunbtn = document.querySelector(".sun-c");
var conf_confirm_sunbtn = document.querySelector(".sun-con");

$(".platform21a-btn").click(function () {
  conf_overlay_sunbox.classList.add("show-del-conf-overl-box");
});

conf_cancel_sunbtn.addEventListener("click", function () {
  conf_overlay_sunbox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_sunbtn.addEventListener("click", sunconfBox);

function sunconfBox() {
  var min_bud = 500000;
  $(".platform21a-btn").hide();
  $(".NXT-btn").removeClass("hide-rib");
  conf_overlay_sunbox.classList.remove("show-del-conf-overl-box");
  $("#rib21a").addClass("hide-rib");
  document.getElementById("platform21a_platform21a1").setAttribute("value", min_bud);
  document.getElementById("nxt_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("nxt_video_budget1").setAttribute("value", min_bud / 2);
  nxta(min_bud);
  calculateSum();
}

var conf_overlay_iebox = document.querySelector(".pl22");
var conf_cancel_iebtn = document.querySelector(".ie-c");
var conf_confirm_iebtn = document.querySelector(".ie-con");

$(".platform22a-btn").click(function () {
  conf_overlay_iebox.classList.add("show-del-conf-overl-box");
});
conf_cancel_iebtn.addEventListener("click", function () {
  conf_overlay_iebox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_iebtn.addEventListener("click", ieconfBox);
function ieconfBox() {
  var min_bud = 200000;
  $(".platform22a-btn").hide();
  $(".Express-btn").removeClass("hide-rib");
  conf_overlay_iebox.classList.remove("show-del-conf-overl-box");
  $("#rib22a").addClass("hide-rib");
  document.getElementById("platform22a_platform22a1").setAttribute("value", min_bud);
  document.getElementById("ie_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("ie_video_budget1").setAttribute("value", min_bud / 2);
  tiea(min_bud);
  calculateSum();
}

var conf_overlay_zeebox = document.querySelector(".pl23");
var conf_cancel_zeebtn = document.querySelector(".zee-c");
var conf_confirm_zeebtn = document.querySelector(".zee-con");

$(".platform23a-btn").click(function () {
  conf_overlay_zeebox.classList.add("show-del-conf-overl-box");
});
conf_cancel_zeebtn.addEventListener("click", function () {
  conf_overlay_zeebox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_zeebtn.addEventListener("click", zeeconfBox);
function zeeconfBox() {
  var min_bud = 500000;
  $(".platform23a-btn").hide();
  $(".Zee5-btn").removeClass("hide-rib");
  conf_overlay_zeebox.classList.remove("show-del-conf-overl-box");
  $("#rib23a").addClass("hide-rib");
  document.getElementById("platform23a_platform23a1").setAttribute("value", min_bud);
  document.getElementById("zee_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("zee_video_budget1").setAttribute("value", min_bud / 2);
  zeea(min_bud);
  calculateSum();
}

var conf_overlay_vootbox = document.querySelector(".pl24");
var conf_cancel_vootbtn = document.querySelector(".voot-c");
var conf_confirm_vootbtn = document.querySelector(".voot-con");

$(".platform24a-btn").click(function () {
  conf_overlay_vootbox.classList.add("show-del-conf-overl-box");
});
conf_cancel_vootbtn.addEventListener("click", function () {
  conf_overlay_vootbox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_vootbtn.addEventListener("click", vootconfBox);
function vootconfBox() {
  var min_bud = 500000;
  $(".platform24a-btn").hide();
  $(".Voot-btn").removeClass("hide-rib");
  conf_overlay_vootbox.classList.remove("show-del-conf-overl-box");
  $("#rib24a").addClass("hide-rib");
  document.getElementById("platform24a_platform24a1").setAttribute("value", min_bud);
  document.getElementById("voot_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("voot_video_budget1").setAttribute("value", min_bud / 2);
  voota(min_bud);
  calculateSum();
}

var conf_overlay_mgbox = document.querySelector(".pl25");
var conf_cancel_mgbtn = document.querySelector(".mg-c");
var conf_confirm_mgbtn = document.querySelector(".mg-con");

$(".platform25a-btn").click(function () {
  conf_overlay_mgbox.classList.add("show-del-conf-overl-box");
});
conf_cancel_mgbtn.addEventListener("click", function () {
  conf_overlay_mgbox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_mgbtn.addEventListener("click", mgconfBox);
function mgconfBox() {
  var min_bud = 200000;
  $(".platform25a-btn").hide();
  $(".mygate-btn").removeClass("hide-rib");
  conf_overlay_mgbox.classList.remove("show-del-conf-overl-box");
  $("#rib25a").addClass("hide-rib");
  document.getElementById("platform25a_platform25a1").setAttribute("value", min_bud);
  document.getElementById("myg_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("myg_video_budget1").setAttribute("value", min_bud / 2);
  myga(min_bud);
  calculateSum();
}

var conf_overlay_tcbox = document.querySelector(".pl26");
var conf_cancel_tcbtn = document.querySelector(".tc-c");
var conf_confirm_tcbtn = document.querySelector(".tc-con");

$(".platform26a-btn").click(function () {
  conf_overlay_tcbox.classList.add("show-del-conf-overl-box");
});
conf_cancel_tcbtn.addEventListener("click", function () {
  conf_overlay_tcbox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_tcbtn.addEventListener("click", tcconfBox);
function tcconfBox() {
  var min_bud = 800000;
  $(".platform26a-btn").hide();
  $(".truecaller-btn").removeClass("hide-rib");
  conf_overlay_tcbox.classList.remove("show-del-conf-overl-box");
  $("#rib26a").addClass("hide-rib");
  document.getElementById("platform26a_platform26a1").setAttribute("value", min_bud);
  document.getElementById("tcall_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("tcall_video_budget1").setAttribute("value", min_bud / 2);
  tcalla(min_bud);
  calculateSum();
}

var conf_overlay_picbox = document.querySelector(".pl27");
var conf_cancel_picbtn = document.querySelector(".pic-c");
var conf_confirm_picbtn = document.querySelector(".pic-con");

$(".platform27a-btn").click(function () {
  conf_overlay_picbox.classList.add("show-del-conf-overl-box");
});
conf_cancel_picbtn.addEventListener("click", function () {
  conf_overlay_picbox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_picbtn.addEventListener("click", picconfBox);
function picconfBox() {
  var min_bud = 200000;
  $(".platform27a-btn").hide();
  $(".picsart-btn").removeClass("hide-rib");
  conf_overlay_picbox.classList.remove("show-del-conf-overl-box");
  $("#rib27a").addClass("hide-rib");
  document.getElementById("platform27a_platform27a1").setAttribute("value", min_bud);
  document.getElementById("pic_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("pic_video_budget1").setAttribute("value", min_bud / 2);
  pica(min_bud);
  calculateSum();
}

var conf_overlay_insbox = document.querySelector(".pl28");
var conf_cancel_insbtn = document.querySelector(".ins-c");
var conf_confirm_insbtn = document.querySelector(".ins-con");

$(".platform28a-btn").click(function () {
  conf_overlay_insbox.classList.add("show-del-conf-overl-box");
});
conf_cancel_insbtn.addEventListener("click", function () {
  conf_overlay_insbox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_insbtn.addEventListener("click", insconfBox);
function insconfBox() {
  var min_bud = 250000;
  $(".platform28a-btn").hide();
  $(".inshort-btn").removeClass("hide-rib");
  conf_overlay_insbox.classList.remove("show-del-conf-overl-box");
  $("#rib28a").addClass("hide-rib");
  document.getElementById("platform28a_platform28a1").setAttribute("value", min_bud);
  document.getElementById("inshrt_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("inshrt_video_budget1").setAttribute("value", min_bud / 2);
  inshrta(min_bud);
  calculateSum();
}

var conf_overlay_amabox = document.querySelector(".pl29");
var conf_cancel_amabtn = document.querySelector(".ama-c");
var conf_confirm_amabtn = document.querySelector(".ama-con");

$(".platform29a-btn").click(function () {
  conf_overlay_amabox.classList.add("show-del-conf-overl-box");
});
conf_cancel_amabtn.addEventListener("click", function () {
  conf_overlay_amabox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_amabtn.addEventListener("click", amaconfBox);
function amaconfBox() {
  var min_bud = 800000;
  $(".platform29a-btn").hide();
  $(".amazon-btn").removeClass("hide-rib");
  conf_overlay_amabox.classList.remove("show-del-conf-overl-box");
  $("#rib29a").addClass("hide-rib");
  document.getElementById("platform29a_platform29a1").setAttribute("value", min_bud);
  document.getElementById("amz_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("amz_video_budget1").setAttribute("value", min_bud / 2);
  amza(min_bud);
  calculateSum();
}

var conf_overlay_bmsbox = document.querySelector(".pl30");
var conf_cancel_bmsbtn = document.querySelector(".bms-c");
var conf_confirm_bmsbtn = document.querySelector(".bms-con");

$(".platform30a-btn").click(function () {
  conf_overlay_bmsbox.classList.add("show-del-conf-overl-box");
});
conf_cancel_bmsbtn.addEventListener("click", function () {
  conf_overlay_bmsbox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_bmsbtn.addEventListener("click", bmsconfBox);
function bmsconfBox() {
  var min_bud = 400000;
  $(".platform30a-btn").hide();
  $(".bms-btn").removeClass("hide-rib");
  conf_overlay_bmsbox.classList.remove("show-del-conf-overl-box");
  $("#rib30a").addClass("hide-rib");
  document.getElementById("platform30a_platform30a1").setAttribute("value", min_bud);
  document.getElementById("bms_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("bms_video_budget1").setAttribute("value", min_bud / 2);
  bmsa(min_bud);
  calculateSum();
}

var conf_overlay_mbbox = document.querySelector(".pl31");
var conf_cancel_mbbtn = document.querySelector(".mb-c");
var conf_confirm_mbbtn = document.querySelector(".mb-con");

$(".platform31a-btn").click(function () {
  conf_overlay_mbbox.classList.add("show-del-conf-overl-box");
});
conf_cancel_mbbtn.addEventListener("click", function () {
  conf_overlay_mbbox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_mbbtn.addEventListener("click", mbconfBox);
function mbconfBox() {
  var min_bud = 200000;
  $(".platform31a-btn").hide();
  $(".milkbasket-btn").removeClass("hide-rib");
  conf_overlay_mbbox.classList.remove("show-del-conf-overl-box");
  $("#rib31a").addClass("hide-rib");
  document.getElementById("platform31a_platform31a1").setAttribute("value", min_bud);
  document.getElementById("mb_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("mb_video_budget1").setAttribute("value", min_bud / 2);
  mba(min_bud);
  calculateSum();
}

var conf_overlay_nbhbox = document.querySelector(".pl32");
var conf_cancel_nbhbtn = document.querySelector(".nbh-c");
var conf_confirm_nbhbtn = document.querySelector(".nbh-con");

$(".platform32a-btn").click(function () {
  conf_overlay_nbhbox.classList.add("show-del-conf-overl-box");
});
conf_cancel_nbhbtn.addEventListener("click", function () {
  conf_overlay_nbhbox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_nbhbtn.addEventListener("click", nbhconfBox);
function nbhconfBox() {
  var min_bud = 200000;
  $(".platform32a-btn").hide();
  $(".nbh-btn").removeClass("hide-rib");
  conf_overlay_nbhbox.classList.remove("show-del-conf-overl-box");
  $("#rib32a").addClass("hide-rib");
  document.getElementById("platform32a_platform32a1").setAttribute("value", min_bud);
  document.getElementById("nbh_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("nbh_video_budget1").setAttribute("value", min_bud / 2);
  nbha(min_bud);
  calculateSum();
}

var conf_overlay_pebox = document.querySelector(".pl33");
var conf_cancel_pebtn = document.querySelector(".pe-c");
var conf_confirm_pebtn = document.querySelector(".pe-con");

$(".platform33a-btn").click(function () {
  conf_overlay_pebox.classList.add("show-del-conf-overl-box");
});
conf_cancel_pebtn.addEventListener("click", function () {
  conf_overlay_pebox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_pebtn.addEventListener("click", peconfBox);
function peconfBox() {
  var min_bud = 500000;
  $(".platform33a-btn").hide();
  $(".pharmeasy-btn").removeClass("hide-rib");
  conf_overlay_pebox.classList.remove("show-del-conf-overl-box");
  $("#rib33a").addClass("hide-rib");
  document.getElementById("platform33a_platform33a1").setAttribute("value", min_bud);
  document.getElementById("peasy_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("peasy_video_budget1").setAttribute("value", min_bud / 2);
  peasya(min_bud);
  calculateSum();
}

var conf_overlay_mobbox = document.querySelector(".pl34");
var conf_cancel_mobbtn = document.querySelector(".mob-c");
var conf_confirm_mobbtn = document.querySelector(".mob-con");

$(".platform34a-btn").click(function () {
  conf_overlay_mobbox.classList.add("show-del-conf-overl-box");
});
conf_cancel_mobbtn.addEventListener("click", function () {
  conf_overlay_mobbox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_mobbtn.addEventListener("click", mobconfBox);
function mobconfBox() {
  var min_bud = 200000;
  $(".platform34a-btn").hide();
  $(".mobiwik-btn").removeClass("hide-rib");
  conf_overlay_mobbox.classList.remove("show-del-conf-overl-box");
  $("#rib34a").addClass("hide-rib");
  document.getElementById("platform34a_platform34a1").setAttribute("value", min_bud);
  document.getElementById("mobi_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("mobi_video_budget1").setAttribute("value", min_bud / 2);
  mobia(min_bud);
  calculateSum();
}

var conf_overlay_glabox = document.querySelector(".pl35");
var conf_cancel_glabtn = document.querySelector(".gla-c");
var conf_confirm_glabtn = document.querySelector(".gla-con");

$(".platform35a-btn").click(function () {
  conf_overlay_glabox.classList.add("show-del-conf-overl-box");
});
conf_cancel_glabtn.addEventListener("click", function () {
  conf_overlay_glabox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_glabtn.addEventListener("click", glaconfBox);
function glaconfBox() {
  var min_bud = 500000;
  $(".platform35a-btn").hide();
  $(".glance-btn").removeClass("hide-rib");
  conf_overlay_glabox.classList.remove("show-del-conf-overl-box");
  $("#rib35a").addClass("hide-rib");
  document.getElementById("platform35a_platform35a1").setAttribute("value", min_bud);
  document.getElementById("glance_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("glance_video_budget1").setAttribute("value", min_bud / 2);
  glancea(min_bud);
  calculateSum();
}

var conf_overlay_gpaybox = document.querySelector(".pl36");
var conf_cancel_gpaybtn = document.querySelector(".gpay-c");
var conf_confirm_gpaybtn = document.querySelector(".gpay-con");

$(".platform36a-btn").click(function () {
  conf_overlay_gpaybox.classList.add("show-del-conf-overl-box");
});
conf_cancel_gpaybtn.addEventListener("click", function () {
  conf_overlay_gpaybox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_gpaybtn.addEventListener("click", gpayconfBox);
function gpayconfBox() {
  var min_bud = 200000;
  $(".platform36a-btn").hide();
  $(".gpay-btn").removeClass("hide-rib");
  conf_overlay_gpaybox.classList.remove("show-del-conf-overl-box");
  $("#rib36a").addClass("hide-rib");
  document.getElementById("platform36a_platform36a1").setAttribute("value", min_bud);
  document.getElementById("g_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("g_video_budget1").setAttribute("value", min_bud / 2);
  ga(min_bud);
  calculateSum();
}

var conf_overlay_jsbox = document.querySelector(".pl37");
var conf_cancel_jsbtn = document.querySelector(".js-c");
var conf_confirm_jsbtn = document.querySelector(".js-con");

$(".platform37a-btn").click(function () {
  conf_overlay_jsbox.classList.add("show-del-conf-overl-box");
});
conf_cancel_jsbtn.addEventListener("click", function () {
  conf_overlay_jsbox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_jsbtn.addEventListener("click", jsconfBox);
function jsconfBox() {
  var min_bud = 500000;
  $(".platform37a-btn").hide();
  $(".saavn-btn").removeClass("hide-rib");
  conf_overlay_jsbox.classList.remove("show-del-conf-overl-box");
  $("#rib37a").addClass("hide-rib");
  document.getElementById("platform37a_platform37a1").setAttribute("value", min_bud);
  document.getElementById("saavn_banner_budget1").setAttribute("value", min_bud / 3);
  document.getElementById("saavn_video_budget1").setAttribute("value", min_bud / 3);
  document.getElementById("saavn_audio_budget1").setAttribute("value", min_bud / 3);
  savaana(min_bud);
  calculateSum();
}

var conf_overlay_dailybox = document.querySelector(".pl38");
var conf_cancel_dailybtn = document.querySelector(".daily-c");
var conf_confirm_dailybtn = document.querySelector(".daily-con");

$(".platform38a-btn").click(function () {
  conf_overlay_dailybox.classList.add("show-del-conf-overl-box");
});

conf_cancel_dailybtn.addEventListener("click", function () {
  conf_overlay_dailybox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_dailybtn.addEventListener("click", dailyconfBox);

function dailyconfBox() {
  var min_bud = 150000;
  $(".platform38a-btn").hide();
  $(".daily-btn").removeClass("hide-rib");
  conf_overlay_dailybox.classList.remove("show-del-conf-overl-box");
  $("#rib38a").addClass("hide-rib");
  document.getElementById("platform38a_platform38a1").setAttribute("value", min_bud);
  document.getElementById("daily_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("daily_video_budget1").setAttribute("value", min_bud / 2);
  dailya(min_bud);
  calculateSum();
}

var conf_overlay_jiobox = document.querySelector(".pl39");
var conf_cancel_jiobtn = document.querySelector(".jio-c");
var conf_confirm_jiobtn = document.querySelector(".jio-con");

$(".platform39a-btn").click(function () {
  conf_overlay_jiobox.classList.add("show-del-conf-overl-box");
});
conf_cancel_jiobtn.addEventListener("click", function () {
  conf_overlay_jiobox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_jiobtn.addEventListener("click", jioconfBox);
function jioconfBox() {
  var min_bud = 500000;
  $(".platform39a-btn").hide();
  $(".jio-btn").removeClass("hide-rib");
  conf_overlay_jiobox.classList.remove("show-del-conf-overl-box");
  $("#rib39a").addClass("hide-rib");
  document.getElementById("platform39a_platform39a1").setAttribute("value", min_bud);
  document.getElementById("jio_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("jio_video_budget1").setAttribute("value", min_bud / 2);
  jioa(min_bud);
  calculateSum();
}

var conf_overlay_matbox = document.querySelector(".pl40");
var conf_cancel_matbtn = document.querySelector(".mat-c");
var conf_confirm_matbtn = document.querySelector(".mat-con");

$(".platform40a-btn").click(function () {
  conf_overlay_matbox.classList.add("show-del-conf-overl-box");
});
conf_cancel_matbtn.addEventListener("click", function () {
  conf_overlay_matbox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_matbtn.addEventListener("click", matconfBox);
function matconfBox() {
  var min_bud = 400000;
  $(".platform40a-btn").hide();
  $(".matrimony-btn").removeClass("hide-rib");
  conf_overlay_matbox.classList.remove("show-del-conf-overl-box");
  $("#rib40a").addClass("hide-rib");
  document.getElementById("platform40a_platform40a1").setAttribute("value", min_bud);
  document.getElementById("mat_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("mat_video_budget1").setAttribute("value", min_bud / 2);
  mata(min_bud);
  calculateSum();
}

var conf_overlay_carbox = document.querySelector(".pl41");
var conf_cancel_carbtn = document.querySelector(".car-c");
var conf_confirm_carbtn = document.querySelector(".car-con");

$(".platform41a-btn").click(function () {
  conf_overlay_carbox.classList.add("show-del-conf-overl-box");
});
conf_cancel_carbtn.addEventListener("click", function () {
  conf_overlay_carbox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_carbtn.addEventListener("click", carconfBox);
function carconfBox() {
  var min_bud = 200000;
  $(".platform41a-btn").hide();
  $(".carwale-btn").removeClass("hide-rib");
  conf_overlay_carbox.classList.remove("show-del-conf-overl-box");
  $("#rib41a").addClass("hide-rib");
  document.getElementById("platform41a_platform41a1").setAttribute("value", min_bud);
  document.getElementById("car_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("car_video_budget1").setAttribute("value", min_bud / 2);
  cara(min_bud);
  calculateSum();
}

var conf_overlay_uberbox = document.querySelector(".pl42");
var conf_cancel_uberbtn = document.querySelector(".uber-c");
var conf_confirm_uberbtn = document.querySelector(".uber-con");

$(".platform42a-btn").click(function () {
  conf_overlay_uberbox.classList.add("show-del-conf-overl-box");
});
conf_cancel_uberbtn.addEventListener("click", function () {
  conf_overlay_uberbox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_uberbtn.addEventListener("click", uberconfBox);
function uberconfBox() {
  var min_bud = 200000;
  $(".platform42a-btn").hide();
  $(".uber-btn").removeClass("hide-rib");
  conf_overlay_uberbox.classList.remove("show-del-conf-overl-box");
  $("#rib42a").addClass("hide-rib");
  document.getElementById("platform42a_platform42a1").setAttribute("value", min_bud);
  document.getElementById("_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("_video_budget1").setAttribute("value", min_bud / 2);
  ubera(min_bud);
  calculateSum();
}

var conf_overlay_pfmbox = document.querySelector(".pl43");
var conf_cancel_pfmbtn = document.querySelector(".pfm-c");
var conf_confirm_pfmbtn = document.querySelector(".pfm-con");

$(".platform43a-btn").click(function () {
  conf_overlay_pfmbox.classList.add("show-del-conf-overl-box");
});
conf_cancel_pfmbtn.addEventListener("click", function () {
  conf_overlay_pfmbox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_pfmbtn.addEventListener("click", pfmconfBox);
function pfmconfBox() {
  var min_bud = 100000;
  $(".platform43a-btn").hide();
  $(".Pocketfm-btn").removeClass("hide-rib");
  conf_overlay_pfmbox.classList.remove("show-del-conf-overl-box");
  $("#rib43a").addClass("hide-rib");
  document.getElementById("platform43a_platform43a1").setAttribute("value", min_bud);
  document.getElementById("pfm_banner_budget1").setAttribute("value", min_bud / 3);
  document.getElementById("pfm_video_budget1").setAttribute("value", min_bud / 3);
  document.getElementById("pfm_audio_budget1").setAttribute("value", min_bud / 3);
  pfma(min_bud);
  calculateSum();
}

var conf_overlay_gaabox = document.querySelector(".pl44");
var conf_cancel_gaabtn = document.querySelector(".gaa-c");
var conf_confirm_gaabtn = document.querySelector(".gaa-con");

$(".platform44a-btn").click(function () {
  conf_overlay_gaabox.classList.add("show-del-conf-overl-box");
});
conf_cancel_gaabtn.addEventListener("click", function () {
  conf_overlay_gaabox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_gaabtn.addEventListener("click", gaaconfBox);
function gaaconfBox() {
  var min_bud = 800000;
  $(".platform44a-btn").hide();
  $(".ganna-btn").removeClass("hide-rib");
  conf_overlay_gaabox.classList.remove("show-del-conf-overl-box");
  $("#rib44a").addClass("hide-rib");
  document.getElementById("platform44a_platform44a1").setAttribute("value", min_bud);
  document.getElementById("gaana_banner_budget1").setAttribute("value", min_bud / 3);
  document.getElementById("gaana_video_budget1").setAttribute("value", min_bud / 3);
  document.getElementById("gaana_audio_budget1").setAttribute("value", min_bud / 3);
  gaanaa(min_bud);
  calculateSum();
}

var conf_overlay_credbox = document.querySelector(".pl45");
var conf_cancel_credbtn = document.querySelector(".cred-c");
var conf_confirm_credbtn = document.querySelector(".cred-con");

$(".platform45a-btn").click(function () {
  conf_overlay_credbox.classList.add("show-del-conf-overl-box");
});
conf_cancel_credbtn.addEventListener("click", function () {
  conf_overlay_credbox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_credbtn.addEventListener("click", credconfBox);
function credconfBox() {
  var min_bud = 300000;
  $(".platform45a-btn").hide();
  $(".cred-btn").removeClass("hide-rib");
  conf_overlay_credbox.classList.remove("show-del-conf-overl-box");
  $("#rib45a").addClass("hide-rib");
  document.getElementById("platform45a_platform45a1").setAttribute("value", min_bud);
  document.getElementById("cred_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("cred_video_budget1").setAttribute("value", min_bud / 2);
  creda(min_bud);
  calculateSum();
}

var conf_overlay_tpbox = document.querySelector(".pl46");
var conf_cancel_tpbtn = document.querySelector(".tp-c");
var conf_confirm_tpbtn = document.querySelector(".tp-con");

$(".platform46a-btn").click(function () {
  conf_overlay_tpbox.classList.add("show-del-conf-overl-box");
});
conf_cancel_tpbtn.addEventListener("click", function () {
  conf_overlay_tpbox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_tpbtn.addEventListener("click", tpconfBox);
function tpconfBox() {
  var min_bud = 400000;
  $(".platform46a-btn").hide();
  $(".tataplay-btn").removeClass("hide-rib");
  conf_overlay_tpbox.classList.remove("show-del-conf-overl-box");
  $("#rib46a").addClass("hide-rib");
  document.getElementById("platform46a_platform46a1").setAttribute("value", min_bud);
  document.getElementById("tplay_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("tplay_video_budget1").setAttribute("value", min_bud / 2);
  tplaya(min_bud);
  calculateSum();
}

var conf_overlay_scbox = document.querySelector(".pl47");
var conf_cancel_scbtn = document.querySelector(".sc-c");
var conf_confirm_scbtn = document.querySelector(".sc-con");

$(".platform47a-btn").click(function () {
  conf_overlay_scbox.classList.add("show-del-conf-overl-box");
});
conf_cancel_scbtn.addEventListener("click", function () {
  conf_overlay_scbox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_scbtn.addEventListener("click", scconfBox);
function scconfBox() {
  var min_bud = 200000;
  $(".platform47a-btn").hide();
  $(".snapchat-btn").removeClass("hide-rib");
  conf_overlay_scbox.classList.remove("show-del-conf-overl-box");
  $("#rib47a").addClass("hide-rib");
  document.getElementById("platform47a_platform47a1").setAttribute("value", min_bud);
  document.getElementById("snap_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("snap_video_budget1").setAttribute("value", min_bud / 2);
  snapa(min_bud);
  calculateSum();
}

var conf_overlay_crexbox = document.querySelector(".pl48");
var conf_cancel_crexbtn = document.querySelector(".crex-c");
var conf_confirm_crexbtn = document.querySelector(".crex-con");

$(".platform48a-btn").click(function () {
  conf_overlay_crexbox.classList.add("show-del-conf-overl-box");
});
conf_cancel_crexbtn.addEventListener("click", function () {
  conf_overlay_crexbox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_crexbtn.addEventListener("click", crexconfBox);
function crexconfBox() {
  var min_bud = 200000;
  $(".platform48a-btn").hide();
  $(".crex-btn").removeClass("hide-rib");
  conf_overlay_crexbox.classList.remove("show-del-conf-overl-box");
  $("#rib48a").addClass("hide-rib");
  document.getElementById("platform48a_platform48a1").setAttribute("value", min_bud);
  document.getElementById("crex_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("crex_video_budget1").setAttribute("value", min_bud / 2);
  crexa(min_bud);
  calculateSum();
}

var conf_overlay_ixbox = document.querySelector(".pl50");
var conf_cancel_ixbtn = document.querySelector(".ix-c");
var conf_confirm_ixbtn = document.querySelector(".ix-con");

$(".platform50a-btn").click(function () {
  conf_overlay_ixbox.classList.add("show-del-conf-overl-box");
});

conf_cancel_ixbtn.addEventListener("click", function () {
  conf_overlay_ixbox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_ixbtn.addEventListener("click", ixconfBox);

function ixconfBox() {
  var min_bud = 300000;
  $(".platform50a-btn").hide();
  $(".ixigo-btn").removeClass("hide-rib");
  conf_overlay_ixbox.classList.remove("show-del-conf-overl-box");
  $("#rib50a").addClass("hide-rib");
  document.getElementById("platform50a_platform50a1").setAttribute("value", min_bud);
  document.getElementById("ix_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("ix_video_budget1").setAttribute("value", min_bud / 2);
  ixa(min_bud);
  calculateSum();
}

var conf_overlay_addabox = document.querySelector(".pl51");
var conf_cancel_addabtn = document.querySelector(".adda-c");
var conf_confirm_addabtn = document.querySelector(".adda-con");

$(".platform51a-btn").click(function () {
  conf_overlay_addabox.classList.add("show-del-conf-overl-box");
});
conf_cancel_addabtn.addEventListener("click", function () {
  conf_overlay_addabox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_addabtn.addEventListener("click", addaconfBox);
function addaconfBox() {
  var min_bud = 300000;
  $(".platform51a-btn").hide();
  $(".adda-btn").removeClass("hide-rib");
  conf_overlay_addabox.classList.remove("show-del-conf-overl-box");
  $("#rib51a").addClass("hide-rib");
  document.getElementById("platform51a_platform51a1").setAttribute("value", min_bud);
  document.getElementById("adda_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("adda_video_budget1").setAttribute("value", min_bud / 2);
  addaa(min_bud);
  calculateSum();
}

var conf_overlay_vibox = document.querySelector(".pl52");
var conf_cancel_vibtn = document.querySelector(".vi-c");
var conf_confirm_vibtn = document.querySelector(".vi-con");

$(".platform52a-btn").click(function () {
  conf_overlay_vibox.classList.add("show-del-conf-overl-box");
});
conf_cancel_vibtn.addEventListener("click", function () {
  conf_overlay_vibox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_vibtn.addEventListener("click", viconfBox);
function viconfBox() {
  var min_bud = 500000;
  $(".platform52a-btn").hide();
  $(".vi-btn").removeClass("hide-rib");
  conf_overlay_vibox.classList.remove("show-del-conf-overl-box");
  $("#rib52a").addClass("hide-rib");
  document.getElementById("platform52a_platform52a1").setAttribute("value", min_bud);
  document.getElementById("vi_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("vi_video_budget1").setAttribute("value", min_bud / 2);
  via(min_bud);
  calculateSum();
}

var conf_overlay_spotbox = document.querySelector(".pl53");
var conf_cancel_spotbtn = document.querySelector(".spot-c");
var conf_confirm_spotbtn = document.querySelector(".spot-con");

$(".platform53a-btn").click(function () {
  conf_overlay_spotbox.classList.add("show-del-conf-overl-box");
});
conf_cancel_spotbtn.addEventListener("click", function () {
  conf_overlay_spotbox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_spotbtn.addEventListener("click", spotconfBox);
function spotconfBox() {
  var min_bud = 1300000;
  $(".platform53a-btn").hide();
  $(".spotify-btn").removeClass("hide-rib");
  conf_overlay_spotbox.classList.remove("show-del-conf-overl-box");
  $("#rib53a").addClass("hide-rib");
  document.getElementById("platform53a_platform53a1").setAttribute("value", min_bud);
  document.getElementById("spot_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("spot_video_budget1").setAttribute("value", min_bud / 2);
  spota(min_bud);
  calculateSum();
}

var conf_overlay_chingbox = document.querySelector(".pl55");
var conf_cancel_chingbtn = document.querySelector(".ching-c");
var conf_confirm_chingbtn = document.querySelector(".ching-con");

$(".platform55a-btn").click(function () {
  conf_overlay_chingbox.classList.add("show-del-conf-overl-box");
});
conf_cancel_chingbtn.addEventListener("click", function () {
  conf_overlay_chingbox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_chingbtn.addEventListener("click", chingconfBox);
function chingconfBox() {
  var min_bud = 200000;
  $(".platform55a-btn").hide();
  $(".chingari-btn").removeClass("hide-rib");
  conf_overlay_chingbox.classList.remove("show-del-conf-overl-box");
  $("#rib55a").addClass("hide-rib");
  document.getElementById("platform55a_platform55a1").setAttribute("value", min_bud);
  document.getElementById("ching_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("ching_video_budget1").setAttribute("value", min_bud / 2);
  chinga(min_bud);
  calculateSum();
}

var conf_overlay_sonybox = document.querySelector(".pl56");
var conf_cancel_sonybtn = document.querySelector(".sony-c");
var conf_confirm_sonybtn = document.querySelector(".sony-con");

$(".platform56a-btn").click(function () {
  conf_overlay_sonybox.classList.add("show-del-conf-overl-box");
});
conf_cancel_sonybtn.addEventListener("click", function () {
  conf_overlay_sonybox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_sonybtn.addEventListener("click", sonyconfBox);
function sonyconfBox() {
  var min_bud = 500000;
  $(".platform56a-btn").hide();
  $(".sony-btn").removeClass("hide-rib");
  conf_overlay_sonybox.classList.remove("show-del-conf-overl-box");
  $("#rib56a").addClass("hide-rib");
  document.getElementById("platform56a_platform56a1").setAttribute("value", min_bud);
  document.getElementById("sony_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("sony_video_budget1").setAttribute("value", min_bud / 2);
  sonya(min_bud);
  calculateSum();
}

var conf_overlay_webox = document.querySelector(".pl57");
var conf_cancel_webtn = document.querySelector(".we-c");
var conf_confirm_webtn = document.querySelector(".we-con");

$(".platform57a-btn").click(function () {
  conf_overlay_webox.classList.add("show-del-conf-overl-box");
});
conf_cancel_webtn.addEventListener("click", function () {
  conf_overlay_webox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_webtn.addEventListener("click", weconfBox);
function weconfBox() {
  var min_bud = 800000;
  $(".platform57a-btn").hide();
  $(".wetransfer-btn").removeClass("hide-rib");
  conf_overlay_webox.classList.remove("show-del-conf-overl-box");
  $("#rib57a").addClass("hide-rib");
  document.getElementById("platform57a_platform57a1").setAttribute("value", min_bud);
  document.getElementById("we_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("we_video_budget1").setAttribute("value", min_bud / 2);
  wea(min_bud);
  calculateSum();
}

var conf_overlay_sharebox = document.querySelector(".pl58");
var conf_cancel_sharebtn = document.querySelector(".share-c");
var conf_confirm_sharebtn = document.querySelector(".share-con");

$(".platform58a-btn").click(function () {
  conf_overlay_sharebox.classList.add("show-del-conf-overl-box");
});
conf_cancel_sharebtn.addEventListener("click", function () {
  conf_overlay_sharebox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_sharebtn.addEventListener("click", shareconfBox);
function shareconfBox() {
  var min_bud = 200000;
  $(".platform58a-btn").hide();
  $(".sharechat-btn").removeClass("hide-rib");
  conf_overlay_sharebox.classList.remove("show-del-conf-overl-box");
  $("#rib58a").addClass("hide-rib");
  document.getElementById("platform58a_platform58a1").setAttribute("value", min_bud);
  document.getElementById("share_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("share_video_budget1").setAttribute("value", min_bud / 2);
  sharea(min_bud);
  calculateSum();
}


var conf_overlay_flipbox = document.querySelector(".pl59");
var conf_cancel_flipbtn = document.querySelector(".flip-c");
var conf_confirm_flipbtn = document.querySelector(".flip-con");

$(".platform59a-btn").click(function () {
  conf_overlay_flipbox.classList.add("show-del-conf-overl-box");
});
conf_cancel_flipbtn.addEventListener("click", function () {
  conf_overlay_flipbox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_flipbtn.addEventListener("click", flipconfBox);
function flipconfBox() {
  var min_bud = 800000;
  $(".platform59a-btn").hide();
  $(".flipkart-btn").removeClass("hide-rib");
  conf_overlay_flipbox.classList.remove("show-del-conf-overl-box");
  $("#rib59a").addClass("hide-rib");
  document.getElementById("platform59a_platform59a1").setAttribute("value", min_bud);
  document.getElementById("flip_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("flip_video_budget1").setAttribute("value", min_bud / 2);
  flipa(min_bud);
  calculateSum();
}



var conf_overlay_firbox = document.querySelector(".pl60");
var conf_cancel_firbtn = document.querySelector(".fir-c");
var conf_confirm_firbtn = document.querySelector(".fir-con");

$(".platform60a-btn").click(function () {
  conf_overlay_firbox.classList.add("show-del-conf-overl-box");
});
conf_cancel_firbtn.addEventListener("click", function () {
  conf_overlay_firbox.classList.remove("show-del-conf-overl-box");
});
conf_confirm_firbtn.addEventListener("click", firconfBox);
function firconfBox() {
  var min_bud = 800000;
  $(".platform60a-btn").hide();
  $(".firetv-btn").removeClass("hide-rib");
  conf_overlay_firbox.classList.remove("show-del-conf-overl-box");
  $("#rib60a").addClass("hide-rib");
  document.getElementById("platform60a_platform60a1").setAttribute("value", min_bud);
  document.getElementById("fire_banner_budget1").setAttribute("value", min_bud / 2);
  document.getElementById("fire_video_budget1").setAttribute("value", min_bud / 2);
  firea(min_bud);
  calculateSum();
}

// ===============================================================================================

// total calculating on edit budget
function calculateSum() {
  var total_gst = 0;
  var budget_array = [];
  //iterate through each textboxes and add the values
  $(".tot").each(function () {
    //add only if the value is number

    if ($(this).is(":visible")) {
      var price = $(this).val();
      budget_array.push(price);
    }
  });

  var sum = budget_array.reduce(function (a, b) {
    return Number(a) + Number(b);
  }, 0);
  total_gst = 0.18 * sum;
  total_sum_data = Math.round(sum + total_gst);
  console.log(total_sum_data);
  console.log(budget_array);
  console.log(sum);

  $("#total_sum").html(Math.round(sum));
  $("#total_gst").html(Math.round(total_gst));
  $("#auto_data_budget").html(Math.round(total_sum_data));
}

// These two functions is to find the closest parent of a selector
function collectionHas(a, b) {
  //helper function (see below)
  for (var i = 0, len = a.length; i < len; i++) {
    if (a[i] == b) return true;
  }
  return false;
}
function findParentBySelector(elm, selector) {
  var all = document.querySelectorAll(selector);
  var cur = elm.parentNode;

  while (cur && !collectionHas(all, cur)) {
    //keep going up until you find a match
    cur = cur.parentNode; //go up
  }
  return cur; //will return null if not found
}

var delete_menu_btns = document.querySelectorAll(".del-menu-icon-image");
var del_conf_overlay_box = document.querySelector(".del-conf-overl-outer");
var del_conf_cancel_btn = document.querySelector(".del-conf-cancel-btn");
var del_conf_confirm_btn = document.querySelector(".del-conf-confirm-btn");

delete_menu_btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    showDeleteConfBox(btn);
  });
});

function showDeleteConfBox(btn) {
  del_conf_overlay_box.classList.add("show-del-conf-overl-box");
  btn.classList.add("toBeRemoved");
}

del_conf_cancel_btn.addEventListener("click", cancelDeleteconfBox);
del_conf_confirm_btn.addEventListener("click", removeDeleteconfBox);

function cancelDeleteconfBox() {
  del_conf_overlay_box.classList.remove("show-del-conf-overl-box");

  clearBtnClasses();
}

function removeDeleteconfBox() {
  var btnToBeRemoved = document.querySelector(".toBeRemoved");

  var cartToBeRemoved = findParentBySelector(btnToBeRemoved, ".res-card-outer");

  cartToBeRemoved.classList.add("hide-res-card-outer");

  del_conf_overlay_box.classList.remove("show-del-conf-overl-box");

  clearBtnClasses();
  var product_id = cartToBeRemoved.id;
  var updated_product_id = product_id + "_" + product_id + "1";

  delete_product(updated_product_id);
}

function clearBtnClasses() {
  delete_menu_btns.forEach((btn) => {
    btn.classList.remove("toBeRemoved");
  });
}

function delete_product(id) {
  var delete_card_budget = $("#" + id).val();
  var total_del_budget = $("#total_sum").html();
  var deleted_budget = parseInt(total_del_budget) - parseInt(delete_card_budget);
  var updated_gst = 0.18 * deleted_budget;
  $("#total_sum").html(Math.round(deleted_budget));
  $("#total_gst").html(Math.round(updated_gst));
}


var pay_config = document.querySelector(".pay-btn");

function dis(value) {
  var dis_budget = Math.round((value / 52) * 1000);
  document.getElementById("disBudget1").value = dis_budget;
  var plat = document.querySelector("#note1a");
  var platform = document.querySelector("#platform1a_platform1a1");
  var b_budget = parseInt(document.getElementById("dis_video_budget1").value);
  var budget = b_budget + parseInt(value);

  console.log(plat);

  if (budget < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}

function dis1(value) {
  var dis_video = Math.round((value / 332) * 1000);
  document.getElementById("disvideo1").value = dis_video;
  var plat = document.querySelector("#note1a");
  var platform = document.querySelector("#platform1a_platform1a1");
  var b_budget = parseInt(document.getElementById("dis_banner_budget1").value);
  var budget = b_budget + parseInt(value);

  if (budget < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}

function ola(value) {
  var ola_budget = Math.round((value / 332) * 1000);
  document.getElementById("olaBudget1").value = ola_budget;
  var plat = document.querySelector("#note2a");
  var platform = document.querySelector("#platform2a_platform2a1");
  var b_budget = parseInt(document.getElementById("ola_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}
function ola1(value) {
  var ola_video = Math.round((value / 150) * 1000);
  document.getElementById("olavideo1").setAttribute("value", ola_video);
  var plat = document.querySelector("#note2a");
  var platform = document.querySelector("#platform2a_platform2a1");
  var b_budget = parseInt(document.getElementById("ola_banner_budget1").value);
  var budget = b_budget + parseInt(value);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}

function pay(value) {
  var pay_budget = Math.round((value / 250) * 1000);
  document.getElementById("payBudget1").value = pay_budget;
  var plat = document.querySelector("#note3a");
  var platform = document.querySelector("#platform3a_platform3a1");
  var b_budget = parseInt(document.getElementById("paytm_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 400000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}

function pay1(value) {
  var pay_video = Math.round((value / 150) * 1000);
  document.getElementById("payvideo1").setAttribute("value", pay_video);
  var plat = document.querySelector("#note3a");
  var platform = document.querySelector("#platform3a_platform3a1");
  var b_budget = parseInt(document.getElementById("paytm_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 400000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}

function ph(value) {
  var ph_budget = Math.round((value / 201) * 1000);
  document.getElementById("phBudget1").value = ph_budget;
  var plat = document.querySelector("#note4a");
  var platform = document.querySelector("#platform4a_platform4a1");
  var b_budget = parseInt(document.getElementById("ph_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}

function ph1(value) {
  var ph_video = Math.round((value / 201) * 1000);
  document.getElementById("phvideo1").setAttribute("value", ph_video);
  var plat = document.querySelector("#note4a");
  var platform = document.querySelector("#platform4a_platform4a1");
  var b_budget = parseInt(document.getElementById("ph_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}

function mmt(value) {
  var mmt_budget = Math.round((value / 228) * 1000);
  document.getElementById("mmtBudget1").value = mmt_budget;
  var plat = document.querySelector("#note5a");
  var platform = document.querySelector("#platform5a_platform5a1");
  var b_budget = parseInt(document.getElementById("mmt_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}

function mmt1(value) {
  var mmt_video = Math.round((value / 150) * 1000);
  document.getElementById("mmtvideo1").setAttribute("value", mmt_video);
  var plat = document.querySelector("#note5a");
  var platform = document.querySelector("#platform5a_platform5a1");
  var b_budget = parseInt(document.getElementById("mmt_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function hb(value) {
  var hb_budget = Math.round((value / 150) * 1000);
  document.getElementById("hbBudget1").value = hb_budget;
  var plat = document.querySelector("#note7a");
  var platform = document.querySelector("#platform7a_platform7a1");
  var b_budget = parseInt(document.getElementById("hb_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }


}

function hb1(value) {
  var hb_video = Math.round((value / 150) * 1000);
  document.getElementById("hbvideo1").value = hb_video;
  var plat = document.querySelector("#note7a");
  var platform = document.querySelector("#platform7a_platform7a1");
  var b_budget = parseInt(document.getElementById("hb_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }

}

function hm(value) {
  var hm_budget = Math.round((value / 160) * 1000);
  document.getElementById("hmBudget1").value = hm_budget;
  var plat = document.querySelector("#note8a");
  var platform = document.querySelector("#platform8a_platform8a1");
  var b_budget = parseFloat(document.getElementById("hm_video_budget1").value);
  var a_budget = parseFloat(document.getElementById("hm_audio_budget1").value);
  console.log(a_budget);
  console.log(b_budget);
  var budget = Math.round(b_budget) + Math.round(parseInt(value)) + Math.round(a_budget);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }

}

function hm1(value) {
  var hm_video = Math.round((value / 260) * 1000);
  document.getElementById("hmvideo1").value = hm_video;
  var plat = document.querySelector("#note8a");
  var platform = document.querySelector("#platform8a_platform8a1");
  var b_budget = parseFloat(document.getElementById("hm_banner_budget1").value);
  var a_budget = parseFloat(document.getElementById("hm_audio_budget1").value);
  var budget = Math.round(b_budget) + Math.round(parseInt(value)) + Math.round(a_budget);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}

function hm2(value) {
  var hm_audio = Math.round((value / 150) * 1000);
  document.getElementById("hmaudio1").value = hm_audio;
  var plat = document.querySelector("#note8a");
  var platform = document.querySelector("#platform8a_platform8a1");
  var b_budget = parseFloat(document.getElementById("hm_banner_budget1").value);
  var v_budget = parseFloat(document.getElementById("hm_video_budget1").value);
  var budget = Math.round(b_budget) + Math.round(parseInt(value)) + Math.round(v_budget);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function pmall(value) {
  var pmall_budget = Math.round((value / 250) * 1000);
  document.getElementById("pmallBudget1").value = pmall_budget;
  var plat = document.querySelector("#note9a");
  var platform = document.querySelector("#platform9a_platform9a1");
  var b_budget = parseInt(document.getElementById("pmall_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 400000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}

function pmall1(value) {
  var pmall_video = Math.round((value / 150) * 1000);
  document.getElementById("pmallvideo1").value = pmall_video;
  var plat = document.querySelector("#note9a");
  var platform = document.querySelector("#platform9a_platform9a1");
  var b_budget = parseInt(document.getElementById("pmall_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 400000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}

function red(value) {
  var red_budget = Math.round((value / 140) * 1000);
  document.getElementById("redBudget1").value = red_budget;
  var plat = document.querySelector("#note10a");
  var platform = document.querySelector("#platform10a_platform10a1");
  var b_budget = parseInt(document.getElementById("red_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}

function red1(value) {
  var red_video = Math.round((value / 150) * 1000);
  document.getElementById("redvideo1").value = red_video;
  var plat = document.querySelector("#note10a");
  var platform = document.querySelector("#platform10a_platform10a1");
  var b_budget = parseInt(document.getElementById("red_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}

function swiggy(value) {

  var swiggy_budget = Math.round(value / 108 * 1000);
  document.getElementById('swiggyBudget1').value = swiggy_budget;
  var plat = document.querySelector("#note11a");
  var platform = document.querySelector("#platform11a_platform11a1");
  var b_budget = parseInt(document.getElementById("swiggy_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 100000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function swiggy1(value) {

  var swiggy_video = Math.round(value / 231 * 1000);
  document.getElementById('swiggyvideo1').value = swiggy_video;
  var plat = document.querySelector("#note11a");
  var platform = document.querySelector("#platform11a_platform11a1");
  var b_budget = parseInt(document.getElementById("swiggy_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 100000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}



function bal(value) {
  var bal_budget = Math.round(value / 5 * 1000);
  document.getElementById("balBudget1").value = bal_budget;
  var plat = document.querySelector("#note14a");
  var platform = document.querySelector("#platform14a_platform14a1");
  var b_budget = parseInt(document.getElementById("bal_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}

function bal1(value) {
  var bal_video = Math.round(value / 50 * 1000);
  document.getElementById("balvideo1").value = bal_video;
  var plat = document.querySelector("#note14a");
  var platform = document.querySelector("#platform14a_platform14a1");
  var b_budget = parseInt(document.getElementById("bal_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function wynk(value) {
  var wynk_budget = Math.round((value / 150) * 1000);
  document.getElementById("wynkBudget1").value = wynk_budget;
  var plat = document.querySelector("#note16a");
  var platform = document.querySelector("#platform16a_platform16a1");
  var b_budget = parseFloat(document.getElementById("wynk_video_budget1").value);
  var a_budget = parseFloat(document.getElementById("wynk_audio_budget1").value);
  var budget = Math.round(b_budget) + Math.round(parseInt(value)) + Math.round(a_budget);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }

}

function wynk1(value) {
  var wynk_video = Math.round((value / 150) * 1000);
  document.getElementById("wynkvideo1").value = wynk_video;
  var plat = document.querySelector("#note16a");
  var platform = document.querySelector("#platform16a_platform16a1");
  var b_budget = parseFloat(document.getElementById("wynk_banner_budget1").value);
  var a_budget = parseFloat(document.getElementById("wynk_audio_budget1").value);
  var budget = Math.round(b_budget) + Math.round(parseInt(value)) + Math.round(a_budget);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }

}


function wynk2(value) {
  var wynk_audio = Math.round((value / 150) * 1000);
  document.getElementById("wynkaudio1").value = wynk_audio;
  var plat = document.querySelector("#note16a");
  var platform = document.querySelector("#platform16a_platform16a1");
  var b_budget = parseFloat(document.getElementById("wynk_banner_budget1").value);
  var v_budget = parseFloat(document.getElementById("wynk_video_budget1").value);
  var budget = Math.round(b_budget) + Math.round(parseInt(value)) + Math.round(v_budget);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}



function xstream(value) {
  var xstream_budget = Math.round((value / 216) * 1000);
  document.getElementById("xstreamBudget1").value = xstream_budget;
  var plat = document.querySelector("#note15a");
  var platform = document.querySelector("#platform15a_platform15a1");
  var b_budget = parseInt(document.getElementById("xstream_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}

function xstream1(value) {
  var xstream_video = Math.round((value / 260) * 1000);
  document.getElementById("xstreamvideo1").value = xstream_video;
  var plat = document.querySelector("#note15a");
  var platform = document.querySelector("#platform15a_platform15a1");
  var b_budget = parseInt(document.getElementById("xstream_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function thanks(value) {
  var thanks_budget = Math.round((value / 150) * 1000);
  document.getElementById("thanksBudget1").value = thanks_budget;
  var plat = document.querySelector("#note17a");
  var platform = document.querySelector("#platform17a_platform17a1");
  var b_budget = parseInt(document.getElementById("thanks_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}



function thanks1(value) {
  var thanks_video = Math.round((value / 150) * 1000);
  document.getElementById("thanksvideo1").value = thanks_video;
  var plat = document.querySelector("#note17a");
  var platform = document.querySelector("#platform17a_platform17a1");
  var b_budget = parseInt(document.getElementById("thanks_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function hg(value) {
  var hg_budget = Math.round((value / 150) * 1000);
  document.getElementById("hgBudget1").value = hg_budget;
  var plat = document.querySelector("#note18a");
  var platform = document.querySelector("#platform18a_platform18a1");
  var b_budget = parseInt(document.getElementById("hg_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }

}

function hg1(value) {
  var hg_video = Math.round((value / 150) * 1000);
  document.getElementById("hgvideo1").value = hg_video;
  var plat = document.querySelector("#note18a");
  var platform = document.querySelector("#platform18a_platform18a1");
  var b_budget = parseInt(document.getElementById("hg_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function mc(value) {
  var mc_budget = Math.round((value / 231) * 1000);
  document.getElementById("mcBudget1").value = mc_budget;
  var plat = document.querySelector("#note19a");
  var platform = document.querySelector("#platform19a_platform19a1");
  var b_budget = parseInt(document.getElementById("mc_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}

function mc1(value) {
  var mc_video = Math.round((value / 150) * 1000);
  document.getElementById("mcvideo1").value = mc_video;
  var plat = document.querySelector("#note19a");
  var platform = document.querySelector("#platform19a_platform19a1");
  var b_budget = parseInt(document.getElementById("mc_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function ssgo(value) {
  var ssgo_budget = Math.round((value / 150) * 1000);
  document.getElementById("ssgBudget1").value = ssgo_budget;
  var plat = document.querySelector("#note20a");
  var platform = document.querySelector("#platform20a_platform20a1");
  var b_budget = parseInt(document.getElementById("ssg_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function ssgo1(value) {
  var ssgo_video = Math.round((value / 150) * 1000);
  document.getElementById("ssgvideo1").value = ssgo_video;
  var plat = document.querySelector("#note20a");
  var platform = document.querySelector("#platform20a_platform20a1");
  var b_budget = parseInt(document.getElementById("ssg_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}



function nxt(value) {
  var nxt_budget = Math.round((value / 150) * 1000);
  document.getElementById("nxtBudget1").value = nxt_budget;
  var plat = document.querySelector("#note21a");
  var platform = document.querySelector("#platform21a_platform21a1");
  var b_budget = parseInt(document.getElementById("nxt_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function nxt1(value) {
  var nxt_video = Math.round((value / 442) * 1000);
  document.getElementById("nxtvideo1").value = nxt_video;
  var plat = document.querySelector("#note21a");
  var platform = document.querySelector("#platform21a_platform21a1");
  var b_budget = parseInt(document.getElementById("nxt_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}

function tie(value) {
  var tie_budget = Math.round(value / 140 * 1000);
  document.getElementById("tieBudget1").value = tie_budget;
  var plat = document.querySelector("#note22a");
  var platform = document.querySelector("#platform22a_platform22a1");
  var b_budget = parseInt(document.getElementById("ie_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }

}



function tie1(value) {
  var tie_video = Math.round((value / 150) * 1000);
  document.getElementById("tievideo1").value = tie_video;
  var plat = document.querySelector("#note22a");
  var platform = document.querySelector("#platform22a_platform22a1");
  var b_budget = parseInt(document.getElementById("ie_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function zee(value) {
  var zee_budget = Math.round((value / 112) * 1000);
  document.getElementById("zeeBudget1").value = zee_budget;
  var plat = document.querySelector("#note23a");
  var platform = document.querySelector("#platform23a_platform23a1");
  var b_budget = parseInt(document.getElementById("zee_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function zee1(value) {
  var zee_video = Math.round((value / 180) * 1000);
  document.getElementById("zeevideo1").value = zee_video;
  var plat = document.querySelector("#note23a");
  var platform = document.querySelector("#platform23a_platform23a1");
  var b_budget = parseInt(document.getElementById("zee_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function voot(value) {
  var voot_budget = Math.round((value / 94) * 1000);
  document.getElementById("vootBudget1").value = voot_budget;
  var plat = document.querySelector("#note24a");
  var platform = document.querySelector("#platform24a_platform24a1");
  var b_budget = parseInt(document.getElementById("voot_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}

function voot1(value) {
  var voot_video = Math.round((value / 150) * 1000);
  document.getElementById("vootvideo1").value = voot_video;
  var plat = document.querySelector("#note24a");
  var platform = document.querySelector("#platform24a_platform24a1");
  var b_budget = parseInt(document.getElementById("voot_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function myg(value) {
  var myg_budget = Math.round((value / 16) * 1000);
  document.getElementById("mygBudget1").value = myg_budget;
  var plat = document.querySelector("#note25a");
  var platform = document.querySelector("#platform25a_platform25a1");
  var b_budget = parseInt(document.getElementById("myg_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}

function myg1(value) {
  var myg_video = Math.round((value / 150) * 1000);
  document.getElementById("mygvideo1").value = myg_video;
  var plat = document.querySelector("#note25a");
  var platform = document.querySelector("#platform25a_platform25a1");
  var b_budget = parseInt(document.getElementById("myg_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function tcall(value) {
  var tcall_budget = Math.round((value / 65) * 1000);
  document.getElementById("tcallBudget1").value = tcall_budget;
  var plat = document.querySelector("#note26a");
  var platform = document.querySelector("#platform26a_platform26a1");
  var b_budget = parseInt(document.getElementById("tcall_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 800000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}

function tcall1(value) {
  var tcall_video = Math.round((value / 150) * 1000);
  document.getElementById("tcallvideo1").value = tcall_video;
  var plat = document.querySelector("#note26a");
  var platform = document.querySelector("#platform26a_platform26a1");
  var b_budget = parseInt(document.getElementById("tcall_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 800000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function pic(value) {
  var pic_budget = Math.round((value / 6) * 1000);
  document.getElementById("picBudget1").value = pic_budget;
  var plat = document.querySelector("#note27a");
  var platform = document.querySelector("#platform27a_platform27a1");
  var b_budget = parseInt(document.getElementById("pic_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}

function pic1(value) {
  var pic_video = Math.round((value / 150) * 1000);
  document.getElementById("picvideo1").value = pic_video;
  var plat = document.querySelector("#note27a");
  var platform = document.querySelector("#platform27a_platform27a1");
  var b_budget = parseInt(document.getElementById("pic_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function inshrt(value) {
  var inshrt_budget = Math.round((value / 360) * 1000);
  document.getElementById("inshrtBudget1").value = inshrt_budget;
  var plat = document.querySelector("#note28a");
  var platform = document.querySelector("#platform28a_platform28a1");
  var b_budget = parseInt(document.getElementById("inshrt_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 250000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function inshrt1(value) {
  var inshrt_video = Math.round((value / 480) * 1000);
  document.getElementById("inshrtvideo1").value = inshrt_video;

  var plat = document.querySelector("#note28a");
  var platform = document.querySelector("#platform28a_platform28a1");
  var b_budget = parseInt(document.getElementById("inshrt_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 250000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }

}


function amz(value) {
  var amz_budget = Math.round((value / 300) * 1000);
  document.getElementById("amzBudget1").value = amz_budget;
  var plat = document.querySelector("#note29a");
  var platform = document.querySelector("#platform29a_platform29a1");
  var b_budget = parseInt(document.getElementById("amz_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 800000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}

function amz1(value) {
  var amz_video = Math.round((value / 180) * 1000);
  document.getElementById("amzvideo1").value = amz_video;
  var plat = document.querySelector("#note29a");
  var platform = document.querySelector("#platform29a_platform29a1");
  var b_budget = parseInt(document.getElementById("amz_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 800000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}



function bms(value) {
  var bms_budget = Math.round((value / 332) * 1000);
  document.getElementById("bmsBudget1").value = bms_budget;
  var plat = document.querySelector("#note30a");
  var platform = document.querySelector("#platform30a_platform30a1");
  var b_budget = parseInt(document.getElementById("bms_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 400000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function bms1(value) {
  var bms_video = Math.round((value / 442) * 1000);
  document.getElementById("bmsvideo1").value = bms_video;
  var plat = document.querySelector("#note30a");
  var platform = document.querySelector("#platform30a_platform30a1");
  var b_budget = parseInt(document.getElementById("bms_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 400000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}



// function mb(value) {
//   var mb_budget = Math.round((value / 50000) * 1000);
//   var mb_video = Math.round((value / 150) * 1000);
//   document.getElementById("mbBudget1").setAttribute("value", mb_budget / 2);
//   document.getElementById("mbvideo1").setAttribute("value", mb_video / 2);
//   calculateSum();
// }

function nbh(value) {
  var nbh_budget = Math.round((value / 150) * 1000);
  document.getElementById("nbhBudget1").value = nbh_budget;
  var plat = document.querySelector("#note32a");
  var platform = document.querySelector("#platform32a_platform32a1");
  var b_budget = parseInt(document.getElementById("nbh_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}

function nbh1(value) {
  var nbh_video = Math.round((value / 150) * 100);
  document.getElementById("nbhvideo1").value = nbh_video;
  var plat = document.querySelector("#note32a");
  var platform = document.querySelector("#platform32a_platform32a1");
  var b_budget = parseInt(document.getElementById("nbh_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}




function peasy(value) {
  var peasy_budget = Math.round((value / 150) * 1000);
  document.getElementById("peasyBudget1").value = peasy_budget;
  var plat = document.querySelector("#note33a");
  var platform = document.querySelector("#platform33a_platform33a1");
  var b_budget = parseInt(document.getElementById("peasy_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }

}

function peasy1(value) {
  var peasy_video = Math.round((value / 150) * 1000);
  document.getElementById("peasyvideo1").value = peasy_video;
  var plat = document.querySelector("#note33a");
  var platform = document.querySelector("#platform33a_platform33a1");
  var b_budget = parseInt(document.getElementById("peasy_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function mobi(value) {
  var mobi_budget = Math.round((value / 156) * 1000);
  document.getElementById("mobiBudget1").value = mobi_budget;
  var plat = document.querySelector("#note34a");
  var platform = document.querySelector("#platform34a_platform34a1");
  var b_budget = parseInt(document.getElementById("mobi_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}

function mobi1(value) {
  var mobi_video = Math.round((value / 150) * 1000);
  document.getElementById("mobivideo1").value = mobi_video;
  var plat = document.querySelector("#note34a");
  var platform = document.querySelector("#platform34a_platform34a1");
  var b_budget = parseInt(document.getElementById("mobi_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}




function glance(value) {
  var glance_budget = Math.round((value / 144) * 1000);
  document.getElementById("glanceBudget1").value = glance_budget;
  var plat = document.querySelector("#note35a");
  var platform = document.querySelector("#platform35a_platform35a1");
  var b_budget = parseInt(document.getElementById("glance_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}

function glance1(value) {
  var glance_video = Math.round((value / 180) * 1000);
  document.getElementById("glancevideo1").value = glance_video;
  var plat = document.querySelector("#note35a");
  var platform = document.querySelector("#platform35a_platform35a1");
  var b_budget = parseInt(document.getElementById("glance_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function g(value) {
  var g_budget = Math.round((value / 5) * 1000);
  document.getElementById("gBudget1").value = g_budget;
  var plat = document.querySelector("#note36a");
  var platform = document.querySelector("#platform36a_platform36a1");
  var b_budget = parseInt(document.getElementById("g_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function g1(value) {
  var g_video = Math.round((value / 150) * 1000);
  document.getElementById("gvideo1").value = g_video;
  var plat = document.querySelector("#note36a");
  var platform = document.querySelector("#platform36a_platform36a1");
  var b_budget = parseInt(document.getElementById("g_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}

function savaan(value) {
  var savaan_budget = Math.round((value / 150) * 1000);
  document.getElementById("saavnBudget1").value = savaan_budget;
  var plat = document.querySelector("#note37a");
  var platform = document.querySelector("#platform37a_platform37a1");
  var b_budget = parseFloat(document.getElementById("saavn_video_budget1").value);
  var a_budget = parseFloat(document.getElementById("saavn_audio_budget1").value);
  var budget = Math.round(b_budget) + Math.round(parseInt(value)) + Math.round(a_budget);
  console.log(budget);

  if (budget < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function savaan1(value) {
  var savaan_video = Math.round((value / 150) * 1000);
  document.getElementById("saavnvideo1").value = savaan_video;
  var plat = document.querySelector("#note37a");
  var platform = document.querySelector("#platform37a_platform37a1");
  var b_budget = parseFloat(document.getElementById("saavn_banner_budget1").value);
  var a_budget = parseFloat(document.getElementById("saavn_audio_budget1").value);
  var budget = Math.round(b_budget) + Math.round(parseInt(value)) + Math.round(a_budget);
  console.log(budget);

  if (budget < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function savaan2(value) {
  var saavn_audio = Math.round((value / 150) * 1000);
  document.getElementById("saavnaudio1").value = saavn_audio;
  var plat = document.querySelector("#note37a");
  var platform = document.querySelector("#platform37a_platform37a1");
  var b_budget = parseFloat(document.getElementById("saavn_banner_budget1").value);
  var v_budget = parseFloat(document.getElementById("saavn_video_budget1").value);
  var budget = Math.round(b_budget) + Math.round(parseInt(value)) + Math.round(v_budget);
  console.log(budget);

  if (budget < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function daily(value) {
  var daily_budget = Math.round((value / 180) * 1000);
  document.getElementById("dailyBudget1").value = daily_budget;
  var plat = document.querySelector("#note38a");
  var platform = document.querySelector("#platform38a_platform38a1");
  var b_budget = parseInt(document.getElementById("daily_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 150000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}

function daily1(value) {
  var daily_video = Math.round((value / 240) * 1000);
  document.getElementById("dailyvideo1").value = daily_video;
  var plat = document.querySelector("#note38a");
  var platform = document.querySelector("#platform38a_platform38a1");
  var b_budget = parseInt(document.getElementById("daily_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 150000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function jio(value) {
  var jio_budget = Math.round((value / 150) * 1000);
  document.getElementById("jioBudget1").value = jio_budget;
  var plat = document.querySelector("#note39a");
  var platform = document.querySelector("#platform39a_platform39a1");
  var b_budget = parseInt(document.getElementById("jio_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}



function jio1(value) {
  var jio_video = Math.round((value / 150) * 1000);
  document.getElementById("jiovideo1").value = jio_video;
  var plat = document.querySelector("#note39a");
  var platform = document.querySelector("#platform39a_platform39a1");
  var b_budget = parseInt(document.getElementById("jio_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}



function mat(value) {
  var mat_budget = Math.round((value / 150) * 1000);
  document.getElementById("matBudget1").value = mat_budget;
  var plat = document.querySelector("#note40a");
  var platform = document.querySelector("#platform40a_platform40a1");
  var b_budget = parseInt(document.getElementById("mat_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 400000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function mat1(value) {
  var mat_video = Math.round((value / 150) * 1000);
  document.getElementById("matvideo1").value = mat_video;
  var plat = document.querySelector("#note40a");
  var platform = document.querySelector("#platform40a_platform40a1");
  var b_budget = parseInt(document.getElementById("mat_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 400000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function car(value) {
  var car_budget = Math.round((value / 240) * 1000);
  document.getElementById("carBudget1").value = car_budget;
  var plat = document.querySelector("#note41a");
  var platform = document.querySelector("#platform41a_platform41a1");
  var b_budget = parseInt(document.getElementById("car_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function car1(value) {
  var car_video = Math.round((value / 150) * 1000);
  document.getElementById("carvideo1").value = car_video;
  var plat = document.querySelector("#note41a");
  var platform = document.querySelector("#platform41a_platform41a1");
  var b_budget = parseInt(document.getElementById("car_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}

// function uber(value) {
//   var uber_budget = Math.round((value / 150) * 1000);
//   var uber_video = Math.round((value / 150) * 1000);
//   document.getElementById("uberBudget1").setAttribute("value", uber_budget / 2);
//   document.getElementById("ubervideo1").setAttribute("value", uber_video / 2);
//   calculateSum();
// }

function pfm(value) {
  var pfm_budget = Math.round((value / 120) * 1000);
  document.getElementById("pfmBudget1").value = pfm_budget;
  var plat = document.querySelector("#note43a");
  var platform = document.querySelector("#platform43a_platform43a1");
  var b_budget = parseFloat(document.getElementById("pfm_video_budget1").value);
   var a_budget = parseFloat(document.getElementById("pfm_audio_budget1").value);
   var budget = Math.round(b_budget) + Math.round(parseInt(value)) + Math.round(a_budget);
  console.log(budget);

  if (budget < 100000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}

function pfm1(value) {
  var pfm_video = Math.round((value / 264) * 1000);
  document.getElementById("pfmvideo1").value = pfm_video;
  var plat = document.querySelector("#note43a");
  var platform = document.querySelector("#platform43a_platform43a1");
  var b_budget = parseFloat(document.getElementById("pfm_banner_budget1").value);
  var a_budget = parseFloat(document.getElementById("pfm_audio_budget1").value);
  var budget = Math.round(b_budget) + Math.round(parseInt(value)) + Math.round(a_budget);
  console.log(budget);

  if (budget < 100000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}



function pfm2(value) {
  var pfm_audio = Math.round((value / 150) * 1000);
  document.getElementById("pfmaudio1").value = pfm_audio;
  var plat = document.querySelector("#note43a");
  var platform = document.querySelector("#platform43a_platform43a1");
  var b_budget = parseFloat(document.getElementById("pfm_banner_budget1").value);
  var v_budget = parseFloat(document.getElementById("pfm_video_budget1").value);
  var budget = Math.round(b_budget) + Math.round(parseInt(value)) + Math.round(v_budget);
  console.log(budget);

  if (budget < 100000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}

function gaana(value) {
  var gaana_budget = Math.round((value / 48) * 1000);
  document.getElementById("gaanaBudget1").value = gaana_budget;
  var plat = document.querySelector("#note44a");
  var platform = document.querySelector("#platform44a_platform44a1");
  var b_budget = parseFloat(document.getElementById("gaana_video_budget1").value);
  var a_budget = parseFloat(document.getElementById("gaana_audio_budget1").value);
  console.log(a_budget);
  console.log(b_budget);
   var budget = Math.round(b_budget) + Math.round(parseInt(value)) + Math.round(a_budget);
  console.log(budget);

  if (budget < 800000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}



function gaana1(value) {
  var gaana_video = Math.round((value / 360) * 1000);
  document.getElementById("gaanavideo1").value = gaana_video;
  var plat = document.querySelector("#note44a");
  var platform = document.querySelector("#platform44a_platform44a1");
  var b_budget = parseFloat(document.getElementById("gaana_banner_budget1").value);
  var a_budget = parseFloat(document.getElementById("gaana_audio_budget1").value);
  console.log(a_budget);
  console.log(b_budget);
  var budget = Math.round(b_budget) + Math.round(parseInt(value)) + Math.round(a_budget);
  console.log(budget);

  if (budget < 800000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}



function gaana2(value) {
  var gaana_audio = Math.round((value / 150) * 1000);
  document.getElementById("gaanaaudio1").value = gaana_audio;
  var plat = document.querySelector("#note44a");
  var platform = document.querySelector("#platform44a_platform44a1");
  var b_budget = parseFloat(document.getElementById("gaana_banner_budget1").value);
  var v_budget = parseFloat(document.getElementById("gaana_video_budget1").value);
  var budget = Math.round(b_budget) + Math.round(parseInt(value)) + Math.round(v_budget);
  console.log(budget);

  if (budget < 800000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}



function cred(value) {
  var cred_budget = Math.round((value / 240) * 1000);
  document.getElementById("credBudget1").value = cred_budget;
  var plat = document.querySelector("#note45a");
  var platform = document.querySelector("#platform45a_platform45a1");
  var b_budget = parseInt(document.getElementById("cred_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 300000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}

function cred1(value) {
  var cred_video = Math.round((value / 150) * 1000);
  document.getElementById("credvideo1").value = cred_video;
  var plat = document.querySelector("#note45a");
  var platform = document.querySelector("#platform45a_platform45a1");
  var b_budget = parseInt(document.getElementById("cred_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 300000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function tplay(value) {
  var tplay_budget = Math.round((value / 96) * 1000);
  document.getElementById("tplayBudget1").value = tplay_budget;
  var plat = document.querySelector("#note46a");
  var platform = document.querySelector("#platform46a_platform46a1");
  var b_budget = parseInt(document.getElementById("tplay_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 400000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}

function tplay1(value) {
  var tplay_video = Math.round((value / 150) * 1000);
  document.getElementById("tplayvideo1").value = tplay_video;
  var plat = document.querySelector("#note46a");
  var platform = document.querySelector("#platform46a_platform46a1");
  var b_budget = parseInt(document.getElementById("tplay_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 400000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function snap(value) {
  var snap_budget = Math.round((value / 50) * 1000);
  document.getElementById("snapBudget1").value = snap_budget;
  var plat = document.querySelector("#note47a");
  var platform = document.querySelector("#platform47a_platform47a1");
  var b_budget = parseInt(document.getElementById("snap_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function snap1(value) {
  var snap_video = Math.round((value / 200) * 1000);
  document.getElementById("snapvideo1").value = snap_video;
  var plat = document.querySelector("#note47a");
  var platform = document.querySelector("#platform47a_platform47a1");
  var b_budget = parseInt(document.getElementById("snap_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}

function crex(value) {
  var crex_budget = Math.round((value / 150) * 1000);
  document.getElementById("crexBudget1").value = crex_budget;
  var plat = document.querySelector("#note48a");
  var platform = document.querySelector("#platform48a_platform48a1");
  var b_budget = parseInt(document.getElementById("crex_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}

function crex1(value) {
  var crex_video = Math.round((value / 150) * 1000);
  document.getElementById("crexvideo1").value = crex_video;
  var plat = document.querySelector("#note48a");
  var platform = document.querySelector("#platform48a_platform48a1");
  var b_budget = parseInt(document.getElementById("crex_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function ix(value) {
  var ix_budget = Math.round((value / 150) * 1000);
  document.getElementById("ixBudget1").value = ix_budget;
  var plat = document.querySelector("#note50a");
  var platform = document.querySelector("#platform50a_platform50a1");
  var b_budget = parseInt(document.getElementById("ix_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 300000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function ix1(value) {
  var ix_video = Math.round((value / 150) * 1000);
  document.getElementById("ixvideo1").value = ix_video;
  var plat = document.querySelector("#note50a");
  var platform = document.querySelector("#platform50a_platform50a1");
  var b_budget = parseInt(document.getElementById("ix_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 300000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function adda(value) {
  var adda_budget = Math.round((value / 150) * 1000);
  document.getElementById("addaBudget1").value = adda_budget;
  var plat = document.querySelector("#note51a");
  var platform = document.querySelector("#platform51a_platform51a1");
  var b_budget = parseInt(document.getElementById("adda_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 300000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}

function adda1(value) {
  var adda_video = Math.round((value / 150) * 1000);
  document.getElementById("addavideo1").value = adda_video;
  var plat = document.querySelector("#note51a");
  var platform = document.querySelector("#platform51a_platform51a1");
  var b_budget = parseInt(document.getElementById("adda_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 300000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}



function vi(value) {
  var vi_budget = Math.round((value / 150) * 1000);
  document.getElementById("viBudget1").value = vi_budget;
  var plat = document.querySelector("#note52a");
  var platform = document.querySelector("#platform52a_platform52a1");
  var b_budget = parseInt(document.getElementById("vi_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}



function vi1(value) {
  var vi_video = Math.round((value / 150) * 1000);
  document.getElementById("vivideo1").value = vi_video;
  var plat = document.querySelector("#note52a");
  var platform = document.querySelector("#platform52a_platform52a1");
  var b_budget = parseInt(document.getElementById("vi_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function spot(value) {
  var spot_budget = Math.round((value / 150) * 1000);
  document.getElementById("spotBudget1").value = spot_budget;
  var plat = document.querySelector("#note53a");
  var platform = document.querySelector("#platform53a_platform53a1");
  var b_budget = parseInt(document.getElementById("spot_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 1300000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}



function spot1(value) {
  var spot_video = Math.round((value / 150) * 1000);
  document.getElementById("spotvideo1").value = spot_video;
  var plat = document.querySelector("#note53a");
  var platform = document.querySelector("#platform53a_platform53a1");
  var b_budget = parseInt(document.getElementById("spot_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 1300000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}

function ching(value) {
  var ching_budget = Math.round((value / 150) * 1000);
  document.getElementById("chingBudget1").value = ching_budget;
  var plat = document.querySelector("#note55a");
  var platform = document.querySelector("#platform55a_platform55a1");
  var b_budget = parseInt(document.getElementById("ching_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function ching1(value) {
  var ching_video = Math.round((value / 150) * 1000);
  document.getElementById("chingvideo1").value = ching_video;
  var plat = document.querySelector("#note55a");
  var platform = document.querySelector("#platform55a_platform55a1");
  var b_budget = parseInt(document.getElementById("ching_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function sony(value) {
  var sony_budget = Math.round((value / 150) * 1000);
  document.getElementById("sonyBudget1").value = sony_budget;
  var plat = document.querySelector("#note56a");
  var platform = document.querySelector("#platform56a_platform56a1");
  var b_budget = parseInt(document.getElementById("sony_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}

function sony1(value) {
  var sony_video = Math.round((value / 319) * 1000);
  document.getElementById("sonyvideo1").value = sony_video;
  var plat = document.querySelector("#note56a");
  var platform = document.querySelector("#platform56a_platform56a1");
  var b_budget = parseInt(document.getElementById("sony_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function we(value) {
  var we_budget = Math.round((value / 300) * 1000);
  document.getElementById("weBudget1").value = we_budget;
  var plat = document.querySelector("#note57a");
  var platform = document.querySelector("#platform57a_platform57a1");
  var b_budget = parseInt(document.getElementById("we_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 800000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}

function we1(value) {
  var we_video = Math.round((value / 150) * 1000);
  document.getElementById("wevideo1").value = we_video;
  var plat = document.querySelector("#note57a");
  var platform = document.querySelector("#platform57a_platform57a1");
  var b_budget = parseInt(document.getElementById("we_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 800000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function share(value) {
  var share_budget = Math.round((value / 46) * 1000);
  document.getElementById("shareBudget1").value = share_budget;
  var plat = document.querySelector("#note58a");
  var platform = document.querySelector("#platform58a_platform58a1");
  var b_budget = parseInt(document.getElementById("share_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function share1(value) {
  var share_video = Math.round((value / 46) * 1000);
  document.getElementById("sharevideo1").value = share_video;
  var plat = document.querySelector("#note58a");
  var platform = document.querySelector("#platform58a_platform58a1");
  var b_budget = parseInt(document.getElementById("share_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function flip(value) {
  var flip_budget = Math.round((value / 150) * 1000);
  document.getElementById("flipBudget1").value = flip_budget;
  var plat = document.querySelector("#note59a");
  var platform = document.querySelector("#platform59a_platform59a1");
  var b_budget = parseInt(document.getElementById("flip_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 800000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function flip1(value) {
  var flip_video = Math.round((value / 150) * 1000);
  document.getElementById("flipvideo1").value = flip_video;
  var plat = document.querySelector("#note59a");
  var platform = document.querySelector("#platform59a_platform59a1");
  var b_budget = parseInt(document.getElementById("flip_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 800000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


function fire(value) {
  var fire_budget = Math.round((value / 300) * 1000);
  document.getElementById("fireBudget1").value = fire_budget;
  var plat = document.querySelector("#note60a");
  var platform = document.querySelector("#platform60a_platform60a1");
  var b_budget = parseInt(document.getElementById("fire_video_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 800000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}



function fire1(value) {
  var fire_video = Math.round((value / 300) * 1000);
  document.getElementById("firevideo1").value = fire_video;
  var plat = document.querySelector("#note60a");
  var platform = document.querySelector("#platform60a_platform60a1");
  var b_budget = parseInt(document.getElementById("fire_banner_budget1").value);
  var budget = b_budget + parseInt(value);
  console.log(budget);

  if (budget < 800000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget;
    calculateSum();
  }
}


// ===============================================================================================
/**  budget calculation on chnage of impressions */

function dis_imp(value) {

  var dis_budget = Math.round(value * 52 / 1000);
  document.getElementById("disBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#dis_banner_budget1");
  var v_budget = document.querySelector("#dis_video_budget1");
  var plat = document.querySelector("#note1a");
  var platform = document.querySelector("#platform1a_platform1a1");
  b_budget.value = dis_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function dis_imp1(value) {

  var dis_budget = Math.round(value * 332 / 1000);
  document.getElementById("disvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#dis_banner_budget1");
  var v_budget = document.querySelector("#dis_video_budget1");
  var plat = document.querySelector("#note1a");
  var platform = document.querySelector("#platform1a_platform1a1");
  v_budget.value = dis_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function ola_imp(value) {

  var ola_budget = Math.round(value * 332 / 1000);
  document.getElementById("olaBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#ola_banner_budget1");
  var v_budget = document.querySelector("#ola_video_budget1");
  var plat = document.querySelector("#note2a");
  var platform = document.querySelector("#platform2a_platform2a1");
  b_budget.value = ola_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function ola_imp1(value) {

  var ola_budget = Math.round(value * 150 / 1000);
  document.getElementById("olavideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#ola_banner_budget1");
  var v_budget = document.querySelector("#ola_video_budget1");
  var plat = document.querySelector("#note2a");
  var platform = document.querySelector("#platform2a_platform2a1");
  v_budget.value = ola_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}





function pay_imp(value) {

  var pay_budget = Math.round(value * 250 / 1000);
  document.getElementById("payBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#paytm_banner_budget1");
  var v_budget = document.querySelector("#paytm_video_budget1");
  var plat = document.querySelector("#note3a");
  var platform = document.querySelector("#platform3a_platform3a1");
  b_budget.value = pay_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 400000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function pay_imp1(value) {

  var pay_budget = Math.round(value * 150 / 1000);
  document.getElementById("payvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#paytm_banner_budget1");
  var v_budget = document.querySelector("#paytm_video_budget1");
  var plat = document.querySelector("#note3a");
  var platform = document.querySelector("#platform3a_platform3a1");
  v_budget.value = pay_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 400000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}




function ph_imp(value) {

  var ph_budget = Math.round(value * 201 / 1000);
  document.getElementById("phBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#ph_banner_budget1");
  var v_budget = document.querySelector("#ph_video_budget1");
  var plat = document.querySelector("#note4a");
  var platform = document.querySelector("#platform4a_platform4a1");
  b_budget.value = ph_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function ph_imp1(value) {

  var ph_budget = Math.round(value * 201 / 1000);
  document.getElementById("phvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#ph_banner_budget1");
  var v_budget = document.querySelector("#ph_video_budget1");
  var plat = document.querySelector("#note4a");
  var platform = document.querySelector("#platform4a_platform4a1");
  v_budget.value = ph_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}





function mmt_imp(value) {

  var mmt_budget = Math.round(value * 228 / 1000);
  document.getElementById("mmtBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#mmt_banner_budget1");
  var v_budget = document.querySelector("#mmt_video_budget1");
  var plat = document.querySelector("#note5a");
  var platform = document.querySelector("#platform5a_platform5a1");
  b_budget.value = mmt_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function mmt_imp1(value) {

  var mmt_budget = Math.round(value * 150 / 1000);
  document.getElementById("mmtvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#mmt_banner_budget1");
  var v_budget = document.querySelector("#mmt_video_budget1");
  var plat = document.querySelector("#note5a");
  var platform = document.querySelector("#platform5a_platform5a1");
  v_budget.value = mmt_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}






function hb_imp(value) {

  var hb_budget = Math.round(value * 150 / 1000);
  document.getElementById("hbBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#hb_banner_budget1");
  var v_budget = document.querySelector("#hb_video_budget1");
  var plat = document.querySelector("#note7a");
  var platform = document.querySelector("#platform7a_platform7a1");
  b_budget.value = hb_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function hb_imp1(value) {

  var hb_budget = Math.round(value * 150 / 1000);
  document.getElementById("hbvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#hb_banner_budget1");
  var v_budget = document.querySelector("#hb_video_budget1");
  var plat = document.querySelector("#note7a");
  var platform = document.querySelector("#platform7a_platform7a1");
  v_budget.value = hb_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}







function hm_imp(value) {

  var hm_budget = Math.round(value * 160 / 1000);
  document.getElementById("hmBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#hm_banner_budget1");
  var v_budget = document.querySelector("#hm_video_budget1");
   var a_budget = document.querySelector("#hm_audio_budget1");
  var plat = document.querySelector("#note8a");
  var platform = document.querySelector("#platform8a_platform8a1");
  b_budget.value = hm_budget;
  var budget_sum = parseFloat(b_budget.value) + parseFloat(v_budget.value) + parseFloat(a_budget.value);
  console.log(budget_sum)
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = parseInt(budget_sum);
    calculateSum();
  }
}


function hm_imp1(value) {

  var hm_budget = Math.round(value * 260 / 1000);
  document.getElementById("hmvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#hm_banner_budget1");
  var v_budget = document.querySelector("#hm_video_budget1");
   var a_budget = document.querySelector("#hm_audio_budget1");
  var plat = document.querySelector("#note8a");
  var platform = document.querySelector("#platform8a_platform8a1");
  v_budget.value = hm_budget;
  var budget_sum = parseFloat(b_budget.value) + parseFloat(v_budget.value)+ parseFloat(a_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = parseInt(budget_sum);
    calculateSum();
  }
}


function hm_imp2(value) {

  var hm_budget = Math.round(value * 150 / 1000);
  document.getElementById("hmaudio1").setAttribute("value", value);
  var b_budget = document.querySelector("#hm_banner_budget1");
  var v_budget = document.querySelector("#hm_video_budget1");
  var a_budget = document.querySelector("#hm_audio_budget1");
  var plat = document.querySelector("#note8a");
  var platform = document.querySelector("#platform8a_platform8a1");
  a_budget.value = hm_budget;
  var budget_sum = parseFloat(b_budget.value) + parseFloat(v_budget.value) + parseFloat(a_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = parseInt(budget_sum);
    calculateSum();
  }
}




function pmall_imp(value) {

  var pmall_budget = Math.round(value * 250 / 1000);
  document.getElementById("pmallBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#pmall_banner_budget1");
  var v_budget = document.querySelector("#pmall_video_budget1");
  var plat = document.querySelector("#note9a");
  var platform = document.querySelector("#platform9a_platform9a1");
  b_budget.value = pmall_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 400000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function pmall_imp1(value) {

  var pmall_budget = Math.round(value * 150 / 1000);
  document.getElementById("pmallvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#pmall_banner_budget1");
  var v_budget = document.querySelector("#pmall_video_budget1");
  var plat = document.querySelector("#note9a");
  var platform = document.querySelector("#platform9a_platform9a1");
  v_budget.value = pmall_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 400000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}




function red_imp(value) {

  var red_budget = Math.round(value * 140 / 1000);
  document.getElementById("redBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#red_banner_budget1");
  var v_budget = document.querySelector("#red_video_budget1");
  var plat = document.querySelector("#note10a");
  var platform = document.querySelector("#platform10a_platform10a1");
  b_budget.value = red_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function red_imp1(value) {

  var red_budget = Math.round(value * 150 / 1000);
  document.getElementById("redvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#red_banner_budget1");
  var v_budget = document.querySelector("#red_video_budget1");
  var plat = document.querySelector("#note10a");
  var platform = document.querySelector("#platform10a_platform10a1");
  v_budget.value = red_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function swiggy_imp(value) {

  var swiggy_budget = Math.round(value * 108 / 1000);
  document.getElementById("swiggyBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#swiggy_banner_budget1");
  var v_budget = document.querySelector("#swiggy_video_budget1");
  var plat = document.querySelector("#note11a");
  var platform = document.querySelector("#platform11a_platform11a1");
  b_budget.value = swiggy_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 100000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function swiggy_imp1(value) {

  var swiggy_budget = Math.round(value * 231 / 1000);
  document.getElementById("swiggyvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#swiggy_banner_budget1");
  var v_budget = document.querySelector("#swiggy_video_budget1");
  var plat = document.querySelector("#note11a");
  var platform = document.querySelector("#platform11a_platform11a1");
  v_budget.value = swiggy_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 100000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}




function bal_imp(value) {

  var bal_budget = Math.round(value * 5 / 1000);
  document.getElementById("balBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#bal_banner_budget1");
  var v_budget = document.querySelector("#bal_video_budget1");
  var plat = document.querySelector("#note14a");
  var platform = document.querySelector("#platform14a_platform14a1");
  b_budget.value = bal_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function bal_imp1(value) {

  var bal_budget = Math.round(value * 50 / 1000);
  document.getElementById("balvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#bal_banner_budget1");
  var v_budget = document.querySelector("#bal_video_budget1");
  var plat = document.querySelector("#note14a");
  var platform = document.querySelector("#platform14a_platform14a1");
  v_budget.value = bal_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}




function wynk_imp(value) {

  var wynk_budget = Math.round(value * 150 / 1000);
  document.getElementById("wynkBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#wynk_banner_budget1");
  var v_budget = document.querySelector("#wynk_video_budget1");
  var a_budget = document.querySelector("#wynk_audio_budget1");
  var plat = document.querySelector("#note16a");
  var platform = document.querySelector("#platform16a_platform16a1");
  b_budget.value = wynk_budget;
  var budget_sum = parseFloat(b_budget.value) + parseFloat(v_budget.value) + parseFloat(a_budget.value);
  console.log(budget_sum)

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
  platform.value = parseInt(budget_sum);
    calculateSum();
  }
}


function wynk_imp1(value) {

  var wynk_budget = Math.round(value * 150 / 1000);
  document.getElementById("wynkvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#wynk_banner_budget1");
  var v_budget = document.querySelector("#wynk_video_budget1");
  var a_budget = document.querySelector("#wynk_audio_budget1");
  var plat = document.querySelector("#note16a");
  var platform = document.querySelector("#platform16a_platform16a1");
  v_budget.value = wynk_budget;
  var budget_sum = parseFloat(b_budget.value) + parseFloat(v_budget.value) + parseFloat(a_budget.value);
  console.log(budget_sum)

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = parseInt(budget_sum);
    calculateSum();
  }
}

function wynk_imp2(value) {

  var wynk_budget = Math.round(value * 150 / 1000);
  document.getElementById("wynkaudio1").setAttribute("value", value);
  var b_budget = document.querySelector("#wynk_banner_budget1");
  var v_budget = document.querySelector("#wynk_video_budget1");
  var a_budget = document.querySelector("#wynk_audio_budget1");
  var plat = document.querySelector("#note16a");
  var platform = document.querySelector("#platform16a_platform16a1");
  a_budget.value = wynk_budget;
  var budget_sum = parseFloat(b_budget.value) + parseFloat(v_budget.value) + parseFloat(a_budget.value);
  
  console.log(budget_sum)
  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = parseInt(budget_sum);
    calculateSum();
  }
}


function xstream_imp(value) {

  var xstream_budget = Math.round(value * 216 / 1000);
  document.getElementById("xstreamBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#xstream_banner_budget1");
  var v_budget = document.querySelector("#xstream_video_budget1");
  var plat = document.querySelector("#note15a");
  var platform = document.querySelector("#platform15a_platform15a1");
  b_budget.value = xstream_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function xstream_imp1(value) {

  var xstream_budget = Math.round(value * 260 / 1000);
  document.getElementById("xstreamvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#xstream_banner_budget1");
  var v_budget = document.querySelector("#xstream_video_budget1");
  var plat = document.querySelector("#note15a");
  var platform = document.querySelector("#platform15a_platform15a1");
  v_budget.value = xstream_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}



function thanks_imp(value) {

  var thanks_budget = Math.round(value * 150 / 1000);
  document.getElementById("thanksBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#thanks_banner_budget1");
  var v_budget = document.querySelector("#thanks_video_budget1");
  var plat = document.querySelector("#note17a");
  var platform = document.querySelector("#platform17a_platform17a1");
  b_budget.value = thanks_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function thanks_imp1(value) {

  var thanks_budget = Math.round(value * 150 / 1000);
  document.getElementById("thanksvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#thanks_banner_budget1");
  var v_budget = document.querySelector("#thanks_video_budget1");
  var plat = document.querySelector("#note17a");
  var platform = document.querySelector("#platform17a_platform17a1");
  v_budget.value = thanks_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}



function hg_imp(value) {

  var hg_budget = Math.round(value * 150 / 1000);
  document.getElementById("hgBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#hg_banner_budget1");
  var v_budget = document.querySelector("#hg_video_budget1");
  var plat = document.querySelector("#note18a");
  var platform = document.querySelector("#platform18a_platform18a1");
  b_budget.value = hg_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function hg_imp1(value) {

  var hg_budget = Math.round(value * 150 / 1000);
  document.getElementById("hgvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#hg_banner_budget1");
  var v_budget = document.querySelector("#hg_video_budget1");
  var plat = document.querySelector("#note18a");
  var platform = document.querySelector("#platform18a_platform18a1");
  v_budget.value = hg_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}




function mc_imp(value) {

  var mc_budget = Math.round(value * 231 / 1000);
  document.getElementById("mcBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#mc_banner_budget1");
  var v_budget = document.querySelector("#mc_video_budget1");
  var plat = document.querySelector("#note19a");
  var platform = document.querySelector("#platform19a_platform19a1");
  b_budget.value = mc_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function mc_imp1(value) {

  var mc_budget = Math.round(value * 150 / 1000);
  document.getElementById("mcvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#mc_banner_budget1");
  var v_budget = document.querySelector("#mc_video_budget1");
  var plat = document.querySelector("#note19a");
  var platform = document.querySelector("#platform19a_platform19a1");
  v_budget.value = mc_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function ssg_imp(value) {

  var ssg_budget = Math.round(value * 150 / 1000);
  document.getElementById("ssgBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#ssg_banner_budget1");
  var v_budget = document.querySelector("#ssg_video_budget1");
  var plat = document.querySelector("#note20a");
  var platform = document.querySelector("#platform20a_platform20a1");
  b_budget.value = ssg_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function ssg_imp1(value) {

  var ssg_budget = Math.round(value * 150 / 1000);
  document.getElementById("ssgvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#ssg_banner_budget1");
  var v_budget = document.querySelector("#ssg_video_budget1");
  var plat = document.querySelector("#note20a");
  var platform = document.querySelector("#platform20a_platform20a1");
  v_budget.value = ssg_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}



function nxt_imp(value) {

  var nxt_budget = Math.round(value * 150 / 1000);
  document.getElementById("nxtBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#nxt_banner_budget1");
  var v_budget = document.querySelector("#nxt_video_budget1");
  var plat = document.querySelector("#note21a");
  var platform = document.querySelector("#platform21a_platform21a1");
  b_budget.value = nxt_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function nxt_imp1(value) {

  var nxt_budget = Math.round(value * 442 / 1000);
  document.getElementById("nxtvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#nxt_banner_budget1");
  var v_budget = document.querySelector("#nxt_video_budget1");
  var plat = document.querySelector("#note21a");
  var platform = document.querySelector("#platform21a_platform21a1");
  v_budget.value = nxt_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}




function tie_imp(value) {

  var tie_budget = Math.round(value * 140 / 1000);
  document.getElementById("tieBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#ie_banner_budget1");
  var v_budget = document.querySelector("#ie_video_budget1");
  var plat = document.querySelector("#note22a");
  var platform = document.querySelector("#platform22a_platform22a1");
  b_budget.value = tie_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function tie_imp1(value) {

  var tie_budget = Math.round(value * 150 / 1000);
  document.getElementById("tievideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#ie_banner_budget1");
  var v_budget = document.querySelector("#ie_video_budget1");
  var plat = document.querySelector("#note22a");
  var platform = document.querySelector("#platform22a_platform22a1");
  v_budget.value = tie_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function zee_imp(value) {

  var zee_budget = Math.round(value * 112 / 1000);
  document.getElementById("zeeBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#zee_banner_budget1");
  var v_budget = document.querySelector("#zee_video_budget1");
  var plat = document.querySelector("#note23a");
  var platform = document.querySelector("#platform23a_platform23a1");
  b_budget.value = zee_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function zee_imp1(value) {

  var zee_budget = Math.round(value * 180 / 1000);
  document.getElementById("zeevideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#zee_banner_budget1");
  var v_budget = document.querySelector("#zee_video_budget1");
  var plat = document.querySelector("#note23a");
  var platform = document.querySelector("#platform23a_platform23a1");
  v_budget.value = zee_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function voot_imp(value) {

  var voot_budget = Math.round(value * 94 / 1000);
  document.getElementById("vootBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#voot_banner_budget1");
  var v_budget = document.querySelector("#voot_video_budget1");
  var plat = document.querySelector("#note24a");
  var platform = document.querySelector("#platform24a_platform24a1");
  b_budget.value = voot_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function voot_imp1(value) {

  var voot_budget = Math.round(value * 150 / 1000);
  document.getElementById("vootvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#voot_banner_budget1");
  var v_budget = document.querySelector("#voot_video_budget1");
  var plat = document.querySelector("#note24a");
  var platform = document.querySelector("#platform24a_platform24a1");
  v_budget.value = voot_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}



function myg_imp(value) {

  var myg_budget = Math.round(value * 16 / 1000);
  document.getElementById("mygBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#myg_banner_budget1");
  var v_budget = document.querySelector("#myg_video_budget1");
  var plat = document.querySelector("#note25a");
  var platform = document.querySelector("#platform25a_platform25a1");
  b_budget.value = myg_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function myg_imp1(value) {

  var myg_budget = Math.round(value * 150 / 1000);
  document.getElementById("mygvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#myg_banner_budget1");
  var v_budget = document.querySelector("#myg_video_budget1");
  var plat = document.querySelector("#note25a");
  var platform = document.querySelector("#platform25a_platform25a1");
  v_budget.value = myg_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function tcall_imp(value) {

  var tcall_budget = Math.round(value * 65 / 1000);
  document.getElementById("tcallBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#tcall_banner_budget1");
  var v_budget = document.querySelector("#tcall_video_budget1");
  var plat = document.querySelector("#note26a");
  var platform = document.querySelector("#platform26a_platform26a1");
  b_budget.value = tcall_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 800000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function tcall_imp1(value) {

  var tcall_budget = Math.round(value * 150 / 1000);
  document.getElementById("tcallvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#tcall_banner_budget1");
  var v_budget = document.querySelector("#tcall_video_budget1");
  var plat = document.querySelector("#note26a");
  var platform = document.querySelector("#platform26a_platform26a1");
  v_budget.value = tcall_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 800000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}




function pic_imp(value) {

  var pic_budget = Math.round(value * 6 / 1000);
  document.getElementById("picBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#pic_banner_budget1");
  var v_budget = document.querySelector("#pic_video_budget1");
  var plat = document.querySelector("#note27a");
  var platform = document.querySelector("#platform27a_platform27a1");
  b_budget.value = pic_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function pic_imp1(value) {

  var pic_budget = Math.round(value * 150 / 1000);
  document.getElementById("picvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#pic_banner_budget1");
  var v_budget = document.querySelector("#pic_video_budget1");
  var plat = document.querySelector("#note27a");
  var platform = document.querySelector("#platform27a_platform27a1");
  v_budget.value = pic_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}



function inshrt_imp(value) {

  var inshrt_budget = Math.round(value * 360 / 1000);
  document.getElementById("inshrtBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#inshrt_banner_budget1");
  var v_budget = document.querySelector("#inshrt_video_budget1");
  var plat = document.querySelector("#note28a");
  var platform = document.querySelector("#platform28a_platform28a1");
  b_budget.value = inshrt_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 250000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function inshrt_imp1(value) {

  var inshrt_budget = Math.round(value * 480 / 1000);
  document.getElementById("inshrtvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#inshrt_banner_budget1");
  var v_budget = document.querySelector("#inshrt_video_budget1");
  var plat = document.querySelector("#note28a");
  var platform = document.querySelector("#platform28a_platform28a1");
  v_budget.value = inshrt_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 250000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}




function amz_imp(value) {

  var amz_budget = Math.round(value * 300 / 1000);
  document.getElementById("amzBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#amz_banner_budget1");
  var v_budget = document.querySelector("#amz_video_budget1");
  var plat = document.querySelector("#note29a");
  var platform = document.querySelector("#platform29a_platform29a1");
  b_budget.value = amz_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 800000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function amz_imp1(value) {

  var amz_budget = Math.round(value * 180 / 1000);
  document.getElementById("amzvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#amz_banner_budget1");
  var v_budget = document.querySelector("#amz_video_budget1");
  var plat = document.querySelector("#note29a");
  var platform = document.querySelector("#platform29a_platform29a1");
  v_budget.value = amz_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 800000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}



function bms_imp(value) {

  var bms_budget = Math.round(value * 332 / 1000);
  document.getElementById("bmsBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#bms_banner_budget1");
  var v_budget = document.querySelector("#bms_video_budget1");
  var plat = document.querySelector("#note30a");
  var platform = document.querySelector("#platform30a_platform30a1");
  b_budget.value = bms_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 400000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function bms_imp1(value) {

  var bms_budget = Math.round(value * 442 / 1000);
  document.getElementById("bmsvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#bms_banner_budget1");
  var v_budget = document.querySelector("#bms_video_budget1");
  var plat = document.querySelector("#note30a");
  var platform = document.querySelector("#platform30a_platform30a1");
  v_budget.value = bms_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 400000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}




function nbh_imp(value) {

  var nbh_budget = Math.round(value * 150 / 1000);
  document.getElementById("nbhBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#nbh_banner_budget1");
  var v_budget = document.querySelector("#nbh_video_budget1");
  var plat = document.querySelector("#note32a");
  var platform = document.querySelector("#platform32a_platform32a1");
  b_budget.value = nbh_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function nbh_imp1(value) {

  var nbh_budget = Math.round(value * 150 / 1000);
  document.getElementById("nbhvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#nbh_banner_budget1");
  var v_budget = document.querySelector("#nbh_video_budget1");
  var plat = document.querySelector("#note32a");
  var platform = document.querySelector("#platform32a_platform32a1");
  v_budget.value = nbh_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function peasy_imp(value) {

  var peasy_budget = Math.round(value * 150 / 1000);
  document.getElementById("peasyBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#peasy_banner_budget1");
  var v_budget = document.querySelector("#peasy_video_budget1");
  var plat = document.querySelector("#note33a");
  var platform = document.querySelector("#platform33a_platform33a1");
  b_budget.value = peasy_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function peasy_imp1(value) {

  var peasy_budget = Math.round(value * 150 / 1000);
  document.getElementById("peasyvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#peasy_banner_budget1");
  var v_budget = document.querySelector("#peasy_video_budget1");
  var plat = document.querySelector("#note33a");
  var platform = document.querySelector("#platform33a_platform33a1");
  v_budget.value = peasy_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}



function mobi_imp(value) {

  var mobi_budget = Math.round(value * 156 / 1000);
  document.getElementById("mobiBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#mobi_banner_budget1");
  var v_budget = document.querySelector("#mobi_video_budget1");
  var plat = document.querySelector("#note34a");
  var platform = document.querySelector("#platform34a_platform34a1");
  b_budget.value = mobi_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function mobi_imp1(value) {

  var mobi_budget = Math.round(value * 150 / 1000);
  document.getElementById("mobivideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#mobi_banner_budget1");
  var v_budget = document.querySelector("#mobi_video_budget1");
  var plat = document.querySelector("#note34a");
  var platform = document.querySelector("#platform34a_platform34a1");
  v_budget.value = mobi_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}



function glance_imp(value) {

  var glance_budget = Math.round(value * 144 / 1000);
  document.getElementById("glanceBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#glance_banner_budget1");
  var v_budget = document.querySelector("#glance_video_budget1");
  var plat = document.querySelector("#note35a");
  var platform = document.querySelector("#platform35a_platform35a1");
  b_budget.value = glance_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function glance_imp1(value) {

  var glance_budget = Math.round(value * 180 / 1000);
  document.getElementById("glancevideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#glance_banner_budget1");
  var v_budget = document.querySelector("#glance_video_budget1");
  var plat = document.querySelector("#note35a");
  var platform = document.querySelector("#platform35a_platform35a1");
  v_budget.value = glance_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}




function g_imp(value) {

  var g_budget = Math.round(value * 5 / 1000);
  document.getElementById("gBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#g_banner_budget1");
  var v_budget = document.querySelector("#g_video_budget1");
  var plat = document.querySelector("#note36a");
  var platform = document.querySelector("#platform36a_platform36a1");
  b_budget.value = g_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function g_imp1(value) {

  var g_budget = Math.round(value * 150 / 1000);
  document.getElementById("gvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#g_banner_budget1");
  var v_budget = document.querySelector("#g_video_budget1");
  var plat = document.querySelector("#note36a");
  var platform = document.querySelector("#platform36a_platform36a1");
  v_budget.value = g_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function saavn_imp(value) {

  var saavn_budget = Math.round(value * 150 / 1000);
  document.getElementById("saavnBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#saavn_banner_budget1");
  var v_budget = document.querySelector("#saavn_video_budget1");
   var a_budget = document.querySelector("#saavn_audio_budget1");
  var plat = document.querySelector("#note37a");
  var platform = document.querySelector("#platform37a_platform37a1");
  b_budget.value = saavn_budget;
   var budget_sum = parseFloat(b_budget.value) + parseFloat(v_budget.value) + parseFloat(a_budget.value);
  

  if (budget_sum < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
     platform.value = parseInt(budget_sum);
    calculateSum();
  }
}


function saavn_imp1(value) {

  var saavn_budget = Math.round(value * 150 / 1000);
  document.getElementById("saavnvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#saavn_banner_budget1");
  var v_budget = document.querySelector("#saavn_video_budget1");
   var a_budget = document.querySelector("#saavn_audio_budget1");
  var plat = document.querySelector("#note37a");
  var platform = document.querySelector("#platform37a_platform37a1");
  v_budget.value = saavn_budget;
  var budget_sum = parseFloat(b_budget.value) + parseFloat(v_budget.value) + parseFloat(a_budget.value);
  

  if (budget_sum < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
     platform.value = parseInt(budget_sum);
    calculateSum();
  }
}



function saavn_imp2(value) {

  var saavn_budget = Math.round(value * 150 / 1000);
  document.getElementById("saavnaudio1").setAttribute("value", value);
  var b_budget = document.querySelector("#saavn_banner_budget1");
  var v_budget = document.querySelector("#saavn_video_budget1");
  var a_budget = document.querySelector("#saavn_audio_budget1");
  var plat = document.querySelector("#note37a");
  var platform = document.querySelector("#platform37a_platform37a1");
  a_budget.value = saavn_budget;
  var budget_sum = parseFloat(b_budget.value) + parseFloat(v_budget.value) + parseFloat(a_budget.value);
  

  if (budget_sum < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = parseInt(budget_sum);
    calculateSum();
  }
}


function daily_imp(value) {

  var daily_budget = Math.round(value * 180 / 1000);
  document.getElementById("dailyBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#daily_banner_budget1");
  var v_budget = document.querySelector("#daily_video_budget1");
  var plat = document.querySelector("#note38a");
  var platform = document.querySelector("#platform38a_platform38a1");
  b_budget.value = daily_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 150000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function daily_imp1(value) {

  var daily_budget = Math.round(value * 240 / 1000);
  document.getElementById("dailyvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#daily_banner_budget1");
  var v_budget = document.querySelector("#daily_video_budget1");
  var plat = document.querySelector("#note38a");
  var platform = document.querySelector("#platform38a_platform38a1");
  v_budget.value = daily_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 150000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function jio_imp(value) {

  var jio_budget = Math.round(value * 150 / 1000);
  document.getElementById("jioBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#jio_banner_budget1");
  var v_budget = document.querySelector("#jio_video_budget1");
  var plat = document.querySelector("#note39a");
  var platform = document.querySelector("#platform39a_platform39a1");
  b_budget.value = jio_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function jio_imp1(value) {

  var jio_budget = Math.round(value * 150 / 1000);
  document.getElementById("jiovideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#jio_banner_budget1");
  var v_budget = document.querySelector("#jio_video_budget1");
  var plat = document.querySelector("#note39a");
  var platform = document.querySelector("#platform39a_platform39a1");
  v_budget.value = jio_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function mat_imp(value) {

  var mat_budget = Math.round(value * 150 / 1000);
  document.getElementById("matBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#mat_banner_budget1");
  var v_budget = document.querySelector("#mat_video_budget1");
  var plat = document.querySelector("#note40a");
  var platform = document.querySelector("#platform40a_platform40a1");
  b_budget.value = mat_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 400000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function mat_imp1(value) {

  var mat_budget = Math.round(value * 150 / 1000);
  document.getElementById("matvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#mat_banner_budget1");
  var v_budget = document.querySelector("#mat_video_budget1");
  var plat = document.querySelector("#note40a");
  var platform = document.querySelector("#platform40a_platform40a1");
  v_budget.value = mat_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 400000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}



function car_imp(value) {

  var car_budget = Math.round(value * 240 / 1000);
  document.getElementById("carBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#car_banner_budget1");
  var v_budget = document.querySelector("#car_video_budget1");
  var plat = document.querySelector("#note41a");
  var platform = document.querySelector("#platform41a_platform41a1");
  b_budget.value = car_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function car_imp1(value) {

  var car_budget = Math.round(value * 150 / 1000);
  document.getElementById("carvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#car_banner_budget1");
  var v_budget = document.querySelector("#car_video_budget1");
  var plat = document.querySelector("#note41a");
  var platform = document.querySelector("#platform41a_platform41a1");
  v_budget.value = car_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}



function pfm_imp(value) {

  var pfm_budget = Math.round(value * 120 / 1000);
  document.getElementById("pfmBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#pfm_banner_budget1");
  var v_budget = document.querySelector("#pfm_video_budget1");
  var a_budget = document.querySelector("#pfm_audio_budget1");
  var plat = document.querySelector("#note43a");
  var platform = document.querySelector("#platform43a_platform43a1");
  b_budget.value = pfm_budget;
  var budget_sum = parseFloat(b_budget.value) + parseFloat(v_budget.value) + parseFloat(a_budget.value);
  
  console.log(budget_sum)
  if (budget_sum < 100000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = parseInt(budget_sum);
    calculateSum();
  }
}


function pfm_imp1(value) {

  var pfm_budget = Math.round(value * 264 / 1000);
  document.getElementById("pfmvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#pfm_banner_budget1");
  var v_budget = document.querySelector("#pfm_video_budget1");
  var a_budget = document.querySelector("#pfm_audio_budget1");
  var plat = document.querySelector("#note43a");
  var platform = document.querySelector("#platform43a_platform43a1");
  v_budget.value = pfm_budget;
  var budget_sum = parseFloat(b_budget.value) + parseFloat(v_budget.value) + parseFloat(a_budget.value);
  console.log(budget_sum)

  if (budget_sum < 100000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = parseInt(budget_sum);
    calculateSum();
  }
}



function pfm_imp2(value) {

  var pfm_budget = Math.round(value * 150 / 1000);
  document.getElementById("pfmaudio1").setAttribute("value", value);
  var b_budget = document.querySelector("#pfm_banner_budget1");
  var v_budget = document.querySelector("#pfm_video_budget1");
  var a_budget = document.querySelector("#pfm_audio_budget1");
  var plat = document.querySelector("#note43a");
  var platform = document.querySelector("#platform43a_platform43a1");
  a_budget.value = pfm_budget;
  var budget_sum = parseFloat(b_budget.value) + parseFloat(v_budget.value) + parseFloat(a_budget.value);
  
  console.log(budget_sum)
  if (budget_sum < 100000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = parseInt(budget_sum);
    calculateSum();
  }
}


function gaana_imp(value) {

  var gaana_budget = Math.round(value * 48 / 1000);
  document.getElementById("gaanaBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#gaana_banner_budget1");
  var v_budget = document.querySelector("#gaana_video_budget1");
  var a_budget = document.querySelector("#gaana_audio_budget1");
  var plat = document.querySelector("#note44a");
  var platform = document.querySelector("#platform44a_platform44a1");
  b_budget.value = gaana_budget;
  var budget_sum = parseFloat(b_budget.value) + parseFloat(v_budget.value) + parseFloat(a_budget.value);

console.log(budget_sum)
  if (budget_sum < 800000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = parseInt(budget_sum);
    calculateSum();
  }
}


function gaana_imp1(value) {

  var gaana_budget = Math.round(value * 360 / 1000);
  document.getElementById("gaanavideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#gaana_banner_budget1");
  var v_budget = document.querySelector("#gaana_video_budget1");
  var a_budget = document.querySelector("#gaana_audio_budget1");
  var plat = document.querySelector("#note44a");
  var platform = document.querySelector("#platform44a_platform44a1");
  v_budget.value = gaana_budget;
  var budget_sum = parseFloat(b_budget.value) + parseFloat(v_budget.value)+ parseFloat(a_budget.value);
  
  console.log(budget_sum)
  if (budget_sum < 800000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = parseInt(budget_sum);
    calculateSum();
  }
}

function gaana_imp2(value) {

  var gaana_budget = Math.round(value * 150 / 1000);
  document.getElementById("gaanaaudio1").setAttribute("value", value);
  var b_budget = document.querySelector("#gaana_banner_budget1");
  var v_budget = document.querySelector("#gaana_video_budget1");
  var a_budget = document.querySelector("#gaana_audio_budget1");
  var plat = document.querySelector("#note44a");
  var platform = document.querySelector("#platform44a_platform44a1");
  a_budget.value = gaana_budget;
  var budget_sum = parseFloat(b_budget.value) + parseFloat(v_budget.value) + parseFloat(a_budget.value);
  
  console.log(budget_sum)
  if (budget_sum < 800000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = parseInt(budget_sum);
    calculateSum();
  }
}


function cred_imp(value) {

  var cred_budget = Math.round(value * 240 / 1000);
  document.getElementById("credBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#cred_banner_budget1");
  var v_budget = document.querySelector("#cred_video_budget1");
  var plat = document.querySelector("#note45a");
  var platform = document.querySelector("#platform45a_platform45a1");
  b_budget.value = cred_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 300000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function cred_imp1(value) {

  var cred_budget = Math.round(value * 150 / 1000);
  document.getElementById("credvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#cred_banner_budget1");
  var v_budget = document.querySelector("#cred_video_budget1");
  var plat = document.querySelector("#note45a");
  var platform = document.querySelector("#platform45a_platform45a1");
  v_budget.value = cred_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 300000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}





function tplay_imp(value) {

  var tplay_budget = Math.round(value * 96 / 1000);
  document.getElementById("tplayBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#tplay_banner_budget1");
  var v_budget = document.querySelector("#tplay_video_budget1");
  var plat = document.querySelector("#note46a");
  var platform = document.querySelector("#platform46a_platform46a1");
  b_budget.value = tplay_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 400000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function tplay_imp1(value) {

  var tplay_budget = Math.round(value * 150 / 1000);
  document.getElementById("tplayvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#tplay_banner_budget1");
  var v_budget = document.querySelector("#tplay_video_budget1");
  var plat = document.querySelector("#note46a");
  var platform = document.querySelector("#platform46a_platform46a1");
  v_budget.value = tplay_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 400000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function snap_imp(value) {

  var snap_budget = Math.round(value * 50 / 1000);
  document.getElementById("snapBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#snap_banner_budget1");
  var v_budget = document.querySelector("#snap_video_budget1");
  var plat = document.querySelector("#note47a");
  var platform = document.querySelector("#platform47a_platform47a1");
  b_budget.value = snap_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function snap_imp1(value) {

  var snap_budget = Math.round(value * 200 / 1000);
  document.getElementById("snapvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#snap_banner_budget1");
  var v_budget = document.querySelector("#snap_video_budget1");
  var plat = document.querySelector("#note47a");
  var platform = document.querySelector("#platform47a_platform47a1");
  v_budget.value = snap_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}




function crex_imp(value) {

  var crex_budget = Math.round(value * 150 / 1000);
  document.getElementById("crexBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#crex_banner_budget1");
  var v_budget = document.querySelector("#crex_video_budget1");
  var plat = document.querySelector("#note48a");
  var platform = document.querySelector("#platform48a_platform48a1");
  b_budget.value = crex_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function crex_imp1(value) {

  var crex_budget = Math.round(value * 150 / 1000);
  document.getElementById("crexvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#crex_banner_budget1");
  var v_budget = document.querySelector("#crex_video_budget1");
  var plat = document.querySelector("#note48a");
  var platform = document.querySelector("#platform48a_platform48a1");
  v_budget.value = crex_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}



function ix_imp(value) {

  var ix_budget = Math.round(value * 150 / 1000);
  document.getElementById("ixBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#ix_banner_budget1");
  var v_budget = document.querySelector("#ix_video_budget1");
  var plat = document.querySelector("#note50a");
  var platform = document.querySelector("#platform50a_platform50a1");
  b_budget.value = ix_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 300000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function ix_imp1(value) {

  var ix_budget = Math.round(value * 150 / 1000);
  document.getElementById("ixvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#ix_banner_budget1");
  var v_budget = document.querySelector("#ix_video_budget1");
  var plat = document.querySelector("#note50a");
  var platform = document.querySelector("#platform50a_platform50a1");
  v_budget.value = ix_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 300000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}




function adda_imp(value) {

  var adda_budget = Math.round(value * 150 / 1000);
  document.getElementById("addaBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#adda_banner_budget1");
  var v_budget = document.querySelector("#adda_video_budget1");
  var plat = document.querySelector("#note51a");
  var platform = document.querySelector("#platform51a_platform51a1");
  b_budget.value = adda_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 300000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function adda_imp1(value) {

  var adda_budget = Math.round(value * 150 / 1000);
  document.getElementById("addavideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#adda_banner_budget1");
  var v_budget = document.querySelector("#adda_video_budget1");
  var plat = document.querySelector("#note51a");
  var platform = document.querySelector("#platform51a_platform51a1");
  v_budget.value = adda_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 300000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}




function vi_imp(value) {

  var vi_budget = Math.round(value * 150 / 1000);
  document.getElementById("viBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#vi_banner_budget1");
  var v_budget = document.querySelector("#vi_video_budget1");
  var plat = document.querySelector("#note52a");
  var platform = document.querySelector("#platform52a_platform52a1");
  b_budget.value = vi_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function vi_imp1(value) {

  var vi_budget = Math.round(value * 150 / 1000);
  document.getElementById("vivideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#vi_banner_budget1");
  var v_budget = document.querySelector("#vi_video_budget1");
  var plat = document.querySelector("#note52a");
  var platform = document.querySelector("#platform52a_platform52a1");
  v_budget.value = vi_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}




function spot_imp(value) {

  var spot_budget = Math.round(value * 150 / 1000);
  document.getElementById("spotBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#spot_banner_budget1");
  var v_budget = document.querySelector("#spot_video_budget1");
  var plat = document.querySelector("#note53a");
  var platform = document.querySelector("#platform53a_platform53a1");
  b_budget.value = spot_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 1300000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function spot_imp1(value) {

  var spot_budget = Math.round(value * 150 / 1000);
  document.getElementById("spotvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#spot_banner_budget1");
  var v_budget = document.querySelector("#spot_video_budget1");
  var plat = document.querySelector("#note53a");
  var platform = document.querySelector("#platform53a_platform53a1");
  v_budget.value = spot_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 1300000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}



function ching_imp(value) {

  var ching_budget = Math.round(value * 150 / 1000);
  document.getElementById("chingBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#ching_banner_budget1");
  var v_budget = document.querySelector("#ching_video_budget1");
  var plat = document.querySelector("#note55a");
  var platform = document.querySelector("#platform55a_platform55a1");
  b_budget.value = ching_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function ching_imp1(value) {

  var ching_budget = Math.round(value * 150 / 1000);
  document.getElementById("chingvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#ching_banner_budget1");
  var v_budget = document.querySelector("#ching_video_budget1");
  var plat = document.querySelector("#note55a");
  var platform = document.querySelector("#platform55a_platform55a1");
  v_budget.value = ching_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function sony_imp(value) {

  var sony_budget = Math.round(value * 150 / 1000);
  document.getElementById("sonyBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#sony_banner_budget1");
  var v_budget = document.querySelector("#sony_video_budget1");
  var plat = document.querySelector("#note56a");
  var platform = document.querySelector("#platform56a_platform56a1");
  b_budget.value = sony_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function sony_imp1(value) {

  var sony_budget = Math.round(value * 319 / 1000);
  document.getElementById("sonyvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#sony_banner_budget1");
  var v_budget = document.querySelector("#sony_video_budget1");
  var plat = document.querySelector("#note56a");
  var platform = document.querySelector("#platform56a_platform56a1");
  v_budget.value = sony_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 500000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}



function we_imp(value) {

  var we_budget = Math.round(value * 300 / 1000);
  document.getElementById("weBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#we_banner_budget1");
  var v_budget = document.querySelector("#we_video_budget1");
  var plat = document.querySelector("#note57a");
  var platform = document.querySelector("#platform57a_platform57a1");
  b_budget.value = we_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 800000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function we_imp1(value) {

  var we_budget = Math.round(value * 150 / 1000);
  document.getElementById("wevideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#we_banner_budget1");
  var v_budget = document.querySelector("#we_video_budget1");
  var plat = document.querySelector("#note57a");
  var platform = document.querySelector("#platform57a_platform57a1");
  v_budget.value = we_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 800000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function share_imp(value) {

  var share_budget = Math.round(value * 46 / 1000);
  document.getElementById("shareBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#share_banner_budget1");
  var v_budget = document.querySelector("#share_video_budget1");
  var plat = document.querySelector("#note58a");
  var platform = document.querySelector("#platform58a_platform58a1");
  b_budget.value = share_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function share_imp1(value) {

  var share_budget = Math.round(value * 46 / 1000);
  document.getElementById("sharevideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#share_banner_budget1");
  var v_budget = document.querySelector("#share_video_budget1");
  var plat = document.querySelector("#note58a");
  var platform = document.querySelector("#platform58a_platform58a1");
  v_budget.value = share_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 200000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}




function flip_imp(value) {

  var flip_budget = Math.round(value * 150 / 1000);
  document.getElementById("flipBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#flip_banner_budget1");
  var v_budget = document.querySelector("#flip_video_budget1");
  var plat = document.querySelector("#note59a");
  var platform = document.querySelector("#platform59a_platform59a1");
  b_budget.value = flip_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 800000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function flip_imp1(value) {

  var flip_budget = Math.round(value * 150 / 1000);
  document.getElementById("flipvideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#flip_banner_budget1");
  var v_budget = document.querySelector("#flip_video_budget1");
  var plat = document.querySelector("#note59a");
  var platform = document.querySelector("#platform59a_platform59a1");
  v_budget.value = flip_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 800000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}



function fire_imp(value) {

  var fire_budget = Math.round(value * 300 / 1000);
  document.getElementById("fireBudget1").setAttribute("value", value);
  var b_budget = document.querySelector("#fire_banner_budget1");
  var v_budget = document.querySelector("#fire_video_budget1");
  var plat = document.querySelector("#note60a");
  var platform = document.querySelector("#platform60a_platform60a1");
  b_budget.value = fire_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 800000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}


function fire_imp1(value) {

  var fire_budget = Math.round(value * 300 / 1000);
  document.getElementById("firevideo1").setAttribute("value", value);
  var b_budget = document.querySelector("#fire_banner_budget1");
  var v_budget = document.querySelector("#fire_video_budget1");
  var plat = document.querySelector("#note60a");
  var platform = document.querySelector("#platform60a_platform60a1");
  v_budget.value = fire_budget;
  var budget_sum = parseInt(b_budget.value) + parseInt(v_budget.value);
  

  if (budget_sum < 800000) {
    plat.classList.remove("hide-rib");
    platform.classList.add("txt-red");
    pay_config.classList.add("hide-rib");
  } else {
    plat.classList.add("hide-rib");
    platform.classList.remove("txt-red");
    pay_config.classList.remove("hide-rib");
    platform.value = budget_sum;
    calculateSum();
  }
}




// ===============================================================================================

/**    enable edit option  */
$(document).ready(function () {
  $(".disney-btn").click(function () {
    $(".dis-data1").prop("readonly", false).focus();
    $(".dis-data").prop("readonly", false).focus();
  });
  $(".ola-btn").click(function () {
    $(".ola-data1").prop("readonly", false).focus();
    $(".ola-data").prop("readonly", false).focus();
  });
  $(".paytm-btn").click(function () {
    $(".pay-data1").prop("readonly", false).focus();
    $(".pay-data").prop("readonly", false).focus();
  });
  $(".phonepe-btn").click(function () {
    $(".ph-data1").prop("readonly", false).focus();
    $(".ph-data").prop("readonly", false).focus();
  }); 
  $(".mmt-btn").click(function () {
    $(".mmt-data1").prop("readonly", false).focus();
    $(".mmt-data").prop("readonly", false).focus();
  });
  $(".ibibo-btn").click(function () {
    $(".ibibo-data1").prop("readonly", false).focus();
    $(".ibibo-data").prop("readonly", false).focus();
  });
  $(".hb-btn").click(function () {
    $(".hb-data1").prop("readonly", false).focus();
    $(".hb-data").prop("readonly", false).focus();
  });
  $(".hm-btn").click(function () {
    $(".hm-data2").prop("readonly", false).focus();
    $(".hm-data1").prop("readonly", false).focus();
    $(".hm-data").prop("readonly", false).focus();
  });
  $(".pmall-btn").click(function () {
    $(".pmall-data1").prop("readonly", false).focus();
    $(".pmall-data").prop("readonly", false).focus();
  });
  $(".rediff-btn").click(function () {
    $(".rediff-data1").prop("readonly", false).focus();
    $(".rediff-data").prop("readonly", false).focus();
  });
  $(".swiggy-btn").click(function () {
    $(".swiggy-data1").prop("readonly", false).focus();
    $(".swiggy-data").prop("readonly", false).focus();
  });
  $(".alt-btn").click(function () {
    $(".alt-data1").prop("readonly", false).focus();
    $(".alt-data").prop("readonly", false).focus();
  });
  $(".Wynk-btn").click(function () {
    $(".wynk-data2").prop("readonly", false).focus();
    $(".wynk-data1").prop("readonly", false).focus();
    $(".wynk-data").prop("readonly", false).focus();
  });
  $(".Xtream-btn").click(function () {
    $(".Xstream-data1").prop("readonly", false).focus();
    $(".Xstream-data").prop("readonly", false).focus();
  });
  $(".Thanks-btn").click(function () {
    $(".Thanks-data1").prop("readonly", false).focus();
    $(".Thanks-data").prop("readonly", false).focus();
  });
  $(".Games-btn").click(function () {
    $(".Games-data1").prop("readonly", false).focus();
    $(".Games-data").prop("readonly", false).focus();
  });
  $(".Money-btn").click(function () {
    $(".mc-budget1").prop("readonly", false).focus();
    $(".mc-budget").prop("readonly", false).focus();
  });
  $(".StepSetGo-btn").click(function () {
    $(".ssg-budget1").prop("readonly", false).focus();
    $(".ssg-budget").prop("readonly", false).focus();
  });
  $(".NXT-btn").click(function () {
    $(".nxt-budget1").prop("readonly", false).focus();
    $(".nxt-budget").prop("readonly", false).focus();
  });
  $(".Express-btn").click(function () {
    $(".ie-budget1").prop("readonly", false).focus();
    $(".ie-budget").prop("readonly", false).focus();
  });
  $(".Zee5-btn").click(function () {
    $(".zee-budget1").prop("readonly", false).focus();
    $(".zee-budget").prop("readonly", false).focus();
  });

  $(".Voot-btn").click(function () {
    $(".voot-budget1").prop("readonly", false).focus();
    $(".voot-budget").prop("readonly", false).focus();
  });
  $(".mygate-btn").click(function () {
    $(".myg-budget1").prop("readonly", false).focus();
    $(".myg-budget").prop("readonly", false).focus();
  });
  $(".truecaller-btn").click(function () {
    $(".tcall-budget1").prop("readonly", false).focus();
    $(".tcall-budget").prop("readonly", false).focus();
  });
  $(".picsart-btn").click(function () {
    $(".pic-budget1").prop("readonly", false).focus();
    $(".pic-budget").prop("readonly", false).focus();
  });
  $(".inshort-btn").click(function () {
    $(".inshrt-budget1").prop("readonly", false).focus();
    $(".inshrt-budget").prop("readonly", false).focus();
  });
  $(".amazon-btn").click(function () {
    $(".amz-budget1").prop("readonly", false).focus();
    $(".amz-budget").prop("readonly", false).focus();
  });
  $(".bms-btn").click(function () {
    $(".bms-budget1").prop("readonly", false).focus();
    $(".bms-budget").prop("readonly", false).focus();
  });
  $(".milkbasket-btn").click(function () {
    $(".milkbasket-data1").prop("readonly", false).focus();
    $(".milkbasket-data").prop("readonly", false).focus();
  });
  $(".nbh-btn").click(function () {
    $(".nbh-budget1").prop("readonly", false).focus();
    $(".nbh-budget").prop("readonly", false).focus();
  });
  $(".pharmeasy-btn").click(function () {
    $(".peasy-budget1").prop("readonly", false).focus();
    $(".peasy-budget").prop("readonly", false).focus();
  });
  $(".mobiwik-btn").click(function () {
    $(".mobi-budget1").prop("readonly", false).focus();
    $(".mobi-budget").prop("readonly", false).focus();
  });
  $(".glance-btn").click(function () {
    $(".glance-budget1").prop("readonly", false).focus();
    $(".glance-budget").prop("readonly", false).focus();
  });
  $(".gpay-btn").click(function () {
    $(".g-budget1").prop("readonly", false).focus();
    $(".g-budget").prop("readonly", false).focus();
  });
  $(".saavn-btn").click(function () {
    $(".saavn-budget2").prop("readonly", false).focus();
    $(".saavn-budget1").prop("readonly", false).focus();
    $(".saavn-budget").prop("readonly", false).focus();
  });
  $(".daily-btn").click(function () {
    $(".daily-budget1").prop("readonly", false).focus();
    $(".daily-budget").prop("readonly", false).focus();
  });
  $(".jio-btn").click(function () {
    $(".jio-budget1").prop("readonly", false).focus();
    $(".jio-budget").prop("readonly", false).focus();
  });
  $(".daily-btn").click(function () {
    $(".daily-budget1").prop("readonly", false).focus();
    $(".daily-budget").prop("readonly", false).focus();
  });
  $(".matrimony-btn").click(function () {
    $(".mat-budget1").prop("readonly", false).focus();
    $(".mat-budget").prop("readonly", false).focus();
  });
  $(".carwale-btn").click(function () {
    $(".car-budget1").prop("readonly", false).focus();
    $(".car-budget").prop("readonly", false).focus();
  });
  $(".uber-btn").click(function () {
    $(".uber-budget1").prop("readonly", false).focus();
    $(".uber-budget").prop("readonly", false).focus();
  });
  $(".Pocketfm-btn").click(function () {
    $(".pfm-budget2").prop("readonly", false).focus();
    $(".pfm-budget1").prop("readonly", false).focus();
    $(".pfm-budget").prop("readonly", false).focus();
  });
  $(".ganna-btn").click(function () {
    $(".gaana-budget2").prop("readonly", false).focus();
    $(".gaana-budget1").prop("readonly", false).focus();
    $(".gaana-budget").prop("readonly", false).focus();
  });
  $(".cred-btn").click(function () {
    $(".cred-budget1").prop("readonly", false).focus();
    $(".cred-budget").prop("readonly", false).focus();
  });
  $(".tataplay-btn").click(function () {
    $(".tplay-budget1").prop("readonly", false).focus();
    $(".tplay-budget").prop("readonly", false).focus();
  });
  $(".snapchat-btn").click(function () {
    $(".snap-budget1").prop("readonly", false).focus();
    $(".snap-budget").prop("readonly", false).focus();
  });
  $(".crex-btn").click(function () {
    $(".crex-budget1").prop("readonly", false).focus();
    $(".crex-budget").prop("readonly", false).focus();
  });
  $(".ixigo-btn").click(function () {
    $(".ix-budget1").prop("readonly", false).focus();
    $(".ix-budget").prop("readonly", false).focus();
  });
  $(".adda-btn").click(function () {
    $(".adda-budget1").prop("readonly", false).focus();
    $(".adda-budget").prop("readonly", false).focus();
  });
  $(".vi-btn").click(function () {
    $(".vi-budget1").prop("readonly", false).focus();
    $(".vi-budget").prop("readonly", false).focus();
  });
  $(".spotify-btn").click(function () {
    $(".spot-budget1").prop("readonly", false).focus();
    $(".spot-budget").prop("readonly", false).focus();
  });
  $(".chingari-btn").click(function () {
    $(".ching-budget1").prop("readonly", false).focus();
    $(".ching-budget").prop("readonly", false).focus();
  });
  $(".sony-btn").click(function () {
    $(".sony-budget1").prop("readonly", false).focus();
    $(".sony-budget").prop("readonly", false).focus();
  });
  $(".wetransfer-btn").click(function () {
    $(".we-budget1").prop("readonly", false).focus();
    $(".we-budget").prop("readonly", false).focus();
  });
  $(".sharechat-btn").click(function () {
    $(".share-budget1").prop("readonly", false).focus();
    $(".share-budget").prop("readonly", false).focus();
  });
  $(".flipkart-btn").click(function () {
    $(".flip-budget1").prop("readonly", false).focus();
    $(".flip-budget").prop("readonly", false).focus();
  });
  $(".firetv-btn").click(function () {
    $(".fire-budget1").prop("readonly", false).focus();
    $(".fire-budget").prop("readonly", false).focus();
  });
});

$(".disney-modal").on("click", function (e) {
  e.preventDefault();
  $("#disney-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".ola-modal").on("click", function (e) {
  e.preventDefault();
  $("#ola-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".paytm-modal").on("click", function (e) {
  e.preventDefault();
  $("#paytm-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".phonepay-modal").on("click", function (e) {
  e.preventDefault();
  $("#phonepay-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".sunnxt-modal").on("click", function (e) {
  e.preventDefault();
  $("#sunnxt-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".mmt-modal").on("click", function (e) {
  e.preventDefault();
  $("#mmt-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".hb-modal").on("click", function (e) {
  e.preventDefault();
  $("#hb-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".hm-modal").on("click", function (e) {
  e.preventDefault();
  $("#hm-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".paytmmoney-modal").on("click", function (e) {
  e.preventDefault();
  $("#paytmmoney-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".rediff-modal").on("click", function (e) {
  e.preventDefault();
  $("#rediff-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".swiggy-modal").on("click", function (e) {
  e.preventDefault();
  $("#swiggy-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".altbalaji-modal").on("click", function (e) {
  e.preventDefault();
  $("#altbalaji-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".wynk-modal").on("click", function (e) {
  e.preventDefault();
  $("#wynk-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".airtelxstream-modal").on("click", function (e) {
  e.preventDefault();
  $("#airtelxstream-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".hungama-modal").on("click", function (e) {
  e.preventDefault();
  $("#hungama-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".moneycontrol-modal").on("click", function (e) {
  e.preventDefault();
  $("#moneycontrol-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".ssg-modal").on("click", function (e) {
  e.preventDefault();
  $("#ssg-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".i-modal").on("click", function (e) {
  e.preventDefault();
  $("#i-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".zee5-modal").on("click", function (e) {
  e.preventDefault();
  $("#zee5-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".voot-modal").on("click", function (e) {
  e.preventDefault();
  $("#voot-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".mygate-modal").on("click", function (e) {
  e.preventDefault();
  $("#mygate-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".truecaller-modal").on("click", function (e) {
  e.preventDefault();
  $("#truecaller-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".picsart-modal").on("click", function (e) {
  e.preventDefault();
  $("#picsart-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".inshort-modal").on("click", function (e) {
  e.preventDefault();
  $("#inshort-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".amazon-modal").on("click", function (e) {
  e.preventDefault();
  $("#amazon-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".bms-modal").on("click", function (e) {
  e.preventDefault();
  $("#bms-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".mb-modal").on("click", function (e) {
  e.preventDefault();
  $("#mb-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".nbh-modal").on("click", function (e) {
  e.preventDefault();
  $("#nbh-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".pheasy-modal").on("click", function (e) {
  e.preventDefault();
  $("#pheasy-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".mobiwik-modal").on("click", function (e) {
  e.preventDefault();
  $("#mobiwik-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".glance-modal").on("click", function (e) {
  e.preventDefault();
  $("#glance-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".gpay-modal").on("click", function (e) {
  e.preventDefault();
  $("#gpay-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".saavn-modal").on("click", function (e) {
  e.preventDefault();
  $("#saavn-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".daily-modal").on("click", function (e) {
  e.preventDefault();
  $("#daily-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".jio-modal").on("click", function (e) {
  e.preventDefault();
  $("#jio-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".matrimony-modal").on("click", function (e) {
  e.preventDefault();
  $("#matrimony-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".carwale-modal").on("click", function (e) {
  e.preventDefault();
  $("#carwale-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".uber-modal").on("click", function (e) {
  e.preventDefault();
  $("#uber-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".pfm-modal").on("click", function (e) {
  e.preventDefault();
  $("#pfm-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".gaana-modal").on("click", function (e) {
  e.preventDefault();
  $("#gaana-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".cred-modal").on("click", function (e) {
  e.preventDefault();
  $("#cred-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".tatplay-modal").on("click", function (e) {
  e.preventDefault();
  $("#tatplay-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".snapchat-modal").on("click", function (e) {
  e.preventDefault();
  $("#snapchat-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".crex-modal").on("click", function (e) {
  e.preventDefault();
  $("#crex-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".ixigo-modal").on("click", function (e) {
  e.preventDefault();
  $("#ixigo-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".adda-modal").on("click", function (e) {
  e.preventDefault();
  $("#adda-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".vi-modal").on("click", function (e) {
  e.preventDefault();
  $("#vi-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".spotify-modal").on("click", function (e) {
  e.preventDefault();
  $("#spotify-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".chingari-modal").on("click", function (e) {
  e.preventDefault();
  $("#chingari-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".sony-modal").on("click", function (e) {
  e.preventDefault();
  $("#sony-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".wt-modal").on("click", function (e) {
  e.preventDefault();
  $("#wt-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".sharechat-modal").on("click", function (e) {
  e.preventDefault();
  $("#sharechat-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".flipkart-modal").on("click", function (e) {
  e.preventDefault();
  $("#flipkart-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".amazon-modal").on("click", function (e) {
  e.preventDefault();
  $("#amazon-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});
$(".airtelthanks-modal").on("click", function (e) {
  e.preventDefault();
  $("#airtelthanks-modal").modal("show").find(".modal-content").load($(this).attr("href"));
});




/**  checkbox function handlers */
function disney_checkbox() {
  var io = document.getElementById('check_dis_banner1');
  var iz = document.getElementById('check_dis_video1');

  var sum = parseInt($("#dis_banner_budget1").val());
  var sum1 = parseInt($("#dis_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform1a_platform1a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}

function ola_checkbox() {
  var io = document.getElementById('check_ola_banner1');
  var iz = document.getElementById('check_ola_video1');

  var sum = parseInt($("#ola_banner_budget1").val());
  var sum1 = parseInt($("#ola_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform2a_platform2a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}

function pay_checkbox() {
  var io = document.getElementById('check_pay_banner1');
  var iz = document.getElementById('check_pay_video1');

  var sum = parseInt($("#paytm_banner_budget1").val());
  var sum1 = parseInt($("#paytm_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform3a_platform3a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}


function ph_checkbox() {
  var io = document.getElementById('check_ph_banner1');
  var iz = document.getElementById('check_ph_video1');

  var sum = parseInt($("#ph_banner_budget1").val());
  var sum1 = parseInt($("#ph_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform4a_platform4a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}


function mmt_checkbox() {
  var io = document.getElementById('check_mmt_banner1');
  var iz = document.getElementById('check_mmt_video1');

  var sum = parseInt($("#mmt_banner_budget1").val());
  var sum1 = parseInt($("#mmt_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform5a_platform5a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}


function hb_checkbox() {
  var io = document.getElementById('check_hb_banner1');
  var iz = document.getElementById('check_hb_video1');

  var sum = parseInt($("#hb_banner_budget1").val());
  var sum1 = parseInt($("#hb_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform7a_platform7a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}


function hm_checkbox() {
  var io = document.getElementById('check_hm_banner1');
  var iz = document.getElementById('check_hm_video1');
  var iy = document.getElementById('check_hm_audio1');

  var sum = parseInt($("#hm_banner_budget1").val());
  var sum1 = parseInt($("#hm_video_budget1").val());
  var sum2 = parseInt($("#hm_audio_budget1").val());
  var value_sum = sum + sum1 + sum2;
  var bv = sum + sum1;
  var ba = sum + sum2;
  var av = sum2 + sum1;
  var platform = document.querySelector("#platform8a_platform8a1");

  if ((iy.checked == false) && (io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iy.checked == false) && (io.checked == false) && (iz.checked == true)) {
    platform.value = sum1;
    calculateSum();
  }
  if ((iy.checked == true) && (io.checked == false) && (iz.checked == false)) {
    platform.value = sum2;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true) && (iy.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false) && (iy.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

  if ((iy.checked == false) && (io.checked == true) && (iz.checked == true)) {
    platform.value = bv;
    calculateSum();
  }

  if ((iy.checked == true) && (io.checked == true) && (iz.checked == false)) {
    platform.value = ba;
    calculateSum();
  }


  if ((iy.checked == true) && (io.checked == false) && (iz.checked == true)) {
    platform.value = av;
    calculateSum();
  }

}


function pmall_checkbox() {
  var io = document.getElementById('check_pmall_banner1');
  var iz = document.getElementById('check_pmall_video1');

  var sum = parseInt($("#pmall_banner_budget1").val());
  var sum1 = parseInt($("#pmall_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform9a_platform9a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}



function red_checkbox() {
  var io = document.getElementById('check_red_banner1');
  var iz = document.getElementById('check_red_video1');

  var sum = parseInt($("#red_banner_budget1").val());
  var sum1 = parseInt($("#red_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform10a_platform10a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}



function swiggy_checkbox() {
  var io = document.getElementById('check_swiggy_banner1');
  var iz = document.getElementById('check_swiggy_video1');

  var sum = parseInt($("#swiggy_banner_budget1").val());
  var sum1 = parseInt($("#swiggy_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform11a_platform11a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}


function bal_checkbox() {
  var io = document.getElementById('check_bal_banner1');
  var iz = document.getElementById('check_bal_video1');

  var sum = parseInt($("#bal_banner_budget1").val());
  var sum1 = parseInt($("#bal_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform14a_platform14a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}




function xstream_checkbox() {
  var io = document.getElementById('check_xstream_banner1');
  var iz = document.getElementById('check_xstream_video1');

  var sum = parseInt($("#xstream_banner_budget1").val());
  var sum1 = parseInt($("#xstream_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform15a_platform15a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}

function wynk_checkbox() {
  var io = document.getElementById('check_wynk_banner1');
  var iz = document.getElementById('check_wynk_video1');
  var iy = document.getElementById('check_wynk_audio1');

  var sum = parseInt($("#wynk_banner_budget1").val());
  var sum1 = parseInt($("#wynk_video_budget1").val());
  var sum2 = parseInt($("#wynk_audio_budget1").val());
  var value_sum = sum + sum1 + sum2;
  var bv = sum + sum1;
  var ba = sum + sum2;
  var av = sum2 + sum1;
  var platform = document.querySelector("#platform16a_platform16a1");


  if ((iy.checked == false) && (io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iy.checked == false) && (io.checked == false) && (iz.checked == true)) {
    platform.value = sum1;
    calculateSum();
  }
  if ((iy.checked == true) && (io.checked == false) && (iz.checked == false)) {
    platform.value = sum2;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true) && (iy.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false) && (iy.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

  if ((iy.checked == false) && (io.checked == true) && (iz.checked == true)) {
    platform.value = bv;
    calculateSum();
  }

  if ((iy.checked == true) && (io.checked == true) && (iz.checked == false)) {
    platform.value = ba;
    calculateSum();
  }


  if ((iy.checked == true) && (io.checked == false) && (iz.checked == true)) {
    platform.value = av;
    calculateSum();
  }


}

function thanks_checkbox() {
  var io = document.getElementById('check_thanks_banner1');
  var iz = document.getElementById('check_thanks_video1');

  var sum = parseInt($("#thanks_banner_budget1").val());
  var sum1 = parseInt($("#thanks_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform17a_platform17a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}


function hg_checkbox() {
  var io = document.getElementById('check_hg_banner1');
  var iz = document.getElementById('check_hg_video1');

  var sum = parseInt($("#hg_banner_budget1").val());
  var sum1 = parseInt($("#hg_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform18a_platform18a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}


function mc_checkbox() {
  var io = document.getElementById('check_mc_banner1');
  var iz = document.getElementById('check_mc_video1');

  var sum = parseInt($("#mc_banner_budget1").val());
  var sum1 = parseInt($("#mc_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform19a_platform19a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}



function ssg_checkbox() {
  var io = document.getElementById('check_ssg_banner1');
  var iz = document.getElementById('check_mssgvideo1');

  var sum = parseInt($("#ssg_banner_budget1").val());
  var sum1 = parseInt($("#ssg_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform20a_platform20a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}



function nxt_checkbox() {
  var io = document.getElementById('check_nxt_banner1');
  var iz = document.getElementById('check_nxt_video1');

  var sum = parseInt($("#nxt_banner_budget1").val());
  var sum1 = parseInt($("#nxt_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform21a_platform21a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}



function ie_checkbox() {
  var io = document.getElementById('check_ie_banner1');
  var iz = document.getElementById('check_ie_video1');

  var sum = parseInt($("#ie_banner_budget1").val());
  var sum1 = parseInt($("#ie_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform22a_platform22a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}



function zee_checkbox() {
  var io = document.getElementById('check_zee_banner1');
  var iz = document.getElementById('check_zee_video1');

  var sum = parseInt($("#zee_banner_budget1").val());
  var sum1 = parseInt($("#zee_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform23a_platform23a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}


function voot_checkbox() {
  var io = document.getElementById('check_voot_banner1');
  var iz = document.getElementById('check_voot_video1');

  var sum = parseInt($("#voot_banner_budget1").val());
  var sum1 = parseInt($("#voot_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform24a_platform24a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}



function myg_checkbox() {
  var io = document.getElementById('check_myg_banner1');
  var iz = document.getElementById('check_myg_video1');

  var sum = parseInt($("#myg_banner_budget1").val());
  var sum1 = parseInt($("#myg_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform25a_platform25a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}



function tcall_checkbox() {
  var io = document.getElementById('check_tcall_banner1');
  var iz = document.getElementById('check_tcall_video1');

  var sum = parseInt($("#tcall_banner_budget1").val());
  var sum1 = parseInt($("#tcall_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform26a_platform26a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}



function pic_checkbox() {
  var io = document.getElementById('check_pic_banner1');
  var iz = document.getElementById('check_pic_video1');

  var sum = parseInt($("#pic_banner_budget1").val());
  var sum1 = parseInt($("#pic_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform27a_platform27a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}



function inshrt_checkbox() {
  var io = document.getElementById('check_inshrt_banner1');
  var iz = document.getElementById('check_inshrt_video1');

  var sum = parseInt($("#inshrt_banner_budget1").val());
  var sum1 = parseInt($("#inshrt_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform28a_platform28a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}



function amz_checkbox() {
  var io = document.getElementById('check_amz_banner1');
  var iz = document.getElementById('check_amz_video1');

  var sum = parseInt($("#amz_banner_budget1").val());
  var sum1 = parseInt($("#amz_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform29a_platform29a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}



function bms_checkbox() {
  var io = document.getElementById('check_bms_banner1');
  var iz = document.getElementById('check_bms_video1');

  var sum = parseInt($("#bms_banner_budget1").val());
  var sum1 = parseInt($("#bms_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform30a_platform30a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}



function nbh_checkbox() {
  var io = document.getElementById('check_nbh_banner1');
  var iz = document.getElementById('check_nbh_video1');

  var sum = parseInt($("#nbh_banner_budget1").val());
  var sum1 = parseInt($("#nbh_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform32a_platform32a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}



function peasy_checkbox() {
  var io = document.getElementById('check_peasy_banner1');
  var iz = document.getElementById('check_peasy_video1');

  var sum = parseInt($("#peasy_banner_budget1").val());
  var sum1 = parseInt($("#peasy_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform33a_platform33a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}


function mobi_checkbox() {
  var io = document.getElementById('check_mobi_banner1');
  var iz = document.getElementById('check_mobi_video1');

  var sum = parseInt($("#mobi_banner_budget1").val());
  var sum1 = parseInt($("#mobi_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform34a_platform34a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}


function glance_checkbox() {
  var io = document.getElementById('check_glance_banner1');
  var iz = document.getElementById('check_glance_video1');

  var sum = parseInt($("#glance_banner_budget1").val());
  var sum1 = parseInt($("#glance_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform35a_platform35a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}


function g_checkbox() {
  var io = document.getElementById('check_g_banner1');
  var iz = document.getElementById('check_g_video1');

  var sum = parseInt($("#g_banner_budget1").val());
  var sum1 = parseInt($("#g_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform36a_platform36a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}


function saavn_checkbox() {
  var io = document.getElementById('check_saavn_banner1');
  var iz = document.getElementById('check_saavn_video1');
  var iy = document.getElementById('check_saavn_audio1');

  var sum = parseInt($("#saavn_banner_budget1").val());
  var sum1 = parseInt($("#saavn_video_budget1").val());
  var sum2 = parseInt($("#saavn_audio_budget1").val());
  var value_sum = sum + sum1 + sum2;
  var bv = sum + sum1;
  var ba = sum + sum2;
  var av = sum2 + sum1;
  var platform = document.querySelector("#platform37a_platform37a1");


  if ((iy.checked == false) && (io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iy.checked == false) && (io.checked == false) && (iz.checked == true)) {
    platform.value = sum1;
    calculateSum();
  }
  if ((iy.checked == true) && (io.checked == false) && (iz.checked == false)) {
    platform.value = sum2;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true) && (iy.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false) && (iy.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

  if ((iy.checked == false) && (io.checked == true) && (iz.checked == true)) {
    platform.value = bv;
    calculateSum();
  }

  if ((iy.checked == true) && (io.checked == true) && (iz.checked == false)) {
    platform.value = ba;
    calculateSum();
  }


  if ((iy.checked == true) && (io.checked == false) && (iz.checked == true)) {
    platform.value = av;
    calculateSum();
  }


}


function daily_checkbox() {
  var io = document.getElementById('check_daily_banner1');
  var iz = document.getElementById('check_daily_video1');

  var sum = parseInt($("#daily_banner_budget1").val());
  var sum1 = parseInt($("#daily_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform38a_platform38a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}


function jio_checkbox() {
  var io = document.getElementById('check_jio_banner1');
  var iz = document.getElementById('check_jio_video1');

  var sum = parseInt($("#jio_banner_budget1").val());
  var sum1 = parseInt($("#jio_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform39a_platform39a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}


function mat_checkbox() {
  var io = document.getElementById('check_mat_banner1');
  var iz = document.getElementById('check_mat_video1');

  var sum = parseInt($("#mat_banner_budget1").val());
  var sum1 = parseInt($("#mat_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform40a_platform40a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}


function car_checkbox() {
  var io = document.getElementById('check_car_banner1');
  var iz = document.getElementById('check_car_video1');

  var sum = parseInt($("#car_banner_budget1").val());
  var sum1 = parseInt($("#car_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform41a_platform41a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}


function pfm_checkbox() {
  var io = document.getElementById('check_pfm_banner1');
  var iz = document.getElementById('check_pfm_video1');
  var iy = document.getElementById('check_pfm_audio1');

  var sum = parseInt($("#pfm_banner_budget1").val());
  var sum1 = parseInt($("#pfm_video_budget1").val());
  var sum2 = parseInt($("#pfm_audio_budget1").val());
  var value_sum = sum + sum1 + sum2;
  var bv = sum + sum1;
  var ba = sum + sum2;
  var av = sum2 + sum1;
  var platform = document.querySelector("#platform43a_platform43a1");


  if ((iy.checked == false) && (io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iy.checked == false) && (io.checked == false) && (iz.checked == true)) {
    platform.value = sum1;
    calculateSum();
  }
  if ((iy.checked == true) && (io.checked == false) && (iz.checked == false)) {
    platform.value = sum2;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true) && (iy.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false) && (iy.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

  if ((iy.checked == false) && (io.checked == true) && (iz.checked == true)) {
    platform.value = bv;
    calculateSum();
  }

  if ((iy.checked == true) && (io.checked == true) && (iz.checked == false)) {
    platform.value = ba;
    calculateSum();
  }


  if ((iy.checked == true) && (io.checked == false) && (iz.checked == true)) {
    platform.value = av;
    calculateSum();
  }

}


function gaana_checkbox() {
  var io = document.getElementById('check_gaana_banner1');
  var iz = document.getElementById('check_gaana_video1');
  var iy = document.getElementById('check_gaana_audio1');

  var sum = parseInt($("#gaana_banner_budget1").val());
  var sum1 = parseInt($("#gaana_video_budget1").val());
  var sum2 = parseInt($("#gaana_audio_budget1").val());
  var value_sum = sum + sum1 + sum2;
  var bv = sum + sum1;
  var ba = sum + sum2;
  var av = sum2 + sum1;
  var platform = document.querySelector("#platform44a_platform44a1");

  if ((iy.checked == false) && (io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iy.checked == false) && (io.checked == false) && (iz.checked == true)) {
    platform.value = sum1;
    calculateSum();
  }
  if ((iy.checked == true) && (io.checked == false) && (iz.checked == false)) {
    platform.value = sum2;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true) && (iy.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false) && (iy.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

  if ((iy.checked == false) && (io.checked == true) && (iz.checked == true)) {
    platform.value = bv;
    calculateSum();
  }

  if ((iy.checked == true) && (io.checked == true) && (iz.checked == false)) {
    platform.value = ba;
    calculateSum();
  }


  if ((iy.checked == true) && (io.checked == false) && (iz.checked == true)) {
    platform.value = av;
    calculateSum();
  }

}


function cred_checkbox() {
  var io = document.getElementById('check_cred_banner1');
  var iz = document.getElementById('check_cred_video1');

  var sum = parseInt($("#cred_banner_budget1").val());
  var sum1 = parseInt($("#cred_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform45a_platform45a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}



function tplay_checkbox() {
  var io = document.getElementById('check_tplay_banner1');
  var iz = document.getElementById('check_tplay_video1');

  var sum = parseInt($("#tplay_banner_budget1").val());
  var sum1 = parseInt($("#tplay_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform46a_platform46a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}


function snap_checkbox() {
  var io = document.getElementById('check_snap_banner1');
  var iz = document.getElementById('check_snap_video1');

  var sum = parseInt($("#snap_banner_budget1").val());
  var sum1 = parseInt($("#snap_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform47a_platform47a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}


function crex_checkbox() {
  var io = document.getElementById('check_crex_banner1');
  var iz = document.getElementById('check_crex_video1');

  var sum = parseInt($("#crex_banner_budget1").val());
  var sum1 = parseInt($("#crex_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform48a_platform48a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}


function ix_checkbox() {
  var io = document.getElementById('check_ix_banner1');
  var iz = document.getElementById('check_ix_video1');

  var sum = parseInt($("#ix_banner_budget1").val());
  var sum1 = parseInt($("#ix_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform50a_platform50a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}


function adda_checkbox() {
  var io = document.getElementById('check_adda_banner1');
  var iz = document.getElementById('check_adda_video1');

  var sum = parseInt($("#adda_banner_budget1").val());
  var sum1 = parseInt($("#adda_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform51a_platform51a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}


function vi_checkbox() {
  var io = document.getElementById('check_vi_banner1');
  var iz = document.getElementById('check_vi_video1');

  var sum = parseInt($("#vi_banner_budget1").val());
  var sum1 = parseInt($("#vi_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform52a_platform52a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}



function spot_checkbox() {
  var io = document.getElementById('check_spot_banner1');
  var iz = document.getElementById('check_spot_video1');

  var sum = parseInt($("#spot_banner_budget1").val());
  var sum1 = parseInt($("#spot_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform53a_platform53a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}


function ching_checkbox() {
  var io = document.getElementById('check_ching_banner1');
  var iz = document.getElementById('check_ching_video1');

  var sum = parseInt($("#ching_banner_budget1").val());
  var sum1 = parseInt($("#ching_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform55a_platform55a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}


function sony_checkbox() {
  var io = document.getElementById('check_sony_banner1');
  var iz = document.getElementById('check_sony_video1');

  var sum = parseInt($("#sony_banner_budget1").val());
  var sum1 = parseInt($("#sony_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform56a_platform56a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}


function we_checkbox() {
  var io = document.getElementById('check_we_banner1');
  var iz = document.getElementById('check_we_video1');

  var sum = parseInt($("#we_banner_budget1").val());
  var sum1 = parseInt($("#we_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform57a_platform57a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}



function share_checkbox() {
  var io = document.getElementById('check_share_banner1');
  var iz = document.getElementById('check_share_video1');

  var sum = parseInt($("#share_banner_budget1").val());
  var sum1 = parseInt($("#share_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform58a_platform58a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}


function flip_checkbox() {
  var io = document.getElementById('check_flip_banner1');
  var iz = document.getElementById('check_flip_video1');

  var sum = parseInt($("#flip_banner_budget1").val());
  var sum1 = parseInt($("#flip_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform59a_platform59a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}


function fire_checkbox() {
  var io = document.getElementById('check_fire_banner1');
  var iz = document.getElementById('check_fire_video1');

  var sum = parseInt($("#fire_banner_budget1").val());
  var sum1 = parseInt($("#fire_video_budget1").val());
  var value_sum = sum + sum1;
  var platform = document.querySelector("#platform60a_platform60a1");


  if ((io.checked == true) && (iz.checked == false)) {
    platform.value = sum;
    calculateSum();
  }
  if ((iz.checked == true) && (io.checked == false)) {
    platform.value = sum1;
    calculateSum();
  }

  if ((io.checked == true) && (iz.checked == true)) {

    platform.value = value_sum;
    calculateSum();

  }
  if ((io.checked == false) && (iz.checked == false)) {
    platform.value = value_sum;
    calculateSum();

  }

}



/**  paynow function handler */


$(document).ready(function () {
  $("#budget_form").click(function (event) {
    event.preventDefault();

    var auto_budget = $("#auto_data_budget").html();
    localStorage.setItem("budgetsumdata", JSON.stringify(auto_budget));

    window.location.href = "payout/instamojo/payment.php";

  })
});
