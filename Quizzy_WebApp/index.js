var globalFlag;
firebase.auth().onAuthStateChanged(function(user) {
  	if (user) 
  	{
	       var user = firebase.auth().currentUser;
		   let html = ''
	    if(user != null)
	    {
			var email_id = user.email;

						html = `
			                  <!DOCTYPE html>
			        <html>
			            <head>
				            <title>Home  Page</title>
			                <link rel="shortcut icon" href="quizzy.jpeg" type="image/x-icon">
			                <link rel="stylesheet" href="style2.css" />
			        </head>
			    <body>
			    
			        <br><br>
			            <div id="login_div" class="main-div" style="background-image: url('download1.jpeg');">
			    <p id='user_para'>Welcome User</p>
			        <button onclick="AddQ()" style="border:1px solid #001a33;">Create Quiz</button>
			        <button onclick="viewData()"  style="border:1px solid #001a33;">View User Data</button><br>
			        <button onclick="logOut()"  style="border:1px solid #001a33;">Logout</button>
				</div>

				</body>
				</html>
					
			        `
			document.body.innerHTML = html
			document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
	    }   
	}  else {

	    html = `
	    <title> Quizzy Admin Login </title>
	    <div id="login_div" class="main-div" style="background-image: url('download.jpeg');">
	                 <h3 style="color:white; text-align:center; font-family:verdana;"><b>Login to Admin portal of Quizzy mobile App !!!</b></h3>
	                 <input type="email" placeholder="Email...." id="email_field" />
	                 <input type="password" placeholder="Password...." id="password_field" />

	                 <button onclick="login()">Login to Account</button>
	                 <p style="color:white; text-align:center;"> please Contact to Admin ...<b>if you do not have an account...!</b></p>
	                 
	              </div>`

		document.body.innerHTML = html 
	}
});
// --------------------------------------------------------------------------------------------------------------------
function login()
{
	  var userEmail = document.getElementById("email_field").value;
	  var userPass = document.getElementById("password_field").value;

	  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {

	    var errorCode = error.code;
	  var errorMessage = error.message;

	    window.alert("Error : " + errorMessage);
	     
	  });
  		document.getElementById('email_field').value=''; 
  		 		document.getElementById('password_field').value=''; 
 }

