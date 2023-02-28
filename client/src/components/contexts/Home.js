import Footer from "./Footer";
import Header from "./Header";

export default function Home() {
  return (
    <div className="text-center">
      <Header/>
      <div className="m-2 p-3 border border-info text-uppercase fs-5"
      style={{height:"400px"}}>
        App
      </div>
      <Footer/>
    </div>
  )
}
