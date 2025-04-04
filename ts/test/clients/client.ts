import { AminoTypes, SigningStargateClient } from '@cosmjs/stargate';
import { GeneratedType, Registry } from '@cosmjs/stargate/node_modules/@cosmjs/proto-signing';
import { overlockAminoConverters, overlockProtoRegistry } from '../../src';
import {
  cosmosAminoConverters,
  cosmosProtoRegistry,
  cosmwasmAminoConverters,
  cosmwasmProtoRegistry,
  ibcProtoRegistry,
  ibcAminoConverters,
} from 'interchain';

import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';

export async function  getTestSigner( accountName: string = "") {
  const mnemonic = process.env['MNEMONIC_PHRASE'+ accountName] || "";

  return DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
      prefix: "cosmos",
  })
}

export async function getTestAccount( accountName: string = "") {
  const signer = await getTestSigner(accountName)
  const signerAccounts = await signer.getAccounts();
  if(signerAccounts.length > 0) {
    return signerAccounts[0]
  } else {
    throw new Error('No signers found by private key.')
  }
}

export async function getTestMessageClient( accountName: string = "") {
  const rpcEndpoint = process.env.RPC_ENDPOINT || "";
  const signer = await getTestSigner(accountName)
  const protoRegistry: ReadonlyArray<[string, GeneratedType]> = [
    ...cosmosProtoRegistry,
    ...cosmwasmProtoRegistry,
    ...ibcProtoRegistry,
    ...overlockProtoRegistry,
  ];

  const aminoConverters = {
    ...cosmosAminoConverters,
    ...cosmwasmAminoConverters,
    ...ibcAminoConverters,
    ...overlockAminoConverters,
  };
  const gasPrice = new Number(10)
  const registry = new Registry(protoRegistry);
  const aminoTypes = new AminoTypes(aminoConverters);
  const messagesClient = await SigningStargateClient.connectWithSigner(
    rpcEndpoint,
    signer,
    {
      // gasPrice: new GasPrice(Decimal.fromAtomics("10", 2), "token"),
      registry,
      aminoTypes,
    },
  );
  return messagesClient
}



