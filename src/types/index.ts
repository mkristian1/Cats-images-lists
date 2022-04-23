export interface ICategories {
    name: string,
    id: number,
}

export interface IImages {
    breeds: any,
    height: number,
    id: string,
    url: string,
    width: number,
}

export interface IFilters {
    limit?: number,
    page: number,
    category_ids?: number,
}