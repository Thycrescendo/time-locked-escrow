export interface Escrow {
  seller: string;
  buyer: string;
  asset: string;
  payment: number;
  expiry: number;
  status: 'Pending' | 'Completed' | 'Disputed' | 'Released' | 'Refunded';
  disputeLog: string[];
  penaltyRate: number;
}