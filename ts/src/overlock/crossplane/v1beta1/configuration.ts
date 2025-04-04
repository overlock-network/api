//@ts-nocheck
import { Metadata, MetadataAmino, MetadataSDKType } from "./metadata";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** Configuration holds the configuration details. */
export interface Configuration {
  id: bigint;
  metadata?: Metadata;
  creator: string;
}
export interface ConfigurationProtoMsg {
  typeUrl: "/overlock.crossplane.v1beta1.Configuration";
  value: Uint8Array;
}
/** Configuration holds the configuration details. */
export interface ConfigurationAmino {
  id?: string;
  metadata?: MetadataAmino;
  creator?: string;
}
export interface ConfigurationAminoMsg {
  type: "/overlock.crossplane.v1beta1.Configuration";
  value: ConfigurationAmino;
}
/** Configuration holds the configuration details. */
export interface ConfigurationSDKType {
  id: bigint;
  metadata?: MetadataSDKType;
  creator: string;
}
function createBaseConfiguration(): Configuration {
  return {
    id: BigInt(0),
    metadata: undefined,
    creator: ""
  };
}
export const Configuration = {
  typeUrl: "/overlock.crossplane.v1beta1.Configuration",
  encode(message: Configuration, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Configuration {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        case 3:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Configuration>): Configuration {
    const message = createBaseConfiguration();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: ConfigurationAmino): Configuration {
    const message = createBaseConfiguration();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromAmino(object.metadata);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: Configuration): ConfigurationAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
    obj.creator = message.creator === "" ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: ConfigurationAminoMsg): Configuration {
    return Configuration.fromAmino(object.value);
  },
  fromProtoMsg(message: ConfigurationProtoMsg): Configuration {
    return Configuration.decode(message.value);
  },
  toProto(message: Configuration): Uint8Array {
    return Configuration.encode(message).finish();
  },
  toProtoMsg(message: Configuration): ConfigurationProtoMsg {
    return {
      typeUrl: "/overlock.crossplane.v1beta1.Configuration",
      value: Configuration.encode(message).finish()
    };
  }
};