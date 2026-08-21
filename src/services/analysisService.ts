import { mockResearchSteps } from '../data/mockAnalysis';

export const analysisService = {
  getResearchSteps(): string[] {
    return mockResearchSteps;
  },

  runAnalysis(company: string, onStep: (step: number) => void, onComplete: () => void): () => void {
    let currentStep = 0;
    const interval = window.setInterval(() => {
      if (currentStep >= mockResearchSteps.length - 1) {
        window.clearInterval(interval);
        window.setTimeout(() => {
          onComplete();
        }, 600);
      } else {
        currentStep += 1;
        onStep(currentStep);
      }
    }, 680);

    return () => window.clearInterval(interval);
  },
};