// --------------------------------------------------------------------------------------------------------------------
function AddQ() 
{
    var user = firebase.auth().currentUser;
   // console.log('user is ', user)
    if(user != null)
    {
		        const html= `  
		        
		            <!doctype html public "-//w3c//dtd html 3.2//en">
		<html>
		<head>
		      
		      <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="HandheldFriendly" content="true">
		      
		      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
		      <script src="https://cdn.jsdelivr.net/momentjs/2.14.1/moment.min.js"></script>
		      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
		      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.37/js/bootstrap-datetimepicker.min.js"></script>
		      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.37/css/bootstrap-datetimepicker.min.css">
		      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
		      <meta charset="UTF-8">
		      <meta name="viewport" content="width=device-width, initial-scale=1.0">
		      <meta http-equiv="X-UA-Compatible" content="ie=edge">
		        <title>Welcome to Admin Panel </title>
		        <link rel="shortcut icon" href="quizzy.jpeg" type="image/x-icon">
		        
		      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
		      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css" />
		      <link rel="stylesheet" href="master.css">
		      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
		      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		   </head>

		<body>
		            <div class="form-style-10">
		                            <h1>Quizzy App !! <img src="quizzy.jpeg" alt="quizzy" width="70" height="65"  align=”right”><span>Dashboard for Teacher </span> </h1>                      
		            <form>
		            
		                  <div class="section"><span>1</span>ABOUT QUIZ</div>
		                  <div class="inner-wrap">
		                <label for="">Id for Quiz</label>
		                <input name="name" type="text" value=""  id="name" required="" style="border:1px solid #476b6b;">
		                <br>
		                
		                <label for="">Title of the Quiz</label>
		                <input name="title" type="text" value=""  id="title" required=""  style="border:1px solid #476b6b;" >
		                <br>
		                <label for="">Creator ID</label>
		                <input name="id" type="text" value=""  id="id1" required="" style="border:1px solid #476b6b;">
		                <br>
		                <label for="">creator Name</label>
		                <input name="creator_name" type="text" value=""  id="creator_name" required="" style="border:1px solid #476b6b;">
		                <br>
		               
		                <label for="">Deadline Date(dd/mm/yyyy)</label>
		                <input name="Deadline" type="text" value="" id="deadline" style="border:1px solid #476b6b;" >
		                <br>
		                
		               <label for="">Discription About Quiz</label>
		                <input name="discription" type="text" value=""  id="discription" required="" style="border:1px solid #476b6b;" >
		                <br>
		               
		                <label for="">Difficulty Level</label>
		               <select id="difficulty" name="Difficulty" style="border:1px solid #476b6b;" >
		                  <option value="easy">Easy</option>
		                  <option value="medium">Medium</option>
		                  <option value="hard">Hard	</option>
		               </select> 
		               <br>
		                
		                <label for="">Last Modified Date(dd/mm/yyyy)</label>
		                <input name="Last_modified" type="text" value="" id="last_modified" style="border:1px solid #476b6b;" >
		               <br>
		               
		                <label for="">Session/Chapter (In Integer only)</label>
		                <input name="lesson" type="text" value="" id="lesson" style="border:1px solid #476b6b;" >
		               <br>
		               
		                <label for="">Max Marks (In Integer only)</label>
		                <input name="max_marks" type="text" value="" id="max_marks" style="border:1px solid #476b6b;" >
		                <br>
		              
		    </div>	    
		    
		    <div class="section"><span>2</span>Add Questions</div>
		            <div class="inner-wrap">

		         <div id="Qresult"></div> <br>

		                <label for="">Question Discription</label>
		                <input name="discription" type="text" value=""  id="Qdiscription" required="" style="border:1px solid #001a33;" >
		                <br>
		                
		                <label for="">Marks (In Integer)</label>
		                <input name="marks" type="text" value=""  id="marks" required="" style="border:1px solid #001a33;" >
		               <br>

		               <label for="">Type of Question</label>
		               <select id="type" name="type" style="border:1px solid #001a33;" >
		                  <option value="single-choice">Single Choice</option>
		                  <option value="multi-choice">Multiple Choice</option>
		               </select>
		           <br>
		    
		            </div>
		          
		            <div class="section"><span>3</span>Options</div>
		            <div class="inner-wrap">
		    
		    
		           <div id="result"></div> 
		            <br>
		    
		                <label for="">Option Discription</label>
		                <input name="Odiscription" type="text" value=""  id="Odiscription" required="" style="border:1px solid #001a33;" >
		                
		               <br>
		                 <label for="">Is correct</label>
		                 <select id="iscorrect" name="type" style="border:1px solid #001a33;">
		                  <option value="true">True</option>
		                  <option value="false">False</option>
		                   </select>
		                
		             
		               <br>
		               
		                <label for="">Remarks (If Any...)</label>
		                <input name="remark" type="remark" value="" id="remark" style="border:1px solid #001a33;" > 
		                <br>
		                
		                
		             </div>  

		               <input type=button value='Add_Option' onClick='add_option();'  >
		              
		               <input type=button value='Add_Question' onClick='add_element();' >


		               
		               <br><br>
		               
		               <input type=button value='Remove_Option' onClick='remove_option();' style="border:1px solid #003300;" >
		               
		               <input type=button value='Remove_Question'   onClick='remove_question();' style="border:1px solid #003300;" >
		       
		               <br><br><br>
		               <input type=button value='Submit Quiz' onClick='submitForm();' style="border:1px solid #003300;">
		              <input type=button value='Home Page' onClick='Home();'style="border:1px solid #003300;">
		             <input type=button value='Logout' onClick='logOut();'style="border:1px solid #003300;">
		             
                    <div class="alert1">Option <b>Added</b> Successfully.</div>
                    <div class="alert2">Question <b>Added</b> Successfully.</div>
                    <div class="alert3">Option <b>Removed</b> Successfully.</div>
                    <div class="alert4">Question <b>Removed</b> Successfully.</div>
                    <div class="alert5">You <b>can not Remove</b> the Question as the Question list is empty.</div>
                    <div class="alert6">You <b>can not Remove</b> the Option as the Option list is empty.</div>
		             <br>
		            </div>  
		</body>

		</html> 
		      
		          `
	document.body.innerHTML = html   
    }
     else {
  
	    html = `
	        <title> Quizzy Admin Login </title>
	    
	    <div id="login_div" class="main-div" style="background-image: url('download.jpeg');">
	                 <h3>Login to Admin portal of Quizzy mobile App !!!</h3>
	                 <input type="email" placeholder="Email...." id="email_field" />
	                 <input type="password" placeholder="Password...." id="password_field" />

	                 <button onclick="login()">Login to Account</button>
	              </div> `

		document.body.innerHTML = html 
    }
}

// --------------------------------------------------------------------------------------------------------------------

function Home()
{
	var user = firebase.auth().currentUser;
	    
	   // console.log('user is ', user)
	    if(user != null)
	    {	
	    
		          var email_id = user.email;
		    
				const html = `
		                  <!DOCTYPE html>
			        <html>
			            <head>
				            <title>Home  Page</title>
			                <link rel="shortcut icon" href="quizzy.jpeg" type="image/x-icon">
			                <link rel="stylesheet" href="style2.css" />
			        </head>
			    <body>
			        <br><br>
			            <div id="login_div" class="main-div" style="background-image: url('download1.jpeg');">

			            <p id='user_para'>Welcome User</p>
			        <button onclick="AddQ()" style="border:1px solid #001a33;">Add Quiz</button>
			        <button onclick="viewData()"  style="border:1px solid #001a33;">View User Data</button>
			        <button onclick="logOut()"  style="border:1px solid #001a33;">Logout</button>
			</div>

			</body>
			</html>
				
		        `
			
			document.body.innerHTML = html
		    document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
	}

	else
	 {
	    
	    html = `
	        <title> Quizzy Admin Login </title>
	    
	    <div id="login_div" class="main-div" style="background-image: url('download.jpeg');">
	                 <h3>Login to Admin portal of Quizzy mobile App !!!</h3>
	                 <input type="email" placeholder="Email...." id="email_field" />
	                 <input type="password" placeholder="Password...." id="password_field" />

	                 <button onclick="login()">Login to Account</button>
	              </div> `

		document.body.innerHTML = html 
	}
}
// --------------------------------------------------------------------------------------------------------------------

