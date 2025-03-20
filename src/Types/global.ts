

export type TError ={
    data ?: {
        message?:string;
        stack?:string;
        success?:boolean;
    };
    status ?: number;
};
export type TMeta ={
    limit:number;
    page:number;
    total:number;
    totalPage:number;
}
export type TResponseRedux<T> = {
    data?: T;
    error?: TError;
    meta?: TMeta;
    success: boolean;
    message: string;
  };
