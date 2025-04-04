//@ts-nocheck
import { Metadata, MetadataAmino, MetadataSDKType } from "../../crossplane/v1beta1/metadata";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** OCIRegistry */
export interface OCIRegistry {
  /** id */
  id: bigint;
  /** creator */
  creator: string;
  /** metadata */
  metadata?: Metadata;
  /** spec */
  spec?: OCIRegistrySpec;
}
export interface OCIRegistryProtoMsg {
  typeUrl: "/overlock.storage.v1beta1.OCIRegistry";
  value: Uint8Array;
}
/** OCIRegistry */
export interface OCIRegistryAmino {
  /** id */
  id?: string;
  /** creator */
  creator?: string;
  /** metadata */
  metadata?: MetadataAmino;
  /** spec */
  spec?: OCIRegistrySpecAmino;
}
export interface OCIRegistryAminoMsg {
  type: "/overlock.storage.v1beta1.OCIRegistry";
  value: OCIRegistryAmino;
}
/** OCIRegistry */
export interface OCIRegistrySDKType {
  id: bigint;
  creator: string;
  metadata?: MetadataSDKType;
  spec?: OCIRegistrySpecSDKType;
}
/** RegistrySpec */
export interface OCIRegistrySpec {
  /** url */
  url: string;
  /** provider */
  provider: string;
}
export interface OCIRegistrySpecProtoMsg {
  typeUrl: "/overlock.storage.v1beta1.OCIRegistrySpec";
  value: Uint8Array;
}
/** RegistrySpec */
export interface OCIRegistrySpecAmino {
  /** url */
  url?: string;
  /** provider */
  provider?: string;
}
export interface OCIRegistrySpecAminoMsg {
  type: "/overlock.storage.v1beta1.OCIRegistrySpec";
  value: OCIRegistrySpecAmino;
}
/** RegistrySpec */
export interface OCIRegistrySpecSDKType {
  url: string;
  provider: string;
}
function createBaseOCIRegistry(): OCIRegistry {
  return {
    id: BigInt(0),
    creator: "",
    metadata: undefined,
    spec: undefined
  };
}
export const OCIRegistry = {
  typeUrl: "/overlock.storage.v1beta1.OCIRegistry",
  encode(message: OCIRegistry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(26).fork()).ldelim();
    }
    if (message.spec !== undefined) {
      OCIRegistrySpec.encode(message.spec, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OCIRegistry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOCIRegistry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        case 4:
          message.spec = OCIRegistrySpec.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OCIRegistry>): OCIRegistry {
    const message = createBaseOCIRegistry();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.creator = object.creator ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
    message.spec = object.spec !== undefined && object.spec !== null ? OCIRegistrySpec.fromPartial(object.spec) : undefined;
    return message;
  },
  fromAmino(object: OCIRegistryAmino): OCIRegistry {
    const message = createBaseOCIRegistry();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromAmino(object.metadata);
    }
    if (object.spec !== undefined && object.spec !== null) {
      message.spec = OCIRegistrySpec.fromAmino(object.spec);
    }
    return message;
  },
  toAmino(message: OCIRegistry): OCIRegistryAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
    obj.spec = message.spec ? OCIRegistrySpec.toAmino(message.spec) : undefined;
    return obj;
  },
  fromAminoMsg(object: OCIRegistryAminoMsg): OCIRegistry {
    return OCIRegistry.fromAmino(object.value);
  },
  fromProtoMsg(message: OCIRegistryProtoMsg): OCIRegistry {
    return OCIRegistry.decode(message.value);
  },
  toProto(message: OCIRegistry): Uint8Array {
    return OCIRegistry.encode(message).finish();
  },
  toProtoMsg(message: OCIRegistry): OCIRegistryProtoMsg {
    return {
      typeUrl: "/overlock.storage.v1beta1.OCIRegistry",
      value: OCIRegistry.encode(message).finish()
    };
  }
};
function createBaseOCIRegistrySpec(): OCIRegistrySpec {
  return {
    url: "",
    provider: ""
  };
}
export const OCIRegistrySpec = {
  typeUrl: "/overlock.storage.v1beta1.OCIRegistrySpec",
  encode(message: OCIRegistrySpec, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    if (message.provider !== "") {
      writer.uint32(26).string(message.provider);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OCIRegistrySpec {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOCIRegistrySpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.url = reader.string();
          break;
        case 3:
          message.provider = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OCIRegistrySpec>): OCIRegistrySpec {
    const message = createBaseOCIRegistrySpec();
    message.url = object.url ?? "";
    message.provider = object.provider ?? "";
    return message;
  },
  fromAmino(object: OCIRegistrySpecAmino): OCIRegistrySpec {
    const message = createBaseOCIRegistrySpec();
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    return message;
  },
  toAmino(message: OCIRegistrySpec): OCIRegistrySpecAmino {
    const obj: any = {};
    obj.url = message.url === "" ? undefined : message.url;
    obj.provider = message.provider === "" ? undefined : message.provider;
    return obj;
  },
  fromAminoMsg(object: OCIRegistrySpecAminoMsg): OCIRegistrySpec {
    return OCIRegistrySpec.fromAmino(object.value);
  },
  fromProtoMsg(message: OCIRegistrySpecProtoMsg): OCIRegistrySpec {
    return OCIRegistrySpec.decode(message.value);
  },
  toProto(message: OCIRegistrySpec): Uint8Array {
    return OCIRegistrySpec.encode(message).finish();
  },
  toProtoMsg(message: OCIRegistrySpec): OCIRegistrySpecProtoMsg {
    return {
      typeUrl: "/overlock.storage.v1beta1.OCIRegistrySpec",
      value: OCIRegistrySpec.encode(message).finish()
    };
  }
};