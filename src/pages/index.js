import { Inter } from 'next/font/google'
import DisplayIconStatus from '@/components/iconStatus';
import CountDistance from '@/components/distanceCount';
import ContaminateLevel from '@/components/chart/contaminateChart';
import DisplayWaterTemperature
 from '@/components/temperature/waterTemperature';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <DisplayIconStatus/>
    <CountDistance/>
    <ContaminateLevel/>
    <DisplayWaterTemperature/>
    </>
  )
}
