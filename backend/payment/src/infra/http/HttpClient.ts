import axios from 'axios';
// Se S é subclasse de T então objetos do tipo T podem ser substituídos por objetos do tipo S sem quebrar o funcionamento do programa

// T
export default interface HttpClient {
  get(url: string): Promise<any>;
  post(url: string, body: any, headers?: any): Promise<any>;
}

// S
export class AxiosAdapter implements HttpClient {
  async get(url: string): Promise<any> {
    const response = await axios.get(url);
    return response.data;
  }

  async post(url: string, body: any, headers?: any): Promise<any> {
    console.log({ url, body, headers });
    const response = await axios.post(url, body, {
      headers: headers ? headers : {},
    });
    console.log({ responseAxios: response });

    return response.data;
  }
}
