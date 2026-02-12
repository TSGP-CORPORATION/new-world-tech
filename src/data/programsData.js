// Program categories with courses - Base data
const baseProgramsData = [
  {
    id: 1,
    nameKey: "programs.renewableEnergyTitle",
    descKey: "programs.renewableEnergyDesc",
    category: "Energy",
    color: "#1a5f3a",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=400&fit=crop",
    durationKey: "programs.duration",
    entryConditionsKey: "programs.entryConditions",
    specialties: [
      { nameKey: "programs.solarPanelInstallation" },
      { nameKey: "programs.windEneergySystems" },
      { nameKey: "programs.energyManagement" }
    ]
  },
  {
    id: 2,
    nameKey: "programs.electricityTitle",
    descKey: "programs.electricityDesc",
    category: "Energy",
    color: "#1a5f3a",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&h=400&fit=crop",
    durationKey: "programs.duration",
    entryConditionsKey: "programs.entryConditions",
    specialties: [
      { nameKey: "programs.electricalWiring" },
      { nameKey: "programs.powerDistribution" },
      { nameKey: "programs.electricalSafety" }
    ]
  },
  {
    id: 3,
    nameKey: "programs.digitalMarketingTitle",
    descKey: "programs.digitalMarketingDesc",
    category: "Marketing",
    color: "#0369a1",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop",
    durationKey: "programs.duration",
    entryConditionsKey: "programs.entryConditions",
    specialties: [
      { nameKey: "programs.socialMediaMarketing" },
      { nameKey: "programs.seoSem" },
      { nameKey: "programs.contentStrategy" }
    ]
  },
  {
    id: 4,
    nameKey: "programs.generalComputingTitle",
    descKey: "programs.generalComputingDesc",
    category: "Information Technology",
    color: "#5b21b6",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop",
    durationKey: "programs.duration",
    entryConditionsKey: "programs.entryConditions",
    specialties: [
      { nameKey: "programs.operatingSystems" },
      { nameKey: "programs.networkAdministration" },
      { nameKey: "programs.databaseManagement" }
    ]
  },
  {
    id: 5,
    nameKey: "programs.graphicDesignTitle",
    descKey: "programs.graphicDesignDesc",
    category: "Design",
    color: "#7c2d12",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=400&fit=crop",
    durationKey: "programs.duration",
    entryConditionsKey: "programs.entryConditions",
    specialties: [
      { nameKey: "programs.adobeCreativeSuite" },
      { nameKey: "programs.uiuxDesign" },
      { nameKey: "programs.brandingLogoDesign" }
    ]
  },
  {
    id: 6,
    nameKey: "programs.surveillanceTitle",
    descKey: "programs.surveillanceDesc",
    category: "Security & Surveillance",
    color: "#155e75",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=500&h=400&fit=crop",
    durationKey: "programs.duration",
    entryConditionsKey: "programs.entryConditions",
    specialties: [
      { nameKey: "programs.cctvInstallation" },
      { nameKey: "programs.gpsTrackingSystems" },
      { nameKey: "programs.securityMonitoring" }
    ]
  },
  {
    id: 7,
    nameKey: "programs.webDesignTitle",
    descKey: "programs.webDesignDesc",
    category: "Web Development",
    color: "#0d9488",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=400&fit=crop",
    durationKey: "programs.duration",
    entryConditionsKey: "programs.entryConditions",
    specialties: [
      { nameKey: "programs.htmlCss" },
      { nameKey: "programs.javascript" },
      { nameKey: "programs.responsiveDesign" }
    ]
  },
  {
    id: 8,
    nameKey: "programs.bilingualTrainingTitle",
    descKey: "programs.bilingualTrainingDesc",
    category: "Language Training",
    color: "#ea580c",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=500&h=400&fit=crop",
    durationKey: "programs.duration",
    entryConditionsKey: "programs.entryConditions",
    specialties: [
      { nameKey: "programs.frenchLanguage" },
      { nameKey: "programs.englishLanguage" },
      { nameKey: "programs.businessCommunication" }
    ]
  }
];

// Function to get translated programs data
export const getProgramsData = (t) => {
  return baseProgramsData.map(program => ({
    ...program,
    name: t(program.nameKey),
    description: t(program.descKey),
    duration: t(program.durationKey),
    entryConditions: t(program.entryConditionsKey),
    specialties: program.specialties.map(specialty => ({
      name: t(specialty.nameKey)
    }))
  }));
};

// Keep the base data export for backward compatibility
export const programsData = baseProgramsData;

// Institution information
export const institutionInfo = {
  name: "Vocational Training Institute New World Technology (FIP NWT)",
  nameFr: "Institut de Formation Professionnelle New World Technology (IFP NWT)",
  promoter: "FUH RENE CHE",
  phone: "672 910 508",
  location: "Yaoundé",
  neighborhood: "Messassi Dispensaire"
};