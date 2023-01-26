export type CategoryType = {
    id:number,
    code:string,
    children:string[],
    name:string,
    slug:string,
    description:string

}

export type ProductImageType={
    id:number,
    type:string,
    path:string,
}

export type ProductType={
    id:number,
    code:string,
    variants:string[],
    images:ProductImageType[],
    
    averageRating:number,

    productTaxons:string,
    reviews:string[],
    options:string[],
    mainTaxon:string,
    shortDescription:string,
    name:string,
    description:string,
    slug:string,
    createdAt:string,
    updatedAt:string,
}

export type ProductVariantType={
    code:string,
    id:number,
    inStock:boolean,
    name:string,
    optionValues:any[],
    originalPrice:number,
    price:number,
    product:string

}