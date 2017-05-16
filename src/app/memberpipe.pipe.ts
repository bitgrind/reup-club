import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'memberpipe'
})
export class MemberpipePipe implements PipeTransform {

  transform(input: Member[], role: any): any {
    console.log("pipe role init: "+role);
    var output: Member[] = [];
    if(input === null){
      return null;
    }
    // allmembers
    if(role === "founder") {
      for(var i = 0; i < input.length; i++){
        if(input[i].role == "founder"){
          output.push(input[i]);
        }
      }
      return output;
    } else if(role === "manager") {
      for(var i = 0; i < input.length; i++){
        if(input[i].role == "manager"){
          output.push(input[i]);
        }
      }
      return output;
    } else if(role === "employee") {
      for(var i = 0; i < input.length; i++){
        if(input[i].role == "employee"){
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}

