import styled from '@emotion/styled'
import React from 'react'

const StyledPageHeader = styled('div')`
    .white-box {
        bottom: -430px;
        left: -150px;
        height: 500px;
        width: 150%;
        transform: rotate(5deg);
        z-index: 1;
    }
`

const StyledPageFooter = styled('div')`
    .white-box {
        top: -400px;
        right: -150px;
        height: 500px;
        width: 150%;
        transform: rotate(-5deg);
        z-index: 1;
    }
`

interface Props {
    viewTitle: string
    pageHeaderImage: string
    pageHeaderImagePosition?: string
    pageFooterImage: string
    pageFooterImagePosition?: string
}

function hasPageHeaderFooter<T>(WrapperComponent: React.ComponentType<T>, {
    viewTitle,
    pageHeaderImage,
    pageHeaderImagePosition,
    pageFooterImage,
    pageFooterImagePosition,
}: Props) {
    return (props: T) => (
        <>
            <StyledPageHeader style={{
                backgroundImage: `url(${pageHeaderImage})`,
                backgroundSize: 'cover',
                backgroundPosition: pageHeaderImagePosition,

            }}>
                <div className='white-box'></div>
                <h2>{viewTitle}</h2>
            </StyledPageHeader>

            <WrapperComponent {...props as any}/>

            <StyledPageFooter style={{
                backgroundImage: `url(${pageFooterImage})`,
                backgroundSize: 'cover',
                backgroundPosition: pageFooterImagePosition,
            }}>
                <div className='white-box'></div>
            </StyledPageFooter>
        </>
    )
}

export default hasPageHeaderFooter