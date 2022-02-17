import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Nav from '../components/nav'
import MobileNav from '../components/mobileNav'
import Footer from '../components/footer'
import Banner from '../components/banner'

import '../styles/process.scss'

export const query = graphql`
  query ProcessPageQuery {
    heroImage: allFile(filter: {relativePath: {eq: "banners/heroFAQ.jpg"}}) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [JPG], quality: 100)
            }
          }
        }
    }
  }
`;

const ProcessPage = (props) => {
  const { data, errors } = props;

  let heroImage = data.heroImage.edges[0].node.childImageSharp.gatsbyImageData;
  console.log(heroImage)

  return(
    <Layout>
      <Seo title="FAQ - CoMotion 2022" />
      <Nav />
      <MobileNav/>
      <Banner title="Process Page" imageData={heroImage}/>
      <Footer/>
    </Layout>
  )
}

export default ProcessPage