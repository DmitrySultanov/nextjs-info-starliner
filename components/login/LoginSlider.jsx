'use client'
import React from 'react';
import { EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import Image from 'next/image';
import styles from '@/styles/LoginSlider.module.scss'
import picture1 from '@/public/space/1.jpg';
import picture2 from '@/public/space/2.jpg';
import picture3 from '@/public/space/3.jpg';
import picture4 from '@/public/space/4.jpg';
import picture5 from '@/public/space/5.jpg';
import picture6 from '@/public/space/6.jpg';
import picture7 from '@/public/space/7.jpg';
import picture8 from '@/public/space/8.jpg';
import picture9 from '@/public/space/9.jpg';


const LoginSlider = () => {

    return (
        <Swiper
            className={styles.LoginSlider}
            spaceBetween={0}
            slidesPerView={1}
            speed={1000}
            loop={true}
            modules={[EffectFade, Autoplay]} 
            effect="fade"
            autoplay={{
                delay: 4500,
                disableOnInteraction: false,
            }}
            >
            <SwiperSlide>
                <Image
                    src={picture1}
                    alt=""
                    fill
                    sizes="100%"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={picture2}
                    alt=""
                    fill
                    sizes="100%"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={picture3}
                    alt=""
                    fill
                    sizes="100%"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={picture4}
                    alt=""
                    fill
                    sizes="100%"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={picture5}
                    alt=""
                    fill
                    sizes="100%"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={picture6}
                    alt=""
                    fill
                    sizes="100%"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={picture7}
                    alt=""
                    fill
                    sizes="100%"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={picture8}
                    alt=""
                    fill
                    sizes="100%"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={picture9}
                    alt=""
                    fill
                    sizes="100%"
                />
            </SwiperSlide>
        </Swiper>
    );
}

export default LoginSlider;
