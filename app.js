let copyBtn = document.querySelector(".copy");
let pastBtn = document.querySelector(".past");
let copyTxt = document.querySelector(".input-text");
let txt;

copyBtn.addEventListener("click", () => {

    if(copyTxt.value.trim()===""){
        alert("please write something for copy.");
        return;
    }

  navigator.clipboard.writeText(copyTxt.value);

  copyBtn.classList.toggle("success");
  copyBtn.innerHTML = "Coppied";

  txt = copyTxt.value;


  setTimeout(function () {
    copyBtn.classList.toggle("success");
    copyBtn.innerHTML = "Copy";
  }, 2000);
});


pastBtn.addEventListener("click", function(){
    document.querySelector(".text-aria").value = txt;

    pastBtn.classList.toggle("success");

    setTimeout(()=>{
        pastBtn.classList.toggle("success");
    }, 2000);
});