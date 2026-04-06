import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';

const CATEGORIES = [
  { id: 1, name: 'Pizza',       icon: require('../assets/images/pizza-icon.png') },
  { id: 2, name: 'Seafood',     icon: require('../assets/images/shrimp-icon.png') },
  { id: 3, name: 'Soft Drinks', icon: require('../assets/images/soda-icon.png') },
];

export const POPULAR_ITEMS = [
  {
    id: 1,
    name: 'Primavera Pizza',
    weight: '540 gr',
    rating: '5.0',
    price: '$5.99',
    size: 'Medium 14"',
    crust: 'Thin Crust',
    delivery: '30 min',
    ingredients: [
      require('../assets/images/ham.png'),
      require('../assets/images/tomato.png'),
      require('../assets/images/garlic.png'),
    ],
    image: require('../assets/images/pizza3.png'),
  },
  {
    id: 2,
    name: 'BBQ Chicken Pizza',
    weight: '610 gr',
    rating: '4.8',
    price: '$7.49',
    size: 'Large 16"',
    crust: 'Thick Crust',
    delivery: '35 min',
    ingredients: [
      require('../assets/images/ham.png'),
      require('../assets/images/tomato.png'),
      require('../assets/images/cheese.png'),
    ],
    image: require('../assets/images/pizza1.png'),
  },
  {
    id: 3,
    name: 'Margherita Classic',
    weight: '480 gr',
    rating: '4.9',
    price: '$4.99',
    size: 'Medium 14"',
    crust: 'Thin Crust',
    delivery: '25 min',
    ingredients: [
      require('../assets/images/tomato.png'),
      require('../assets/images/cheese.png'),
      require('../assets/images/garlic.png'),
    ],
    image: require('../assets/images/pizza2.png'),
  },
];

const HomeScreen = ({ onSelectItem }) => {
  const [activeCategory, setActiveCategory] = useState(1);
  const [searchText, setSearchText] = useState('');

  const filteredItems = POPULAR_ITEMS.filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FAF9F6" />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Header ── */}
        <View style={styles.header}>
          <Image
            source={require('../assets/images/profile.png')}
            style={styles.avatar}
          />
          <View style={styles.menuBtn}>
            <View style={styles.menuLine} />
            <View style={styles.menuLine} />
            <View style={styles.menuLine} />
          </View>
        </View>

        {/* ── Title ── */}
        <View style={styles.titleBlock}>
          <Text style={styles.titleSub}>Food</Text>
          <Text style={styles.titleMain}>Delivery</Text>
        </View>

        {/* ── Search ── */}
        <View style={styles.searchBar}>
          <Text style={styles.searchIconText}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="#a09585"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {/* ── Categories ── */}
        <Text style={styles.sectionLabel}>Categories</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesScroll}
        >
          {CATEGORIES.map(cat => {
            const isActive = activeCategory === cat.id;
            return (
              <TouchableOpacity
                key={cat.id}
                style={[styles.catCard, isActive && styles.catCardActive]}
                onPress={() => setActiveCategory(cat.id)}
                activeOpacity={0.8}
              >
                <Image
                  source={cat.icon}
                  style={styles.catIcon}
                  resizeMode="contain"
                />
                <Text style={[styles.catName, isActive && styles.catNameActive]}>
                  {cat.name}
                </Text>
                <View style={[styles.catArrow, isActive && styles.catArrowActive]}>
                  <Text style={styles.catArrowText}>›</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* ── Popular ── */}
        <Text style={styles.sectionLabel}>Popular</Text>
        <View style={styles.popularList}>
          {filteredItems.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.foodCard}
              onPress={() => onSelectItem(item)}
              activeOpacity={0.85}
            >
              <View style={styles.foodInfo}>
                <View style={styles.badgeRow}>
                  <Text style={styles.badgeStar}>⭐</Text>
                  <Text style={styles.badgeText}>top of the week</Text>
                </View>
                <Text style={styles.foodName}>{item.name}</Text>
                <Text style={styles.foodWeight}>Weight {item.weight}</Text>
                <View style={styles.foodBottom}>
                  <View style={styles.addBtn}>
                    <Text style={styles.addBtnText}>+</Text>
                  </View>
                  <View style={styles.ratingRow}>
                    <Text style={styles.ratingStar}>★</Text>
                    <Text style={styles.ratingText}>{item.rating}</Text>
                  </View>
                </View>
              </View>
              <Image
                source={item.image}
                style={styles.foodImg}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ))}
        </View>
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

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },
  menuBtn: {
    gap: 5,
    padding: 4,
  },
  menuLine: {
    width: 22,
    height: 2,
    backgroundColor: '#2c2a27',
    borderRadius: 2,
  },

  // Title
  titleBlock: {
    paddingHorizontal: 20,
    paddingBottom: 16,
    paddingTop: 4,
  },
  titleSub: {
    fontSize: 13,
    color: '#8a8070',
    fontWeight: '500',
    letterSpacing: 0.4,
  },
  titleMain: {
    fontSize: 32,
    fontWeight: '800',
    color: '#1a1714',
    letterSpacing: -0.5,
  },

  // Search
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 24,
    backgroundColor: '#fff',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#e8e4dd',
    paddingHorizontal: 14,
    paddingVertical: 11,
    gap: 10,
  },
  searchIconText: {
    fontSize: 14,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#1a1714',
    padding: 0,
  },

  // Section Label
  sectionLabel: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1714',
    paddingHorizontal: 20,
    marginBottom: 12,
  },

  // Categories
  categoriesScroll: {
    paddingHorizontal: 20,
    paddingBottom: 24,
    gap: 10,
  },
  catCard: {
    width: 100,
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 10,
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderColor: '#e8e4dd',
  },
  catCardActive: {
    backgroundColor: '#F5C518',
    borderColor: '#e0b010',
  },
  catIcon: {
    width: 48,
    height: 48,
  },
  catName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#5c5348',
    textAlign: 'center',
  },
  catNameActive: {
    color: '#1a1714',
  },
  catArrow: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#F5C518',
    alignItems: 'center',
    justifyContent: 'center',
  },
  catArrowActive: {
    backgroundColor: '#fff',
  },
  catArrowText: {
    fontSize: 18,
    color: '#1a1714',
    lineHeight: 22,
  },

  // Food Cards
  popularList: {
    paddingHorizontal: 20,
    gap: 12,
  },
  foodCard: {
    backgroundColor: '#fff',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#e8e4dd',
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  foodInfo: {
    flex: 1,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 4,
  },
  badgeStar: {
    fontSize: 10,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#c5880a',
  },
  foodName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1a1714',
    marginBottom: 2,
  },
  foodWeight: {
    fontSize: 11,
    color: '#a09585',
    marginBottom: 10,
  },
  foodBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  addBtn: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: '#F5C518',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addBtnText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1714',
    lineHeight: 24,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  ratingStar: {
    fontSize: 12,
    color: '#F5C518',
  },
  ratingText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#5c5348',
  },
  foodImg: {
    width: 100,
    height: 90,
  },
});

export default HomeScreen;