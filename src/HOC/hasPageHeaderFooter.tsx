import styled from '@emotion/styled'
import React from 'react'
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

    @media(max-width: 992px) {
        &.Events {
            background-size: 200%!important;
        }
    }

    @media(max-width: 768px) {
        &.Events {
            background-size: 350%!important;
        }
    }

`

const StyledPageHeaderTitleDiv = styled('div')`
    position: absolute;
    width: 70%;
    left: 10vw;
    bottom: 5vh;
    z-index: 3;
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
            background-size: 230%!important;
            background-position: bottom right!important;
        }
    }

    @media(max-width: 768px) {
        &.Events {
            background-size: 200%!important;
            background-position: bottom right!important;
        }
    }


`

interface Props {
    viewTitle: string
    pageHeaderImage: string
    pageHeaderBackgroundPosition?: string
    pageHeaderBackgroundSize?: string
    pageFooterImage: string
    pageFooterBackgroundPosition?: string
    pageFooterBackgroundSize?: string
}

function hasPageHeaderFooter<T>(WrapperComponent: React.ComponentType<T>, {
    viewTitle,
    pageHeaderImage,
    pageHeaderBackgroundPosition,
    pageHeaderBackgroundSize = 'cover',

    pageFooterImage,
    pageFooterBackgroundPosition,
    pageFooterBackgroundSize = 'cover',
}: Props) {
    return (props: T) => (
        <>
            <StyledPageHeader className={viewTitle} style={{
                backgroundImage: `url(${pageHeaderImage})`,
                backgroundSize: pageHeaderBackgroundSize,
                backgroundPosition: pageHeaderBackgroundPosition,
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
                position: 'relative'

            }}>
                <div className='page-header-white-box z-1'></div>

                <StyledPageHeaderTitleDiv className='d-flex align-items-end h-100' >
                    <h2 className='page-header-title'>{viewTitle}</h2>
                </StyledPageHeaderTitleDiv>

                <Container className='position-relative z-3' style={{ height: '100%', borderBottom: "1px solid #bfd9e2" }} />
            </StyledPageHeader>

            <div className="position-relative z-3">
                <WrapperComponent {...props as any} />
            </div>

            <StyledPageFooter className={viewTitle} style={{
                backgroundImage: `url(${pageFooterImage})`,
                backgroundSize: pageFooterBackgroundSize,
                backgroundPosition: pageFooterBackgroundPosition,
                backgroundAttachment: 'fixed',
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