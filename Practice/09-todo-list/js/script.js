//!events
document.getElementById("btnDarkMode").addEventListener("click", () => {
  document.querySelector("body").classList.toggle("dark-mode");
  let btnDarkMode = document.querySelector("#btnDarkMode i");

  btnDarkMode.classList.toggle("fa-moon");
  btnDarkMode.classList.toggle("fa-sun");
});

document.getElementById("btnShowAddNoteForm").addEventListener("click", () => {
  toggleAddNoteForm();
});

document.getElementById("btnHideForm").addEventListener("click", () => {
  toggleAddNoteForm();
});

document.getElementById("btnAddNote").addEventListener("click", async () => {
  let titleEl = document.getElementById("title");
  let noteEl = document.getElementById("note");
  let colorEl = document.querySelector('input[name="colors"]:checked');

  try {
    let title = titleEl.value;
    let note = noteEl.value;
    let color = colorEl.id;
    if (!title) throw new Error("Plase enter a title");
    if (!note) throw new Error("Plase enter a note");
    color ??= "light"; //color= color ?? "light"

    /* 
     fetch("https://650d9fdda8b42265ec2c80a4.mockapi.io/notes")
   .then((resp)=>resp.json())
   .then((data)=>{
    console.log(data)
   })
   .catch((err)=>{
    console.log(err)
   }) */

    const newNote = {
      title,
      note,
      color,
    };

    const resp = await fetch(
      "https://650d9fdda8b42265ec2c80a4.mockapi.io/notes",
      {
        method: "post",
        body: JSON.stringify(newNote),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await resp.json();
      console.log(data);

      const newNoteHTML=`
      
      <div class="col" data-id=${data.id} >
      <div class="card bg-${data.color} shadow">
          <div class="card-header d-flex justify-content-between align-items-center">
           <div>${data.title}</div>

            <div class="text-end">
              <button class="btn btn-danger">
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
          <div class="card-body">
             ${data.note}
            
          </div>
        </div>

  </div>
      
    
      `
   let rowEl=document.querySelector("#board .row")

  // rowEl.innerHTML+=newNoteHTML
  rowEl.insertAdjacentHTML("afterbegin",newNoteHTML)
  //!!silme islemi
  const deleteButton=rowEl.querySelector(`div[data-id="${data.id}"] button`)

  deleteButton.addEventListener("click",async (e)=>{
    let response=confirm("Are you sure to delete?")

if(!response) return;

const res=await fetch(`https://650d9fdda8b42265ec2c80a4.mockapi.io/notes/${data.id}`, {
  method: "delete",
  body: JSON.stringify({id:data.id}),
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})
const deletedData=await res.json()
//!gorselden silelim

   let deleteNoteEl=document.querySelector(`div[data-id="${deletedData.id}"]`)
   deleteNoteEl.remove()
   //!!resetleme
   titleEl.value="";
  noteEl.value="";
  document.querySelectorAll('input[name="colors"]')[0].setAttribute("checked",true)
  toggleAddNoteForm()
  })






  } catch (error) {
    alert(error.message);
  }
});

//!!dbdeki datalari goster

const loadDbNotes = async () => { 
let row= document.querySelector("#board .row")
row.innerHTML=""
try {

const resp=await fetch("https://650d9fdda8b42265ec2c80a4.mockapi.io/notes")
const data=await resp.json()

//console.log(data)

data.forEach((item) => {
  const newNoteHTML=`
      
  <div class="col" data-id=${item.id} >
  <div class="card bg-${item.color} shadow">
      <div class="card-header d-flex justify-content-between align-items-center">
       <div>${item.title}</div>

        <div class="text-end">
          <button class="btn btn-danger">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
      <div class="card-body">
         ${item.note}
        
      </div>
    </div>

</div>
  

  `
  let rowEl=document.querySelector("#board .row")

  // rowEl.innerHTML+=newNoteHTML
  rowEl.insertAdjacentHTML("afterbegin",newNoteHTML)

  //!dbdeki  datalari id uzerinden silme islemi

  const deleteButton=rowEl.querySelector(`div[data-id="${item.id}"] button`)

  deleteButton.addEventListener("click",async (e)=>{
    let response=confirm("Are you sure to delete?")

if(!response) return;

const res=await fetch(`https://650d9fdda8b42265ec2c80a4.mockapi.io/notes/${item.id}`, {
  method: "delete",
  body: JSON.stringify({id:item.id}),
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})
const deletedData=await res.json()
//!gorselden silelim

 
   let deleteNoteEl=document.querySelector(`div[data-id="${deletedData.id}"]`)
   deleteNoteEl.remove()
   //!!resetleme
   titleEl.value="";
  noteEl.value="";
  document.querySelectorAll('input[name="colors"]')[0].setAttribute("checked",true)
  toggleAddNoteForm()
  })

});


} catch (error) {
  console.log(error)
  
}

}

const toggleAddNoteForm = () => {
  document.querySelector(".add-note-form").classList.toggle("d-none");

  let btnShowAddNoteForm = document.querySelector("#btnShowAddNoteForm i");

  btnShowAddNoteForm.classList.toggle("fa-plus");
  btnShowAddNoteForm.classList.toggle("fa-xmark");
};
loadDbNotes()