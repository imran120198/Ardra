import React, { useEffect } from "react";
import { Box, Grid, Spinner, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/action";
import ProductCard from "./ProductCard";

const Product = () => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.products);
  console.log("productState:", productState);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <Box p={4}>
        <Text fontSize="4xl" fontWeight={"bold"} mb={4} textAlign="center">
          Fake Store Products
        </Text>
        {productState.loading ? (
          <Spinner size="xl" />
        ) : productState.error ? (
          <Text>{productState.error}</Text>
        ) : (
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={6}
          >
            {productState.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Grid>
        )}
      </Box>
    </div>
  );
};

export default Product;
