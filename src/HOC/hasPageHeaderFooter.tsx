import styled from '@emotion/styled'
import React from 'react'
import Container from 'react-bootstrap/Container'

const StyledPageHeader = styled('div')`
    position: relative;
    height: 300px;
    .page-header-white-box {
        position: absolute;
        bottom: -430px;
        left: -150px;
        background-color: white;
        height: 500px;
        width: 150%;
        transform: rotate(5deg);
    }

    .page-header-title {

    }
`

const StyledPageFooter = styled('div')`
    position: relative;
    height: 300px;
    .page-footer-white-box {
        position: absolute;
        height: 500px;
        width: 150%;
        top: -400px;
        right: -150px;
        background-color: white;
        transform: rotate(-4.5deg);
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
                backgroundAttachment: 'fixed',

            }}>
                <div className='page-header-white-box z-1'></div>
                <Container className='position-relative z-3' style={{ height: '100%', borderBottom: "1px solid #bfd9e2" }}>
                    <div className='d-flex align-items-end h-100 '>
                        <h1 className='page-header-title'>{viewTitle}</h1>
                    </div>
                </Container>
            </StyledPageHeader>

            <div className="position-relative z-3">
                <WrapperComponent {...props as any} />
            </div>

            <StyledPageFooter style={{
                backgroundImage: `url(${pageFooterImage})`,
                backgroundSize: 'cover',
                backgroundPosition: pageFooterImagePosition,
                backgroundAttachment: 'fixed',
            }}>
                <div className='page-footer-white-box z-1'></div>
                <Container className='position-relative z-3' style={{ borderTop: "1px solid #bfd9e2" }} />
            </StyledPageFooter>
        </>
    )
}

export default hasPageHeaderFooter