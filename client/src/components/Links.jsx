import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``
const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``
const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``
function Links() {
    return (
        <React.Fragment>

            <Collapse>
                <List>
                    <Item >
                        <Link style={{ color: "white" }} to="/" className={'d-inline p-2 text-white'}>
                            Home
                        </Link>
                    </Item>
                </List>
            </Collapse>
        </React.Fragment>
    )
}
export default Links;