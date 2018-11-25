 var categories = [];
    var category = {};
    var activities = [];
    var sigh;
    //var allExercises = [
      //  category
    //];
    //var newExercise = {};
function getExercises() {
    var queryURL =  'https://api.fitbit.com/1/activities.json';
    $.ajax({
        url: queryURL,
        method: "GET",
        qs: { access_token: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkQ2OUIiLCJzdWIiOiIyRjM5V1YiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyYWN0IiwiZXhwIjoxNTQzMTc0MDMwLCJpYXQiOjE1NDMxNDUyMzB9.jVjWN6uKmMKF-3q6XRAqJrLXvMrj1ruVYwQ_naG_GY0' },
      headers: 
       { 
         
         authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkQ2OUIiLCJzdWIiOiIyRjM5V1YiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyYWN0IiwiZXhwIjoxNTQzMTc0MDMwLCJpYXQiOjE1NDMxNDUyMzB9.jVjWN6uKmMKF-3q6XRAqJrLXvMrj1ruVYwQ_naG_GY0' }
        }).then(function(res, category) {
            
           var results = res;
           //console.log(results);
           categories = [
            'activities',
            'id',
            'name'
        ];
        //console.log(results.categories);
           //console.log(results);
           //var activities = [id, name]
            for(var i=0; i<results.categories.length; i++) {
                //console.log(results.categories[i].id);
                category = {
                    
                    "activities": [],
                    "id": "",
                    'name': "",
                    

               }
                
               
                //console.log(i);
               
            
            //category.name.push(results.categories[i].name).push();
            category.activities.push(results.categories[i].activities);
            category.name = results.categories[i].name;
            category.id = results.categories[i].id;
            //category.activities.push(results.categories[i].activities);
            //categories.push(category);
            //console.log(categories);
            //console.log(category);
           //categories.push(sigh);
           var test = category;
          //console.log(test);
           getStuff(category);
           showCategories(category);
           userSelection(test);
              //return category;
        }
       
        //console.log(category);
           
               /* category = {
                    "activities": [],
                    "id": "",
                    "name": ""
                }
                category.activities = categories[i].activities;
                category.id = categories[i].id;
                category.name = categories[i].name;
                category.push(categories);
                console.log("hi");
            }*/
            

        })
    };
getExercises();
   //var sigh = getExercises(category);
    //console.log(sigh);
    
    //var getCategories = getExercises(categories);
    //console.log(categories);
   
//function to get category and parse out the activities 
function getStuff(category, selectedCategories) {
    
    var id = category.id;
    var name = category.name;
    var activities = category.activities[0];
    var exercise = [];
    //console.log(activities);
    //var res = category;
    for(i=0; i<activities.length; i++) {
        var exercise = [
            "id",
            "name"
        ];
        exercise.id=activities[i].id;
        exercise.name=activities[i].name;
       //console.log(exercise);
        showActivities(exercise);
        userSelection(name);
    }

    console.log(selectedCategories);

};

function showActivities(exercise,selectedCategories) {
    /*if (exercise.name === selectedCategories) 
    var newActivitiy = $("<option>");
    newActivitiy.attr("value", category.id);
    newActivitiy.text(category.name);           
    $("#categories-drop").append(newActivitiy);*/
};
//function for adding categories to page
function showCategories(category) {
    //console.log(category.id);
    var newCategory = $("<option>");
    newCategory.attr("value", category.id);
    newCategory.text(category.name);           
    $("#categories-drop").append(newCategory);
    
    $("#confirm").on("click", function(e) {
    //console.log(newCategory.option);
    e.preventDefault();
      var userCategories = document.getElementById("categories-drop");
      var selectedValue = userCategories.options[userCategories.selectedIndex].value;
      var selectedCategories = userCategories.options[userCategories.selectedIndex].text;
     
      //console.log(selectedCategories);
      getStuff(selectedCategories);
      
    })
    

};

function userSelection(selectedCategories) {
    var queryURL =  'https://api.fitbit.com/1/activities.json';
    $.ajax({
        url: queryURL,
        method: "GET",
        qs: { access_token: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkQ2OUIiLCJzdWIiOiIyRjM5V1YiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyYWN0IiwiZXhwIjoxNTQzMTc0MDMwLCJpYXQiOjE1NDMxNDUyMzB9.jVjWN6uKmMKF-3q6XRAqJrLXvMrj1ruVYwQ_naG_GY0' },
      headers: 
       { 
         
         authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkQ2OUIiLCJzdWIiOiIyRjM5V1YiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyYWN0IiwiZXhwIjoxNTQzMTc0MDMwLCJpYXQiOjE1NDMxNDUyMzB9.jVjWN6uKmMKF-3q6XRAqJrLXvMrj1ruVYwQ_naG_GY0' }
        }).then(function(res) {
            //console.log(res.categories)
            for(i=0; i<res.categories.length; i++) {
                console.log(i);
                res.categories[i];
                res.categories[i].name

                if (selectedCategories === res.categories[i].name) {
                    for(z=0; z<activities.length; z++) {
                        var exercise = [
                            "id",
                            "name"
                        ];
                        exercise.id=activities[z].id;
                        exercise.name=activities[z].name;
                       //console.log(exercise);
                        //showActivities(exercise);
                       // userSelection(name);

                        var newActivitiy= $("<option>");
                        newActivity.attr("value", exercise.id);
                        newActivitiy.text(exercise.name);           
                        $("#categories-drop").append(newActivitiy);
                    }
                


                  
                    
        
                    //selectedCategories = category.id
                    //console.log(category.id);
                    
                 
                }

            }
        })
    

};


               
            
           
