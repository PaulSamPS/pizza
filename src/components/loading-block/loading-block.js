import React from 'react'
import ContentLoader from 'react-content-loader'
// import './loading-block.scss'

function LoadingBlock() {
    return (
        // <ContentLoader
        //     className="pizza-block"
        //     speed={2}
        //     width={280}
        //     height={460}
        //     viewBox="0 0 280 460"
        //     backgroundColor="#f3f3f3"
        //     foregroundColor="#ecebeb">
        //     <circle cx="132" cy="142" r="115" />
        //     <rect x="0" y="273" rx="6" ry="6" width="280" height="26" />
        //     <rect x="0" y="310" rx="6" ry="6" width="280" height="84" />
        //     <rect x="0" y="418" rx="6" ry="6" width="91" height="31" />
        //     <rect x="137" y="408" rx="25" ry="25" width="140" height="46" />
        // </ContentLoader>
        <ContentLoader
            className="pizza-block"
            viewBox="0 0 400 160"
            height={160}
            width={400}
            backgroundColor="transparent"
        >
            <circle cx="150" cy="86" r="8" />
            <circle cx="194" cy="86" r="8" />
            <circle cx="238" cy="86" r="8" />
        </ContentLoader>

    // <div className="lds-roller">
        //     <div></div>
        //     <div></div>
        //     <div></div>
        //     <div></div>
        //     <div></div>
        //     <div></div>
        //     <div></div>
        //     <div></div>
        // </div>
    )
}

export default LoadingBlock