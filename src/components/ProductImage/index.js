import React, { useState } from 'react';
import { Image } from 'react-native';
import { useProduct } from 'hooks/useProduct';

const ProductImage = () => {
  const [size, setSize] = useState({});

  let { img: uri } = useProduct();
  uri = uri.replace(/^http:/, 'https:');

  const onLayout = ({ nativeEvent: event }) => {
    Image.getSize(uri, (width, height) => {
      setSize({
        width: event.layout.width,
        height: height * (event.layout.width / width),
      });
    });
  };

  return (
    <Image
      onLayout={onLayout}
      source={{
        uri,
        ...size,
      }}
      resizeMode="contain"
    />
  );
};

ProductImage.propTypes = {};

export { ProductImage };
