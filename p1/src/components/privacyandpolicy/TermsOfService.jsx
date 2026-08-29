import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const TermsOfService = () => {
  const openEmailClient = () => {
    window.location.href = 'mailto:varuntyagi0099@gmail.com';
  };

  return (
    <div className="min-h-screen bg-[#C8C2CF] text-black px-6 py-16 md:px-20 lg:px-32 font-[font5]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-[font7] uppercase mb-2">
          Terms of Service
        </h1>
        <p className="text-sm md:text-base text-black/60 mb-10">
          Last Updated: July 12, 2026
        </p>

        <p className="mb-8 leading-relaxed">
          By accessing and using this website, you agree to the following
          Terms of Service.
        </p>

        <Section title="Acceptance of Terms">
          <p>
            Your use of this website constitutes acceptance of these Terms.
            If you do not agree with any part of these Terms, please
            discontinue use of the website.
          </p>
        </Section>

        <Section title="Website Purpose">
          <p>
            This website serves as a personal portfolio showcasing projects,
            skills, experience, and professional information.
          </p>
        </Section>

        <Section title="User Conduct">
          <p className="mb-3">Users agree not to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Submit false or misleading information</li>
            <li>Attempt unauthorized access to website systems</li>
            <li>Distribute malware, spam, or harmful content</li>
            <li>Interfere with the website's operation or security</li>
          </ul>
        </Section>

        <Section title="Intellectual Property">
          <p className="mb-3">
            Unless otherwise stated, all content on this website, including
            text, graphics, designs, projects, and source materials, is the
            property of Varun Tyagi and is protected by applicable
            intellectual property laws.
          </p>
          <p>
            You may view the content for personal and informational purposes
            only.
          </p>
        </Section>

        <Section title="Contact Form Usage">
          <p>
            Information submitted through contact forms must be accurate and
            lawful. Spam, abusive messages, or unauthorized commercial
            solicitations are prohibited.
          </p>
        </Section>

        <Section title="Third-Party Links">
          <p>
            This website may contain links to external websites. We do not
            control or endorse third-party websites and are not responsible
            for their content, policies, or practices.
          </p>
        </Section>

        <Section title="Disclaimer">
          <p>
            The information provided on this website is for general
            informational purposes only. While reasonable efforts are made to
            keep content accurate and up to date, no guarantees are made
            regarding completeness, accuracy, or reliability.
          </p>
        </Section>

        <Section title="Limitation of Liability">
          <p>
            To the maximum extent permitted by law, Varun Tyagi shall not be
            liable for any direct, indirect, incidental, consequential, or
            special damages arising from the use of this website.
          </p>
        </Section>

        <Section title="Modifications">
          <p>
            These Terms of Service may be modified at any time without prior
            notice. Continued use of the website after changes are posted
            constitutes acceptance of the revised Terms.
          </p>
        </Section>

        <Section title="Governing Law">
          <p>
            These Terms shall be governed by and interpreted in accordance
            with the laws applicable in the relevant jurisdiction.
          </p>
        </Section>

         <Section>
                <h2 className="text-2xl font-semibold mb-3">Contact</h2>
      
                <a
                  href="mailto:varuntyagi0099@gmail.com"
                  className="inline-flex cursor-target items-center gap-1 underline hover:text-black/70 cursor-pointer"
                >
                  varuntyagi0099@gmail.com
                  <FiArrowUpRight className="text-xs" />
                </a>
              </Section>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-xl md:text-2xl font-semibold mb-3 uppercase tracking-wide">
      {title}
    </h2>
    <div className="text-sm md:text-base leading-relaxed">{children}</div>
  </div>
);

export default TermsOfService;