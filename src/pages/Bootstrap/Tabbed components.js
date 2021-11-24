import React from 'react'
import { Col, Nav, Row, Tab } from 'react-bootstrap'
import Tabs from 'react-bootstrap/Tabs'
export default function Tabbed_components() {
    return (
        <div>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="home" title="Home">
  <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="home" title="Home">
    {/* <Sonnet /> */}
    <p>That thou hast her it is not all my grief, And yet it may be said I loved her dearly; That she hath thee is of my wailing chief, A loss in love that touches me more nearly. Loving offenders thus I will excuse ye: Thou dost love her, because thou know'st I love her; And for my sake even so doth she abuse me, Suffering my friend for my sake to approve her. If I lose thee, my loss is my love's gain, And losing her, my friend hath found that loss;</p>
  </Tab>
  <Tab eventKey="profile" title="Profile">
  <h1>That thou hast her it is not all my grief, And yet it may be said I loved her dearly; That she hath thee is of my wailing chief, A loss in love that touches me more nearly. Loving offenders thus I will excuse ye: Thou dost love her, because thou know'st I love her; And for my sake even so doth she abuse me, Suffering my friend for my sake to approve her. If I lose thee, my loss is my love's gain, And losing her, my friend hath found that loss;</h1>
    {/* <Sonnet /> */}
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
    {/* <Sonnet /> */}
  </Tab>
</Tabs>

    {/* <Sonnet /> */}
  </Tab>
  <Tab eventKey="profile" title="Profile">
  <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="home" title="Home">
    {/* <Sonnet /> */}
    <p>That thou hast her it is not all my grief, And yet it may be said I loved her dearly; That she hath thee is of my wailing chief, A loss in love that touches me more nearly. Loving offenders thus I will excuse ye: Thou dost love her, because thou know'st I love her; And for my sake even so doth she abuse me, Suffering my friend for my sake to approve her. If I lose thee, my loss is my love's gain, And losing her, my friend hath found that loss;</p>
  </Tab>
  <Tab eventKey="profile" title="Profile">
  <h1>That thou hast her it is not all my grief, And yet it may be said I loved her dearly; That she hath thee is of my wailing chief, A loss in love that touches me more nearly. Loving offenders thus I will excuse ye: Thou dost love her, because thou know'st I love her; And for my sake even so doth she abuse me, Suffering my friend for my sake to approve her. If I lose thee, my loss is my love's gain, And losing her, my friend hath found that loss;</h1>
    {/* <Sonnet /> */}
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
    {/* <Sonnet /> */}
  </Tab>
</Tabs>
    {/* <Sonnet /> */}
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
    {/* <Sonnet /> */}
  </Tab>
</Tabs>



<Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Tab 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Tab 2</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
        <p>That thou hast her it is not all my grief, And yet it may be said I loved her dearly; That she hath thee is of my wailing chief, A loss in love that touches me more nearly. Loving offenders thus I will excuse ye: Thou dost love her, because thou know'st I love her; And for my sake even so doth she abuse me, Suffering my friend for my sake to approve her. If I lose thee, my loss is my love's gain, And losing her, my friend hath found that loss;</p>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <p>That thou hast her it is not all my grief, And yet it may be said I loved her dearly; That she hath thee is of my wailing chief, A loss in love that touches me more nearly. Loving offenders thus I will excuse ye: Thou dost love her, because thou know'st I love her; And for my sake even so doth she abuse me, Suffering my friend for my sake to approve her. If I lose thee, my loss is my love's gain, And losing her, my friend hath found that loss;</p>

        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
        </div>
    )
}
