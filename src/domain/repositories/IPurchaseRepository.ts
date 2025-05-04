export interface IPurchaseRepository {
  sendPurchase: (productName: string, fcmToken: string) => Promise<void>;
}
