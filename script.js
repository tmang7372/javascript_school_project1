/*window.onload = function(){
    document.getElementById("btnSubmit").onclick =  checkInputValue;
}*/

/*Check the minutes and second */
var countWords = 0 ;
document.getElementById("txtDuration").onkeyup = function(event){
    //Check whether the input is a number, backspace and a period
    if(((event.keyCode >= 48) && (event.keyCode <= 57)) || (event.keyCode == 8) || (event.keyCode == 190 )){
        countWords++;
        if((countWords==1) && (event.keyCode == 48)){
            alert("Cannot place a zero at the start of a digit");
        }

        if(event.keyCode == 8){
            if((countWords==4) && (this.value.length == 1)){
                countWords = 3;
            }
            countWords-= 2;
        }
        
        if(countWords == 2){
            words = parseInt(this.value);
            realWords = this.value;
            if(words > 59){
                alert("The minutes value cannot be greater than 59");
            }
            if(realWords.charAt(1)=="."){
                countWords=3;
            }
        }
        
        if((countWords == 3) && (this.value.indexOf(".")==-1)){
            words = parseInt(this.value);
            realWords = this.value;
            alert("The minutes values cannot have 3 values");
            }

        if(countWords == 5){
            words = this.value.slice(-2);
            if(words > 59){
                alert("The second value cannot be greater than 59");
            }
           
        }
        if(countWords == 6){
            alert("The second value cannot be more than 3 values");
    }
           
    }
    else {
        alert("Must key in numbers.");
        countWords++;
        }
    }


/*Character count*/
var count = 0;
document.getElementById("txtDescription").onkeyup = function(event){
    if((event.keyCode >= 65) && (event.keyCode <= 90)){
        count++;
    }
    document.getElementById("wordsCount_id").innerHTML ="No of charcters type is "+count;
    }


