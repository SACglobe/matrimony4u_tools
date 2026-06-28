import React from 'react';
import { regionalGuides } from '../../../lib/data/regionalGuides';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export async function generateStaticParams() {
  return regionalGuides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const guide = regionalGuides.find((g) => g.slug === slug);
  if (!guide) return {};

  return {
    title: `Marriage Registration in ${guide.state} | Complete Guide`,
    description: guide.description,
  };
}

export default async function RegionalRegistrationPage({ params }) {
  const { slug } = await params;
  const guide = regionalGuides.find((g) => g.slug === slug);

  if (!guide) {
    notFound();
  }

  // Generate HowTo Schema
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `How to Register a Marriage in ${guide.state}`,
    "description": guide.description,
    "step": guide.steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.title,
      "text": step.desc,
    }))
  };

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ name: `Registration in ${guide.state}` }]} />
      {/* Inject Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <header className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-900 mb-4">
          Marriage Registration in {guide.state}
        </h1>
        <h2 className="text-2xl text-primary-700 mb-6 font-tamil">
          {guide.stateTamil} திருமணப் பதிவு வழிகாட்டி
        </h2>
        <p className="text-lg text-neutral-700">{guide.description}</p>
        <p className="text-lg text-neutral-600 mt-2 font-tamil">{guide.descriptionTamil}</p>
      </header>

      <section className="bg-white shadow-md rounded-xl p-8 mb-10 border border-neutral-200">
        <h3 className="text-2xl font-semibold text-neutral-800 mb-4 border-b pb-2">Official Portal Info</h3>
        <p className="mb-2"><strong>Portal:</strong> {guide.portalName}</p>
        <p><strong>Website:</strong> <a href={guide.portalUrl} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">{guide.portalUrl}</a></p>
      </section>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <section className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
          <h3 className="text-2xl font-semibold text-neutral-800 mb-4">Fees & Deadlines</h3>
          <ul className="space-y-3 text-neutral-700">
            <li><strong>Hindu Marriage Act:</strong> {guide.fees.hinduMarriageAct}</li>
            <li><strong>Special Marriage Act:</strong> {guide.fees.specialMarriageAct}</li>
            <li><strong>Late Fee:</strong> {guide.fees.lateFee}</li>
          </ul>
          <div className="mt-6">
            <h4 className="font-semibold text-neutral-800">Deadlines:</h4>
            <p className="mt-1 text-sm">{guide.deadlines.english}</p>
            <p className="mt-1 text-sm text-neutral-600 font-tamil">{guide.deadlines.tamil}</p>
          </div>
        </section>

        <section className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
          <h3 className="text-2xl font-semibold text-neutral-800 mb-4">Witness Requirements</h3>
          <p className="text-neutral-700">{guide.witnessRequirements.english}</p>
          <p className="mt-4 text-neutral-600 font-tamil">{guide.witnessRequirements.tamil}</p>
        </section>
      </div>

      <section className="mb-12">
        <h3 className="text-3xl font-display font-bold text-primary-900 mb-6">Mandatory Documents / கட்டாய ஆவணங்கள்</h3>
        <ul className="space-y-4">
          {guide.mandatoryDocuments.map((doc, idx) => (
            <li key={idx} className="flex gap-4 p-4 bg-white rounded-lg shadow-sm border border-neutral-100">
              <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 font-bold">
                {idx + 1}
              </span>
              <div>
                <p className="text-neutral-800 font-medium">{doc.english}</p>
                <p className="text-neutral-600 mt-1 font-tamil">{doc.tamil}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="text-3xl font-display font-bold text-primary-900 mb-6">Step-by-Step Registration Process</h3>
        <div className="space-y-8">
          {guide.steps.map((step, idx) => (
            <div key={idx} className="relative pl-8 md:pl-0">
              <div className="md:hidden absolute left-0 top-1 w-6 h-6 rounded-full bg-primary-500 text-white flex items-center justify-center text-sm font-bold">
                {idx + 1}
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200 md:ml-12 relative">
                <div className="hidden md:flex absolute -left-12 top-6 w-8 h-8 rounded-full bg-primary-500 text-white items-center justify-center font-bold shadow-md">
                  {idx + 1}
                </div>
                <h4 className="text-xl font-bold text-neutral-800 mb-2">{step.title}</h4>
                <p className="text-neutral-700 mb-4">{step.desc}</p>
                
                <hr className="border-neutral-100 my-4" />
                
                <h4 className="text-lg font-bold text-neutral-700 mb-2 font-tamil">{step.titleTamil}</h4>
                <p className="text-neutral-600 font-tamil">{step.descTamil}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      </main>
      <Footer />
    </>
  );
}
