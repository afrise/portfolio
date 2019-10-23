//hack to close the navbar when anchor is clicked
$("body").on("click", "[data-trigger-button]", function(){if (window.matchMedia("(max-width: 767px)").matches){
    var $this = $(this), cNavButton = $this.data("trigger-button");$(cNavButton).trigger('click');}});

//load up JSON data and create Vue objects
$.getJSON('./resume.json',   function(data){var resume   = new Vue({el: '#resume-data', data: data});})
$.getJSON('./projects.json', function(data){var projects = new Vue({el: '#projects',    data: data});})
$.getJSON('./about.json',    function(data){var projects = new Vue({el: '#about-data',  data: data});})

function GetPdf(){
    var pdf = new jsPDF("portrait", "mm", "letter");
    pdf.setFontSize(4);
    pdf.fromHTML(document.getElementById("resume-data").innerHTML, 20, 10, {width: 180});
    pdf.setTextColor(0,0,0);
    pdf.save('resume.pdf');
}