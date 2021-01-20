const buttonEl = document.querySelector("button");

const video = document.querySelector("video");

buttonEl.addEventListener("click", function()
{
    navigator.getUserMedia(
        { video: {} },
        stream => video.srcObject = stream,
        err => console.error(err)
    )
});