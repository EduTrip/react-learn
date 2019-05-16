import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import ContentTabs from "./ContentTabs";
import ContentTable from "./ContentTable";
import ContentPagination from "./ContentPagination";
import ContentButtonGroup from "./ContentButtonGroup";

function AppContent() {
    return(
        <Container>
            <Header />
            <ContentTabs />
            <ContentTable />
            <ContentPagination />
            <ContentButtonGroup />
        </Container>
    )
}

export default AppContent;