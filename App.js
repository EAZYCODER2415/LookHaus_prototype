import React, { useState } from 'react';
import { View, Text, Image, ScrollContainer, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Box, Ruler, Sparkles, ShoppingBag, MapPin, ChevronRight } from 'lucide-react-native';

const UrbanNestAI = () => {
  const [selectedStyle, setSelectedStyle] = useState('Minimalist');

  // Mock Data: This represents the "Spatial Truth" from the condo registry
  const unitData = {
    id: "UNIT-12A",
    size: "38 sq.m.",
    dims: "4.2m x 5.1m",
    building: "Ashton Residence, Sukhumvit"
  };

  const recommendations = [
    { id: 1, name: 'Sleek Loveseat', brand: 'IKEA', width: '1.8m', price: '฿12,500', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200' },
    { id: 2, name: 'ErgoDesk Pro', brand: 'Modernform', width: '1.2m', price: '฿8,900', img: 'https://images.unsplash.com/photo-1518455027359-f3f816b1a22a?w=200' },
    { id: 3, name: 'Slim Bookshelf', brand: 'Index', width: '0.6m', price: '฿3,200', img: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=200' },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F8F9FA' }}>
      <ScrollView className="p-4">
        
        {/* Header */}
        <View className="flex-row justify-between items-center mb-6">
          <View>
            <Text className="text-2xl font-bold text-slate-900">Urban Nest AI</Text>
            <View className="flex-row items-center">
              <MapPin size={14} color="#64748b" />
              <Text className="text-slate-500 ml-1">{unitData.building}</Text>
            </View>
          </View>
          <View className="bg-amber-100 p-2 rounded-full">
            <Sparkles size={24} color="#d97706" />
          </View>
        </View>

        {/* The Blueprint Card (The "Core Idea") */}
        <View className="bg-slate-900 rounded-3xl p-5 mb-6 shadow-xl">
          <View className="flex-row justify-between items-start mb-4">
            <View>
              <Text className="text-amber-400 font-mono text-xs uppercase tracking-widest">Registered Layout</Text>
              <Text className="text-white text-xl font-semibold">{unitData.id} — {unitData.size}</Text>
            </View>
            <View className="bg-slate-800 px-3 py-1 rounded-md">
              <Text className="text-slate-400 text-xs">{unitData.dims}</Text>
            </View>
          </View>

          {/* Placeholder for the AI 3D Render - Grounded in Precision */}
          <View className="bg-slate-800 h-64 rounded-2xl items-center justify-center border border-slate-700 border-dashed">
             <Image 
                source={{ uri: 'https://api.placeholder.com/400/300' }} // In real app, this is the AI Canvas
                className="w-full h-full rounded-2xl opacity-60"
             />
             <View className="absolute bg-slate-900/80 p-4 rounded-xl items-center">
                <Ruler size={32} color="#fbbf24" />
                <Text className="text-white mt-2 font-medium">AI Precision Mapping Active</Text>
                <Text className="text-slate-400 text-xs">All items auto-scaled to floor plan</Text>
             </View>
          </View>
        </View>

        {/* Personalization Filters */}
        <Text className="text-lg font-bold text-slate-900 mb-3">Refine Your Vibe</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6">
          {['Minimalist', 'Industrial', 'Digital Nomad', 'Japandi'].map((style) => (
            <TouchableOpacity 
              key={style}
              onPress={() => setSelectedStyle(style)}
              className={`mr-3 px-6 py-2 rounded-full border ${selectedStyle === style ? 'bg-slate-900 border-slate-900' : 'bg-white border-slate-200'}`}
            >
              <Text className={`${selectedStyle === style ? 'text-white' : 'text-slate-600'} font-medium`}>{style}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* AI Curated Furniture - In Sync with Space */}
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-lg font-bold text-slate-900">Curated for {unitData.id}</Text>
          <TouchableOpacity><Text className="text-amber-600 font-semibold">View All</Text></TouchableOpacity>
        </View>

        {recommendations.map((item) => (
          <View key={item.id} className="bg-white rounded-2xl p-3 mb-4 flex-row items-center shadow-sm border border-slate-100">
            <Image source={{ uri: item.img }} className="w-20 h-20 rounded-xl bg-slate-100" />
            <View className="ml-4 flex-1">
              <Text className="text-slate-900 font-bold text-md">{item.name}</Text>
              <Text className="text-slate-500 text-xs">{item.brand} • Fits in {item.width} gap</Text>
              <Text className="text-slate-900 font-bold mt-1">{item.price}</Text>
            </View>
            <TouchableOpacity className="bg-slate-100 p-3 rounded-full">
              <ShoppingBag size={20} color="#0f172a" />
            </TouchableOpacity>
          </View>
        ))}

      </ScrollView>

      {/* Persistent Bottom CTA */}
      <View className="p-4 bg-white border-t border-slate-200">
        <TouchableOpacity className="bg-slate-900 py-4 rounded-2xl items-center flex-row justify-center shadow-lg">
          <Sparkles size={18} color="white" className="mr-2" />
          <Text className="text-white font-bold text-lg"> Generate New Layout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default UrbanNestAI;