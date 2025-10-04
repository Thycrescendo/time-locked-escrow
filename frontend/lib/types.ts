

export interface Escrow {
  id: string;
  buyer: string;
  seller: string;
  asset: string; // JSON string or identifier for asset (e.g., NFT ID, token details)
  payment: number; // Amount in MASSA
  expiry: number; // Unix timestamp
  status: 'Pending' | 'Completed' | 'Disputed' | 'Released' | 'Refunded';
  disputeLog: Message[];
  penaltyRate: number; // Percentage * 100 (e.g., 500 for 5%)
}

export interface TimelineEvent {
  id: string;
  type: string; // e.g., EscrowCreated, Disputed
  timestamp: number; // Unix timestamp
  details: string; // Event description
}

export interface Message {
  sender: string; // Address or "You"
  content: string;
  timestamp: number; // Unix timestamp
}