$(document).ready(function(){
    $("form#tracker").submit(function(event){

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

      if(workTypeInput==='Web Applications'){
        ruby++;
      }else if(workTypeInput ==='Phone Applications'){
        android++;
      }else if(workTypeInput ==='Webpages'){
        css++;
      }

      if(locationTypeInput==='A Start-up'){
        ruby++;
      }else if(locationTypeInput ==='A Big Business'){
        android++;
      }else if(locationTypeInput ==='From Home (Freelance)'){
        css++;
        android++;
      }


      if(companyInput==='airbnb'){
        ruby++;
      }else if(companyInput ==='netflix'){
        android++;
      }else if(companyInput ==='media'){
        css++;
      }


      if(devTypeInput==='backend'){
        ruby++;
        android++;
      }else if(devTypeInput ==='frontend'){
        css++;
      }else if(devTypeInput==='fullstack'){
        ruby++;
        android++;
        css++;
      }

      if(frameworkInput==='Rails'){
        ruby++;
      }else if(frameworkInput ==='Bootstrap'){
        css++;
      }

      if(activityInput==='logical'){
        ruby++;
        android++;
      }else if(activityInput ==='creative'){
        css++;
      }

      var animal = Math.floor(Math.random()*4)+1;
      if(animal===1){
        ruby++;
      }else if(animal ===2){
        android++;
      }else if(animal ===3){
        css++;
      }
      if(ruby>android &&ruby>css){
        $("#ruby").show();
        $("#design").hide();
        $("#android").hide();
        $("#none").hide();
      }else if(css>ruby && css>android){
        $("#design").show();
        $("#ruby").hide();
        $("#android").hide();
        $("#none").hide();
      }else if(android>css &&android>ruby){
        $("#android").show();
        $("#design").hide();
        $("#ruby").hide();
        $("#none").hide();
      }else {
        $("#none").show();
        $("#design").hide();
        $("#android").hide();
        $("#ruby").hide();
      }
      event.preventDefault();
    });
  });
