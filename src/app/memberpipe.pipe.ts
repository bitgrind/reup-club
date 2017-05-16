import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'memberpipe'
})
export class MemberpipePipe implements PipeTransform {

  transform(input: Member[], role: any): any {
    var output: Member[] = [];
    if(input === null){
      return null;
    }
    if(role === "founder") {
      for(var i = 0; i < input.length; i++){
        output.push(input[i]);
      }
      return input;
    } else if(role === "manager") {
      for(var i = 0; i < input.length; i++){
        output.push(input[i]);
      }
      return input;
    } else if(role === "employees") {
      for(var i = 0; i < input.length; i++){
        output.push(input[i]);
      }
    } else {
      return input;
    }
  }

}

