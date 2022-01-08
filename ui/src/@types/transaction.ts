export interface Transaction {
  id: number;
  userId: string | number;
  transactionType: 'Bought' | 'Sold';
  coinName: string;
  amount: number;
  transactionDate: string;
}
