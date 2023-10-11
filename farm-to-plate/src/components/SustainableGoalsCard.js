
import {  Col, Row } from 'react-bootstrap';
function SustainableGoalsCard() {
  return (
  
     
        <Row className="justify-content-center">
            <h2 style={{fontSize: '2rem', textAlign: 'center'}}>UN Sustainable Goal Targets</h2>
            <br/>
          <Col md={4} className="text-center">
            <img src={`/home/3goal.png`} style={{ width: '200px', height: 'auto' }}/>
            <br/><br/>
            <ul style={{ listStyle: 'none' }}>
              <li>-Fresh produce have high nutritional values.</li>
              <li>-Higher risk of contamination from pesticide.</li>
              <li>-Some preservatives are cancer causing. (Research from inChem)</li>
            </ul>
          </Col>
  
          <Col md={4} className="text-center">
            <img src={`/home/8goal.png`} style={{ width: '200px', height: 'auto' }}/>
            <br/><br/>
            <ul style={{ listStyle: 'none' }}>
              <li>-Local Seasonal firms have been on the decline.</li>
              <li>-Large Companies have high bargaining power leads to exploitation.</li>
              <li>-Cuts the cost required for shipping and storage.</li>
            </ul>
          </Col>
  
          <Col md={4} className="text-center">
            <img src={`/home/11goal.png`} style={{ width: '200px', height: 'auto' }}/>
            <br/><br/>
            <ul style={{ listStyle: 'none' }}>
              <li>-Over 50% of produce consumed in UK is imported (from GOV.UK)</li>
              <li>-9.5 MT of farmed produce go to waste (lordslibrary.parliment.uk)</li>
              <li>-Imported and non-seasonal produce have higher carbon footprint.</li>
            </ul>
          </Col>
        </Row>
    
   

    
  );
}
export default SustainableGoalsCard;