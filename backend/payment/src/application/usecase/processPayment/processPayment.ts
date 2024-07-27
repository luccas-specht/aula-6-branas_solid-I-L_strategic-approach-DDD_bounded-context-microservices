import UseCase from '../UseCase';

export default class ProcessPayment implements UseCase {
  async execute(input: any) {
    console.log(input);
    console.log('opa fui chamado');

    return new Promise(() => {
      return input;
    }).then((ele) => {
      return ele;
    });
  }
}
