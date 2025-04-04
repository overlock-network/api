//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Registry, RegistryAmino, RegistrySDKType } from "./registry";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface QueryShowRegistryRequest {
  id: bigint;
}
export interface QueryShowRegistryRequestProtoMsg {
  typeUrl: "/overlock.storage.v1beta1.QueryShowRegistryRequest";
  value: Uint8Array;
}
export interface QueryShowRegistryRequestAmino {
  id?: string;
}
export interface QueryShowRegistryRequestAminoMsg {
  type: "/overlock.storage.v1beta1.QueryShowRegistryRequest";
  value: QueryShowRegistryRequestAmino;
}
export interface QueryShowRegistryRequestSDKType {
  id: bigint;
}
export interface QueryShowRegistryResponse {
  registry: Registry;
}
export interface QueryShowRegistryResponseProtoMsg {
  typeUrl: "/overlock.storage.v1beta1.QueryShowRegistryResponse";
  value: Uint8Array;
}
export interface QueryShowRegistryResponseAmino {
  registry?: RegistryAmino;
}
export interface QueryShowRegistryResponseAminoMsg {
  type: "/overlock.storage.v1beta1.QueryShowRegistryResponse";
  value: QueryShowRegistryResponseAmino;
}
export interface QueryShowRegistryResponseSDKType {
  registry: RegistrySDKType;
}
export interface QueryListRegistryRequest {
  pagination?: PageRequest;
}
export interface QueryListRegistryRequestProtoMsg {
  typeUrl: "/overlock.storage.v1beta1.QueryListRegistryRequest";
  value: Uint8Array;
}
export interface QueryListRegistryRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryListRegistryRequestAminoMsg {
  type: "/overlock.storage.v1beta1.QueryListRegistryRequest";
  value: QueryListRegistryRequestAmino;
}
export interface QueryListRegistryRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryListRegistryResponse {
  registry: Registry[];
  pagination?: PageResponse;
}
export interface QueryListRegistryResponseProtoMsg {
  typeUrl: "/overlock.storage.v1beta1.QueryListRegistryResponse";
  value: Uint8Array;
}
export interface QueryListRegistryResponseAmino {
  registry?: RegistryAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryListRegistryResponseAminoMsg {
  type: "/overlock.storage.v1beta1.QueryListRegistryResponse";
  value: QueryListRegistryResponseAmino;
}
export interface QueryListRegistryResponseSDKType {
  registry: RegistrySDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryShowRegistryRequest(): QueryShowRegistryRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryShowRegistryRequest = {
  typeUrl: "/overlock.storage.v1beta1.QueryShowRegistryRequest",
  encode(message: QueryShowRegistryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShowRegistryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowRegistryRequest();
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
  fromPartial(object: Partial<QueryShowRegistryRequest>): QueryShowRegistryRequest {
    const message = createBaseQueryShowRegistryRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryShowRegistryRequestAmino): QueryShowRegistryRequest {
    const message = createBaseQueryShowRegistryRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryShowRegistryRequest): QueryShowRegistryRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryShowRegistryRequestAminoMsg): QueryShowRegistryRequest {
    return QueryShowRegistryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShowRegistryRequestProtoMsg): QueryShowRegistryRequest {
    return QueryShowRegistryRequest.decode(message.value);
  },
  toProto(message: QueryShowRegistryRequest): Uint8Array {
    return QueryShowRegistryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryShowRegistryRequest): QueryShowRegistryRequestProtoMsg {
    return {
      typeUrl: "/overlock.storage.v1beta1.QueryShowRegistryRequest",
      value: QueryShowRegistryRequest.encode(message).finish()
    };
  }
};
function createBaseQueryShowRegistryResponse(): QueryShowRegistryResponse {
  return {
    registry: Registry.fromPartial({})
  };
}
export const QueryShowRegistryResponse = {
  typeUrl: "/overlock.storage.v1beta1.QueryShowRegistryResponse",
  encode(message: QueryShowRegistryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.registry !== undefined) {
      Registry.encode(message.registry, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShowRegistryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowRegistryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.registry = Registry.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryShowRegistryResponse>): QueryShowRegistryResponse {
    const message = createBaseQueryShowRegistryResponse();
    message.registry = object.registry !== undefined && object.registry !== null ? Registry.fromPartial(object.registry) : undefined;
    return message;
  },
  fromAmino(object: QueryShowRegistryResponseAmino): QueryShowRegistryResponse {
    const message = createBaseQueryShowRegistryResponse();
    if (object.registry !== undefined && object.registry !== null) {
      message.registry = Registry.fromAmino(object.registry);
    }
    return message;
  },
  toAmino(message: QueryShowRegistryResponse): QueryShowRegistryResponseAmino {
    const obj: any = {};
    obj.registry = message.registry ? Registry.toAmino(message.registry) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryShowRegistryResponseAminoMsg): QueryShowRegistryResponse {
    return QueryShowRegistryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShowRegistryResponseProtoMsg): QueryShowRegistryResponse {
    return QueryShowRegistryResponse.decode(message.value);
  },
  toProto(message: QueryShowRegistryResponse): Uint8Array {
    return QueryShowRegistryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryShowRegistryResponse): QueryShowRegistryResponseProtoMsg {
    return {
      typeUrl: "/overlock.storage.v1beta1.QueryShowRegistryResponse",
      value: QueryShowRegistryResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListRegistryRequest(): QueryListRegistryRequest {
  return {
    pagination: undefined
  };
}
export const QueryListRegistryRequest = {
  typeUrl: "/overlock.storage.v1beta1.QueryListRegistryRequest",
  encode(message: QueryListRegistryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListRegistryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListRegistryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryListRegistryRequest>): QueryListRegistryRequest {
    const message = createBaseQueryListRegistryRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListRegistryRequestAmino): QueryListRegistryRequest {
    const message = createBaseQueryListRegistryRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListRegistryRequest): QueryListRegistryRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListRegistryRequestAminoMsg): QueryListRegistryRequest {
    return QueryListRegistryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListRegistryRequestProtoMsg): QueryListRegistryRequest {
    return QueryListRegistryRequest.decode(message.value);
  },
  toProto(message: QueryListRegistryRequest): Uint8Array {
    return QueryListRegistryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListRegistryRequest): QueryListRegistryRequestProtoMsg {
    return {
      typeUrl: "/overlock.storage.v1beta1.QueryListRegistryRequest",
      value: QueryListRegistryRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListRegistryResponse(): QueryListRegistryResponse {
  return {
    registry: [],
    pagination: undefined
  };
}
export const QueryListRegistryResponse = {
  typeUrl: "/overlock.storage.v1beta1.QueryListRegistryResponse",
  encode(message: QueryListRegistryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.registry) {
      Registry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListRegistryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListRegistryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.registry.push(Registry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryListRegistryResponse>): QueryListRegistryResponse {
    const message = createBaseQueryListRegistryResponse();
    message.registry = object.registry?.map(e => Registry.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListRegistryResponseAmino): QueryListRegistryResponse {
    const message = createBaseQueryListRegistryResponse();
    message.registry = object.registry?.map(e => Registry.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListRegistryResponse): QueryListRegistryResponseAmino {
    const obj: any = {};
    if (message.registry) {
      obj.registry = message.registry.map(e => e ? Registry.toAmino(e) : undefined);
    } else {
      obj.registry = message.registry;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListRegistryResponseAminoMsg): QueryListRegistryResponse {
    return QueryListRegistryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListRegistryResponseProtoMsg): QueryListRegistryResponse {
    return QueryListRegistryResponse.decode(message.value);
  },
  toProto(message: QueryListRegistryResponse): Uint8Array {
    return QueryListRegistryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListRegistryResponse): QueryListRegistryResponseProtoMsg {
    return {
      typeUrl: "/overlock.storage.v1beta1.QueryListRegistryResponse",
      value: QueryListRegistryResponse.encode(message).finish()
    };
  }
};