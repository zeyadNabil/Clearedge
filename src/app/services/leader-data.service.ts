import { Injectable } from '@angular/core';

export interface Leader {
  id: string;
  name: string;
  title: string;
  slug: string;
  imageUrl: string;
  shortBio: string;
  detailedBio: string;
  email?: string;
  phone?: string;
  education: string[];
  experience: string[];
  achievements: string[];
  color: string;
}

@Injectable({
  providedIn: 'root'
})
export class LeaderDataService {
  private leaders: Leader[] = [
    {
      id: 'maher-abuawad',
      name: 'Maher Abuawad',
      title: 'Chief Executive Officer',
      slug: 'maher-abuawad',
      imageUrl: 'assets/images/maher abuawad.png',
      color: '#5A6C7D',
      shortBio: 'Maher Abuawad is a systems-driven executive with leadership experience across $65M+ in private-sector automation, process optimization, and enterprise transformation initiatives.',
      detailedBio: 'Maher Abuawad is a systems-driven executive with leadership experience across $65M+ in private-sector automation, process optimization, and enterprise transformation initiatives. As CEO of ClearEdge Solutions, Maher applies enterprise-grade operational discipline to the commercial cleaning industry—transforming a traditionally labor-driven service into a scalable, technology-enabled operation. His background spans automation strategy, workflow design, and large-scale operational execution for high-growth and billion-dollar organizations. He is known for building repeatable, reliable systems that improve consistency, accountability, and performance across distributed teams. A core strength of Maher\'s leadership is his deep expertise in SharePoint collaboration and digital governance, having successfully led complex migrations and operational transformations with zero disruption. He brings this same rigor to ClearEdge Solutions—establishing standardized SOPs, quality assurance frameworks, compliance systems, and performance tracking that allow the company to scale without sacrificing service excellence. Under Maher\'s leadership, ClearEdge Solutions operates with a systems-first mindset, delivering predictable results, transparent reporting, and long-term value for commercial clients.',
      education: [],
      experience: [
        'Led $65M+ in private-sector automation and enterprise transformation initiatives',
        'CEO of ClearEdge Solutions - transforming commercial cleaning into technology-enabled operations',
        'Automation strategy and workflow design for high-growth and billion-dollar organizations',
        'Successfully led complex SharePoint migrations with zero disruption',
        'Built repeatable, reliable systems across distributed teams'
      ],
      achievements: [
        'Transformed traditional labor-driven service into scalable, technology-enabled operation',
        'Applied enterprise-grade operational discipline to commercial cleaning industry',
        'Established standardized SOPs and quality assurance frameworks',
        'Implemented compliance systems and performance tracking for scalable excellence',
        'Built systems-first organization delivering predictable results and transparent reporting',
        'Deep expertise in SharePoint collaboration and digital governance'
      ],
      phone: '718-744-4145',
      email: 'maher@clearedge.com'
    },
    {
      id: 'mahmoud-taky',
      name: 'Mahmoud Taky',
      title: 'Chief Strategy Officer',
      slug: 'mahmoud-taky',
      imageUrl: 'assets/images/mahmoud taky.png',
      color: '#46AB83',
      shortBio: 'Luke Bruns serves as Director of Business Development. He joined the Clearedge team in 2005 after graduating from West Texas A&M University.',
      detailedBio: 'Taky is a senior executive and strategic operations leader distinguished for building high-performance, scalable organizations through disciplined systems, operational intelligence, and enterprise-level execution. As the Founder and Chief Executive Officer of Clearedge solutions, he brings a refined, corporate-grade operating model to the commercial and residential cleaning sector—elevating it into a precision-driven, technology-enabled, and performance-engineered enterprise.\n\nWith a deep command of operational architecture, process governance, and scalable infrastructure design, Taky is recognized for transforming service-based businesses into structured, resilient, and execution-focused organizations. His leadership philosophy centers on institutionalizing excellence through repeatable systems, rigorous accountability frameworks, and elite quality control standards.\n\nA cornerstone of his approach is the implementation of enterprise-level Standard Operating Procedures (SOPs), compliance and risk governance models, workforce performance intelligence, and continuous improvement programs. Through disciplined execution, data-driven oversight, and advanced operational workflows, he ensures predictable outcomes, premium service consistency, and sustainable long-term growth without compromising brand integrity or service excellence.\n\nUnder his executive leadership, Clearedge solutions operates as a systems-first organization—delivering refined, dependable, and high-standard cleaning solutions for residential estates, corporate offices, and large-scale commercial facilities across Dallas, Texas. His strategic vision is to position the company as a premier, trusted, and enduring partner for clients seeking superior service standards, operational reliability, and long-term value.',
      education: [],
      experience: [
        'Developed relationships with Fortune 500 customers nationally',
        'Established preferred vendor relationships with major facility management firms',
        'Built partnerships with third-party property management companies'
      ],
      achievements: [
        'Successfully expanded Clearedge\'s national client base',
        'Active member of BOMA (Building Owners and Managers Association)',
        'Active member of IREM (Institute of Real Estate Management)',
        'Active member of CoreNet Global',
        'Active member of IFMA (International Facility Management Association)'
      ],
      phone: '+1214-940-9713',
      email: 'mahmoud@clearedge.com'
    }
  ];

  constructor() { }

  getAllLeaders(): Leader[] {
    return this.leaders;
  }

  getLeaderBySlug(slug: string): Leader | undefined {
    return this.leaders.find(leader => leader.slug === slug);
  }
}
