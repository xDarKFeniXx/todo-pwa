export enum LoadingEnum{
    NEVER="NEVER",
    LOADING="LOADING",
    LOADED="LOADED"
}
export enum NotificationType{
    SUCCESS="SUCCESS",
    WARNING="WARNING",
    ERROR="ERROR"
}
export interface TodoI{
    userId:number,
    id: number,
    title:string,
    completed:boolean
}
export interface NotificationI{
    id: number|string,
    title: string,
    type: NotificationType
}
export interface ErrorI{
    showError:boolean,
    textError: string
}
export enum StatusEnum{

}
export type APIResponseType<D = {}> = {
    data: D
    status:number
}
type addressType={
    street:string,
    suite:string,
    city:string,
    zipcode:string,
    geo:{ lat:string, lng:string}
}
export interface UserI{
    id:number|string,
    name:string,
    email:string,
    address:addressType,
    phone:string,
    website:string,
    company: {name:string, catchPhrase:string,bs:string }
}

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
