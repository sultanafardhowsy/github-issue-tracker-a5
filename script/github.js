
const allbtn = document.getElementById("all-btn");
const openbtn = document.getElementById("open-btn");
const closedbtn = document.getElementById("closed-btn");
 const issueContainer = document.getElementById("issue-container");
 const opencontainer = document.getElementById("openContainer")
 const closedcontainer = document.getElementById("closedContainer");
 let openIssue = [];
 let closedIssue =[];

// const createElements = (arr) =>{
//     const creatHtml1 = arr.map((el) => `<span class="btn"> ${el} </span>`)
//    const value = creatHtml1.join("")
//    return(value)  
// }

const createElements = (arr) => {
    const creatHtml1 = arr.map((el) => {
        // Simple color mapping
        let color = el === 'bug' ? '#00FFFF' : el =='help wanted'?'#D3D3D3': el =='enhancement'?'#ccccff':'pink';
        
        return `<span class="btn" style="background-color: ${color}; color: black;"> ${el} </span>`;
    });
    return creatHtml1.join("");
};

// date function
const dateupdated =(date) =>{
      var d = '12/12/1955 12:00:00 AM'
d = d.split(' ')[0]
return(d)
}

function calculatecount(){
    total.innerText =  issueContainer.children.length}
    calculatecount()

function showLoading() {
  loading.classList.remove("hidden");
  issueContainer.innerHTML = "";
}
function hideLoading() {
  loading.classList.add("hidden");
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
   showLoading()
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res) => res.json())
    .then((json) => displayIssues(json.data))
    hideLoading()
}
const displayIssues = (issue) =>{
    
    displayAll(issue);
     openIssue = issue.filter(item => item.status === 'open');
   // console.log(openIssue);
 closedIssue = issue.filter(item => item.status === 'closed');
//console.log(closedIssue);
    
}

const displayopen = () =>{
  
    opencontainer.innerHTML="";
    for(let issue of openIssue){
        const btnDiv = document.createElement("div")
    btnDiv.innerHTML = `
    <div id="card-body" class="bg-white  h-[100%] px-4 py-4 rounded-xl shadow-sm border-t-4 border-t-green-500 space-y-4">
    <div class="h-[80%] border-b-3 border-b-gray-400 py-3">
    <div class="flex justify-between w-full">
        <p class="">${issue.status}</p>
         <p class="font-bold w-20 rounded-lg text-center ${issue.priority === 'high'? 'bg-red-300':issue.priority === 'medium'?'bg-yellow-200':'bg-slate-300'}">${issue.priority}</p>
    </div>
    <div class="w-full">
        <h2 class="text-2xl font-bold">${issue.title}</h2>
    <p class="line-clamp-2">${issue.description}</p>
    </div>
          <div>
            ${createElements(issue.labels)}
          </div>
          </div>
      
          <div class="flex justify-between">
          <div>
          <p class="mr-4"><span class="gap-2"># ${issue.id} by </span>${issue.author}</p>
          <p>${dateupdated(issue.createdAt)}</p>
          </div>
          <div>
          <p>Updated At</p>
           <p>${dateupdated(issue.updatedAt)}</p>
           </div>
            </div

  </div>
    `
    issueContainer.appendChild(btnDiv);
    calculatecount()
    
   }
   
}
 const displayClosed = () =>{
    showLoading()
closedcontainer.innerHTML = "";
for(let issue of closedIssue){
   const btnDiv = document.createElement("div")
    btnDiv.innerHTML = `
    <div id="card-body" class="card bg-white  h-[100%] px-4 py-4 rounded-xl shadow-sm border-t-4 border-t-violet-600 space-y-4">
   <div class="h-[100%] border-b-3 border-b-gray-400 py-3">
    <div class="flex justify-between w-full">
        <p class="">${issue.status}</p>
        <p class="font-bold w-20 rounded-lg text-center ${issue.priority === 'high'? 'bg-red-300':issue.priority === 'medium'?'bg-yellow-200':'bg-slate-300'}">${issue.priority}</p>
    </div>
    <div class="w-full">
        <h2 class="text-2xl font-bold">${issue.title}</h2>
    <p class="line-clamp-2">${issue.description}</p>
    </div>
          <div>
            ${createElements(issue.labels)}
          </div>
          </div>
      
          <div class="flex justify-between">
          <div>
          <p class="mr-4"><span class="gap-2"># ${issue.id} by </span>${issue.author}</p>
          <p>${dateupdated(issue.createdAt)}</p>
          </div>
          <div>
          <p>Updated At</p>
           <p>${dateupdated(issue.updatedAt)}</p>
           </div>
            </div

  </div>
    `
    issueContainer.appendChild(btnDiv);  
    calculatecount()
    hideLoading()
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
    <div id="card-body" class="${issue.status === 'open'? 'border-t-4 border-t-green-500' : 'border-t-4 border-t-violet-600'} bg-white  h-[100%] px-4 py-4 rounded-xl shadow-sm space-y-4  space-y-4">
    <div class="h-[80%] border-b-3 border-b-gray-400 py-3">
    <div class="flex justify-between w-full">
        <p class="">${issue.status}</p>
        <p class="font-bold w-20 rounded-lg text-center ${issue.priority === 'high'? 'bg-red-300':issue.priority === 'medium'?'bg-yellow-200':'bg-slate-300'}">${issue.priority}</p>
    </div>
    <div class="w-full">
        <h2 class="text-2xl font-bold">${issue.title}</h2>
    <p class="line-clamp-2">${issue.description}</p>
    </div>
          <div >
            ${createElements(issue.labels)}
        </div>
          </div>
      
          <div class="flex justify-between">
          <div>
          <p class="mr-4"><span class="gap-2"># ${issue.id} by </span>${issue.author}</p>
          <p>${dateupdated(issue.createdAt)}</p>
          </div>
          <div>
          <p>Updated At</p>
           <p>${dateupdated(issue.updatedAt)}</p>
           </div>
            </div

  </div>
    `
  
   // onclick =document.getElementById("my_modal_5").showModal();
    
    

    issueContainer.appendChild(btnDiv);
   
    calculatecount()
   }
   
}


loadissue()



document.getElementById("btn-search").addEventListener('click',() =>{
const input = document.getElementById("search-box");
const searchValue = input.value.trim().toLowerCase();
console.log(searchValue);
fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchValue}`)
.then((res) => res.json())
.then((data) =>{
const searchWord = data.data;
console.log(searchWord);
displayAll(searchWord)
calculatecount()
})

})

