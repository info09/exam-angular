export class ApiResult<T> {
    resultObj: T;
    isSuccessed: boolean;
    message: string;
    statusCode: number;
}
