let btn =document.querySelector("form > button");
let tbody=document.querySelector("tbody");
let form = document.querySelector("form");

btn.addEventListener("click",onclick);

function onclick(event){
    event.preventDefault();
      let employee={
        name:form["name"].value,
        gmail:form["gmail"].value,
        number:form["number"].value,
        car:form["car"].value,
        pass:form["pass"].value
      }

      if(editoption.isedit){
          editrow(employee);
      }else{
        allow(employee);
      }
      
      form.reset();
}

function allow(employ){
    let tr=document.createElement("tr");
    for(let key in employ){
    let td=document.createElement("td");
    td.innerHTML=employ[key];
    tr.appendChild(td);
    }
    let option=document.createElement("td");
    let b=document.createElement("button");
    b.innerHTML="delete";
    let c= document.createElement("button");
    c.innerHTML="Edit";
    b.addEventListener("click",deletebtn);
    c.addEventListener("click",editbtn);
    option.appendChild(b);
    option.appendChild(c);
    tr.appendChild(option);
    tbody.appendChild(tr);
}

function deletebtn(event){
   let del=event.target;
   let r= del.parentElement.parentElement;
   console.log(r);
   r.remove();
}

let editoption={
  isedit:false,
  row:null
}
function editbtn(event){
  let b=event.target.parentElement.parentElement;
  let c=b.querySelectorAll("td");
  let employ={
    name:c[0].innerText,
    gmail:c[1].innerText,
    car:c[2].innerText,
    number:c[3].innerText,
    pass:c[4].innerText,
  }
  fillform(employ);

  editoption={
    isedit:true,
    row:b
  }
  btn.innerText="Edit";
}
function fillform(employ){

        form.name.value=employ.name;
        form.gmail.value=employ.gmail;
        form.car.value=employ.car;
        form.number.value=employ.number;
        form.pass.value=employ.pass;

}
function editrow(employ){
   let edit = editoption.row;
   let c=edit.querySelectorAll("td");

   c[0].innerText=employ.name;
   c[1].innerText=employ.gmail;
   c[2].innerText=employ.number;
   c[3].innerText=employ.car;
   c[4].innerText=employ.pass;
   
    btn.innerText="add employ";

    editoption={
      isedit:false,
      row:null
    }
 }
