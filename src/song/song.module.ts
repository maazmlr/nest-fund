import { Module } from "@nestjs/common";
import { SongController } from "./song.controller"
import { SongService } from './song.service';

const mockService={
  findAll(){
    return[{id:2,title:"69 by mahnoor"}]
  }
}

@Module({
  controllers: [SongController],
  providers: [
    {
      provide:SongService,
      useValue:mockService
    }
  ]
  
})
export class SongModule {}
