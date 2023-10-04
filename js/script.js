let qrGenerator = document.getElementById("qr-generator");

let div = document.createElement("div");
div.classList.add("container");
qrGenerator.appendChild(div);

let text = document.createElement("p");
text.textContent = "Enter Your text or URL";
div.appendChild(text);

let input = document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","input-field");
input.setAttribute("placeholder","Type here to get Your QR Code");
input.setAttribute("autofocus","");
div.appendChild(input);

let div2 = document.createElement("div");
div2.classList.add("container","image-div");
qrGenerator.appendChild(div2);

let image = document.createElement("img");
div2.appendChild(image);

let div1 = document.createElement("div")
div1.classList.add("btn-div","container");
qrGenerator.appendChild(div1);

let btn = document.createElement("button");
btn.setAttribute("type","submit");
btn.classList.add("btn","btn-primary");
btn.innerText = "Generate Your QR Code";
div1.appendChild(btn);

btn.addEventListener("click",()=>{
  if(input.value.length>0){
    image.classList.add("img");
    input.style.borderColor = "lightgreen";
    image.setAttribute("src",`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`);
  }
  else{
    input.classList.add("error");
    input.style.borderColor = "red";
    setTimeout(()=>{
      input.classList.remove("error");
    },1000)
  }

});