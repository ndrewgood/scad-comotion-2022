import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1 style={{textAlign: "center", marginTop: "300px"}}>404: Not Found</h1>
    <p style={{textAlign: "center", marginTop: "40px"}}>You found the forbidden Monty room... please go back to safety😶</p>
  </Layout>
)

export default NotFoundPage
