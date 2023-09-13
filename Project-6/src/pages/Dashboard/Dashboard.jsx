import { Grid, GridItem } from "@chakra-ui/react"
import DashboardLayout from "../../assets/components/DashboardLayout"
import InfoCard from "./components/InfoCard"
import PortfoloioSec from "./components/PortfoloioSec"
import PriceSec from "./components/PriceSec"
import Transactions from "./components/Transactions"

function Dashboard() {
  return (
    <div>
        <DashboardLayout title="Dashboard ">
            <Grid gap="6"
            gridTemplateColumns={{
              base : "repeat(1,1fr)",
              xl : "repeat(2,1fr)"
            }}
            >
              <GridItem colSpan={{base:"1",xl:"2"}}>
              <PortfoloioSec/>
              </GridItem>
              <GridItem colSpan={1}>
              <PriceSec/>
              </GridItem>
              <GridItem colSpan={1}>
              <Transactions/>
              </GridItem>
              <GridItem colSpan={1}>
              <InfoCard
              inverted={false}
              text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
              tagText="Loans"
              />
              </GridItem>
              <GridItem colSpan={1}>
              <InfoCard
              inverted={true}
              text="Learn more about our real estate, mortgage, and  corporate account services"
              tagText="Contact"
              />
              </GridItem>
            </Grid>
        </DashboardLayout>
    </div>
  )
}

export default Dashboard