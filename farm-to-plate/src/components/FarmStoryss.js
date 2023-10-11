import { Card, Col, Row } from 'react-bootstrap';



function FarmStoriess() {
  return (
    <Card>
      <Card.Header style={{fontSize: '2rem', textAlign: 'center'}}>Farm Storys</Card.Header>
      <Card.Body>
        <Row>
          <Col md={6}>
            <p>
              {' '}
              Greens Farms started way back in the 1900s. It is owned by the Thompsons who have an entire heritage of farmers. Delivering quality produce is the passion and legacy for the Thompsons family and they continue to be the local people’s favourite source of greens in their community.{' '}
            </p>
            <footer className="blockquote-footer">
              Ceo of <cite title="Source Title">Greens Farms</cite>
            </footer>
          </Col>
          <Col md={6}>
            <p>
              {' '}
              Jack and Mary’s farm started as a small hobby by Jack when he was 8 years old. Planting little seeds in his garden and watching them grow into plants. As he grew up, he took his talents more seriously and studied farming. The small plants have now become a range of seasonal produce which has become popular in the local area while Jack and Mary’s continue to deliver great service to their area.
            </p>
            <footer className="blockquote-footer">
              Director of <cite title="Source Title">Jack and Mary’s</cite>
            </footer>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default FarmStoriess;
