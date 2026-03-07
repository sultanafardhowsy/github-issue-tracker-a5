
const allbtn = document.getElementById("all-btn");
const openbtn = document.getElementById("open-btn");
const closedbtn = document.getElementById("closed-btn");


function activeButton(id){
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
    }





const loadissue = () => {
   // manageSpinner(true)
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res) => res.json())
    .then((json) => displayIssues(json.data))
}
const displayIssues = (issue) =>{
    console.log(issue);
}

loadissue()


