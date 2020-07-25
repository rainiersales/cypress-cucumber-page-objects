class ErrorPage {

    TEXT_BODY = "<html>" +
        "<head>" +
        "<title>404 Error: File not found :-)</title>" +
        "</head>" +
        "<body>" +
        "<h1>404 Error: File not found :-(</h1>" +
        "<p>Through the magic of digital telecommunications, your wrong credential is now winging its way to the maintainer.<br>" +
        "<br><i> I thank you. I love you too.</i></p>" +
        "<hr><address>Apache (Linux) Server</address></body>" +
        "</html>";

    verifyStatusPage(status) {
        cy.request({
            method: 'POST',
            url: 'http://uitest.duodecadits.com/error',
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(status)
            expect(response.body).to.eq(this.TEXT_BODY.toString())
            expect(response.body).to.have.length(328)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
        })
    }
}

export default ErrorPage;
