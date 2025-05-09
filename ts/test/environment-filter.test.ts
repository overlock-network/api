import { overlock } from '../src';
import { StdFee } from '@cosmjs/amino';
import { Attribute, Event } from '@cosmjs/stargate';
import { getTestAccount, getTestMessageClient } from './clients/client';
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx"

it('environment-filter', async () => {
  // const accountNames = ['','_BOB', '_ALICE', '_ANDREW'];
  const accountNames = [''];
  const accounts = await Promise.all(accountNames.map(getTestAccount));
  
  for (const [index, accountData] of accounts.entries()) {
    const accountName = accountNames[index];
    const messagesClient = await getTestMessageClient(accountName);
    const account = await messagesClient.getAccount(accountData.address);

    expect(account).not.toBeNull();
    if (account) {

      const requestFee: StdFee = { amount: [ { denom: 'stake', amount: '0', }, ], gas: '86364', };
  
      const configurationMessage = overlock.crossplane.MessageComposer.fromPartial.createConfiguration({
        creator: account.address,
        metadata: {
          name: "integration-test",
          annotations: ""
        },
        spec: {
          compositions:[BigInt(1),BigInt(2)],
          configurations:[BigInt(1),BigInt(2)],
          functions:[BigInt(1),BigInt(2)],
          providers:[BigInt(1),BigInt(2)],
          xrds:[BigInt(1),BigInt(2)],
          crossplane: {
            version: "1.18.0"
          }
        }
      })
  
      const providerMessage = overlock.crossplane.MessageComposer.fromPartial.createProvider({
        creator: account.address,
        metadata: {
          name: "integration-test",
          annotations: ""
        },
        spec: {
          package: "https://some-url"
        }
      })
  
      const functionMessage = overlock.crossplane.MessageComposer.fromPartial.createFunction({
        creator: account.address,
        metadata: {
          name: "integration-test",
          annotations: ""
        },
        spec: {
          package: "https://some-url"
        }
      })
  
      const txInt = await messagesClient.sign(account.address, [configurationMessage, providerMessage, functionMessage], requestFee, "", {
        accountNumber: account?.accountNumber,
        sequence: account?.sequence,
        chainId: await messagesClient.getChainId(),
      });
      const responseInt = await messagesClient.broadcastTx(TxRaw.encode(txInt).finish())
  
      let configId: string = "-1"
      responseInt.events.filter((event: Event)=>event.type == "configuration-created")
        .forEach((event)=>{
          event.attributes.filter((attr: Attribute)=>attr.key == "id")
            .forEach((attr)=>{
              configId = attr.value
            })
      })
      expect<number>(parseInt(configId)).toBeGreaterThan(-1);
      
      let providerId: string = "-1"
      responseInt.events.filter((event: Event)=>event.type == "provider-created")
        .forEach((event)=>{
          event.attributes.filter((attr: Attribute)=>attr.key == "id")
            .forEach((attr)=>{
              providerId = attr.value
            })
      })
      expect<number>(parseInt(providerId)).toBeGreaterThan(-1);
  
      let functionId: string = "-1"
      responseInt.events.filter((event: Event)=>event.type == "function-created")
        .forEach((event)=>{
          event.attributes.filter((attr: Attribute)=>attr.key == "id")
            .forEach((attr)=>{
              functionId = attr.value
            })
      })
      expect<number>(parseInt(functionId)).toBeGreaterThan(-1);
      
      const environment = overlock.crossplane.MessageComposer.fromPartial.createEnvironment({
        creator: account.address,
        metadata: {
          name: "integration-test",
          annotations: ""
        },
        spec: {
          configurations: [ BigInt(configId) ],
          providers: [ BigInt(providerId) ],
          functions: [ BigInt(functionId) ]
        }
      })
  
      const tx = await messagesClient.sign(account.address, [environment], requestFee, "", {
        accountNumber: account?.accountNumber,
        sequence: account?.sequence+1,
        chainId: await messagesClient.getChainId(),
      });
      const response = await messagesClient.broadcastTx(TxRaw.encode(tx).finish())
  
      let id: string = "-1"
      response.events.filter((event: Event)=>event.type == "environment-created")
        .forEach((event)=>{
          event.attributes.filter((attr: Attribute)=>attr.key == "id")
            .forEach((attr)=>{
              id = attr.value
            })
      })
      expect<number>(parseInt(id)).toBeGreaterThan(-1);
    } else {
      console.error(`Failed to fetch account for address: ${accountData.address}`);
    }

  }
},20000)