console.log("ถ้าเห็นข้อความนี้แสดงว่า js ทำงานแล้ว");

function openInfo(evt, Infotab) {
    // Declare all variables
    var i, acinfo, tablinks;
  
    acinfo = document.getElementsByClassName("account-info");
    for (i = 0; i < acinfo.length; i++) {
      acinfo[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(Infotab).style.display = "block";
    evt.currentTarget.className += " active";
  }

