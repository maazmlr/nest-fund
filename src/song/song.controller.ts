import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { SongService } from './song.service';
import { CreateSongDto } from './dto/create-song.dto';

@Controller('song')
export class SongController {
    constructor (private readonly songService:SongService){}

    @Post()
    create(@Body() createSongDto:CreateSongDto){
      return  this.songService.create(createSongDto);
    }

    @Get()
    findAll(){
        return this.songService.findAll();
    }
    @Get(":id")
    findOne(@Param("id",ParseIntPipe) id:number){
        return `find song based on id ${typeof id} `
    }
    @Delete(':id')
    delete(){
        return "delete form id"
    }
    @Put(":id")
    updateOne(){
        return "updating from id"
    }
}
