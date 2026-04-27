import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, GitBranch, Shield, AlertCircle, Layers, FileCheck, Grid3x3 } from 'lucide-react';

export default function GoldenThreadProduct() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Header */}
      <header className="border-b border-neutral-300 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className="text-2xl font-serif font-semibold tracking-tight text-black hover:text-neutral-700 transition-colors">
            AxiomOrdo
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-neutral-950 text-white py-24 lg:py-32 overflow-hidden">
        {/* Grid background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div {...fadeIn}>
            <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs uppercase tracking-wider mb-6">
              Construction Compliance
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif font-medium tracking-tight leading-[1.1] mb-8 max-w-4xl">
              Structured, reviewable evidence paths from regulatory and technical source material.
            </h1>
            <p className="text-xl text-neutral-300 leading-relaxed max-w-3xl">
              Golden Thread prepares deterministic candidate packets for construction product compliance, fire safety assurance, and regulatory evidence review.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Golden Thread Does */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm uppercase tracking-wider text-neutral-500 mb-8">Positioned As</h2>
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-3xl font-serif mb-6 leading-tight">
                Evidence organisation, contradiction detection, and trace preparation.
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Golden Thread is designed to support review, assurance, and evidence control for construction product regulatory compliance. It organises technical and regulatory source material into structured, traceable evidence paths.
              </p>
            </div>
            <div className="border-l-2 border-blue-500 pl-8">
              <p className="text-neutral-700 leading-relaxed mb-4">
                Golden Thread provides:
              </p>
              <ul className="space-y-3 text-neutral-600">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span>Evidence organisation and normalisation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span>Contradiction detection across source documents</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span>Trace preparation for audit and review</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span>Deterministic candidate packet generation</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-6">
            <div className="flex gap-4">
              <AlertCircle className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Scope Boundary</h4>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Golden Thread is positioned as downstream support and evaluation preparation. It is not presented as direct runtime approval logic unless specifically implemented and evidenced. The system distinguishes between review support surfaces and runtime admission paths.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Core Capabilities */}
      <section className="bg-neutral-50 border-y border-neutral-200 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-wider text-neutral-500 mb-8">Core Capabilities</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white border border-neutral-200 p-8 hover:border-blue-500 transition-colors">
                <Layers className="w-10 h-10 mb-6 text-blue-600" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold mb-3">Evidence Organisation</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Structured ingestion and normalisation of regulatory documents, technical standards, test reports, and certification records.
                </p>
              </div>

              <div className="bg-white border border-neutral-200 p-8 hover:border-blue-500 transition-colors">
                <GitBranch className="w-10 h-10 mb-6 text-blue-600" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold mb-3">Contradiction Detection</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Deterministic identification of conflicting claims, inconsistent evidence states, and requirement mismatches across source material.
                </p>
              </div>

              <div className="bg-white border border-neutral-200 p-8 hover:border-blue-500 transition-colors">
                <Shield className="w-10 h-10 mb-6 text-blue-600" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold mb-3">Trace Preparation</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Complete audit trail linking regulatory obligations to source evidence, with explicit insufficiency markers where evidence is incomplete.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Output Format */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm uppercase tracking-wider text-neutral-500 mb-8">Review-Ready Outputs</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="border-2 border-neutral-900 p-10 bg-white">
              <FileCheck className="w-10 h-10 mb-6 text-neutral-900" strokeWidth={1.5} />
              <h3 className="text-2xl font-serif mb-4">Deterministic Candidate Packets</h3>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Structured evidence packets prepared for human validation. Each packet includes:
              </p>
              <ul className="space-y-2 text-neutral-600">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2 flex-shrink-0" />
                  <span>Obligation-to-evidence mapping</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2 flex-shrink-0" />
                  <span>Identified contradictions and conflicts</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2 flex-shrink-0" />
                  <span>Evidence sufficiency classification</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2 flex-shrink-0" />
                  <span>Complete source lineage</span>
                </li>
              </ul>
            </div>

            <div className="border border-neutral-200 p-10 bg-neutral-50">
              <Grid3x3 className="w-10 h-10 mb-6 text-neutral-700" strokeWidth={1.5} />
              <h3 className="text-2xl font-serif mb-4">Sufficiency States</h3>
              <div className="space-y-4">
                <div className="bg-white border-l-4 border-green-600 p-4">
                  <div className="font-semibold mb-1">Sufficient for Formal Review</div>
                  <p className="text-sm text-neutral-600">Evidence complete and traceable to all obligations</p>
                </div>
                <div className="bg-white border-l-4 border-amber-500 p-4">
                  <div className="font-semibold mb-1">Partially Sufficient</div>
                  <p className="text-sm text-neutral-600">Some obligations met; gaps explicitly identified</p>
                </div>
                <div className="bg-white border-l-4 border-red-600 p-4">
                  <div className="font-semibold mb-1">Insufficient</div>
                  <p className="text-sm text-neutral-600">Critical evidence missing or contradictory</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Audience */}
      <section className="bg-neutral-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-wider text-neutral-400 mb-8">Built For</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'Construction Product Manufacturers',
                'Fire Engineers',
                'Regulatory Consultants',
                'Assurance Reviewers'
              ].map((audience, i) => (
                <div key={i} className="border border-neutral-700 p-6 bg-neutral-800/50">
                  <div className="text-lg font-medium">{audience}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="max-w-4xl">
            <p className="text-sm text-neutral-600 leading-relaxed mb-8">
              Golden Thread systems are designed to support evidence review, assurance preparation, and regulatory documentation. They do not replace independent fire safety assessment, structural engineering validation, or regulatory approval processes.
            </p>
            <Link to="/" className="text-sm text-neutral-900 hover:text-neutral-600 transition-colors">
              ← Back to AxiomOrdo
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}