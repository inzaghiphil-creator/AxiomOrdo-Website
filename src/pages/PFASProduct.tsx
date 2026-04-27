import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileSearch, Users, AlertTriangle, CheckCircle, XCircle, HelpCircle, Package, FileText, Map } from 'lucide-react';

export default function PFASProduct() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Header */}
      <header className="border-b border-neutral-200 bg-white sticky top-0 z-50">
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
      <section className="bg-gradient-to-br from-emerald-950 via-neutral-900 to-neutral-950 text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn}>
            <div className="inline-block px-3 py-1 bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs uppercase tracking-wider mb-6">
              Supply Chain Compliance
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif font-medium tracking-tight leading-[1.1] mb-8 max-w-4xl">
              PFAS evidence screening, supplier response control, and market-access risk mapping.
            </h1>
            <p className="text-xl text-neutral-300 leading-relaxed max-w-3xl">
              Deterministic PFAS evidence-state classification, due-diligence enforcement, and market-access risk mapping from bounded source material.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What PFAS Does */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm uppercase tracking-wider text-neutral-500 mb-8">Governed App Surface</h2>
          <p className="text-2xl font-serif text-neutral-700 mb-12 max-w-4xl leading-relaxed">
            PFAS is evidenced as a governed application surface for deterministic PFAS evidence-state classification, due-diligence enforcement, and market-access risk mapping.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="border border-neutral-200 p-8 hover:border-emerald-800 transition-colors">
              <FileSearch className="w-10 h-10 mb-6 text-emerald-800" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold mb-3">Document Intake</h3>
              <p className="text-neutral-600 leading-relaxed">
                Structured ingestion of supplier declarations, test reports, material safety data sheets, and regulatory source documents.
              </p>
            </div>

            <div className="border border-neutral-200 p-8 hover:border-emerald-800 transition-colors">
              <Package className="w-10 h-10 mb-6 text-emerald-800" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold mb-3">PFAS Evidence Classification</h3>
              <p className="text-neutral-600 leading-relaxed">
                Deterministic classification of product evidence state: confirmed, unknown, or not detected. No concentration inference without explicit documentary evidence.
              </p>
            </div>

            <div className="border border-neutral-200 p-8 hover:border-emerald-800 transition-colors">
              <Users className="w-10 h-10 mb-6 text-emerald-800" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold mb-3">Supplier Response Tracking</h3>
              <p className="text-neutral-600 leading-relaxed">
                Controlled workflow for supplier evidence submission, validation status, and due-diligence enforcement.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Decision Register */}
      <section className="bg-neutral-50 border-y border-neutral-200 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-wider text-neutral-500 mb-8">Product Decision Register</h2>
            <div className="grid lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-white border-l-4 border-emerald-600 p-6">
                <CheckCircle className="w-8 h-8 mb-4 text-emerald-600" strokeWidth={1.5} />
                <h3 className="font-semibold mb-2">Confirmed</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Documentary evidence explicitly confirms PFAS presence and concentration thresholds where applicable.
                </p>
              </div>

              <div className="bg-white border-l-4 border-amber-500 p-6">
                <HelpCircle className="w-8 h-8 mb-4 text-amber-600" strokeWidth={1.5} />
                <h3 className="font-semibold mb-2">Unknown</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Insufficient evidence to make a determination. Supplier response required or evidence collection in progress.
                </p>
              </div>

              <div className="bg-white border-l-4 border-neutral-400 p-6">
                <XCircle className="w-8 h-8 mb-4 text-neutral-600" strokeWidth={1.5} />
                <h3 className="font-semibold mb-2">Not Detected</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Documentary evidence explicitly confirms PFAS absence below regulatory thresholds.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-6">
              <div className="flex gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h4 className="font-semibold text-amber-900 mb-2">Evidence Discipline</h4>
                  <p className="text-sm text-amber-800 leading-relaxed">
                    Concentration thresholds are never inferred without explicit documentary evidence. The PFAS application does not make legal determinations or regulatory approval decisions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm uppercase tracking-wider text-neutral-500 mb-8">Key Features</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="border border-neutral-200 p-8">
              <FileText className="w-10 h-10 mb-6 text-neutral-700" strokeWidth={1.5} />
              <h3 className="text-2xl font-serif mb-4">Challenge Pack</h3>
              <p className="text-neutral-600 leading-relaxed">
                Structured evidence packets prepared for regulatory review, audit, or market surveillance response. Traceable lineage from source documents to classification decision.
              </p>
            </div>

            <div className="border border-neutral-200 p-8">
              <Map className="w-10 h-10 mb-6 text-neutral-700" strokeWidth={1.5} />
              <h3 className="text-2xl font-serif mb-4">Sales-Ban / Market-Access Review Support</h3>
              <p className="text-neutral-600 leading-relaxed">
                Risk mapping for jurisdiction-specific sales restrictions. Evidence state cross-referenced with market-access requirements. Does not constitute legal clearance.
              </p>
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
                'Manufacturers',
                'Importers',
                'Product Compliance Teams',
                'Supply Chain Managers'
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
              PFAS systems are designed to support evidence review, supplier due diligence, and market-access risk assessment. They do not replace legal advice, regulatory determination, or independent testing.
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