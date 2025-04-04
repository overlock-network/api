import { overlock } from '../src';
import { StdFee } from '@cosmjs/amino';
import { Attribute, Event } from '@cosmjs/stargate';
import { getTestAccount, getTestMessageClient } from './clients/client';
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx"

it('composition', async () => {
  const accountData = await getTestAccount()
  const messagesClient = await getTestMessageClient();
  const account = await messagesClient.getAccount(accountData.address)
  expect(account).not.toBeNull()
  if (account) {
    const message = overlock.crossplane.MessageComposer.fromPartial.createComposition({
      creator: account.address,
      metadata: {
        name: "test",
        annotations: ""
      },
      spec: {
        mode: "Resources",
        resources:[
          {name: "test", patches: [
          { type: "FromComposite", fromFieldPath: "", toFieldPath: "",transforms: [
            { string: {
              format: {
                fmt: ""
              }
            }}
          ]}
          ]}
        ],
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
    response.events.filter((event: Event)=>event.type == "composition-created")
      .forEach((event)=>{
        event.attributes.filter((attr: Attribute)=>attr.key == "id")
          .forEach((attr)=>{
            id = attr.value
          })
    })
    expect<number>(parseInt(id)).toBeGreaterThan(-1);
  }
}, 10000)