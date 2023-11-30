'use client'
import { useState, useEffect } from 'react'
import MainSlider from "@/components/indexPage/MainSlider";
import MainLinksBlocks from "@/components/indexPage/MainLinksBlocks";
import AdvantagesSlider from "@/components/indexPage/AdvantagesSlider";
import TrustSlider from "@/components/indexPage/TrustSlider";
import UseFulFor from "@/components/indexPage/UseFulFor";
import ReviewsSlider from "@/components/indexPage/ReviewsSlider";
import Features from "@/components/indexPage/Features";
import AppLinks from "@/components/indexPage/AppLinks";
import RecentBlog from "@/components/indexPage/RecentBlog";
import TryStarlinerFree from "@/components/indexPage/TryStarlinerFree";
import Loading from "./loading";


export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <div id="index">
      {loading 
        ? <Loading /> 
        : <>
            <MainSlider />
            <MainLinksBlocks />
            <AdvantagesSlider />
            <TrustSlider />
            <UseFulFor />
            <ReviewsSlider />
            <Features />
            <AppLinks />
            <RecentBlog />
            <TryStarlinerFree />
          </>
      }
    </div>
  )
}