function viewData() 
{
    
	    var user = firebase.auth().currentUser;
	    
	  //  console.log('user is ', user)
	    if(user != null)
	    {
	    
		        const html= `  
		        
		        <!DOCTYPE html>
		<html>
		<head>
			<title>Displaying Users Data</title>
		        <link rel="shortcut icon" href="quizzy.jpeg" type="image/x-icon">
		          <link rel="stylesheet" href="style2.css" />
		        
		              <script src="jquery-2.1.4.js"></script>
		<script lang="javascript" src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.10.3/xlsx.full.min.js"></script>
		<script lang="javascript" src="https://cdn.jsdelivr.net/npm/file-saver@2.0.2/dist/FileSaver.min.js"></script>

		</head>
		<body>
        <br>
		<h3 id='Error_msg'></h3>
		<div id="login_div" class="main-div" style="background-image: url('download1.jpeg');">
		<p> Enter Quiz_ID :  <input type="text" name="quizid" id='quizid' style="border:1px solid #001a33;"></p>

		<label for="">Select Choice</label>
		               <select id="choice" name="choice" style="border:1px solid #001a33;" >
		                  <option value="attempted">Attempted</option>
		                  <option value="not_attempted">Not Attempted</option>
		                  <option value="total_user">Total Users</option>
		               </select>

		<br><br>
		<p>
		<button onclick="get_Data()" style="border:1px solid #001a33;">GET DATA</button>
		<button onclick="Home()" style="border:1px solid #001a33;">Home Page</button>
		<button onclick="Eexport()" id="button-a1" style="float:none ;">Export To Excel Sheet</button><br>
		<button onclick="logOut()"  style="float:none ;">Logout </button>

		</p>
		</div>

		<button onclick="showQid()"  style="float:none ;">Click me if you don't know your Quiz ID... </button>


		</body>
		</html>

	          `
	   	document.body.innerHTML = html      
	         
	   }
	    
	     else 
	     {
	    
		    html = `
		        <title> Quizzy Admin Login </title>
		    
		    <div id="login_div" class="main-div" style="background-image: url('download.jpeg');">
		                 <h3>Login to Admin portal of Quizzy mobile App !!!</h3>
		                 <input type="email" placeholder="Email...." id="email_field" />
		                 <input type="password" placeholder="Password...." id="password_field" />

		                 <button onclick="login()">Login to Account</button>
		              </div> `

			document.body.innerHTML = html 
	    }
}

// --------------------------------------------------------------------------------------------------------------------

function logOut()
{
	    firebase.auth().signOut()
	    window.location.replace('index.html')
}

// --------------------------------------------------------------------------------------------------------------------

function Eexport()
{

	globalFlag=1;
	get_Data();

}

// --------------------------------------------------------------------------------------------------------------------


var Qdiscription = new Array();
var Qmarks = new Array();
var Qtype = new Array();
var Odiscription=new Array();
var is_correct=new Array();
var remark=new Array();
var count=0;
var qcount=0;
var optionscount=new Array();

// --------------------------------------------------------------------------------------------------------------------

function add_element(){

		qcount=qcount+1;
		document.getElementById("Qresult").innerHTML ="Question No : "+qcount+" ";

		Qdiscription.push(document.getElementById('Qdiscription').value); 
		document.getElementById('Qdiscription').value=''; 
		Qmarks.push(document.getElementById('marks').value); 
		document.getElementById('marks').value=''; 
		Qtype.push(document.getElementById('type').value); 
		document.getElementById('type').value=''; 

		optionscount.push(count);
		count=0;
		document.getElementById("result").innerHTML ="Option NO : "+count+" ";
		
		document.querySelector('.alert2').style.display = 'block';
        setTimeout(function(){
         document.querySelector('.alert2').style.display = 'none';
         },3000);
	    
		
}

// --------------------------------------------------------------------------------------------------------------------

