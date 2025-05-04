import { Text, TouchableOpacity, View } from 'react-native';
import { makeStyles } from './styles';
import { Order, SortBy } from '../../../domain/entities/IQueryParams';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { customColors } from '../../../shared/styles/customColors';

interface SortingOptionsProps {
  selectedSortBy: SortBy;
  selectedOrder: Order;
  setSelectedSortBy: (sortBy: SortBy) => void;
  setSelectedOrder: (order: Order) => void;
}

export const SortingOptions: React.FC<SortingOptionsProps> = ({
  selectedSortBy,
  selectedOrder,
  setSelectedSortBy,
  setSelectedOrder,
}) => {
  const styles = makeStyles();
  const icon = selectedOrder === Order.ASC ? 'sort-ascending' : 'sort-descending';

  const switchOrder = () => {
    setSelectedOrder(selectedOrder === Order.ASC ? Order.DESC : Order.ASC);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.orderByText}>Order by:</Text>
      <TouchableOpacity
        style={[styles.sortButton, selectedSortBy === SortBy.PRICE && styles.selectedSortButton]}
        onPress={() => setSelectedSortBy(SortBy.PRICE)}
      >
        <Text style={[styles.sortButtonText, selectedSortBy === SortBy.PRICE && styles.selectedSortButtonText]}>
          Price
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.sortButton, selectedSortBy === SortBy.RATING && styles.selectedSortButton]}
        onPress={() => setSelectedSortBy(SortBy.RATING)}
      >
        <Text style={[styles.sortButtonText, selectedSortBy === SortBy.RATING && styles.selectedSortButtonText]}>
          Rating
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.orderButton} onPress={switchOrder}>
        <Icon name={icon} size={20} color={customColors.primary} />
      </TouchableOpacity>
    </View>
  );
};
