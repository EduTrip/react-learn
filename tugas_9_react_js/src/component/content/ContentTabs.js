import React  from "react";
import { Tabs, Tab } from "react-bootstrap";

function ContentTabs() {
    return (
        <Tabs defaultActiveKey="home" id="uncontrolled-tab">
        <Tab eventKey="home" title="Semua Transfer">
        </Tab>
        <Tab eventKey="ligaInggris" title="Liga Primer Inggris">
        </Tab>
        <Tab eventKey="serieA" title="Serie A">
        </Tab>
        <Tab eventKey="divisiPrimera" title="Divisi Primera">
        </Tab>
        <Tab eventKey="bundesLiga" title="Bundesliga">
        </Tab>
        <Tab eventKey="ligaIndonesia" title="Liga 1 Indonesia">
        </Tab>
      </Tabs>
    );
}

export default ContentTabs;
