import Accordion from 'react-bootstrap/Accordion';

function BasicExample() {
  return (
    <>
        <p>Instructions</p>
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
            <Accordion.Header>Sync</Accordion.Header>
            <Accordion.Body>
                to sync bla bla bla
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Move to</Accordion.Header>
            <Accordion.Body>
                to move bla bla bla
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>Add to</Accordion.Header>
            <Accordion.Body>
                to add bla bla bla
            </Accordion.Body>
        </Accordion.Item>

        </Accordion>
    </>
  );
}

export default BasicExample;