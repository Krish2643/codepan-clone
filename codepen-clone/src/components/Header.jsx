
import { AppBar, Toolbar, styled } from "@mui/material"
import coding from './coding.png'

const Container = styled(AppBar)`
    background: #060606;
    position: static;
    border-bottom: 1px solid #2f2f2f;
    height: 9vh;
`;

const Header = () => {
    return (
        <Container>
            <Toolbar>
                <img src={coding} alt="logo" style={{ width: 40 }} />
            </Toolbar>
        </Container>
    )
}

export default Header