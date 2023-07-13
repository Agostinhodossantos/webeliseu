import {Document, Page, pdfjs} from "react-pdf";
import {useState} from "react";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';



export default function MyPdfView() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
        <div className="section-full-screen">
            {/*<Document file={require("assets/ganhar.pdf")} onLoadSuccess={onDocumentLoadSuccess}>*/}
            {/*    <Page pageNumber={pageNumber} />*/}
            {/*</Document>*/}
            {/*<p>*/}
            {/*    Page {pageNumber} of {numPages}*/}
            {/*</p>*/}
            <object data={require("assets/ganhar.pdf")} type="application/pdf" width="100%" height="500px">
                <p>Unable to display PDF file. <a href={require("assets/ganhar.pdf")}>Download</a> instead.</p>
            </object>
        </div>
    );
}