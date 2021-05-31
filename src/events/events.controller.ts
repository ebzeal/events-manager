import { UpdateEventDto } from './dto/update-event.dto';
import { CreateEventDto } from './dto/create-event.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('events')
export class EventsController {
  @Get()
  findAll() {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return id;
  }

  @Post()
  create(@Body() input: CreateEventDto) {
    return input;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() input: UpdateEventDto) {}

  @Delete(':id')
  remove(@Param('id') id: string) {}
}
