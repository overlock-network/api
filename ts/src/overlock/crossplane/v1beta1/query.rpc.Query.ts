//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryShowEnvironmentRequest, QueryShowEnvironmentResponse, QueryListEnvironmentRequest, QueryListEnvironmentResponse, QueryShowProviderRequest, QueryShowProviderResponse, QueryListProviderRequest, QueryListProviderResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a list of ShowEnvironment items. */
  showEnvironment(request: QueryShowEnvironmentRequest): Promise<QueryShowEnvironmentResponse>;
  /** Queries a list of ListEnvironment items. */
  listEnvironment(request: QueryListEnvironmentRequest): Promise<QueryListEnvironmentResponse>;
  /** Queries a list of ShowProvider items. */
  showProvider(request: QueryShowProviderRequest): Promise<QueryShowProviderResponse>;
  /** Queries a list of ListProvider items. */
  listProvider(request: QueryListProviderRequest): Promise<QueryListProviderResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.showEnvironment = this.showEnvironment.bind(this);
    this.listEnvironment = this.listEnvironment.bind(this);
    this.showProvider = this.showProvider.bind(this);
    this.listProvider = this.listProvider.bind(this);
  }
  showEnvironment(request: QueryShowEnvironmentRequest): Promise<QueryShowEnvironmentResponse> {
    const data = QueryShowEnvironmentRequest.encode(request).finish();
    const promise = this.rpc.request("overlock.crossplane.v1beta1.Query", "ShowEnvironment", data);
    return promise.then(data => QueryShowEnvironmentResponse.decode(new BinaryReader(data)));
  }
  listEnvironment(request: QueryListEnvironmentRequest): Promise<QueryListEnvironmentResponse> {
    const data = QueryListEnvironmentRequest.encode(request).finish();
    const promise = this.rpc.request("overlock.crossplane.v1beta1.Query", "ListEnvironment", data);
    return promise.then(data => QueryListEnvironmentResponse.decode(new BinaryReader(data)));
  }
  showProvider(request: QueryShowProviderRequest): Promise<QueryShowProviderResponse> {
    const data = QueryShowProviderRequest.encode(request).finish();
    const promise = this.rpc.request("overlock.crossplane.v1beta1.Query", "ShowProvider", data);
    return promise.then(data => QueryShowProviderResponse.decode(new BinaryReader(data)));
  }
  listProvider(request: QueryListProviderRequest): Promise<QueryListProviderResponse> {
    const data = QueryListProviderRequest.encode(request).finish();
    const promise = this.rpc.request("overlock.crossplane.v1beta1.Query", "ListProvider", data);
    return promise.then(data => QueryListProviderResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    showEnvironment(request: QueryShowEnvironmentRequest): Promise<QueryShowEnvironmentResponse> {
      return queryService.showEnvironment(request);
    },
    listEnvironment(request: QueryListEnvironmentRequest): Promise<QueryListEnvironmentResponse> {
      return queryService.listEnvironment(request);
    },
    showProvider(request: QueryShowProviderRequest): Promise<QueryShowProviderResponse> {
      return queryService.showProvider(request);
    },
    listProvider(request: QueryListProviderRequest): Promise<QueryListProviderResponse> {
      return queryService.listProvider(request);
    }
  };
};
export interface UseShowEnvironmentQuery<TData> extends ReactQueryParams<QueryShowEnvironmentResponse, TData> {
  request: QueryShowEnvironmentRequest;
}
export interface UseListEnvironmentQuery<TData> extends ReactQueryParams<QueryListEnvironmentResponse, TData> {
  request: QueryListEnvironmentRequest;
}
export interface UseShowProviderQuery<TData> extends ReactQueryParams<QueryShowProviderResponse, TData> {
  request: QueryShowProviderRequest;
}
export interface UseListProviderQuery<TData> extends ReactQueryParams<QueryListProviderResponse, TData> {
  request: QueryListProviderRequest;
}
const _queryClients: WeakMap<ProtobufRpcClient, QueryClientImpl> = new WeakMap();
const getQueryService = (rpc: ProtobufRpcClient | undefined): QueryClientImpl | undefined => {
  if (!rpc) return;
  if (_queryClients.has(rpc)) {
    return _queryClients.get(rpc);
  }
  const queryService = new QueryClientImpl(rpc);
  _queryClients.set(rpc, queryService);
  return queryService;
};
export const createRpcQueryHooks = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  const useShowEnvironment = <TData = QueryShowEnvironmentResponse,>({
    request,
    options
  }: UseShowEnvironmentQuery<TData>) => {
    return useQuery<QueryShowEnvironmentResponse, Error, TData>(["showEnvironmentQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.showEnvironment(request);
    }, options);
  };
  const useListEnvironment = <TData = QueryListEnvironmentResponse,>({
    request,
    options
  }: UseListEnvironmentQuery<TData>) => {
    return useQuery<QueryListEnvironmentResponse, Error, TData>(["listEnvironmentQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.listEnvironment(request);
    }, options);
  };
  const useShowProvider = <TData = QueryShowProviderResponse,>({
    request,
    options
  }: UseShowProviderQuery<TData>) => {
    return useQuery<QueryShowProviderResponse, Error, TData>(["showProviderQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.showProvider(request);
    }, options);
  };
  const useListProvider = <TData = QueryListProviderResponse,>({
    request,
    options
  }: UseListProviderQuery<TData>) => {
    return useQuery<QueryListProviderResponse, Error, TData>(["listProviderQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.listProvider(request);
    }, options);
  };
  return {
    /** Queries a list of ShowEnvironment items. */useShowEnvironment,
    /** Queries a list of ListEnvironment items. */useListEnvironment,
    /** Queries a list of ShowProvider items. */useShowProvider,
    /** Queries a list of ListProvider items. */useListProvider
  };
};