export interface IPurchaseApi {
  sendPurchase: (productName: string, fcmToken: string) => Promise<void>;
}
