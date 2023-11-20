import { Inter } from 'next/font/google'
import DisplayIconStatus from '@/components/iconStatus';
import CountDistance from '@/components/distanceCount';
import ContaminateLevel from '@/components/chart/contaminateChart';
import DisplayWaterTemperature
 from '@/components/temperature/waterTemperature';
import getAPI from '@/lib/getAPI';
import DisplayAnimals from '@/components/endangerAnimal';

const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps() {
  const {location, nearestAquaticLocation, animals} = await getAPI();
  return {props: {location, nearestAquaticLocation, animals}}
  
}

export default function Home({location, nearestAquaticLocation, animals}) {
  return (
    <div className='transition-all duration-300'>
    <DisplayIconStatus waterStt={nearestAquaticLocation.condition} location={location.name}/>
    <CountDistance 
    aquaticLocation = {nearestAquaticLocation.name}
    distance={nearestAquaticLocation.distance} />
    <DisplayWaterTemperature tempCelcius={nearestAquaticLocation.temperature}/>
    <ContaminateLevel/>
    <DisplayAnimals animalsList={animals}/>
    </div>
  )
}
