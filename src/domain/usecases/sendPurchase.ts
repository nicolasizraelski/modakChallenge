import { IPurchaseRepository } from '../repositories/IPurchaseRepository';

export const sendPurchaseUseCase = async (
  purchaseRepository: IPurchaseRepository,
  productName: string,
  fcmToken: string
) => {
  try {
    await purchaseRepository.sendPurchase(productName, fcmToken);
    return Promise.resolve();
  } catch (error) {
    return Promise.resolve();
  }
};
