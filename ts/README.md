# @overlocknetwork/api

<p align="center">
  <img src="https://raw.githubusercontent.com/web-seven/overlock/refs/heads/main/docs/overlock_galaxy.png" width="150"><br />
     
</p>

<p align="center" width="100%">
   <a href="https://github.com/overlocknetwork/client/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
</p>


## install

```sh
npm install @overlocknetwork/api/client
```
## Table of contents

- [@overlocknetwork/api/client](#@overlocknetwork/api/client)
  - [Install](#install)
  - [Table of contents](#table-of-contents)
- [Usage](#usage)
    - [RPC Clients](#rpc-clients)
    - [Composing Messages](#composing-messages)
        - Cosmos, CosmWasm, and IBC
            - [CosmWasm](#cosmwasm-messages)
            - [IBC](#ibc-messages)
            - [Cosmos](#cosmos-messages)
- [Wallets and Signers](#connecting-with-wallets-and-signing-messages)
    - [Stargate Client](#initializing-the-stargate-client)
    - [Creating Signers](#creating-signers)
    - [Broadcasting Messages](#broadcasting-messages)
- [Advanced Usage](#advanced-usage)
- [Developing](#developing)
- [Codegen](#codegen)
- [Publishing](#publishing)
- [Related](#related)
- [Credits](#credits)

## Usage
### RPC Clients

```js
import { overlock } from '@overlocknetwork/api/client';

const { createRPCQueryClient } = overlock.ClientFactory; 
const client = await createRPCQueryClient({ rpcEndpoint: RPC_ENDPOINT });

// now you can query the cosmos modules
const balance = await client.cosmos.bank.v1beta1
    .allBalances({ address: 'overlock1addresshere' });

// you can also query the overlock modules
const balances = await client.overlock.exchange.v1beta1
    .exchangeBalances()
```

### Composing Messages

Import the `overlock` object from `@overlocknetwork/api/client`. 

```js
import { overlock } from '@overlocknetwork/api/client';

const {
    createSpotLimitOrder,
    createSpotMarketOrder,
    deposit
} = overlock.exchange.v1beta1.MessageComposer.withTypeUrl;
```

#### CosmWasm Messages

```js
import { cosmwasm } from "@overlocknetwork/api/client";

const {
    clearAdmin,
    executeContract,
    instantiateContract,
    migrateContract,
    storeCode,
    updateAdmin
} = cosmwasm.wasm.v1.MessageComposer.withTypeUrl;
```

#### IBC Messages

```js
import { ibc } from '@overlocknetwork/api/client';

const {
    transfer
} = ibc.applications.transfer.v1.MessageComposer.withTypeUrl
```

#### Cosmos Messages

```js
import { cosmos } from '@overlocknetwork/api/client';

const {
    fundCommunityPool,
    setWithdrawAddress,
    withdrawDelegatorReward,
    withdrawValidatorCommission
} = cosmos.distribution.v1beta1.MessageComposer.fromPartial;

const {
    multiSend,
    send
} = cosmos.bank.v1beta1.MessageComposer.fromPartial;

const {
    beginRedelegate,
    createValidator,
    delegate,
    editValidator,
    undelegate
} = cosmos.staking.v1beta1.MessageComposer.fromPartial;

const {
    deposit,
    submitProposal,
    vote,
    voteWeighted
} = cosmos.gov.v1beta1.MessageComposer.fromPartial;
```

## Connecting with Wallets and Signing Messages

⚡️ For web interfaces, we recommend using [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit). Continue below to see how to manually construct signers and clients.

Here are the docs on [creating signers](https://docs.cosmology.zone/cosmos-kit) in cosmos-kit that can be used with Keplr and other wallets.

### Initializing the Stargate Client

Use `getSigningOverlockClient` to get your `SigningStargateClient`, with the proto/amino messages full-loaded. No need to manually add amino types, just require and initialize the client:

```js
import { getSigningOverlockClient } from 'client';

const stargateClient = await getSigningOverlockClient({
  rpcEndpoint,
  signer // OfflineSigner
});
```
### Creating Signers

To broadcast messages, you can create signers with a variety of options:

* [cosmos-kit](https://docs.cosmology.zone/cosmos-kit) (recommended)
* [keplr](https://docs.keplr.app/api/cosmjs.html)
* [cosmjs](https://gist.github.com/webmaster128/8444d42a7eceeda2544c8a59fbd7e1d9)
### Amino Signer

Likely you'll want to use the Amino, so unless you need proto, you should use this one:

```js
import { getOfflineSignerAmino as getOfflineSigner } from 'cosmjs-utils';
```
### Proto Signer

```js
import { getOfflineSignerProto as getOfflineSigner } from 'cosmjs-utils';
```

WARNING: NOT RECOMMENDED TO USE PLAIN-TEXT MNEMONICS. Please take care of your security and use best practices such as AES encryption and/or methods from 12factor applications.

```js
import { chains } from 'chain-registry';

const mnemonic =
  'unfold client turtle either pilot stock floor glow toward bullet car science';
  const chain = chains.find(({ chain_name }) => chain_name === 'overlock');
  const signer = await getOfflineSigner({
    mnemonic,
    chain
  });
```
### Broadcasting Messages

Now that you have your `stargateClient`, you can broadcast messages:

```js
const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;

const msg = send({
    amount: [
    {
        denom: 'coin',
        amount: '1000'
    }
    ],
    toAddress: address,
    fromAddress: address
});

const fee: StdFee = {
    amount: [
    {
        denom: 'coin',
        amount: '864'
    }
    ],
    gas: '86364'
};
const response = await stargateClient.signAndBroadcast(address, [msg], fee);
```

## Advanced Usage


If you want to manually construct a stargate client

```js
import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";

import { 
    cosmosAminoConverters,
    cosmosProtoRegistry,
    cosmwasmAminoConverters,
    cosmwasmProtoRegistry,
    ibcProtoRegistry,
    ibcAminoConverters,
    overlockAminoConverters,
    overlockProtoRegistry
} from 'client';

const signer: OfflineSigner = /* create your signer (see above)  */
const rpcEndpint = 'https://rpc.cosmos.directory/overlock'; // or another URL

const protoRegistry: ReadonlyArray<[string, GeneratedType]> = [
    ...cosmosProtoRegistry,
    ...cosmwasmProtoRegistry,
    ...ibcProtoRegistry,
    ...overlockProtoRegistry
];

const aminoConverters = {
    ...cosmosAminoConverters,
    ...cosmwasmAminoConverters,
    ...ibcAminoConverters,
    ...overlockAminoConverters
};

const registry = new Registry(protoRegistry);
const aminoTypes = new AminoTypes(aminoConverters);

const stargateClient = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
});
```

## Developing

When first cloning the repo:

```
yarn
yarn build
```

### Codegen

Look inside of `scripts/codegen.ts` and configure the settings for bundling your SDK and contracts into `@overlocknetwork/api/client`:

```
yarn codegen
```

### Publishing

To publish, use `lerna`:

```
lerna publish
```

You can publish patch, minor, or major versions:

```
lerna publish minor
```

If you absolutely need to publish manually using npm, ensure to do it this way, and publish from the `dist/` directory for proper tree-shaking module paths:

```
cd ./packages/<your-telescope-module>
yarn build
cd dist
npm publish
```


## Related

Checkout these related projects:

* [@cosmology/telescope](https://github.com/cosmology-tech/telescope) Your Frontend Companion for Building with TypeScript with Cosmos SDK Modules.
* [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) Convert your CosmWasm smart contracts into dev-friendly TypeScript classes.
* [chain-registry](https://github.com/cosmology-tech/chain-registry) Everything from token symbols, logos, and IBC denominations for all assets you want to support in your application.
* [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) Experience the convenience of connecting with a variety of web3 wallets through a single, streamlined interface.
* [create-cosmos-app](https://github.com/cosmology-tech/create-cosmos-app) Set up a modern Cosmos app by running one command.
* [interchain-ui](https://github.com/cosmology-tech/interchain-ui) The Interchain Design System, empowering developers with a flexible, easy-to-use UI kit.
* [starship](https://github.com/cosmology-tech/starship) Unified Testing and Development for the Interchain.

## Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.zone/validator)


## Disclaimer

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
