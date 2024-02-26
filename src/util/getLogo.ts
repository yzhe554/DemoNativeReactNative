import CreditCardLogo from '../../public/pictogramCards40.png';
import SavingsAccountLogo from '../../public/pictogramSavings40.png';
import TransactionAccountLogo from '../../public/pictogramBankAccounts40.png';
import ShareInvestmentAccountLogo from '../../public/pictogramInvest40.png';
import TermSavingsAccountLogo from '../../public/pictogramTermDeposit40.png';
import HomeLoanAccountLogo from '../../public/pictogramFeaturesHome40.png';
import { ImageSourcePropType } from 'react-native';
import { Account } from './fetchAccounts';

export const accountTypeImageMap: Record<
  Account['accountType']['type'],
  ImageSourcePropType
> = {
  'Credit Card Account': CreditCardLogo,
  'Savings Account': SavingsAccountLogo,
  'Transaction Account': TransactionAccountLogo,
  'Share Investment Account': ShareInvestmentAccountLogo,
  'Term Savings Account': TermSavingsAccountLogo,
  'Home Loan Account': HomeLoanAccountLogo,
};
