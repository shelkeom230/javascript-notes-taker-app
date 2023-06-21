console.log("omkar shelke");

// if a user adds a note,add it to local storage 

showNotes();

let addBtn=document.getElementById("addBtn");
addBtn.addEventListener('click',function(e){
    let addTxt=document.getElementById("addTxt");
    let notes=localStorage.getItem("notes");

    if(notes==null){
        notesObj=[];
    }else{
        notesObj=JSON.parse(notes);
    }

    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value="";

    showNotes();
});

// function to show elements from localstorage 
function showNotes(){
    let notes=localStorage.getItem("notes");

    if(notes==null){
        notesObj=[];
}else{
    notesObj=JSON.parse(notes);
}

let html="";

notesObj.forEach(function(element,index) {
    html += `<div class="noteCard my-2 mx-2 card" 
            style="width: 18rem;background-color:#007bff;color:white;">
                <div class="card-body">
                    <h5 class="card-title">
                        MyNotes ${index + 1}
                    </h5>
                    <p class="card-text"> 
                        ${element}
                    </p>
   
                  <button id="${index}" onclick=
                    "deleteNote(this.id)"
                    class="btn btn-primary" style="background-color:red;color:white;">
                    Delete Note
                </button>
            </div>
        </div>`;
});

let notesElem=document.getElementById("notes");

if(notesObj.length!=0) notesElem.innerHTML=html;
else
    notesElem.innerHTML=`Nothing to show ! Use "Add a note" section above to add notes.`;
}

// function to delete a note 
function deleteNote(index){
    let notes=localStorage.getItem("notes");

    if(notes==null) notesObj=[];
    else JSON.parse(notes);

    notesObj.splice(index,1);

    localStorage.setItem("notes",
    JSON.stringify(notesObj));

    showNotes();
}