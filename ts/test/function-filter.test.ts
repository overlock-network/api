import { overlock } from '../src';
import { StdFee } from '@cosmjs/amino';
import { Attribute, Event } from '@cosmjs/stargate';
import { getTestAccount, getTestMessageClient } from './clients/client';
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx"

it('function-filter', async () => {
  // const accountNames = ['','_BOB', '_ALICE', '_ANDREW'];
  const accountNames = [''];
  const accounts = await Promise.all(accountNames.map(getTestAccount));
  
  for (const [index, accountData] of accounts.entries()) {
    const accountName = accountNames[index];
    const messagesClient = await getTestMessageClient(accountName);
    const account = await messagesClient.getAccount(accountData.address);

    expect(account).not.toBeNull();
    if (account) {
      const message = overlock.crossplane.MessageComposer.fromPartial.createFunction({
        creator: account.address,
        metadata: {
          name: "test",
          annotations: ""
        },
        spec: {
          package: "https://some-url"
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
      response.events.filter((event: Event)=>event.type == "function-created")
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