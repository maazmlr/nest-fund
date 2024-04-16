import { IsArray, IsDateString, IsMilitaryTime, IsNotEmpty, IsString,  } from "class-validator";

export class CreateSongDto{
    
    @IsString()
    @IsNotEmpty()
    readonly title:string;
    
    @IsArray()
    @IsNotEmpty()
    readonly artist:string[];
    
    @IsNotEmpty()
    @IsDateString()
    readonly realeasedDate:Date;
    
    @IsString()
    @IsNotEmpty()
    @IsMilitaryTime()
    readonly duration:Date
}