function remove_question(){
  
	  if(qcount>0){
	  
	    qcount--;
	    document.getElementById("Qresult").innerHTML ="Question No : "+qcount+" ";
	    Qdiscription.pop();
	    Qmarks.pop();
	    Qtype.pop();
	    var dummy=optionscount.pop();
	    
	    for(var i=0;i<dummy;i++){
	        remove_option();
	     }
	    count=0;
	    document.getElementById("result").innerHTML ="Option NO : "+count+" ";
	    
	    
	     document.querySelector('.alert4').style.display = 'block';
        setTimeout(function(){
         document.querySelector('.alert4').style.display = 'none';
         },3000);
	    
	    
	     }
	     else{
	     
	     document.querySelector('.alert5').style.display = 'block';
        setTimeout(function(){
         document.querySelector('.alert5').style.display = 'none';
         },3000);
	     
	     }
	     
	     
	    
	     
  }

// --------------------------------------------------------------------------------------------------------------------

function add_option(){

		count=count+1;

		document.getElementById("result").innerHTML ="Option NO : "+count+" ";
		Odiscription.push(document.getElementById('Odiscription').value); 
		document.getElementById('Odiscription').value=''; 


		is_correct.push(document.getElementById('iscorrect').value); 
		document.getElementById('iscorrect').value=''; 


		remark.push(document.getElementById('remark').value); 
		document.getElementById('remark').value='';
		
        document.querySelector('.alert1').style.display = 'block';
        setTimeout(function(){
         document.querySelector('.alert1').style.display = 'none';
         },3000);
		
}

// --------------------------------------------------------------------------------------------------------------------

function remove_option(){

		if(count > 0){
		    count--;
		    document.getElementById("result").innerHTML ="Option NO : "+count+" ";
		    Odiscription.pop();
		    is_correct.pop();
		    remark.pop();
		    
		    document.querySelector('.alert3').style.display = 'block';
        setTimeout(function(){
         document.querySelector('.alert3').style.display = 'none';
         },3000);
		    
		    }
		    
		
	    else{
	                document.querySelector('.alert6').style.display = 'block';
                     setTimeout(function(){
                    document.querySelector('.alert6').style.display = 'none';
                    },3000);
             }
		    
		    
		    
}
// --------------------------------------------------------------------------------------------------------------------

function submitForm()
{
 
 var user = firebase.auth().currentUser;
    
   // console.log('user is ', user)
    if(user != null) 
    {
    
	          var email_id = user.email;
	    
	 
	 
	 
		  var name=document.getElementById('name').value;
		  var creator_id = getInputVal('id1');
		  var creator_name = getInputVal('creator_name');
		  var description = getInputVal('discription');
		  var deadline = getInputVal('deadline');
		  var difficulty = getInputVal('difficulty');
		  var last_modified = getInputVal('last_modified');
		  var lesson = getInputVal('lesson');
		  var max_marks = getInputVal('max_marks');
		  var title=getInputVal('title');
		  var mail=email_id;
		  var length=Qdiscription.length;
		  

		
		function getInputVal(id){
			  return document.getElementById(id).value;

		}
	  
	  
		 writeUserData(name,creator_id, creator_name,description, deadline, difficulty,last_modified,lesson,max_marks,title,mail);
		 writeUserData1(name,Qdiscription, Qmarks, Qtype, Odiscription, is_correct,remark,length,optionscount);
	 
	 
		 document.getElementById('name').value=''; 
		 document.getElementById('title').value=''; 
		 document.getElementById('id1').value=''; 
		 document.getElementById('creator_name').value=''; 
		 document.getElementById('deadline').value=''; 
		 document.getElementById('discription').value='';
		 document.getElementById('difficulty').value=''; 
		 document.getElementById('last_modified').value='';
		 document.getElementById('lesson').value='';  
		 document.getElementById('max_marks').value='';    
		 
		 
		 alert("You have Successfully Submitted the Quiz");
	}

}
// --------------------------------------------------------------------------------------------------------------------

function writeUserData(name,creator_id, creator_name, description, deadline, difficulty,last_modified,lesson,max_marks,title,mail) {
 
	     firebase.database().ref('/quizzes/' + name+'/').set({
	    
	    ['creator-id']:creator_id,
	    ['creator-name']:creator_name,
	    deadline:deadline,
	    description:description,
	    difficulty:difficulty,
	    ['last-modified']:last_modified,
	    lesson:Number(lesson),
	    ['max-marks']:Number(max_marks),
	    title:title,
	    mail:mail
	    
	  });
}

// --------------------------------------------------------------------------------------------------------------------

function writeUserData1(name,Qdiscription, Qmarks, Qtype, Odiscription, is_correct,remark,length,optionscount) {
  
	   var i;
	  
	  for(i=0;i<length;i++){
	         var dis=Qdiscription[i];
	        var mar=Qmarks[i];
	        var typ=Qtype[i];
	        var dummy1=i+1;
	    firebase.database().ref('/quizzes/' + name +'/' + 'questions/'+'q'+dummy1 +'/').set({
	    
	    description:dis,
	    marks:Number(mar),
	    type:typ
	  });
	  
	  writeoption(name,Odiscription, is_correct,remark,length,dummy1,optionscount)
	    }

 }

// --------------------------------------------------------------------------------------------------------------------
  var xx=0;
