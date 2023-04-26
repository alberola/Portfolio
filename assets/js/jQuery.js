//Event listener to show hide more projects
$("#showMoreProjects").click(function(){
    if ($("#showMoreProjects").text() == "Show More ↘") {
        $(".moreProjectsContainer").show(1000);
        $("#showMoreProjects").text("Show Less ↖");
    } else {
        $(".moreProjectsContainer").hide(1000);
        $("#showMoreProjects").text("Show More ↘");
    }
});