import React from 'react'
import { useRouter } from 'next/router'
import Header from '../../components/Navbar/header'
import SwiperControls from '../../components/pages/SwiperControls'
import { BreadcrumbItem, Icon, BreadcrumbLink, Breadcrumb } from "@chakra-ui/react";

export default function Swiper() {
  const router = useRouter();
  return (
      <>
        <Header />
        <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink onClick={() => router.push('/')}>Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage className="active-crumb">
                    <BreadcrumbLink href='#'>Swiper Controls</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        <SwiperControls>
            {''}
        </SwiperControls>
      </>
      
  )
}