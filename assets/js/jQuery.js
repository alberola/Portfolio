//Event listener to show hide more projects
$(".moreProjectsContainer").hide();
$("#showMoreProjects").click(function(){
    if ($("#showMoreProjects").text() == "Show More ↘") {
        $(".moreProjectsContainer").slideDown(1000);
        $("#showMoreProjects").text("Show Less ↖");
    } else {
        $(".moreProjectsContainer").slideUp(1000);
        $("#showMoreProjects").text("Show More ↘");
    }
});