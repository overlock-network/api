//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
/** Metadata contains metadata information. */
export interface Metadata {
  name: string;
  annotations: string;
}
export interface MetadataProtoMsg {
  typeUrl: "/overlock.crossplane.v1beta1.Metadata";
  value: Uint8Array;
}
/** Metadata contains metadata information. */
export interface MetadataAmino {
  name?: string;
  annotations?: string;
}
export interface MetadataAminoMsg {
  type: "/overlock.crossplane.v1beta1.Metadata";
  value: MetadataAmino;
}
/** Metadata contains metadata information. */
export interface MetadataSDKType {
  name: string;
  annotations: string;
}
function createBaseMetadata(): Metadata {
  return {
    name: "",
    annotations: ""
  };
}
export const Metadata = {
  typeUrl: "/overlock.crossplane.v1beta1.Metadata",
  encode(message: Metadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.annotations !== "") {
      writer.uint32(18).string(message.annotations);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Metadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.annotations = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Metadata>): Metadata {
    const message = createBaseMetadata();
    message.name = object.name ?? "";
    message.annotations = object.annotations ?? "";
    return message;
  },
  fromAmino(object: MetadataAmino): Metadata {
    const message = createBaseMetadata();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.annotations !== undefined && object.annotations !== null) {
      message.annotations = object.annotations;
    }
    return message;
  },
  toAmino(message: Metadata): MetadataAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.annotations = message.annotations === "" ? undefined : message.annotations;
    return obj;
  },
  fromAminoMsg(object: MetadataAminoMsg): Metadata {
    return Metadata.fromAmino(object.value);
  },
  fromProtoMsg(message: MetadataProtoMsg): Metadata {
    return Metadata.decode(message.value);
  },
  toProto(message: Metadata): Uint8Array {
    return Metadata.encode(message).finish();
  },
  toProtoMsg(message: Metadata): MetadataProtoMsg {
    return {
      typeUrl: "/overlock.crossplane.v1beta1.Metadata",
      value: Metadata.encode(message).finish()
    };
  }
};