// --------------------------------------------------------------------------------------------------------------------
function writeoption(name,Odiscription, is_correct,remark,length,j,optionscount) {
  
	  var i;
	  for(i=0;i<optionscount[j-1];i++,xx++){
	  
			  var od=Odiscription[xx];
			  var is=is_correct[xx];
			  var rem=remark[xx];
			  
			  if(rem==""){
			  rem="none";
			  }
			  
			  var x;
			  if(is=="true"){
			    x=1;
			  }
			  else{
			    x=0;
			  }
			  
			  
			  var dummy2=i+1;
			  firebase.database().ref('/quizzes/' + name +'/'+'questions/'+ 'q'+j +'/' + 'options/'+ 'o'+dummy2 +'/').set({
			    
			    description:od,
			    ['is-correct']:Boolean(x),
			    remarks:rem  
			  });
			}
	}

// --------------------------------------------------------------------------------------------------------------------

var database = firebase.database();
var myFlag=0;
var name='users';
var name2;
var Zattemp_name=new Array();
var Zattemp_email=new Array();
var Want_attemp_name=new Array();
var Want_attemp_Email=new Array();
var Want_attemp_lesson=new Array();
var Want_attemp_percentage=new Array();
var Want_attemp_quizId=new Array();
var Want_attemp_score=new Array();
var total_Email=new Array();
var total_Name=new Array();
var ws_data;
var myQidlist=new Array();
// --------------------------------------------------------------------------------------------------------------------
function showQid()
{	
	var user = firebase.auth().currentUser;
	var email_id = user.email;
	var ref2=database.ref('/');
	ref2.on('value', gotData2, errData2);

	function gotData2(data) 
	{
	        var quizData2 = data.val();
	        var keyss = Object.keys(quizData2);
	    if(String(keyss[0])=='quizzes')
	    {
	           	 var ref1=database.ref('/quizzes');
	             ref1.on('value', gotData1, errData1);
	        function gotData1(data)
	         {  
			             var quizData1 = data.val();
				         var keys = Object.keys(quizData1);
				         console.log(keys);
			             for(var k=0;k<keys.length;k++)
			             {
			    			var x=keys[k];
			             	if( String(quizData1[x].mail)==String(email_id))
			             	{  myQidlist.push(x); }
			         	}
			    		console.log(myQidlist);
			    
					    if(myQidlist){
					 document.getElementById('Error_msg').innerHTML='Your Account Contains [ '+myQidlist +' ] Quiz IDs.'; }
					    else{
					   document.getElementById('Error_msg').innerHTML='No quiz at present in your Account...!';  }
	    
	    	 }
	      function errData1(err)
	        {
			console.log('Error!');
			console.log(err);     
	 		}   
	                     
	    }
	    else{ document.getElementById('Error_msg').innerHTML='No quiz at present in your Account...!'; }
	    
	}

	function errData2(err)
    {	console.log('Error!');
		console.log(err);
	}

}

