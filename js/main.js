let elPaswInp = document.querySelector(".box__inp-pasw");
let elPaswConfirm = document.querySelector(".box__inp-pasw-confirm");
let elFnameInp = document.querySelector(".box__inp-fname");
let elLnameInp = document.querySelector(".box__inp-lname");
let elAgeINp = document.querySelector(".box__inp-age");

document.querySelector(".box__form").addEventListener("submit", e => {
    e.preventDefault();
    document.querySelectorAll("label").forEach(label => {
        if(label.id != "target"){
            label.children[0].style.backgroundImage  = "url('../../img/eror-bg.png')";
            label.children[0].style.borderColor = "red";
            label.children[1].style.opacity = "1";
        }
    })
    
    if(elPaswInp.value != "" && elPaswConfirm.value != "" && elFnameInp.value != "" && elLnameInp.value != "" && elAgeINp.value != ""){
        if(elPaswInp.value === elPaswConfirm.value && elPaswConfirm.value != "") {
            window.location.reload();
        }
        else {
            elPaswConfirm.style.borderColor = "red";   
            elPaswConfirm.style.backgroundImage  = "url('../../img/eror-bg.png')";
            document.querySelector(".check-confirm").style.opacity = "1";
            if(elPaswConfirm.value.length <= 8){
                document.querySelector(".check-confirm").style.opacity = "0";
            }
            elPaswConfirm.addEventListener("keyup", ()=> {
                if(elPaswConfirm.value.length <= 8){
                    document.querySelector(".check-confirm").style.opacity = "0";
                }
            })
        }
    }
})

document.querySelectorAll(".box__inp").forEach(inp => {
    inp.addEventListener("focus", inpTarget => {
        inpTarget.target.addEventListener("keyup", item => {    
            if(inpTarget.target.value != ""){
                onFocus(inpTarget.target);
            }
        })
    })
    
    inp.addEventListener("click", inpTarget => {
        inpTarget.target.addEventListener("keyup", item => {    
            onFocus(inpTarget.target);
        })
    })
})

function onFocus(inpTarget){
    inpTarget.style.backgroundImage  = "url('../../img/eror-bg.png')";
    inpTarget.style.borderColor = "red";

    if(inpTarget.id == "fnmae"){
        let fnameTitle = document.querySelector(".box__valid-fnmae");
        valid(inpTarget,5,fnameTitle);
    }
    else if(inpTarget.id == "lnmae"){
        let lnameTitle = document.querySelector(".box__valid-lname");
        valid(inpTarget,6,lnameTitle);
    }
    else if(inpTarget.id == "age"){
        let ageTitle = document.querySelector(".box__valid--age");
        valid(inpTarget,2,ageTitle);
    }
    else if(inpTarget.id == "pasw"){
        let inpTitle = document.querySelector(".box__valid--pasw");
        valid(inpTarget,8,inpTitle);
    }
    else if(inpTarget.id == "confirm-pasw"){
        let inpTitle = document.querySelector(".box__valid--con-pasw");
        valid(inpTarget,8,inpTitle);
    }
}

function valid(targetInp,valLength,inpBottomTitle){
    inpBottomTitle.style.opacity = "1";
    if(targetInp.value.length >= valLength){
        targetInp.style.backgroundImage  = "url('../../img/check.png')";
        targetInp.style.borderColor = "green";
        inpBottomTitle.style.opacity = "0";
        targetInp.dataset = "target";
        targetInp.parentElement.id = "target";
    }
}       