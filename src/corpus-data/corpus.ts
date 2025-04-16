export interface KenyaClinicalVignette {
    masterIndex: number;
    county: string;
    healthLevel: string;
    prompt: string;
    nursingCompetency: string;
    clinicalPanel: string;
    clinicianResponse: string;
    gpt4Response: string;
    llamaResponse: string;
    geminiResponse: string;
    ddxSnomed: string;
  }
  
  export const sampleVignettes: KenyaClinicalVignette[] = [
    {
      masterIndex: 1,
      county: "Kiambu",
      healthLevel: "Sub-county Hospitals and Nursing Homes",
      prompt: "I am a nurse with 10 years of experience in General nursing working in a Sub-county Hospitals and Nursing Homes in Kiambu county in Kenya. A 28yrs old woman came to maternity unit with complains of lower abdominal pain, 38/40 weeks VE os closed..with no fetal heart heard. As a midwife which is the best mode of delivery CS or SVD?",
      nursingCompetency: "Maternal and Child Health",
      clinicalPanel: "OBSTETRICS AND GYNAECOLOGY",
      clinicianResponse: "Summary: 28 year old pregnant woman 38/40 weeks with complaints of lower abdominal pain. Vaginal examination - closed os. No fetal heart heard. DIAGNOSIS: Non reassuring fetal status. Q1 - Which is the best mode of delivery: obstetric ultrasound to confirm fetal status. Examine the mother to rule out absolute indications of a Cesarean section such as cephalopelvic disproportion, 2 previous scars. If no indications of a CS, induce labour for spontaneous vertex delivery",
      gpt4Response: "Given the clinical scenario, where the patient is a 28-year-old woman at 38 weeks gestation presenting with lower abdominal pain, no fetal heart sounds heard, and a closed cervix (as indicated by the vaginal exam), the management approach requires careful consideration... Based on the information provided, cesarean section (CS) would likely be the safest mode of delivery in this situation...",
      llamaResponse: "Based on the information you've provided, I would recommend a Caesarean Section (CS) as the best mode of delivery for this patient. The fact that the fetal heart rate is not audible is a concerning sign, and in the absence of any other information, it's prudent to assume that the fetus may be in distress...",
      geminiResponse: "Given the scenario: a 28-year-old woman at 38-40 weeks gestation presenting with lower abdominal pain, a closed cervix, and absent fetal heart tones, a Cesarean Section (CS) is the best mode of delivery. The absence of fetal heart tones is a critical finding indicating fetal distress or demise...",
      ddxSnomed: "289909005 | Labor, function (observable entity) \n871479001 | Uncertain presentation of fetus (finding)\n199112006 | Infections of the genital tract in pregnancy (disorder)"
    },
    {
      masterIndex: 2,
      county: "Kakamega",
      healthLevel: "Dispensaries and Private Clinics",
      prompt: "I am a nurse with 2 years of experience in General nursing working in a Dispensaries and Private Clinics in Kakamega county in Kenya. A three-month-old baby brought to the facility for immunization, which is due today. On exam, the baby was pale and febrile. The baby was crying a lot. Should I treat the baby first or just give the vaccine and treat later?",
      nursingCompetency: "Child Health",
      clinicalPanel: "PAEDIATRICS",
      clinicianResponse: "Summary: A 3 month old baby was brought to the facility for immunization. The baby was crying a lot. On examination, the baby was pale and febrile. So the question is, should I treat the baby first or just give the vaccine and treat later? Treat the baby first, then give the vaccine later.",
      gpt4Response: "In this case, the baby's condition (pale, febrile, and crying a lot) suggests that there may be an underlying illness that requires urgent attention before proceeding with the immunization... You should not give the vaccine immediately without addressing the baby's current health status. Treating the underlying cause of the fever and pallor should be the priority...",
      llamaResponse: "As a professor of primary healthcare in Kenya, I'd be happy to guide you on this. According to the Kenya Expanded Programme on Immunization (KEPI) guidelines, immunization should be delayed in certain situations, including when the child is severely ill or has a high fever...",
      geminiResponse: "You should absolutely NOT give the vaccine first. A pale, febrile, and crying three-month-old baby is showing signs of illness. Administering a vaccine while the baby is unwell could potentially worsen their condition and even be unsafe...",
      ddxSnomed: "271749004 | Acute rise of fever (finding)\n61462000 | Malaria (disorder)\n91302008 | Sepsis (disorder)\n434021000124109 | At risk for anemia (finding)"
    },
    {
      masterIndex: 3,
      county: "Nairobi",
      healthLevel: "National Referral Hospital",
      prompt: "I am a nurse with 5 years of experience in Emergency nursing working at a National Referral Hospital in Nairobi county. A 45-year-old male was rushed in with severe chest pain radiating to the left arm, sweating profusely, and BP 90/60. ECG shows ST elevation in leads II, III, and aVF. What immediate interventions should I prioritize?",
      nursingCompetency: "Emergency Care",
      clinicalPanel: "CRITICAL CARE",
      clinicianResponse: "Summary: 45-year-old male with STEMI (inferior wall). Immediate priorities: 1) Administer aspirin 325mg chewed, 2) Start oxygen if SpO2 <90%, 3) Obtain IV access, 4) Give sublingual nitroglycerin if BP permits, 5) Prepare for thrombolysis or PCI, 6) Monitor vitals continuously, 7) Provide pain relief with morphine if needed.",
      gpt4Response: "This patient is presenting with classic symptoms of an acute inferior STEMI. The immediate priorities should be: 1) Activate the cardiac catheterization team if PCI is available, 2) Administer dual antiplatelet therapy (aspirin + clopidogrel), 3) Consider thrombolysis if PCI not available within 90 minutes, 4) Monitor for complications like arrhythmias or cardiogenic shock...",
      llamaResponse: "In this emergency situation, time is muscle. You should immediately: 1) Give aspirin 300mg, 2) Start MONA protocol (Morphine, Oxygen, Nitrates, Aspirin), 3) Prepare for reperfusion therapy, either through thrombolysis with streptokinase or primary PCI depending on hospital capabilities, 4) Monitor closely for bradycardia which is common in inferior MI...",
      geminiResponse: "Critical actions needed now: 1) Call the cardiology team immediately, 2) Administer aspirin 325mg chewed, 3) Start IV line and draw cardiac enzymes, 4) Give nitroglycerin if systolic BP >90mmHg, 5) Prepare for reperfusion therapy - thrombolysis with tenecteplase if PCI not available within 120 minutes. Watch for RV infarction which is common in inferior STEMI...",
      ddxSnomed: "57054005 | Acute myocardial infarction (disorder)\n410429000 | Inferior wall myocardial infarction (disorder)\n194828000 | Coronary atherosclerosis (disorder)\n315025001 | Cardiogenic shock (disorder)"
    },
    {
      masterIndex: 4,
      county: "Mombasa",
      healthLevel: "County Hospital",
      prompt: "I am a nurse with 3 years of experience in Medical-Surgical nursing working at a County Hospital in Mombasa. A 30-year-old HIV-positive female presents with 3 weeks of productive cough, night sweats, and weight loss. Sputum is blood-tinged. Chest X-ray shows upper lobe infiltrates with cavitation. How should I proceed?",
      nursingCompetency: "Adult Health",
      clinicalPanel: "GENERAL MEDICINE",
      clinicianResponse: "Summary: 30-year-old HIV+ female with symptoms suggestive of pulmonary TB. Immediate actions: 1) Place patient in respiratory isolation, 2) Collect 3 sputum samples for AFB microscopy and GeneXpert, 3) Start TB treatment if high clinical suspicion while awaiting results, 4) Assess HIV viral load and CD4 count, 5) Screen for other opportunistic infections.",
      gpt4Response: "This presentation is highly suspicious for active pulmonary tuberculosis in an HIV-positive patient. Key steps: 1) Implement airborne precautions immediately, 2) Order sputum for AFB smear, culture, and GeneXpert MTB/RIF, 3) Initiate 4-drug TB regimen (RHZE) if clinical suspicion is high, 4) Assess ART status and consider drug interactions, 5) Evaluate for extrapulmonary TB...",
      llamaResponse: "As per Kenya TB guidelines: 1) Isolate patient immediately, 2) Collect spot-morning-spot sputum samples, 3) Start empiric TB treatment if GeneXpert is positive for MTB or if clinical suspicion is very high, 4) Ensure patient is on ART if not already, 5) Monitor for IRIS if recently started ART, 6) Provide nutritional support and contact tracing...",
      geminiResponse: "This is a classic TB presentation in an HIV patient. Critical actions: 1) Airborne isolation immediately, 2) Sputum for AFB and GeneXpert, 3) Start TB treatment today if index of suspicion is high (RHZE regimen), 4) Check ART adherence and regimen, 5) Screen household contacts, 6) Provide TB infection control education to family...",
      ddxSnomed: "154283005 | Pulmonary tuberculosis (disorder)\n86406008 | HIV infection (disorder)\n109838007 | Opportunistic infection (disorder)\n26929004 | Cavitary lesion of lung (finding)"
    },
    {
      masterIndex: 5,
      county: "Kisumu",
      healthLevel: "Health Centre",
      prompt: "I am a nurse with 4 years of experience in Pediatric nursing working at a Health Centre in Kisumu county. A 2-year-old child presents with diarrhea for 5 days, sunken eyes, poor skin turgor, and is lethargic. Mother says child passes watery stool about 8 times/day and vomits everything. How should I manage this case?",
      nursingCompetency: "Child Health",
      clinicalPanel: "PAEDIATRICS",
      clinicianResponse: "Summary: 2-year-old with severe dehydration from acute gastroenteritis. Management: 1) Immediately start IV fluids (Normal saline or Ringer's lactate) for severe dehydration, 2) Assess for signs of shock, 3) After initial rehydration, switch to ORS, 4) Continue breastfeeding, 5) Give zinc supplementation, 6) Monitor input/output, 7) Assess for complications like electrolyte imbalance.",
      gpt4Response: "This child shows signs of severe dehydration requiring urgent intervention: 1) Start IV fluids immediately (20ml/kg bolus of normal saline), 2) Assess for signs of septic shock, 3) After initial resuscitation, calculate fluid deficit and replace over 24 hours, 4) Start ORS as soon as child can tolerate, 5) Give zinc 20mg daily for 14 days, 6) Monitor for hypokalemia and hypoglycemia...",
      llamaResponse: "Following IMCI guidelines: 1) This is severe dehydration - give IV fluids immediately (30ml/kg in first hour), 2) Reassess every 15-30 minutes, 3) Once perfusion improves, switch to ORS, 4) Continue feeding (breastmilk or age-appropriate foods), 5) Administer zinc, 6) Educate mother on danger signs to watch for, 7) Consider antibiotics only if bloody diarrhea or suspected cholera...",
      geminiResponse: "Emergency management needed: 1) Insert IV line immediately and give fluid bolus, 2) Check blood glucose, 3) Assess for septic shock, 4) After initial resuscitation, calculate full dehydration correction (100ml/kg for severe dehydration), 5) Start ORS as soon as possible, 6) Give zinc supplementation, 7) Monitor urine output closely...",
      ddxSnomed: "87628006 | Acute gastroenteritis (disorder)\n80394007 | Severe dehydration (disorder)\n248595008 | Rotavirus infection (disorder)\n111930002 | Hypovolemic shock (disorder)"
    },
    {
      masterIndex: 6,
      county: "Nakuru",
      healthLevel: "Sub-county Hospital",
      prompt: "I am a nurse with 7 years of experience in Midwifery working at a Sub-county Hospital in Nakuru. A 19-year-old primigravida at 32 weeks gestation presents with severe headache, blurred vision, and epigastric pain. BP is 160/110, 3+ proteinuria. What is the priority management?",
      nursingCompetency: "Maternal and Child Health",
      clinicalPanel: "OBSTETRICS AND GYNAECOLOGY",
      clinicianResponse: "Summary: 19-year-old primigravida with severe pre-eclampsia. Immediate actions: 1) Admit to high dependency unit, 2) Start IV magnesium sulfate loading dose for seizure prophylaxis, 3) Control BP with hydralazine or labetalol, 4) Monitor fetal heart rate, 5) Prepare for possible delivery - the definitive treatment, 6) Monitor for complications like eclampsia or HELLP syndrome.",
      gpt4Response: "This is severe pre-eclampsia with neurological symptoms (HEADACHE acronym). Critical actions: 1) Immediate magnesium sulfate loading dose (4g IV over 15-20 mins then maintenance), 2) Lower BP carefully (target 140-150/90-100), 3) Strict fluid balance (risk of pulmonary edema), 4) Continuous fetal monitoring, 5) Prepare for delivery after maternal stabilization, 6) Monitor labs for HELLP syndrome...",
      llamaResponse: "Following Kenya maternity guidelines: 1) This is an obstetric emergency - call senior staff immediately, 2) Start magnesium sulfate protocol, 3) Give antihypertensives to lower BP gradually, 4) Restrict fluids to 80ml/hr, 5) Prepare for delivery - may need cesarean section, 6) Monitor for seizures (have emergency tray ready), 7) Check platelets, LFTs, and renal function...",
      geminiResponse: "Emergency management required: 1) Magnesium sulfate immediately (loading dose 4g IV), 2) Labetalol 20mg IV for hypertension, 3) Limit IV fluids (risk of pulmonary edema), 4) Continuous maternal and fetal monitoring, 5) Plan for delivery within 24 hours - consult obstetrician, 6) Monitor for complications like placental abruption or renal failure...",
      ddxSnomed: "398254007 | Pre-eclampsia (disorder)\n237510007 | Severe pre-eclampsia (disorder)\n198941000 | HELLP syndrome (disorder)\n84017003 | Eclampsia (disorder)"
    },
    {
      masterIndex: 7,
      county: "Uasin Gishu",
      healthLevel: "County Hospital",
      prompt: "I am a nurse with 6 years of experience in Medical nursing working at a County Hospital in Uasin Gishu. A 50-year-old diabetic male presents with a 2-day history of severe right foot pain, swelling, and black discoloration of toes. He has fever and the foot is warm with crepitus on palpation. What should I do?",
      nursingCompetency: "Adult Health",
      clinicalPanel: "GENERAL MEDICINE",
      clinicianResponse: "Summary: 50-year-old diabetic with likely necrotizing fasciitis or wet gangrene. Immediate actions: 1) Start broad-spectrum IV antibiotics (cover for gram +ve, -ve and anaerobes), 2) Immediate surgical consult for debridement, 3) Control blood glucose aggressively, 4) Pain management, 5) Mark extent of infection, 6) Prepare for possible amputation, 7) Monitor for sepsis.",
      gpt4Response: "This diabetic patient has a limb-threatening infection requiring emergency care: 1) Immediate IV antibiotics (piperacillin-tazobactam plus clindamycin), 2) STAT surgical evaluation for debridement, 3) Tight glycemic control (target 140-180mg/dL), 4) IV fluids for sepsis if present, 5) Imaging (X-ray to check for gas, MRI if available), 6) Monitor for systemic toxicity, 7) Prepare for possible amputation...",
      llamaResponse: "Following diabetic foot guidelines: 1) This is a surgical emergency - call surgeon immediately, 2) Start empiric antibiotics (cover for polymicrobial infection), 3) Control blood sugar (start insulin drip if needed), 4) Mark advancing erythema, 5) Get X-ray to rule out osteomyelitis, 6) Prepare patient for possible amputation, 7) Educate on foot care post-recovery...",
      geminiResponse: "Critical actions needed: 1) IV antibiotics immediately (meropenem + clindamycin), 2) Surgical consult STAT for debridement, 3) Insulin drip for glycemic control, 4) Pain control, 5) Monitor for septic shock, 6) Consider imaging to assess depth of infection, 7) Prepare patient psychologically for possible limb loss...",
      ddxSnomed: "442430007 | Necrotizing fasciitis (disorder)\n399912005 | Diabetic foot ulcer (disorder)\n87628006 | Gangrene (disorder)\n91302008 | Sepsis (disorder)"
    },
    {
      masterIndex: 8,
      county: "Kilifi",
      healthLevel: "Dispensary",
      prompt: "I am a nurse with 1 year of experience working at a Dispensary in Kilifi county. A 5-year-old child is brought with high fever, headache, and now having convulsions. On exam, neck stiffness is present. Malaria RDT is positive. How should I manage this case?",
      nursingCompetency: "Child Health",
      clinicalPanel: "PAEDIATRICS",
      clinicianResponse: "Summary: 5-year-old with cerebral malaria and meningismus. Management: 1) Immediate IV artesunate for severe malaria, 2) Manage ABCs, 3) Control seizures with IV diazepam or rectal paraldehyde, 4) Check blood glucose, 5) Start IV fluids carefully (risk of cerebral edema), 6) Monitor for complications like coma or respiratory arrest, 7) Consider lumbar puncture if meningitis suspected after stabilization.",
      gpt4Response: "This child has severe malaria with neurological involvement: 1) Immediate IV artesunate (2.4mg/kg now, then at 12h and 24h), 2) Manage airway during seizures, 3) Check blood sugar (treat hypoglycemia if present), 4) Cautious IV hydration, 5) Monitor for raised ICP, 6) Consider broad-spectrum antibiotics until meningitis ruled out, 7) Prepare for referral if no improvement...",
      llamaResponse: "Following Kenya malaria guidelines: 1) This is severe malaria - give IV artesunate immediately, 2) Manage seizures with benzodiazepines, 3) Check glucose and treat if low, 4) Nurse in recovery position, 5) Avoid overhydration, 6) Monitor coma depth using Blantyre scale, 7) Consider coexisting meningitis if no improvement after antimalarials...",
      geminiResponse: "Emergency management: 1) IV artesunate STAT for severe malaria, 2) Position child to protect airway during seizures, 3) Rectal diazepam for active seizures, 4) Check blood sugar immediately, 5) Start maintenance IV fluids (restrict to 2/3 maintenance), 6) Monitor for respiratory depression, 7) Prepare for referral if condition worsens...",
      ddxSnomed: "61462000 | Malaria (disorder)\n128171000119108 | Cerebral malaria (disorder)\n84757009 | Meningitis (disorder)\n91175000 | Febrile seizure (disorder)"
    },
    {
      masterIndex: 9,
      county: "Kericho",
      healthLevel: "Health Centre",
      prompt: "I am a nurse with 3 years of experience in Community Health working at a Health Centre in Kericho county. A 60-year-old male known hypertensive presents with sudden onset left-sided weakness and slurred speech for 2 hours. BP is 190/110. What are the immediate actions?",
      nursingCompetency: "Adult Health",
      clinicalPanel: "GENERAL MEDICINE",
      clinicianResponse: "Summary: 60-year-old with likely acute stroke. Immediate actions: 1) Perform rapid assessment (FAST criteria), 2) Check glucose, 3) Control BP carefully (target <185/110 if thrombolysis candidate), 4) Position patient safely, 5) Prepare for possible thrombolysis if within window period, 6) Monitor neurological status, 7) Arrange urgent CT scan if available.",
      gpt4Response: "This is a probable acute ischemic stroke: 1) Perform NIHSS if trained, 2) Check blood glucose, 3) Lower BP gradually if >220/120 (avoid precipitous drops), 4) Keep NPO until swallow evaluation, 5) Determine last known well time for thrombolysis eligibility, 6) Arrange emergent brain imaging, 7) Monitor for stroke progression...",
      llamaResponse: "Following stroke protocol: 1) This is time-sensitive - act quickly, 2) Assess time of symptom onset, 3) Check blood sugar, 4) Control BP cautiously (labetalol or nicardipine if needed), 5) Position head flat if not contraindicated, 6) Prepare for possible rtPA if within 4.5 hours, 7) Monitor for hemorrhagic conversion...",
      geminiResponse: "Critical actions: 1) Determine last known normal time, 2) Check glucose immediately, 3) Control BP carefully (target <185/110 if considering thrombolysis), 4) Keep patient supine, 5) Nothing by mouth, 6) Arrange urgent CT scan, 7) Consult neurology if available, 8) Monitor for neurological deterioration...",
      ddxSnomed: "230690007 | Cerebral infarction (disorder)\n50490007 | Intracerebral hemorrhage (disorder)\n38341003 | Hypertensive crisis (disorder)\n26929004 | Transient ischemic attack (disorder)"
    },
    {
      masterIndex: 10,
      county: "Bungoma",
      healthLevel: "Sub-county Hospital",
      prompt: "I am a nurse with 4 years of experience in Pediatric nursing working at a Sub-county Hospital in Bungoma. A 9-month-old infant presents with severe acute malnutrition (weight-for-length Z-score <-3), edema of both feet, and is lethargic. How should I manage this case?",
      nursingCompetency: "Child Health",
      clinicalPanel: "PAEDIATRICS",
      clinicianResponse: "Summary: 9-month-old with severe acute malnutrition with complications. Management: 1) Admit to inpatient unit, 2) Treat hypoglycemia if present, 3) Start IV antibiotics (ampicillin + gentamicin), 4) Begin F-75 therapeutic milk slowly, 5) Correct electrolyte imbalances, 6) Monitor for refeeding syndrome, 7) Warm the child (kangaroo care), 8) Treat for malaria if febrile, 9) Start vitamin and mineral supplementation.",
      gpt4Response: "This child has kwashiorkor with complications requiring careful management: 1) Admit immediately, 2) Treat infections empirically, 3) Start F-75 at reduced volume (100ml/kg/day), 4) Correct hypoglycemia and hypothermia, 5) Monitor for heart failure (fluid overload risk), 6) Give vitamin A and other micronutrients, 7) Transition to F-100 after appetite returns, 8) Involve nutritionist for long-term planning...",
      llamaResponse: "Following IMAM guidelines: 1) This is SAM with complications - admit to stabilization center, 2) Treat infections presumptively, 3) Start cautious feeding with F-75, 4) Correct electrolyte imbalances (especially low potassium), 5) Monitor for refeeding syndrome, 6) Provide warmth, 7) Begin psychosocial stimulation, 8) Educate mother on proper feeding practices...",
      geminiResponse: "Emergency management: 1) Admit to inpatient care, 2) Treat infections (ampicillin + gentamicin), 3) Start F-75 at 100ml/kg/day divided into 8 feeds, 4) Correct hypoglycemia if present, 5) Monitor for signs of heart failure, 6) Give vitamin A and zinc, 7) Prepare mother for long-term nutritional rehabilitation...",
      ddxSnomed: "441931000124102 | Severe acute malnutrition with edema (disorder)\n102871000119105 | Kwashiorkor (disorder)\n102881000119108 | Marasmus (disorder)\n102861000119101 | Protein-energy malnutrition (disorder)"
    },
    // Additional cases 11-20 would continue in the same pattern
    {
      masterIndex: 11,
      county: "Machakos",
      healthLevel: "County Hospital",
      prompt: "I am a nurse with 5 years of experience in Emergency nursing working at a County Hospital in Machakos. A 35-year-old motorcycle accident victim is brought in with an open fracture of the right tibia, bleeding actively, and appears pale with BP 85/50. What are the priorities?",
      nursingCompetency: "Emergency Care",
      clinicalPanel: "CRITICAL CARE",
      clinicianResponse: "Summary: 35-year-old with traumatic hemorrhage and shock. Immediate priorities: 1) Control bleeding with direct pressure, 2) Start 2 large-bore IV lines, 3) Begin fluid resuscitation with crystalloids, 4) Crossmatch blood, 5) Splint fracture, 6) Give IV antibiotics for open fracture, 7) Monitor for compartment syndrome, 8) Prepare for surgical intervention.",
      gpt4Response: "This is hemorrhagic shock from trauma: 1) Apply tourniquet if direct pressure fails, 2) Start massive transfusion protocol if available, 3) Give tranexamic acid within 3 hours of injury, 4) Monitor for signs of ongoing hemorrhage, 5) Assess for other injuries (secondary survey), 6) Give tetanus prophylaxis, 7) Prepare for OR for wound debridement and fixation...",
      llamaResponse: "Following ATLS protocol: 1) ABCDE approach - control hemorrhage immediately, 2) Start aggressive fluid resuscitation, 3) Type and cross for 4 units PRBCs, 4) Splint fracture after controlling bleed, 5) Give broad-spectrum antibiotics (ceftriaxone + metronidazole), 6) Monitor urine output, 7) Prepare for emergency surgery...",
      geminiResponse: "Critical actions: 1) Stop bleeding immediately (tourniquet if needed), 2) Start 2 large-bore IVs, 3) Begin blood transfusion if available, 4) Give tranexamic acid 1g IV, 5) Splint fracture, 6) Monitor for signs of worsening shock, 7) Prepare for emergency OR for debridement and fixation...",
      ddxSnomed: "127295002 | Open fracture of tibia (disorder)\n22298006 | Hemorrhagic shock (disorder)\n30021000119105 | Traumatic hemorrhage (disorder)\n262519003 | Compartment syndrome (disorder)"
    },
    {
      masterIndex: 12,
      county: "Kitui",
      healthLevel: "Health Centre",
      prompt: "I am a nurse with 2 years of experience working at a Health Centre in Kitui county. A 25-year-old postpartum woman (delivered 3 days ago) presents with high fever, uterine tenderness, and foul-smelling lochia. What is the likely diagnosis and management?",
      nursingCompetency: "Maternal and Child Health",
      clinicalPanel: "OBSTETRICS AND GYNAECOLOGY",
      clinicianResponse: "Summary: 25-year-old with puerperal sepsis. Management: 1) Start IV antibiotics (gentamicin + clindamycin + ampicillin), 2) Obtain CBC and blood cultures, 3) Perform pelvic exam to assess for retained products, 4) Provide pain relief, 5) Monitor for septic shock, 6) Consider ultrasound if retained products suspected, 7) Continue breastfeeding if possible, 8) Educate on wound care.",
      gpt4Response: "This is postpartum endometritis: 1) Start IV antibiotics covering polymicrobial organisms (gram +ve, -ve and anaerobes), 2) Check for retained placental fragments, 3) Monitor for signs of septic shock, 4) Provide antipyretics, 5) Encourage uterine drainage (may give misoprostol), 6) Consider pelvic ultrasound, 7) Continue breastfeeding to help uterine involution...",
      llamaResponse: "Following postpartum infection guidelines: 1) Start IV antibiotics immediately (gentamicin + metronidazole + ampicillin), 2) Obtain cultures if possible, 3) Check for retained products (manual removal may be needed), 4) Monitor vital signs closely, 5) Provide supportive care, 6) Educate on danger signs, 7) Consider referral if no improvement in 48 hours...",
      geminiResponse: "Emergency management: 1) IV antibiotics STAT (ceftriaxone + metronidazole), 2) Assess for retained products, 3) Monitor for septic shock, 4) Provide pain control, 5) Hydrate aggressively, 6) Consider ultrasound, 7) Prepare for possible evacuation if retained products, 8) Educate on proper perineal hygiene...",
      ddxSnomed: "28944009 | Endometritis (disorder)\n39848009 | Puerperal sepsis (disorder)\n237072002 | Retained products of conception (disorder)\n91302008 | Sepsis (disorder)"
    },
    {
      masterIndex: 13,
      county: "Garissa",
      healthLevel: "Dispensary",
      prompt: "I am a nurse with 1 year of experience working at a Dispensary in Garissa county. A 40-year-old female presents with progressive difficulty swallowing both solids and liquids over 6 months, weight loss, and regurgitation of undigested food. What could be the cause and how to proceed?",
      nursingCompetency: "Adult Health",
      clinicalPanel: "GENERAL MEDICINE",
      clinicianResponse: "Summary: 40-year-old with symptoms suggestive of achalasia. Management: 1) Refer for upper endoscopy and barium swallow, 2) Provide nutritional support, 3) Consider trial of calcium channel blockers for symptom relief, 4) Monitor weight, 5) Elevate head during sleep, 6) Prepare patient for possible pneumatic dilation or surgical myotomy as definitive treatment.",
      gpt4Response: "This classic presentation suggests achalasia: 1) Urgent referral for diagnostic testing (endoscopy first to rule out malignancy), 2) Barium swallow will show 'bird's beak' appearance, 3) Manometry is gold standard, 4) Temporary relief with nitrates or calcium channel blockers, 5) Definitive treatment is Heller myotomy or pneumatic dilation, 6) Monitor for aspiration risk...",
      llamaResponse: "Following dysphagia protocol: 1) This requires specialist evaluation, 2) Rule out esophageal cancer first (urgent endoscopy), 3) Barium swallow will help diagnose achalasia, 4) Provide liquid nutrition in meantime, 5) Consider isosorbide dinitrate for symptom relief, 6) Prepare patient for possible surgical intervention, 7) Monitor for aspiration pneumonia...",
      geminiResponse: "Key actions: 1) Refer urgently for endoscopy to rule out malignancy, 2) Arrange barium swallow, 3) Start nutritional support (liquid meals), 4) Consider nifedipine for temporary relief, 5) Educate on eating slowly with fluids, 6) Prepare for possible Botox injection or dilation procedure, 7) Monitor for weight loss complications...",
      ddxSnomed: "5368000 | Achalasia (disorder)\n363349007 | Esophageal motility disorder (disorder)\n269576004 | Esophageal stricture (disorder)\n363418001 | Esophageal carcinoma (disorder)"
    },
    {
      masterIndex: 14,
      county: "Nyeri",
      healthLevel: "Sub-county Hospital",
      prompt: "I am a nurse with 3 years of experience in Pediatric nursing working at a Sub-county Hospital in Nyeri. A 6-year-old presents with sudden onset of petechial rash, fever, and neck stiffness. The rash doesn't blanch on pressure. What is the emergency management?",
      nursingCompetency: "Child Health",
      clinicalPanel: "PAEDIATRICS",
      clinicianResponse: "Summary: 6-year-old with suspected meningococcal meningitis. Immediate actions: 1) Isolate patient, 2) Start IV ceftriaxone immediately, 3) Give IV dexamethasone if available, 4) Manage ABCs, 5) Monitor for signs of shock, 6) Notify public health authorities, 7) Prophylaxis for close contacts, 8) Prepare for possible ICU care if condition deteriorates.",
      gpt4Response: "This is bacterial meningitis until proven otherwise: 1) STAT IV antibiotics (ceftriaxone or penicillin), 2) Consider dexamethasone before or with first antibiotic dose, 3) Fluid resuscitation if signs of shock, 4) Monitor for raised ICP, 5) Notify infection control, 6) Chemoprophylaxis for close contacts (rifampin or ciprofloxacin), 7) Prepare for possible intubation if decreased consciousness...",
      llamaResponse: "Following meningitis protocol: 1) This is a medical emergency - give IV ceftriaxone immediately, 2) Consider IV dexamethasone, 3) Monitor for septic shock, 4) Isolate patient, 5) Notify district surveillance officer, 6) Provide prophylaxis to household contacts within 24 hours, 7) Prepare for possible complications like DIC or seizures...",
      geminiResponse: "Emergency actions: 1) IV antibiotics within 30 minutes (ceftriaxone 80mg/kg), 2) IV dexamethasone if available, 3) Monitor for septic shock, 4) Isolate patient, 5) Alert public health authorities, 6) Provide chemoprophylaxis to close contacts, 7) Prepare for possible ICU transfer, 8) Monitor for neurological complications...",
      ddxSnomed: "87628006 | Meningococcal meningitis (disorder)\n84757009 | Meningitis (disorder)\n111930002 | Septic shock (disorder)\n169826008 | Petechiae (finding)"
    },
    {
      masterIndex: 15,
      county: "Meru",
      healthLevel: "County Hospital",
      prompt: "I am a nurse with 5 years of experience in Medical nursing working at a County Hospital in Meru. A 55-year-old male with history of alcohol use presents with hematemesis and melena. BP is 90/60, pulse 120. What is the immediate management?",
      nursingCompetency: "Adult Health",
      clinicalPanel: "GENERAL MEDICINE",
      clinicianResponse: "Summary: 55-year-old with upper GI bleed and hypovolemic shock. Immediate actions: 1) Start 2 large-bore IV lines, 2) Begin fluid resuscitation with crystalloids, 3) Crossmatch blood, 4) Insert NG tube to assess bleeding, 5) Start IV PPI (pantoprazole), 6) Monitor for signs of continued bleeding, 7) Prepare for endoscopy, 8) Correct coagulopathy if present.",
      gpt4Response: "This is acute variceal bleeding until proven otherwise: 1) Secure airway if massive hematemesis, 2) Large-bore IV access, 3) Begin blood transfusion if available, 4) Start IV octreotide if varices suspected, 5) IV PPI, 6) Consider Sengstaken tube if uncontrolled bleeding, 7) Arrange urgent endoscopy, 8) Correct coagulopathy (vitamin K if liver disease)...",
      llamaResponse: "Following GI bleed protocol: 1) This is life-threatening - act quickly, 2) Two large-bore IVs, 3) Fluid resuscitate with crystalloids, 4) Type and cross for 4 units PRBCs, 5) Start IV PPI drip, 6) Consider IV octreotide if cirrhosis suspected, 7) Prepare for emergent endoscopy, 8) Monitor for rebleeding...",
      geminiResponse: "Critical actions: 1) Secure airway if compromised, 2) Two large-bore IVs, 3) Begin blood transfusion immediately, 4) Start IV PPI, 5) Consider IV octreotide, 6) Insert NG tube to assess bleeding, 7) Arrange urgent endoscopy, 8) Monitor for signs of continued hemorrhage...",
      ddxSnomed: "74474003 | Upper gastrointestinal hemorrhage (disorder)\n235595009 | Esophageal varices with bleeding (disorder)\n429040005 | Peptic ulcer hemorrhage (disorder)\n22298006 | Hemorrhagic shock (disorder)"
    },
    {
      masterIndex: 16,
      county: "Tharaka-Nithi",
      healthLevel: "Health Centre",
      prompt: "I am a nurse with 2 years of experience working at a Health Centre in Tharaka-Nithi county. A 30-year-old female presents with painful genital ulcers and inguinal lymphadenopathy. She reports unprotected sex 2 weeks ago. What is the likely diagnosis and management?",
      nursingCompetency: "Adult Health",
      clinicalPanel: "GENERAL MEDICINE",
      clinicianResponse: "Summary: 30-year-old with likely genital herpes or syphilis. Management: 1) Perform STI screening (HIV, syphilis, HSV PCR if available), 2) Start empiric treatment (acyclovir for HSV or benzathine penicillin for syphilis based on clinical suspicion), 3) Provide pain relief, 4) Counsel on safe sex, 5) Treat sexual partners, 6) Follow up for test results, 7) Screen for other STIs.",
      gpt4Response: "This presentation suggests HSV or primary syphilis: 1) Dark-field microscopy if available for syphilis, 2) HSV PCR if possible, 3) Empiric acyclovir for likely HSV, 4) Benzathine penicillin if syphilis suspected, 5) Comprehensive STI screening, 6) Pain management (lidocaine gel, NSAIDs), 7) Partner notification and treatment, 8) HIV testing and counseling...",
      llamaResponse: "Following STI guidelines: 1) This requires syndromic management, 2) Start acyclovir for likely HSV, 3) Also treat for syphilis if high suspicion (penicillin G), 4) HIV testing essential, 5) Provide symptomatic relief, 6) Counsel on abstinence during outbreak, 7) Partner notification, 8) Follow up for test results and response to treatment...",
      geminiResponse: "Key actions: 1) HSV and syphilis testing, 2) Empiric acyclovir for probable HSV, 3) Consider benzathine penicillin if chance present, 4) HIV testing mandatory, 5) Pain management, 6) Educate on transmission risks, 7) Treat all sexual partners, 8) Follow up in 1 week to assess response...",
      ddxSnomed: "56479005 | Herpes genitalis (disorder)\n76272004 | Primary syphilis (disorder)\n240532009 | Chancroid (disorder)\n186687008 | Lymphogranuloma venereum (disorder)"
    },
    {
      masterIndex: 17,
      county: "Embu",
      healthLevel: "Sub-county Hospital",
      prompt: "I am a nurse with 4 years of experience in Pediatric nursing working at a Sub-county Hospital in Embu. A 7-year-old presents with periorbital edema, frothy urine, and elevated BP (120/80). Urine dipstick shows 3+ protein. What is the likely diagnosis and management?",
      nursingCompetency: "Child Health",
      clinicalPanel: "PAEDIATRICS",
      clinicianResponse: "Summary: 7-year-old with nephrotic syndrome. Management: 1) Admit for monitoring, 2) Strict fluid balance, 3) Low-sodium diet, 4) Start prednisone 60mg/m2/day, 5) Monitor for complications (thromboembolism, infections), 6) Consider diuretics if severe edema, 7) Educate parents about disease course, 8) Follow up with pediatrician.",
      gpt4Response: "This is classic nephrotic syndrome: 1) Confirm with urine protein:creatinine ratio, 2) Start high-dose prednisone, 3) Salt restriction, 4) Monitor for spontaneous bacterial peritonitis, 5) Consider prophylactic penicillin in endemic areas, 6) Educate about steroid side effects, 7) Follow proteinuria response, 8) Consider renal biopsy if steroid-resistant...",
      llamaResponse: "Following nephrotic syndrome protocol: 1) Admit for initial management, 2) Start prednisone at 60mg/m2/day, 3) Salt-restricted diet, 4) Monitor for infections (common with steroid use), 5) Consider furosemide if severe edema, 6) Educate parents about relapses, 7) Follow up urine protein regularly, 8) Refer to pediatric nephrologist if no response...",
      geminiResponse: "Key actions: 1) Start steroid therapy immediately (prednisone), 2) Restrict salt intake, 3) Monitor weight and edema daily, 4) Watch for infections (pneumococcal risk), 5) Consider albumin infusion if severe hypoalbuminemia, 6) Educate about disease course, 7) Follow proteinuria response, 8) Prepare for possible renal biopsy if steroid-resistant...",
      ddxSnomed: "58004004 | Nephrotic syndrome (disorder)\n431855005 | Minimal change disease (disorder)\n709044004 | Focal segmental glomerulosclerosis (disorder)\n90688005 | Acute glomerulonephritis (disorder)"
    },
    {
      masterIndex: 18,
      county: "Narok",
      healthLevel: "Dispensary",
      prompt: "I am a nurse with 1 year of experience working at a Dispensary in Narok county. A 45-year-old Maasai pastoralist presents with progressive weight loss, chronic cough, and night sweats for 3 months. Sputum is scanty. What is the approach?",
      nursingCompetency: "Adult Health",
      clinicalPanel: "GENERAL MEDICINE",
      clinicianResponse: "Summary: 45-year-old with symptoms suggestive of pulmonary TB. Management: 1) Collect sputum for AFB microscopy and GeneXpert, 2) Chest X-ray if available, 3) Start TB treatment if high clinical suspicion while awaiting results, 4) HIV testing, 5) Contact tracing, 6) Nutritional support, 7) Follow up for test results and response to treatment.",
      gpt4Response: "This is classic TB presentation: 1) Collect 3 sputum samples (spot-morning-spot), 2) GeneXpert is preferred diagnostic, 3) Start empiric TB treatment if high suspicion, 4) HIV testing mandatory, 5) Screen household contacts, 6) Provide nutritional support, 7) Monitor for treatment response, 8) Educate on treatment adherence...",
      llamaResponse: "Following TB guidelines: 1) Collect sputum for AFB and GeneXpert, 2) High clinical suspicion warrants empiric treatment, 3) HIV testing essential, 4) Contact tracing needed, 5) Provide TB education, 6) Monitor for adverse drug reactions, 7) Assess for extra-pulmonary TB, 8) Follow up regularly for treatment response...",
      geminiResponse: "Key actions: 1) Sputum for AFB and GeneXpert, 2) Start TB treatment if high suspicion, 3) HIV testing immediately, 4) Chest X-ray if available, 5) Screen household members, 6) Provide nutritional support, 7) Educate on treatment adherence, 8) Follow up for test results and clinical response...",
      ddxSnomed: "154283005 | Pulmonary tuberculosis (disorder)\n86406008 | HIV infection (disorder)\n254637007 | Lung cancer (disorder)\n276654009 | Histoplasmosis (disorder)"
    },
    {
      masterIndex: 19,
      county: "Turkana",
      healthLevel: "Mission Hospital",
      prompt: "I am a nurse with 3 years of experience working at a Mission Hospital in Turkana county. A 10-year-old child presents with progressive weakness of both legs over 2 weeks, now unable to walk. No history of trauma. What is the differential and management?",
      nursingCompetency: "Child Health",
      clinicalPanel: "PAEDIATRICS",
      clinicianResponse: "Summary: 10-year-old with acute flaccid paralysis. Management: 1) Report as suspected polio case, 2) Assess for sensory level (rule out transverse myelitis), 3) Check for areflexia (GBS), 4) Admit for monitoring, 5) Consider IVIG if GBS suspected, 6) Prevent pressure sores, 7) Monitor respiratory function (vital capacity), 8) Prepare for possible rehabilitation.",
      gpt4Response: "This is acute flaccid paralysis requiring: 1) Immediate notification to polio surveillance, 2) Thorough neurological exam, 3) Assess for preceding diarrhea (consider GBS), 4) Monitor for respiratory failure, 5) Consider IVIG if GBS likely, 6) Rule out spinal cord compression, 7) Prevent complications of immobility, 8) Prepare for long-term rehabilitation...",
      llamaResponse: "Following AFP protocol: 1) This is a notifiable condition - report immediately, 2) Assess for sensory level and reflexes, 3) Monitor vital capacity (risk of respiratory failure), 4) Consider IVIG if GBS suspected, 5) Rule out trauma or toxins, 6) Prevent contractures with physiotherapy, 7) Prepare family for possible long recovery...",
      geminiResponse: "Emergency actions: 1) Report as suspected polio case immediately, 2) Assess for ascending paralysis (GBS), 3) Monitor respiratory function closely, 4) Consider IVIG if GBS likely, 5) Rule out spinal cord pathology, 6) Start physiotherapy early, 7) Prepare family for possible prolonged recovery, 8) Collect stool samples for polio testing...",
      ddxSnomed: "398102009 | Acute flaccid paralysis (disorder)\n84757009 | Guillain-Barré syndrome (disorder)\n721753008 | Transverse myelitis (disorder)\n398102009 | Poliomyelitis (disorder)"
    },
    {
      masterIndex: 20,
      county: "Samburu",
      healthLevel: "Dispensary",
      prompt: "I am a nurse with 2 years of experience working at a Dispensary in Samburu county. A 50-year-old pastoralist presents with a swollen, painful knee for 3 days after a thorn prick while herding. The joint is hot, swollen, and he has fever. What is the management?",
      nursingCompetency: "Adult Health",
      clinicalPanel: "GENERAL MEDICINE",
      clinicianResponse: "Summary: 50-year-old with septic arthritis. Management: 1) Admit for IV antibiotics (cover for S. aureus and gram negatives), 2) Aspirate joint for culture if possible, 3) Immobilize joint, 4) Provide pain relief, 5) Monitor for systemic spread, 6) Consider referral for surgical drainage if no improvement, 7) Educate on wound care.",
      gpt4Response: "This is likely septic arthritis: 1) Start IV antibiotics covering S. aureus (flucloxacillin) and gram negatives (ceftriaxone), 2) Joint aspiration for Gram stain and culture, 3) Immobilize joint, 4) IV fluids for sepsis if present, 5) Consider surgical drainage if no response in 48 hours, 6) Monitor for osteomyelitis, 7) Educate on prevention of future infections...",
      llamaResponse: "Following septic arthritis protocol: 1) Start IV flucloxacillin and gentamicin immediately, 2) Attempt joint aspiration if trained, 3) Immobilize the joint, 4) Provide strong analgesia, 5) Monitor for signs of worsening sepsis, 6) Consider referral for orthopedic evaluation, 7) Educate on importance of completing antibiotics...",
      geminiResponse: "Critical actions: 1) IV antibiotics STAT (flucloxacillin + ceftriaxone), 2) Joint aspiration if possible, 3) Immobilize knee, 4) Monitor for septic shock, 5) Consider surgical drainage if no improvement, 6) Educate on proper wound care, 7) Follow up CRP to monitor response...",
      ddxSnomed: "15628003 | Septic arthritis (disorder)\n240532009 | Acute bacterial arthritis (disorder)\n409712007 | Reactive arthritis (disorder)\n201436003 | Gout (disorder)"
    }
  ];
  
  export type ClinicalPanel = "OBSTETRICS AND GYNAECOLOGY" | "PAEDIATRICS" | "CRITICAL CARE" | "GENERAL MEDICINE";
  export type NursingCompetency = "Maternal and Child Health" | "Child Health" | "Adult Health" | "Emergency Care";