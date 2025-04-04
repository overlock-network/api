//@ts-nocheck
import { ProtobufRpcClient } from "@cosmjs/stargate";
import * as _OverlockCrossplaneV1beta1Queryrpc from "./overlock/crossplane/v1beta1/query.rpc.Query";
import * as _OverlockStorageV1beta1Queryrpc from "./overlock/storage/v1beta1/query.rpc.Query";
export const createRpcQueryHooks = ({
  rpc
}: {
  rpc: ProtobufRpcClient | undefined;
}) => {
  return {
    overlock: {
      crossplane: {
        v1beta1: _OverlockCrossplaneV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      storage: {
        v1beta1: _OverlockStorageV1beta1Queryrpc.createRpcQueryHooks(rpc)
      }
    }
  };
};