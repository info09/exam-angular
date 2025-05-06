export class Pagination<T> {
    items: T[];
    metaData: MetaData;
}

export class MetaData {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    totalCount: number;
    hasPrevious: boolean;
    hasNext: boolean;
}
