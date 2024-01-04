var allStudent = []
var editedIndex = 0;

function registerStudent() {
    var myStudent = {
        studentFname : firstName.value,
        studentSname : secondName.value,
        studentEmail : myEmail.value,
        studentPassword : passWord.value
    }
    if(firstName.value == "" && secondName.value =="" && myEmail.value =="" && passWord.value == ""){
      alert("complete it")
    } else{
        allStudent.push(myStudent)
       console.log(allStudent)
    }
    firstName.value = "";
    secondName.value = "";
    myEmail.value = "";
    passWord.value= "";

    displayStudent()
}

function displayStudent(){
    // display.innerHTML = "";
    // for (let index = 0; index < allStudent.length; index++) {
        
    //     display.innerHTML += `
    //     <h1>${allStudent[index].studentFname}</h1>
    //     <h1>${allStudent[index].studentSname}</h1>
    //     <h1>${allStudent[index].studentEmail}</h1>
    //     <h1>${allStudent[index].studentPassword}</h1>
        
    //     <button onclick="deleteBtn(${index})">Delete</button>
    //     <button onclick="editBtn(${index})">Edit</button>` 
        
    // }
    display.innerHTML = "";
    display.innerHTML += `
    <table class= "table table-striped" id="myTable">
        <tr>
            <th>S/N</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
        </tr>`
        for (let index = 0; index < allStudent.length; index++) {

           myTable.innerHTML += `
           <tr>
            <td>${index}</td>
            <td>${allStudent[index].studentFname}</td>
            <td>${allStudent[index].studentSname}</td>
            <td>${allStudent[index].studentEmail}</td>
           

            <td>
               <button onclick="deleteBtn(${index})" class="btn btn-danger py-2 mr-2">Delete</button>

              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editBtn(${index})">Edit</button>
            </td>

           </tr>
           `
            display.innerHTML += `</table>`
        }
    
    // </table>
    
}

function deleteBtn(index){
    
    allStudent.splice(index, 1)
    displayStudent()
}

function editBtn(index){
    editDiv.style.display = "block";
    var editedIndex = index;
   
}

function updateBtn(){
    var reponse1 = editedFname.value;
    var response2 = editedSname.value;
    var response3 = editedEmail.value;
    var response4 = editedPassword.value;

    var replacement = {
        studentFname : reponse1,
        studentSname : response2,
        studentEmail : response3,
        studentPassword : response4
    }
    allStudent.splice(editedIndex,1,replacement)
    displayStudent()
    editDiv.style.display = "none"
}