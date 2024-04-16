import { Injectable } from '@nestjs/common';

@Injectable()
export class SongService {

    private readonly songs:string[]=[];

    create(song):string[]{
        this.songs.push(song);
        return this.songs;
    }
    findAll(){
        return this.songs;
    }
}
