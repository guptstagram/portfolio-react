export const addTextEffect=(target)=>{
    target.classList.add("text-effect");
    setTimeout(()=>target.classList.remove("text-effect"),800);
}