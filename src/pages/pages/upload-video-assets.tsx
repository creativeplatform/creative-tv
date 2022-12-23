import React, { useCallback, useContext, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Navbar/header'
import UploadVideoAsset from '../../components/pages/UploadVideoAsset'
import UpdateVideoAsset from '../../components/pages/UpdateVideoAsset'


export default function Home() {
  
  const router = useRouter();
  const assetId = useMemo(
    () => (router?.query?.assetId ? String(router?.query?.assetId) : undefined),
    [router?.query],
  );

  return (
      <>
        <Header>
            {''}
        </Header>
        { assetId ? 
          <UpdateVideoAsset>
              {''}
          </UpdateVideoAsset>
        :
          <UploadVideoAsset>
              {''}
          </UploadVideoAsset>
        }
      </>
      
  )
}
