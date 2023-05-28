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
    slidesToShow = 3,
    slidesToScroll = 3
}: SliderProps) {

    const settings = {
        dots,
        infinite,
        speed,
        slidesToShow,
        slidesToScroll,
        arrows: false,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };
    return (
        <div className={`${styles.sliderContainer}`}>
            <Slider {...settings}>

                {banners.map((banner, key) => (
                    <Link
                        href={banner.url}
                        key={key}
                    >
                        <div className={styles.bannerItemContainer}>
                            <Image
                                src={banner.bannerImage.url}
                                width={banner.bannerImage.width}
                                height={banner.bannerImage.height}
                                alt={banner.bannerImage.alt}
                                className={styles.bannerImage}
                                quality={100}
                            />
                        </div>
                    </Link>
                ))}


            </Slider>
        </div>
    )

}