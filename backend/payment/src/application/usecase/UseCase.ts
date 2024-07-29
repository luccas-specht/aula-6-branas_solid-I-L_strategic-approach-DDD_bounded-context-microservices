export default interface UseCase<
  T extends unknown = any,
  I extends unknown = any
> {
  execute(input: T): Promise<I>;
}
