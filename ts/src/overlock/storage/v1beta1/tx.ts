//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface MsgCreateRegistry {
  creator: string;
  name: string;
  provider: string;
  environmentId: bigint;
}
export interface MsgCreateRegistryProtoMsg {
  typeUrl: "/overlock.storage.v1beta1.MsgCreateRegistry";
  value: Uint8Array;
}
export interface MsgCreateRegistryAmino {
  creator?: string;
  name?: string;
  provider?: string;
  environment_id?: string;
}
export interface MsgCreateRegistryAminoMsg {
  type: "/overlock.storage.v1beta1.MsgCreateRegistry";
  value: MsgCreateRegistryAmino;
}
export interface MsgCreateRegistrySDKType {
  creator: string;
  name: string;
  provider: string;
  environment_id: bigint;
}
export interface MsgCreateRegistryResponse {
  id: bigint;
}
export interface MsgCreateRegistryResponseProtoMsg {
  typeUrl: "/overlock.storage.v1beta1.MsgCreateRegistryResponse";
  value: Uint8Array;
}
export interface MsgCreateRegistryResponseAmino {
  id?: string;
}
export interface MsgCreateRegistryResponseAminoMsg {
  type: "/overlock.storage.v1beta1.MsgCreateRegistryResponse";
  value: MsgCreateRegistryResponseAmino;
}
export interface MsgCreateRegistryResponseSDKType {
  id: bigint;
}
export interface MsgUpdateRegistry {
  creator: string;
  name: string;
  provider: string;
  id: bigint;
  environmentId: bigint;
}
export interface MsgUpdateRegistryProtoMsg {
  typeUrl: "/overlock.storage.v1beta1.MsgUpdateRegistry";
  value: Uint8Array;
}
export interface MsgUpdateRegistryAmino {
  creator?: string;
  name?: string;
  provider?: string;
  id?: string;
  environment_id?: string;
}
export interface MsgUpdateRegistryAminoMsg {
  type: "/overlock.storage.v1beta1.MsgUpdateRegistry";
  value: MsgUpdateRegistryAmino;
}
export interface MsgUpdateRegistrySDKType {
  creator: string;
  name: string;
  provider: string;
  id: bigint;
  environment_id: bigint;
}
export interface MsgUpdateRegistryResponse {}
export interface MsgUpdateRegistryResponseProtoMsg {
  typeUrl: "/overlock.storage.v1beta1.MsgUpdateRegistryResponse";
  value: Uint8Array;
}
export interface MsgUpdateRegistryResponseAmino {}
export interface MsgUpdateRegistryResponseAminoMsg {
  type: "/overlock.storage.v1beta1.MsgUpdateRegistryResponse";
  value: MsgUpdateRegistryResponseAmino;
}
export interface MsgUpdateRegistryResponseSDKType {}
export interface MsgDeleteRegistry {
  creator: string;
  id: bigint;
}
export interface MsgDeleteRegistryProtoMsg {
  typeUrl: "/overlock.storage.v1beta1.MsgDeleteRegistry";
  value: Uint8Array;
}
export interface MsgDeleteRegistryAmino {
  creator?: string;
  id?: string;
}
export interface MsgDeleteRegistryAminoMsg {
  type: "/overlock.storage.v1beta1.MsgDeleteRegistry";
  value: MsgDeleteRegistryAmino;
}
export interface MsgDeleteRegistrySDKType {
  creator: string;
  id: bigint;
}
export interface MsgDeleteRegistryResponse {}
export interface MsgDeleteRegistryResponseProtoMsg {
  typeUrl: "/overlock.storage.v1beta1.MsgDeleteRegistryResponse";
  value: Uint8Array;
}
export interface MsgDeleteRegistryResponseAmino {}
export interface MsgDeleteRegistryResponseAminoMsg {
  type: "/overlock.storage.v1beta1.MsgDeleteRegistryResponse";
  value: MsgDeleteRegistryResponseAmino;
}
export interface MsgDeleteRegistryResponseSDKType {}
function createBaseMsgCreateRegistry(): MsgCreateRegistry {
  return {
    creator: "",
    name: "",
    provider: "",
    environmentId: BigInt(0)
  };
}
export const MsgCreateRegistry = {
  typeUrl: "/overlock.storage.v1beta1.MsgCreateRegistry",
  encode(message: MsgCreateRegistry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.provider !== "") {
      writer.uint32(26).string(message.provider);
    }
    if (message.environmentId !== BigInt(0)) {
      writer.uint32(32).uint64(message.environmentId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateRegistry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRegistry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.provider = reader.string();
          break;
        case 4:
          message.environmentId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateRegistry>): MsgCreateRegistry {
    const message = createBaseMsgCreateRegistry();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.provider = object.provider ?? "";
    message.environmentId = object.environmentId !== undefined && object.environmentId !== null ? BigInt(object.environmentId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateRegistryAmino): MsgCreateRegistry {
    const message = createBaseMsgCreateRegistry();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    if (object.environment_id !== undefined && object.environment_id !== null) {
      message.environmentId = BigInt(object.environment_id);
    }
    return message;
  },
  toAmino(message: MsgCreateRegistry): MsgCreateRegistryAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.name = message.name === "" ? undefined : message.name;
    obj.provider = message.provider === "" ? undefined : message.provider;
    obj.environment_id = message.environmentId !== BigInt(0) ? message.environmentId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateRegistryAminoMsg): MsgCreateRegistry {
    return MsgCreateRegistry.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateRegistryProtoMsg): MsgCreateRegistry {
    return MsgCreateRegistry.decode(message.value);
  },
  toProto(message: MsgCreateRegistry): Uint8Array {
    return MsgCreateRegistry.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateRegistry): MsgCreateRegistryProtoMsg {
    return {
      typeUrl: "/overlock.storage.v1beta1.MsgCreateRegistry",
      value: MsgCreateRegistry.encode(message).finish()
    };
  }
};
function createBaseMsgCreateRegistryResponse(): MsgCreateRegistryResponse {
  return {
    id: BigInt(0)
  };
}
export const MsgCreateRegistryResponse = {
  typeUrl: "/overlock.storage.v1beta1.MsgCreateRegistryResponse",
  encode(message: MsgCreateRegistryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateRegistryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRegistryResponse();
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
  fromPartial(object: Partial<MsgCreateRegistryResponse>): MsgCreateRegistryResponse {
    const message = createBaseMsgCreateRegistryResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateRegistryResponseAmino): MsgCreateRegistryResponse {
    const message = createBaseMsgCreateRegistryResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgCreateRegistryResponse): MsgCreateRegistryResponseAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateRegistryResponseAminoMsg): MsgCreateRegistryResponse {
    return MsgCreateRegistryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateRegistryResponseProtoMsg): MsgCreateRegistryResponse {
    return MsgCreateRegistryResponse.decode(message.value);
  },
  toProto(message: MsgCreateRegistryResponse): Uint8Array {
    return MsgCreateRegistryResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateRegistryResponse): MsgCreateRegistryResponseProtoMsg {
    return {
      typeUrl: "/overlock.storage.v1beta1.MsgCreateRegistryResponse",
      value: MsgCreateRegistryResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateRegistry(): MsgUpdateRegistry {
  return {
    creator: "",
    name: "",
    provider: "",
    id: BigInt(0),
    environmentId: BigInt(0)
  };
}
export const MsgUpdateRegistry = {
  typeUrl: "/overlock.storage.v1beta1.MsgUpdateRegistry",
  encode(message: MsgUpdateRegistry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.provider !== "") {
      writer.uint32(26).string(message.provider);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(32).uint64(message.id);
    }
    if (message.environmentId !== BigInt(0)) {
      writer.uint32(40).uint64(message.environmentId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateRegistry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRegistry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.provider = reader.string();
          break;
        case 4:
          message.id = reader.uint64();
          break;
        case 5:
          message.environmentId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateRegistry>): MsgUpdateRegistry {
    const message = createBaseMsgUpdateRegistry();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.provider = object.provider ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.environmentId = object.environmentId !== undefined && object.environmentId !== null ? BigInt(object.environmentId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUpdateRegistryAmino): MsgUpdateRegistry {
    const message = createBaseMsgUpdateRegistry();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.environment_id !== undefined && object.environment_id !== null) {
      message.environmentId = BigInt(object.environment_id);
    }
    return message;
  },
  toAmino(message: MsgUpdateRegistry): MsgUpdateRegistryAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.name = message.name === "" ? undefined : message.name;
    obj.provider = message.provider === "" ? undefined : message.provider;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.environment_id = message.environmentId !== BigInt(0) ? message.environmentId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateRegistryAminoMsg): MsgUpdateRegistry {
    return MsgUpdateRegistry.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateRegistryProtoMsg): MsgUpdateRegistry {
    return MsgUpdateRegistry.decode(message.value);
  },
  toProto(message: MsgUpdateRegistry): Uint8Array {
    return MsgUpdateRegistry.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateRegistry): MsgUpdateRegistryProtoMsg {
    return {
      typeUrl: "/overlock.storage.v1beta1.MsgUpdateRegistry",
      value: MsgUpdateRegistry.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateRegistryResponse(): MsgUpdateRegistryResponse {
  return {};
}
export const MsgUpdateRegistryResponse = {
  typeUrl: "/overlock.storage.v1beta1.MsgUpdateRegistryResponse",
  encode(_: MsgUpdateRegistryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateRegistryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRegistryResponse();
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
  fromPartial(_: Partial<MsgUpdateRegistryResponse>): MsgUpdateRegistryResponse {
    const message = createBaseMsgUpdateRegistryResponse();
    return message;
  },
  fromAmino(_: MsgUpdateRegistryResponseAmino): MsgUpdateRegistryResponse {
    const message = createBaseMsgUpdateRegistryResponse();
    return message;
  },
  toAmino(_: MsgUpdateRegistryResponse): MsgUpdateRegistryResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateRegistryResponseAminoMsg): MsgUpdateRegistryResponse {
    return MsgUpdateRegistryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateRegistryResponseProtoMsg): MsgUpdateRegistryResponse {
    return MsgUpdateRegistryResponse.decode(message.value);
  },
  toProto(message: MsgUpdateRegistryResponse): Uint8Array {
    return MsgUpdateRegistryResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateRegistryResponse): MsgUpdateRegistryResponseProtoMsg {
    return {
      typeUrl: "/overlock.storage.v1beta1.MsgUpdateRegistryResponse",
      value: MsgUpdateRegistryResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteRegistry(): MsgDeleteRegistry {
  return {
    creator: "",
    id: BigInt(0)
  };
}
export const MsgDeleteRegistry = {
  typeUrl: "/overlock.storage.v1beta1.MsgDeleteRegistry",
  encode(message: MsgDeleteRegistry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteRegistry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteRegistry();
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
  fromPartial(object: Partial<MsgDeleteRegistry>): MsgDeleteRegistry {
    const message = createBaseMsgDeleteRegistry();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgDeleteRegistryAmino): MsgDeleteRegistry {
    const message = createBaseMsgDeleteRegistry();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgDeleteRegistry): MsgDeleteRegistryAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteRegistryAminoMsg): MsgDeleteRegistry {
    return MsgDeleteRegistry.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteRegistryProtoMsg): MsgDeleteRegistry {
    return MsgDeleteRegistry.decode(message.value);
  },
  toProto(message: MsgDeleteRegistry): Uint8Array {
    return MsgDeleteRegistry.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteRegistry): MsgDeleteRegistryProtoMsg {
    return {
      typeUrl: "/overlock.storage.v1beta1.MsgDeleteRegistry",
      value: MsgDeleteRegistry.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteRegistryResponse(): MsgDeleteRegistryResponse {
  return {};
}
export const MsgDeleteRegistryResponse = {
  typeUrl: "/overlock.storage.v1beta1.MsgDeleteRegistryResponse",
  encode(_: MsgDeleteRegistryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteRegistryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteRegistryResponse();
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
  fromPartial(_: Partial<MsgDeleteRegistryResponse>): MsgDeleteRegistryResponse {
    const message = createBaseMsgDeleteRegistryResponse();
    return message;
  },
  fromAmino(_: MsgDeleteRegistryResponseAmino): MsgDeleteRegistryResponse {
    const message = createBaseMsgDeleteRegistryResponse();
    return message;
  },
  toAmino(_: MsgDeleteRegistryResponse): MsgDeleteRegistryResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteRegistryResponseAminoMsg): MsgDeleteRegistryResponse {
    return MsgDeleteRegistryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteRegistryResponseProtoMsg): MsgDeleteRegistryResponse {
    return MsgDeleteRegistryResponse.decode(message.value);
  },
  toProto(message: MsgDeleteRegistryResponse): Uint8Array {
    return MsgDeleteRegistryResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteRegistryResponse): MsgDeleteRegistryResponseProtoMsg {
    return {
      typeUrl: "/overlock.storage.v1beta1.MsgDeleteRegistryResponse",
      value: MsgDeleteRegistryResponse.encode(message).finish()
    };
  }
};