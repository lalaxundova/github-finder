import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Col } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";

const SearchForm = ({ sendKeyWord }) => {

    const [keyword, setKeyWord] = useState("");


    const formSubmmited = (e) => {
        e.preventDefault();
        sendKeyWord(keyword);
        setKeyWord("");
    };
    
    return (
        <Container>
            <div className='d-flex align-items-center justify-content-center mt-5'>
                <Col md="5">
                    <Form onSubmit={formSubmmited}>
                        <InputGroup className="mb-3">
                            <Form.Control
                                value={keyword}
                                onChange={(e) => setKeyWord(e.target.value)}
                                placeholder="Enter username"
                            />
                            <Button 
                            type='submit' 
                            variant="dark d-flex align-items-center justify-content-center" 
                            id="button-addon2"
                            >
                                <FaSearch />

                            </Button>
                        </InputGroup>
                    </Form>
                </Col>

            </div>
        </Container>
    )
}

export default SearchForm