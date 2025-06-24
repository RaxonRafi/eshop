import { Helmet } from "react-helmet-async"
import Container from "../../globalComponents/Container"
import ContactBody from "./components/ContactBody"
import GetUpdates from "./components/GetUpdates"
import MapLocation from "./components/MapLocation"

const Contact = () => {
  return (
    <>
     <Helmet>
        <title>Contact</title>
      </Helmet>
    <Container>
      <div className="mt-20">
        <MapLocation/>
      </div>
      <ContactBody/>
      <GetUpdates/>
    </Container>
    </>
  )
}

export default Contact