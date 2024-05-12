document.getElementById('first-one').style.top=10+"px";
document.getElementById('first-one').style.rotate=45+"deg";
document.getElementById('second-one').style.visibility="hidden";
document.getElementById('third-one').style.top=-10+"px";
document.getElementById('third-one').style.rotate=-45+"deg";

let todotasklist=document.querySelector('#todo-task-container');
let donetasklist=document.querySelector('#done-task-container');

document.querySelector('#addbutton').addEventListener('click',()=>{
    let text=document.getElementById('input-addfield').value;
    if(text.length!=0){
        document.getElementById('input-addfield').value="";
        if(todotasklist.hasChildNodes()==false){
            document.getElementById('todolist-empty-indicator').style.display="none";
        }
        let task=document.createElement('div');
        task.setAttribute("class","tasks");

        let taskdescriptioncont=document.createElement('div');
        taskdescriptioncont.setAttribute("class","task-description");

        let taskdesc=document.createElement("p");
        taskdesc.innerText=text;
        taskdescriptioncont.appendChild(taskdesc);

        let donebtn=document.createElement('div');
        donebtn.setAttribute("class","done-btn");

        donebtn.addEventListener('click',()=>{
            todotasklist.removeChild(task);
            if(todotasklist.hasChildNodes()==false){
                document.getElementById('todolist-empty-indicator').style.display="flex";
            }
            task.removeChild(donebtn);
            if(donetasklist.hasChildNodes()==false){
                document.getElementById('donelist-empty-indicator').style.display="none";
            }
            donetasklist.appendChild(task);
            removebtn.addEventListener('click',()=>{
                donetasklist.removeChild(task);
                if(donetasklist.hasChildNodes()==false){
                    document.getElementById('donelist-empty-indicator').style.display="flex";
                }
            });
        });


        let removebtn=document.createElement('div');
        removebtn.setAttribute("class","remove-btn");

        removebtn.addEventListener('click',()=>{
            todotasklist.removeChild(task);
            if(todotasklist.hasChildNodes()==false){
                document.getElementById('todolist-empty-indicator').style.display="flex";
            }
        });

        task.appendChild(taskdescriptioncont);
        task.appendChild(donebtn);
        task.appendChild(removebtn);

        todotasklist.appendChild(task);
    }
});
function menuclose(){
    document.getElementById('menu-icon').style.visibility="visible";
    document.getElementById('menu-icon-one').style.visibility="hidden";
    document.getElementById('first').style.top=0+"px";
    document.getElementById('first').style.rotate=0+"deg";
    document.getElementById('second').style.visibility="visible";
    document.getElementById('third').style.top=0+"px";
    document.getElementById('third').style.rotate=0+"deg";
    document.getElementById('menu-bar').style.translate=-100+"%";
}
document.getElementById('menu-icon').addEventListener("click",()=>{
    document.getElementById('first').style.top=10+"px";
    document.getElementById('first').style.rotate=45+"deg";
    document.getElementById('second').style.visibility="hidden";
    document.getElementById('third').style.top=-10+"px";
    document.getElementById('third').style.rotate=-45+"deg";
    document.getElementById('menu-bar').style.translate=0+"%";
    setTimeout(()=>{
        document.getElementById('menu-icon').style.visibility="hidden";
        document.getElementById('menu-icon-one').style.visibility="visible";
    },200);
});
document.getElementById('menu-icon-one').addEventListener('click',menuclose);

document.getElementsByClassName('menu-list-item')[0].onclick=function(){
    document.getElementById("main-window").style.translate=0+"%";
    menuclose();
}
document.getElementsByClassName('menu-list-item')[1].onclick=function(){
    document.getElementById("main-window").style.translate=-50+"%";
    menuclose();
}

