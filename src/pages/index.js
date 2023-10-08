import { Inter } from 'next/font/google'
import DisplayIconStatus from '@/components/iconStatus';
import CountDistance from '@/components/distanceCount';
import ContaminateLevel from '@/components/chart/contaminateChart';
import DisplayWaterTemperature
 from '@/components/temperature/waterTemperature';
import getArea from '@/lib/getArea';
import getAnimal from '@/lib/getAnimal';

const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps() {
  const area = await getArea();
  const animals = await getAnimal();
  return {props: {area, animals}}
}

export default function Home({area, animals}) {
  return (
    <>
    <DisplayIconStatus waterStt={area.nearest_aquatic_location.condition}/>
    <CountDistance 
    aquaticArea = {area.nearest_aquatic_location.name}
    distance={area.nearest_aquatic_location.distance} 
    currentLocation={area.location.name}/>
    <ContaminateLevel/>
    <DisplayWaterTemperature tempCelcius={area.nearest_aquatic_location.temperature}/>
    </>
  )
}
