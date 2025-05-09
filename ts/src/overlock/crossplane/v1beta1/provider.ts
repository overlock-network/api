//@ts-nocheck
import { Metadata, MetadataAmino, MetadataSDKType } from "./metadata";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
/** Provider */
export interface Provider {
  /** metadata */
  metadata?: Metadata;
  /** id */
  id: bigint;
  /** creator */
  creator: string;
  /** ip */
  ip: string;
  /** port */
  port: number;
  /** country code */
  countryCode: string;
  /** environment type */
  environmentType: string;
  /** availability */
  availability: string;
  /** register time */
  registerTime?: Date;
}
export interface ProviderProtoMsg {
  typeUrl: "/overlock.crossplane.v1beta1.Provider";
  value: Uint8Array;
}
/** Provider */
export interface ProviderAmino {
  /** metadata */
  metadata?: MetadataAmino;
  /** id */
  id?: string;
  /** creator */
  creator?: string;
  /** ip */
  ip?: string;
  /** port */
  port?: number;
  /** country code */
  country_code?: string;
  /** environment type */
  environment_type?: string;
  /** availability */
  availability?: string;
  /** register time */
  register_time?: string;
}
export interface ProviderAminoMsg {
  type: "/overlock.crossplane.v1beta1.Provider";
  value: ProviderAmino;
}
/** Provider */
export interface ProviderSDKType {
  metadata?: MetadataSDKType;
  id: bigint;
  creator: string;
  ip: string;
  port: number;
  country_code: string;
  environment_type: string;
  availability: string;
  register_time?: Date;
}
function createBaseProvider(): Provider {
  return {
    metadata: undefined,
    id: BigInt(0),
    creator: "",
    ip: "",
    port: 0,
    countryCode: "",
    environmentType: "",
    availability: "",
    registerTime: undefined
  };
}
export const Provider = {
  typeUrl: "/overlock.crossplane.v1beta1.Provider",
  encode(message: Provider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
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
  decode(input: BinaryReader | Uint8Array, length?: number): Provider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProvider();
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
  fromPartial(object: Partial<Provider>): Provider {
    const message = createBaseProvider();
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.creator = object.creator ?? "";
    message.ip = object.ip ?? "";
    message.port = object.port ?? 0;
    message.countryCode = object.countryCode ?? "";
    message.environmentType = object.environmentType ?? "";
    message.availability = object.availability ?? "";
    message.registerTime = object.registerTime ?? undefined;
    return message;
  },
  fromAmino(object: ProviderAmino): Provider {
    const message = createBaseProvider();
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromAmino(object.metadata);
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
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
  toAmino(message: Provider): ProviderAmino {
    const obj: any = {};
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.ip = message.ip === "" ? undefined : message.ip;
    obj.port = message.port === 0 ? undefined : message.port;
    obj.country_code = message.countryCode === "" ? undefined : message.countryCode;
    obj.environment_type = message.environmentType === "" ? undefined : message.environmentType;
    obj.availability = message.availability === "" ? undefined : message.availability;
    obj.register_time = message.registerTime ? Timestamp.toAmino(toTimestamp(message.registerTime)) : undefined;
    return obj;
  },
  fromAminoMsg(object: ProviderAminoMsg): Provider {
    return Provider.fromAmino(object.value);
  },
  fromProtoMsg(message: ProviderProtoMsg): Provider {
    return Provider.decode(message.value);
  },
  toProto(message: Provider): Uint8Array {
    return Provider.encode(message).finish();
  },
  toProtoMsg(message: Provider): ProviderProtoMsg {
    return {
      typeUrl: "/overlock.crossplane.v1beta1.Provider",
      value: Provider.encode(message).finish()
    };
  }
};