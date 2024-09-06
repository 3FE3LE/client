export interface Budget {
  id: number;
  amount: number;
  min: number;
  max: number;
  currencyId: number;
  userId: string;
  currency: Currency; // Asumiendo que tienes una interfaz Currency
}

export interface Currency {
  id: number;
  name: string;
  symbol: string;
}
