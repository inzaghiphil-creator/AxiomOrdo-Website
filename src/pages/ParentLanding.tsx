import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, FileCheck, GitBranch, Lock, Shield, FileText, Database } from 'lucide-react';

export default function ParentLanding() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900">
      {/* Header */}
      <header className="border-b border-neutral-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="text-2xl font-serif font-semibold tracking-tight text-black">
            AxiomOrdo
          </div>
          <nav className="flex gap-8 text-sm">
            <a href="#model" className="text-neutral-600 hover:text-neutral-900 transition-colors">Model</a>
            <a href="#products" className="text-neutral-600 hover:text-neutral-900 transition-colors">Products</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <motion.div {...fadeIn} className="max-w-4xl">
          <h1 className="text-5xl lg:text-7xl font-serif font-medium tracking-tight leading-[1.1] mb-8">
            Deterministic regulatory assurance for evidence-heavy compliance.
          </h1>
          <p className="text-xl lg:text-2xl text-neutral-600 mb-12 leading-relaxed max-w-3xl">
            AxiomOrdo turns regulatory evidence into deterministic, traceable assurance outputs — not summaries, opinions, or black-box AI guesses.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/pfas"
              className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors group"
            >
              Explore PFAS
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/golden-thread"
              className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-300 hover:border-neutral-900 hover:bg-neutral-50 transition-colors group"
            >
              Explore Golden Thread
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* The Problem */}
      <section className="bg-white border-y border-neutral-200 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-wider text-neutral-500 mb-4">The Problem</h2>
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              <div>
                <h3 className="text-2xl font-serif mb-3">Compliance evidence is fragmented.</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Regulatory obligations span multiple documents, jurisdictions, and technical standards. Evidence lives in disconnected systems.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-serif mb-3">AI summaries are hard to prove.</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Probabilistic models generate plausible-sounding outputs, but the reasoning path is opaque and non-reproducible.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-serif mb-3">Manual review is slow, inconsistent, and difficult to defend.</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Human interpretation varies. Audit trails are incomplete. The same evidence can produce different conclusions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The AxiomOrdo Model */}
      <section id="model" className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm uppercase tracking-wider text-neutral-500 mb-8">The AxiomOrdo Model</h2>
          <div className="mb-16">
            <h3 className="text-4xl font-serif mb-6 max-w-3xl leading-tight">
              Contract-governed evaluation. Evidence-bound outputs. Traceable by design.
            </h3>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-5 gap-6"
          >
            {[
              { icon: Database, label: 'Intake', desc: 'Structured ingestion of regulatory source material' },
              { icon: FileText, label: 'Normalisation', desc: 'Evidence mapped to canonical obligation schema' },
              { icon: GitBranch, label: 'Rule/Contract Evaluation', desc: 'Deterministic logic applied to evidence state' },
              { icon: Shield, label: 'Trace Chain', desc: 'Every output linked to source evidence' },
              { icon: FileCheck, label: 'Review-Ready Output', desc: 'Structured packets prepared for human validation' }
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="border border-neutral-200 p-6 bg-white hover:border-neutral-400 transition-colors"
              >
                <step.icon className="w-8 h-8 mb-4 text-neutral-700" strokeWidth={1.5} />
                <h4 className="font-semibold mb-2">{step.label}</h4>
                <p className="text-sm text-neutral-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Why This Is Different */}
      <section className="bg-neutral-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-wider text-neutral-400 mb-8">Why This Is Different</h2>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <Lock className="w-10 h-10 mb-6 text-amber-500" strokeWidth={1.5} />
                <h3 className="text-3xl font-serif mb-4">Deterministic assurance</h3>
                <p className="text-neutral-300 leading-relaxed mb-6">
                  Same input → same output. No hidden reasoning path. Evidence mapped to obligations.
                </p>
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    <span>Reproducible evaluation logic</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    <span>Contract-governed rule execution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    <span>Evidence-bound outputs only</span>
                  </li>
                </ul>
              </div>
              <div>
                <Shield className="w-10 h-10 mb-6 text-amber-500" strokeWidth={1.5} />
                <h3 className="text-3xl font-serif mb-4">Fail-closed by design</h3>
                <p className="text-neutral-300 leading-relaxed mb-6">
                  Outputs are blocked when evidence is insufficient. No probabilistic guesses. Audit-ready trace chains.
                </p>
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    <span>Explicit insufficiency detection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    <span>Traceable evidence lineage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    <span>Review-ready documentation</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Gateways */}
      <section id="products" className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm uppercase tracking-wider text-neutral-500 mb-8">Products</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Link
              to="/pfas"
              className="group border border-neutral-200 p-10 bg-white hover:border-neutral-900 transition-all hover:shadow-lg"
            >
              <h3 className="text-3xl font-serif mb-4 group-hover:text-neutral-700 transition-colors">PFAS</h3>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Evidence screening, supplier response control, and market-access risk mapping from bounded source material.
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                Explore PFAS
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            <Link
              to="/golden-thread"
              className="group border border-neutral-200 p-10 bg-white hover:border-neutral-900 transition-all hover:shadow-lg"
            >
              <h3 className="text-3xl font-serif mb-4 group-hover:text-neutral-700 transition-colors">Golden Thread</h3>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Structured, reviewable evidence paths from regulatory and technical source material for construction compliance.
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                Explore Golden Thread
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>

          <div className="mt-12 p-8 border border-neutral-200 bg-neutral-50">
            <h4 className="text-sm uppercase tracking-wider text-neutral-500 mb-4">Future Modules</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-neutral-600">
              <div>ETS</div>
              <div>FuelEU</div>
              <div>Compliance Cockpit</div>
              <div>Workbench/Intake</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Governance Footer */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="max-w-4xl">
            <p className="text-sm text-neutral-600 leading-relaxed mb-8">
              AxiomOrdo systems are designed to support review, assurance, and evidence control. They do not replace legal advice or regulator determination.
            </p>
            <div className="text-xs text-neutral-500">
              © 2024 AxiomOrdo.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}