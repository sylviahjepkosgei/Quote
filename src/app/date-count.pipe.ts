import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

 transform(value: any): number {
   let today:Date = new Date();
   let todayWithoutTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())

   var dateDiff = Math.abs(value - todayWithoutTime )

   const secInADay=86400;

   var dateDiffSeconds = dateDiff*0.001;

   var dayCounter = dateDiffSeconds/secInADay;

   if (dayCounter >=1 && value > todayWithoutTime){
     return 0;
   } else {
     return Math.round(dayCounter);
   }
   }


}