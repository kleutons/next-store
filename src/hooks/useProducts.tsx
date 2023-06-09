import { ProductsFetchResponse } from "@/types/productsResponse";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./userFilter";
import { useDeferredValue, useState } from "react";
import { FilterType } from "@/types/filterTypes";   
import { FilterQueryPriority, FilterQueryType, FilterSearch } from "@/utils/filterQuery";

const API_URL = 'https://kleutons.github.io/store-api/db.json' as string;

const fetcher = (): AxiosPromise<ProductsFetchResponse> => {
    return axios.get(API_URL);
}


export function useProducts(){
    const { type, priority, search } = useFilter();

    const searchDeferred = useDeferredValue(search);

    const { data } = useQuery({
        queryFn: fetcher,
        queryKey: ['products', type],
        staleTime: 1000 * 60 * 1
    });
    
    const dataReturn = data?.data?.allProducts;
    
    const filter = FilterQueryType(dataReturn, type);

    const order = FilterQueryPriority(filter, priority);

    const searchFor = FilterSearch(order,searchDeferred);

    return {
        data: searchFor
    }
}