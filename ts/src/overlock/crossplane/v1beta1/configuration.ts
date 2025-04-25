//@ts-nocheck
import { Metadata, MetadataAmino, MetadataSDKType } from "./metadata";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** Configuration holds the configuration details. */
export interface Configuration {
  id: bigint;
  metadata?: Metadata;
  spec?: ConfigurationSpec;
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
  spec?: ConfigurationSpecAmino;
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
  spec?: ConfigurationSpecSDKType;
  creator: string;
}
/** Spec defines the specification of the composition. */
export interface ConfigurationSpec {
  crossplane?: CrossplaneSpec;
  package: string;
  aesKey: string;
}
export interface ConfigurationSpecProtoMsg {
  typeUrl: "/overlock.crossplane.v1beta1.ConfigurationSpec";
  value: Uint8Array;
}
/** Spec defines the specification of the composition. */
export interface ConfigurationSpecAmino {
  crossplane?: CrossplaneSpecAmino;
  package?: string;
  aes_key?: string;
}
export interface ConfigurationSpecAminoMsg {
  type: "/overlock.crossplane.v1beta1.ConfigurationSpec";
  value: ConfigurationSpecAmino;
}
/** Spec defines the specification of the composition. */
export interface ConfigurationSpecSDKType {
  crossplane?: CrossplaneSpecSDKType;
  package: string;
  aes_key: string;
}
/** Crossplane specs. */
export interface CrossplaneSpec {
  version: string;
}
export interface CrossplaneSpecProtoMsg {
  typeUrl: "/overlock.crossplane.v1beta1.CrossplaneSpec";
  value: Uint8Array;
}
/** Crossplane specs. */
export interface CrossplaneSpecAmino {
  version?: string;
}
export interface CrossplaneSpecAminoMsg {
  type: "/overlock.crossplane.v1beta1.CrossplaneSpec";
  value: CrossplaneSpecAmino;
}
/** Crossplane specs. */
export interface CrossplaneSpecSDKType {
  version: string;
}
function createBaseConfiguration(): Configuration {
  return {
    id: BigInt(0),
    metadata: undefined,
    spec: undefined,
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
    if (message.spec !== undefined) {
      ConfigurationSpec.encode(message.spec, writer.uint32(26).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
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
          message.spec = ConfigurationSpec.decode(reader, reader.uint32());
          break;
        case 4:
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
    message.spec = object.spec !== undefined && object.spec !== null ? ConfigurationSpec.fromPartial(object.spec) : undefined;
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
    if (object.spec !== undefined && object.spec !== null) {
      message.spec = ConfigurationSpec.fromAmino(object.spec);
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
    obj.spec = message.spec ? ConfigurationSpec.toAmino(message.spec) : undefined;
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
function createBaseConfigurationSpec(): ConfigurationSpec {
  return {
    crossplane: undefined,
    package: "",
    aesKey: ""
  };
}
export const ConfigurationSpec = {
  typeUrl: "/overlock.crossplane.v1beta1.ConfigurationSpec",
  encode(message: ConfigurationSpec, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.crossplane !== undefined) {
      CrossplaneSpec.encode(message.crossplane, writer.uint32(10).fork()).ldelim();
    }
    if (message.package !== "") {
      writer.uint32(18).string(message.package);
    }
    if (message.aesKey !== "") {
      writer.uint32(26).string(message.aesKey);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConfigurationSpec {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigurationSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.crossplane = CrossplaneSpec.decode(reader, reader.uint32());
          break;
        case 2:
          message.package = reader.string();
          break;
        case 3:
          message.aesKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ConfigurationSpec>): ConfigurationSpec {
    const message = createBaseConfigurationSpec();
    message.crossplane = object.crossplane !== undefined && object.crossplane !== null ? CrossplaneSpec.fromPartial(object.crossplane) : undefined;
    message.package = object.package ?? "";
    message.aesKey = object.aesKey ?? "";
    return message;
  },
  fromAmino(object: ConfigurationSpecAmino): ConfigurationSpec {
    const message = createBaseConfigurationSpec();
    if (object.crossplane !== undefined && object.crossplane !== null) {
      message.crossplane = CrossplaneSpec.fromAmino(object.crossplane);
    }
    if (object.package !== undefined && object.package !== null) {
      message.package = object.package;
    }
    if (object.aes_key !== undefined && object.aes_key !== null) {
      message.aesKey = object.aes_key;
    }
    return message;
  },
  toAmino(message: ConfigurationSpec): ConfigurationSpecAmino {
    const obj: any = {};
    obj.crossplane = message.crossplane ? CrossplaneSpec.toAmino(message.crossplane) : undefined;
    obj.package = message.package === "" ? undefined : message.package;
    obj.aes_key = message.aesKey === "" ? undefined : message.aesKey;
    return obj;
  },
  fromAminoMsg(object: ConfigurationSpecAminoMsg): ConfigurationSpec {
    return ConfigurationSpec.fromAmino(object.value);
  },
  fromProtoMsg(message: ConfigurationSpecProtoMsg): ConfigurationSpec {
    return ConfigurationSpec.decode(message.value);
  },
  toProto(message: ConfigurationSpec): Uint8Array {
    return ConfigurationSpec.encode(message).finish();
  },
  toProtoMsg(message: ConfigurationSpec): ConfigurationSpecProtoMsg {
    return {
      typeUrl: "/overlock.crossplane.v1beta1.ConfigurationSpec",
      value: ConfigurationSpec.encode(message).finish()
    };
  }
};
function createBaseCrossplaneSpec(): CrossplaneSpec {
  return {
    version: ""
  };
}
export const CrossplaneSpec = {
  typeUrl: "/overlock.crossplane.v1beta1.CrossplaneSpec",
  encode(message: CrossplaneSpec, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CrossplaneSpec {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCrossplaneSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<CrossplaneSpec>): CrossplaneSpec {
    const message = createBaseCrossplaneSpec();
    message.version = object.version ?? "";
    return message;
  },
  fromAmino(object: CrossplaneSpecAmino): CrossplaneSpec {
    const message = createBaseCrossplaneSpec();
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    return message;
  },
  toAmino(message: CrossplaneSpec): CrossplaneSpecAmino {
    const obj: any = {};
    obj.version = message.version === "" ? undefined : message.version;
    return obj;
  },
  fromAminoMsg(object: CrossplaneSpecAminoMsg): CrossplaneSpec {
    return CrossplaneSpec.fromAmino(object.value);
  },
  fromProtoMsg(message: CrossplaneSpecProtoMsg): CrossplaneSpec {
    return CrossplaneSpec.decode(message.value);
  },
  toProto(message: CrossplaneSpec): Uint8Array {
    return CrossplaneSpec.encode(message).finish();
  },
  toProtoMsg(message: CrossplaneSpec): CrossplaneSpecProtoMsg {
    return {
      typeUrl: "/overlock.crossplane.v1beta1.CrossplaneSpec",
      value: CrossplaneSpec.encode(message).finish()
    };
  }
};