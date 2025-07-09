import { overlock } from '../src';
import { StdFee } from '@cosmjs/amino';
import { Attribute, Event } from '@cosmjs/stargate';
import { getTestAccount, getTestMessageClient } from './clients/client';
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx"

it('environment', async () => {
  const accountData = await getTestAccount()
  const messagesClient = await getTestMessageClient();
  const account = await messagesClient.getAccount(accountData.address)
  expect(account).not.toBeNull()
  if (account) {

    const requestFee: StdFee = { amount: [ { denom: 'stake', amount: '0', }, ], gas: '86364', };

    const environment = overlock.crossplane.v1beta1.MessageComposer.fromPartial.createEnvironment({
      creator: account.address,
      metadata: {
        name: "test",
        annotations: ""
      },
      provider: BigInt(0)
    })
    
    const tx = await messagesClient.sign(account.address, [environment], requestFee, "", {
      accountNumber: account?.accountNumber,
      sequence: account?.sequence,
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
  }
},10000)

it('environment-integration', async () => {
  const accountData = await getTestAccount()
  const messagesClient = await getTestMessageClient();
  const account = await messagesClient.getAccount(accountData.address)
  expect(account).not.toBeNull()
  if (account) {

    const requestFee: StdFee = { amount: [ { denom: 'stake', amount: '0', }, ], gas: '86364', };


    const providerMessage = overlock.crossplane.v1beta1.MessageComposer.fromPartial.createProvider({
      creator: account.address,
      metadata: {
        name: "integration-test",
        annotations: ""
      },
      spec: {
        package: "https://some-url"
      }
    })

    const functionMessage = overlock.crossplane.v1beta1.MessageComposer.fromPartial.createFunction({
      creator: account.address,
      metadata: {
        name: "integration-test",
        annotations: ""
      },
      spec: {
        package: "https://some-url"
      }
    })

    const txInt = await messagesClient.sign(account.address, [ providerMessage, functionMessage], requestFee, "", {
      accountNumber: account?.accountNumber,
      sequence: account?.sequence,
      chainId: await messagesClient.getChainId(),
    });
    const responseInt = await messagesClient.broadcastTx(TxRaw.encode(txInt).finish())

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
    
    const environment = overlock.crossplane.v1beta1.MessageComposer.fromPartial.createEnvironment({
      creator: account.address,
      metadata: {
        name: "integration-test",
        annotations: ""
      },
      provider: 0n
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
  }
},10000)