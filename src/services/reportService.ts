import { CompanyReportData } from '../types/report';
import { mockSourceLabels } from '../data/mockAnalysis';

export const reportService = {
  getSources(): string[] {
    return mockSourceLabels;
  },

  getCompanyReport(company: string): CompanyReportData {
    return {
      company,
      category: 'Enterprise Technology & Cloud Services',
      confidence: 'High confidence',
      sourceCount: 18,
      sources: mockSourceLabels,
      overview: {
        name: company,
        industry: 'Enterprise Technology & Cloud Services',
        category: 'Enterprise Technology & Cloud Services',
        founded: '2015',
        hq: 'San Francisco, CA',
        employees: '1,000–5,000',
        summary: `${company} is a leading technology company operating in the software and enterprise technology space, headquartered in San Francisco, California. The company develops and delivers AI-powered products and services for businesses and consumers.`,
        tags: ['Artificial intelligence', 'Cloud services', 'Software'],
      },
      sections: [
        {
          number: '01',
          title: 'Business Overview',
          content: `${company} has established a prominent market position through continuous innovation, scalable enterprise infrastructure, and customer-centric product expansion across international markets.`,
        },
        {
          number: '02',
          title: 'Market Landscape',
          content: `${company} competes in a high-growth market driven by rapid cloud adoption, digital automation, and enterprise workflow optimization.`,
        },
      ],
    };
  },
};
