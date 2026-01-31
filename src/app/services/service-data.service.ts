import { Injectable } from '@angular/core';

export interface ServiceItem {
  title: string;
  description: string;
  icon?: string;
  imageUrl?: string;
}

export interface FacilityType {
  name: string;
  icon: string;
}

export interface Benefit {
  name: string;
  icon: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  slug: string;
  description: string;
  overview: string;
  mainHeading: string;
  mainDescription: string;
  heroImageUrl: string;
  serviceItems: ServiceItem[];
  facilityTypes: FacilityType[];
  affiliations: string[];
  benefits?: string[] | Benefit[];
}

@Injectable({
  providedIn: 'root'
})
export class ServiceDataService {
  private services: ServiceDetail[] = [
    {
      id: 'ancillary-services',
      title: 'Ancillary Services',
      slug: 'ancillary-services',
      description: 'Comprehensive support services that complement your facility management needs',
      overview: 'While our core business has been commercial janitorial services, Clearedge offers a wide variety of ancillary services so we can be a full service solution for our customers.',
      mainHeading: 'Serving Fortune 500 Companies',
      mainDescription: 'While our core business has been commercial janitorial services, Clearedge offers a wide variety of ancillary services so we can be a full service solution for our customers. Our company is not just reactive, but proactive. We train our staff to actively tell customers of issues within and around their buildings to help prevent further issues or damage.',
      heroImageUrl: './assets/images/servicesImgs/Ancillary Services.jpg',
      serviceItems: [
        { title: 'Carpet & Floor Care Services', description: 'Get the best carpet and floor cleaning plus sanitation from Clearedge', imageUrl: './assets/images/servicesImgs/floorCleaning.jpg' },
        { title: 'Landscaping / Grounds Keeping', description: 'Clearedge Landscaping Maintenance uses proven quality control procedures to ensure your landscape is well maintained.', imageUrl: './assets/images/servicesImgs/groundskeeper.png' },
        { title: 'Parking Lot Sweeping & Striping', description: 'Give your customers and employees a safe and clean parking lot with Clearedge parking lot services.', imageUrl: './assets/images/servicesImgs/parking.jpeg' },
        { title: 'Window Washing / Power Washing', description: 'Clearedge\'s cleaning equipment is some of the latest in deionized window washing technology.', imageUrl: './assets/images/servicesImgs/windowWashing.jpg' },
        { title: 'Carpet & Tile Replacement', description: 'Get a custom, beautiful landscape from Clearedge that will show off your unique corporate style.', imageUrl: './assets/images/servicesImgs/carpetTileReplacement.jpg' },
        { title: 'Construction Clean Up', description: 'Keep your worksite safe and clean with Clearedge clean up services.', imageUrl: './assets/images/servicesImgs/constructionCleanUp.jpg' },
        { title: 'Garage Maintenance', description: 'Clearedge keeps your garages clean, well lit, and safe.', imageUrl: './assets/images/servicesImgs/garageMaintenance.png' },
        { title: 'Document Shredding', description: 'Securely dispose of documents using Clearedge document shredding services.', imageUrl: './assets/images/servicesImgs/documentShredding.jpg' },
        { title: 'Escalator Cleaning', description: 'Our cleaning staff is trained to disinfect and clean escalators.', imageUrl: './assets/images/servicesImgs/escalatorCleaning.jpg' },
        { title: 'Painting Services', description: 'Clearedge has painter technicians who specialize in getting your space painted quickly and easily.', imageUrl: './assets/images/servicesImgs/paintingServices.jpg' },
        { title: 'Recycle Programs', description: 'Help protect the environment and reduce waste hassle free through Clearedge\'s recycle programs.', imageUrl: './assets/images/servicesImgs/recyclePrograms.jpeg' },
        { title: 'Re-Lamping', description: 'Clearedge can replace any light fixture bulbs regardless of placement or quantity.', imageUrl: './assets/images/servicesImgs/reLamping.jpg' },
        { title: 'Floor Restoration', description: 'Get your floors shining like new again with Clearedge\'s professional floor restoration services. We can also perform tile and grout sealing', imageUrl: './assets/images/servicesImgs/floorRestoration.jpg' },
        { title: 'Carpet Cleaning', description: 'Clearedge\'s carpet cleaning staff are trained to get you cleanest carpets in the shortest amount of time.', imageUrl: './assets/images/servicesImgs/carpetFloorCare.jpg' },
        { title: 'Strip & Wax', description: 'Clearedge will properly strip and wax your floors to give it a glossy, protective layer that keeps your floors attractive and free from scratches.', imageUrl: './assets/images/servicesImgs/stripWax.png' },
        { title: 'High Dusting', description: 'Clearedge will fully dust your establishment, no matter how inaccessible it may seem.', imageUrl: './assets/images/servicesImgs/highDusting.jpg' },
        { title: 'Pest Control', description: 'Clearedge\'s licensed pest control services removes any pests and keeps them from coming back.', imageUrl: './assets/images/servicesImgs/pestControl.jpg' },
        { title: 'LEED', description: 'Clearedge\'s Sustainably Green program can help those interested in pursuing LEED certification.', imageUrl: './assets/images/servicesImgs/leed.png' },
        { title: 'Warehouse and Power Plant Cleaning', description: 'Clearedge\'s specialists are trained in warehouse and power plant cleaning protocol. We are also fully trained in proper heavy machinery operation, such as shop floor degreasing, fork lifts, and large compactors.', imageUrl: './assets/images/servicesImgs/warehousePowerPlantCleaning.jpg' },
        { title: 'Event Services', description: 'Let Clearedge help you prepare your holiday event or office function.', imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80' },
        { title: 'Maintenance Person', description: 'Clearedge can provide you a maintenance person for all of your on site needs.', imageUrl: './assets/images/servicesImgs/maintenancePerson.png' },
        { title: 'Disinfecting Services', description: 'Prepare for the high flu season with Disinfecting services from our team.', imageUrl: './assets/images/servicesImgs/disinfectingServices.jpg' },
        { title: 'Emergency and After Work Hours Services', description: 'From inclement weather to pipe breaks, Clearedge can be on site during evenings and weekends.', imageUrl: './assets/images/servicesImgs/emergencyAfterHours.png' },
        { title: 'Multi-tier Supervision', description: 'Clearedge strongly believes that multiple sets of eyes are required to engulf and manage all cleaning needs.', imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80' }
      ],
      facilityTypes: [
        { name: 'Corporate / Headquarters / Campuses', icon: 'fas fa-building' },
        { name: 'Multi-tenant Facilities', icon: 'fas fa-users' },
        { name: 'Large Single-Tenant Buildings', icon: 'fas fa-city' },
        { name: 'Manufacturing Plants / Industrial / Commercial', icon: 'fas fa-industry' },
        { name: 'Airports', icon: 'fas fa-plane' },
        { name: 'Educational Facilities', icon: 'fas fa-graduation-cap' },
        { name: 'Museums', icon: 'fas fa-landmark' },
        { name: 'Medical Facilities', icon: 'fas fa-hospital' },
        { name: 'Municipalities', icon: 'fas fa-map-marker-alt' },
        { name: 'Call Centers', icon: 'fas fa-phone-alt' }
      ],
      affiliations: ['ASA', 'NSA', 'CORENET', 'WBENC']
    },
    {
      id: 'landscaping-services',
      title: 'Landscaping Services',
      slug: 'landscaping-services',
      description: 'Professional outdoor maintenance and landscaping solutions for commercial properties',
      overview: 'Your customers, clients, and employees form an impression about your property based on the visual impact of the surrounding landscape and curb appeal.',
      mainHeading: 'Landscaping is an Investment in Your Property',
      mainDescription: 'Your customers, clients, and employees form an impression about your property based on the visual impact of the surrounding landscape and curb appeal. At Clearedge Landscape Maintenance, we use our proven management methods, quality control procedures, and knowledgeable staff to ensure your landscaping is healthy and well maintained.',
      heroImageUrl: './assets/images/servicesImgs/landscapingServices.jpg',
      serviceItems: [
        { title: 'Landscaping Services', description: 'Clearedge Landscaping Maintenance uses proven quality control procedures to ensure your landscape is well maintained.', imageUrl: './assets/images/servicesImgs/landScapingService2.png' },
        { title: 'Irrigation Installation', description: 'An irrigation system is key to maintaining the health of your investment.', imageUrl: './assets/images/servicesImgs/irrigationInstallation.jpg' },
        { title: 'Irrigation Design Build', description: 'Clearedge Employs a licensed irrigator to perform service, system checks, and help maintain your irrigation system.', imageUrl: './assets/images/servicesImgs/IrrigationDesignBuild.jpg' },
        { title: 'Sprinkler Services', description: 'Your landscape will water itself with sprinkler services from Clearedge.', imageUrl: './assets/images/servicesImgs/sprinklerServices.jpg' },
        { title: 'Landscape Installation', description: 'Get a custom, beautiful landscape from Clearedge that will show off your unique corporate style.', imageUrl: './assets/images/servicesImgs/landscapeInstallation.jpg' },
        { title: 'Seasonal Color', description: 'A vibrant color program that utilizes our climates and seasonal dynamics completes the landscaping palette.', imageUrl: './assets/images/servicesImgs/seasonalColor.jpg' },
        { title: 'Snow Removal', description: 'Landscape and Exterior Services include snow and ice removal.', imageUrl: './assets/images/servicesImgs/snowRemoval.png' },
        { title: 'Water Waste Management', description: 'A licensed irrigator performs service, system checks, and maintenance to take care of your water waste management.', imageUrl: './assets/images/servicesImgs/waterWasteManagement.jfif' }
      ],
      facilityTypes: [
        { name: 'Corporate Campuses', icon: 'fas fa-building' },
        { name: 'Industrial Parks', icon: 'fas fa-industry' },
        { name: 'Medical Offices', icon: 'fas fa-hospital' },
        { name: 'Retail Shopping Centers', icon: 'fas fa-store' },
        { name: 'Multifamily Housing', icon: 'fas fa-home' }
      ],
      affiliations: ['ASA', 'NSA', 'TNLA', 'WBENC']
    },
    {
      id: 'green-cleaning',
      title: 'Green Cleaning',
      slug: 'green-cleaning',
      description: 'Eco-friendly cleaning solutions that protect both your environment and health',
      overview: 'There is growing evidence showing that green cleaning provides benefits not only to cleaning staff, but also to building occupants.',
      mainHeading: 'We don\'t just Clean it...We GREEN it!',
      mainDescription: 'There is growing evidence showing that green cleaning provides benefits not only to cleaning staff, but also to building occupants. In keeping with our commitment to provide our customers with the highest quality and environmentally responsible facilities services solutions, we offer a green cleaning program.',
      heroImageUrl: './assets/images/servicesImgs/greenCleaning.png',
      serviceItems: [
        { title: 'Green Seal Products', description: 'Clearedge takes a life-cycle approach, evaluating a product from its raw materials through the manufacturing process & ending with recycling or disposal. Products that pass these rigorous science-based evaluations can earn certification.', imageUrl: './assets/images/servicesImgs/greenSeal.jpg' },
        { title: 'Green Certified Equipment', description: 'Vacuums are equipped with high performance filters, micro fiber cloths that ensure the attraction of minute dust particles, and mixing systems that take the guesswork and risk out of mixing chemicals.', imageUrl: './assets/images/servicesImgs/greenCertifiedEquipment.png' },
        { title: 'LEED Certification', description: 'Clearedge\'s LEED Certification program can contribute over 40% of the points necessary for basic certification. When combined with Clearedge\'s operations and maintenance capabilities, we are one of the few companies that can self perform the scope of services necessary to help you achieve LEED-EB certification.', imageUrl: './assets/images/servicesImgs/leed.png' },
        { title: 'Team Cleaning', description: 'Four types of specialists concentrate on defined tasks such as light duty and trash, vacuuming, restrooms, and utility work. This leads to high quality work, easier training, and a better bottom line.', imageUrl: './assets/images/servicesImgs/teamCleaning.png' }
      ],
      facilityTypes: [],
      affiliations: ['USGBC', 'ISSA', 'GCU', 'Green Seal'],
      benefits: [
        { name: 'Improves Morale', icon: 'fas fa-smile' },
        { name: 'Reduces Operations and Maintenance Costs', icon: 'fas fa-dollar-sign' },
        { name: 'Professional Image', icon: 'fas fa-award' },
        { name: 'Increases Building Value', icon: 'fas fa-chart-line' },
        { name: 'Reduces Waste, Air, and Water Pollution', icon: 'fas fa-leaf' }
      ]
    },
    {
      id: 'clean-rooms-data-centers',
      title: 'Clean Rooms and Data Centers',
      slug: 'clean-rooms-data-centers',
      description: 'Specialized cleaning for critical environments requiring the highest standards',
      overview: 'Whether your concerns are viable particles or potential yield increases, Clearedge Facility Services, Inc. will develop a program to give you control.',
      mainHeading: 'The Cleanroom & Data Center Cleaning Experts',
      mainDescription: 'Whether your concerns are viable particles or potential yield increases, Clearedge Facility Services, Inc. will develop a program to give you control. Clearedge is committed to providing cleanroom and data center cleaning services that meet the highest standards of cleanliness and contamination control.',
      heroImageUrl: './assets/images/servicesImgs/dataCenterServices.jpg',
      serviceItems: [
        { title: 'Cleanroom Protocol', description: 'Clearedge\'s certified technicians are tested in cleanroom protocol cleaning', imageUrl: './assets/images/servicesImgs/cleanRoomProtocol.png' },
        { title: 'Trusted Experience', description: 'Clearedge currently does business with many types of cleanroom and production environments, such as aerospace, biotechnology, and pharmaceutical facilities.', imageUrl: './assets/images/servicesImgs/trustedExperience.png' },
        { title: 'Quality Service', description: 'We strive to maintain consistently good performance levels at all times, through technician training, follow up inspections, and customer feedback.', imageUrl: './assets/images/servicesImgs/qualityService.jfif' }
      ],
      facilityTypes: [
        { name: 'Semiconductor', icon: 'fas fa-microchip' },
        { name: 'Microelectronics', icon: 'fas fa-microchip' },
        { name: 'Aerospace', icon: 'fas fa-rocket' },
        { name: 'Fiber Optics', icon: 'fas fa-network-wired' },
        { name: 'Biotechnology', icon: 'fas fa-dna' },
        { name: 'Medical Devices', icon: 'fas fa-stethoscope' },
        { name: 'Pharmaceutical', icon: 'fas fa-pills' },
        { name: 'Data Centers', icon: 'fas fa-server' }
      ],
      affiliations: ['ASA', 'NSA', 'WBENC']
    },
    {
      id: 'worship-facilities',
      title: 'Faith-Based Facilities',
      slug: 'worship-facilities',
      description: 'Respectful and thorough cleaning services for faith-based facilities',
      overview: 'We understand the importance of maintaining a clean, welcoming environment for your congregation.',
      mainHeading: 'Professional Cleaning Services for Faith-Based Facilities',
      mainDescription: 'We understand the importance of maintaining a clean, welcoming environment for your congregation. Our services are designed with respect for your facility\'s unique needs and schedules, ensuring that your faith-based facility remains a sacred and welcoming space for all.',
      heroImageUrl: './assets/images/servicesImgs/faith.jpg',
      serviceItems: [
        { title: 'Sanctuary Cleaning', description: 'Respectful and thorough cleaning of your sanctuary and altar areas', imageUrl: './assets/images/servicesImgs/sanctuaryCleaning.jpg' },
        { title: 'Fellowship Hall Maintenance', description: 'Complete cleaning and maintenance of fellowship halls and gathering spaces', imageUrl: './assets/images/servicesImgs/fellowshipHallMaintenance.jfif' },
        { title: 'Restroom and Kitchen Deep Cleaning', description: 'Thorough sanitization and cleaning of restrooms and kitchen facilities', imageUrl: './assets/images/servicesImgs/restroom&kitchenDeepClean.jfif' },
        { title: 'Carpet and Upholstery Care', description: 'Professional carpet cleaning and upholstery maintenance', imageUrl: './assets/images/servicesImgs/carpetCare.jfif' },
        { title: 'Window and Fixture Cleaning', description: 'Crystal clear windows and polished fixtures throughout your facility', imageUrl: './assets/images/servicesImgs/windowCleaning.jfif' },
        { title: 'Special Event Preparation', description: 'Preparation and cleanup services for special events and services', imageUrl: './assets/images/servicesImgs/specialEventPreparation.jfif' },
        { title: 'Flexible Scheduling', description: 'Services scheduled around your service times and events', imageUrl: './assets/images/servicesImgs/flexibleScheduling.jfif' }
      ],
      facilityTypes: [
        { name: 'Cleaning', icon: 'fas fa-hand-sparkles' },
        { name: 'Set-ups', icon: 'fas fa-wrench' },
        { name: 'Lock-ups', icon: 'fas fa-lock' },
        { name: 'Special Event Coverage', icon: 'fas fa-calendar-alt' },
        { name: 'Floor Care', icon: 'fas fa-broom' }
      ],
      affiliations: ['ASA', 'NSA', 'WBENC']
    },
    {
      id: 'educational-facility-services',
      title: 'Educational Facility Services',
      slug: 'educational-facility-services',
      description: 'Comprehensive cleaning solutions for schools, colleges, and educational institutions',
      overview: 'Educational facilities require specialized cleaning protocols to maintain healthy learning environments.',
      mainHeading: 'Creating Healthy Learning Environments',
      mainDescription: 'Educational facilities require specialized cleaning protocols to maintain healthy learning environments. Our services are designed to support student health, safety, and academic success. We understand the unique challenges of maintaining cleanliness in high-traffic educational settings.',
      heroImageUrl: './assets/images/servicesImgs/educationServices.jpg',
      serviceItems: [
        { title: 'Classroom Cleaning', description: 'Daily cleaning and sanitization of classrooms and common areas', imageUrl: './assets/images/servicesImgs/classRoomCLeaning.jfif' },
        { title: 'Gymnasium and Athletic Facility Maintenance', description: 'Comprehensive cleaning of gymnasiums, locker rooms, and athletic facilities', imageUrl: './assets/images/servicesImgs/gymnasium&AthleticFacilityMaintenance.jfif' },
        { title: 'Cafeteria and Kitchen Sanitation', description: 'Deep cleaning and sanitization of cafeterias and kitchen facilities', imageUrl: './assets/images/servicesImgs/cafeteria&KitchenSanitation.jfif' },
        { title: 'Restroom Deep Cleaning', description: 'Thorough sanitization and maintenance of all restroom facilities', imageUrl: './assets/images/servicesImgs/restroomDeepCleaning.jfif' },
        { title: 'Library and Study Area Maintenance', description: 'Quiet, thorough cleaning of libraries and study spaces', imageUrl: './assets/images/servicesImgs/library&StudyAreaMaintenance.jfif' },
        { title: 'HVAC System Cleaning', description: 'Maintenance and cleaning of HVAC systems for improved air quality', imageUrl: './assets/images/servicesImgs/hvacSystemCleaning.jfif' },
        { title: 'Disinfecting Protocols', description: 'Comprehensive disinfecting and sanitizing protocols to prevent illness', imageUrl: './assets/images/servicesImgs/DisinfectingProtocols.jfif' },
        { title: 'Summer Deep Cleaning Programs', description: 'Intensive deep cleaning programs during summer breaks', imageUrl: './assets/images/servicesImgs/summerDeepCleaningPrograms.jfif' }
      ],
      facilityTypes: [
        { name: 'Elementary Schools', icon: 'fas fa-school' },
        { name: 'Middle Schools', icon: 'fas fa-school' },
        { name: 'High Schools', icon: 'fas fa-graduation-cap' },
        { name: 'Colleges and Universities', icon: 'fas fa-university' },
        { name: 'Daycare Centers', icon: 'fas fa-baby' },
        { name: 'Training Facilities', icon: 'fas fa-chalkboard-teacher' }
      ],
      affiliations: ['ASA', 'NSA', 'WBENC']
    },
    {
      id: 'medical-healthcare-solutions',
      title: 'Medical and Healthcare Solutions',
      slug: 'medical-healthcare-solutions',
      description: 'Healthcare-grade cleaning and disinfection for medical facilities',
      overview: 'Healthcare facilities require the highest standards of cleanliness and infection control.',
      mainHeading: 'Healthcare-Grade Cleaning and Disinfection',
      mainDescription: 'Healthcare facilities require the highest standards of cleanliness and infection control. Our medical cleaning services follow strict protocols to prevent healthcare-associated infections and maintain compliance with regulatory standards. We understand the critical importance of maintaining sterile environments in healthcare settings.',
      heroImageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80',
      serviceItems: [
        { title: 'OSHA and CDC Compliant Protocols', description: 'Strict adherence to OSHA and CDC guidelines for healthcare facility cleaning', imageUrl: './assets/images/servicesImgs/osha&CompliantProtocols.jfif' },
        { title: 'Hospital-Grade Disinfectants', description: 'Use of EPA-registered hospital-grade disinfectants for maximum effectiveness', imageUrl: './assets/images/servicesImgs/hospital-Grade Disinfectants.jfif' },
        { title: 'Infection Prevention and Control', description: 'Comprehensive infection prevention protocols to protect patients and staff', imageUrl: './assets/images/servicesImgs/infectionPrevention&Control.jfif' },
        { title: 'Operating Room Cleaning', description: 'Specialized cleaning of operating rooms and procedure areas', imageUrl: './assets/images/servicesImgs/OperatingRoomCleaning.jfif' },
        { title: 'Patient Room Deep Cleaning', description: 'Thorough cleaning and disinfection of patient rooms', imageUrl: './assets/images/servicesImgs/patientRoomDeepCleaning.jfif' },
        { title: 'Isolation Room Protocols', description: 'Specialized protocols for isolation and quarantine rooms', imageUrl: './assets/images/servicesImgs/isolationRoomProtocols.jfif' },
        { title: 'Medical Waste Management', description: 'Proper handling and disposal of medical waste', imageUrl: './assets/images/servicesImgs/medicalWasteManagement.jpg' },
        { title: 'HIPAA-Compliant Service', description: 'Full compliance with HIPAA regulations for patient privacy', imageUrl: './assets/images/servicesImgs/hIPAA-CompliantService.png' }
      ],
      facilityTypes: [],
      affiliations: ['ASA', 'NSA', 'WBENC']
    },
    {
      id: 'retail-facility-services',
      title: 'Retail Facility Services',
      slug: 'retail-facility-services',
      description: 'Professional cleaning services that keep retail spaces inviting and safe',
      overview: 'First impressions matter in retail. Our cleaning services help create a welcoming shopping environment.',
      mainHeading: 'Creating Inviting Shopping Environments',
      mainDescription: 'First impressions matter in retail. Our cleaning services help create a welcoming shopping environment that encourages customers to stay longer and return more often. We understand that a clean, well-maintained retail space directly impacts customer satisfaction and sales.',
      heroImageUrl: './assets/images/servicesImgs/retail.jpg',
      serviceItems: [
        { title: 'Floor Care and Maintenance', description: 'Professional floor cleaning, polishing, and maintenance', imageUrl: './assets/images/servicesImgs/floorCareMaintenance.jfif' },
        { title: 'Display Case and Fixture Cleaning', description: 'Thorough cleaning of display cases, fixtures, and shelving', imageUrl: './assets/images/servicesImgs/displayCaseFixtureCleaning.jfif' },
        { title: 'Restroom Maintenance', description: 'Regular cleaning, sanitization, and restocking of restroom facilities', imageUrl: './assets/images/servicesImgs/RestroomMaintenance.jfif' },
        { title: 'Entrance and Window Cleaning', description: 'Crystal clear windows and spotless entrances for maximum curb appeal', imageUrl: './assets/images/servicesImgs/entranceWindowCleaning.jfif' },
        { title: 'Trash Removal and Waste Management', description: 'Efficient trash removal and waste management services', imageUrl: './assets/images/servicesImgs/trashRemovalWasteManagement.jfif' },
        { title: 'High-Traffic Area Maintenance', description: 'Focused cleaning of high-traffic areas throughout the day', imageUrl: './assets/images/servicesImgs/high-TrafficAreaMaintenance.jfif' },
        { title: 'Seasonal Deep Cleaning', description: 'Comprehensive deep cleaning programs for seasonal maintenance', imageUrl: './assets/images/servicesImgs/seasonalDeepCleaning.jfif' },
        { title: 'Flexible Scheduling', description: 'Services scheduled around your business hours to minimize disruption', imageUrl: './assets/images/servicesImgs/FlexibleScheduling.jpeg' }
      ],
      facilityTypes: [],
      affiliations: ['ASA', 'NSA', 'WBENC']
    },
    {
      id: 'assisted-living-services',
      title: 'Assisted Living Services',
      slug: 'assisted-living-services',
      description: 'Compassionate and thorough cleaning for senior living communities',
      overview: 'Assisted living facilities require cleaning services that prioritize resident health and comfort.',
      mainHeading: 'Compassionate Cleaning for Senior Living',
      mainDescription: 'Assisted living facilities require cleaning services that prioritize resident health and comfort. Our team is trained to work sensitively in these environments while maintaining the highest cleanliness standards. We understand the unique needs of senior living communities and provide services that respect residents\' dignity and comfort.',
      heroImageUrl: './assets/images/servicesImgs/assistedServices.jpg',
      serviceItems: [
        { title: 'Resident Room Cleaning', description: 'Gentle, thorough cleaning and sanitization of resident rooms', imageUrl: './assets/images/servicesImgs/AssistedLivingServices.jfif' },
        { title: 'Common Area Maintenance', description: 'Regular cleaning of common areas, lounges, and gathering spaces', imageUrl: './assets/images/servicesImgs/commonAreaMaintenance.png' },
        { title: 'Dining Facility Cleaning', description: 'Comprehensive cleaning and sanitization of dining facilities', imageUrl: './assets/images/servicesImgs/diningFacilityCleaning.jpg' },
        { title: 'Laundry and Linen Services', description: 'Professional laundry and linen services for resident comfort', imageUrl: './assets/images/servicesImgs/laundry&LinenServices.jpg' },
        { title: 'Infection Control Protocols', description: 'Strict infection control protocols to protect resident health', imageUrl: './assets/images/servicesImgs/infectionControlProtocols.jfif' },
        { title: 'Gentle Cleaning Products', description: 'Use of gentle, non-irritating cleaning products safe for sensitive residents', imageUrl: './assets/images/servicesImgs/gentleCleaningProducts.jfif' },
        { title: 'Flexible Scheduling', description: 'Services scheduled around resident activities and routines', imageUrl: './assets/images/servicesImgs/SchedulingAssistedlivingServices.png' },
        { title: 'Emergency Response', description: 'Rapid response for spills, accidents, and urgent cleaning needs', imageUrl: './assets/images/servicesImgs/emergencyResponse.jfif' }
      ],
      facilityTypes: [
        { name: 'Assisted Living Facilities', icon: 'fas fa-home' },
        { name: 'Memory Care Units', icon: 'fas fa-brain' },
        { name: 'Independent Living Communities', icon: 'fas fa-users' },
        { name: 'Senior Apartments', icon: 'fas fa-building' },
        { name: 'Nursing Homes', icon: 'fas fa-hospital' }
      ],
      affiliations: ['ASA', 'NSA', 'WBENC']
    },
    {
      id: 'water-restoration',
      title: 'Water Restoration',
      slug: 'water-restoration',
      description: 'Rapid response water damage restoration and cleanup services',
      overview: 'Water damage requires immediate attention to prevent further damage and mold growth.',
      mainHeading: 'Rapid Water Damage Restoration and Cleanup',
      mainDescription: 'Water damage requires immediate attention to prevent further damage and mold growth. Our water restoration services provide rapid response and comprehensive restoration to get your facility back to normal quickly. We understand the urgency of water damage situations and provide 24/7 emergency response services.',
      heroImageUrl: './assets/images/servicesImgs/waterRestoration.jpeg',
      serviceItems: [
        { title: '24/7 Emergency Response', description: 'Round-the-clock emergency response for water damage situations', imageUrl: './assets/images/servicesImgs/emergencyResponse.png' },
        { title: 'Water Extraction and Removal', description: 'Rapid water extraction using professional-grade equipment', imageUrl: './assets/images/servicesImgs/waterExtraction&Removal.jfif' },
        { title: 'Structural Drying', description: 'Comprehensive structural drying and dehumidification services', imageUrl: './assets/images/servicesImgs/structuralDrying.jfif' },
        { title: 'Mold Prevention and Remediation', description: 'Expert mold prevention and remediation to protect your facility', imageUrl: './assets/images/servicesImgs/moldPrevention&Remediation.jfif' },
        { title: 'Content Restoration', description: 'Professional cleaning and restoration of damaged contents', imageUrl: './assets/images/servicesImgs/ContentRestoration.jpg' },
        { title: 'Odor Removal and Sanitization', description: 'Complete odor removal and sanitization services', imageUrl: './assets/images/servicesImgs/odorRemoval&Sanitization.png' },
        { title: 'Document and Equipment Recovery', description: 'Specialized recovery services for documents and equipment', imageUrl: './assets/images/servicesImgs/odorRemoval&Sanitization.png' },
        { title: 'Insurance Claim Assistance', description: 'Help with insurance claims and documentation', imageUrl: './assets/images/servicesImgs/insuranceClaimAssistance.jfif' }
      ],
      facilityTypes: [
        { name: 'K-12 Public Schools', icon: 'fas fa-apple-alt' },
        { name: 'K-12 Private Schools', icon: 'fas fa-globe' },
        { name: 'Colleges and Universities', icon: 'fas fa-landmark' },
        { name: 'Technical Schools', icon: 'fas fa-book' }
      ],
      affiliations: ['ASA', 'NSA', 'WBENC']
    }
  ];

  getServiceBySlug(slug: string): ServiceDetail | undefined {
    return this.services.find(service => service.slug === slug);
  }

  getAllServices(): ServiceDetail[] {
    return this.services;
  }

  getServiceById(id: string): ServiceDetail | undefined {
    return this.services.find(service => service.id === id);
  }
}
