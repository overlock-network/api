//@ts-nocheck
import { Rpc } from "../helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  overlock: {
    crossplane: {
      v1beta1: new (await import("./crossplane/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    storage: {
      v1beta1: new (await import("./storage/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  }
});