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

      //q1
      if(workTypeInput==='Web Applications'){
        ruby++;
      }else if(workTypeInput ==='Phone Applications'){
        android++;
      }else if(workTypeInput ==='Webpages'){
        css++;
      }

      //q2
      if(locationTypeInput==='A Start-up'){
        ruby++;
      }else if(locationTypeInput ==='A Big Business'){
        android++;
      }else if(locationTypeInput ==='From Home (Freelance)'){
        css++;
        android++;
      }


      //q3
      if(companyInput==='airbnb'){
        ruby++;
      }else if(companyInput ==='netflix'){
        android++;
      }else if(companyInput ==='media'){
        css++;
      }


      //q4
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


      //q5
      if(frameworkInput==='Rails'){
        ruby++;
      }else if(frameworkInput ==='Bootstrap'){
        css++;
      }

      //q6 - see if can change the background color
      // if(pictureInput==='london'){
      //   $("body").css("background-image","url(img/london.jpeg)");
      // }else if(pictureInput==='sanfrancisco'){
      //   $("body").css("background-color","pink");
      // }else if(pictureInput==='newyork'){
      //   $("body").css("background-color","blue");
      // }

      //q7
      if(activityInput==='logical'){
        ruby++;
        android++;
      }else if(activityInput ==='creative'){
        css++;
      }

      //q8
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
      }else if(css>ruby && css>android){
        $("#design").show();
      }else if(android>css &&android>ruby){
        $("#android").show();
      }else {
        $("#none").show();
      }

    });
  });
