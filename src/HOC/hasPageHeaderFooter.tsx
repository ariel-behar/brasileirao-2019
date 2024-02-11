import React from 'react'
import styled from '@emotion/styled'

import Container from 'react-bootstrap/Container'
import Footer from '../components/Footer/Footer'

const StyledPageHeader = styled('div')`
    position: relative;
    height: 350px;
    .page-header-white-box {
        position: absolute;
        bottom: -430px;
        left: -150px;
        background-color: white;
        height: 500px;
        width: 150%;
        transform: rotate(5deg);
    }

    @media(max-width: 1200px) {
        
    }

    @media(max-width: 992px) {
        &.Events {
            background-size: 150%!important;
            background-position: top center!important;
        }

        &.Fan-Club{
            background-size: 180%!important;
        }
    }

    @media(max-width: 768px) {
        &.Tickets {
            background-size: 150%!important;
        }

        &.Events{
            background-size: 250%!important;
        }

        &.Teams {
            background-size: 150%!important;
        }
    }

`

const StyledPageFooter = styled('div')`
    position: relative;
    height: 350px;
    .page-footer-white-box {
        position: absolute;
        height: 500px;
        width: 150%;
        top: -400px;
        right: -150px;
        background-color: white;
        transform: rotate(-4.5deg);
    }

    @media(max-width: 992px) {
        &.Events {
            background-size: 180%!important;
            background-position: bottom right!important;
        }
    }

    @media(max-width: 768px) {
        &.Events {
            background-size: 150%!important;
            background-position: bottom right!important;
        }

        &.Tickets {
            background-size: 150%!important;
            background-position: bottom center!important;
        }

        &.Fan-Club{
            background-size: 250%!important;
        }

        &.Teams {
            background-size: 150%!important;
        
        }
    }

    @media(max-width: 576px) {
        &.Events {
            background-size: 300%!important;
        }
    }
`

interface Props {
    viewTitle: string

    pageHeaderBackgroundImage: string
    pageHeaderBackgroundPosition?: string
    pageHeaderBackgroundSize?: string

    pageFooterBackgroundImage: string
    pageFooterBackgroundPosition?: string
    pageFooterBackgroundSize?: string
}

function hasPageHeaderFooter<T>(WrapperComponent: React.ComponentType<T>, {
    viewTitle,

    pageHeaderBackgroundImage,
    pageHeaderBackgroundPosition,
    pageHeaderBackgroundSize = 'cover',

    pageFooterBackgroundImage,
    pageFooterBackgroundPosition,
    pageFooterBackgroundSize = 'cover',
}: Props) {
    const isXsSmMd = window.innerWidth < 992;

    return (props: T) => (
        <>
            <StyledPageHeader className={viewTitle.split(' ').join('-')} style={{
                backgroundImage: `url(${pageHeaderBackgroundImage})`,
                backgroundSize: pageHeaderBackgroundSize,
                backgroundPosition: pageHeaderBackgroundPosition,
                backgroundAttachment: isXsSmMd ? 'initial' : 'fixed',
                backgroundRepeat: 'no-repeat',
                position: 'relative'

            }}>
                <div className='page-header-white-box z-1'></div>

                <Container className='position-relative z-3' style={{ height: '100%', borderBottom: "1px solid #bfd9e2" }} />
            </StyledPageHeader>

            <div className="position-relative z-3">
                <WrapperComponent {...props as any} />
            </div>

            <StyledPageFooter className={viewTitle.split(' ').join('-')} style={{
                backgroundImage: `url(${pageFooterBackgroundImage})`,
                backgroundSize: pageFooterBackgroundSize,
                backgroundPosition: pageFooterBackgroundPosition,
                backgroundAttachment: isXsSmMd ? 'initial' : 'fixed',
                backgroundRepeat: 'no-repeat',
                position: 'relative'
            }}>
                <div className='page-footer-white-box z-1'></div>
                <Container className='position-relative z-3' style={{ borderTop: "1px solid #bfd9e2" }} />

                <Footer />
            </StyledPageFooter>
        </>
    )
}

export default hasPageHeaderFooter