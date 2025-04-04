//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryShowRegistryRequest, QueryShowRegistryResponse, QueryListRegistryRequest, QueryListRegistryResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a list of ShowRegistry items. */
  showRegistry(request: QueryShowRegistryRequest): Promise<QueryShowRegistryResponse>;
  /** Queries a list of ListRegistry items. */
  listRegistry(request?: QueryListRegistryRequest): Promise<QueryListRegistryResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.showRegistry = this.showRegistry.bind(this);
    this.listRegistry = this.listRegistry.bind(this);
  }
  showRegistry(request: QueryShowRegistryRequest): Promise<QueryShowRegistryResponse> {
    const data = QueryShowRegistryRequest.encode(request).finish();
    const promise = this.rpc.request("overlock.storage.v1beta1.Query", "ShowRegistry", data);
    return promise.then(data => QueryShowRegistryResponse.decode(new BinaryReader(data)));
  }
  listRegistry(request: QueryListRegistryRequest = {
    pagination: undefined
  }): Promise<QueryListRegistryResponse> {
    const data = QueryListRegistryRequest.encode(request).finish();
    const promise = this.rpc.request("overlock.storage.v1beta1.Query", "ListRegistry", data);
    return promise.then(data => QueryListRegistryResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    showRegistry(request: QueryShowRegistryRequest): Promise<QueryShowRegistryResponse> {
      return queryService.showRegistry(request);
    },
    listRegistry(request?: QueryListRegistryRequest): Promise<QueryListRegistryResponse> {
      return queryService.listRegistry(request);
    }
  };
};
export interface UseShowRegistryQuery<TData> extends ReactQueryParams<QueryShowRegistryResponse, TData> {
  request: QueryShowRegistryRequest;
}
export interface UseListRegistryQuery<TData> extends ReactQueryParams<QueryListRegistryResponse, TData> {
  request?: QueryListRegistryRequest;
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
  const useShowRegistry = <TData = QueryShowRegistryResponse,>({
    request,
    options
  }: UseShowRegistryQuery<TData>) => {
    return useQuery<QueryShowRegistryResponse, Error, TData>(["showRegistryQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.showRegistry(request);
    }, options);
  };
  const useListRegistry = <TData = QueryListRegistryResponse,>({
    request,
    options
  }: UseListRegistryQuery<TData>) => {
    return useQuery<QueryListRegistryResponse, Error, TData>(["listRegistryQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.listRegistry(request);
    }, options);
  };
  return {
    /** Queries a list of ShowRegistry items. */useShowRegistry,
    /** Queries a list of ListRegistry items. */useListRegistry
  };
};