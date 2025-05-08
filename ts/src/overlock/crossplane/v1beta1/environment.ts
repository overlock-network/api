//@ts-nocheck
import { Metadata, MetadataAmino, MetadataSDKType } from "./metadata";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** Environment */
export interface Environment {
  /** metadata */
  metadata?: Metadata;
  /** id */
  id: bigint;
  /** creator */
  creator: string;
  /** provider */
  provider: bigint;
}
export interface EnvironmentProtoMsg {
  typeUrl: "/overlock.crossplane.v1beta1.Environment";
  value: Uint8Array;
}
/** Environment */
export interface EnvironmentAmino {
  /** metadata */
  metadata?: MetadataAmino;
  /** id */
  id?: string;
  /** creator */
  creator?: string;
  /** provider */
  provider?: string;
}
export interface EnvironmentAminoMsg {
  type: "/overlock.crossplane.v1beta1.Environment";
  value: EnvironmentAmino;
}
/** Environment */
export interface EnvironmentSDKType {
  metadata?: MetadataSDKType;
  id: bigint;
  creator: string;
  provider: bigint;
}
function createBaseEnvironment(): Environment {
  return {
    metadata: undefined,
    id: BigInt(0),
    creator: "",
    provider: BigInt(0)
  };
}
export const Environment = {
  typeUrl: "/overlock.crossplane.v1beta1.Environment",
  encode(message: Environment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    if (message.provider !== BigInt(0)) {
      writer.uint32(32).uint64(message.provider);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Environment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnvironment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        case 2:
          message.id = reader.uint64();
          break;
        case 3:
          message.creator = reader.string();
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
  fromPartial(object: Partial<Environment>): Environment {
    const message = createBaseEnvironment();
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.creator = object.creator ?? "";
    message.provider = object.provider !== undefined && object.provider !== null ? BigInt(object.provider.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EnvironmentAmino): Environment {
    const message = createBaseEnvironment();
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromAmino(object.metadata);
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = BigInt(object.provider);
    }
    return message;
  },
  toAmino(message: Environment): EnvironmentAmino {
    const obj: any = {};
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.provider = message.provider !== BigInt(0) ? message.provider?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EnvironmentAminoMsg): Environment {
    return Environment.fromAmino(object.value);
  },
  fromProtoMsg(message: EnvironmentProtoMsg): Environment {
    return Environment.decode(message.value);
  },
  toProto(message: Environment): Uint8Array {
    return Environment.encode(message).finish();
  },
  toProtoMsg(message: Environment): EnvironmentProtoMsg {
    return {
      typeUrl: "/overlock.crossplane.v1beta1.Environment",
      value: Environment.encode(message).finish()
    };
  }
};