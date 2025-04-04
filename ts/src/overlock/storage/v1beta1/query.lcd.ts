//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryShowRegistryRequest, QueryShowRegistryResponseSDKType, QueryListRegistryRequest, QueryListRegistryResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.showRegistry = this.showRegistry.bind(this);
    this.listRegistry = this.listRegistry.bind(this);
  }
  /* Queries a list of ShowRegistry items. */
  async showRegistry(params: QueryShowRegistryRequest): Promise<QueryShowRegistryResponseSDKType> {
    const endpoint = `overlock/storage/show_registry/${params.id}`;
    return await this.req.get<QueryShowRegistryResponseSDKType>(endpoint);
  }
  /* Queries a list of ListRegistry items. */
  async listRegistry(params: QueryListRegistryRequest = {
    pagination: undefined
  }): Promise<QueryListRegistryResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `overlock/storage/list_registry`;
    return await this.req.get<QueryListRegistryResponseSDKType>(endpoint, options);
  }
}