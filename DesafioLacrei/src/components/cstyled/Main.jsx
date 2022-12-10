import styled from "styled-components"

const Main = styled.main `
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin:0 auto;
    flex-wrap: wrap;
    padding: 0.5rem 4rem;

    .min-heigh{
        min-height: 75vh;
    }

    .start{
        justify-content: flex-start;
    }

    .column{
        flex-direction: column;
        justify-content: flex-start
    }
`;

export default Main