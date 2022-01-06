export interface Coin {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  logo: string;
  quote: {
    USD: {
      price: number;
      volume_24h: number;
      volume_change_24h: number;
      percent_change_1h: number;
      percent_change_24h: number;
    };
  };
}
