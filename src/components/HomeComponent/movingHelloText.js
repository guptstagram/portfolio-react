export const movingHelloText = () => {
    setTimeout(() => {
      document.getElementById("hello-text-box").style.left = "180%";
    }, 2000);
  };