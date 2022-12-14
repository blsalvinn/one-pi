import React from 'react'

import { useLocation, useParams } from 'react-router-dom'
import Helmet from '../components/Helmet'
import Section, { SectionBody, SectionTitle } from '../components/Section'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import ProductView from '../components/ProductView'

import productData from '../assets/fake-data/products'
import { any } from 'prop-types'

// console.log(productData)

const Product = () => {

  // const location = useLocation()
  let { slug } = useParams();
  const product = productData.getProductBySlug(slug);
  const relatedProducts = productData.getProducts(8)
  // console.log(product);
  // console.log(location.pathname);
  // console.log(slug);
  // const relatedProducts = productData.getProducts(8)

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [product])

  return (
    <Helmet title={product.title}>
      <Section>
        <SectionBody>
          <ProductView product={product} />
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>
          Learn More
        </SectionTitle>
        <SectionBody>
          <Grid
            col={4}
            mdCol={2}
            smCol={1}
            gap={20}
          >
            {
              relatedProducts.map((item, index) => (
                <ProductCard
                  key={index}
                  img01={item.image01}
                  img02={item.image02}
                  name={item.title}
                  price={Number(item.price)}
                  slug={item.slug}
                />
              ))
            }
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  )
}

export default Product
