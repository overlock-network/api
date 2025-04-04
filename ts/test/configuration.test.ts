import { overlock } from '../src';
import { StdFee } from '@cosmjs/amino';
import { Attribute, Event } from '@cosmjs/stargate';
import { getTestAccount, getTestMessageClient } from './clients/client';
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx"

it('configuration', async () => {
  const accountData = await getTestAccount()
  const messagesClient = await getTestMessageClient();
  const account = await messagesClient.getAccount(accountData.address)
  expect(account).not.toBeNull()
  if (account) {
    const message = overlock.crossplane.MessageComposer.fromPartial.createConfiguration({
      creator: account.address,
      metadata: {
        name: "test",
        annotations: ""
      },
      spec: {
        crossplane: {
          version : "1.18.0"
        },
        compositions:[BigInt(1),BigInt(2)],
        configurations:[BigInt(1),BigInt(2)],
        functions:[BigInt(1),BigInt(2)],
        providers:[BigInt(1),BigInt(2)],
        xrds:[BigInt(1),BigInt(2)]
      }
    })
  
    const requestFee: StdFee = {
      amount: [
        {
          denom: 'stake',
          amount: '0',
        },
      ],
      gas: '86364',
    };

    const tx = await messagesClient.sign(account.address, [message], requestFee, "", {
      accountNumber: account?.accountNumber,
      sequence: account?.sequence,
      chainId: await messagesClient.getChainId(),
    });
    const response = await messagesClient.broadcastTx(TxRaw.encode(tx).finish())
    let id: string = "-1"
    response.events.filter((event: Event)=>event.type == "configuration-created")
      .forEach((event)=>{
        event.attributes.filter((attr: Attribute)=>attr.key == "id")
          .forEach((attr)=>{
            id = attr.value
          })
    })
    expect<number>(parseInt(id)).toBeGreaterThan(-1);
  }
},10000)