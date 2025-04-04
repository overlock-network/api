//@ts-nocheck
import { Tendermint34Client, HttpEndpoint } from "@cosmjs/tendermint-rpc";
import { QueryClient } from "@cosmjs/stargate";
export const createRPCQueryClient = async ({
  rpcEndpoint
}: {
  rpcEndpoint: string | HttpEndpoint;
}) => {
  const tmClient = await Tendermint34Client.connect(rpcEndpoint);
  const client = new QueryClient(tmClient);
  return {
    overlock: {
      crossplane: {
        v1beta1: (await import("./crossplane/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      storage: {
        v1beta1: (await import("./storage/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      }
    }
  };
};