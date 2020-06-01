import  moment from 'moment';
export const getCurrentDate = () =>{
   return moment().format('DD/MM/YYYY');   
}
export const getLastWeekDay = (date) =>{
    const mtDate = moment(date)
    let days = 1
    if(mtDate.isoWeekday() == 6){  days = 2  }
    if(mtDate.isoWeekday() == 1){  days = 3  }
    return mtDate.subtract(days, 'days');
}
