var loader=function(e){
    let file = e.targets.files;
    let show = "<span>Selected file: </span>" + file[0].na

    let output = document.getElementById("selector");
    output.innerHTML = show;
    output.classList.add("active");
};

let fileInput = document.getElementById("file");
fileInput.addEventListener("change", loader)