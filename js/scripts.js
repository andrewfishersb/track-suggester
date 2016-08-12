$(document).ready(function(){
    $("form#tracker").submit(function(event){
      event.preventDefault();
      var css=0;
      var android=0;
      var ruby =0;
      var workTypeInput = $("#work").val();
      var locationTypeInput = $("#biztype").val();
      var frameworkInput = $("#framework").val();
      var companyInput = $("input:radio[name=company]:checked").val();
      var devTypeInput = $("input:radio[name=stack]:checked").val();
      var pictureInput = $("input:radio[name=pic]:checked").val();
      var activityInput = $("input:radio[name=activity]:checked").val();

      //may not need
      var animalInput = $("input:radio[name=animal]:checked").val();








    });


});
