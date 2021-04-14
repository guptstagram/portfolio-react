export const generateExpTime=()=>{
    const exp=document.querySelector(".red-text");
    const joinDate=new Date("7/26/2019");
    const today=new Date();
    const diffTime = Math.abs(today - joinDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const years=Math.floor(diffDays/365);
    const months=Math.floor((diffDays%365)/30);
    const days=Math.floor((diffDays%365)%30);
    const expVal=`${years} year(s) ${months} month(s) and ${days} day(s)`
    exp.innerHTML=expVal;
}