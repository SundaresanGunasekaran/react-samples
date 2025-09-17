/* eslint-disable */
import React, { Component } from 'react';
import { Globals } from '../globals';

class DynamicLogos extends Component {
    render() {
        if (this.props.content !== 'desc') {
            return (
                <BoldReportViewerComponent
                    id="report-viewer"
                    reportServiceUrl={Globals.ServiceURL}
                    reportPath={'dynamic-logos.rdl'}
                    toolbarSettings={Globals.TOOLBAR_OPTIONS}
                    toolBarItemClick={Globals.EDIT_REPORT}>
                </BoldReportViewerComponent>)
        }
        else {
            return (
                <div id="description">
                    <p>The report uses parameter-driven logic to dynamically update company logos, names, and contact details without requiring changes to modifying the report layout using the <a href="https://help.boldreports.com/enterprise-reporting/designer-guide/report-designer/report-parameters/add/"
                                                                                                target="_blank" rel="noreferrer">Report Parameters</a>.</p>
                    <ul>
                        <li>It supports scalable deployment across multiple <code>companies (A to E)</code>, enhancing reusability and reducing design overhead.</li>
                        <li>Bold Reports <code>image</code> and <code>text</code> report items are bound to parameters, enabling seamless customization of both visuals and data.</li>
                    </ul>
                    <p>
                        More information about the image report item can be found in this <a
                            href="https://help.boldreports.com/enterprise-reporting/designer-guide/report-designer/image-manager/"
                            target="_blank" rel="noreferrer">documentation</a> section.
                    </p>
                </div>
            );
        }
    }
}
export default DynamicLogos;