//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface Registry {
  name: string;
  provider: string;
  id: bigint;
  environmentId: bigint;
}
export interface RegistryProtoMsg {
  typeUrl: "/overlock.storage.v1beta1.Registry";
  value: Uint8Array;
}
export interface RegistryAmino {
  name?: string;
  provider?: string;
  id?: string;
  environment_id?: string;
}
export interface RegistryAminoMsg {
  type: "/overlock.storage.v1beta1.Registry";
  value: RegistryAmino;
}
export interface RegistrySDKType {
  name: string;
  provider: string;
  id: bigint;
  environment_id: bigint;
}
function createBaseRegistry(): Registry {
  return {
    name: "",
    provider: "",
    id: BigInt(0),
    environmentId: BigInt(0)
  };
}
export const Registry = {
  typeUrl: "/overlock.storage.v1beta1.Registry",
  encode(message: Registry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(24).uint64(message.id);
    }
    if (message.environmentId !== BigInt(0)) {
      writer.uint32(32).uint64(message.environmentId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Registry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegistry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.provider = reader.string();
          break;
        case 3:
          message.id = reader.uint64();
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
  fromPartial(object: Partial<Registry>): Registry {
    const message = createBaseRegistry();
    message.name = object.name ?? "";
    message.provider = object.provider ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.environmentId = object.environmentId !== undefined && object.environmentId !== null ? BigInt(object.environmentId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RegistryAmino): Registry {
    const message = createBaseRegistry();
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
  toAmino(message: Registry): RegistryAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.provider = message.provider === "" ? undefined : message.provider;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.environment_id = message.environmentId !== BigInt(0) ? message.environmentId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RegistryAminoMsg): Registry {
    return Registry.fromAmino(object.value);
  },
  fromProtoMsg(message: RegistryProtoMsg): Registry {
    return Registry.decode(message.value);
  },
  toProto(message: Registry): Uint8Array {
    return Registry.encode(message).finish();
  },
  toProtoMsg(message: Registry): RegistryProtoMsg {
    return {
      typeUrl: "/overlock.storage.v1beta1.Registry",
      value: Registry.encode(message).finish()
    };
  }
};