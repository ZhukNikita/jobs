export const YearsCounter =(createdAt:string)=>{
    let date1 = new Date(createdAt);
    let date2 = new Date();
    let daysLag = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
    let year = (daysLag - (daysLag % 365)) / 365
    let days = daysLag % 365 % 31
    let result = `${year} years and ${days} days ago`
    return result
}