const accounts = {
  data: [
    {
      id: '206947b8-591b-416a-aef5-2254484d8281',
      createdAt: '2024-01-03T01:33:31.910Z',
      updatedAt: '2024-01-03T01:30:39.889Z',
      userId: 'c021b4da-b070-4dc4-a2c1-1b016d104d2b',
      accountNumber: '062-111 212 4332',
      accountTypeId: '5d00e56c-ac22-45cd-845e-ae9b22606ec5',
      balance: '3400.21',
      availableBalance: '3400.21',
      simpleBalance: true,
      simpleBalanceIndex: 0,
      interestRate: '0',
      accountType: {
        id: '5d00e56c-ac22-45cd-845e-ae9b22606ec5',
        createdAt: '2024-01-03T01:27:23.950Z',
        updatedAt: '2024-01-03T01:26:17.021Z',
        name: 'Smart Access',
        type: 'Transaction Account',
        assetType: 'Savings',
      },
    },
    {
      id: '103abfea-322f-4418-987c-875382538c6b',
      createdAt: '2024-01-03T01:37:08.030Z',
      updatedAt: '2024-01-03T09:09:55.018Z',
      userId: 'c021b4da-b070-4dc4-a2c1-1b016d104d2b',
      accountNumber: '062-111 212 4334',
      accountTypeId: '34ec8378-fc9a-4c8f-a5e7-a91358e96320',
      balance: '50000',
      availableBalance: '50000',
      simpleBalance: false,
      simpleBalanceIndex: 0,
      interestRate: '4.9',
      accountType: {
        id: '34ec8378-fc9a-4c8f-a5e7-a91358e96320',
        createdAt: '2024-01-03T01:30:17.910Z',
        updatedAt: '2024-01-03T01:29:55.138Z',
        name: 'Term Deposit',
        type: 'Term Savings Account',
        assetType: 'Savings',
      },
    },
    {
      id: '7a8eb9a2-f4f6-412e-a283-8619f0e63d6b',
      createdAt: '2024-01-03T01:39:09.910Z',
      updatedAt: '2024-01-03T01:38:27.508Z',
      userId: 'c021b4da-b070-4dc4-a2c1-1b016d104d2b',
      accountNumber: '544322',
      accountTypeId: 'b48781e6-4be0-4fe6-9c6a-6229ec8b03e0',
      balance: '145000',
      availableBalance: '0',
      simpleBalance: false,
      simpleBalanceIndex: 0,
      interestRate: '0',
      accountType: {
        id: 'b48781e6-4be0-4fe6-9c6a-6229ec8b03e0',
        createdAt: '2024-01-03T01:29:54.257Z',
        updatedAt: '2024-01-03T01:29:31.073Z',
        name: 'CommSec Shares',
        type: 'Share Investment Account',
        assetType: 'Investment',
      },
    },
    {
      id: '21786caf-1c7d-4680-81cb-1b5a62c0fbd2',
      createdAt: '2024-01-03T01:41:16.410Z',
      updatedAt: '2024-01-03T01:39:41.126Z',
      userId: 'c021b4da-b070-4dc4-a2c1-1b016d104d2b',
      accountNumber: '062-111 212 4335',
      accountTypeId: 'd19d7cc5-07e0-4cf6-becc-b4732ec0e6ca',
      balance: '-480000',
      availableBalance: '20000',
      simpleBalance: false,
      simpleBalanceIndex: 0,
      interestRate: '6.49',
      accountType: {
        id: 'd19d7cc5-07e0-4cf6-becc-b4732ec0e6ca',
        createdAt: '2024-01-03T01:30:30.048Z',
        updatedAt: '2024-01-03T01:30:19.340Z',
        name: 'Home Loan',
        type: 'Home Loan Account',
        assetType: 'Home Loan',
      },
    },
    {
      id: 'bced62cf-3edc-4503-9e3d-b8d243624b32',
      createdAt: '2024-01-03T01:35:29.870Z',
      updatedAt: '2024-01-03T01:33:36.294Z',
      userId: 'c021b4da-b070-4dc4-a2c1-1b016d104d2b',
      accountNumber: '062-111 212 4333',
      accountTypeId: '198e87d8-582b-4a37-bc46-dc9567997f12',
      balance: '78000',
      availableBalance: '78000',
      simpleBalance: true,
      simpleBalanceIndex: 1,
      interestRate: '2.35',
      accountType: {
        id: '198e87d8-582b-4a37-bc46-dc9567997f12',
        createdAt: '2024-01-03T01:28:08.662Z',
        updatedAt: '2024-01-03T01:27:30.254Z',
        name: 'NetBank Saver',
        type: 'Savings Account',
        assetType: 'Savings',
      },
    },
    {
      id: '7aa98063-8c74-4c95-98c9-c1becff42fe2',
      createdAt: '2024-01-03T01:42:50.684Z',
      updatedAt: '2024-01-03T07:35:37.538Z',
      userId: 'c021b4da-b070-4dc4-a2c1-1b016d104d2b',
      accountNumber: '4312 2211 2211 1111',
      accountTypeId: 'f60daf93-2bb1-4635-b45d-b51171af7e4d',
      balance: '-400',
      availableBalance: '19600',
      simpleBalance: true,
      simpleBalanceIndex: 2,
      interestRate: '20.99',
      accountType: {
        id: 'f60daf93-2bb1-4635-b45d-b51171af7e4d',
        createdAt: '2024-01-03T01:29:23.342Z',
        updatedAt: '2024-01-03T01:43:38.482Z',
        name: 'Ultimate Awards',
        type: 'Credit Card Account',
        assetType: 'Credit Card',
      },
    },
  ],
};

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchAccounts = async () => {
  await sleep(2000);
  return accounts.data;
};

export type Account = (typeof accounts.data)[0];