function checkInputValue(event){
    var isToSubmit = true;
    var selectedOptionValue = document.getElementById("selectType");
    var txtTitle = document.getElementById("txtTitle");
    var txtArtist = document.getElementById("txtArtist");
    var radioReleaseYes = document.getElementById("release_Yes");
    var radioReleaseNo = document.getElementById("release_No");
    var paragraphRelease = document.getElementById("paragraphRelease")
    var txtDEscription = document.getElementById("txtDescription");
    var message = document.getElementById("divMessage");
    var wordsCount = document.getElementById("wordsCount_id");
    var txtDuration = document.getElementById("txtDuration");
   
    

    //Check whether the select option is in the Select a Type place
    if(selectedOptionValue.value == "Select a Type"){
        selectedOptionValue.style.backgroundColor = "yellow";
        message.style.color = "red";
        message.innerHTML = "You must select Classical, Funk, Rock and Pop.";
        isToSubmit = false; 
    } 

    //Check whether the select option is classical, funk, rock and pop
    if((selectedOptionValue.value === "classical") || (selectedOptionValue.value === "funk") ||
      (selectedOptionValue.value === "rock")|| (selectedOptionValue.value === "pop")){
        document.getElementById("selectType").style.backgroundColor = "white";
    }
    else {
        selectedOptionValue.style.backgroundColor = "yellow";
        message.style.color = "red";
        message.innerHTML = "You must select Classical, Funk, Rock and Pop."
        isToSubmit = false;
    }  
    
    //Check whether the title is empty
    if(txtTitle.value == ""){
        txtTitle.style.backgroundColor = "yellow";
        message.style.color = "red";
        message.innerHTML = "The Title field must not be empty.";
        isToSubmit = false;
    }
    else {
        txtTitle.style.backgroundColor = "white";
    }
    
    //Check whether the artist is empty
    if(txtArtist.value == "" ){
        txtArtist.style.backgroundColor = "yellow";
        message.style.color = "red";
        message.innerHTML = "The Artist field must not be empty.";
        isToSubmit = false; 
    }
    else {
        txtArtist.style.backgroundColor = "white";
    }
    
    //Check whether the description is empty
    if(txtDescription.value == ""){
        txtDescription.style.backgroundColor = "yellow";
        message.style.color = "red";
        message.innerHTML = "The Description field must not be empty."
        isToSubmit = false;
    }
    else {
        txtDescription.style.backgroundColor = "white";
    }

    //Check whether the radio button is checked
    if((radioReleaseNo.checked == false) && (radioReleaseYes.checked == false)){
        paragraphRelease.style.color = "yellow";
        message.style.color = "red";
        message.innerHTML = "The Release field must be checked.";
        isToSubmit = false;
        
    } 
    else {
        paragraphRelease.style.color = "black";
    }
    
     //Check whether the Duration field is empty
     if(txtDuration.value == ""){
        txtDuration.style.backgroundColor = "yellow";
        message.style.color = "red";
        message.innerHTML = "The Duration field cannot be empty.";
        isToSubmit = false; 
    }
    else {
        txtDuration.style.backgroundColor = "white";
    }

    //Check whether the Radio buttons are not checked and the Duration is empty 
    if(((radioReleaseNo.checked==false) && (radioReleaseYes.checked==false)) && (txtDuration.value == "")){
        txtDuration.style.backgroundColor = "yellow";
        paragraphRelease.style.color = "yellow";
        message.style.color = "red";
        message.innerHTML = "<ul><li>The Release field must be checked.</li>"+
                            "<li>The Duration field cannot be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether both the description and duration are empty
    if((txtDescription.value == "") && (txtDuration.value == "")){
        txtDuration.style.backgroundColor = "yellow";
        txtDescription.style.backgroundColor = "yellow";
        message.style.color = "red";
        message.innerHTML = "<ul><li>The Duration field cannot be empty.</li>"+
                            "<li>The Description field must not be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether the Radio button are not checked and the Description are empty
    if(((radioReleaseNo.checked==false) && (radioReleaseYes.checked==false)) && (txtDescription.value == "")){
        txtDescription.style.backgroundColor = "yellow";
        paragraphRelease.style.color = "yellow";
        message.style.color = "red";
        message.innerHTML = "<ul><li>The Release field must be checked.</li>"+
                            "<li>The Description field must not be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether the Description and Artist fields are empty
    if((txtDuration.value == "") && (txtArtist.value == "")){
        txtArtist.style.backgroundColor = "yellow";
        txtDuration.style.backgroundColor = "yellow";
        message.style.color = "red";
        message.innerHTML = "<ul><li>The Artist field must not be empty.</li>"+
                            "<li>The Duration field cannot be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether the Artist field and Description field are empty
    if((txtArtist.value == "") && (txtDescription.value == "")){
        txtDescription.style.backgroundColor = "yellow";
        txtArtist.style.backgroundColor = "yellow";
        message.style.color = "red";
        message.innerHTML = "<ul><li>The Artist field must not be empty.</li>"+
                            "<li>The Description field must not be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether the Radio Buttons and the Artist field are empty
    if(((radioReleaseNo.checked==false) && (radioReleaseYes.checked==false)) && (txtArtist.value == "" )){
        paragraphRelease.style.color = "yellow";
        txtArtist.style.backgroundColor = "yellow";
        message.style.color = "red";
        message.innerHTML = "<ul><li>The Artist field must not be empty.</li>"+
                            "<li>The Release field must be checked.</li></ul>";
        isToSubmit = false;
    } 
    
    //Check whether the Title field and Description field are empty
    if((txtTitle.value == "") && (txtDescription.value == "")){
        txtDescription.style.backgroundColor = "yellow";
        txtTitle.style.backgroundColor = "yellow";
        message.style.color = "red";
        message.innerHTML = "<ul><li>The Title field must not be empty.</li>"+
                            "<li>The Description field must not be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether the radio buttons and the Title field are empty
    if(((radioReleaseNo.checked==false) && (radioReleaseYes.checked==false)) && (txtTitle.value == "")){
        paragraphRelease.style.color = "yellow";
        txtTitle.style.backgroundColor = "yellow";
        message.style.color = "red";
        message.innerHTML = "<ul><li>The Title field must not be empty.</li>"+
                            "<li>The Release field must be checked.</li></ul>";
        isToSubmit = false; 
    }
    
    //Check whether the Duration field and the Genre field are empty
    if((txtDuration.value == "")  &&  (selectedOptionValue.value == "Select a Type")){
        selectedOptionValue.style.backgroundColor = "yellow";
        txtDuration.style.backgroundColor = "yellow";
        message.style.color = "red";
        message.innerHTML = "<ul><li>You must select Classical, Funk, Rock and Pop.</li>"+
                            "<li>The Duration field cannot be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether the Genre field and the Description field are empty
    if((selectedOptionValue.value == "Select a Type") && (txtDescription.value == "")){
        txtDescription.style.backgroundColor = "yellow";
        selectedOptionValue.style.backgroundColor = "yellow";
        message.style.color = "red";
        message.innerHTML = "<ul><li>You must select Classical, Funk, Rock and Pop.</li>"+
                            "<li>The Description field must not be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether the Radio buttons and Genre are empty
    if(((radioReleaseNo.checked==false) && (radioReleaseYes.checked==false)) && (selectedOptionValue.value == "Select a Type")){
        paragraphRelease.style.color = "yellow";
        message.style.color = "red";
        selectedOptionValue.style.backgroundColor = "yellow";
        message.innerHTML = "<ul><li>You must select Classical, Funk, Rock and Pop.</li>"+
                            "<li>The Release field must be checked.</li></ul>";
        isToSubmit = false;
    }
    
    //Check Artist field and Title field whether empty
    if((txtArtist.value == "" ) && (txtTitle.value == "")){
        txtArtist.style.backgroundColor = "yellow";
        txtTitle.style.backgroundColor = "yellow";
        message.style.color = "red";
        message.innerHTML = "<ul><li>The Title field must not be empty.</li>"+
                            "<li>The Artist field must not be empty.</li></ul>";
        isToSubmit = false; 
    }
    
    //Check whether the Title field and the Duration field are empty
    if((txtDuration.value == "") && (txtTitle.value == "")){
        txtDuration.style.backgroundColor = "yellow";
        txtTitle.style.backgroundColor = "yellow";
        message.style.color = "red";
        message.innerHTML = "<ul><li>The Title field must not be empty.</li>"+
                            "<li>The Duration field cannot be empty.</li></ul>";
        isToSubmit = false; 
    }

    //Check whether Genre field and Artist field whether empty
    if((txtArtist.value == "" ) && (selectedOptionValue.value == "Select a Type") ){
        txtArtist.style.backgroundColor = "yellow";
        message.style.color = "red";
        selectedOptionValue.style.backgroundColor = "yellow";
        message.innerHTML = "<ul><li>You must select Classical, Funk, Rock and Pop.</li>"+
                            "<li>The Artist field must not be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether Title field and Genre field are empty
    if((txtTitle.value == "") && (selectedOptionValue.value == "Select a Type")){
        txtTitle.style.backgroundColor = "yellow";
        message.style.color = "red";
        selectedOptionValue.style.backgroundColor = "yellow";
        message.innerHTML = "<ul><li>You Title field must not be empty.</li>"+
                            "<li>You must select Classical, Funk, Rock and Pop.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whethet the Artist field, Title field and Description field are empty
    if((txtArtist.value == "" ) && (txtDescription.value == "") && (txtTitle.value == "")){
        txtArtist.style.backgroundColor = "yellow";
        txtTitle.style.backgroundColor = "yellow";
        message.style.color = "red";
        txtDescription.style.backgroundColor = "yellow";
        message.innerHTML = "<ul><li>You Title field must not be empty.</li>"+
                             "<li>The Artist field must not be empty.</li>"+
                             "<li>The Description field must not be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether the Title field, Duration field and Description field are empty
    if((txtDuration.value == "") && (txtDescription.value == "") && (txtTitle.value == "")){
        txtDuration.style.backgroundColor = "yellow";
        txtTitle.style.backgroundColor = "yellow";
        message.style.color = "red";
        txtDescription.style.backgroundColor = "yellow";
        message.innerHTML = "<ul><li>You Title field must not be empty.</li>"+
                             "<li>The Duration field cannot be empty.</li>"+
                             "<li>The Description field must not be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check the Genre field, Duration field and Description field are empty
    if((txtDescription.value == "") && (selectedOptionValue.value == "Select a Type") && (txtDuration.value == "")){
        txtDescription.style.backgroundColor = "yellow";
        txtDuration.style.backgroundColor = "yellow";
        message.style.color = "red";
        selectedOptionValue.style.backgroundColor = "yellow";
        message.innerHTML = "<ul><li>You must select Classical, Funk, Rock and Pop.</li>"+
                             "<li>The Duration field cannot be empty.</li>"+
                             "<li>The Description field must not be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether the Title, Genre and Description fields are empty
    if((txtDescription.value == "") && (selectedOptionValue.value == "Select a Type") && (txtTitle.value == "")){
        txtDescription.style.backgroundColor = "yellow";
        txtTitle.style.backgroundColor = "yellow";
        message.style.color = "red";
        selectedOptionValue.style.backgroundColor = "yellow";
        message.innerHTML = "<ul><li>You Title field must not be empty.</li>"+
                             "<li>You must select Classical, Funk, Rock and Pop.</li>"+
                             "<li>The Description field must not be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether Title field, Genre field and Duration field are empty
    if((txtDuration.value == "") && (selectedOptionValue.value == "Select a Type") && (txtTitle.value == "")){
        txtDuration.style.backgroundColor = "yellow";
        txtTitle.style.backgroundColor = "yellow";
        message.style.color = "red";
        selectedOptionValue.style.backgroundColor = "yellow";
        message.innerHTML = "<ul><li>You Title field must not be empty.</li>"+
                             "<li>You must select Classical, Funk, Rock and Pop.</li>"+
                             "<li>The Duration field cannot be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether the Artist field, Duration field and Description field are empty
    if((txtArtist.value == "" ) && (txtDuration.value == "") && (txtDescription.value == "")){
        txtArtist.style.backgroundColor = "yellow";
        txtDescription.style.backgroundColor = "yellow";
        message.style.color = "red";
        txtDuration.style.backgroundColor = "yellow";
        message.innerHTML = "<ul><li>The Artist field must not be empty.</li>"+
                             "<li>The Duration field cannot be empty.</li>"+
                             "<li>The Description field must not be empty.</li></ul>";
        isToSubmit = false;
    } 
    
    //Check whether the Artist field, Genre field and Duration field are empty
    if((txtArtist.value == "" ) && (selectedOptionValue.value == "Select a Type") && (txtDuration.value == "")){
        txtArtist.style.backgroundColor = "yellow";
        txtDuration.style.backgroundColor = "yellow";
        message.style.color = "red";
        selectedOptionValue.style.backgroundColor = "yellow";
        message.innerHTML = "<ul><li>You must select Classical, Funk, Rock and Pop.</li>"+
                             "<li>The Artist field must not be empty</li>"+
                             "<li>The Duration field cannot be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether the Genre field, Artist field are selected
    if((txtArtist.value == "" ) && (selectedOptionValue.value == "Select a Type") && (txtDescription.value == "")){
        txtArtist.style.backgroundColor = "yellow";
        txtDescription.style.backgroundColor = "yellow";
        message.style.color = "red";
        selectedOptionValue.style.backgroundColor = "yellow";
        message.innerHTML = "<ul><li>You must select Classical, Funk, Rock and Pop.</li>"+
                             "<li>The Artist field must not be empty.</li>"+
                             "<li>The Description field must not be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether the Title field, Artist field and Duration field are empty
    if((txtArtist.value == "" ) && (txtDuration.value == "") && (txtTitle.value == "")){
        txtArtist.style.backgroundColor = "yellow";
        txtTitle.style.backgroundColor = "yellow";
        message.style.color = "red";
        txtDuration.style.backgroundColor = "yellow";
        message.innerHTML = "<ul><li>You Title field must not be empty.</li>"+
                             "<li>The Artist field must not be empty.</li>"+
                             "<li>The Duration field cannot be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether the Title field, Genre field and Artist field are empty
    if((txtArtist.value == "" ) && (selectedOptionValue.value == "Select a Type") && (txtTitle.value == "")){
        txtArtist.style.backgroundColor = "yellow";
        txtTitle.style.backgroundColor = "yellow";
        message.style.color = "red";
        selectedOptionValue.style.backgroundColor = "yellow";
        message.innerHTML = "<ul><li>You Title field must not be empty.</li>"+
                             "<li>You must select Classical, Funk, Rock and Pop.</li>"+
                             "<li>The Artist field must not be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether the Genre field, Radio buttons and Duration field are empty
    if(((radioReleaseNo.checked==false) && (radioReleaseYes.checked==false)) && (selectedOptionValue.value == "Select a Type") && (txtDuration.value == "")){
        txtDuration.style.backgroundColor = "yellow";
        selectedOptionValue.style.backgroundColor = "yellow";
        paragraphRelease.style.color = "yellow";
        message.style.color = "red";
        message.innerHTML = "<ul><li>You must select Classical, Funk, Rock and Pop.</li>"+
                             "<li>The Release field must be checked.</li>"+
                             "<li>The Duration field cannot be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether the Title field, Radio Button and the Duration field are empty
    if(((radioReleaseNo.checked==false) && (radioReleaseYes.checked==false)) && (txtDuration.value == "") && (txtTitle.value == "" )){
        txtTitle.style.backgroundColor = "yellow";
        txtDuration.style.backgroundColor = "yellow";
        paragraphRelease.style.color = "yellow";
        selectedOptionValue.style.backgroundColor = "white";
        message.style.color = "red";
        message.innerHTML = "<ul><li>You Title field must not be empty.</li>"+
                             "<li>The Release field must be checked.</li>"+
                             "<li>The Duration field cannot be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether the Title field, Genre Field and the Radio button are empty
    if(((radioReleaseNo.checked==false) && (radioReleaseYes.checked==false)) && (selectedOptionValue.value == "Select a Type") && (txtTitle.value == "" )){
        txtTitle.style.backgroundColor = "yellow";
        selectedOptionValue.style.backgroundColor = "yellow";
        paragraphRelease.style.color = "yellow";
        message.style.color = "red";
        message.innerHTML = "<ul><li>You Title field must not be empty.</li>"+
                             "<li>You must select Classical, Funk, Rock and Pop.</li>"+
                             "<li>The Release field must be checked.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether the Release field, Duration field and Description field are empty
    if((txtDescription.value == "") && ((radioReleaseNo.checked==false) && (radioReleaseYes.checked==false)) && (txtDuration.value == "")){
        txtDescription.style.backgroundColor = "yellow";
        txtDuration.style.backgroundColor = "yellow";
        message.style.color = "red";
        paragraphRelease.style.color = "yellow";
        message.innerHTML = "<ul><li>The Release field must be checked.</li>"+
                             "<li>The Duration field cannot be empty.</li>"+
                             "<li>The Description field must not be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether the Title field, Release field and the Description field are empty
    if((txtDescription.value == "") && ((radioReleaseNo.checked==false) && (radioReleaseYes.checked==false)) && (txtTitle.value == "")){
        txtDescription.style.backgroundColor = "yellow";
        txtTitle.style.backgroundColor = "yellow";
        message.style.color = "red";
        paragraphRelease.style.color = "yellow";
        message.innerHTML = "<ul><li>You Title field must not be empty.</li>"+
                             "<li>The Release field must be checked.</li>"+
                             "<li>The Description field must not be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether the Artist field, Release field and Duration are empty
    if((txtDuration.value == "") && ((radioReleaseNo.checked==false) && (radioReleaseYes.checked==false)) && (txtArtist.value == "" )){
        txtDuration.style.backgroundColor = "yellow";
        txtArtist.style.backgroundColor = "yellow";
        message.style.color = "red";
        paragraphRelease.style.color = "yellow";
        message.innerHTML = "<ul><li>The Artist field must not be empty.</li>"+
                             "<li>The Release field must be checked.</li>"+
                             "<li>The Duration field cannot be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check field whether the Artist field, the Release and the Description field are empty 
    if((txtDescription.value == "") && ((radioReleaseNo.checked==false) && (radioReleaseYes.checked==false)) && (txtArtist.value == "" )){
        txtDescription.style.backgroundColor = "yellow";
        txtArtist.style.backgroundColor = "yellow";
        message.style.color = "red";
        paragraphRelease.style.color = "yellow";
        message.innerHTML = "<ul><li>The Artist field must not be empty.</li>"+
                             "<li>The Release field must be checked.</li>"+
                             "<li>The Description field must not be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether Genre field, Release field and Description field are empty
    if((txtDescription.value == "") && ((radioReleaseNo.checked==false) && (radioReleaseYes.checked==false)) && (selectedOptionValue.value == "Select a Type")){
        txtDescription.style.backgroundColor = "yellow";
        selectedOptionValue.style.backgroundColor = "yellow";
        message.style.color = "red";
        paragraphRelease.style.color = "yellow";
        message.innerHTML = "<ul><li>You must select Classical, Funk, Rock and Pop.</li>"+
                             "<li>The Release field must be checked.</li>"+
                             "<li>The Description field must not be empty.</li></ul>";
        isToSubmit = false;
    }

    //Check whether the Title field, Release field and the Description field are empty
    if((txtDescription.value == "") && ((radioReleaseNo.checked==false) && (radioReleaseYes.checked==false)) && (txtTitle.value == "")){
        txtDescription.style.backgroundColor = "yellow";
        txtTitle.style.backgroundColor = "yellow";
        message.style.color = "red";
        paragraphRelease.style.color = "yellow";
        message.innerHTML = "<ul><li>You Title field must not be empty.</li>"+
                             "<li>The Release field must be checked.</li>"+
                             "<li>The Description field must not be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether the Title field, Artist field and the Release field are empty
    if((txtArtist.value == "" ) && ((radioReleaseNo.checked==false) && (radioReleaseYes.checked==false)) && (txtTitle.value == "")){
        txtArtist.style.backgroundColor = "yellow";
        txtTitle.style.backgroundColor = "yellow";
        message.style.color = "red";
        paragraphRelease.style.color = "yellow";
        message.innerHTML = "<ul><li>You Title field must not be empty.</li>"+
                             "<li>The Artist field must not be empty.</li>"+
                             "<li>The Release field must be checked.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether the Artist field, Genre field and Radio buttons are empty
    if((txtArtist.value == "" ) && ((radioReleaseNo.checked==false) && (radioReleaseYes.checked==false)) && (selectedOptionValue.value == "Select a Type")){
        txtArtist.style.backgroundColor = "yellow";
        selectedOptionValue.style.backgroundColor = "yellow";
        message.style.color = "red";
        paragraphRelease.style.color = "yellow";
        message.innerHTML = "<ul><li>You must select Classical, Funk, Rock and Pop.</li>"+
                             "<li>The Artist field must not be empty.</li>"+
                             "<li>The Release field must be checked.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether the Title field, Genre field, Release fields and Duration field are empty
    if((txtDuration.value == "") && ((radioReleaseNo.checked==false) && (radioReleaseYes.checked==false)) && (selectedOptionValue.value == "Select a Type") && (txtTitle.value == "")){
        txtDuration.style.backgroundColor = "yellow";
        selectedOptionValue.style.backgroundColor = "yellow";
        txtTitle.style.backgroundColor = "yellow";
        message.style.color = "red";
        paragraphRelease.style.color = "yellow";
        message.innerHTML = "<ul><li>The Title field must not be empty.</li>"+
                             "<li>You must select Classical, Funk, Rock and Pop.</li>"+
                             "<li>The Release field must be checked.</li>"+
                             "<li>The Duration field cannot be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether the Artist field, the Title field, the Genre field and the Duration field are empty
    if((txtArtist.value == "" ) && (txtDuration.value == "") && (selectedOptionValue.value == "Select a Type") && (txtTitle.value == "")){
        txtArtist.style.backgroundColor = "yellow";
        selectedOptionValue.style.backgroundColor = "yellow";
        txtTitle.style.backgroundColor = "yellow";
        txtDuration.style.backgroundColor = "yellow";
        message.style.color = "red";
        message.innerHTML = "<ul><li>The Title field must not be empty.</li>"+
                             "<li>You must select Classical, Funk, Rock and Pop.</li>"+
                             "<li>The Artist field must not be empty.</li>"+
                             "<li>The Duration field cannot be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether the Title field, the Artist field, the Release field and the Duration field are empty
    if((txtArtist.value == "" ) && ((radioReleaseNo.checked==false) && (radioReleaseYes.checked==false)) && (txtDuration.value == "") && (txtTitle.value == "")){
        txtArtist.style.backgroundColor = "yellow";
        txtDuration.style.backgroundColor = "yellow";
        txtTitle.style.backgroundColor = "yellow";
        paragraphRelease.style.color = "yellow";
        selectedOptionValue.style.backgroundColor = "white";
        message.style.color = "red";
        message.innerHTML = "<ul><li>The Title field must not be empty.</li>"+
                             "<li>The Artist field must not be empty.</li>"+
                             "<li>The Release field must be checked.</li>"+
                             "<li>The Duration field cannot be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check the Artist field, the Genre field, the Release field and the Duration field are empty
    if((txtArtist.value == "" ) && ((radioReleaseNo.checked==false) && (radioReleaseYes.checked==false)) && (selectedOptionValue.value == "Select a Type") && (txtDuration.value == "")){
        txtArtist.style.backgroundColor = "yellow";
        selectedOptionValue.style.backgroundColor = "yellow";
        txtDuration.style.backgroundColor = "yellow";
        message.style.color = "red";
        paragraphRelease.style.color = "yellow";
        message.innerHTML = "<ul><li>The Artist field must not be empty.</li>"+
                             "<li>You must select Classical, Funk, Rock and Pop.</li>"+
                             "<li>The Release field must be checked.</li>"+
                             "<li>The Duration field cannot be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether the Title field, the Artist field, the Genre field and the Release field are empty
    if((txtArtist.value == "" ) && ((radioReleaseNo.checked==false) && (radioReleaseYes.checked==false)) && (selectedOptionValue.value == "Select a Type") && (txtTitle.value == "")){
        txtArtist.style.backgroundColor = "yellow";
        selectedOptionValue.style.backgroundColor = "yellow";
        txtTitle.style.backgroundColor = "yellow";
        message.style.color = "red";
        paragraphRelease.style.color = "yellow";
        message.innerHTML = "<ul><li>The Title field must not be empty.</li>"+
                             "<li>The Artist field must not be empty.</li>"+
                             "<li>You must select Classical, Funk, Rock and Pop.</li>"+
                             "<li>The Duration field cannot be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether the Title field, Genre field, Duration field and the Description field are empty
    if((txtDescription.value == "") && (txtDuration.value == "") && (selectedOptionValue.value == "Select a Type") && (txtTitle.value == "")){
        txtDescription.style.backgroundColor = "yellow";
        selectedOptionValue.style.backgroundColor = "yellow";
        txtTitle.style.backgroundColor = "yellow";
        txtDuration.style.backgroundColor = "yellow";
        message.style.color = "red";
        message.innerHTML = "<ul><li>The Title field must not be empty.</li>"+
                             "<li>You must select Classical, Funk, Rock and Pop.</li>"+
                             "<li>The Duration field cannot be empty.</li>"+
                             "<li>The Description field must not be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether the Title field, Release field, the Duration field and the Description field are empty
    if((txtDescription.value == "") && ((radioReleaseNo.checked==false) && (radioReleaseYes.checked==false)) && (txtDuration.value == "") && (txtTitle.value == "")){
        txtDescription.style.backgroundColor = "yellow";
        txtDuration.style.backgroundColor = "yellow";
        txtTitle.style.backgroundColor = "yellow";
        paragraphRelease.style.color = "yellow";
        message.style.color = "red";
        message.innerHTML = "<ul><li>The Title field must not be empty.</li>"+
                             "<li>The Release field must be checked.</li>"+
                             "<li>The Duration field cannot be empty.</li>"+
                             "<li>The Description field must not be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether the Genre field, the Release field, the Duration field and the Description field are empty
    if((txtDescription.value == "") && ((radioReleaseNo.checked==false) && (radioReleaseYes.checked==false)) && (selectedOptionValue.value == "Select a Type") && (txtDuration.value == "")){
        txtDescription.style.backgroundColor = "yellow";
        selectedOptionValue.style.backgroundColor = "yellow";
        txtDuration.style.backgroundColor = "yellow";
        paragraphRelease.style.color = "yellow";
        message.style.color = "red";
        message.innerHTML = "<ul><li>You must select Classical, Funk, Rock and Pop.</li>"+
                             "<li>The Release field must be checked.</li>"+
                             "<li>The Duration field cannot be empty.</li>"+
                             "<li>The Description field must not be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether the Title field, the Genre field, the Release field and the Description field are empty
    if((txtDescription.value == "") && ((radioReleaseNo.checked==false) && (radioReleaseYes.checked==false)) && (selectedOptionValue.value == "Select a Type") && (txtTitle.value == "")){
        txtDescription.style.backgroundColor = "yellow";
        selectedOptionValue.style.backgroundColor = "yellow";
        txtTitle.style.backgroundColor = "yellow";
        message.style.color = "red";
        paragraphRelease.style.color = "yellow";
        message.innerHTML = "<ul><li>The Title field must not be empty.</li>"+
                             "<li>You must select Classical, Funk, Rock and Pop.</li>"+
                             "<li>The Release field must be checked.</li>"+
                             "<li>The Description field must not be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether the Genre field, the Artist field, the Duration field and the Description field are empty
    if((txtArtist.value == "" ) && (txtDescription.value == "") && (selectedOptionValue.value == "Select a Type") && (txtDuration.value == "")){
        txtArtist.style.backgroundColor = "yellow";
        selectedOptionValue.style.backgroundColor = "yellow";
        txtDuration.style.backgroundColor = "yellow";
        txtDescription.style.backgroundColor = "yellow";
        message.style.color = "red";
        message.innerHTML = "<ul><li>You must select Classical, Funk, Rock and Pop.</li>"+
                             "<li>The Artist field must not be empty.</li>"+
                             "<li>The Duration field cannot be empty.</li>"+
                             "<li>The Description field must not be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether the Title field, the Genre field, the Artist field and the Description field are empty
    if((txtArtist.value == "" ) && (txtDescription.value == "") && (selectedOptionValue.value == "Select a Type") && (txtTitle.value == "")){
        txtArtist.style.backgroundColor = "yellow";
        selectedOptionValue.style.backgroundColor = "yellow";
        txtTitle.style.backgroundColor  = "yellow";
        message.style.color = "red";
        txtDescription.style.backgroundColor = "yellow";
        message.innerHTML = "<ul><li>The Title field must not be empty.</li>"+
                             "<li>You must select Classical, Funk, Rock and Pop.</li>"+
                             "<li>The Artist field must not be empty.</li>"+
                             "<li>The Description field must not be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether the Title field, the Artist field, the Duration field and the Description field are empty
    if((txtArtist.value == "" ) && (txtDuration.value == "") && (txtDescription.value == "") && (txtTitle.value == "")){
        txtArtist.style.backgroundColor = "yellow";
        txtDescription.style.backgroundColor = "yellow";
        txtTitle.style.backgroundColor = "yellow";
        txtDuration.style.backgroundColor = "yellow";
        message.style.color = "red";
        message.innerHTML = "<ul><li>The Title field must not be empty.</li>"+
                             "<li>The Artist field must not be empty.</li>"+
                             "<li>The Duration field cannot be empty.</li>"+
                             "<li>The Description field must not be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether the Artist field, the Release field, the Duration field and the Description field are empty
    if((txtArtist.value == "" ) && ((radioReleaseNo.checked==false) && (radioReleaseYes.checked==false)) && (txtDescription.value == "") && (txtDuration.value == "")){
        txtArtist.style.backgroundColor = "yellow";
        txtDescription.style.backgroundColor = "yellow";
        txtDuration.style.backgroundColor = "yellow";
        message.style.color = "red";
        paragraphRelease.style.color = "yellow";
        message.innerHTML = "<ul><li>The Artist field must not be empty.</li>"+
                             "<li>The Release field must be checked.</li>"+
                             "<li>The Duration field cannot be empty.</li>"+
                             "<li>The Description field must not be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether the Title field, Artist field, the Release field and the Description field are empty
    if((txtArtist.value == "" ) && ((radioReleaseNo.checked==false) && (radioReleaseYes.checked==false)) && (txtDescription.value == "") && (txtTitle.value == "")){
        txtArtist.style.backgroundColor = "yellow";
        txtDescription.style.backgroundColor = "yellow";
        txtTitle.style.backgroundColor = "yellow";
        message.style.color = "red";
        paragraphRelease.style.color = "yellow";
        message.innerHTML = "<ul><li>The Title field must not be empty.</li>"+
                             "<li>The Artist field must not be empty</li>"+
                             "<li>The Release field must be checked.</li>"+
                             "<li>The Description field must not be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //CHeck whether the Title field, the Artist field, the Release field and the Description field are empty
    if((txtArtist.value == "" ) && ((radioReleaseNo.checked==false) && (radioReleaseYes.checked==false)) && (txtDescription.value == "") && (txtTitle.value == "")){
        txtArtist.style.backgroundColor = "yellow";
        txtDescription.style.backgroundColor = "yellow";
        txtTitle.style.backgroundColor = "yellow";
        message.style.color = "red";
        paragraphRelease.style.color = "yellow";
        message.innerHTML = "<ul><li>The Title field must not be empty.</li>"+
                             "<li>The Artist field must not be empty</li>"+
                             "<li>The Release field must be checked.</li>"+
                             "<li>The Description field must not be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether the Genre field, the Artist field, the Release field and the Description field are empty
    if((txtArtist.value == "" ) && ((radioReleaseNo.checked==false) && (radioReleaseYes.checked==false)) && (selectedOptionValue.value == "Select a Type") && (txtDescription.value == "")){
        txtArtist.style.backgroundColor = "yellow";
        selectedOptionValue.style.backgroundColor = "yellow";
        txtDescription.style.backgroundColor = "yellow";
        message.style.color = "red";
        paragraphRelease.style.color = "yellow";
        message.innerHTML = "<ul><li>You must select Classical, Funk, Rock and Pop.</li>"+
                             "<li>The Artist field must not be empty.</li>"+
                             "<li>The Release field must be checked.</li>"+
                             "<li>The Description field must not be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //*Check whether the Title field, the Genre field, the Artist field, the Release field and the Description
    //field are empty
    if((txtArtist.value == "" ) && ((radioReleaseNo.checked==false) && (radioReleaseYes.checked==false)) && (selectedOptionValue.value == "Select a Type") && (txtTitle.value == "") && (txtDescription.value == "")){
        txtArtist.style.backgroundColor = "yellow";
        selectedOptionValue.style.backgroundColor = "yellow";
        txtTitle.style.backgroundColor = "yellow";
        txtDescription.style.backgroundColor = "yellow";
        paragraphRelease.style.color = "yellow";
        message.style.color = "red";
        message.innerHTML = "<ul><li>The Title field must not be empty.</li>"+
                             "<li>You must select Classical, Funk, Rock and Pop.</li>"+
                             "<li>The Artist field must not be empty.</li>"+
                             "<li>The Release field must be checked.</li>"+
                             "<li>The Description field must not be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether the Title field, the Genre field, the Release field, the Duration field and the Description
    //field are empty
    if((txtDuration.value == "") && ((radioReleaseNo.checked==false) && (radioReleaseYes.checked==false)) && (selectedOptionValue.value == "Select a Type") && (txtTitle.value == "") && (txtDescription.value == "")){
        txtDuration.style.backgroundColor = "yellow";
        selectedOptionValue.style.backgroundColor = "yellow";
        txtTitle.style.backgroundColor = "yellow";
        txtDescription.style.backgroundColor = "yellow";
        message.style.color = "red";
        paragraphRelease.style.color = "yellow";
        message.innerHTML = "<ul><li>The Title field must not be empty.</li>"+
                             "<li>You must select Classical, Funk, Rock and Pop.</li>"+
                             "<li>The Release field must be checked.</li>"+
                             "<li>The Duration field cannot be empty.</li>"+
                             "<li>The Description field must not be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether the Title field, the Genre field, the Artist field, the Duration field and the Description
    //field are empty
    if((txtArtist.value == "" ) && (txtDuration.value == "") && (selectedOptionValue.value == "Select a Type") && (txtTitle.value == "") && (txtDescription.value == "")){
        txtArtist.style.backgroundColor = "yellow";
        selectedOptionValue.style.backgroundColor = "yellow";
        txtTitle.style.backgroundColor = "yellow";
        txtDescription.style.backgroundColor = "yellow";
        txtDuration.style.backgroundColor = "yellow";
        message.style.color = "red";
        message.innerHTML = "<ul><li>The Title field must not be empty.</li>"+
                             "<li>You must select Classical, Funk, Rock and Pop.</li>"+
                             "<li>The Artist field must not be empty.</li>"+
                             "<li>The Duration field cannot be empty.</li>"+
                             "<li>The Description field must not be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether the Title field, The Artist field, the Release field, the Duration field and the Description
    //field are empty
    if((txtArtist.value == "" ) && ((radioReleaseNo.checked==false) && (radioReleaseYes.checked==false)) && (txtDuration.value == "") && (txtTitle.value == "") && (txtDescription.value == "")){
        txtArtist.style.backgroundColor = "yellow";
        txtDuration.style.backgroundColor = "yellow";
        txtTitle.style.backgroundColor = "yellow";
        txtDescription.style.backgroundColor = "yellow";
        paragraphRelease.style.color = "yellow";
        message.style.color = "red";
        message.innerHTML = "<ul><li>The Title field must not be empty.</li>"+
                             "<li>The Artist field must not be empty.</li>"+
                             "<li>The Release field must be checked.</li>"+
                             "<li>The Duration field cannot be empty.</li>"+
                             "<li>The Description field must not be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check whether the Genre field, the Artist field, the Release field, the Duration field and the Description
    //field are empty
    if((txtArtist.value == "" ) && ((radioReleaseNo.checked==false) && (radioReleaseYes.checked==false)) && (selectedOptionValue.value == "Select a Type") && (txtDuration.value == "") && (txtDescription.value == "")){
        txtArtist.style.backgroundColor = "yellow";
        selectedOptionValue.style.backgroundColor = "yellow";
        txtDuration.style.backgroundColor = "yellow";
        txtDescription.style.backgroundColor = "yellow";
        paragraphRelease.style.color = "yellow";
        message.style.color = "red";
        message.innerHTML = "<ul><li>You must select Classical, Funk, Rock and Pop.</li>"+
                             "<li>The Artist field must not be empty.</li>"+
                             "<li>The Release field must be checked.</li>"+
                             "<li>The Duration field cannot be empty.</li>"+
                             "<li>The Description field must not be empty.</li></ul>";
        isToSubmit = false;
    }
    
    //Check the Title field, the Genre field, the Artist field, the Release field and the Duration field are
    //empty
    if((txtArtist.value == "" ) && ((radioReleaseNo.checked==false) && (radioReleaseYes.checked==false)) && (selectedOptionValue.value == "Select a Type") && (txtTitle.value == "") && (txtDuration.value == "") ){
        txtArtist.style.backgroundColor = "yellow";
        selectedOptionValue.style.backgroundColor = "yellow";
        txtTitle.style.backgroundColor = "yellow";
        txtDuration.style.backgroundColor = "yellow";
        paragraphRelease.style.color = "yellow";
        message.style.color = "red";
        message.innerHTML = "<ul><li>The Title field must not be empty.</li>"+
                             "<li>You must select Classical, Funk, Rock and Pop.</li>"+
                             "<li>The Artist field must not be empty.</li>"+
                             "<li>The Release field must be checked.</li>"+
                             "<li>The Duration field cannot be empty.</li></ul>";
        isToSubmit = false;
    }

    if((txtArtist.value == "" ) && ((radioReleaseNo.checked==false) && (radioReleaseYes.checked==false)) && (selectedOptionValue.value == "Select a Type") && (txtTitle.value == "") && (txtDuration.value == "") && (txtDescription.value == "")){
        txtArtist.style.backgroundColor = "yellow";
        selectedOptionValue.style.backgroundColor = "yellow";
        txtTitle.style.backgroundColor = "yellow";
        txtDuration.style.backgroundColor = "yellow";
        paragraphRelease.style.color = "yellow";
        txtDescription.style.backgroundColor = "yellow";
        message.style.color = "red";
        message.innerHTML = "<ul><li>The Title field must not be empty.</li>"+
                             "<li>You must select Classical, Funk, Rock and Pop.</li>"+
                             "<li>The Artist field must not be empty.</li>"+
                             "<li>The Release field must be checked.</li>"+
                             "<li>The Duration field cannot be empty.</li>"+
                             "<li>The Description field must not be empty.</li></ul>";
        isToSubmit = false;
    }

    if(!isToSubmit){
        event.preventDefault();
    }
}