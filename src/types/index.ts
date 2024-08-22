export type IBound = {
    top: number;
    left: number;
    bottom: any;
    right: any;
    width: any;
    height: any;
}

export type IRectNode =  {
    paths: any
    index: number
    maskedBound: any
    actualWidth: any
    actualHeight: any
    title: string
    id: string
    isComponent: boolean,
    closestComponentIndex: any,
    clazz: any,
    node: any,
} & IBound

export type IPageRect ={
    height: any
    width: any
}