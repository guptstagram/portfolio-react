export const addTextToLines = (selector,line,number) => {
    document.querySelector(selector).innerHTML +="<span>" + line[number] + "</span>";
}