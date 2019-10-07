import { Pipe, PipeTransform } from "@angular/core"; 
import { SuppliersService } from '../services/suppliers.service'; 
 
@Pipe({ 
    name: 'translateSkill' 
}) 
export class TranslateSkillPipe implements PipeTransform { 

    constructor(private suppServ: SuppliersService){ 
        } 

    transform(arg: any){ 
        let skills = this.suppServ.getSkills(); 
        let res = skills.find(x => x.id == arg); 
        return res.name; 
    } 
} 