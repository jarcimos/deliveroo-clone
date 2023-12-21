import { Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { urlFor } from '../sanity'


const CategoryCard = ({imgUrl, title}) => {
  
  return (
    <View>
      <TouchableOpacity className="relative mr-2">
        <Image 
          source={{
              uri: urlFor(imgUrl).url(),
            }}
          className="h-20 w-20 rounded"
        />
        <Text className="absolute bottom-1 left-1 text-white font-bold p-1 bg-black bg-opacity-100">{title}</Text>

        
        
      </TouchableOpacity>
    </View>
  )
}

export default CategoryCard