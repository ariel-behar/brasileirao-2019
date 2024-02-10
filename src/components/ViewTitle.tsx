import styled from "@emotion/styled"

const StyledPageHeaderTitleDiv = styled('div')`
    position: absolute;
    top: -10vh;
    left: 15vw;
    z-index: 10;
`
interface Props {
    viewTitle: "League" | "Teams" | "Fan Club" | "Events" | "Tickets" 
}

function ViewTitle({
    viewTitle,
}:Props) {
    

    return (
        <StyledPageHeaderTitleDiv >
            <h2 className='page-header-title'>{viewTitle}</h2>
        </StyledPageHeaderTitleDiv>
    )
}

export default ViewTitle