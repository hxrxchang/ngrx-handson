import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CreateMemoDto } from './memo.dto';

@Controller('/api')
export class AppController {
  constructor() {}
  memoList = ['起きる', '歯を磨く', '着替える', '出社する'];

  @Get('/memos')
  getMemoList(): string[] {
    return this.memoList;
  }

  @Post('/memos')
  postMemo(@Body() params: { memo: string }) {
    this.memoList.push(params.memo);
    return 'Post Memo Success';
  }
}
