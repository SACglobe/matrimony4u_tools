export const regionalGuides = [
  {
    slug: 'tamil-nadu',
    state: 'Tamil Nadu',
    stateTamil: 'தமிழ்நாடு',
    portalName: 'TN Registration Department',
    portalUrl: 'https://tnreginet.gov.in/',
    description: 'A comprehensive guide to registering marriages in Tamil Nadu under the Hindu Marriage Act (1955) and Tamil Nadu Registration of Marriages Act (2009).',
    descriptionTamil: 'இந்து திருமண சட்டம் (1955) மற்றும் தமிழ்நாடு திருமணப் பதிவுச் சட்டம் (2009) ஆகியவற்றின் கீழ் தமிழ்நாட்டில் திருமணங்களைப் பதிவு செய்வதற்கான விரிவான வழிகாட்டி.',
    fees: {
      hinduMarriageAct: '₹ 100',
      specialMarriageAct: '₹ 150',
      lateFee: '₹ 50 (if registered after 90 days but within 150 days)'
    },
    deadlines: {
      english: 'Must be registered within 90 days of the marriage without late fee. Late registration is allowed up to 150 days with an additional fee.',
      tamil: 'திருமணம் நடந்த 90 நாட்களுக்குள் அபராதம் இன்றி பதிவு செய்ய வேண்டும். 150 நாட்கள் வரை கூடுதல் கட்டணத்துடன் பதிவு செய்யலாம்.'
    },
    witnessRequirements: {
      english: 'Three witnesses are required. Witnesses must provide valid ID and address proof, and preferably be relatives or persons who attended the marriage.',
      tamil: 'மூன்று சாட்சிகள் தேவை. சாட்சிகள் செல்லுபடியாகும் அடையாள மற்றும் முகவரிச் சான்றை வழங்க வேண்டும், திருமணத்தில் கலந்து கொண்ட உறவினர்கள் அல்லது நண்பர்களாக இருப்பது நலம்.'
    },
    mandatoryDocuments: [
      {
        english: 'Completed application form signed by both husband and wife',
        tamil: 'கணவன் மற்றும் மனைவி இருவராலும் கையொப்பமிடப்பட்ட பூர்த்தி செய்யப்பட்ட விண்ணப்பப் படிவம்'
      },
      {
        english: 'Proof of Marriage (Wedding Invitation, Temple/Church/Mosque receipt, or a certificate from a priest)',
        tamil: 'திருமணச் சான்று (திருமண அழைப்பிதழ், கோவில்/தேவாலயம்/மசூதி ரசீது அல்லது புரோகிதரின் சான்றிதழ்)'
      },
      {
        english: 'Proof of Age for both parties (Birth Certificate, School Leaving Certificate, Passport, or Pan Card)',
        tamil: 'இருவரின் வயதுச் சான்று (பிறப்புச் சான்றிதழ், பள்ளிச் சான்றிதழ், பாஸ்போர்ட் அல்லது பான் கார்டு)'
      },
      {
        english: 'Proof of Address for both parties (Aadhar Card, Voter ID, Ration Card, or Passport)',
        tamil: 'இருவரின் முகவரிச் சான்று (ஆதார் அட்டை, வாக்காளர் அடையாள அட்டை, ரேஷன் கார்டு அல்லது பாஸ்போர்ட்)'
      },
      {
        english: 'Passport size photographs (4 each) and one joint photograph of the couple in wedding attire',
        tamil: 'பாஸ்போர்ட் அளவு புகைப்படங்கள் (தலா 4) மற்றும் திருமண உடையில் தம்பதியினரின் ஒரு கூட்டு புகைப்படம்'
      }
    ],
    steps: [
      {
        title: 'Step 1: Online Registration on TNREGINET',
        titleTamil: 'படி 1: TNREGINET தளத்தில் ஆன்லைன் பதிவு',
        desc: 'Visit the official TNREGINET portal, create a user account, and select "Registration of Marriage". Fill out the online application form with personal, marriage, and witness details.',
        descTamil: 'அதிகாரப்பூர்வ TNREGINET தளத்திற்குச் சென்று, பயனர் கணக்கை உருவாக்கி, "திருமணப் பதிவு" என்பதைத் தேர்ந்தெடுக்கவும். ஆன்லைன் விண்ணப்பப் படிவத்தில் தனிப்பட்ட, திருமண மற்றும் சாட்சி விவரங்களை நிரப்பவும்.'
      },
      {
        title: 'Step 2: Document Upload and Fee Payment',
        titleTamil: 'படி 2: ஆவணம் பதிவேற்றம் மற்றும் கட்டணம் செலுத்துதல்',
        desc: 'Upload scanned copies of all mandatory documents (Age proof, Address proof, Wedding Invitation, etc.). Pay the requisite government fee online.',
        descTamil: 'அனைத்து கட்டாய ஆவணங்களின் (வயதுச் சான்று, முகவரிச் சான்று, திருமண அழைப்பிதழ் போன்றவை) ஸ்கேன் செய்யப்பட்ட நகல்களைப் பதிவேற்றவும். தேவையான அரசு கட்டணத்தை ஆன்லைனில் செலுத்தவும்.'
      },
      {
        title: 'Step 3: Appointment Booking',
        titleTamil: 'படி 3: சந்திப்பு முன்பதிவு',
        desc: 'After successful fee payment, select a convenient date and time to visit the Sub-Registrar Office (SRO) under whose jurisdiction the marriage took place or where either spouse resides.',
        descTamil: 'கட்டணம் செலுத்திய பிறகு, திருமணம் நடந்த அல்லது கணவன்/மனைவி வசிக்கும் அதிகார வரம்பிற்கு உட்பட்ட சார்பதிவாளர் அலுவலகத்திற்குச் (SRO) செல்ல வசதியான தேதி மற்றும் நேரத்தைத் தேர்ந்தெடுக்கவும்.'
      },
      {
        title: 'Step 4: Visit Sub-Registrar Office',
        titleTamil: 'படி 4: சார்பதிவாளர் அலுவலகத்திற்குச் செல்லுதல்',
        desc: 'Both spouses and all three witnesses must visit the SRO in person on the appointed date with all original documents for verification.',
        descTamil: 'குறிப்பிட்ட தேதியில் கணவன், மனைவி மற்றும் மூன்று சாட்சிகளும் நேரில் அனைத்து அசல் ஆவணங்களுடன் சார்பதிவாளர் அலுவலகத்திற்குச் சரிபார்ப்பிற்காகச் செல்ல வேண்டும்.'
      },
      {
        title: 'Step 5: Certificate Issuance',
        titleTamil: 'படி 5: சான்றிதழ் வழங்குதல்',
        desc: 'Upon successful verification of documents and signatures before the Registrar, the Marriage Certificate is issued and can later be downloaded from the portal.',
        descTamil: 'பதிவாளரின் முன் ஆவணங்கள் மற்றும் கையொப்பங்கள் வெற்றிகரமாகச் சரிபார்க்கப்பட்டவுடன், திருமணச் சான்றிதழ் வழங்கப்படுகிறது, அதை பின்னர் போர்ட்டலிலிருந்தும் பதிவிறக்கம் செய்யலாம்.'
      }
    ]
  },
  {
    slug: 'delhi',
    state: 'Delhi (NCT)',
    stateTamil: 'டெல்லி',
    portalName: 'e-District Delhi',
    portalUrl: 'https://edistrict.delhigovt.nic.in/',
    description: 'Detailed instructions for marriage registration in Delhi, requiring online application through the e-District portal and mandatory Aadhaar linking.',
    descriptionTamil: 'டெல்லியில் திருமணப் பதிவுக்கான விரிவான வழிமுறைகள், இ-டிஸ்ட்ரிக்ட் போர்டல் மூலம் ஆன்லைன் விண்ணப்பம் மற்றும் ஆதார் இணைப்பு கட்டாயமாகும்.',
    fees: {
      hinduMarriageAct: '₹ 100',
      specialMarriageAct: '₹ 150',
      lateFee: '₹ 250 (if delayed beyond 60 days)'
    },
    deadlines: {
      english: 'Must be registered within 60 days of the marriage. Beyond 60 days, it is considered late registration and requires an affidavit and penalty.',
      tamil: 'திருமணம் நடந்த 60 நாட்களுக்குள் பதிவு செய்ய வேண்டும். 60 நாட்களுக்கு மேல் தாமதமானால், பிரமாணப் பத்திரம் மற்றும் அபராதம் தேவைப்படும்.'
    },
    witnessRequirements: {
      english: 'Two witnesses are required under the Hindu Marriage Act. Three witnesses are required under the Special Marriage Act. Witnesses must possess Aadhaar/Voter ID from Delhi.',
      tamil: 'இந்து திருமணச் சட்டத்தின் கீழ் இரண்டு சாட்சிகள் தேவை. சிறப்புத் திருமணச் சட்டத்தின் கீழ் மூன்று சாட்சிகள் தேவை. சாட்சிகள் டெல்லியின் ஆதார்/வாக்காளர் அடையாள அட்டை வைத்திருக்க வேண்டும்.'
    },
    mandatoryDocuments: [
      {
        english: 'Joint Affidavit in prescribed format from Husband and Wife',
        tamil: 'கணவன் மற்றும் மனைவியிடமிருந்து பரிந்துரைக்கப்பட்ட வடிவத்தில் கூட்டு பிரமாணப் பத்திரம்'
      },
      {
        english: 'Aadhaar Card (Mandatory for e-District portal registration)',
        tamil: 'ஆதார் அட்டை (இ-டிஸ்ட்ரிக்ட் போர்ட்டல் பதிவுக்கு கட்டாயம்)'
      },
      {
        english: 'Proof of Date of Birth for both parties',
        tamil: 'இருவரின் பிறந்த தேதி சான்று'
      },
      {
        english: 'Marriage Invitation Card or Temple/Gurudwara receipt',
        tamil: 'திருமண அழைப்பிதழ் அல்லது கோவில்/குருத்வாரா ரசீது'
      },
      {
        english: 'Passport size photographs (2 each) and marriage photograph',
        tamil: 'பாஸ்போர்ட் அளவு புகைப்படங்கள் (தலா 2) மற்றும் திருமண புகைப்படம்'
      }
    ],
    steps: [
      {
        title: 'Step 1: e-District Portal Registration',
        titleTamil: 'படி 1: இ-டிஸ்ட்ரிக்ட் போர்ட்டல் பதிவு',
        desc: 'Register as a citizen on the e-District Delhi portal. Aadhaar and an active mobile number are mandatory for OTP verification.',
        descTamil: 'இ-டிஸ்ட்ரிக்ட் டெல்லி போர்ட்டலில் குடிமகனாகப் பதிவு செய்யவும். OTP சரிபார்ப்பிற்கு ஆதார் மற்றும் செயலில் உள்ள மொபைல் எண் கட்டாயம்.'
      },
      {
        title: 'Step 2: Fill Application and Upload Documents',
        titleTamil: 'படி 2: விண்ணப்பத்தை நிரப்பி ஆவணங்களைப் பதிவேற்றவும்',
        desc: 'Navigate to "Registration of Marriage" under Department of Revenue. Fill out the digital form, upload the joint affidavit and all supporting KYC documents.',
        descTamil: 'வருவாய்த் துறையின் கீழ் "திருமணப் பதிவு" பகுதிக்குச் செல்லவும். டிஜிட்டல் படிவத்தை நிரப்பி, கூட்டு பிரமாணப் பத்திரம் மற்றும் அனைத்து KYC ஆவணங்களையும் பதிவேற்றவும்.'
      },
      {
        title: 'Step 3: Acknowledge and Appointment',
        titleTamil: 'படி 3: ஒப்புகை மற்றும் சந்திப்பு',
        desc: 'Submit the application to generate an acknowledgment slip containing the appointment date with the SDM (Sub-Divisional Magistrate).',
        descTamil: 'SDM (துணை கோட்ட மாஜிஸ்திரேட்) உடனான சந்திப்பு தேதியைக் கொண்ட ஒப்புகைச் சீட்டைப் பெற விண்ணப்பத்தை சமர்ப்பிக்கவும்.'
      },
      {
        title: 'Step 4: SDM Office Visit',
        titleTamil: 'படி 4: SDM அலுவலக வருகை',
        desc: 'Both parties and witnesses must visit the SDM office on the allotted date with all original documents.',
        descTamil: 'ஒதுக்கப்பட்ட தேதியில் இரு தரப்பினரும் சாட்சிகளும் அனைத்து அசல் ஆவணங்களுடன் SDM அலுவலகத்திற்குச் செல்ல வேண்டும்.'
      },
      {
        title: 'Step 5: Digital Certificate',
        titleTamil: 'படி 5: டிஜிட்டல் சான்றிதழ்',
        desc: 'After successful verification, a digitally signed Marriage Certificate is issued, which can be downloaded directly from the e-District portal.',
        descTamil: 'வெற்றிகரமான சரிபார்ப்பிற்குப் பிறகு, டிஜிட்டல் கையொப்பமிடப்பட்ட திருமணச் சான்றிதழ் வழங்கப்படுகிறது, இதை இ-டிஸ்ட்ரிக்ட் போர்ட்டலில் இருந்து நேரடியாகப் பதிவிறக்கம் செய்யலாம்.'
      }
    ]
  },
  {
    slug: 'maharashtra',
    state: 'Maharashtra',
    stateTamil: 'மகாராஷ்டிரா',
    portalName: 'Aaple Sarkar',
    portalUrl: 'https://aaplesarkar.mahaonline.gov.in/',
    description: 'Under the Maharashtra Regulation of Marriage Bureaus and Registration of Marriages Act, 1998, marriages must be registered with the local ward office or BMC.',
    descriptionTamil: 'மகாராஷ்டிரா திருமணப் பதிவுச் சட்டம் 1998 இன் படி, திருமணங்களை உள்ளூர் வார்டு அலுவலகம் அல்லது BMC யில் பதிவு செய்வது கட்டாயமாகும்.',
    fees: {
      hinduMarriageAct: '₹ 100',
      specialMarriageAct: '₹ 150',
      lateFee: 'Varies between Municipal Corporations (BMC/PMC)'
    },
    deadlines: {
      english: 'Must be registered within 90 days of solemnization. Late registrations require payment of a penalty fee to the local municipal body.',
      tamil: 'திருமணம் நடந்த 90 நாட்களுக்குள் பதிவு செய்யப்பட வேண்டும். தாமதமாகப் பதிவு செய்வதற்கு உள்ளூர் நகராட்சி அமைப்புக்கு அபராதம் செலுத்த வேண்டும்.'
    },
    witnessRequirements: {
      english: 'Three witnesses are required. They must bring original photo ID and address proof (Aadhaar or Voter ID).',
      tamil: 'மூன்று சாட்சிகள் தேவை. அவர்கள் அசல் புகைப்பட அடையாள மற்றும் முகவரிச் சான்றை (ஆதார் அல்லது வாக்காளர் அடையாள அட்டை) கொண்டு வர வேண்டும்.'
    },
    mandatoryDocuments: [
      {
        english: 'Form D - Application for Marriage Registration',
        tamil: 'படிவம் D - திருமணப் பதிவுக்கான விண்ணப்பம்'
      },
      {
        english: 'Affidavit in prescribed format on Rs. 100 Stamp Paper',
        tamil: 'ரூ.100 முத்திரைத் தாளில் பரிந்துரைக்கப்பட்ட வடிவத்தில் பிரமாணப் பத்திரம்'
      },
      {
        english: 'Address Proof (Ration Card/Electricity Bill/Aadhaar) of Husband and Wife',
        tamil: 'கணவன் மற்றும் மனைவியின் முகவரிச் சான்று (ரேஷன் கார்டு/மின் கட்டணம்/ஆதார்)'
      },
      {
        english: 'Age Proof (Birth Certificate/SSC Board Certificate/Passport)',
        tamil: 'வயதுச் சான்று (பிறப்புச் சான்றிதழ்/10ஆம் வகுப்பு சான்றிதழ்/பாஸ்போர்ட்)'
      },
      {
        english: 'Priest Certificate (Bhatji Certificate) with Priest ID and Marriage Card',
        tamil: 'திருமண அழைப்பிதழ் மற்றும் புரோகிதரின் அடையாள அட்டையுடன் புரோகிதர் சான்றிதழ்'
      }
    ],
    steps: [
      {
        title: 'Step 1: Download and Fill Form D',
        titleTamil: 'படி 1: படிவம் D-ஐ பதிவிறக்கம் செய்து நிரப்பவும்',
        desc: 'Obtain Form D from the local municipal ward office (e.g., BMC/PMC) or download it via the Aaple Sarkar portal. Fill it carefully.',
        descTamil: 'உள்ளூர் நகராட்சி வார்டு அலுவலகத்திலிருந்து படிவம் D-ஐப் பெறவும் அல்லது Aaple Sarkar போர்ட்டல் மூலம் பதிவிறக்கவும். அதை கவனமாக நிரப்பவும்.'
      },
      {
        title: 'Step 2: Prepare Notarized Affidavit',
        titleTamil: 'படி 2: நோட்டரி பிரமாணப் பத்திரம்',
        desc: 'Draft the joint affidavit on a Rs. 100 stamp paper declaring the marriage, signatures, and ages of the couple. Have it notarized.',
        descTamil: 'திருமணம், கையொப்பங்கள் மற்றும் வயதை அறிவிக்கும் கூட்டு பிரமாணப் பத்திரத்தை ரூ.100 முத்திரைத் தாளில் தயாரித்து நோட்டரியிடம் சான்றொப்பம் பெறவும்.'
      },
      {
        title: 'Step 3: Online Submission (if applicable)',
        titleTamil: 'படி 3: ஆன்லைன் சமர்ப்பிப்பு',
        desc: 'In major cities like Mumbai (BMC), apply online through the municipal portal, upload documents, and schedule an appointment.',
        descTamil: 'மும்பை (BMC) போன்ற பெரிய நகரங்களில், நகராட்சி போர்ட்டல் மூலம் ஆன்லைனில் விண்ணப்பித்து, ஆவணங்களைப் பதிவேற்றி சந்திப்பைத் திட்டமிடவும்.'
      },
      {
        title: 'Step 4: Visit the Ward Office',
        titleTamil: 'படி 4: வார்டு அலுவலக வருகை',
        desc: 'The couple, accompanied by the three witnesses and the priest (in some wards), must appear before the Marriage Registrar at the ward office.',
        descTamil: 'தம்பதியினர், மூன்று சாட்சிகள் மற்றும் புரோகிதர் ஆகியோருடன் வார்டு அலுவலகத்தில் உள்ள திருமணப் பதிவாளர் முன் ஆஜராக வேண்டும்.'
      },
      {
        title: 'Step 5: Collect Certificate',
        titleTamil: 'படி 5: சான்றிதழைப் பெறுதல்',
        desc: 'After verifying the original documents and taking signatures in the register, the Marriage Certificate (Form E) is issued on the same day or within a week.',
        descTamil: 'அசல் ஆவணங்களைச் சரிபார்த்து பதிவேட்டில் கையொப்பமிட்ட பிறகு, திருமணச் சான்றிதழ் (படிவம் E) அதே நாளில் அல்லது ஒரு வாரத்திற்குள் வழங்கப்படும்.'
      }
    ]
  }
];
