import Container from 'react-bootstrap/Container';
export const ItemListContainer = ({ greeting }) =>
    <Container className='mt-3'>
        <h1>{greeting}</h1>
    </Container>;