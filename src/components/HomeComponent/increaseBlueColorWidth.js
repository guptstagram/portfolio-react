export const increaseBlueColorWidth = () => {
    const ele = document.getElementById("hello-section-blue-half") === null ? document.getElementById("hello-section-night-half") : document.getElementById("hello-section-blue-half");
    ele.style.width = "100%";
    document.querySelector(".hello-text-blue-dot").style.color = "#F8F8F8";
};