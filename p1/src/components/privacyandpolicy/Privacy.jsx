import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const Privacy = () => {
  const openCloudflarePolicy = () => {
    window.open(
      'https://www.cloudflare.com/privacypolicy/',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="min-h-screen bg-[#C8C2CF] text-black px-6 py-16 md:px-20 lg:px-32 font-[font5]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-[font7] uppercase mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm md:text-base text-black/60 mb-10">
          Last Updated: July 12, 2026
        </p>

        <p className="mb-8 leading-relaxed">
          Welcome to Varun Tyagi's portfolio website. Your privacy is important
          to us. This Privacy Policy explains how information may be
          collected, used, and protected when you visit this website.
        </p>

        <Section title="Information We Collect">
          <p className="mb-3">
            When you interact with this website, we may collect:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Name</li>
            <li>Email address</li>
            <li>Message content submitted through contact forms</li>
            <li>
              Technical information such as IP address, browser type, device
              information, and usage data
            </li>
          </ul>
        </Section>

        <Section title="How We Use Your Information">
          <p className="mb-3">
            Information collected through this website may be used to:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Respond to inquiries and messages</li>
            <li>
              Communicate regarding potential opportunities or collaborations
            </li>
            <li>Improve website functionality and user experience</li>
            <li>Protect the website against spam, abuse, and unauthorized access</li>
          </ul>
        </Section>
        <Section title="Cloudflare Turnstile">
          <p>
            This website uses Cloudflare Turnstile to protect forms from spam and
            automated abuse. Cloudflare may collect technical and behavioral
            information necessary to verify that a visitor is a legitimate user. For
            more information, please refer to{" "}
            <span
              onClick={openCloudflarePolicy}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && openCloudflarePolicy()}
              className="inline-flex items-center gap-1 underline hover:text-black/70 cursor-pointer"
            >
              Cloudflare's privacy practices
              <FiArrowUpRight className="text-xs" />
            </span>
            .
          </p>
        </Section>

        <Section title="Third-Party Services">
          <p className="mb-3">
            This website may use third-party services, including but not
            limited to:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Cloudflare</li>
            <li>Hosting providers</li>
            <li>Analytics tools</li>
            <li>Email delivery services</li>
          </ul>
          <p className="mt-3">
            These services may process certain information in accordance with
            their own privacy policies.
          </p>
        </Section>

        <Section title="Data Security">
          <p>
            Reasonable measures are taken to protect submitted information.
            However, no method of internet transmission or electronic storage
            can be guaranteed to be completely secure.
          </p>
        </Section>

        <Section title="External Links">
          <p>
            This website may contain links to external websites. We are not
            responsible for the privacy practices or content of third-party
            websites.
          </p>
        </Section>

        <Section title="Your Rights">
          <p className="mb-3">
            Depending on your jurisdiction, you may have the right to:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Request access to your personal information</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Object to certain processing activities</li>
          </ul>
        </Section>

        <Section title="Changes to This Policy">
          <p>
            This Privacy Policy may be updated periodically. Any changes will
            be posted on this page with an updated revision date.
          </p>
        </Section>

        <Section>
          <h2 className="text-2xl font-semibold mb-3">Contact</h2>

          <a
            href="mailto:varuntyagi0099@gmail.com"
            className="cursor-target  inline-flex items-center gap-1 underline hover:text-black/70 cursor-pointer"
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

export default Privacy;


