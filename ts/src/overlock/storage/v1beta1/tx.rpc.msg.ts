//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgCreateRegistry, MsgCreateRegistryResponse, MsgUpdateRegistry, MsgUpdateRegistryResponse, MsgDeleteRegistry, MsgDeleteRegistryResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  createRegistry(request: MsgCreateRegistry): Promise<MsgCreateRegistryResponse>;
  updateRegistry(request: MsgUpdateRegistry): Promise<MsgUpdateRegistryResponse>;
  deleteRegistry(request: MsgDeleteRegistry): Promise<MsgDeleteRegistryResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createRegistry = this.createRegistry.bind(this);
    this.updateRegistry = this.updateRegistry.bind(this);
    this.deleteRegistry = this.deleteRegistry.bind(this);
  }
  createRegistry(request: MsgCreateRegistry): Promise<MsgCreateRegistryResponse> {
    const data = MsgCreateRegistry.encode(request).finish();
    const promise = this.rpc.request("overlock.storage.v1beta1.Msg", "CreateRegistry", data);
    return promise.then(data => MsgCreateRegistryResponse.decode(new BinaryReader(data)));
  }
  updateRegistry(request: MsgUpdateRegistry): Promise<MsgUpdateRegistryResponse> {
    const data = MsgUpdateRegistry.encode(request).finish();
    const promise = this.rpc.request("overlock.storage.v1beta1.Msg", "UpdateRegistry", data);
    return promise.then(data => MsgUpdateRegistryResponse.decode(new BinaryReader(data)));
  }
  deleteRegistry(request: MsgDeleteRegistry): Promise<MsgDeleteRegistryResponse> {
    const data = MsgDeleteRegistry.encode(request).finish();
    const promise = this.rpc.request("overlock.storage.v1beta1.Msg", "DeleteRegistry", data);
    return promise.then(data => MsgDeleteRegistryResponse.decode(new BinaryReader(data)));
  }
}