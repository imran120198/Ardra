import React from "react";
import { Box, Image, Text, Badge } from "@chakra-ui/react";

const ProductCard = ({ product }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Image
        src={product.image}
        alt={product.title}
        boxSize="200px"
        objectFit="contain"
        mx="auto"
      />
      <Box p={4}>
        <Text fontWeight="bold" as="h4" lineHeight="tight" isTruncated>
          {product.title}
        </Text>
        <Text as="h6" lineHeight="tight" isTruncated>
          {product.description}
        </Text>
        <Text mt={2}>${product.price}</Text>
        <Badge borderRadius="full" px="2" colorScheme="teal" mt={2}>
          {product.category}
        </Badge>
      </Box>
    </Box>
  );
};

export default ProductCard;
