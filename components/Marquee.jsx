import { default as FastMarquee } from 'react-fast-marquee'
import Image from "next/image"

export default function Marquee(){
    return(
        <a target="_blank" rel="noopener norefferer" href="https://houghtonwebdesign.co.uk/portfolio" aria-label="houghton web design portfolio">
        <FastMarquee gradient={false} >
            <Image src="/images/Flower.png" className="px-2" alt="Flower Shop" width="400" height="200" />
            <Image src="/images/HWD.png" className="px-2" alt="HWD Landing Page" width="400" height="200" />
            <Image src="/images/Monday.png" className="px-2" alt="Mandate Monday" width="400" height="200" />
            <Image src="/images/wedding.png" className="px-2" alt="Wedding Scene" width="400" height="200" />
        </FastMarquee>
        </a>
    )
}