
var count =0
const taskArray = [];




function addTask(params) {
    var inputtext = document.getElementById("inputText");
    var items = document.getElementsByTagName("li");
    var list1 = document.createElement("LI");
    var checkbox = document.createElement("INPUT");
    var deleteButton = document.createElement("BUTTON");

    checkbox.addEventListener('change', function() {
        const id = parseInt(list1.getAttribute("data-id"));
        const index = taskArray.findIndex(t => t.id === id);
        if (index != -1) {
          taskArray[index].completed = this.checked;
          console.log(taskArray);
        } else {
          console.log("Checkbox is not checked..");
        }
        if (this.checked) {
            list1.style.textDecoration = "line-through";
        }
        else{
            list1.style.textDecoration = "none"
        }
      });
    deleteButton.addEventListener("click", clickTest);
    
    
    
    function clickTest(params) {
        list1.remove();

        const id = parseInt(list1.getAttribute("data-id"));
        const index = taskArray.findIndex(t => t.id === id);
        if (index > -1) {
            taskArray.splice(index, 1);
        }

        console.log(taskArray);
    }
    checkbox.setAttribute("type","checkbox");
    var text = document.createTextNode(inputtext.value);
    var text2 = document.createTextNode("Delete");
    if (inputtext.value == "") {
        return;
        
    }
    count += 1;
    const task = {
        id: Date.now(),           
        text: inputtext.value,    
        completed: false         
      };
    taskArray.push(task);
    console.log(taskArray);
    deleteButton.appendChild(text2);
    //deleteButton.addEventListener("click",console.log("click"),false);
    list1.setAttribute('data-id',task.id);
    list1.appendChild(checkbox);
    list1.appendChild(text);
    list1.appendChild(deleteButton);
    lowerdiv = document.getElementById("lowerDiv")
    //document.getElementById("lowerDiv").appendChild(list1);
    lowerdiv.insertBefore(list1,lowerdiv.firstChild);

    inputtext.value ="";

}