// --------------------------------------------------------------------------------------------------------------------
function get_Data()
{

	  name2=document.getElementById('quizid').value;
	  var ref2=database.ref('/');
	  ref2.on('value', gotData2, errData2);
  
  	function gotData2(data)
	{
			var quizData2 = data.val();
			var keyss = Object.keys(quizData2);
			console.log(keyss);
	    if(String(keyss[0])=='quizzes')
	    {
		    	var ref1=database.ref('/quizzes');
				ref1.on('value', gotData1, errData1);

			function gotData1(data) 
			{

				var quizData1 = data.val();
				var keys = Object.keys(quizData1);
		   			if(keys.length>0)
		   			{
		    			for(var i=0;i<keys.length;i++)
		    			{
							if(String(keys[i])==String(name2))
							{
								var ref = database.ref('/'+name);
								ref.on('value', gotData, errData);
							}
						}
			

					document.getElementById('Error_msg').innerHTML='ERROR : Quiz ID is not matched.Try another one ...!';
					}	

					else {
						document.getElementById('Error_msg').innerHTML='No quiz at present...!';
					}
			}
	   }
	   else{
	    document.getElementById('Error_msg').innerHTML='No quiz at present...!';
	    }
	}

function errData2(err){

		console.log('Error!');
		console.log(err);
	}


function errData1(err){

		console.log('Error!');
		console.log(err);
	}


var choice=document.getElementById('choice').value;
document.getElementById('choice').value='';
document.getElementById('quizid').value='';



	function gotData(data) 
	{
	 
	 	var dummy=0;
		var quizData = data.val();
		//console.log(quizData);       // Total Content Of Users....
		 var keys = Object.keys(quizData);
		 for (var i = 0; i < keys.length; i++) 
		 {	 var k1 = keys[i];
			  total_Email.push(quizData[k1].email);
			  total_Name.push(quizData[k1].name);
			  if(quizData[k1].attempted)
			  {
					var kk = Object.keys(quizData[k1].attempted);
					for(var j=0;j<kk.length;j++)
					{
						var k2=kk[j];
						if(k2==String(name2))
						{
							dummy=1;
							Want_attemp_name.push(quizData[k1].name);
							Want_attemp_Email.push(quizData[k1].email);
							Want_attemp_lesson.push(quizData[k1].attempted[k2].lesson);
							Want_attemp_percentage.push(quizData[k1].attempted[k2].percentage);
							Want_attemp_quizId.push(name2);	
							Want_attemp_score.push(quizData[k1].attempted[k2].score);
						}
					}
					
					if(dummy!=1){
					
					    Zattemp_name.push(quizData[k1].name);
					    Zattemp_email.push(quizData[k1].email);
					}
					
			}
			else{
				Zattemp_name.push(quizData[k1].name);
				Zattemp_email.push(quizData[k1].email);
			}
		}
		
		if(choice=='attempted' && globalFlag!=1){Attempted();}
		if (choice=='not_attempted' && globalFlag!=1){not_Attempted();}
		if(choice=='total_user' && globalFlag!=1){total_Users();}
		if(choice=='attempted' && globalFlag==1){EAttempted();}
		if (choice=='not_attempted' && globalFlag==1){Enot_Attempted();}
	    if(choice=='total_user' && globalFlag==1){Etotal_Users();}
	}

	function errData(err){
		console.log('Error!');
		console.log(err);
	}


function Attempted()
{		// console.log(Want_attemp_name);
		// console.log(Want_attemp_Email);
		// console.log(Want_attemp_quizId);
		// console.log(Want_attemp_lesson);
		// console.log(Want_attemp_score);
		// console.log(Want_attemp_percentage);
	if(Want_attemp_name.length>0)
	{	//document.write('<p>Total :' +Want_attemp_name.length);
		document.write('<style>table, th, td { border: 1px solid black; border-collapse: collapse;}th, td {padding: 5px;}th {text-align: left;}</style>');
		document.write('<br><br><table>');
		document.write('<h1>List Of Students Who Attempted the Quiz....!</h1>' );
		document.write('Total Count :'+Want_attemp_name.length);
		document.write('<tr bgcolor="#856f6f"><th> Name </th> <th> Email </th> <th> QuizID </th> <th> Lesson </th> <th> Score </th> <th> percentage </th></tr>');
		for(var runner=0; runner<Want_attemp_name.length;runner++ ){
			document.write('<tr><td>'+Want_attemp_name[runner]+'</td>'+'<td>'+Want_attemp_Email[runner]+'</td>'+'<td>'+Want_attemp_quizId[runner]+'</td>'+'<td>'+Want_attemp_lesson[runner]+'</td>'+'<td>'+Want_attemp_score[runner]+'</td>'+'<td>'+Want_attemp_percentage[runner]+'</td></tr>');
		}
		document.write('</table>');

		var Sname=Want_attemp_name;
		var Sscore=Want_attemp_score;
		var masterTable =new Array(Sname.length);
		for(var i=0;i<Sname.length;i++){

			masterTable[i]=new Array(2);
			masterTable[i][0]=Sname[i];
			masterTable[i][1]=Sscore[i];
		}

		masterTable.sort(compareSecondColumn);
    	function compareSecondColumn(a, b) {
    		if (a[1] === b[1]) {return 0;}	else { return (a[1] < b[1]) ? 1 : -1; }
		}
	//console.log(masterTable);
		document.write('<br><br><h1>Sorted table in Decending Order</h1>');
		document.write('<style>table, th, td { border: 1px solid black; border-collapse: collapse;}th, td {padding: 5px;}th {text-align: left;}</style>');
		document.write('<br><br><table>');
		document.write('<tr bgcolor="#856f6f" ><th> Name </th> <th> Score </th></tr>');
		for(var runner1=0; runner1<masterTable.length;runner1++ ){
			document.write('<tr><td>'+masterTable[runner1][0]+'</td>'+'<td>'+masterTable[runner1][1]+'</td></tr>');	
		}
		document.write('</table>');
	}

	else{
		document.write('<style>table, th, td { border: 1px solid black; border-collapse: collapse;}th, td {padding: 5px;}th {text-align: left;}</style>');
		document.write('<br><br><table>');
		document.write('<h1>List Of Students Who Attempted the Quiz....!</h1>' );
		document.write('Total Count :'+Want_attemp_name.length);
		document.write('<tr bgcolor="#856f6f"><th> Name </th> <th> Email </th> <th> QuizID </th> <th> Lesson </th> <th> Score </th> <th> percentage </th></tr>');
		document.write('</table>');
	}
	
}

function not_Attempted()
{		// console.log(Zattemp_name);
		// console.log(Zattemp_email);
		if(Zattemp_name.length>0)
		{
			document.write('<style>table, th, td { border: 1px solid black; border-collapse: collapse;}th, td {padding: 5px;}th {text-align: left;}</style>');
			document.write('<br><br><table>');
			document.write('<h1>List Of Students Who has <i>Not Attempted</i> the Quiz...!</h1>' );
			document.write('<tr bgcolor="#856f6f"><th> Name </th> <th> Email </th></tr>');
	        document.write('Total Count :'+Zattemp_name.length);
			for(var runner=0; runner<Zattemp_name.length;runner++ ){
				document.write('<tr><td>'+Zattemp_name[runner]+'</td>'+'<td>'+Zattemp_email[runner]+'</td></tr>');
			}
			document.write('</table>');
		}
		else 
		{
		document.write('<style>table, th, td { border: 1px solid black; border-collapse: collapse;}th, td {padding: 5px;}th {text-align: left;}</style>');
		document.write('<br><br><table>');
		document.write('<h1>List Of Students Who has <i>Not Attempted</i> the Quiz...!</h1>' );
		document.write('Total Count :'+Zattemp_name.length);
		document.write('<tr  bgcolor="#856f6f"><th> Name </th> <th> Email </th></tr>');	
		document.write('</table>');
		}
}

function total_Users()
{		// console.log(total_Name);
		// console.log(total_Email);
	if(total_Name.length>0)
	{
		document.write('<style>table, th, td { border: 1px solid black; border-collapse: collapse;}th, td {padding: 5px;}th {text-align: left;}</style>');
		document.write('<br><br><table>');
		document.write('<h1>List of Total Users...!</h1>' );
		document.write('Total Count :'+total_Name.length);
		document.write('<tr bgcolor="#856f6f"><th> Name </th> <th> Email </th></tr>');
		for(var runner=0; runner<total_Name.length;runner++ ){
			document.write('<tr><td>'+total_Name[runner]+'</td>'+'<td>'+total_Email[runner]+'</td></tr>');
		}
		document.write('</table>');
	}
	else {
		document.write('<style>table, th, td { border: 1px solid black; border-collapse: collapse;}th, td {padding: 5px;}th {text-align: left;}</style>');
		document.write('<br><br><table>');
		document.write('<h1>List of Total Users...!</h1>' );
		document.write('Total Count :'+total_Name.length);
		document.write('<tr  bgcolor="#856f6f"><th> Name </th> <th> Email </th></tr>');
		document.write('</table>');
	}
}

function Etotal_Users()
{	// console.log(total_Email);
       ws_data =new Array(total_Name.length+1);
       ws_data[0]=new Array(2);
       ws_data[0][0]='Name';
	   ws_data[0][1]='Email';
	   var i,j;
	   for(i=1,j=0;i<(total_Name.length+1)&&j<total_Name.length;i++,j++){
         ws_data[i]=new Array(2);
		 ws_data[i][0]=total_Name[j];
		 ws_data[i][1]=total_Email[j];	
		}//	console.log(ws_data);
	
	if(total_Name.length>0)
	{
		
   
		   const html=`
		   
		<html>
		<head>
		<script src="jquery-2.1.4.js"></script>
		<script lang="javascript" src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.10.3/xlsx.full.min.js"></script>
		<script lang="javascript" src="https://cdn.jsdelivr.net/npm/file-saver@2.0.2/dist/FileSaver.min.js"></script>
		<link rel="shortcut icon" href="quizzy.jpeg" type="image/x-icon">
		<link rel="stylesheet" href="style2.css" />
		<title>Export to Excel</title>
		</head>
		<body>
		<div id="login_div" class="main-div" style="background-image: url('download1.jpeg');">
		<button id="button-a" style="border:1px solid #001a33;">Click me to download Excel sheet ...(For total users)</button>
		<button onclick="Home()" style="border:1px solid #001a33;">Home Page</button>
		<button onclick="logOut()"  style="float:none ;">Logout </button>

		</div>
		</body>
		</html>
		   
		   `
   
			document.body.innerHTML = html      
			//console.log(ws_data);
		    var wb = XLSX.utils.book_new();
		    wb.Props = {
		                Title: "By SheetJS",
		                Subject: "Total Users",
		                Author: "Sanket"
		               };
		       wb.SheetNames.push("Test Sheet");
			   var ws = XLSX.utils.aoa_to_sheet(ws_data);
		        wb.Sheets["Test Sheet"] = ws;
		        var wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});
		        function s2ab(s) {
						var buf = new ArrayBuffer(s.length);
		                var view = new Uint8Array(buf);
		                for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
		                return buf;   }
		        $("#button-a").click(function(){
		                saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'Total_users.xlsx');
		        });
	}
	else {
		document.getElementById('Error_msg').innerHTML='Sorry there is no any user for your choice..!';
	}
}
     		
