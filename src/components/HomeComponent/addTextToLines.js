import {addTextEffect} from './addTextEffect';

export const addTextToLines = (selector,line,number) => {
    // document.querySelector(selector).innerHTML +="<span>" + line[number] + "</span>";
    let span=document.createElement("span");
    span.innerText=line[number];
    span.addEventListener("mouseover",()=>addTextEffect(span));
    document.querySelector(selector).appendChild(span);
}