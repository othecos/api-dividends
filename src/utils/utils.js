import  moment from 'moment';
export const getCurrentDate = () =>{
   return moment().format('DD/MM/YYYY');   
}
export const getLastWeekDay = (date) =>{
    const mtDate = moment(date)
    let days = 1
    console.log(mtDate.isoWeekday(),mtDate)
    if(mtDate.isoWeekday() == 1){  days = 2  }
    return mtDate.subtract(days, 'days');
}
