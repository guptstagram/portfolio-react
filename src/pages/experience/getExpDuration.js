export const getExpDuration = () => {
    const startDate = new Date("7/26/2019");
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);
    const days = Math.floor((diffDays % 365) % 30);
    let output = "";
    if (years > 0) output += `${years} year${years > 1 ? "s" : ""}`
    if (months > 0) output += ` ${months} month${months > 1 ? "s" : ""}`
    if (days > 0) output += ` and ${days} day${days > 1 ? "s" : ""} `
    return output;
}