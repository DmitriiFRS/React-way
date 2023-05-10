import React from 'react';
import ContentLoader from 'react-content-loader';
function Skeleton(props) {
   return(
      <ContentLoader 
      speed={2}
      width={400}
      height={50}
      viewBox="0 0 400 50"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="48" y="8" rx="3" ry="3" width="120" height="6" /> 
      <rect x="48" y="26" rx="3" ry="3" width="70" height="6" /> 
      <circle cx="20" cy="20" r="20" />
    </ContentLoader>
   )
}
export default Skeleton;