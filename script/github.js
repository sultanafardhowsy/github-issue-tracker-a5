
const allbtn = document.getElementById("all-btn");
const openbtn = document.getElementById("open-btn");
const closedbtn = document.getElementById("closed-btn");
 const issueContainer = document.getElementById("issue-container");
 const opencontainer = document.getElementById("openContainer")
 const closedcontainer = document.getElementById("closedContainer");
 let openIssue = [];
 let closedIssue =[];

const createElements = (arr) =>{
    const creatHtml1 = arr.map((el) => `<span class="btn"> ${el} </span>`)
    return(creatHtml1.join(""));
    
}


function activeButton(id){
    console.log(id);
    //remove btn-primary from all
         openbtn.classList.remove("btn-primary");
          closedbtn.classList.remove("btn-primary");
          allbtn.classList.remove("btn-primary");
    
    //add btn-outline to all
        openbtn.classList.add("btn-outline");
          closedbtn.classList.add("btn-outline");
          allbtn.classList.add("btn-outline");
         
          //adds btn-primary to selected button
    const selected = document.getElementById(id)
    selected.classList.remove('btn-outline')
    selected.classList.add('btn-primary')
if(id == 'all-btn'){
    loadissue()
}else if(id=='open-btn'){
    issueContainer.innerHTML = "";
displayopen()
}
else if(id='closed-btn') {
issueContainer.innerHTML = "";
    displayClosed()
}
    
    
}



const loadissue = () => {
   // manageSpinner(true)
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res) => res.json())
    .then((json) => displayIssues(json.data))
}
const displayIssues = (issue) =>{
    
    displayAll(issue);
     openIssue = issue.filter(item => item.status === 'open');
    console.log(openIssue);
 closedIssue = issue.filter(item => item.status === 'closed');
console.log(closedIssue);
    
}

const displayopen = () =>{
    opencontainer.innerHTML="";
    for(let issue of openIssue){
        const btnDiv = document.createElement("div")
    btnDiv.innerHTML = `
    <div id="card-body" class="bg-white  h-[100%] px-4 py-4 rounded-xl shadow-sm space-y-4">
    <div class="flex justify-between">
        <p class="">${issue.status}</p>
        <p class="font-bold">${issue.priority}</p>
    </div>
    <div>
        <h2 class="text-2xl font-bold">${issue.title}</h2>
    <p class="line-clamp-2">${issue.description}</p>
    </div>
          <div>
            ${createElements(issue.labels)}
          </div>
          <hr style="height: 1px; background-color:gray; border: none;">
          <p class="mr-4"><span class="gap-2"># ${issue.id} by </span>${issue.author}</p>
          <p>2024-01-15</p>

  </div>
    `
    issueContainer.appendChild(btnDiv);
    
   }
   
}
 const displayClosed = () =>{
closedcontainer.innerHTML = "";
for(let issue of closedIssue){
   const btnDiv = document.createElement("div")
    btnDiv.innerHTML = `
    <div id="card-body" class="bg-white  h-[100%] px-4 py-4 rounded-xl shadow-sm space-y-4">
    <div class="flex justify-between">
        <p class="">${issue.status}</p>
        <p class="font-bold">${issue.priority}</p>
    </div>
    <div>
        <h2 class="text-2xl font-bold">${issue.title}</h2>
    <p class="line-clamp-2">${issue.description}</p>
    </div>
          <div>
            ${createElements(issue.labels)}
          </div>
          <hr style="height: 1px; background-color:gray; border: none;">
          <p class="mr-4"><span class="gap-2"># ${issue.id} by </span>${issue.author}</p>
          <p>2024-01-15</p>

  </div>
    `
    issueContainer.appendChild(btnDiv);  
}
 }
    



const displayAll = (issues) =>{
//    const issueContainer = document.getElementById("issue-container");
   issueContainer.innerHTML = "";

   for(let issue of issues){

//      <!-- "id": 1,
// "title": "Fix navigation menu on mobile devices",
// "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
// "status": "open",
// "labels": [
// "bug",
// "help wanted"
// ],
// "priority": "high",
// "author": "john_doe",
// "assignee": "jane_smith",
// "createdAt": "2024-01-15T10:30:00Z",
// "updatedAt": "2024-01-15T10:30:00Z" -->
    
    const btnDiv = document.createElement("div")
    btnDiv.innerHTML = `
    <div id="card-body" class="bg-white  h-[100%] px-4 py-4 rounded-xl shadow-sm space-y-4">
    <div class="flex justify-between">
        <p class="">${issue.status}</p>
        <p class="font-bold">${issue.priority}</p>
    </div>
    <div>
        <h2 class="text-2xl font-bold">${issue.title}</h2>
    <p class="line-clamp-2">${issue.description}</p>
    </div>
          <div>
            ${createElements(issue.labels)}
          </div>
          <hr style="height: 1px; background-color:gray; border: none;">
          <p class="mr-4"><span class="gap-2"># ${issue.id} by </span>${issue.author}</p>
          <p>24</p>

  </div>
    `
    issueContainer.appendChild(btnDiv);
    
   }
   
}


loadissue()


