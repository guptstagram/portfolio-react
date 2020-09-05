export const increaseBlueColorWidth = () => {
    setTimeout(() => {
        document.getElementById("hello-section-blue-half").style.width = "100%";
        document.querySelector(".hello-text-blue-dot").style.color = "#F8F8F8";
    }, 1000);
};