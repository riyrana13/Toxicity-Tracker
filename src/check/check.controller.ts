import { Body, Controller, Post } from '@nestjs/common';
import { CheckTextDto } from './dto/check.dto';
import { CheckService } from './check.service';

@Controller('check')
export class CheckController {
  constructor(private readonly checkService: CheckService) {}
  @Post()
  async check(@Body() body: CheckTextDto) {
    const result = await this.checkService.checkToxicity(body.text);
    return result;
  }
}
