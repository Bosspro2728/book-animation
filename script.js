const downloadDiv = document.getElementById("downloadDiv");
const Pwp = document.createElement("iframe");
Pwp.style.border = "0px"; 

const downloadPwP = (name) => {
    Pwp.src = `public/${name}.pptx`;
    downloadDiv.appendChild(Pwp);


    setTimeout(() => {
        downloadDiv.removeChild(Pwp);
    }, 5000);
};