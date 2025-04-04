//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgCreateConfiguration, MsgCreateConfigurationResponse, MsgUpdateConfiguration, MsgUpdateConfigurationResponse, MsgDeleteConfiguration, MsgDeleteConfigurationResponse, MsgCreateEnvironment, MsgCreateEnvironmentResponse, MsgUpdateEnvironment, MsgUpdateEnvironmentResponse, MsgDeleteEnvironment, MsgDeleteEnvironmentResponse, MsgCreateProvider, MsgCreateProviderResponse, MsgUpdateProvider, MsgUpdateProviderResponse, MsgDeleteProvider, MsgDeleteProviderResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** CreateConfiguration */
  createConfiguration(request: MsgCreateConfiguration): Promise<MsgCreateConfigurationResponse>;
  /** UpdateConfiguration */
  updateConfiguration(request: MsgUpdateConfiguration): Promise<MsgUpdateConfigurationResponse>;
  /** DeleteConfiguration */
  deleteConfiguration(request: MsgDeleteConfiguration): Promise<MsgDeleteConfigurationResponse>;
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
    this.createConfiguration = this.createConfiguration.bind(this);
    this.updateConfiguration = this.updateConfiguration.bind(this);
    this.deleteConfiguration = this.deleteConfiguration.bind(this);
    this.createEnvironment = this.createEnvironment.bind(this);
    this.updateEnvironment = this.updateEnvironment.bind(this);
    this.deleteEnvironment = this.deleteEnvironment.bind(this);
    this.createProvider = this.createProvider.bind(this);
    this.updateProvider = this.updateProvider.bind(this);
    this.deleteProvider = this.deleteProvider.bind(this);
  }
  createConfiguration(request: MsgCreateConfiguration): Promise<MsgCreateConfigurationResponse> {
    const data = MsgCreateConfiguration.encode(request).finish();
    const promise = this.rpc.request("overlock.crossplane.v1beta1.Msg", "CreateConfiguration", data);
    return promise.then(data => MsgCreateConfigurationResponse.decode(new BinaryReader(data)));
  }
  updateConfiguration(request: MsgUpdateConfiguration): Promise<MsgUpdateConfigurationResponse> {
    const data = MsgUpdateConfiguration.encode(request).finish();
    const promise = this.rpc.request("overlock.crossplane.v1beta1.Msg", "UpdateConfiguration", data);
    return promise.then(data => MsgUpdateConfigurationResponse.decode(new BinaryReader(data)));
  }
  deleteConfiguration(request: MsgDeleteConfiguration): Promise<MsgDeleteConfigurationResponse> {
    const data = MsgDeleteConfiguration.encode(request).finish();
    const promise = this.rpc.request("overlock.crossplane.v1beta1.Msg", "DeleteConfiguration", data);
    return promise.then(data => MsgDeleteConfigurationResponse.decode(new BinaryReader(data)));
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