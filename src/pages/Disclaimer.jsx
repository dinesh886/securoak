import React from "react";
import "./Disclaimer.css"; // Assuming you will create this CSS file for styling

const Disclaimer = () => {
    return (
        <div className="disclaimer-container" id="disclaimer">
            <h2>Disclaimer</h2>
            <p>Last updated: [Date:]</p>

            <h4>1. Introduction</h4>
            <p>
                The information provided by [Securoak] (the “Site”) is for general informational purposes only. 
                All information on the Site is provided in good faith, however we make no representation or 
                warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, 
                availability or completeness of any information on the Site.
            </p>

            <h4>2. External Links</h4>
            <p>
                Our Site may contain links to external websites that are not provided or maintained by 
                [Securoak]. We do not guarantee the accuracy, relevance, timeliness, or completeness of any 
                information on these external websites.
            </p>

            <h4>3. Professional Advice</h4>
            <p>
                The Site cannot and does not contain [specific type of advice, e.g., legal, medical, financial] advice. 
                The [legal, medical, financial] information is provided for general informational and educational 
                purposes only and is not a substitute for professional advice.
            </p>

            <h4>4. Limitation of Liability</h4>
            <p>
                In no event shall we be liable for any loss or damage of any kind incurred as a result of 
                the use of the Site or reliance on any information provided on the Site. Your use of the 
                Site and your reliance on any information on the Site is solely at your own risk.
            </p>

            <h4>5. Changes to This Disclaimer</h4>
            <p>
                We may update our Disclaimer from time to time. We will notify you of any changes by posting 
                the new Disclaimer on this page. You are advised to review this Disclaimer periodically for any changes.
            </p>

            <h4>6. Contact Us</h4>
            <p>If you have any questions about this Disclaimer, please contact us:</p>
            <p>Email: []</p>
            <p>Phone: []</p>
        </div>
    );
};

export default Disclaimer;
