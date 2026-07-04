import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — Anaai.consult',
  description: 'How Anaai.consult collects, uses, and protects your personal data.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-sm text-white/50 hover:text-white mb-8 inline-block">← Back</Link>
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-white/50 text-sm mb-10">Last updated: July 2026</p>

        <div className="space-y-8 text-white/80 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. Who we are</h2>
            <p>Anaai.consult is an AI strategy and technology consulting service operated by Anaai Ltd. Our contact email is <a href="mailto:ayenioluwatosinolawale@gmail.com" className="text-white underline">ayenioluwatosinolawale@gmail.com</a>.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. Information we collect</h2>
            <p>When you contact us or book a consultation, we collect:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Your name and email address</li>
              <li>Information you share in messages or calls</li>
              <li>Basic usage data via analytics (pages visited, time on site)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. How we use your information</h2>
            <p>We use your data solely to respond to enquiries, deliver consulting services, and improve our website. We do not sell your data to third parties.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. Third-party services</h2>
            <p>We use Calendly for scheduling. Their privacy policy applies when you book a call. We may use analytics tools to understand site traffic — this data is anonymised and aggregated.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. Data retention</h2>
            <p>We retain contact information for as long as necessary to fulfil our services, and no longer than 3 years after our last interaction.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. Your rights</h2>
            <p>Under UK GDPR, you have the right to access, correct, or delete your personal data at any time. Contact us at <a href="mailto:ayenioluwatosinolawale@gmail.com" className="text-white underline">ayenioluwatosinolawale@gmail.com</a> to exercise these rights.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. Cookies</h2>
            <p>This site uses only essential and analytics cookies. No advertising or tracking cookies are used.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">8. Contact</h2>
            <p>For any privacy-related questions, email <a href="mailto:ayenioluwatosinolawale@gmail.com" className="text-white underline">ayenioluwatosinolawale@gmail.com</a>.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
