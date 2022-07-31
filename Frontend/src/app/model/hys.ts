export class hys { 
    idSkill?: number;
    nombreSkill: String;
    percentSkill: number;
    imagenSkill: string;
    

    constructor(nombreSkill: String, percentSkill: number, imagenSkill: string){
        this.nombreSkill = nombreSkill;
        this.percentSkill = percentSkill;
        this.imagenSkill = imagenSkill;
    }


}