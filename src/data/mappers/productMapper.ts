import { IProduct } from '../../domain/entities/IProduct';

export const mapToProduct = (apiProduct: any): IProduct => ({
  id: apiProduct.sku,
  title: apiProduct.title,
  price: apiProduct.price,
  thumbnail: apiProduct.thumbnail,
  rating: apiProduct.rating,
  brand: apiProduct.brand,
  description: apiProduct.description,
  stock: apiProduct.stock,
  category: apiProduct.category,
  discountPercentage: apiProduct.discountPercentage > 10 ? apiProduct.discountPercentage : 0,
  reviewAmount: apiProduct.reviews.length,
  availabilityStatus: apiProduct.availabilityStatus,
});
