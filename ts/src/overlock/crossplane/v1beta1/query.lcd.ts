//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryShowEnvironmentRequest, QueryShowEnvironmentResponseSDKType, QueryListEnvironmentRequest, QueryListEnvironmentResponseSDKType, QueryShowProviderRequest, QueryShowProviderResponseSDKType, QueryListProviderRequest, QueryListProviderResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.showEnvironment = this.showEnvironment.bind(this);
    this.listEnvironment = this.listEnvironment.bind(this);
    this.showProvider = this.showProvider.bind(this);
    this.listProvider = this.listProvider.bind(this);
  }
  /* Queries a list of ShowEnvironment items. */
  async showEnvironment(params: QueryShowEnvironmentRequest): Promise<QueryShowEnvironmentResponseSDKType> {
    const endpoint = `overlock/crossplane/show_environment/${params.id}`;
    return await this.req.get<QueryShowEnvironmentResponseSDKType>(endpoint);
  }
  /* Queries a list of ListEnvironment items. */
  async listEnvironment(params: QueryListEnvironmentRequest): Promise<QueryListEnvironmentResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.creator !== "undefined") {
      options.params.creator = params.creator;
    }
    const endpoint = `overlock/crossplane/list_environment`;
    return await this.req.get<QueryListEnvironmentResponseSDKType>(endpoint, options);
  }
  /* Queries a list of ShowProvider items. */
  async showProvider(params: QueryShowProviderRequest): Promise<QueryShowProviderResponseSDKType> {
    const endpoint = `overlock/crossplane/show_provider/${params.id}`;
    return await this.req.get<QueryShowProviderResponseSDKType>(endpoint);
  }
  /* Queries a list of ListProvider items. */
  async listProvider(params: QueryListProviderRequest): Promise<QueryListProviderResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.creator !== "undefined") {
      options.params.creator = params.creator;
    }
    const endpoint = `overlock/crossplane/list_provider`;
    return await this.req.get<QueryListProviderResponseSDKType>(endpoint, options);
  }
}