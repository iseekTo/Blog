import React, { useEffect, useRef } from 'react'
import Script from 'next/script'

const BaiduAnalysis: React.FC = () => {
  const isLoaded = useRef(false)

  useEffect(() => {
    isLoaded.current = true
  }, [])

  if (isLoaded.current) {
    return null
  }

  return (
    <Script
      dangerouslySetInnerHTML={{
        __html: `
              var _hmt = _hmt || [];
              (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?3820ade3b41c53e340618bf6b6abaa10";
                var s = document.getElementsByTagName("script")[0]; 
                s.parentNode.insertBefore(hm, s);
              })();
              `
      }}
      onError={(e) => {
        console.error('Script failed to load', e)
      }}
    />
  )
}

export default BaiduAnalysis
