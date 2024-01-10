import { students } from "../data/students.js";

document.getElementById("btnPoint").addEventListener("click",()=>{
  let pointEl=   document.querySelectorAll("#tblStudents tbody tr td:last-child")
  //console.log(pointEl)
  pointEl.forEach((point,index)=>{
    let pointText=point.innerText
    //console.log(pointText)
    if(pointText<50){
     /*  document.querySelector(`#tblStudents tbody tr:nth-child(${index+1})`).classList.add("table-danger") */
      point.closest("tr").classList.add("table-danger")

      
    }

  })

})



const loadStudents = () => { 

    let strStudents="";

    students.forEach((student,index)=>{

strStudents+=`         <tr>
                     <td>${index+1}</td>
                     <td contenteditable="true"  >${student.name}</td>  
                    <td>${student.point}</td>  
                    <td> <button class="btn btn-danger btn-delete">🗑️</button></td>  
                    </tr>   `


                    



    })
document.querySelector("#tblStudents tbody").innerHTML=strStudents

 }


 const deleteButtons = () => { 
    document.querySelectorAll(".btn-delete").forEach((btnDel)=>{
      btnDel.addEventListener("click",(e)=>{
        e.stopPropagation()//olaylarin parenta aktarilmasini onler
       
    let name= e.target.closest("tr").children[1].innerText
    const result=confirm(`${name} adli kisiyi silmek istediginize emin misiniz?`)
    

 if(result){

e.target.closest("tr").remove()


 }

      })


    })

  }

  const addRemoveSelect = () => { 
    document.querySelectorAll("#tblStudents tbody tr").forEach((tblRow)=>{

      tblRow.addEventListener("click",(e)=>{
     console.log( e.target.closest("tr").classList.toggle("table-danger"))  


      })


    })


   }

 loadStudents()
 deleteButtons()
 addRemoveSelect()