"use client";
import { useState, useEffect, FormEvent } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Copy, Check } from 'lucide-react';
import { useTheme } from "next-themes";
import CommentSection from "@/components/CommentSection";
import { BlockMath, InlineMath } from "react-katex";


export default function BrainAgePredictionPart1() {
  const page_name = "BrainAgePredictionPart1";
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [katexLoaded, setKatexLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [dataLoaded, setDataLoaded] = useState<'Exists' | 'NotExists'>('Exists');
  

  // Prevent hydration mismatch by waiting for client-side mount
  useEffect(() => {
    setMounted(true);
    setDataLoaded('Exists');
    setLoading(false);
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
      {loading ? (
            <div className="text-center py-16"><p className={`text-xl ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>Loading {page_name} ...</p></div>
             //<p className="text-center">Loading {activeTab}...</p>
            ) : dataLoaded === 'NotExists' ? (
            <div className="text-center py-16"><p className={`text-xl ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>No {page_name} yet. Check back soon!</p></div>
             //<p className="text-center">No {activeTab} yet.</p>
            ) :  (
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
            <p className="text-base text-justify">
              Since we are using traditional machine learning algorithms for the brain age prediction, we need to extract relevant features from the three-dimensional MRI images. The features decided upon for this project are volumetric measurements of different internal structures of the brain such as ventricles, cerebellum cortex, hippocampus, cerebrospinal fluid, and much more.
              The feature dataset was created by passing the IXI dataset through the FastSurfer pipeline and extracting a segmented 3D image which is segmented into 94 separate categories. The response from the FastSurfer Pipeline is a volumetric parcellation image and a binary mask image of the skull-stripped brain segmentation. The parcellation image is the 3D image where the voxels are labeled according to the segmentation results. This parcellation image is taken and the volume of each segmented label is computed
              <br />
              <br />
              Two Comma Separated Value (CSV) files were created. One contains all the individual structure volumes and the total intracranial volume computed on the binary mask of the skull-stripped brain image and the sex of the participants from the demographic information file and the other, with the gray matter volume (GMV), white matter volume (WMV) and cerebrospinal fluid volume (CSFV) and total intracranial volume along with the sex and age of the participants. The first dataset consisted of 581 cases each containing 96 features. This dataset can be called the individual segmentation dataset. The second dataset consisted of 581 cases with 5 input features. This dataset can be called the Tissue group dataset.
            </p>
            <br /> 
            <p className="text-2xl">Algorithms</p>
            <p className="text-base text-justify">
              For the first part of the project, we will look into the performance of traditional machine learning algorithms on the brain age prediction task. The algorithms that will be used in this part of the project are <b>Simple Linear Regression</b>,<b> Lasso Regression </b>,<b> Random Forest Regression </b>,<b> Gradient Boosting Regression </b>,<b> Elastic Regression </b>, and <b> Kernel Ridge Regression </b>
              <br />
              <br />
              All the algorithms were fine-tuned and the hyperparameters for each algorithm are as follows:
              <br />
              <br />
              <b>Simple Linear Regression:</b> 
              <br />  
              The simple linear regression model was used as it is the most basic and reliable regression model and to set a benchmark to compare the performance of other models. The simple linear regression was tuned with all the default hyperparameters of scikit-learn package, which is mainly fit intercept=True for the best possible result.
              <br />
              <br />
              <b>Lasso Regression:</b> 
              <br />  
              In the implementation of the Lasso Regression, all the default hyperparameters of scikit-learn were used except for the λ value, which is the parameter used to tunes the model’s bias-variance tradeoff. To find the best λ value, several lambda values were tried and the best result on the validation set was selected. To obtain the best result, the lambda value was set to 0.02.
              <br />
              <br />
              <b>Random Forest Regression:</b> 
              <br />  
              In the case of the random forest regression, a max depth of 50 was used for the optimal results.
              <br />
              <br />
              <b>Gradient Boosting Regression:</b> 
              <br />  
              The gradient-boosting optimal hyperparameters that were set were a learning rate of 0.05, 15 minimum sample leaves, 10 minimum sample splits, a maximum depth of 4 trained with huber loss for 3000 n estimators.
              <br />
              <br />
              <b>Elastic Regression:</b> 
              <br />  
              In elastic regression, the alpha was set to 0.05, the l1 ratio to 0.9, and a maximum iteration of 10000 as the optimal hyperparameter.
              <br />
              <br />
              <b>Kernel Ridge Regression:</b> 
              <br />  
              The kernel ridge regression used alpha as 0.9, a polynomial kernel with degree as 2 and coefficient as 25.0.
            </p>
            
            <p className="text-3xl">III. EVALUATION METRICS</p>
            <p className="text-base text-justify">
              Evaluation metrics are qualitative measurements used in the field of machine learning
and deep learning to gauge the performance of the developed models. These
metrics evaluate the model and help in training the model better by making the
model try to minimize or maximize the error or accuracy respectively. For regression
problems, the most commonly used evaluation metrics are Mean Absolute
Error (MAE), Mean Square Error (MSE), Root Mean Square Error (RMSE), and
R2 Score. For this project, to maintain a standard evaluation metric across all
the models, the mean square error and root mean square error were used as the
evaluation metric. To calculate the errors, the predicted brain age is compared
with the biological age of the person we have from the demographic data.
            </p>
            <BlockMath math="MSE = \frac{1}{n}  \sum_{i=1}^{n} (y_i - \tilde{y} )^2    \;\;\;\;\;\;\;\;\;   RMSE = \sqrt{\frac{1}{n}  \sum_{i=1}^{n} (y_i - \tilde{y} )^2}    " />

            

      {/* <p className="mt-6">
        \int_0^\infty e^{-x^2} \, dx = \frac{\sqrt{\pi}}{2}
        Inline formula: <InlineMath math="e^{i\pi} + 1 = 0" />
      </p> */}

            <p className="text-3xl">IV. RESULTS</p>
              <p className="text-base text-justify">
                Let you now look at the results obtained from training the different machine learning algorithms on the two datasets.
              </p>
              <table className="table-auto md:table-fixed w-full border-collapse border border-slate-400 mb-6">
                <caption className="text-sm text-gray-500 mt-2">
                  Machine Learning Model Evaluation (Individual Segmentation)
                </caption>
                <thead className="border border-slate-400">
                  <tr>
                    <th>Algorithm</th>
                    <th>MSE</th>
                    <th>RMSE</th>
                  </tr>
                </thead>
                <tbody className="border border-slate-400">
                  <tr>
                    <td>Simple Linear Regression</td>
                    <td className="text-center">67.019</td>
                    <td className="text-center">8.186</td>
                  </tr>
                  <tr>
                    <td>Lasso Regression</td>
                    <td className="text-center">64.272</td>
                    <td className="text-center">8.017</td>
                  </tr>
                  <tr>
                    <td>Elastic Net Regression</td>
                    <td className="text-center">64.052</td>
                    <td className="text-center">8.003</td>
                  </tr>
                  <tr>
                    <td>Random Forest Regression</td>
                    <td className="text-center">93.300</td>
                    <td className="text-center">9.660</td>
                  </tr>
                  <tr>
                    <td>Gradient Boosting Regression</td>
                    <td className="text-center">69.924</td>
                    <td className="text-center">8.362</td>
                  </tr>
                  <tr>
                    <td>Kernel Ridge Regression</td>
                    <td className="text-center">57.549 </td>
                    <td className="text-center">7.586</td>
                  </tr>
                </tbody>
              </table>

              <table className="table-auto md:table-fixed w-full border-collapse border border-slate-400 mb-6">
                <caption className="text-sm text-gray-500 mt-2">
                  Machine Learning Model Evaluation (Tissue Group)
                </caption>
                <thead className="border border-slate-400">
                  <tr>
                    <th>Algorithm</th>
                    <th>MSE</th>
                    <th>RMSE</th>
                  </tr>
                </thead>
                <tbody className="border border-slate-400">
                  <tr>
                    <td>Simple Linear Regression</td>
                    <td className="text-center">86.103</td>
                    <td className="text-center">9.280</td>
                  </tr>
                  <tr>
                    <td>Lasso Regression</td>
                    <td className="text-center">86.103</td>
                    <td className="text-center">9.280</td>
                  </tr>
                  <tr>
                    <td>Elastic Net Regression</td>
                    <td className="text-center">85.817</td>
                    <td className="text-center">9.264</td>
                  </tr>
                  <tr>
                    <td>Random Forest Regression</td>
                    <td className="text-center">90.214</td>
                    <td className="text-center">9.498</td>
                  </tr>
                  <tr>
                    <td>Gradient Boosting Regression</td>
                    <td className="text-center">102.268</td>
                    <td className="text-center">10.113</td>
                  </tr>
                  <tr>
                    <td>Kernel Ridge Regression</td>
                    <td className="text-center">88.015</td>
                    <td className="text-center">9.382</td>
                  </tr>
                </tbody>
              </table>
              <br />
              <p className="text-base text-justify">
                From the Individual Segmentation table above, we can see that the Kernel Ridge Regression model provided the best result with an MSE value of 57.549 and an RMSE value of 7.586. Except for the Random Forest Regression, the rest of the models performed reasonably well and had similar MSE and RMSE. But in the case of the Tissue group dataset results, all the models performed worse than their performance in the individual segmentation dataset except for the Random Forest Regression algorithm. From comparing the performance of the models on the two datasets we can say that generally, the individual dataset helped in training the models better than the tissue group dataset.
              </p>
            <p className="text-3xl">V. REFERENCES</p>
            <div className="mt-10">
              <h2 className="text-xl font-bold mb-4">References</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Prakash Chandra, P. (2023). Comprehensive Study of Brain Age Prediction using Classical Machine Learning and Neural Networks (Dissertation). Retrieved from  <a  href="https://urn.kb.se/resolve?urn=urn:nbn:se:uu:diva-517300"  className="text-blue-600 dark:text-blue-400 underline hover:no-underline"  target="_blank"  rel="noopener noreferrer" > https://urn.kb.se/resolve?urn=urn:nbn:se:uu:diva-517300</a></li>
                  <li>L. Henschel, S. Conjeti, S. Estrada, K. Diers, B. Fischl, and M. Reuter, “Fastsurfer - a fast and accurate deep learning based neuroimaging pipeline,” NeuroImage, vol. 219, p. 117012, 2020. [Online]. Available: <a  href="https://www.sciencedirect.com/science/article/pii/S1053811920304985"  className="text-blue-600 dark:text-blue-400 underline hover:no-underline"  target="_blank"  rel="noopener noreferrer" >https://www.sciencedirect.com/science/article/pii/S1053811920304985</a></li>
                  <li>J. Han, S. Kim, J. Lee, and W. Lee, “Brain age prediction: A comparison between machine learning models using brain morphometric data.” Sensors 2022, 22, 8077), 2022. [Online]. Available: <a  href="https://doi.org/10.3390/s22208077"  className="text-blue-600 dark:text-blue-400 underline hover:no-underline"  target="_blank"  rel="noopener noreferrer" >https://doi.org/10.3390/s22208077</a></li>
                </ol>
            </div>

            {/* Inline Code Block */}
            {/* <div className="relative">
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
            </p> */}
          </div>
        </section>
        
        {/* Render Comment Section */}
        <CommentSection pageName={page_name} />
      </div>
      )}
    </div>
  );
}