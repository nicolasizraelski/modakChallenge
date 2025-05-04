import axios from 'axios';
import { IPurchaseApi } from '../../domain/datasources/IPurchaseApi';
import { PURCHASE_BACKEND_URL } from '../../shared/constants/api';

export const purchaseApi: IPurchaseApi = {
  sendPurchase: async (productName, fcmToken) => {
    await axios
      .post(`${PURCHASE_BACKEND_URL}/notify-purchase`, {
        fcmToken,
        productTitle: productName,
      })
      .catch(() => {
        throw new Error('Error al enviar la compra');
      });
  },
};
