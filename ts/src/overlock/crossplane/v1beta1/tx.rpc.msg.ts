//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgCreateEnvironment, MsgCreateEnvironmentResponse, MsgUpdateEnvironment, MsgUpdateEnvironmentResponse, MsgDeleteEnvironment, MsgDeleteEnvironmentResponse, MsgCreateProvider, MsgCreateProviderResponse, MsgUpdateProvider, MsgUpdateProviderResponse, MsgDeleteProvider, MsgDeleteProviderResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** CreateEnvironment */
  createEnvironment(request: MsgCreateEnvironment): Promise<MsgCreateEnvironmentResponse>;
  /** UpdateEnvironment */
  updateEnvironment(request: MsgUpdateEnvironment): Promise<MsgUpdateEnvironmentResponse>;
  /** DeleteEnvironment */
  deleteEnvironment(request: MsgDeleteEnvironment): Promise<MsgDeleteEnvironmentResponse>;
  /** CreateProvider */
  createProvider(request: MsgCreateProvider): Promise<MsgCreateProviderResponse>;
  /** UpdateProvider */
  updateProvider(request: MsgUpdateProvider): Promise<MsgUpdateProviderResponse>;
  /** DeleteProvider */
  deleteProvider(request: MsgDeleteProvider): Promise<MsgDeleteProviderResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createEnvironment = this.createEnvironment.bind(this);
    this.updateEnvironment = this.updateEnvironment.bind(this);
    this.deleteEnvironment = this.deleteEnvironment.bind(this);
    this.createProvider = this.createProvider.bind(this);
    this.updateProvider = this.updateProvider.bind(this);
    this.deleteProvider = this.deleteProvider.bind(this);
  }
  createEnvironment(request: MsgCreateEnvironment): Promise<MsgCreateEnvironmentResponse> {
    const data = MsgCreateEnvironment.encode(request).finish();
    const promise = this.rpc.request("overlock.crossplane.v1beta1.Msg", "CreateEnvironment", data);
    return promise.then(data => MsgCreateEnvironmentResponse.decode(new BinaryReader(data)));
  }
  updateEnvironment(request: MsgUpdateEnvironment): Promise<MsgUpdateEnvironmentResponse> {
    const data = MsgUpdateEnvironment.encode(request).finish();
    const promise = this.rpc.request("overlock.crossplane.v1beta1.Msg", "UpdateEnvironment", data);
    return promise.then(data => MsgUpdateEnvironmentResponse.decode(new BinaryReader(data)));
  }
  deleteEnvironment(request: MsgDeleteEnvironment): Promise<MsgDeleteEnvironmentResponse> {
    const data = MsgDeleteEnvironment.encode(request).finish();
    const promise = this.rpc.request("overlock.crossplane.v1beta1.Msg", "DeleteEnvironment", data);
    return promise.then(data => MsgDeleteEnvironmentResponse.decode(new BinaryReader(data)));
  }
  createProvider(request: MsgCreateProvider): Promise<MsgCreateProviderResponse> {
    const data = MsgCreateProvider.encode(request).finish();
    const promise = this.rpc.request("overlock.crossplane.v1beta1.Msg", "CreateProvider", data);
    return promise.then(data => MsgCreateProviderResponse.decode(new BinaryReader(data)));
  }
  updateProvider(request: MsgUpdateProvider): Promise<MsgUpdateProviderResponse> {
    const data = MsgUpdateProvider.encode(request).finish();
    const promise = this.rpc.request("overlock.crossplane.v1beta1.Msg", "UpdateProvider", data);
    return promise.then(data => MsgUpdateProviderResponse.decode(new BinaryReader(data)));
  }
  deleteProvider(request: MsgDeleteProvider): Promise<MsgDeleteProviderResponse> {
    const data = MsgDeleteProvider.encode(request).finish();
    const promise = this.rpc.request("overlock.crossplane.v1beta1.Msg", "DeleteProvider", data);
    return promise.then(data => MsgDeleteProviderResponse.decode(new BinaryReader(data)));
  }
}