function EAttempted()
{

		console.log('im In Etotal_Users()');
		// console.log(total_Email);
        ws_data =new Array(Want_attemp_name.length+1);
        ws_data[0]=new Array(6);
        ws_data[0][0]='Name';
		ws_data[0][1]='Email';
		ws_data[0][2]='Quiz_ID';
		ws_data[0][3]='Lesson';		
	    ws_data[0][4]='Score';		
		ws_data[0][5]='Percentage';
		var i,j;
		for(i=1,j=0;i<(Want_attemp_name.length+1)&&j<Want_attemp_name.length;i++,j++){
			ws_data[i]=new Array(6);
			ws_data[i][0]=Want_attemp_name[j];
			ws_data[i][1]=Want_attemp_Email[j];
			ws_data[i][2]=Want_attemp_quizId[j];
			ws_data[i][3]=Want_attemp_lesson[j];			
			ws_data[i][4]=Want_attemp_score[j];			
			ws_data[i][5]=Want_attemp_percentage[j];			
			}

	if(Want_attemp_name.length>0)
	{
		
   
		   const html=`
		   
		<html>
		<head>
		<script src="jquery-2.1.4.js"></script>
		<script lang="javascript" src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.10.3/xlsx.full.min.js"></script>
		<script lang="javascript" src="https://cdn.jsdelivr.net/npm/file-saver@2.0.2/dist/FileSaver.min.js"></script>
		<link rel="shortcut icon" href="quizzy.jpeg" type="image/x-icon">
		<link rel="stylesheet" href="style2.css" />
		<title>Export to Excel</title>
		</head>
		<body>
		<div id="login_div" class="main-div" style="background-image: url('download1.jpeg');">
		<button id="button-a" style="border:1px solid #001a33;">Click me to download Excel sheet ...(For Quiz Attempted users)</button>
		<button onclick="Home()" style="border:1px solid #001a33;">Home Page</button>
		<button onclick="logOut()"  style="float:none ;">Logout </button>

		</div>
		</body>
		</html>
		   
		   `
   
		document.body.innerHTML = html      
		//console.log(ws_data);
		var wb = XLSX.utils.book_new();
		wb.Props = {Title: "By SheetJS",
		            Subject: "Total Users",
		            Author: "Sanket"
		           };
		wb.SheetNames.push("Test Sheet");
		var ws = XLSX.utils.aoa_to_sheet(ws_data);
		wb.Sheets["Test Sheet"] = ws;
		var wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});
		function s2ab(s) {
			  	 var buf = new ArrayBuffer(s.length);
			     var view = new Uint8Array(buf);
			     for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
			     return buf;	}
		        $("#button-a").click(function(){
		                saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'Quiz_Attempted_Users.xlsx');
		        });
	}
	else {
		document.getElementById('Error_msg').innerHTML='Sorry there is no any user for your choice..!';	
	}
}
      
