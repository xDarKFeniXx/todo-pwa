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
