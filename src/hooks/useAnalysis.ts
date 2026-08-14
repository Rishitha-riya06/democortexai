import { useEffect, useState } from 'react';
import { mockResearchSteps } from '../data/mockAnalysis';

export function useAnalysis() {
  const [isResearching, setIsResearching] = useState(false);
  const [researchStep, setResearchStep] = useState(0);
  const [reportReady, setReportReady] = useState(false);

  useEffect(() => {
    if (!isResearching) return undefined;
    const interval = window.setInterval(() => {
      setResearchStep((current) => {
        if (current >= mockResearchSteps.length - 1) {
          window.clearInterval(interval);
          window.setTimeout(() => {
            setIsResearching(false);
            setReportReady(true);
          }, 600);
          return current;
        }
        return current + 1;
      });
    }, 680);
    return () => window.clearInterval(interval);
  }, [isResearching]);

  const startAnalysis = () => {
    setReportReady(false);
    setResearchStep(0);
    setIsResearching(true);
  };

  const resetAnalysis = () => {
    setIsResearching(false);
    setResearchStep(0);
    setReportReady(false);
  };

  const setReady = () => {
    setIsResearching(false);
    setReportReady(true);
  };

  return {
    isResearching,
    setIsResearching,
    researchStep,
    setResearchStep,
    reportReady,
    setReportReady,
    startAnalysis,
    resetAnalysis,
    setReady,
    steps: mockResearchSteps,
  };
}
