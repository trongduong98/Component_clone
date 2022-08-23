export interface DataState<DataType> {
  isFetching?: boolean,
  isInitialized?: boolean,
  error?: string,
  data?: DataType,
}