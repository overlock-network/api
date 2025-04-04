//@ts-nocheck
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as overlockCrossplaneV1beta1TxRegistry from "./crossplane/v1beta1/tx.registry";
import * as overlockStorageV1beta1TxRegistry from "./storage/v1beta1/tx.registry";
import * as overlockCrossplaneV1beta1TxAmino from "./crossplane/v1beta1/tx.amino";
import * as overlockStorageV1beta1TxAmino from "./storage/v1beta1/tx.amino";
export const overlockAminoConverters = {
  ...overlockCrossplaneV1beta1TxAmino.AminoConverter,
  ...overlockStorageV1beta1TxAmino.AminoConverter
};
export const overlockProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...overlockCrossplaneV1beta1TxRegistry.registry, ...overlockStorageV1beta1TxRegistry.registry];
export const getSigningOverlockClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...overlockProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...overlockAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningOverlockClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningOverlockClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes
  });
  return client;
};