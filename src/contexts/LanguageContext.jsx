'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // New Strategic Location & Mission keys
    strategicLocation: 'Strategic Location',
    engineeringExcellence: 'Engineering Excellence Into Every Detail.',
    focusPrecision: 'Focus on Precision',
    micrometerMatters: 'Every micrometer matters',
    materials: 'Materials',
    materialsList: 'Aluminium, Steel, Stainless Steel, Brass, Plastics',
    
    // New Advantages & Team keys
    skilledProfessionals: 'Skilled Professionals',
    continuousTraining: 'Continuous Training',
    productionFacility: 'Production facility',
    engineeringTeam: 'Engineering team',
    processOptimization: 'Process Optimization',
    maximizingEfficiency: 'Maximizing efficiency daily',
    
    // New Partnership Benefits keys
    partnershipBenefits: 'Partnership Benefits',

    // New Contact & Headquarters keys
    headquarters: 'Headquarters',
    address: 'Bratstvo 11, BA-72290 Novi Travnik',
    directLines: 'Direct Lines',
    phone1: '+387 30 526 117',
    phone2: '+387 61 536 333',
    digital: 'Digital',
    email: 'info@metra.ba',
    website: 'www.metra.ba',

    // Footer & Header keys
    language: 'Language',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    footerCompany: 'Company',
    footerCapabilities: 'Capabilities',
    footerQualityProjects: 'Quality & Projects',
    allRightsReserved: 'All rights reserved.',
    legal: {
      backHome: 'Back to Home',
      tabs: { terms: 'Terms & Conditions', privacy: 'Privacy Policy' }
    },

    // Existing keys
    nav: {
      hero: 'Home',
      history: 'History',
      about: 'About Us',
      mission: 'Mission',
      cncmilling: 'CNC Milling',
      cncturning: 'CNC Turning',
      welded: 'Welded Constructions',
      quality: 'Quality',
      team: 'Team',
      cooperation: 'Cooperation',
      machinery: 'Machinery',
      references: 'References',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      headline: 'QUALITY. PRECISION. RELIABILITY. SINCE 1984. YOUR PARTNER FOR PRECISION MACHINING AND CNC TECHNOLOGY.',
      words: {
        w1: 'QUALITY.',
        w2: 'PRECISION.',
        w3: 'RELIABILITY.',
        since: 'SINCE 1984.'
      },
      pillars: {
        precision: { title: 'PRECISION', desc: 'Exact tolerances and perfect finishes for demanding applications.' },
        quality: { title: 'QUALITY', desc: 'Certified processes ensuring consistent excellence.' },
        reliability: { title: 'RELIABILITY', desc: 'On-time delivery and dependable partnership.' },
        innovation: { title: 'INNOVATION', desc: 'State-of-the-art technology and continuous improvement.' }
      }
    },
    history: {
      title: 'Our History',
      text: 'METRA d.o.o. is a modern company from Bosnia and Herzegovina with a long tradition in precision manufacturing. Founded in 1984, we have grown from a small workshop into a reliable partner for European industries. Now in our 3rd generation of family ownership, we combine decades of experience with modern CNC technology to deliver exceptional results.',
      timeline: {
        1984: 'Foundation of the family business',
        2000: 'Expansion and modernization',
        2010: 'Introduction of advanced CNC technology',
        2024: '3rd generation leadership and international growth'
      }
    },
    about: {
      title: 'About Us',
      text: 'We specialize in custom CNC machining, welded constructions, and industrial assembly. Located in Novi Travnik, a region with a rich industrial heritage, we benefit from a skilled workforce and excellent logistical connections to the EU.'
    },
    mission: {
      title: 'Our Mission',
      text: 'Our mission is to provide our customers with the highest quality precision parts and assemblies. We focus on continuous technological advancement, employee development, and sustainable manufacturing practices. We are committed to being a proactive, problem-solving partner for every client.'
    },
    milling: {
      title: 'CNC Milling',
      capabilities: 'Capabilities up to 1000mm x 2000mm',
      materials: 'Aluminum, Steel, Stainless Steel, Brass, Plastics',
      advantages: 'High precision, complex geometries, rapid prototyping to serial production.'
    },
    turning: {
      title: 'CNC Turning',
      capabilities: 'Capabilities up to Ø450mm x 1000mm',
      materials: 'Various steel alloys, non-ferrous metals, engineering plastics',
      finishing: 'Anodizing, hardening, galvanizing, and other surface treatments available through certified partners.'
    },
    welded: {
      title: 'Welded Constructions & Assembly',
      intro: 'Comprehensive solutions for complex industrial components, from single parts to complete subassemblies.',
      specs: 'Constructions up to 1800×800×800 mm, max weight 250kg',
      services: 'Complete subassembly services, mechanical fitting, and testing. A single-source solution for complex industrial components.'
    },
    labels: {
      specifications: 'Specifications',
      advantages: 'Advantages',
      finishingServices: 'Finishing Services',
      assemblyServices: 'Assembly Services'
    },
    benefits: {
      subtitle: 'We build long-term relationships based on mutual trust, delivering tangible value at every stage of the manufacturing process.',
      items: {
        flexible: { title: 'Flexible Partnerships', desc: 'Adaptable production schedules to meet your dynamic market demands.' },
        quality: { title: 'Quality Assurance', desc: 'Rigorous multi-stage inspections guaranteeing flawless end products.' },
        support: { title: 'Technical Support', desc: 'Expert engineering assistance from prototyping to full-scale production.' },
        scalable: { title: 'Scalable Solutions', desc: 'Seamless transition from single prototypes to high-volume manufacturing.' },
        pricing: { title: 'Competitive Pricing', desc: 'Optimized processes ensuring maximum value without compromising quality.' },
        management: { title: 'Dedicated Management', desc: 'Single-point-of-contact project managers committed to your success.' }
      }
    },
    quality: {
      title: 'Quality and Safety',
      text: 'Quality is embedded in every step of our process. We maintain rigorous inspection protocols and provide complete measurement documentation.',
      certs: 'Certified according to ISO 9001, ISO 14001, ISO 45001, and ISO 3834.'
    },
    team: {
      title: 'Production and Team',
      text: 'Our greatest asset is our team of 60+ highly skilled employees. Through continuous training programs and process optimization, we ensure our workforce operates the most modern equipment with maximum efficiency.'
    },
    cooperation: {
      title: 'Cooperation',
      text: 'We build long-term partnerships based on mutual trust, technical support, and flexibility. We promise transparent communication and dedicated project management from inquiry to delivery.'
    },
    machinery: {
      title: 'Machinery Park',
      milling: 'Modern 3-axis and 5-axis CNC milling centers',
      turning: 'High-performance CNC turning centers with driven tools',
      other: 'Grinding machines, certified welding systems, and advanced CMM measuring equipment.'
    },
    references: {
      title: 'References & Customers',
      text: 'Trusted by leading European industrial manufacturers.'
    },
    projects: {
      title: 'Projects Gallery',
      subtitle: 'A selection of our precision manufacturing capabilities.',
      alt: 'Project',
      filters: {
        all: 'All',
        milling: 'CNC Milling',
        turning: 'CNC Turning',
        welded: 'Welded Constructions',
        assembly: 'Assembly'
      }
    },
    contact: {
      title: 'Contact Us',
      info: {
        address: 'Bratstvo 11, BA-72290 Novi Travnik',
        phone1: '+387 30 526 117',
        phone2: '+387 61 536 333',
        email: 'info@metra.ba',
        web: 'www.metra.ba'
      },
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send Message',
        success: 'Message sent successfully!',
        error: 'Something went wrong. Please try again or contact us directly by phone or email.',
        processing: 'Processing...'
      }
    }
  },
  de: {
    // New Strategic Location & Mission keys
    strategicLocation: 'Strategischer Standort',
    engineeringExcellence: 'Ingenieurskunst in jedem Detail.',
    focusPrecision: 'Fokus auf Präzision',
    micrometerMatters: 'Jedes Mikrometer zählt',
    materials: 'Materialien',
    materialsList: 'Aluminium, Stahl, Edelstahl, Messing, Kunststoffe',

    // New Advantages & Team keys
    skilledProfessionals: 'Fachleute',
    continuousTraining: 'Kontinuierliche Schulung',
    productionFacility: 'Produktionsanlage',
    engineeringTeam: 'Ingenieursteam',
    processOptimization: 'Prozessoptimierung',
    maximizingEfficiency: 'Tägliche Effizienzsteigerung',

    // New Partnership Benefits keys
    partnershipBenefits: 'Partnerschaftsvorteile',

    // New Contact & Headquarters keys
    headquarters: 'Hauptsitz',
    address: 'Bratstvo 11, BA-72290 Novi Travnik',
    directLines: 'Direktleitungen',
    phone1: '+387 30 526 117',
    phone2: '+387 61 536 333',
    digital: 'Digital',
    email: 'info@metra.ba',
    website: 'www.metra.ba',

    // Footer & Header keys
    language: 'Sprache',
    privacyPolicy: 'Datenschutzrichtlinie',
    termsOfService: 'Nutzungsbedingungen',
    footerCompany: 'Unternehmen',
    footerCapabilities: 'Fähigkeiten',
    footerQualityProjects: 'Qualität & Projekte',
    allRightsReserved: 'Alle Rechte vorbehalten.',
    legal: {
      backHome: 'Zurück zur Startseite',
      tabs: { terms: 'Nutzungsbedingungen', privacy: 'Datenschutzrichtlinie' }
    },

    // Existing keys
    nav: {
      hero: 'Startseite',
      history: 'Geschichte',
      about: 'Über uns',
      mission: 'Mission',
      cncmilling: 'CNC-Fräsen',
      cncturning: 'CNC-Drehen',
      welded: 'Schweißkonstruktionen',
      quality: 'Qualität',
      team: 'Team',
      cooperation: 'Zusammenarbeit',
      machinery: 'Maschinenpark',
      references: 'Referenzen',
      projects: 'Projekte',
      contact: 'Kontakt'
    },
    hero: {
      headline: 'QUALITÄT. PRÄZISION. ZUVERLÄSSIGKEIT. SEIT 1984. IHR PARTNER FÜR PRÄZISIONSBEARBEITUNG UND CNC-TECHNIK.',
      words: {
        w1: 'QUALITÄT.',
        w2: 'PRÄZISION.',
        w3: 'ZUVERLÄSSIGKEIT.',
        since: 'SEIT 1984.'
      },
      pillars: {
        precision: { title: 'PRÄZISION', desc: 'Exakte Toleranzen und perfekte Oberflächen für anspruchsvolle Anwendungen.' },
        quality: { title: 'QUALITÄT', desc: 'Zertifizierte Prozesse für gleichbleibende Spitzenleistungen.' },
        reliability: { title: 'ZUVERLÄSSIGKEIT', desc: 'Termintreue Lieferung und verlässliche Partnerschaft.' },
        innovation: { title: 'INNOVATION', desc: 'Modernste Technologie und kontinuierliche Verbesserung.' }
      }
    },
    history: {
      title: 'Unsere Geschichte',
      text: 'METRA d.o.o. ist ein modernes Unternehmen aus Bosnien und Herzegowina mit langer Tradition in der Präzisionsfertigung. Gegründet 1984, sind wir von einer kleinen Werkstatt zu einem zuverlässigen Partner für die europäische Industrie gewachsen. In der 3. Generation in Familienbesitz, verbinden wir jahrzehntelange Erfahrung mit moderner CNC-Technik.',
      timeline: {
        1984: 'Gründung des Familienunternehmens',
        2000: 'Expansion und Modernisierung',
        2010: 'Einführung fortschrittlicher CNC-Technologie',
        2024: 'Führung in 3. Generation und internationales Wachstum'
      }
    },
    about: {
      title: 'Über uns',
      text: 'Wir sind spezialisiert auf kundenspezifische CNC-Bearbeitung, Schweißkonstruktionen und Industriemontage. Unser Standort in Novi Travnik, einer Region mit reicher Industriegeschichte, bietet uns qualifizierte Fachkräfte und hervorragende Logistikverbindungen in die EU.'
    },
    mission: {
      title: 'Unsere Mission',
      text: 'Unsere Mission ist es, unseren Kunden Präzisionsteile und Baugruppen von höchster Qualität zu liefern. Wir setzen auf technologischen Fortschritt, Mitarbeiterentwicklung und nachhaltige Fertigung. Wir sind ein proaktiver, lösungsorientierter Partner für jeden Kunden.'
    },
    milling: {
      title: 'CNC-Fräsen',
      capabilities: 'Kapazitäten bis 1000mm x 2000mm',
      materials: 'Aluminium, Stahl, Edelstahl, Messing, Kunststoffe',
      advantages: 'Hohe Präzision, komplexe Geometrien, vom Prototyp bis zur Serienfertigung.'
    },
    turning: {
      title: 'CNC-Drehen',
      capabilities: 'Kapazitäten bis Ø450mm x 1000mm',
      materials: 'Verschiedene Stahllegierungen, NE-Metalle, technische Kunststoffe',
      finishing: 'Eloxieren, Härten, Verzinken und weitere Oberflächenbehandlungen durch zertifizierte Partner.'
    },
    welded: {
      title: 'Schweißkonstruktionen & Montage',
      intro: 'Umfassende Lösungen für komplexe Industriekomponenten, vom Einzelteil bis zur kompletten Baugruppe.',
      specs: 'Konstruktionen bis 1800×800×800 mm, max. Gewicht 250kg',
      services: 'Komplette Baugruppenmontage, mechanische Anpassung und Prüfung. Alles aus einer Hand.'
    },
    labels: {
      specifications: 'Spezifikationen',
      advantages: 'Vorteile',
      finishingServices: 'Oberflächenbehandlung',
      assemblyServices: 'Montagedienstleistungen'
    },
    benefits: {
      subtitle: 'Wir bauen langfristige Beziehungen auf, die auf gegenseitigem Vertrauen basieren, und liefern in jeder Phase des Fertigungsprozesses einen greifbaren Mehrwert.',
      items: {
        flexible: { title: 'Flexible Partnerschaften', desc: 'Anpassbare Produktionspläne für Ihre dynamischen Marktanforderungen.' },
        quality: { title: 'Qualitätssicherung', desc: 'Strenge mehrstufige Prüfungen garantieren makellose Endprodukte.' },
        support: { title: 'Technischer Support', desc: 'Fachkundige technische Unterstützung vom Prototyp bis zur Serienfertigung.' },
        scalable: { title: 'Skalierbare Lösungen', desc: 'Nahtloser Übergang von Einzelprototypen zur Großserienfertigung.' },
        pricing: { title: 'Wettbewerbsfähige Preise', desc: 'Optimierte Prozesse für maximalen Wert ohne Qualitätskompromisse.' },
        management: { title: 'Engagiertes Projektmanagement', desc: 'Feste Ansprechpartner, die sich für Ihren Erfolg einsetzen.' }
      }
    },
    quality: {
      title: 'Qualität und Sicherheit',
      text: 'Qualität ist in jedem Schritt unseres Prozesses verankert. Wir unterhalten strenge Prüfprotokolle und liefern vollständige Messdokumentationen.',
      certs: 'Zertifiziert nach ISO 9001, ISO 14001, ISO 45001 und ISO 3834.'
    },
    team: {
      title: 'Produktion und Team',
      text: 'Unser größtes Kapital ist unser Team von über 60 hochqualifizierten Mitarbeitern. Durch kontinuierliche Schulungen und Prozessoptimierung stellen wir sicher, dass unsere Belegschaft modernste Anlagen mit maximaler Effizienz bedient.'
    },
    cooperation: {
      title: 'Zusammenarbeit',
      text: 'Wir bauen langfristige Partnerschaften auf, die auf gegenseitigem Vertrauen, technischer Unterstützung und Flexibilität basieren. Wir versprechen transparente Kommunikation und engagiertes Projektmanagement.'
    },
    machinery: {
      title: 'Maschinenpark',
      milling: 'Moderne 3-Achs- und 5-Achs-CNC-Fräszentren',
      turning: 'Hochleistungs-CNC-Drehzentren mit angetriebenen Werkzeugen',
      other: 'Schleifmaschinen, zertifizierte Schweißanlagen und fortschrittliche 3D-Koordinatenmesstechnik.'
    },
    references: {
      title: 'Referenzen & Kunden',
      text: 'Führende europäische Industriehersteller vertrauen uns.'
    },
    projects: {
      title: 'Projektgalerie',
      subtitle: 'Eine Auswahl unserer Präzisionsfertigungskompetenzen.',
      alt: 'Projekt',
      filters: {
        all: 'Alle',
        milling: 'CNC-Fräsen',
        turning: 'CNC-Drehen',
        welded: 'Schweißkonstruktionen',
        assembly: 'Montage'
      }
    },
    contact: {
      title: 'Kontakt',
      info: {
        address: 'Bratstvo 11, BA-72290 Novi Travnik',
        phone1: '+387 30 526 117',
        phone2: '+387 61 536 333',
        email: 'info@metra.ba',
        web: 'www.metra.ba'
      },
      form: {
        name: 'Name',
        email: 'E-Mail',
        message: 'Nachricht',
        submit: 'Nachricht senden',
        success: 'Nachricht erfolgreich gesendet!',
        error: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch oder per E-Mail.',
        processing: 'Wird verarbeitet...'
      }
    }
  },
  bs: {
    // New Strategic Location & Mission keys
    strategicLocation: 'Strateška Lokacija',
    engineeringExcellence: 'Inženjerska Izvrsnost U Svakom Detalju.',
    focusPrecision: 'Fokus na Preciznost',
    micrometerMatters: 'Svaki mikrometar je bitan',
    materials: 'Materijali',
    materialsList: 'Aluminijum, Čelik, Nehrđajući Čelik, Mesing, Plastike',

    // New Advantages & Team keys
    skilledProfessionals: 'Stručnjaka',
    continuousTraining: 'Kontinuirano Obučavanje',
    productionFacility: 'Proizvodna Jedinica',
    engineeringTeam: 'Inženjerski Tim',
    processOptimization: 'Optimizacija Procesa',
    maximizingEfficiency: 'Dnevna Maksimizacija Efikasnosti',

    // New Partnership Benefits keys
    partnershipBenefits: 'Prednosti Partnerstva',

    // New Contact & Headquarters keys
    headquarters: 'Sedište',
    address: 'Bratstvo 11, BA-72290 Novi Travnik',
    directLines: 'Direktne Linije',
    phone1: '+387 30 526 117',
    phone2: '+387 61 536 333',
    digital: 'Digitalno',
    email: 'info@metra.ba',
    website: 'www.metra.ba',

    // Footer & Header keys
    language: 'Jezik',
    privacyPolicy: 'Politika Privatnosti',
    termsOfService: 'Uslovi Korištenja',
    footerCompany: 'Kompanija',
    footerCapabilities: 'Mogućnosti',
    footerQualityProjects: 'Kvalitet i Projekti',
    allRightsReserved: 'Sva prava pridržana.',
    legal: {
      backHome: 'Nazad na početnu',
      tabs: { terms: 'Uvjeti korištenja', privacy: 'Politika privatnosti' }
    },

    // Existing keys
    nav: {
      hero: 'Početna',
      history: 'Historija',
      about: 'O nama',
      mission: 'Misija',
      cncmilling: 'CNC Glodanje',
      cncturning: 'CNC Tokarenje',
      welded: 'Zavarene konstrukcije',
      quality: 'Kvalitet',
      team: 'Tim',
      cooperation: 'Saradnja',
      machinery: 'Mašinski park',
      references: 'Reference',
      projects: 'Projekti',
      contact: 'Kontakt'
    },
    hero: {
      headline: 'KVALITETA. PRECIZNOST. POUZDANOST. OD 1984. VAŠ PARTNER ZA PRECIZNU OBRADU I CNC TEHNOLOGIJU.',
      words: {
        w1: 'KVALITETA.',
        w2: 'PRECIZNOST.',
        w3: 'POUZDANOST.',
        since: 'OD 1984.'
      },
      pillars: {
        precision: { title: 'PRECIZNOST', desc: 'Tačne tolerancije i savršena završna obrada za zahtjevne primjene.' },
        quality: { title: 'KVALITET', desc: 'Certificirani procesi koji osiguravaju dosljednu izvrsnost.' },
        reliability: { title: 'POUZDANOST', desc: 'Isporuka na vrijeme i pouzdano partnerstvo.' },
        innovation: { title: 'INOVACIJA', desc: 'Najsavremenija tehnologija i kontinuirano unapređenje.' }
      }
    },
    history: {
      title: 'Naša historija',
      text: 'METRA d.o.o. je moderna kompanija iz Bosne i Hercegovine sa dugom tradicijom u preciznoj proizvodnji. Osnovani 1984. godine, izrasli smo iz male radionice u pouzdanog partnera za evropsku industriju. Sada u 3. generaciji porodičnog vlasništva, kombinujemo decenije iskustva sa modernom CNC tehnologijom.',
      timeline: {
        1984: 'Osnivanje porodičnog biznisa',
        2000: 'Ekspanzija i modernizacija',
        2010: 'Uvođenje napredne CNC tehnologije',
        2024: 'Liderstvo 3. generacije i međunarodni rast'
      }
    },
    about: {
      title: 'O nama',
      text: 'Specijalizovani smo za prilagođenu CNC obradu, zavarene konstrukcije i industrijsku montažu. Smješteni u Novom Travniku, regiji sa bogatim industrijskim naslijeđem, koristimo prednosti kvalifikovane radne snage i odličnih logističkih veza sa EU.'
    },
    mission: {
      title: 'Naša misija',
      text: 'Naša misija je pružiti kupcima najkvalitetnije precizne dijelove i sklopove. Fokusiramo se na tehnološki napredak, razvoj zaposlenih i održivu proizvodnju. Posvećeni smo tome da budemo proaktivan partner koji rješava probleme za svakog klijenta.'
    },
    milling: {
      title: 'CNC Glodanje',
      capabilities: 'Kapaciteti do 1000mm x 2000mm',
      materials: 'Aluminijum, čelik, nehrđajući čelik, mesing, plastika',
      advantages: 'Visoka preciznost, složene geometrije, od prototipa do serijske proizvodnje.'
    },
    turning: {
      title: 'CNC Tokarenje',
      capabilities: 'Kapaciteti do Ø450mm x 1000mm',
      materials: 'Razne legure čelika, obojeni metali, tehnička plastika',
      finishing: 'Eloksiranje, kaljenje, cinkovanje i druge površinske obrade preko certificiranih partnera.'
    },
    welded: {
      title: 'Zavarene konstrukcije i montaža',
      intro: 'Sveobuhvatna rješenja za složene industrijske komponente, od pojedinačnih dijelova do kompletnih podsklopova.',
      specs: 'Konstrukcije do 1800×800×800 mm, max težina 250kg',
      services: 'Kompletne usluge montaže podsklopova, mehaničko uklapanje i testiranje. Rješenje na jednom mjestu.'
    },
    labels: {
      specifications: 'Specifikacije',
      advantages: 'Prednosti',
      finishingServices: 'Usluge Završne Obrade',
      assemblyServices: 'Usluge Montaže'
    },
    benefits: {
      subtitle: 'Gradimo dugoročne odnose zasnovane na međusobnom povjerenju, donoseći konkretnu vrijednost u svakoj fazi proizvodnog procesa.',
      items: {
        flexible: { title: 'Fleksibilna Partnerstva', desc: 'Prilagodljivi proizvodni planovi koji odgovaraju vašim dinamičnim tržišnim potrebama.' },
        quality: { title: 'Osiguranje Kvaliteta', desc: 'Rigorozne višestepene inspekcije koje garantuju besprijekorne finalne proizvode.' },
        support: { title: 'Tehnička Podrška', desc: 'Stručna inženjerska pomoć od prototipa do serijske proizvodnje.' },
        scalable: { title: 'Skalabilna Rješenja', desc: 'Neprimjetan prelaz sa pojedinačnih prototipova na proizvodnju velikog obima.' },
        pricing: { title: 'Konkurentne Cijene', desc: 'Optimizirani procesi koji osiguravaju maksimalnu vrijednost bez kompromisa u kvalitetu.' },
        management: { title: 'Posvećeno Upravljanje', desc: 'Projekt menadžeri sa jednom kontakt osobom posvećeni vašem uspjehu.' }
      }
    },
    quality: {
      title: 'Kvalitet i sigurnost',
      text: 'Kvalitet je ugrađen u svaki korak našeg procesa. Održavamo rigorozne protokole inspekcije i pružamo kompletnu mjernu dokumentaciju.',
      certs: 'Certificirani prema ISO 9001, ISO 14001, ISO 45001 i ISO 3834.'
    },
    team: {
      title: 'Proizvodnja i tim',
      text: 'Naše najveće bogatstvo je naš tim od preko 60 visoko kvalifikovanih zaposlenika. Kroz kontinuirane programe obuke i optimizaciju procesa, osiguravamo da naša radna snaga upravlja najmodernijom opremom uz maksimalnu efikasnost.'
    },
    cooperation: {
      title: 'Saradnja',
      text: 'Gradimo dugoročna partnerstva zasnovana na međusobnom povjerenju, tehničkoj podršci i fleksibilnosti. Obećavamo transparentnu komunikaciju i posvećeno upravljanje projektima.'
    },
    machinery: {
      title: 'Mašinski park',
      milling: 'Moderni 3-osni i 5-osni CNC obradni centri',
      turning: 'CNC strugovi visokih performansi sa pogonjenim alatima',
      other: 'Brusilice, certificirani sistemi za zavarivanje i napredna 3D mjerna oprema.'
    },
    references: {
      title: 'Reference i kupci',
      text: 'Vodeći evropski industrijski proizvođači nam vjeruju.'
    },
    projects: {
      title: 'Galerija projekata',
      subtitle: 'Izbor naših mogućnosti precizne proizvodnje.',
      alt: 'Projekat',
      filters: {
        all: 'Sve',
        milling: 'CNC Glodanje',
        turning: 'CNC Tokarenje',
        welded: 'Zavarene konstrukcije',
        assembly: 'Montaža'
      }
    },
    contact: {
      title: 'Kontaktirajte nas',
      info: {
        address: 'Bratstvo 11, BA-72290 Novi Travnik',
        phone1: '+387 30 526 117',
        phone2: '+387 61 536 333',
        email: 'info@metra.ba',
        web: 'www.metra.ba'
      },
      form: {
        name: 'Ime',
        email: 'Email',
        message: 'Poruka',
        submit: 'Pošalji poruku',
        success: 'Poruka uspješno poslana!',
        error: 'Nešto je pošlo po zlu. Pokušajte ponovo ili nas kontaktirajte direktno putem telefona ili emaila.',
        processing: 'Obrada u toku...'
      }
    }
  }
};

export const LanguageProvider = ({ children }) => {
  // Always start with the same value the server rendered ('de'), then apply
  // any saved preference after mount to avoid a hydration mismatch.
  const [language, setLanguage] = useState('de');

  useEffect(() => {
    const saved = localStorage.getItem('metra-language');
    if (saved) setLanguage(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('metra-language', language);
  }, [language]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
