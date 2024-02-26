import React, {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  ImageSourcePropType,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCallback, useEffect, useState } from 'react';
import { Account, fetchAccounts } from './util/fetchAccounts';
import { Divider } from './divider';
import { ListItem } from './list/ListItem';
import { List } from './list/List';
import { accountTypeImageMap } from './util/getLogo';
import { MotiView } from 'moti';
import { Skeleton } from 'moti/skeleton';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  backgrouncStyle: {
    backgroundColor: '#FFFFFF',
  },
  listIconView: {
    width: '20%',
  },
  title: {
    fontWeight: '600',
  },
  line: {
    fontWeight: '400',
    color: '#718096',
  },
});

type AccountListItemProps = {
  logo: ImageSourcePropType;
  title: string;
  accountDetails: string;
  availableBalance: string;
  balance: string;
};
const AccountListItem = ({
  logo,
  title,
  accountDetails,
  availableBalance,
  balance,
}: AccountListItemProps) => (
  <>
    <ListItem
      style={{ marginTop: 16 }}
      icon={
        <View style={styles.listIconView}>
          <Image source={logo} />
        </View>
      }
      title={<Text style={styles.title}>{title}</Text>}
      lines={<Text style={styles.line}>{accountDetails}</Text>}
      action={<Text>...</Text>}
    />
    <ListItem
      style={{ marginTop: 8, marginBottom: 16 }}
      icon={<View style={styles.listIconView} />}
      lines={
        <>
          <Text style={styles.line}>Available</Text>
          <Text style={styles.line}>Balance</Text>
        </>
      }
      action={
        <>
          <Text style={{ ...styles.line, textAlign: 'right' }}>
            {availableBalance}
          </Text>
          <Text style={{ ...styles.line, textAlign: 'right' }}>{balance}</Text>
        </>
      }
    />
    <Divider />
  </>
);
const Spacer = ({ height = 16 }) => <View style={{ height }} />;

const LoadingList = () => (
  <>
    <Spacer />
    <Skeleton colorMode="light" width={'100%'} />
    <Spacer height={8} />
    <Skeleton colorMode="light" width={'100%'} />
    <Spacer />
    <Divider />
  </>
);

export const ScreenOne = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [accounts, setAccounts] = useState<Account[]>([]);

  const getAccounts = useCallback(async () => {
    setIsLoading(true);
    try {
      const _accounts = await fetchAccounts();
      console.log('_accounts: ', _accounts);
      setAccounts(_accounts);
    } catch {}
    setIsLoading(false);
  }, []);

  console.log('accounts: ', accounts);

  useEffect(() => {
    getAccounts();
  }, [getAccounts]);

  if (!accounts.length) {
    return (
      <SafeAreaView style={styles.container}>
        <MotiView
          transition={{
            type: 'timing',
          }}
          style={{
            flex: 1,
            padding: 16,
            marginTop: 24,
          }}
          animate={{ backgroundColor: '#ffffff' }}>
          <Divider />
          <LoadingList />
          <LoadingList />
          <LoadingList />
          <LoadingList />
          <LoadingList />
          <LoadingList />
          <LoadingList />
        </MotiView>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.sectionTitle}>Accounts</Text>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        style={{ ...styles.backgrouncStyle, marginTop: 16 }}>
        <Divider />
        <List>
          {accounts.map((account: Account) => (
            <AccountListItem
              key={account.id}
              logo={accountTypeImageMap[account.accountType.type]}
              title={account.accountType.name}
              accountDetails={account.accountNumber}
              availableBalance={account.availableBalance}
              balance={account.balance}
            />
          ))}
        </List>
      </ScrollView>
    </SafeAreaView>
  );
};
