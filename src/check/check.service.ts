import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CheckService {
  async checkToxicity(text: string) {
    const apiKey = process.env.HUGGINGFACE_API_TOKEN;

    const result = await axios.post(
      'https://api-inference.huggingface.co/models/unitary/toxic-bert',
      { inputs: text },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`, // optional if public
        },
      },
    );

    return result.data;
  }
}
