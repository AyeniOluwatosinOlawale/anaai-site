import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service — Anaai.consult',
  description: 'Terms and conditions for using Anaai.consult services.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-sm text-white/50 hover:text-white mb-8 inline-block">← Back</Link>
        <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
        <p className="text-white/50 text-sm mb-10">Last updated: July 2026</p>

        <div className="space-y-8 text-white/80 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. Services</h2>
            <p>Anaai.consult provides AI strategy, consulting, and technology implementation services. Specific deliverables, timelines, and fees are agreed in writing before any engagement begins.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. Payments</h2>
            <p>Fees are invoiced as agreed per engagement. Payment is due within 14 days of invoice unless otherwise stated. Late payments may incur interest at 8% above the Bank of England base rate per the Late Payment of Commercial Debts Act 1998.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. Intellectual property</h2>
            <p>Upon full payment, clients own the deliverables produced specifically for them. Anaai.consult retains ownership of all pre-existing tools, frameworks, and methodologies used in delivery.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. Confidentiality</h2>
            <p>Both parties agree to keep confidential any proprietary information shared during an engagement. This obligation survives termination of the agreement by 2 years.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. Limitation of liability</h2>
            <p>Anaai.consult's total liability for any claim shall not exceed the fees paid in the 3 months preceding the claim. We are not liable for indirect, consequential, or loss-of-profit damages.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. Cancellation</h2>
            <p>Either party may terminate an engagement with 14 days written notice. Work completed to date is billable at the agreed rate.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. Governing law</h2>
            <p>These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the English courts.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">8. Contact</h2>
            <p>Questions about these terms? Email <a href="mailto:ayenioluwatosinolawale@gmail.com" className="text-white underline">ayenioluwatosinolawale@gmail.com</a>.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
