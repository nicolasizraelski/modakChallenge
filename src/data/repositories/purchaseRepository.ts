import { IPurchaseRepository } from '../../domain/repositories/IPurchaseRepository';
import { purchaseApi } from '../datasources/purchaseApi';

export const purchaseRepository: IPurchaseRepository = {
  sendPurchase: (productName: string, fcmToken: string) => purchaseApi.sendPurchase(productName, fcmToken),
};
