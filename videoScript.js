const downloadDiv = document.getElementById("downloadDiv");
const Video = document.createElement("iframe");
Video.style.border = "0px"; 

const downloadVideo = (name) => {
    Video.src = `public/${name}.mp4`;
    downloadDiv.appendChild(Video);


    setTimeout(() => {
        downloadDiv.removeChild(Video);
    }, 5000);
};