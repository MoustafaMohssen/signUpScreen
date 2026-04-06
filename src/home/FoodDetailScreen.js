import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';

const FoodDetailScreen = ({ item, onBack }) => {
  if (!item) return null;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FAF9F6" />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Top Bar ── */}
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.backBtn} onPress={onBack} activeOpacity={0.8}>
            <Text style={styles.backBtnText}>‹</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.favBtn} activeOpacity={0.8}>
            <Text style={styles.favBtnText}>★</Text>
          </TouchableOpacity>
        </View>

        {/* ── Hero Image — floats to the right, overlaps the card ── */}
        <View style={styles.heroRow}>
          <Image
            source={item.image}
            style={styles.heroImg}
            resizeMode="contain"
          />
        </View>

        {/* ── Info Card ── */}
        <View style={styles.infoCard}>
          <Text style={styles.itemTitle}>{item.name}</Text>
          <Text style={styles.itemPrice}>{item.price}</Text>

          <View style={styles.divider} />

          {/* Specs */}
          <View style={styles.specsBlock}>
            <View style={styles.specRow}>
              <Text style={styles.specLabel}>Size</Text>
              <Text style={styles.specValue}>{item.size}</Text>
            </View>
            <View style={styles.specRow}>
              <Text style={styles.specLabel}>Crust</Text>
              <Text style={styles.specValue}>{item.crust}</Text>
            </View>
            <View style={styles.specRow}>
              <Text style={styles.specLabel}>Delivery in</Text>
              <Text style={styles.specValue}>{item.delivery}</Text>
            </View>
            <View style={styles.specRow}>
              <Text style={styles.specLabel}>Rating</Text>
              <View style={styles.ratingPill}>
                <Text style={styles.ratingPillText}>★ {item.rating}</Text>
              </View>
            </View>
          </View>

          <View style={styles.divider} />

          {/* Ingredients */}
          <Text style={styles.ingredientsTitle}>Ingredients</Text>
          <View style={styles.ingredientsRow}>
            {item.ingredients.map((ing, idx) => (
              <View key={idx} style={styles.ingredientChip}>
                <Image
                  source={ing}
                  style={styles.ingredientImg}
                  resizeMode="contain"
                />
              </View>
            ))}
          </View>

          {/* Weight */}
          <View style={styles.weightRow}>
            <Text style={styles.weightLabel}>Total weight</Text>
            <Text style={styles.weightValue}>{item.weight}</Text>
          </View>
        </View>

        {/* ── Order Button ── */}
        <TouchableOpacity style={styles.orderBtn} activeOpacity={0.85}>
          <Text style={styles.orderBtnText}>Place an order</Text>
          <Text style={styles.orderBtnArrow}>›</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAF9F6',
  },
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
  },
  contentContainer: {
    paddingBottom: 32,
  },

  // Top Bar
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 0,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 13,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e8e4dd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backBtnText: {
    fontSize: 26,
    color: '#1a1714',
    lineHeight: 30,
  },
  favBtn: {
    width: 40,
    height: 40,
    borderRadius: 13,
    backgroundColor: '#F5C518',
    alignItems: 'center',
    justifyContent: 'center',
  },
  favBtnText: {
    fontSize: 18,
    color: '#1a1714',
  },

  // Hero Image
  heroRow: {
    alignItems: 'flex-end',
    paddingRight: 16,
    marginBottom: -50,
    zIndex: 2,
  },
  heroImg: {
    width: 200,
    height: 180,
  },

  // Info Card
  infoCard: {
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#e8e4dd',
    padding: 22,
    paddingTop: 60,   // extra top padding so text sits below the overlapping pizza image
    zIndex: 1,
  },
  itemTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1a1714',
    letterSpacing: -0.5,
    marginBottom: 6,
  },
  itemPrice: {
    fontSize: 24,
    fontWeight: '700',
    color: '#c5880a',
    marginBottom: 18,
  },
  divider: {
    height: 1,
    backgroundColor: '#f0ece6',
    marginVertical: 16,
  },

  // Specs
  specsBlock: {
    gap: 12,
  },
  specRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  specLabel: {
    fontSize: 12,
    color: '#a09585',
    fontWeight: '500',
  },
  specValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1a1714',
  },
  ratingPill: {
    backgroundColor: '#FFF8E1',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  ratingPillText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#c5880a',
  },

  // Ingredients
  ingredientsTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1a1714',
    marginBottom: 12,
  },
  ingredientsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
  },
  ingredientChip: {
    width: 72,
    height: 64,
    borderRadius: 16,
    backgroundColor: '#FAF9F6',
    borderWidth: 1,
    borderColor: '#e8e4dd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ingredientImg: {
    width: 50,
    height: 44,
  },

  // Weight
  weightRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FAF9F6',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  weightLabel: {
    fontSize: 12,
    color: '#a09585',
    fontWeight: '500',
  },
  weightValue: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1a1714',
  },

  // Order Button
  orderBtn: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#F5C518',
    borderRadius: 18,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  orderBtnText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1a1714',
  },
  orderBtnArrow: {
    fontSize: 22,
    color: '#1a1714',
    lineHeight: 24,
  },
});

export default FoodDetailScreen;