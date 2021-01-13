import React, { useState, useEffect } from "react";
import styled from "styled-components";

// import { useHistory } from "react-router-dom";
import { ServicesData as DATA } from "../servicesData";

//components
import Review from "../components/review/review.component";

// animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";

const ProductDetailsPage = ({ history }) => {
  //   const history = useHistory();
  const currentUrl = history.location.pathname;
  const [product, setProduct] = useState(null);

  // useEffect
  useEffect(() => {
    const currentProduct = DATA.find(
      ({ id }) => `/services/${id}` === currentUrl
    );
    setProduct(currentProduct);
  }, [currentUrl]);

  return (
    <>
      {product && (
        <StyledProductDetailsSection
          exit='exit'
          variants={pageAnimation}
          initial='hidden'
          animate='show'
        >
          <StyledHeadline>
            <StyledOverlay>
              <h2>{product.title}</h2>
              <img src={product.mainImg} alt='' />
            </StyledOverlay>
          </StyledHeadline>
          <StyledReviews>
            {product.reviews.map(({ title, description }, index) => (
              <Review title={title} description={description} key={index} />
            ))}
          </StyledReviews>
          <StyledImage>
            <img src={product.secondaryImg} alt={product.title} />
          </StyledImage>
        </StyledProductDetailsSection>
      )}
    </>
  );
};

const StyledProductDetailsSection = styled(motion.section)`
  min-height: 100vh;
`;

const StyledHeadline = styled.div`
  min-height: 80vh;
  position: relative;
`;

const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(19, 19, 19, 0.9);
  height: 100%;

  img {
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
  }

  h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
  }
`;

const StyledReviews = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const StyledImage = styled.div`
  min-height: 50vh;

  img {
    min-height: 100vh;
    object-fit: cover;
  }
`;
export default ProductDetailsPage;
