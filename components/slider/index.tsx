import Link from 'next/link'
import Image from 'next/image'
import { ReactNode } from 'react'
import styles from '../../styles/Slider.module.css'
import Slider from "react-slick";

interface SliderProps {
    banners: Array<any>
    dots?: boolean,
    infinite?: boolean,
    speed?: number,
    slidesToShow?: number,
    slidesToScroll?: number
}

export function SliderGallery({
    banners,
    dots = true,
    infinite = true,
    speed = 500,
    slidesToShow = 1,
    slidesToScroll = 1
}: SliderProps) {

    const settings = {
        dots,
        infinite,
        speed,
        slidesToShow,
        slidesToScroll,
        arrows: false,
        centerPadding: '0px',
    };
    return (
        <div className={`${styles.sliderContainer}`}>
            <Slider {...settings}>

                {banners.map((banner, key) => (
                    <div className={styles.bannerItemContainer} key={key}>
                        <Image
                            src={banner.bannerImage.url}
                            width={banner.bannerImage.width}
                            height={banner.bannerImage.height}
                            alt={banner.bannerImage.alt}
                            className={styles.bannerImage}
                            quality={100}
                        />
                    </div>
                ))}


            </Slider>
        </div>
    )

}