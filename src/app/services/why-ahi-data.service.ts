import { Injectable } from '@angular/core';

export interface ContentSection {
  title?: string;
  subtitle?: string;
  content: string;
  imageUrl?: string;
  icon?: string;
  displayType?: 'default' | 'card' | 'horizontal-card';
  titleSize?: 'h2' | 'h3' | 'h4';
  color?: string;
  additionalImages?: string[];
  preCardText?: string;
  phone?: string;
}

export interface WhyAhiPage {
  id: string;
  title: string;
  slug: string;
  description: string;
  heroImageUrl: string;
  sections: ContentSection[];
}

@Injectable({
  providedIn: 'root'
})
export class WhyAhiDataService {
  private pages: WhyAhiPage[] = [
    {
      id: 'about-ahi',
      title: 'About Clearedge',
      slug: 'about-ahi',
      description: '',
      heroImageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
      sections: [
        {
          title: 'Certified with GB Honors',
          subtitle: 'Clearedge Facility Services, Inc. is Committed to Quality Service',
          content: 'We at Clearedge feel that "Quality" is the level of performance that you expect from your contracted Facility Services Company. Clearedge is honored to be certified by CIMS. CIMS is the first comprehensive management and operations standard for cleaning organizations. Administered by ISSA and the American Institute for Cleaning Sciences, CIMS is a standard of excellence designed to help building service contractors and in-house service providers develop quality, customer-centered organizations.',
          imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80'
        },
        {
          title: 'WHO WE ARE',
          content: 'To provide cost-effective world class integrated facility services to commercial building owners and/or managers nationwide, while simultaneously providing their employees, tenants and visitors a clean environment in which to work, office and visit.',
          imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'
        },
        {
          title: 'Our Vision',
          content: 'To create a profitable company that projects a professional environment which keeps its customers pleased and employees motivated.',
          displayType: 'card'
        }
      ]
    },
    {
      id: 'quality-control',
      title: 'Quality Control',
      slug: 'quality-control',
      description: '',
      heroImageUrl: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1920&q=80',
      sections: [
        {
          title: 'We are Committed to Quality Service',
          content: 'We at clearedge feel that "Quality" is the level of performance that you expect from your contracted Facility Services Company'
        },
        {
          content: 'In almost all cases, we provide custodial quotations to a customer not for pricing, but for service issues. The customer had hired their previous janitorial company and the service level for the first several months was always generally good. The service then gradually falls off from there. This in general, is universal in our findings. We understand that contracts are lost and service companies are replaced, because of the actions that take place during the interim term of the contract.',
          imageUrl: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80'
        },
        {
          content: 'Well, what you are paying for, and what we do at Clearedge, is to promise to provide "CONSISTENCY". We strive to maintain a consistently good performance level at all times.',
          imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80'
        },
        {
          content: 'We believe this can be accomplished if our cleaning technicians are fully trained in accordance with the specifications designed especially for your facilities. We must then complete on-going follow up inspections of their work, and let the custodians know exactly what is required of them. Our inspections ensure that we are now able to recognize the areas that need attention, and provide immediate and proper custodial care to those areas.',
          imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80'
        },
        {
          content: 'We have developed a quality control system that allows us to always know what is being done and how it is being done. Clearedge also values having our customers perform inspections so that we can compare our expectations.',
          imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80'
        }
      ]
    },
    {
      id: 'cims-standards',
      title: 'CIMS Standards',
      slug: 'cims-standards',
      description: '',
      heroImageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80',
      sections: [
        {
          title: 'CIMS/ISSA Certification',
          content: 'Cleaning Industry Management Standard (CIMS) is the first organization-wide management standard and certification for cleaning service providers, both in-house and outsourced. Developed through a consensus-based process.'
        },
        {
          title: 'The Five Pillars of Management Excellence',
          content: '<div class="numbered-list-item"><span class="circle-number">1</span>Quality Systems</div><div class="numbered-list-item"><span class="circle-number">2</span>Service Delivery</div><div class="numbered-list-item"><span class="circle-number">3</span>Human Resources</div><div class="numbered-list-item"><span class="circle-number">4</span>Health, Safety, and Environmental Stewardship</div><div class="numbered-list-item"><span class="circle-number">5</span>Management Commitment</div>',
          displayType: 'card',
          preCardText: 'There are 72,000 Commercial Janitorial Contractors. Clearedge is one of only 251 contractors that have CIMS Certification.'
        },
        {
          title: 'Accountability',
          content: 'CIMS is effective because it is based on universally accepted management principles and applies these elements to an entire organization – rather than to an individual, product or process. AHI is accountable for every aspect of our work performance. Periodic audits ensure our consistency.<br><br><img src="assets/images/cimsImage.png" class="cims-card-image" alt="CIMS">',
          displayType: 'card'
        }
      ]
    },
    {
      id: 'leadership',
      title: 'Meet Our Leaders of Clearedge',
      slug: 'leadership',
      description: '',
      heroImageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1920&q=80',
      sections: [
        {
          title: 'Maher Abuawad',
          subtitle: 'Chief Executive Officer',
          content: 'Ms. Traci Haws is Owner and Chief Executive Officer of Clearedge. She is a graduate of University of Texas at Arlington with a degree in finance. She is also a graduate of Southwestern Paralegal (Institute) as a Certified Paralegal. Traci has been involved in the janitorial business for over 25 years. She is experienced in all aspects of the business and continues to lead the company\'s growth and success strategies.',
          displayType: 'card',
          color: '#5A6C7D',
          imageUrl: 'assets/images/maher abuawad.png',
          phone: '469-367-3626'
        },
        {
          title: 'Mahmoud Taky',
          subtitle: 'VP of Business Development',
          content: 'Luke Bruns, serves as Director of Business Development. He joined the Clearedge team in 2005 after graduating from West Texas A&M University with a Bachelors degree in Advertising and Public Relations. He has been instrumental in the development of new Fortune 500 customers nationally and also in developing preferred vendor relationships between Clearedge and major third party facility management and property management firms. Luke is an active member of BOMA, IREM, CoreNet and IFMA.',
          displayType: 'card',
          color: '#46AB83',
          imageUrl: 'assets/images/mahmoud taky.png',
          phone: '+1214-940-9713'
        },
         {
          title: 'Maher Abuawad',
          subtitle: 'Chief Executive Officer',
          content: 'Ms. Traci Haws is Owner and Chief Executive Officer of Clearedge. She is a graduate of University of Texas at Arlington with a degree in finance. She is also a graduate of Southwestern Paralegal (Institute) as a Certified Paralegal. Traci has been involved in the janitorial business for over 25 years. She is experienced in all aspects of the business and continues to lead the company\'s growth and success strategies.',
          displayType: 'card',
          color: '#5A6C7D',
          imageUrl: 'assets/images/maher abuawad.png',
          phone: '469-367-3626'
        },
        {
          title: 'Mahmoud Taky',
          subtitle: 'VP of Business Development',
          content: 'Luke Bruns, serves as Director of Business Development. He joined the Clearedge team in 2005 after graduating from West Texas A&M University with a Bachelors degree in Advertising and Public Relations. He has been instrumental in the development of new Fortune 500 customers nationally and also in developing preferred vendor relationships between Clearedge and major third party facility management and property management firms. Luke is an active member of BOMA, IREM, CoreNet and IFMA.',
          displayType: 'card',
          color: '#46AB83',
          imageUrl: 'assets/images/mahmoud taky.png',
          phone: '+1214-940-9713'
        },
         {
          title: 'Maher Abuawad',
          subtitle: 'Chief Executive Officer',
          content: 'Ms. Traci Haws is Owner and Chief Executive Officer of Clearedge. She is a graduate of University of Texas at Arlington with a degree in finance. She is also a graduate of Southwestern Paralegal (Institute) as a Certified Paralegal. Traci has been involved in the janitorial business for over 25 years. She is experienced in all aspects of the business and continues to lead the company\'s growth and success strategies.',
          displayType: 'card',
          color: '#5A6C7D',
          imageUrl: 'assets/images/maher abuawad.png',
          phone: '469-367-3626'
        },
        {
          title: 'Mahmoud Taky',
          subtitle: 'VP of Business Development',
          content: 'Luke Bruns, serves as Director of Business Development. He joined the Clearedge team in 2005 after graduating from West Texas A&M University with a Bachelors degree in Advertising and Public Relations. He has been instrumental in the development of new Fortune 500 customers nationally and also in developing preferred vendor relationships between Clearedge and major third party facility management and property management firms. Luke is an active member of BOMA, IREM, CoreNet and IFMA.',
          displayType: 'card',
          color: '#46AB83',
          imageUrl: 'assets/images/mahmoud taky.png',
          phone: '+1214-940-9713'
        }
      ]
    },
    {
      id: 'supplier-diversity',
      title: 'Supplier Diversity',
      slug: 'supplier-diversity',
      description: '',
      heroImageUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80',
      sections: [
        {
          title: 'Diversity is more than just a goal; it\'s our business',
          content: 'Clearedge Facility Services, Inc. is rich in culture and backgrounds from our national workforce to our customers, owners and suppliers. We know that these differences give us our competitive advantage and help us to maintain our leadership position.',
          titleSize: 'h2'
        },
        {
          title: 'Our Objective',
          content: 'is to become a global diversity leader. To do so, we know that we must lead by example. We will continue to mirror the communities in which we work and live; provide opportunities for our associates and business partners; and ensure that we are always striving for excellence.',
          displayType: 'card',
          icon: 'assets/images/global.png'
        },
        {
          title: 'Clearedge\'s Commitment',
          content: 'to diversity encompasses every business unit worldwide. We have experienced the benefits that come from working with locally-owned businesses in the communities in which we operate. It\'s a win for the community and a win for business, yours and ours. And, we intend to do more.',
          displayType: 'card',
          icon: 'assets/images/shaking hands.png'
        },
        {
          title: 'We Evaluate',
          content: 'every company on the basis of meeting the following requirements. A company should be certified as a minority, women, disabled, or GLBT-owned business. A for-profit business enterprise which is at least 51% owned, operated, and controlled by United States citizens.',
          displayType: 'card',
          icon: 'assets/images/eval.png'
        }
      ]
    },
    {
      id: 'industry-organizations',
      title: 'Industry Organizations',
      slug: 'industry-organizations',
      description: '',
      heroImageUrl: 'https://images.unsplash.com/photo-1511578194003-00c80e42dc9b?w=1920&q=80',
      sections: [
        {
          title: 'The Building Owners & Managers Association',
          content: 'BOMA monitors and lobbies pertinent legislative, regulatory and codes/standards issues, including electricity deregulation, capital gains tax relief, telecommunications, indoor air quality, private property rights, risk assessment, and codes and standards.',
          imageUrl: './assets/images/orgaImgs/boma.jpg',
          displayType: 'horizontal-card'
        },
        {
          title: 'International Facility Management Association',
          content: 'IFMA is the world’s largest and most widely recognized international association for professional facility managers. IFMA certifies facility managers, conducts research, provides educational programs, recognizes facility management degree and certificate programs and produces World Workplace, the world’s largest facility management conference and exposition.',
          imageUrl: './assets/images/orgaImgs/ifma.jpg',
          displayType: 'horizontal-card'
        },
        {
          title: 'Building Service Contractors Assoc. International',
          content: 'BSCAI has become the trade association of the building service industry, providing educational programs, publications, video training programs, seminars, and networking opportunities, all developed specifically for the building service contracting industry.',
          imageUrl: './assets/images/orgaImgs/bscai.jpg',
          displayType: 'horizontal-card'
        },
        {
          title: 'Women’s Business Enterprise National Council',
          content: 'The WBENC, is the nation’s leading advocate of women-owned businesses as suppliers to America’s corporations. It also is the largest third-party certifier of businesses owned and operated by women in the United States. WBENC works to foster diversity in the world of commerce with programs and policies designed to expand opportunities and eliminate barriers in the marketplace for women business owners. WBENC works with representatives of corporations to encourage the utilization and expansion of supplier/vendor diversity.',
          imageUrl: './assets/images/orgaImgs/womensbusiness-partners.jpg',
          displayType: 'horizontal-card'
        },
        {
          title: 'US Green Building Council',
          content: 'The U.S. Green Building Council (USGBC) is a non-profit organization committed to expanding sustainable building practices. USGBC is composed of more than 12,000 organizations from across the building industry that are working to advance structures that are environmentally responsible, profitable, and healthy places to live and work.',
          imageUrl: './assets/images/orgaImgs/usgbc.jpg',
          displayType: 'horizontal-card'
        },
        {
          title: 'National Safety Council',
          content: 'IFMA is the world’s largest and most widely recognized international association for professional facility managers. IFMA certifies facility managers, conducts research, provides educational programs, recognizes facility management degree and certificate programs and produces World Workplace, the world’s largest facility management conference and exposition.',
          imageUrl: './assets/images/orgaImgs/nsc.jpg',
          displayType: 'horizontal-card'
        },
        {
          title: 'CoreNet Global',
          content: 'CoreNet Global is a global network focused on advancing knowledge, connecting people and promoting personal excellence for professionals, creating strategic value for their enterprises.',
          imageUrl: './assets/images/orgaImgs/corenet.jpg',
          displayType: 'horizontal-card'
        },
        {
          title: 'North Central Texas Regional Certification Agency',
          content: 'The NCTRCA is solely committed to ensure that bona-fide disadvantaged, minority and woman-owned firms, benefit from the programs offered by its member entities.',
          imageUrl: './assets/images/orgaImgs/NCTRCA.jpg',
          displayType: 'horizontal-card'
        },
        {
          title: 'International Sanitary Supply Association',
          content: 'As the worldwide cleaning industry association. ISSA’s global membership includes more than 5,500 distributor, manufacturer, building service contractor, and in-house service provider companies.',
          imageUrl: './assets/images/orgaImgs/issa.jpg',
          displayType: 'horizontal-card'
        },
        {
          title: 'APPA',
          content: 'APPA is the gathering place for those of engaged in the field of educational facilities management, and dedicated to the ongoing evolution of its professionals into influential leaders in education.',
          imageUrl: './assets/images/orgaImgs/appa.png',
          displayType: 'horizontal-card'
        }
      ]
    },
    {
      id: 'acquisitions',
      title: 'Acquisitions',
      slug: 'acquisitions',
      description: '',
      heroImageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80',
      sections: [
        {
          title: "We're Always Looking to Expand Our Business",
          content: `If you are interested in selling your business,<br>please give Todd Haddock a call.`,
          displayType: 'card',
          icon: 'business-growth'
        }
      ]
    }
  ];

  constructor() { }

  getAllPages(): WhyAhiPage[] {
    return this.pages;
  }

  getPageBySlug(slug: string): WhyAhiPage | undefined {
    return this.pages.find(page => page.slug === slug);
  }
}