function Enot_Attempted()
{		// console.log(Zattemp_name);
		// console.log(Zattemp_email);
        ws_data =new Array(Want_attemp_name.length+1);
        ws_data[0]=new Array(2);
        ws_data[0][0]='Name';
		ws_data[0][1]='Email';
		var i,j;
		for(i=1,j=0;i<(Zattemp_name.length+1)&&j<Zattemp_name.length;i++,j++){

			ws_data[i]=new Array(2);
			ws_data[i][0]=Zattemp_name[j];
			ws_data[i][1]=Zattemp_email[j];			
			}
		//console.log(ws_data);
	if(Zattemp_name.length>0)
	{
		const html=`
		   
		<html>
		<head>
		<script src="jquery-2.1.4.js"></script>
		<script lang="javascript" src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.10.3/xlsx.full.min.js"></script>
		<script lang="javascript" src="https://cdn.jsdelivr.net/npm/file-saver@2.0.2/dist/FileSaver.min.js"></script>
		<link rel="shortcut icon" href="quizzy.jpeg" type="image/x-icon">
		<link rel="stylesheet" href="style2.css" />
		<title>Export to Excel</title>
		</head>
		<body>
		<div id="login_div" class="main-div" style="background-image: url('download1.jpeg');">
		<button id="button-a" style="border:1px solid #001a33;">Click me to download Excel sheet ...(For Quiz Not Attempted users)</button>
		<button onclick="Home()" style="border:1px solid #001a33;">Home Page</button>
		<button onclick="logOut()"  style="float:none ;">Logout </button>

		</div>
		</body>
		</html>
		   
		   `
		   
		document.body.innerHTML = html      
		//console.log(ws_data);
		var wb = XLSX.utils.book_new();
		        wb.Props = {
		                Title: "By SheetJS",
		                Subject: "Total Users",
		                Author: "Sanket"
		              };
		        
		        wb.SheetNames.push("Test Sheet");
		        var ws = XLSX.utils.aoa_to_sheet(ws_data);
		        wb.Sheets["Test Sheet"] = ws;
		        var wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});
		        function s2ab(s) {
		                var buf = new ArrayBuffer(s.length);
		                var view = new Uint8Array(buf);
		                for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
		                return buf;
		        }
		        $("#button-a").click(function(){
		                saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'Quiz_Not_Attempted_Users.xlsx');
		        });
	}
	else {
		document.getElementById('Error_msg').innerHTML='Sorry there is no any user for your choice..!';
	}
}
   
}


