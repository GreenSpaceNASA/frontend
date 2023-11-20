import { Inter } from 'next/font/google'
import DisplayIconStatus from '@/components/iconStatus';
import CountDistance from '@/components/distanceCount';
import ContaminateLevel from '@/components/chart/contaminateChart';
import DisplayWaterTemperature
 from '@/components/temperature/waterTemperature';
import getAPI from '@/lib/getAPI';
import getAnimal from '@/lib/getAnimal';
import DisplayAnimals from '@/components/endangerAnimal';

const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps() {
  const {area, animals} = await getAPI();
  return {props: {area, animals}}
}

export default function Home({area, animals}) {
  return (
    <div className='transition-all duration-300'>
    <DisplayIconStatus waterStt={area.nearest_aquatic_location.condition} location={area.location.name}/>
    <CountDistance 
    aquaticArea = {area.nearest_aquatic_location.name}
    distance={area.nearest_aquatic_location.distance} />
    <DisplayWaterTemperature tempCelcius={area.nearest_aquatic_location.temperature}/>
    <ContaminateLevel/>
    <DisplayAnimals animalsList={animals.animals}/>
    </div>
  )
}
