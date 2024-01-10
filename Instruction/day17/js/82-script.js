import { students } from "../data/students.js";

document.getElementById("btnPoint").addEventListener("click",()=>{
  let pointEl=   document.querySelectorAll("#tblStudents tbody tr td:last-child")
  //console.log(pointEl)
  pointEl.forEach((point,index)=>{
    let pointText=point.innerText
    //console.log(pointText)
    if(pointText<50){
        document.querySelector(`#tblStudents tbody tr:nth-child(${index+1})`).classList.add("table-danger")
    }

  })

})



const loadStudents = () => { 

    let strStudents="";

    students.forEach((student,index)=>{

strStudents+=`         <tr>
                     <td>${index+1}</td>
                     <td>${student.name}</td>  
                    <td>${student.point}</td>  
                    </tr>   `


                    document.querySelector("#tblStudents tbody").innerHTML=strStudents



    })


 }

 loadStudents()