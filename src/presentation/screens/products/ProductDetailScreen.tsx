import { View, Text, Image } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { PRODUCT_DETAIL } from '../../../shared/constants/routeNames';
import { makeStyles } from '../../../shared/styles/products/productDetail';
import { RatingStars } from '../../components/RatingStars';
import { CustomButton } from '../../components/CustomButton';
import { PriceDisplay } from '../../components/PriceDisplay';
import { useFCMToken } from '../../../shared/hooks/useFcmToken';
import { sendPurchaseUseCase } from '../../../domain/usecases/sendPurchase';
import { purchaseRepository } from '../../../data/repositories/purchaseRepository';
import { useToast } from '../../../shared/hooks/useToast';

const ProductDetailScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, typeof PRODUCT_DETAIL>>();
  const { product } = route.params;
  const styles = makeStyles();

  const fcmToken = useFCMToken();
  const { showErrorToast } = useToast();

  const handlePurchase = async () => {
    if (fcmToken) {
      try {
        await sendPurchaseUseCase(purchaseRepository, product.title, fcmToken);
      } catch (error) {
        showErrorToast('❌ Error registering purchase', 'Please try again later');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.title}</Text>
      <View style={styles.brandContainer}>
        {product.brand && <Text style={styles.brand}>By {product.brand}</Text>}
        <RatingStars rating={product.rating} size="small" amount={product.reviewAmount} />
      </View>

      <View style={styles.imageContainer}>
        <Image source={{ uri: product.thumbnail }} style={styles.image} />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{product.description}</Text>
        <View style={styles.priceContainer}>
          <PriceDisplay price={product.price} discountPercentage={product.discountPercentage} size="large" />
          <Text style={styles.stock}>
            {product.availabilityStatus} ({product.stock} available)
          </Text>
        </View>

        <CustomButton text="Buy now" onPress={handlePurchase} />
        <CustomButton text="+ Add to Cart" onPress={() => {}} variant="secondary" />
      </View>
    </View>
  );
};

export default ProductDetailScreen;
