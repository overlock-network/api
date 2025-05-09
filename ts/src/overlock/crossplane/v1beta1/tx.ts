//@ts-nocheck
import { Metadata, MetadataAmino, MetadataSDKType } from "./metadata";
import { ConfigurationSpec, ConfigurationSpecAmino, ConfigurationSpecSDKType } from "./configuration";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
/** MsgCreateConfiguration */
export interface MsgCreateConfiguration {
  creator: string;
  metadata?: Metadata;
  spec?: ConfigurationSpec;
}
export interface MsgCreateConfigurationProtoMsg {
  typeUrl: "/overlock.crossplane.v1beta1.MsgCreateConfiguration";
  value: Uint8Array;
}
/** MsgCreateConfiguration */
export interface MsgCreateConfigurationAmino {
  creator?: string;
  metadata?: MetadataAmino;
  spec?: ConfigurationSpecAmino;
}
export interface MsgCreateConfigurationAminoMsg {
  type: "/overlock.crossplane.v1beta1.MsgCreateConfiguration";
  value: MsgCreateConfigurationAmino;
}
/** MsgCreateConfiguration */
export interface MsgCreateConfigurationSDKType {
  creator: string;
  metadata?: MetadataSDKType;
  spec?: ConfigurationSpecSDKType;
}
/** MsgCreateConfigurationResponse */
export interface MsgCreateConfigurationResponse {
  id: bigint;
}
export interface MsgCreateConfigurationResponseProtoMsg {
  typeUrl: "/overlock.crossplane.v1beta1.MsgCreateConfigurationResponse";
  value: Uint8Array;
}
/** MsgCreateConfigurationResponse */
export interface MsgCreateConfigurationResponseAmino {
  id?: string;
}
export interface MsgCreateConfigurationResponseAminoMsg {
  type: "/overlock.crossplane.v1beta1.MsgCreateConfigurationResponse";
  value: MsgCreateConfigurationResponseAmino;
}
/** MsgCreateConfigurationResponse */
export interface MsgCreateConfigurationResponseSDKType {
  id: bigint;
}
/** MsgUpdateConfiguration */
export interface MsgUpdateConfiguration {
  creator: string;
  id: bigint;
  metadata?: Metadata;
  spec?: ConfigurationSpec;
}
export interface MsgUpdateConfigurationProtoMsg {
  typeUrl: "/overlock.crossplane.v1beta1.MsgUpdateConfiguration";
  value: Uint8Array;
}
/** MsgUpdateConfiguration */
export interface MsgUpdateConfigurationAmino {
  creator?: string;
  id?: string;
  metadata?: MetadataAmino;
  spec?: ConfigurationSpecAmino;
}
export interface MsgUpdateConfigurationAminoMsg {
  type: "/overlock.crossplane.v1beta1.MsgUpdateConfiguration";
  value: MsgUpdateConfigurationAmino;
}
/** MsgUpdateConfiguration */
export interface MsgUpdateConfigurationSDKType {
  creator: string;
  id: bigint;
  metadata?: MetadataSDKType;
  spec?: ConfigurationSpecSDKType;
}
/** MsgUpdateConfigurationResponse */
export interface MsgUpdateConfigurationResponse {}
export interface MsgUpdateConfigurationResponseProtoMsg {
  typeUrl: "/overlock.crossplane.v1beta1.MsgUpdateConfigurationResponse";
  value: Uint8Array;
}
/** MsgUpdateConfigurationResponse */
export interface MsgUpdateConfigurationResponseAmino {}
export interface MsgUpdateConfigurationResponseAminoMsg {
  type: "/overlock.crossplane.v1beta1.MsgUpdateConfigurationResponse";
  value: MsgUpdateConfigurationResponseAmino;
}
/** MsgUpdateConfigurationResponse */
export interface MsgUpdateConfigurationResponseSDKType {}
/** MsgDeleteConfiguration */
export interface MsgDeleteConfiguration {
  creator: string;
  id: bigint;
}
export interface MsgDeleteConfigurationProtoMsg {
  typeUrl: "/overlock.crossplane.v1beta1.MsgDeleteConfiguration";
  value: Uint8Array;
}
/** MsgDeleteConfiguration */
export interface MsgDeleteConfigurationAmino {
  creator?: string;
  id?: string;
}
export interface MsgDeleteConfigurationAminoMsg {
  type: "/overlock.crossplane.v1beta1.MsgDeleteConfiguration";
  value: MsgDeleteConfigurationAmino;
}
/** MsgDeleteConfiguration */
export interface MsgDeleteConfigurationSDKType {
  creator: string;
  id: bigint;
}
/** MsgDeleteConfigurationResponse */
export interface MsgDeleteConfigurationResponse {}
export interface MsgDeleteConfigurationResponseProtoMsg {
  typeUrl: "/overlock.crossplane.v1beta1.MsgDeleteConfigurationResponse";
  value: Uint8Array;
}
/** MsgDeleteConfigurationResponse */
export interface MsgDeleteConfigurationResponseAmino {}
export interface MsgDeleteConfigurationResponseAminoMsg {
  type: "/overlock.crossplane.v1beta1.MsgDeleteConfigurationResponse";
  value: MsgDeleteConfigurationResponseAmino;
}
/** MsgDeleteConfigurationResponse */
export interface MsgDeleteConfigurationResponseSDKType {}
/** MsgCreateEnvironment */
export interface MsgCreateEnvironment {
  creator: string;
  metadata?: Metadata;
  provider: bigint;
}
export interface MsgCreateEnvironmentProtoMsg {
  typeUrl: "/overlock.crossplane.v1beta1.MsgCreateEnvironment";
  value: Uint8Array;
}
/** MsgCreateEnvironment */
export interface MsgCreateEnvironmentAmino {
  creator?: string;
  metadata?: MetadataAmino;
  provider?: string;
}
export interface MsgCreateEnvironmentAminoMsg {
  type: "/overlock.crossplane.v1beta1.MsgCreateEnvironment";
  value: MsgCreateEnvironmentAmino;
}
/** MsgCreateEnvironment */
export interface MsgCreateEnvironmentSDKType {
  creator: string;
  metadata?: MetadataSDKType;
  provider: bigint;
}
/** MsgCreateEnvironmentResponse */
export interface MsgCreateEnvironmentResponse {
  id: bigint;
}
export interface MsgCreateEnvironmentResponseProtoMsg {
  typeUrl: "/overlock.crossplane.v1beta1.MsgCreateEnvironmentResponse";
  value: Uint8Array;
}
/** MsgCreateEnvironmentResponse */
export interface MsgCreateEnvironmentResponseAmino {
  id?: string;
}
export interface MsgCreateEnvironmentResponseAminoMsg {
  type: "/overlock.crossplane.v1beta1.MsgCreateEnvironmentResponse";
  value: MsgCreateEnvironmentResponseAmino;
}
/** MsgCreateEnvironmentResponse */
export interface MsgCreateEnvironmentResponseSDKType {
  id: bigint;
}
/** MsgUpdateEnvironment */
export interface MsgUpdateEnvironment {
  creator: string;
  id: bigint;
  metadata?: Metadata;
  provider: bigint;
}
export interface MsgUpdateEnvironmentProtoMsg {
  typeUrl: "/overlock.crossplane.v1beta1.MsgUpdateEnvironment";
  value: Uint8Array;
}
/** MsgUpdateEnvironment */
export interface MsgUpdateEnvironmentAmino {
  creator?: string;
  id?: string;
  metadata?: MetadataAmino;
  provider?: string;
}
export interface MsgUpdateEnvironmentAminoMsg {
  type: "/overlock.crossplane.v1beta1.MsgUpdateEnvironment";
  value: MsgUpdateEnvironmentAmino;
}
/** MsgUpdateEnvironment */
export interface MsgUpdateEnvironmentSDKType {
  creator: string;
  id: bigint;
  metadata?: MetadataSDKType;
  provider: bigint;
}
/** MsgUpdateEnvironmentResponse */
export interface MsgUpdateEnvironmentResponse {
  id: bigint;
}
export interface MsgUpdateEnvironmentResponseProtoMsg {
  typeUrl: "/overlock.crossplane.v1beta1.MsgUpdateEnvironmentResponse";
  value: Uint8Array;
}
/** MsgUpdateEnvironmentResponse */
export interface MsgUpdateEnvironmentResponseAmino {
  id?: string;
}
export interface MsgUpdateEnvironmentResponseAminoMsg {
  type: "/overlock.crossplane.v1beta1.MsgUpdateEnvironmentResponse";
  value: MsgUpdateEnvironmentResponseAmino;
}
/** MsgUpdateEnvironmentResponse */
export interface MsgUpdateEnvironmentResponseSDKType {
  id: bigint;
}
/** MsgDeleteEnvironment */
export interface MsgDeleteEnvironment {
  creator: string;
  id: bigint;
}
export interface MsgDeleteEnvironmentProtoMsg {
  typeUrl: "/overlock.crossplane.v1beta1.MsgDeleteEnvironment";
  value: Uint8Array;
}
/** MsgDeleteEnvironment */
export interface MsgDeleteEnvironmentAmino {
  creator?: string;
  id?: string;
}
export interface MsgDeleteEnvironmentAminoMsg {
  type: "/overlock.crossplane.v1beta1.MsgDeleteEnvironment";
  value: MsgDeleteEnvironmentAmino;
}
/** MsgDeleteEnvironment */
export interface MsgDeleteEnvironmentSDKType {
  creator: string;
  id: bigint;
}
/** MsgDeleteEnvironmentResponse */
export interface MsgDeleteEnvironmentResponse {}
export interface MsgDeleteEnvironmentResponseProtoMsg {
  typeUrl: "/overlock.crossplane.v1beta1.MsgDeleteEnvironmentResponse";
  value: Uint8Array;
}
/** MsgDeleteEnvironmentResponse */
export interface MsgDeleteEnvironmentResponseAmino {}
export interface MsgDeleteEnvironmentResponseAminoMsg {
  type: "/overlock.crossplane.v1beta1.MsgDeleteEnvironmentResponse";
  value: MsgDeleteEnvironmentResponseAmino;
}
/** MsgDeleteEnvironmentResponse */
export interface MsgDeleteEnvironmentResponseSDKType {}
/** MsgCreateProvider */
export interface MsgCreateProvider {
  creator: string;
  metadata?: Metadata;
  ip: string;
  port: number;
  countryCode: string;
  environmentType: string;
  availability: string;
  registerTime?: Date;
}
export interface MsgCreateProviderProtoMsg {
  typeUrl: "/overlock.crossplane.v1beta1.MsgCreateProvider";
  value: Uint8Array;
}
/** MsgCreateProvider */
export interface MsgCreateProviderAmino {
  creator?: string;
  metadata?: MetadataAmino;
  ip?: string;
  port?: number;
  country_code?: string;
  environment_type?: string;
  availability?: string;
  register_time?: string;
}
export interface MsgCreateProviderAminoMsg {
  type: "/overlock.crossplane.v1beta1.MsgCreateProvider";
  value: MsgCreateProviderAmino;
}
/** MsgCreateProvider */
export interface MsgCreateProviderSDKType {
  creator: string;
  metadata?: MetadataSDKType;
  ip: string;
  port: number;
  country_code: string;
  environment_type: string;
  availability: string;
  register_time?: Date;
}
/** MsgCreateProviderResponse */
export interface MsgCreateProviderResponse {
  id: bigint;
}
export interface MsgCreateProviderResponseProtoMsg {
  typeUrl: "/overlock.crossplane.v1beta1.MsgCreateProviderResponse";
  value: Uint8Array;
}
/** MsgCreateProviderResponse */
export interface MsgCreateProviderResponseAmino {
  id?: string;
}
export interface MsgCreateProviderResponseAminoMsg {
  type: "/overlock.crossplane.v1beta1.MsgCreateProviderResponse";
  value: MsgCreateProviderResponseAmino;
}
/** MsgCreateProviderResponse */
export interface MsgCreateProviderResponseSDKType {
  id: bigint;
}
/** MsgUpdateProvider */
export interface MsgUpdateProvider {
  creator: string;
  id: bigint;
  metadata?: Metadata;
  ip: string;
  port: number;
  countryCode: string;
  environmentType: string;
  availability: string;
  registerTime?: Date;
}
export interface MsgUpdateProviderProtoMsg {
  typeUrl: "/overlock.crossplane.v1beta1.MsgUpdateProvider";
  value: Uint8Array;
}
/** MsgUpdateProvider */
export interface MsgUpdateProviderAmino {
  creator?: string;
  id?: string;
  metadata?: MetadataAmino;
  ip?: string;
  port?: number;
  country_code?: string;
  environment_type?: string;
  availability?: string;
  register_time?: string;
}
export interface MsgUpdateProviderAminoMsg {
  type: "/overlock.crossplane.v1beta1.MsgUpdateProvider";
  value: MsgUpdateProviderAmino;
}
/** MsgUpdateProvider */
export interface MsgUpdateProviderSDKType {
  creator: string;
  id: bigint;
  metadata?: MetadataSDKType;
  ip: string;
  port: number;
  country_code: string;
  environment_type: string;
  availability: string;
  register_time?: Date;
}
/** MsgUpdateProviderResponse */
export interface MsgUpdateProviderResponse {
  id: bigint;
}
export interface MsgUpdateProviderResponseProtoMsg {
  typeUrl: "/overlock.crossplane.v1beta1.MsgUpdateProviderResponse";
  value: Uint8Array;
}
/** MsgUpdateProviderResponse */
export interface MsgUpdateProviderResponseAmino {
  id?: string;
}
export interface MsgUpdateProviderResponseAminoMsg {
  type: "/overlock.crossplane.v1beta1.MsgUpdateProviderResponse";
  value: MsgUpdateProviderResponseAmino;
}
/** MsgUpdateProviderResponse */
export interface MsgUpdateProviderResponseSDKType {
  id: bigint;
}
/** MsgDeleteProvider */
export interface MsgDeleteProvider {
  creator: string;
  id: bigint;
}
export interface MsgDeleteProviderProtoMsg {
  typeUrl: "/overlock.crossplane.v1beta1.MsgDeleteProvider";
  value: Uint8Array;
}
/** MsgDeleteProvider */
export interface MsgDeleteProviderAmino {
  creator?: string;
  id?: string;
}
export interface MsgDeleteProviderAminoMsg {
  type: "/overlock.crossplane.v1beta1.MsgDeleteProvider";
  value: MsgDeleteProviderAmino;
}
/** MsgDeleteProvider */
export interface MsgDeleteProviderSDKType {
  creator: string;
  id: bigint;
}
/** MsgDeleteProviderResponse */
export interface MsgDeleteProviderResponse {}
export interface MsgDeleteProviderResponseProtoMsg {
  typeUrl: "/overlock.crossplane.v1beta1.MsgDeleteProviderResponse";
  value: Uint8Array;
}
/** MsgDeleteProviderResponse */
export interface MsgDeleteProviderResponseAmino {}
export interface MsgDeleteProviderResponseAminoMsg {
  type: "/overlock.crossplane.v1beta1.MsgDeleteProviderResponse";
  value: MsgDeleteProviderResponseAmino;
}
/** MsgDeleteProviderResponse */
export interface MsgDeleteProviderResponseSDKType {}
function createBaseMsgCreateConfiguration(): MsgCreateConfiguration {
  return {
    creator: "",
    metadata: undefined,
    spec: undefined
  };
}
export const MsgCreateConfiguration = {
  typeUrl: "/overlock.crossplane.v1beta1.MsgCreateConfiguration",
  encode(message: MsgCreateConfiguration, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(34).fork()).ldelim();
    }
    if (message.spec !== undefined) {
      ConfigurationSpec.encode(message.spec, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateConfiguration {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 4:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        case 5:
          message.spec = ConfigurationSpec.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateConfiguration>): MsgCreateConfiguration {
    const message = createBaseMsgCreateConfiguration();
    message.creator = object.creator ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
    message.spec = object.spec !== undefined && object.spec !== null ? ConfigurationSpec.fromPartial(object.spec) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateConfigurationAmino): MsgCreateConfiguration {
    const message = createBaseMsgCreateConfiguration();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromAmino(object.metadata);
    }
    if (object.spec !== undefined && object.spec !== null) {
      message.spec = ConfigurationSpec.fromAmino(object.spec);
    }
    return message;
  },
  toAmino(message: MsgCreateConfiguration): MsgCreateConfigurationAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
    obj.spec = message.spec ? ConfigurationSpec.toAmino(message.spec) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateConfigurationAminoMsg): MsgCreateConfiguration {
    return MsgCreateConfiguration.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateConfigurationProtoMsg): MsgCreateConfiguration {
    return MsgCreateConfiguration.decode(message.value);
  },
  toProto(message: MsgCreateConfiguration): Uint8Array {
    return MsgCreateConfiguration.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateConfiguration): MsgCreateConfigurationProtoMsg {
    return {
      typeUrl: "/overlock.crossplane.v1beta1.MsgCreateConfiguration",
      value: MsgCreateConfiguration.encode(message).finish()
    };
  }
};
function createBaseMsgCreateConfigurationResponse(): MsgCreateConfigurationResponse {
  return {
    id: BigInt(0)
  };
}
export const MsgCreateConfigurationResponse = {
  typeUrl: "/overlock.crossplane.v1beta1.MsgCreateConfigurationResponse",
  encode(message: MsgCreateConfigurationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateConfigurationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateConfigurationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateConfigurationResponse>): MsgCreateConfigurationResponse {
    const message = createBaseMsgCreateConfigurationResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateConfigurationResponseAmino): MsgCreateConfigurationResponse {
    const message = createBaseMsgCreateConfigurationResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgCreateConfigurationResponse): MsgCreateConfigurationResponseAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateConfigurationResponseAminoMsg): MsgCreateConfigurationResponse {
    return MsgCreateConfigurationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateConfigurationResponseProtoMsg): MsgCreateConfigurationResponse {
    return MsgCreateConfigurationResponse.decode(message.value);
  },
  toProto(message: MsgCreateConfigurationResponse): Uint8Array {
    return MsgCreateConfigurationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateConfigurationResponse): MsgCreateConfigurationResponseProtoMsg {
    return {
      typeUrl: "/overlock.crossplane.v1beta1.MsgCreateConfigurationResponse",
      value: MsgCreateConfigurationResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateConfiguration(): MsgUpdateConfiguration {
  return {
    creator: "",
    id: BigInt(0),
    metadata: undefined,
    spec: undefined
  };
}
export const MsgUpdateConfiguration = {
  typeUrl: "/overlock.crossplane.v1beta1.MsgUpdateConfiguration",
  encode(message: MsgUpdateConfiguration, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(42).fork()).ldelim();
    }
    if (message.spec !== undefined) {
      ConfigurationSpec.encode(message.spec, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateConfiguration {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        case 5:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        case 6:
          message.spec = ConfigurationSpec.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateConfiguration>): MsgUpdateConfiguration {
    const message = createBaseMsgUpdateConfiguration();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
    message.spec = object.spec !== undefined && object.spec !== null ? ConfigurationSpec.fromPartial(object.spec) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateConfigurationAmino): MsgUpdateConfiguration {
    const message = createBaseMsgUpdateConfiguration();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromAmino(object.metadata);
    }
    if (object.spec !== undefined && object.spec !== null) {
      message.spec = ConfigurationSpec.fromAmino(object.spec);
    }
    return message;
  },
  toAmino(message: MsgUpdateConfiguration): MsgUpdateConfigurationAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
    obj.spec = message.spec ? ConfigurationSpec.toAmino(message.spec) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateConfigurationAminoMsg): MsgUpdateConfiguration {
    return MsgUpdateConfiguration.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateConfigurationProtoMsg): MsgUpdateConfiguration {
    return MsgUpdateConfiguration.decode(message.value);
  },
  toProto(message: MsgUpdateConfiguration): Uint8Array {
    return MsgUpdateConfiguration.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateConfiguration): MsgUpdateConfigurationProtoMsg {
    return {
      typeUrl: "/overlock.crossplane.v1beta1.MsgUpdateConfiguration",
      value: MsgUpdateConfiguration.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateConfigurationResponse(): MsgUpdateConfigurationResponse {
  return {};
}
export const MsgUpdateConfigurationResponse = {
  typeUrl: "/overlock.crossplane.v1beta1.MsgUpdateConfigurationResponse",
  encode(_: MsgUpdateConfigurationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateConfigurationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateConfigurationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUpdateConfigurationResponse>): MsgUpdateConfigurationResponse {
    const message = createBaseMsgUpdateConfigurationResponse();
    return message;
  },
  fromAmino(_: MsgUpdateConfigurationResponseAmino): MsgUpdateConfigurationResponse {
    const message = createBaseMsgUpdateConfigurationResponse();
    return message;
  },
  toAmino(_: MsgUpdateConfigurationResponse): MsgUpdateConfigurationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateConfigurationResponseAminoMsg): MsgUpdateConfigurationResponse {
    return MsgUpdateConfigurationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateConfigurationResponseProtoMsg): MsgUpdateConfigurationResponse {
    return MsgUpdateConfigurationResponse.decode(message.value);
  },
  toProto(message: MsgUpdateConfigurationResponse): Uint8Array {
    return MsgUpdateConfigurationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateConfigurationResponse): MsgUpdateConfigurationResponseProtoMsg {
    return {
      typeUrl: "/overlock.crossplane.v1beta1.MsgUpdateConfigurationResponse",
      value: MsgUpdateConfigurationResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteConfiguration(): MsgDeleteConfiguration {
  return {
    creator: "",
    id: BigInt(0)
  };
}
export const MsgDeleteConfiguration = {
  typeUrl: "/overlock.crossplane.v1beta1.MsgDeleteConfiguration",
  encode(message: MsgDeleteConfiguration, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteConfiguration {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDeleteConfiguration>): MsgDeleteConfiguration {
    const message = createBaseMsgDeleteConfiguration();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgDeleteConfigurationAmino): MsgDeleteConfiguration {
    const message = createBaseMsgDeleteConfiguration();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgDeleteConfiguration): MsgDeleteConfigurationAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteConfigurationAminoMsg): MsgDeleteConfiguration {
    return MsgDeleteConfiguration.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteConfigurationProtoMsg): MsgDeleteConfiguration {
    return MsgDeleteConfiguration.decode(message.value);
  },
  toProto(message: MsgDeleteConfiguration): Uint8Array {
    return MsgDeleteConfiguration.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteConfiguration): MsgDeleteConfigurationProtoMsg {
    return {
      typeUrl: "/overlock.crossplane.v1beta1.MsgDeleteConfiguration",
      value: MsgDeleteConfiguration.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteConfigurationResponse(): MsgDeleteConfigurationResponse {
  return {};
}
export const MsgDeleteConfigurationResponse = {
  typeUrl: "/overlock.crossplane.v1beta1.MsgDeleteConfigurationResponse",
  encode(_: MsgDeleteConfigurationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteConfigurationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteConfigurationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgDeleteConfigurationResponse>): MsgDeleteConfigurationResponse {
    const message = createBaseMsgDeleteConfigurationResponse();
    return message;
  },
  fromAmino(_: MsgDeleteConfigurationResponseAmino): MsgDeleteConfigurationResponse {
    const message = createBaseMsgDeleteConfigurationResponse();
    return message;
  },
  toAmino(_: MsgDeleteConfigurationResponse): MsgDeleteConfigurationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteConfigurationResponseAminoMsg): MsgDeleteConfigurationResponse {
    return MsgDeleteConfigurationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteConfigurationResponseProtoMsg): MsgDeleteConfigurationResponse {
    return MsgDeleteConfigurationResponse.decode(message.value);
  },
  toProto(message: MsgDeleteConfigurationResponse): Uint8Array {
    return MsgDeleteConfigurationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteConfigurationResponse): MsgDeleteConfigurationResponseProtoMsg {
    return {
      typeUrl: "/overlock.crossplane.v1beta1.MsgDeleteConfigurationResponse",
      value: MsgDeleteConfigurationResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateEnvironment(): MsgCreateEnvironment {
  return {
    creator: "",
    metadata: undefined,
    provider: BigInt(0)
  };
}
export const MsgCreateEnvironment = {
  typeUrl: "/overlock.crossplane.v1beta1.MsgCreateEnvironment",
  encode(message: MsgCreateEnvironment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(26).fork()).ldelim();
    }
    if (message.provider !== BigInt(0)) {
      writer.uint32(32).uint64(message.provider);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateEnvironment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateEnvironment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 3:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        case 4:
          message.provider = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateEnvironment>): MsgCreateEnvironment {
    const message = createBaseMsgCreateEnvironment();
    message.creator = object.creator ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
    message.provider = object.provider !== undefined && object.provider !== null ? BigInt(object.provider.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateEnvironmentAmino): MsgCreateEnvironment {
    const message = createBaseMsgCreateEnvironment();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromAmino(object.metadata);
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = BigInt(object.provider);
    }
    return message;
  },
  toAmino(message: MsgCreateEnvironment): MsgCreateEnvironmentAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
    obj.provider = message.provider !== BigInt(0) ? message.provider?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateEnvironmentAminoMsg): MsgCreateEnvironment {
    return MsgCreateEnvironment.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateEnvironmentProtoMsg): MsgCreateEnvironment {
    return MsgCreateEnvironment.decode(message.value);
  },
  toProto(message: MsgCreateEnvironment): Uint8Array {
    return MsgCreateEnvironment.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateEnvironment): MsgCreateEnvironmentProtoMsg {
    return {
      typeUrl: "/overlock.crossplane.v1beta1.MsgCreateEnvironment",
      value: MsgCreateEnvironment.encode(message).finish()
    };
  }
};
function createBaseMsgCreateEnvironmentResponse(): MsgCreateEnvironmentResponse {
  return {
    id: BigInt(0)
  };
}
export const MsgCreateEnvironmentResponse = {
  typeUrl: "/overlock.crossplane.v1beta1.MsgCreateEnvironmentResponse",
  encode(message: MsgCreateEnvironmentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateEnvironmentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateEnvironmentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateEnvironmentResponse>): MsgCreateEnvironmentResponse {
    const message = createBaseMsgCreateEnvironmentResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateEnvironmentResponseAmino): MsgCreateEnvironmentResponse {
    const message = createBaseMsgCreateEnvironmentResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgCreateEnvironmentResponse): MsgCreateEnvironmentResponseAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateEnvironmentResponseAminoMsg): MsgCreateEnvironmentResponse {
    return MsgCreateEnvironmentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateEnvironmentResponseProtoMsg): MsgCreateEnvironmentResponse {
    return MsgCreateEnvironmentResponse.decode(message.value);
  },
  toProto(message: MsgCreateEnvironmentResponse): Uint8Array {
    return MsgCreateEnvironmentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateEnvironmentResponse): MsgCreateEnvironmentResponseProtoMsg {
    return {
      typeUrl: "/overlock.crossplane.v1beta1.MsgCreateEnvironmentResponse",
      value: MsgCreateEnvironmentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateEnvironment(): MsgUpdateEnvironment {
  return {
    creator: "",
    id: BigInt(0),
    metadata: undefined,
    provider: BigInt(0)
  };
}
export const MsgUpdateEnvironment = {
  typeUrl: "/overlock.crossplane.v1beta1.MsgUpdateEnvironment",
  encode(message: MsgUpdateEnvironment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(26).fork()).ldelim();
    }
    if (message.provider !== BigInt(0)) {
      writer.uint32(32).uint64(message.provider);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateEnvironment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateEnvironment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        case 3:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        case 4:
          message.provider = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateEnvironment>): MsgUpdateEnvironment {
    const message = createBaseMsgUpdateEnvironment();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
    message.provider = object.provider !== undefined && object.provider !== null ? BigInt(object.provider.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUpdateEnvironmentAmino): MsgUpdateEnvironment {
    const message = createBaseMsgUpdateEnvironment();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromAmino(object.metadata);
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = BigInt(object.provider);
    }
    return message;
  },
  toAmino(message: MsgUpdateEnvironment): MsgUpdateEnvironmentAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
    obj.provider = message.provider !== BigInt(0) ? message.provider?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateEnvironmentAminoMsg): MsgUpdateEnvironment {
    return MsgUpdateEnvironment.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateEnvironmentProtoMsg): MsgUpdateEnvironment {
    return MsgUpdateEnvironment.decode(message.value);
  },
  toProto(message: MsgUpdateEnvironment): Uint8Array {
    return MsgUpdateEnvironment.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateEnvironment): MsgUpdateEnvironmentProtoMsg {
    return {
      typeUrl: "/overlock.crossplane.v1beta1.MsgUpdateEnvironment",
      value: MsgUpdateEnvironment.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateEnvironmentResponse(): MsgUpdateEnvironmentResponse {
  return {
    id: BigInt(0)
  };
}
export const MsgUpdateEnvironmentResponse = {
  typeUrl: "/overlock.crossplane.v1beta1.MsgUpdateEnvironmentResponse",
  encode(message: MsgUpdateEnvironmentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateEnvironmentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateEnvironmentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateEnvironmentResponse>): MsgUpdateEnvironmentResponse {
    const message = createBaseMsgUpdateEnvironmentResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUpdateEnvironmentResponseAmino): MsgUpdateEnvironmentResponse {
    const message = createBaseMsgUpdateEnvironmentResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgUpdateEnvironmentResponse): MsgUpdateEnvironmentResponseAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateEnvironmentResponseAminoMsg): MsgUpdateEnvironmentResponse {
    return MsgUpdateEnvironmentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateEnvironmentResponseProtoMsg): MsgUpdateEnvironmentResponse {
    return MsgUpdateEnvironmentResponse.decode(message.value);
  },
  toProto(message: MsgUpdateEnvironmentResponse): Uint8Array {
    return MsgUpdateEnvironmentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateEnvironmentResponse): MsgUpdateEnvironmentResponseProtoMsg {
    return {
      typeUrl: "/overlock.crossplane.v1beta1.MsgUpdateEnvironmentResponse",
      value: MsgUpdateEnvironmentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteEnvironment(): MsgDeleteEnvironment {
  return {
    creator: "",
    id: BigInt(0)
  };
}
export const MsgDeleteEnvironment = {
  typeUrl: "/overlock.crossplane.v1beta1.MsgDeleteEnvironment",
  encode(message: MsgDeleteEnvironment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteEnvironment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteEnvironment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDeleteEnvironment>): MsgDeleteEnvironment {
    const message = createBaseMsgDeleteEnvironment();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgDeleteEnvironmentAmino): MsgDeleteEnvironment {
    const message = createBaseMsgDeleteEnvironment();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgDeleteEnvironment): MsgDeleteEnvironmentAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteEnvironmentAminoMsg): MsgDeleteEnvironment {
    return MsgDeleteEnvironment.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteEnvironmentProtoMsg): MsgDeleteEnvironment {
    return MsgDeleteEnvironment.decode(message.value);
  },
  toProto(message: MsgDeleteEnvironment): Uint8Array {
    return MsgDeleteEnvironment.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteEnvironment): MsgDeleteEnvironmentProtoMsg {
    return {
      typeUrl: "/overlock.crossplane.v1beta1.MsgDeleteEnvironment",
      value: MsgDeleteEnvironment.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteEnvironmentResponse(): MsgDeleteEnvironmentResponse {
  return {};
}
export const MsgDeleteEnvironmentResponse = {
  typeUrl: "/overlock.crossplane.v1beta1.MsgDeleteEnvironmentResponse",
  encode(_: MsgDeleteEnvironmentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteEnvironmentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteEnvironmentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgDeleteEnvironmentResponse>): MsgDeleteEnvironmentResponse {
    const message = createBaseMsgDeleteEnvironmentResponse();
    return message;
  },
  fromAmino(_: MsgDeleteEnvironmentResponseAmino): MsgDeleteEnvironmentResponse {
    const message = createBaseMsgDeleteEnvironmentResponse();
    return message;
  },
  toAmino(_: MsgDeleteEnvironmentResponse): MsgDeleteEnvironmentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteEnvironmentResponseAminoMsg): MsgDeleteEnvironmentResponse {
    return MsgDeleteEnvironmentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteEnvironmentResponseProtoMsg): MsgDeleteEnvironmentResponse {
    return MsgDeleteEnvironmentResponse.decode(message.value);
  },
  toProto(message: MsgDeleteEnvironmentResponse): Uint8Array {
    return MsgDeleteEnvironmentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteEnvironmentResponse): MsgDeleteEnvironmentResponseProtoMsg {
    return {
      typeUrl: "/overlock.crossplane.v1beta1.MsgDeleteEnvironmentResponse",
      value: MsgDeleteEnvironmentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateProvider(): MsgCreateProvider {
  return {
    creator: "",
    metadata: undefined,
    ip: "",
    port: 0,
    countryCode: "",
    environmentType: "",
    availability: "",
    registerTime: undefined
  };
}
export const MsgCreateProvider = {
  typeUrl: "/overlock.crossplane.v1beta1.MsgCreateProvider",
  encode(message: MsgCreateProvider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    if (message.ip !== "") {
      writer.uint32(26).string(message.ip);
    }
    if (message.port !== 0) {
      writer.uint32(32).uint32(message.port);
    }
    if (message.countryCode !== "") {
      writer.uint32(42).string(message.countryCode);
    }
    if (message.environmentType !== "") {
      writer.uint32(50).string(message.environmentType);
    }
    if (message.availability !== "") {
      writer.uint32(58).string(message.availability);
    }
    if (message.registerTime !== undefined) {
      Timestamp.encode(toTimestamp(message.registerTime), writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateProvider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        case 3:
          message.ip = reader.string();
          break;
        case 4:
          message.port = reader.uint32();
          break;
        case 5:
          message.countryCode = reader.string();
          break;
        case 6:
          message.environmentType = reader.string();
          break;
        case 7:
          message.availability = reader.string();
          break;
        case 8:
          message.registerTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateProvider>): MsgCreateProvider {
    const message = createBaseMsgCreateProvider();
    message.creator = object.creator ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
    message.ip = object.ip ?? "";
    message.port = object.port ?? 0;
    message.countryCode = object.countryCode ?? "";
    message.environmentType = object.environmentType ?? "";
    message.availability = object.availability ?? "";
    message.registerTime = object.registerTime ?? undefined;
    return message;
  },
  fromAmino(object: MsgCreateProviderAmino): MsgCreateProvider {
    const message = createBaseMsgCreateProvider();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromAmino(object.metadata);
    }
    if (object.ip !== undefined && object.ip !== null) {
      message.ip = object.ip;
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    }
    if (object.country_code !== undefined && object.country_code !== null) {
      message.countryCode = object.country_code;
    }
    if (object.environment_type !== undefined && object.environment_type !== null) {
      message.environmentType = object.environment_type;
    }
    if (object.availability !== undefined && object.availability !== null) {
      message.availability = object.availability;
    }
    if (object.register_time !== undefined && object.register_time !== null) {
      message.registerTime = fromTimestamp(Timestamp.fromAmino(object.register_time));
    }
    return message;
  },
  toAmino(message: MsgCreateProvider): MsgCreateProviderAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
    obj.ip = message.ip === "" ? undefined : message.ip;
    obj.port = message.port === 0 ? undefined : message.port;
    obj.country_code = message.countryCode === "" ? undefined : message.countryCode;
    obj.environment_type = message.environmentType === "" ? undefined : message.environmentType;
    obj.availability = message.availability === "" ? undefined : message.availability;
    obj.register_time = message.registerTime ? Timestamp.toAmino(toTimestamp(message.registerTime)) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateProviderAminoMsg): MsgCreateProvider {
    return MsgCreateProvider.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateProviderProtoMsg): MsgCreateProvider {
    return MsgCreateProvider.decode(message.value);
  },
  toProto(message: MsgCreateProvider): Uint8Array {
    return MsgCreateProvider.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateProvider): MsgCreateProviderProtoMsg {
    return {
      typeUrl: "/overlock.crossplane.v1beta1.MsgCreateProvider",
      value: MsgCreateProvider.encode(message).finish()
    };
  }
};
function createBaseMsgCreateProviderResponse(): MsgCreateProviderResponse {
  return {
    id: BigInt(0)
  };
}
export const MsgCreateProviderResponse = {
  typeUrl: "/overlock.crossplane.v1beta1.MsgCreateProviderResponse",
  encode(message: MsgCreateProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateProviderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProviderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateProviderResponse>): MsgCreateProviderResponse {
    const message = createBaseMsgCreateProviderResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateProviderResponseAmino): MsgCreateProviderResponse {
    const message = createBaseMsgCreateProviderResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgCreateProviderResponse): MsgCreateProviderResponseAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateProviderResponseAminoMsg): MsgCreateProviderResponse {
    return MsgCreateProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateProviderResponseProtoMsg): MsgCreateProviderResponse {
    return MsgCreateProviderResponse.decode(message.value);
  },
  toProto(message: MsgCreateProviderResponse): Uint8Array {
    return MsgCreateProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateProviderResponse): MsgCreateProviderResponseProtoMsg {
    return {
      typeUrl: "/overlock.crossplane.v1beta1.MsgCreateProviderResponse",
      value: MsgCreateProviderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateProvider(): MsgUpdateProvider {
  return {
    creator: "",
    id: BigInt(0),
    metadata: undefined,
    ip: "",
    port: 0,
    countryCode: "",
    environmentType: "",
    availability: "",
    registerTime: undefined
  };
}
export const MsgUpdateProvider = {
  typeUrl: "/overlock.crossplane.v1beta1.MsgUpdateProvider",
  encode(message: MsgUpdateProvider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(26).fork()).ldelim();
    }
    if (message.ip !== "") {
      writer.uint32(34).string(message.ip);
    }
    if (message.port !== 0) {
      writer.uint32(40).uint32(message.port);
    }
    if (message.countryCode !== "") {
      writer.uint32(50).string(message.countryCode);
    }
    if (message.environmentType !== "") {
      writer.uint32(58).string(message.environmentType);
    }
    if (message.availability !== "") {
      writer.uint32(66).string(message.availability);
    }
    if (message.registerTime !== undefined) {
      Timestamp.encode(toTimestamp(message.registerTime), writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateProvider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        case 3:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        case 4:
          message.ip = reader.string();
          break;
        case 5:
          message.port = reader.uint32();
          break;
        case 6:
          message.countryCode = reader.string();
          break;
        case 7:
          message.environmentType = reader.string();
          break;
        case 8:
          message.availability = reader.string();
          break;
        case 9:
          message.registerTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateProvider>): MsgUpdateProvider {
    const message = createBaseMsgUpdateProvider();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
    message.ip = object.ip ?? "";
    message.port = object.port ?? 0;
    message.countryCode = object.countryCode ?? "";
    message.environmentType = object.environmentType ?? "";
    message.availability = object.availability ?? "";
    message.registerTime = object.registerTime ?? undefined;
    return message;
  },
  fromAmino(object: MsgUpdateProviderAmino): MsgUpdateProvider {
    const message = createBaseMsgUpdateProvider();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromAmino(object.metadata);
    }
    if (object.ip !== undefined && object.ip !== null) {
      message.ip = object.ip;
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    }
    if (object.country_code !== undefined && object.country_code !== null) {
      message.countryCode = object.country_code;
    }
    if (object.environment_type !== undefined && object.environment_type !== null) {
      message.environmentType = object.environment_type;
    }
    if (object.availability !== undefined && object.availability !== null) {
      message.availability = object.availability;
    }
    if (object.register_time !== undefined && object.register_time !== null) {
      message.registerTime = fromTimestamp(Timestamp.fromAmino(object.register_time));
    }
    return message;
  },
  toAmino(message: MsgUpdateProvider): MsgUpdateProviderAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
    obj.ip = message.ip === "" ? undefined : message.ip;
    obj.port = message.port === 0 ? undefined : message.port;
    obj.country_code = message.countryCode === "" ? undefined : message.countryCode;
    obj.environment_type = message.environmentType === "" ? undefined : message.environmentType;
    obj.availability = message.availability === "" ? undefined : message.availability;
    obj.register_time = message.registerTime ? Timestamp.toAmino(toTimestamp(message.registerTime)) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateProviderAminoMsg): MsgUpdateProvider {
    return MsgUpdateProvider.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateProviderProtoMsg): MsgUpdateProvider {
    return MsgUpdateProvider.decode(message.value);
  },
  toProto(message: MsgUpdateProvider): Uint8Array {
    return MsgUpdateProvider.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateProvider): MsgUpdateProviderProtoMsg {
    return {
      typeUrl: "/overlock.crossplane.v1beta1.MsgUpdateProvider",
      value: MsgUpdateProvider.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateProviderResponse(): MsgUpdateProviderResponse {
  return {
    id: BigInt(0)
  };
}
export const MsgUpdateProviderResponse = {
  typeUrl: "/overlock.crossplane.v1beta1.MsgUpdateProviderResponse",
  encode(message: MsgUpdateProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateProviderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProviderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateProviderResponse>): MsgUpdateProviderResponse {
    const message = createBaseMsgUpdateProviderResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUpdateProviderResponseAmino): MsgUpdateProviderResponse {
    const message = createBaseMsgUpdateProviderResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgUpdateProviderResponse): MsgUpdateProviderResponseAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateProviderResponseAminoMsg): MsgUpdateProviderResponse {
    return MsgUpdateProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateProviderResponseProtoMsg): MsgUpdateProviderResponse {
    return MsgUpdateProviderResponse.decode(message.value);
  },
  toProto(message: MsgUpdateProviderResponse): Uint8Array {
    return MsgUpdateProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateProviderResponse): MsgUpdateProviderResponseProtoMsg {
    return {
      typeUrl: "/overlock.crossplane.v1beta1.MsgUpdateProviderResponse",
      value: MsgUpdateProviderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteProvider(): MsgDeleteProvider {
  return {
    creator: "",
    id: BigInt(0)
  };
}
export const MsgDeleteProvider = {
  typeUrl: "/overlock.crossplane.v1beta1.MsgDeleteProvider",
  encode(message: MsgDeleteProvider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteProvider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDeleteProvider>): MsgDeleteProvider {
    const message = createBaseMsgDeleteProvider();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgDeleteProviderAmino): MsgDeleteProvider {
    const message = createBaseMsgDeleteProvider();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgDeleteProvider): MsgDeleteProviderAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteProviderAminoMsg): MsgDeleteProvider {
    return MsgDeleteProvider.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteProviderProtoMsg): MsgDeleteProvider {
    return MsgDeleteProvider.decode(message.value);
  },
  toProto(message: MsgDeleteProvider): Uint8Array {
    return MsgDeleteProvider.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteProvider): MsgDeleteProviderProtoMsg {
    return {
      typeUrl: "/overlock.crossplane.v1beta1.MsgDeleteProvider",
      value: MsgDeleteProvider.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteProviderResponse(): MsgDeleteProviderResponse {
  return {};
}
export const MsgDeleteProviderResponse = {
  typeUrl: "/overlock.crossplane.v1beta1.MsgDeleteProviderResponse",
  encode(_: MsgDeleteProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteProviderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteProviderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgDeleteProviderResponse>): MsgDeleteProviderResponse {
    const message = createBaseMsgDeleteProviderResponse();
    return message;
  },
  fromAmino(_: MsgDeleteProviderResponseAmino): MsgDeleteProviderResponse {
    const message = createBaseMsgDeleteProviderResponse();
    return message;
  },
  toAmino(_: MsgDeleteProviderResponse): MsgDeleteProviderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteProviderResponseAminoMsg): MsgDeleteProviderResponse {
    return MsgDeleteProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteProviderResponseProtoMsg): MsgDeleteProviderResponse {
    return MsgDeleteProviderResponse.decode(message.value);
  },
  toProto(message: MsgDeleteProviderResponse): Uint8Array {
    return MsgDeleteProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteProviderResponse): MsgDeleteProviderResponseProtoMsg {
    return {
      typeUrl: "/overlock.crossplane.v1beta1.MsgDeleteProviderResponse",
      value: MsgDeleteProviderResponse.encode(message).finish()
    };
  }
};