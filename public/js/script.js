$('#toggleSidebar').click(function () {
    $('.collapseSidebar').toggle();

    var currTabElem1 = document.getElementById('show-col-0');
    let currentClassName1 = document.getElementById("show-col-0").className;

    if (currentClassName1 == "col-0") {
        currTabElem1.setAttribute("class", "col-2");
    } else {
        currTabElem1.setAttribute("class", "col-0");
    }

    var currTabElem2 = document.getElementById('show-col-12');
    let currentClassName2 = document.getElementById("show-col-12").className;

    if (currentClassName2 == "col-12") {
        currTabElem2.setAttribute("class", "col-10 offset-2");
    } else {
        currTabElem2.setAttribute("class", "col-12");
    }
});