import React from "react";
import "./TermnsandConditions.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const TermsAndConditions = () => {
    return (
        <>
        <div className="terms-container" id="terms">
            <Header identityPage={true} />

            
            <h2>Terms and Conditions</h2>
            <p>Last updated: [Date:]</p>
            <p>
                Welcome to [Securoak]! These Terms and Conditions outline the rules and regulations for the use of our website, located at [ Website URL].
            </p>
            <p>
                By accessing this website, you agree to accept these Terms and Conditions in full. If you disagree with any part of these Terms, you must not use our website.
            </p>

            <h4>1. Definitions</h4>
            <p>
                “Site” refers to the website owned and operated by [Securoak].<br />
                “User,” “you,” and “your” refers to any individual or entity that accesses the Site.
            </p>

            <h4>2. Intellectual Property Rights</h4>
            <p>
                Unless otherwise stated, [Securoak] and/or its licensors own the intellectual property rights for all material on the Site. All intellectual property rights are reserved. You may access this from the Site for your own personal use, subject to restrictions set in these terms and conditions.
            </p>

            <h4>3. User Responsibilities</h4>
            <p>You must not:</p>
            <ul>
                <li>Republish material from the Site.</li>
                <li>Sell, rent, or sub-license material from the Site.</li>
                <li>Reproduce, duplicate, or copy material from the Site.</li>
                <li>Redistribute content from the Site.</li>
            </ul>

            <h4>4. Disclaimer of Warranties</h4>
            <p>
                The information provided on this Site is for general informational purposes only. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the Site or the information, products, services, or related graphics contained on the Site for any purpose.
            </p>

            <h4>5. Limitation of Liability</h4>
            <p>
                In no event will [Securoak], nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of (or inability to access or use) the Site; (ii) any conduct or content of any third party on the Site; (iii) any content obtained from the Site; and (iv) unauthorized access, use, or alteration of your transmissions or content.
            </p>

            <h4>6. Indemnification</h4>
            <p>
                You agree to defend, indemnify, and hold harmless [Securoak] and its affiliates, and their respective directors, officers, employees, and agents from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees) arising from your use of and access to the Site.
            </p>

            <h4>7. Modifications to the Terms and Conditions</h4>
            <p>
                We may update our Terms and Conditions from time to time. We will notify you of any changes by posting the new Terms and Conditions on this page. You are advised to review these Terms periodically for any changes.
            </p>

            <h4>8. Governing Law</h4>
            <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law principles.
            </p>

            <h4>9. Contact Us</h4>
            <p>If you have any questions about these Terms and Conditions, please contact us:</p>
            <p>
                Email: [Your Email Address]<br />
                Phone: [Your Phone Number]
            </p>
            
        </div>
        <Footer />
        </>
    );
};

export default TermsAndConditions;
