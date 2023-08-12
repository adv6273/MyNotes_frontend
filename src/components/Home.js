// import AddNote from "./AddNote"
import Notes from "./Notes"
import Footer from "./Footer";


// export default function Home() {
const  Home=( props) => {
const {showAlert} =props;
  return (
    <>
    <div>
      {/* <AddNote/> */}
      <Notes showAlert={showAlert} />
    </div>
      {/* <Footer/> */}
    </>
  )
}

export default Home