//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { StringValue, StringValueAmino, StringValueSDKType } from "../../../google/protobuf/wrappers";
import { Environment, EnvironmentAmino, EnvironmentSDKType } from "./environment";
import { Provider, ProviderAmino, ProviderSDKType } from "./provider";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryShowEnvironmentRequest */
export interface QueryShowEnvironmentRequest {
  id: bigint;
}
export interface QueryShowEnvironmentRequestProtoMsg {
  typeUrl: "/overlock.crossplane.v1beta1.QueryShowEnvironmentRequest";
  value: Uint8Array;
}
/** QueryShowEnvironmentRequest */
export interface QueryShowEnvironmentRequestAmino {
  id?: string;
}
export interface QueryShowEnvironmentRequestAminoMsg {
  type: "/overlock.crossplane.v1beta1.QueryShowEnvironmentRequest";
  value: QueryShowEnvironmentRequestAmino;
}
/** QueryShowEnvironmentRequest */
export interface QueryShowEnvironmentRequestSDKType {
  id: bigint;
}
/** QueryShowEnvironmentResponse */
export interface QueryShowEnvironmentResponse {
  environment?: Environment;
}
export interface QueryShowEnvironmentResponseProtoMsg {
  typeUrl: "/overlock.crossplane.v1beta1.QueryShowEnvironmentResponse";
  value: Uint8Array;
}
/** QueryShowEnvironmentResponse */
export interface QueryShowEnvironmentResponseAmino {
  environment?: EnvironmentAmino;
}
export interface QueryShowEnvironmentResponseAminoMsg {
  type: "/overlock.crossplane.v1beta1.QueryShowEnvironmentResponse";
  value: QueryShowEnvironmentResponseAmino;
}
/** QueryShowEnvironmentResponse */
export interface QueryShowEnvironmentResponseSDKType {
  environment?: EnvironmentSDKType;
}
/** QueryListEnvironmentRequest */
export interface QueryListEnvironmentRequest {
  pagination?: PageRequest;
  creator: string;
}
export interface QueryListEnvironmentRequestProtoMsg {
  typeUrl: "/overlock.crossplane.v1beta1.QueryListEnvironmentRequest";
  value: Uint8Array;
}
/** QueryListEnvironmentRequest */
export interface QueryListEnvironmentRequestAmino {
  pagination?: PageRequestAmino;
  creator?: string;
}
export interface QueryListEnvironmentRequestAminoMsg {
  type: "/overlock.crossplane.v1beta1.QueryListEnvironmentRequest";
  value: QueryListEnvironmentRequestAmino;
}
/** QueryListEnvironmentRequest */
export interface QueryListEnvironmentRequestSDKType {
  pagination?: PageRequestSDKType;
  creator: string;
}
/** QueryListEnvironmentResponse */
export interface QueryListEnvironmentResponse {
  environments: Environment[];
  pagination?: PageResponse;
}
export interface QueryListEnvironmentResponseProtoMsg {
  typeUrl: "/overlock.crossplane.v1beta1.QueryListEnvironmentResponse";
  value: Uint8Array;
}
/** QueryListEnvironmentResponse */
export interface QueryListEnvironmentResponseAmino {
  environments?: EnvironmentAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryListEnvironmentResponseAminoMsg {
  type: "/overlock.crossplane.v1beta1.QueryListEnvironmentResponse";
  value: QueryListEnvironmentResponseAmino;
}
/** QueryListEnvironmentResponse */
export interface QueryListEnvironmentResponseSDKType {
  environments: EnvironmentSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryShowProviderRequest */
export interface QueryShowProviderRequest {
  id: bigint;
}
export interface QueryShowProviderRequestProtoMsg {
  typeUrl: "/overlock.crossplane.v1beta1.QueryShowProviderRequest";
  value: Uint8Array;
}
/** QueryShowProviderRequest */
export interface QueryShowProviderRequestAmino {
  id?: string;
}
export interface QueryShowProviderRequestAminoMsg {
  type: "/overlock.crossplane.v1beta1.QueryShowProviderRequest";
  value: QueryShowProviderRequestAmino;
}
/** QueryShowProviderRequest */
export interface QueryShowProviderRequestSDKType {
  id: bigint;
}
/** QueryShowProviderResponse */
export interface QueryShowProviderResponse {
  provider?: Provider;
}
export interface QueryShowProviderResponseProtoMsg {
  typeUrl: "/overlock.crossplane.v1beta1.QueryShowProviderResponse";
  value: Uint8Array;
}
/** QueryShowProviderResponse */
export interface QueryShowProviderResponseAmino {
  Provider?: ProviderAmino;
}
export interface QueryShowProviderResponseAminoMsg {
  type: "/overlock.crossplane.v1beta1.QueryShowProviderResponse";
  value: QueryShowProviderResponseAmino;
}
/** QueryShowProviderResponse */
export interface QueryShowProviderResponseSDKType {
  Provider?: ProviderSDKType;
}
/** QueryListProviderRequest */
export interface QueryListProviderRequest {
  pagination?: PageRequest;
  creator?: StringValue;
}
export interface QueryListProviderRequestProtoMsg {
  typeUrl: "/overlock.crossplane.v1beta1.QueryListProviderRequest";
  value: Uint8Array;
}
/** QueryListProviderRequest */
export interface QueryListProviderRequestAmino {
  pagination?: PageRequestAmino;
  creator?: StringValueAmino;
}
export interface QueryListProviderRequestAminoMsg {
  type: "/overlock.crossplane.v1beta1.QueryListProviderRequest";
  value: QueryListProviderRequestAmino;
}
/** QueryListProviderRequest */
export interface QueryListProviderRequestSDKType {
  pagination?: PageRequestSDKType;
  creator?: StringValueSDKType;
}
/** QueryListProviderResponse */
export interface QueryListProviderResponse {
  providers: Provider[];
  pagination?: PageResponse;
}
export interface QueryListProviderResponseProtoMsg {
  typeUrl: "/overlock.crossplane.v1beta1.QueryListProviderResponse";
  value: Uint8Array;
}
/** QueryListProviderResponse */
export interface QueryListProviderResponseAmino {
  Providers?: ProviderAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryListProviderResponseAminoMsg {
  type: "/overlock.crossplane.v1beta1.QueryListProviderResponse";
  value: QueryListProviderResponseAmino;
}
/** QueryListProviderResponse */
export interface QueryListProviderResponseSDKType {
  Providers: ProviderSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryShowEnvironmentRequest(): QueryShowEnvironmentRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryShowEnvironmentRequest = {
  typeUrl: "/overlock.crossplane.v1beta1.QueryShowEnvironmentRequest",
  encode(message: QueryShowEnvironmentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShowEnvironmentRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowEnvironmentRequest();
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
  fromPartial(object: Partial<QueryShowEnvironmentRequest>): QueryShowEnvironmentRequest {
    const message = createBaseQueryShowEnvironmentRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryShowEnvironmentRequestAmino): QueryShowEnvironmentRequest {
    const message = createBaseQueryShowEnvironmentRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryShowEnvironmentRequest): QueryShowEnvironmentRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryShowEnvironmentRequestAminoMsg): QueryShowEnvironmentRequest {
    return QueryShowEnvironmentRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShowEnvironmentRequestProtoMsg): QueryShowEnvironmentRequest {
    return QueryShowEnvironmentRequest.decode(message.value);
  },
  toProto(message: QueryShowEnvironmentRequest): Uint8Array {
    return QueryShowEnvironmentRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryShowEnvironmentRequest): QueryShowEnvironmentRequestProtoMsg {
    return {
      typeUrl: "/overlock.crossplane.v1beta1.QueryShowEnvironmentRequest",
      value: QueryShowEnvironmentRequest.encode(message).finish()
    };
  }
};
function createBaseQueryShowEnvironmentResponse(): QueryShowEnvironmentResponse {
  return {
    environment: undefined
  };
}
export const QueryShowEnvironmentResponse = {
  typeUrl: "/overlock.crossplane.v1beta1.QueryShowEnvironmentResponse",
  encode(message: QueryShowEnvironmentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.environment !== undefined) {
      Environment.encode(message.environment, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShowEnvironmentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowEnvironmentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.environment = Environment.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryShowEnvironmentResponse>): QueryShowEnvironmentResponse {
    const message = createBaseQueryShowEnvironmentResponse();
    message.environment = object.environment !== undefined && object.environment !== null ? Environment.fromPartial(object.environment) : undefined;
    return message;
  },
  fromAmino(object: QueryShowEnvironmentResponseAmino): QueryShowEnvironmentResponse {
    const message = createBaseQueryShowEnvironmentResponse();
    if (object.environment !== undefined && object.environment !== null) {
      message.environment = Environment.fromAmino(object.environment);
    }
    return message;
  },
  toAmino(message: QueryShowEnvironmentResponse): QueryShowEnvironmentResponseAmino {
    const obj: any = {};
    obj.environment = message.environment ? Environment.toAmino(message.environment) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryShowEnvironmentResponseAminoMsg): QueryShowEnvironmentResponse {
    return QueryShowEnvironmentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShowEnvironmentResponseProtoMsg): QueryShowEnvironmentResponse {
    return QueryShowEnvironmentResponse.decode(message.value);
  },
  toProto(message: QueryShowEnvironmentResponse): Uint8Array {
    return QueryShowEnvironmentResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryShowEnvironmentResponse): QueryShowEnvironmentResponseProtoMsg {
    return {
      typeUrl: "/overlock.crossplane.v1beta1.QueryShowEnvironmentResponse",
      value: QueryShowEnvironmentResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListEnvironmentRequest(): QueryListEnvironmentRequest {
  return {
    pagination: undefined,
    creator: ""
  };
}
export const QueryListEnvironmentRequest = {
  typeUrl: "/overlock.crossplane.v1beta1.QueryListEnvironmentRequest",
  encode(message: QueryListEnvironmentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListEnvironmentRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListEnvironmentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryListEnvironmentRequest>): QueryListEnvironmentRequest {
    const message = createBaseQueryListEnvironmentRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: QueryListEnvironmentRequestAmino): QueryListEnvironmentRequest {
    const message = createBaseQueryListEnvironmentRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: QueryListEnvironmentRequest): QueryListEnvironmentRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.creator = message.creator === "" ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: QueryListEnvironmentRequestAminoMsg): QueryListEnvironmentRequest {
    return QueryListEnvironmentRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListEnvironmentRequestProtoMsg): QueryListEnvironmentRequest {
    return QueryListEnvironmentRequest.decode(message.value);
  },
  toProto(message: QueryListEnvironmentRequest): Uint8Array {
    return QueryListEnvironmentRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListEnvironmentRequest): QueryListEnvironmentRequestProtoMsg {
    return {
      typeUrl: "/overlock.crossplane.v1beta1.QueryListEnvironmentRequest",
      value: QueryListEnvironmentRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListEnvironmentResponse(): QueryListEnvironmentResponse {
  return {
    environments: [],
    pagination: undefined
  };
}
export const QueryListEnvironmentResponse = {
  typeUrl: "/overlock.crossplane.v1beta1.QueryListEnvironmentResponse",
  encode(message: QueryListEnvironmentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.environments) {
      Environment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListEnvironmentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListEnvironmentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.environments.push(Environment.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryListEnvironmentResponse>): QueryListEnvironmentResponse {
    const message = createBaseQueryListEnvironmentResponse();
    message.environments = object.environments?.map(e => Environment.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListEnvironmentResponseAmino): QueryListEnvironmentResponse {
    const message = createBaseQueryListEnvironmentResponse();
    message.environments = object.environments?.map(e => Environment.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListEnvironmentResponse): QueryListEnvironmentResponseAmino {
    const obj: any = {};
    if (message.environments) {
      obj.environments = message.environments.map(e => e ? Environment.toAmino(e) : undefined);
    } else {
      obj.environments = message.environments;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListEnvironmentResponseAminoMsg): QueryListEnvironmentResponse {
    return QueryListEnvironmentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListEnvironmentResponseProtoMsg): QueryListEnvironmentResponse {
    return QueryListEnvironmentResponse.decode(message.value);
  },
  toProto(message: QueryListEnvironmentResponse): Uint8Array {
    return QueryListEnvironmentResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListEnvironmentResponse): QueryListEnvironmentResponseProtoMsg {
    return {
      typeUrl: "/overlock.crossplane.v1beta1.QueryListEnvironmentResponse",
      value: QueryListEnvironmentResponse.encode(message).finish()
    };
  }
};
function createBaseQueryShowProviderRequest(): QueryShowProviderRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryShowProviderRequest = {
  typeUrl: "/overlock.crossplane.v1beta1.QueryShowProviderRequest",
  encode(message: QueryShowProviderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShowProviderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowProviderRequest();
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
  fromPartial(object: Partial<QueryShowProviderRequest>): QueryShowProviderRequest {
    const message = createBaseQueryShowProviderRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryShowProviderRequestAmino): QueryShowProviderRequest {
    const message = createBaseQueryShowProviderRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryShowProviderRequest): QueryShowProviderRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryShowProviderRequestAminoMsg): QueryShowProviderRequest {
    return QueryShowProviderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShowProviderRequestProtoMsg): QueryShowProviderRequest {
    return QueryShowProviderRequest.decode(message.value);
  },
  toProto(message: QueryShowProviderRequest): Uint8Array {
    return QueryShowProviderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryShowProviderRequest): QueryShowProviderRequestProtoMsg {
    return {
      typeUrl: "/overlock.crossplane.v1beta1.QueryShowProviderRequest",
      value: QueryShowProviderRequest.encode(message).finish()
    };
  }
};
function createBaseQueryShowProviderResponse(): QueryShowProviderResponse {
  return {
    provider: undefined
  };
}
export const QueryShowProviderResponse = {
  typeUrl: "/overlock.crossplane.v1beta1.QueryShowProviderResponse",
  encode(message: QueryShowProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.provider !== undefined) {
      Provider.encode(message.provider, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShowProviderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowProviderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = Provider.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryShowProviderResponse>): QueryShowProviderResponse {
    const message = createBaseQueryShowProviderResponse();
    message.provider = object.provider !== undefined && object.provider !== null ? Provider.fromPartial(object.provider) : undefined;
    return message;
  },
  fromAmino(object: QueryShowProviderResponseAmino): QueryShowProviderResponse {
    const message = createBaseQueryShowProviderResponse();
    if (object.Provider !== undefined && object.Provider !== null) {
      message.provider = Provider.fromAmino(object.Provider);
    }
    return message;
  },
  toAmino(message: QueryShowProviderResponse): QueryShowProviderResponseAmino {
    const obj: any = {};
    obj.Provider = message.provider ? Provider.toAmino(message.provider) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryShowProviderResponseAminoMsg): QueryShowProviderResponse {
    return QueryShowProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShowProviderResponseProtoMsg): QueryShowProviderResponse {
    return QueryShowProviderResponse.decode(message.value);
  },
  toProto(message: QueryShowProviderResponse): Uint8Array {
    return QueryShowProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryShowProviderResponse): QueryShowProviderResponseProtoMsg {
    return {
      typeUrl: "/overlock.crossplane.v1beta1.QueryShowProviderResponse",
      value: QueryShowProviderResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListProviderRequest(): QueryListProviderRequest {
  return {
    pagination: undefined,
    creator: undefined
  };
}
export const QueryListProviderRequest = {
  typeUrl: "/overlock.crossplane.v1beta1.QueryListProviderRequest",
  encode(message: QueryListProviderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.creator !== undefined) {
      StringValue.encode(message.creator, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListProviderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListProviderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.creator = StringValue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryListProviderRequest>): QueryListProviderRequest {
    const message = createBaseQueryListProviderRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.creator = object.creator !== undefined && object.creator !== null ? StringValue.fromPartial(object.creator) : undefined;
    return message;
  },
  fromAmino(object: QueryListProviderRequestAmino): QueryListProviderRequest {
    const message = createBaseQueryListProviderRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = StringValue.fromAmino(object.creator);
    }
    return message;
  },
  toAmino(message: QueryListProviderRequest): QueryListProviderRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.creator = message.creator ? StringValue.toAmino(message.creator) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListProviderRequestAminoMsg): QueryListProviderRequest {
    return QueryListProviderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListProviderRequestProtoMsg): QueryListProviderRequest {
    return QueryListProviderRequest.decode(message.value);
  },
  toProto(message: QueryListProviderRequest): Uint8Array {
    return QueryListProviderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListProviderRequest): QueryListProviderRequestProtoMsg {
    return {
      typeUrl: "/overlock.crossplane.v1beta1.QueryListProviderRequest",
      value: QueryListProviderRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListProviderResponse(): QueryListProviderResponse {
  return {
    providers: [],
    pagination: undefined
  };
}
export const QueryListProviderResponse = {
  typeUrl: "/overlock.crossplane.v1beta1.QueryListProviderResponse",
  encode(message: QueryListProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.providers) {
      Provider.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListProviderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListProviderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providers.push(Provider.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryListProviderResponse>): QueryListProviderResponse {
    const message = createBaseQueryListProviderResponse();
    message.providers = object.providers?.map(e => Provider.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListProviderResponseAmino): QueryListProviderResponse {
    const message = createBaseQueryListProviderResponse();
    message.providers = object.Providers?.map(e => Provider.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListProviderResponse): QueryListProviderResponseAmino {
    const obj: any = {};
    if (message.providers) {
      obj.Providers = message.providers.map(e => e ? Provider.toAmino(e) : undefined);
    } else {
      obj.Providers = message.providers;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListProviderResponseAminoMsg): QueryListProviderResponse {
    return QueryListProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListProviderResponseProtoMsg): QueryListProviderResponse {
    return QueryListProviderResponse.decode(message.value);
  },
  toProto(message: QueryListProviderResponse): Uint8Array {
    return QueryListProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListProviderResponse): QueryListProviderResponseProtoMsg {
    return {
      typeUrl: "/overlock.crossplane.v1beta1.QueryListProviderResponse",
      value: QueryListProviderResponse.encode(message).finish()
    };
  }
};