// URL and port of your Tally Prime server
const tallyUrl = 'http://localhost:9000/'; // default port is 9000

// XML request to fetch data from Tally Prime
const tallyRequest = `
<ENVELOPE>
                <HEADER>
                <VERSION>1</VERSION>
                <TALLYREQUEST>Export</TALLYREQUEST>
                <TYPE>Data</TYPE>
                <ID>List of Companies</ID>
                </HEADER>
                <BODY>
                <DESC>
                <TDL>
                <TDLMESSAGE>
                <REPORT NAME="List of Companies" ISMODIFY="No" ISFIXED="No" ISINITIALIZE="No" ISOPTION="No" ISINTERNAL="No">
                <FORMS>List of Companies</FORMS>
                </REPORT>
                <FORM NAME="List of Companies" ISMODIFY="No" ISFIXED="No" ISINITIALIZE="No" ISOPTION="No" ISINTERNAL="No">
                <TOPPARTS>List of Companies</TOPPARTS>
                <XMLTAG>"List of Companies"</XMLTAG>
                </FORM>
                <PART NAME="List of Companies" ISMODIFY="No" ISFIXED="No" ISINITIALIZE="No" ISOPTION="No" ISINTERNAL="No">
                <TOPLINES>List of Companies</TOPLINES>
                <REPEAT>List of Companies : Collection of Companies</REPEAT>
                <SCROLLED>Vertical</SCROLLED>
                </PART>
                <LINE NAME="List of Companies" ISMODIFY="No" ISFIXED="No" ISINITIALIZE="No" ISOPTION="No" ISINTERNAL="No">
                <LEFTFIELDS>Name</LEFTFIELDS>
                </LINE>
                <FIELD NAME="Name" ISMODIFY="No" ISFIXED="No" ISINITIALIZE="No" ISOPTION="No" ISINTERNAL="No">
                <SET>$Name</SET>
                <XMLTAG>"NAME"</XMLTAG>
                </FIELD>

                <COLLECTION NAME="Collection of Companies" ISMODIFY="No" ISFIXED="No" ISINITIALIZE="No" ISOPTION="No" ISINTERNAL="No">
                <TYPE>Company</TYPE>
                </COLLECTION>
                </TDLMESSAGE>
                </TDL>
                </DESC>
                </BODY>
                </ENVELOPE>
`;

// Function to fetch data from Tally
async function fetchDataFromTally() {
    console.log("Call*******************")
    try {
        const response = await fetch(tallyUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/xml', // Set content type as XML
            },
            body: tallyRequest, // Send the XML request
        });

        if (response.ok) {
            const data = await response.text(); // Get response as text (XML format)
            console.log('Data from Tally:', data); // Log the response data
            // You can also parse this XML data as needed
        } else {
            console.error('Failed to fetch data from Tally:', response.statusText);
        }
    } catch (error) {
        console.error('Error fetching data from Tally:', error);
    }
}

// Call the function to fetch data
fetchDataFromTally();
