import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';
import 
  *
 as Icons from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';
import sanityClient from "../sanity"

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants ] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "featured" && _id == $id] {
      ...,
      restaurants[]->{
        ...,
        dishes[] ->,
        type-> {
          name
        }
          },
        }[0]
    `,
        { id }
      )
      .then((data) => {
        setRestaurants(data.restaurants);
      });
  }, [id]);

  // console.log('res', restaurants)
  return (
    <View>
      <View className="flex-row mt-4 items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <Icons.ArrowRightIcon color='#00CCBB'/>
      </View>
      <Text className="text-sm text-gray-500 px-4">{description}</Text>

      <ScrollView 
        horizontal
        contentContainerStyle={{
            paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestaurantCards... */}

        {restaurants.map(res => (
          <RestaurantCard
            key={res._id}
            imgUrl={res.image}
            id={res._id}
            title={res.name}
            rating={res.rating}
            genre={res.type.name}
            address={res.address}
            short_description={res.short_description}
            dishes={res.dishes}
            long={res.long}
            lat={res.lat}/>
        ) )}

      </ScrollView>
    </View>
  )
}

export default FeaturedRow