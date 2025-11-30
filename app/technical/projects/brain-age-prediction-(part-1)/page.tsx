"use client";
import { useState, useEffect, FormEvent } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Copy, Check } from 'lucide-react';
import { useTheme } from "next-themes";
import CommentSection from "@/components/CommentSection";

export default function BrainAgePredictionPart1() {
  const page_name = "BrainAgePredictionPart1";
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by waiting for client-side mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const copyToClipboard = (text: string, index: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

// Return a loading spinner until mounted
  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center transition-colors duration-300 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-gray-600 border-t-sky-400 rounded-full animate-spin"></div>
          <p className="text-slate-400 text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === "dark" 
        ? "bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-sky-100" 
        : "bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 text-gray-600"
    }`}>
      <div className="w-full max-w-4xl mx-auto space-y-8 sm:space-y-10 md:space-y-12 px-4 py-8">
        <section className="space-y-4 sm:space-y-6">
          <h1 className={`text-5xl sm:text-5xl font-semibold flex justify-center gap-2 px-2 sm:px-0 ${
            theme === "dark" ? "text-white" : "text-gray-800"
          }`}>
            Brain Age Prediction (Part 1)
          </h1>
          
          <div className={`rounded-lg p-4 sm:p-6 space-y-4 shadow-lg ${
            theme === "dark" 
              ? "bg-gray-900/80 backdrop-blur-sm text-sky-100 border border-gray-700/50" 
              : "bg-amber-100/30 text-gray-700 border border-orange-200/50"
          }`}>
            
            {/* Inline Image */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="\projects\brain-age-prediction-1\brainSlices.png"
                alt="Code on screen"
                className="w-full aspect-video object-cover"
              />
              <div className={`p-3 ${
                theme === "dark" ? "bg-slate-800/90" : "bg-amber-50"
              }`}>
                <p className={`text-xs sm:text-sm italic ${
                  theme === "dark" ? "text-slate-200" : "text-gray-800"
                }`}>
                  Clean code architecture leads to maintainable applications
                </p>
              </div>
            </div>

            {/* Text Content */}
            <p className="text-3xl">I. INTRODUCTION</p>
            <p className="text-base text-justify">The biological age of the human brain is an important biomarker in inspecting and
maintaining the health of an individual. The brain age provides insights into an individual’s brain health due to genetics, environment, and lifestyle. The application
of emerging state-of-the-art machine learning and deep learning technologies in the medical imaging fields may lead to faster and more precise solutions to complex, time-heavy problems.
Before delving deeper into the world of brain age and the methods used to predict it, let us look inwards into ourself and understand more about the brain.  </p>
            <br />
            <p className="text-2xl">What is the brain?</p>
            <p className="text-base text-justify">
              The brain, an organ in the human body which mainly constitutes of fat, proteins,
water, carbohydrates, and salts is one of the most vital organs of the human body.
It is the control center for the nervous system and the complex organ helps control
various processes of the body such as thoughts, memory, movement, and emotions.
mIt has billions of nerve cells known as neurons, that through
electrical impulses and chemical signals communicate with each other and transmit
information. The neural tissue can be separated into two categories, the Grey
Matter (GM) and the White Matter (WM). Since the brain is made of just soft tissues, it is protected inside the skull by
a fluid which exists in the subarachnoid space known as the cerebrospinal fluid
(CSF).
<br />
<br />
The grey matter, white matter, and cerebrospinal fluid all go through changes as
humans age. The volume of white matter might decrease with age due to the loss of
myelinated axons and as a result, several neurons lose connection and/or changes in
the white matter tracts. Similarly, the cerebral cortex which houses the grey matter
gradually thins with aging, known as cortical thinning. Contrary to both white
matter and grey matter, the cerebrospinal fluid undergoes an increase in volume
with age due to the decrease in the volume of other brain matters. Since changes in
the white matter, grey matter, and cerebrospinal fluid can be observed in cases of
some neuro-degenerative disorders like Alzheimer’s disease and dementia, finding
the age of the brain could be used as a biomarker for neurodegenerative disorders
            </p>
            <p className="text-2xl">What exactly is the brain age?</p>
            <p className="text-base text-justify">
              You may be wondering what exactly I  mean by 'Brain Age' and how it differs from the normal 'Age' of a person.
              Brain age is the quantitative estimate of the biological age of a brain based on
several predictive factors. If the chronological age of an individual is the number
of years that they have lived, the biological age is the age that the brain appears
to be based on its structure, function, and overall health.
<br />
<br />
The prediction of brain age
has gained traction as an important bio-marker in the process of tracking the
overall brain health and monitoring the possible degeneracy of the brain due to
neurodegenerative disorders. The advancements of neuroimaging technologies such
as Magnetic Resonance Imaging (MRI), functional Magnetic Resonance Imaging
(fMRI) and several others have enabled researchers to visualize and quantify the
intricacies in the brain through non-invasive procedures and monitor the activity
of the brain. The brain age that is predicted from the neuro-images of the brain
can be then compared to the chronological age of the individual to gauge the level
of cognitive health of the individual.
            </p>
            <p className="text-3xl">II. METHODOLOGY</p>
            <p className="text-2xl">Dataset</p>
            <p className="text-base text-justify">
              To any machine learning projects, one of the most important components is to have a clean and processed dataset.
              In this section, a brief description of the datasets used in this project is provided. 
              The Information eXtraction from Images dataset or IXI dataset is a publicly available, open-sourced multimodal neuroimaging dataset containing 600 MR images of normal and healthy individuals. The obtained dataset was collected as a part of the IXI project conducted by the Brain Development and Aging Group at the Institute of Psychiatry, King’s College London.
              For this project, we make use of the three-dimensional T1-Weighted brain MRI data from the IXI dataset.
            </p>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="\projects\brain-age-prediction-1\slices.jpg"
                alt="Code on screen"
                className="w-full aspect-video object-fill"
              />
              <div className={`p-3 ${
                theme === "dark" ? "bg-slate-800/90" : "bg-amber-50"
              }`}>
                <p className={`text-xs sm:text-sm italic ${
                  theme === "dark" ? "text-slate-200" : "text-gray-800"
                }`}>
                  The views of the different planes of the MRI image consisting of the sagittal view, axial view and coronal view.
                  The different colours indicate the different hemispheres of the brain.
                </p>
              </div>
            </div>
            
            <p className="text-3xl">III. RESULTS</p>
            <p className="text-3xl">IV. REFERENCES</p>

            {/* Inline Code Block */}
            <div className="relative">
              <div className="rounded-lg overflow-hidden border bg-slate-950 border-slate-700 shadow-md">
                <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-slate-900">
                  <span className="text-xs sm:text-sm font-mono text-slate-400">
                    api/hello.js
                  </span>
                  <button
                    onClick={() => copyToClipboard('export default function handler(req, res) {\n  res.status(200).json({ message: "Hello World" });\n}', 'combined')}
                    className="transition text-slate-400 hover:text-slate-200"
                  >
                    {copiedIndex === 'combined' ? (
                      <>
                        <Check size={16} className="hidden sm:block" />
                        <Check size={14} className="sm:hidden" />
                      </>
                    ) : (
                      <>
                        <Copy size={16} className="hidden sm:block" />
                        <Copy size={14} className="sm:hidden" />
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-3 sm:p-4 overflow-x-auto">
                  <code className="text-xs sm:text-sm text-slate-300 font-mono">
                    {`export default function handler(req, res) {
  res.status(200).json({ message: "Hello World" });
}`}
                  </code>
                </pre>
              </div>
            </div>
            
            <p className={`text-sm sm:text-base leading-relaxed ${
              theme === "dark" ? "text-slate-300" : "text-gray-600"
            }`}>
              This creates a serverless API endpoint that responds with JSON.
            </p>
          </div>
        </section>
        
        {/* Render Comment Section */}
        <CommentSection pageName={page_name} />
      </div>
    </div>
  );
}