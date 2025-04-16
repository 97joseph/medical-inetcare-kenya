/**
 * Kenya Medical Landscape Analysis
 * A comprehensive analysis of Kenya's healthcare guidelines, pharmaceutical landscape, and diagnostic capabilities
 */

// Enhanced Interfaces with additional metadata
interface KenyaMedicalGuideline {
    name: string;
    description: string;
    latestVersion?: string;
    publicationYear?: number;
    issuingBody: string;
    applicableRegions?: string[];
    implementationStatus?: 'Full' | 'Partial' | 'Planned';
    referenceLink?: string;
  }
  
  interface CommonDrug {
    name: string;
    genericName?: string;
    uses: string[];
    dosage?: string;
    contraindications?: string[];
    availability: 'Widespread' | 'Limited' | 'Specialized';
    costCategory?: 'Free' | 'Subsidized' | 'Full Price';
    stockOutFrequency?: 'Rare' | 'Occasional' | 'Frequent';
  }
  
  interface DiagnosticLimitation {
    category: string;
    description: string;
    mitigationStrategies?: string[];
    severity: 'Low' | 'Medium' | 'High';
    urbanCoverage?: number;
    ruralCoverage?: number;
  }
  
  interface KenyaMedicalContext {
    guidelines: KenyaMedicalGuideline[];
    commonDrugs: CommonDrug[];
    diagnosticLimitations: DiagnosticLimitation[];
    lastUpdated: Date;
  }
  
  const kenyaMedicalContext: KenyaMedicalContext = {
    guidelines: [
      {
        name: "Kenya Essential Medicines List (KEML)",
        description: "List of medicines considered to be most effective and safe to meet the most important needs in the health system",
        latestVersion: "2022",
        publicationYear: 2022,
        issuingBody: "Ministry of Health, Kenya",
        applicableRegions: ["All counties"],
        implementationStatus: "Full",
        referenceLink: "https://www.health.go.ke/keml"
      },
      {
        name: "Kenya Standard Treatment Guidelines",
        description: "Evidence-based guidelines for diagnosis and treatment of common conditions in Kenya",
        latestVersion: "6th Edition",
        publicationYear: 2021,
        issuingBody: "Ministry of Health, Kenya",
        implementationStatus: "Full",
        referenceLink: "https://www.health.go.ke/stg"
      },
      {
        name: "Kenya Expanded Programme on Immunization (KEPI)",
        description: "Guidelines for immunization schedules and vaccine management",
        latestVersion: "2023",
        publicationYear: 2023,
        issuingBody: "Division of Vaccines and Immunization",
        implementationStatus: "Full"
      },
      {
        name: "Kenya HIV Treatment Guidelines",
        description: "National guidelines for HIV prevention, treatment, and care",
        latestVersion: "2023",
        publicationYear: 2023,
        issuingBody: "National AIDS and STI Control Programme (NASCOP)",
        implementationStatus: "Full",
        referenceLink: "https://www.nascop.or.ke/guidelines"
      },
      {
        name: "Kenya Malaria Treatment Guidelines",
        description: "Guidelines for malaria diagnosis, treatment, and prevention",
        latestVersion: "2022",
        publicationYear: 2022,
        issuingBody: "Division of National Malaria Programme",
        applicableRegions: ["Malaria endemic regions"],
        implementationStatus: "Partial"
      },
      {
        name: "Kenya Tuberculosis Management Guidelines",
        description: "Guidelines for TB diagnosis, treatment, and infection control",
        latestVersion: "2023",
        publicationYear: 2023,
        issuingBody: "National Tuberculosis, Leprosy and Lung Disease Program",
        implementationStatus: "Full"
      },
      {
        name: "Kenya Mental Health Policy",
        description: "Guidelines for mental health care and psychotropic medications",
        latestVersion: "2015-2030",
        publicationYear: 2015,
        issuingBody: "Ministry of Health, Kenya",
        implementationStatus: "Partial"
      }
    ],
    
    commonDrugs: [
      {
        name: "Artemether-Lumefantrine (AL)",
        genericName: "Coartem",
        uses: ["Malaria treatment"],
        dosage: "Weight-based dosing (5-14kg: 1 tab, 15-24kg: 2 tabs, etc.)",
        contraindications: ["First trimester pregnancy", "Hypersensitivity"],
        availability: "Widespread",
        costCategory: "Free",
        stockOutFrequency: "Occasional"
      },
      {
        name: "Co-trimoxazole",
        genericName: "Trimethoprim/Sulfamethoxazole",
        uses: ["PCP prophylaxis in HIV patients", "Bacterial infections"],
        dosage: "480mg daily for prophylaxis",
        contraindications: ["Sulfa allergy", "Severe renal impairment"],
        availability: "Widespread",
        costCategory: "Subsidized"
      },
      {
        name: "Zinc sulfate",
        uses: ["Diarrhea management in children", "Zinc deficiency"],
        dosage: "20mg daily for 10-14 days for diarrhea",
        availability: "Widespread",
        costCategory: "Free"
      },
      {
        name: "Oral Rehydration Salts (ORS)",
        uses: ["Dehydration management", "Diarrhea treatment"],
        availability: "Widespread",
        costCategory: "Free",
        stockOutFrequency: "Rare"
      },
      {
        name: "Paracetamol",
        genericName: "Acetaminophen",
        uses: ["Fever", "Pain management"],
        dosage: "500mg every 6-8 hours for adults",
        contraindications: ["Severe liver disease"],
        availability: "Widespread",
        costCategory: "Subsidized"
      },
      {
        name: "Dolutegravir-based regimens",
        uses: ["First-line HIV treatment"],
        availability: "Widespread",
        contraindications: ["First trimester pregnancy (with caution)"],
        costCategory: "Free"
      },
      {
        name: "Amoxicillin",
        uses: ["Bacterial infections", "Pneumonia"],
        availability: "Widespread",
        costCategory: "Subsidized",
        stockOutFrequency: "Occasional"
      }
    ],
    
    diagnosticLimitations: [
      {
        category: "Imaging",
        description: "Limited CT/MRI availability in rural facilities, often only in county hospitals",
        mitigationStrategies: ["Clinical diagnosis", "Ultrasound as first-line", "Referral systems"],
        severity: "High",
        urbanCoverage: 85,
        ruralCoverage: 15
      },
      {
        category: "Laboratory",
        description: "Point-of-care tests often used for malaria/HIV due to limited lab capacity",
        mitigationStrategies: ["Rapid diagnostic tests", "Strengthening lab networks"],
        severity: "Medium",
        urbanCoverage: 75,
        ruralCoverage: 40
      },
      {
        category: "Pathology",
        description: "Limited histopathology services outside major centers",
        mitigationStrategies: ["Referral to national hospitals", "Telepathology initiatives"],
        severity: "High",
        urbanCoverage: 90,
        ruralCoverage: 5
      },
      {
        category: "Specialized Tests",
        description: "Limited availability of tests like PCR, viral load outside reference labs",
        mitigationStrategies: ["Sample referral systems", "Hub-and-spoke model"],
        severity: "Medium",
        urbanCoverage: 60,
        ruralCoverage: 10
      },
      {
        category: "Clinical Diagnosis",
        description: "Common where labs are unavailable, leading to syndromic management",
        severity: "Medium",
        urbanCoverage: 30,
        ruralCoverage: 70
      }
    ],
    
    lastUpdated: new Date(2023, 10, 15)
  };
  
  // Enhanced Utility Class with Analytical Functions
  class KenyaMedicalAnalyzer {
    // Basic access methods
    static getGuidelineByName(name: string): KenyaMedicalGuideline | undefined {
      return kenyaMedicalContext.guidelines.find(g => g.name === name);
    }
    
    static getDrugsByAvailability(availability: 'Widespread' | 'Limited' | 'Specialized'): CommonDrug[] {
      return kenyaMedicalContext.commonDrugs.filter(d => d.availability === availability);
    }
    
    static getHighSeverityLimitations(): DiagnosticLimitation[] {
      return kenyaMedicalContext.diagnosticLimitations.filter(l => l.severity === 'High');
    }
  
    // New analytical methods
    static getGuidelinesByStatus(status: 'Full' | 'Partial' | 'Planned'): KenyaMedicalGuideline[] {
      return kenyaMedicalContext.guidelines.filter(g => g.implementationStatus === status);
    }
  
    static getDrugStockOutAnalysis(): {frequent: number; occasional: number; rare: number} {
      const drugs = kenyaMedicalContext.commonDrugs;
      return {
        frequent: drugs.filter(d => d.stockOutFrequency === 'Frequent').length,
        occasional: drugs.filter(d => d.stockOutFrequency === 'Occasional').length,
        rare: drugs.filter(d => d.stockOutFrequency === 'Rare').length
      };
    }
  
    static getDiagnosticCoverageGap(): {category: string; urbanCoverage: number; ruralCoverage: number; gap: number}[] {
      return kenyaMedicalContext.diagnosticLimitations.map(l => ({
        category: l.category,
        urbanCoverage: l.urbanCoverage || 0,
        ruralCoverage: l.ruralCoverage || 0,
        gap: (l.urbanCoverage || 0) - (l.ruralCoverage || 0)
      })).sort((a, b) => b.gap - a.gap);
    }
  
    static getFreeDrugs(): CommonDrug[] {
      return kenyaMedicalContext.commonDrugs.filter(d => d.costCategory === 'Free');
    }
  
    static getGuidelinesUpdatedInLastYears(years: number): KenyaMedicalGuideline[] {
      const cutoffYear = new Date().getFullYear() - years;
      return kenyaMedicalContext.guidelines.filter(g => 
        g.publicationYear && g.publicationYear >= cutoffYear
      );
    }
  }
  
  // Example Usage with Comprehensive Analysis
  console.log("=== Kenya Medical Landscape Analysis Report ===");
  console.log(`Last Updated: ${kenyaMedicalContext.lastUpdated.toDateString()}`);
  
  console.log("\n1. Guideline Implementation Status:");
  const statusCounts = {
    full: KenyaMedicalAnalyzer.getGuidelinesByStatus('Full').length,
    partial: KenyaMedicalAnalyzer.getGuidelinesByStatus('Partial').length,
    planned: KenyaMedicalAnalyzer.getGuidelinesByStatus('Planned').length || 0
  };
  console.log(`- Fully implemented: ${statusCounts.full} guidelines`);
  console.log(`- Partially implemented: ${statusCounts.partial} guidelines`);
  if (statusCounts.planned > 0) {
    console.log(`- Planned for implementation: ${statusCounts.planned} guidelines`);
  }
  
  console.log("\n2. Drug Stock Analysis:");
  const stockAnalysis = KenyaMedicalAnalyzer.getDrugStockOutAnalysis();
  console.log(`- Frequently out of stock: ${stockAnalysis.frequent} drugs`);
  console.log(`- Occasionally out of stock: ${stockAnalysis.occasional} drugs`);
  console.log(`- Rarely out of stock: ${stockAnalysis.rare} drugs`);
  
  console.log("\n3. Diagnostic Coverage Gaps (Urban vs Rural):");
  const coverageGaps = KenyaMedicalAnalyzer.getDiagnosticCoverageGap();
  coverageGaps.forEach(gap => {
    console.log(`- ${gap.category}: Urban ${gap.urbanCoverage}% vs Rural ${gap.ruralCoverage}% (Gap: ${gap.gap}%)`);
  });
  
  console.log("\n4. Recently Updated Guidelines (Last 3 Years):");
  const recentGuidelines = KenyaMedicalAnalyzer.getGuidelinesUpdatedInLastYears(3);
  recentGuidelines.forEach(g => {
    console.log(`- ${g.name} (${g.publicationYear})`);
  });
  
  console.log("\n5. Free Essential Medicines:");
  const freeDrugs = KenyaMedicalAnalyzer.getFreeDrugs();
  console.log(`- ${freeDrugs.length} drugs available free of charge:`);
  freeDrugs.forEach(d => console.log(`  • ${d.name}`));
  
  console.log("\n=== End of Report ===");
  
  // Export for use in other modules
  export { KenyaMedicalGuideline, CommonDrug, DiagnosticLimitation, KenyaMedicalContext, kenyaMedicalContext, KenyaMedicalAnalyzer };