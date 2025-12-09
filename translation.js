// translations.js - Multi-language content

const TRANSLATIONS = {
    en: {
        // Login Page
        login: {
            title: "Access Required",
            instruction: "Please enter the password or",
            alternativ: "inspect the page as code via",
            passwordPlaceholder: "Enter password",
            enterButton: "Enter",
            errorMessage: "Incorrect password. Please try again."
        },
        
        // Header & Navigation
        nav: {
            overview: "Overview",
            motivation: "Motivation",
            cv: "Curriculum Vitae",
            projects: "Projects",
            certifications: "Certifications",
            skills: "Skills",
            architecture: "Page Architecture",
            contact: "Contact"
        },
        
        // Hero Section
        hero: {
            name: "Dominik Braun",
            title: "Java Developer and IT Architect",
            location: "Duisburg",
            subtitle: "Application for the advertised position as an IT architect"
        },
        
        // Overview Section
        overview: {
            title: "Qualifications Overview",
            itArchitect: "IT Architect",
            securityArchitect: "IT Security Architect",
            devopsEngineer: "DevOps Engineer",
            tableHeaders: {
                requested: "Requested",
                fulfilled: "Fulfilled",
                chapter: "Chapter"
            },
            requirements: {
                stemDegree: "A completed degree in a STEM discipline",
                projectExperience: "Experience in delivering IT projects and in creating and documenting enterprise and software architectures",
                architectureExpertise: "Solid expertise in enterprise/software architecture mgmt.",
                bpmnExperience: "Experience with BPMN, low-code platforms, and architecture frameworks (e.g., TOGAF)",
                analyticalSkills: "Strong analytical skills; modelling experience (UML, Archimate, BPMN)",
                communication: "Ability to explain complex technical topics simply, in both German and English",
                cloudSecurity: "In-depth knowledge of Cloud Security (Azure, AWS) and IAM",
                securityStandards: "Experience with ISO 27001, BSI IT-Grundschutz, and NIST frameworks",
                zeroTrust: "Experience in Zero Trust, network segmentation, and DevSecOps",
                threatModeling: "Knowledge of threat modeling and security risk management",
                encryptionTech: "Familiarity with modern encryption technologies",
                splunkAttacks: "Experience with Splunk; understanding of current attack techniques",
                ethicalHacking: "Ethical hacking",
                cicdExperience: "Strong knowledge of CI/CD pipelines (GitLab CI/CD, Jenkins)",
                devopsExperience: "Professional experience in DevOps, Site Reliability Engineering, or similar roles",
                scriptingLanguages: "Proficiency in at least one scripting language (PowerShell, Bash, Python)",
                containerization: "Hands-on experience with containerization (Docker) and orchestration (Kubernetes)",
                versionControl: "Confident use of version control systems (e.g., Git) and practical experience with CI/CD platforms",
                cloudPlatforms: "Proficiency in cloud platforms (AWS, Azure)",
                infrastructureCode: "Experience with Infrastructure as Code (Terraform, Ansible)",
                monitoring: "Experience with monitoring, logging, and observability tools",
                agileMethodology: "Knowledge of agile methodologies (Scrum, Kanban)"
            },
            links: {
                mastersDegree: "M.Sc. Information Systems",
                itProjects: "IT Projects",
                cpsa: "iSAQB CPSA-F",
                frameworks: "Architecture Frameworks",
                modelling: "Modelling Skills",
                bilingual: "Bilingual",
                rsaEncryption: "RSA Encryption",
                tryhackme: "TryHackMe",
                cyberSecurity: "Cyber Security 101",
                yearsExperience: "2+ Years Experience",
                pythonNode: "Python, Node.js",
                k8sArgo: "K8s & ArgoCD",
                gitlabJenkins: "GitLab & Jenkins",
                cloudCertifications: "Cloud & Security",
                securityProjects: "Security Architecture",
                devopsTools: "DevOps Tools",
                k8sExperience: "Kubernetes",
                cloudExperience: "Cloud Platforms",
                iacSkills: "IaC Skills",
                observability: "Observability",
                agileExperience: "Agile Experience"
            }
        },
        
        // Motivation Section
        motivation: {
            title: "Motivation",
            intro: "The IT Architect position at softproject resonates deeply with my professional journey and aspirations. Having evolved from backend development into a cross-functional architecture role, I've discovered my passion lies in the intersection of technology strategy, system design, and organizational enablement—precisely what this role offers for the X4 platform.",
            heading1: "Architecture as Organizational Catalyst",
            para1: "At schauinsland-reisen, I've experienced firsthand how architecture transcends pure technical design. My work on the BPMN Process Creator demonstrates this philosophy: by providing departments with a tool for transparent process documentation, I've enabled technology-driven organizational development. This aligns perfectly with softproject's need to shape architectural concepts that consider not just scalability and resilience, but holistic collaboration across Engineering, DevOps, Security, and Infrastructure teams.",
            heading2: "Proven Track Record in Modern Architecture Patterns",
            para2: "Your focus on microservices, domain-driven design, and event-driven architectures mirrors my practical experience. The MobileApp Push-Service project showcased my ability to work in a team on horizontally scalable systems using Kubernetes, and message queues (NATS), and GitOps practices. The schauinsland-reisen company-wide SSO/Keycloak initiative required architecting integrations across multiple systems while ensuring GDPR compliance—exactly the kind of enterprise-level thinking needed for the X4 platform's evolution. To see how I document and communicate these architectural concepts, view the",
            para2Link: "Page Architecture section",
            para2End: "with detailed system diagrams following C4 Model and UML standards.",
            heading3: "Technical Debt & Modernization Expertise",
            para3: "My creation of the Readme Report tool—which improved documentation coverage from 10% to 80% across 310+ repositories—demonstrates my ability to assess technical quality, identify systemic issues, and implement pragmatic modernization strategies. This experience in reducing technical debt and improving maintainability directly applies to your requirement of \"assessing technical quality of existing systems and developing modernization strategies.\"",
            heading4: "Documentation & Communication Philosophy",
            para4: "I firmly believe that \"good code is understandable by humans—and thus by AI\" leading into a 10x-preogress future. This principle has guided my work in establishing documentation standards, architecture decision records, and transparent decision-making processes. My iSAQB CPSA-F certification and practical application of BPMN, UML, and enterprise architecture frameworks ensure I can fulfill your need to \"define technical standards and document decisions in a transparent and comprehensible way.\"",
            heading5: "Platform Engineering & Cloud Native Mindset",
            para5: "My involvement in the Kubernetes rollout initiative, attendance at DevOpsCon (Internal Developer Platform track), and basic hands-on experience with ArgoCD, Helm charts, and profound knowledge with GitLab CI/CD pipelines demonstrate my readiness to \"support the introduction of new development and operational models.\" I understand that platform engineering isn't just about infrastructure—it's about enabling teams to deliver value faster and more reliably.",
            heading6: "Why This Matters to Me",
            para6: "At schauinsland-reisen, I've operated as what could be called a \"silent leader\"—driving change without formal authority through technical excellence and cross-team collaboration. While this has been rewarding, I'm seeking an environment where architecture is explicitly recognized and empowered as a strategic function. softproject's commitment to architectural excellence for the X4 platform represents exactly this opportunity.",
            para7: "The prospect of \"shaping the technical roadmap together with Product Management\" and making \"make-or-buy decisions\" particularly excites me. My experience has taught me that the best architecture emerges from close collaboration between technical depth and business understanding—a balance I'm eager to strike in a dedicated IT Architect role.",
            summaryTitle: "What I Bring to softproject",
            summaryItems: {
                technical: "Technical Foundation: M.Sc. Information Systems, iSAQB CPSA-F, proven microservices & cloud expertise",
                architecture: "Architecture Practices: BPMN, DDD, event-driven systems, enterprise architecture management",
                platform: "Platform Thinking: Kubernetes, CI/CD, GitOps, Infrastructure as Code, developer experience focus",
                quality: "Quality & Governance: Technical debt reduction, security practices, documentation culture",
                collaboration: "Collaboration & Communication: Cross-team facilitation, bilingual (German/English), transparent decision-making",
                impact: "Organizational Impact: Technology-driven organizational development, process transparency, cultural change"
            }
        },
        
        // CV Section
        cv: {
            title: "Curriculum Vitae",
            professionalExperience: "Professional Experience",
            education: "Education",
            period: "Since",
            current: "Current",
            keyImpact: "Key Impact"
        },
        
        // Contact Section
        contact: {
            title: "Let's Connect",
            buttonText: "Contact Me",
            modalTitle: "Get in Touch",
            safetyQuestion: "Safety question: How many colored boxes are connected in the System Context Diagram?",
            hint: "Hint: Enter as text! (1 → \"one\", 10 → \"ten\")",
            placeholder: "Enter your answer...",
            submitButton: "Submit Answer",
            errorMessage: "Incorrect answer. Please try again.",
            contactInfoTitle: "Contact Information",
            phone: "Phone",
            email: "Email",
            thankYou: "Thank you for taking the time to explore the application!"
        },
        
        // Common UI Elements
        common: {
            close: "Close",
            menu: "Menu",
            translationInfo: "For accuracy reasons not all parts of the page are translated."
        }
    },
    
    de: {
        // Login Page
        login: {
            title: "Zugang erforderlich",
            instruction: "Bitte geben Sie das Passwort ein oder",
            alternativ: "prüfen Sie die Seite als Code über",
            passwordPlaceholder: "Passwort eingeben",
            enterButton: "Eingeben",
            errorMessage: "Falsches Passwort. Bitte versuchen Sie es erneut."
        },
        
        // Header & Navigation
        nav: {
            overview: "Übersicht",
            motivation: "Motivation",
            cv: "Lebenslauf",
            projects: "Projekte",
            certifications: "Zertifikate",
            skills: "Fähigkeiten",
            architecture: "Seitenarchitektur",
            contact: "Kontakt"
        },
        
        // Hero Section
        hero: {
            name: "Dominik Braun",
            title: "Java-Entwickler und IT-Architekt",
            location: "Duisburg",
            subtitle: "Bewerbung für die ausgeschriebene Stelle als IT-Architekt"
        },
        
        // Overview Section
        overview: {
            title: "Qualifikationsübersicht",
            itArchitect: "IT-Architekt",
            securityArchitect: "IT-Sicherheitsarchitekt",
            devopsEngineer: "DevOps-Engineer",
            tableHeaders: {
                requested: "Gefordert",
                fulfilled: "Erfüllt",
                chapter: "Kapitel"
            },
            requirements: {
                stemDegree: "Abgeschlossenes Studium in einer MINT-Disziplin",
                projectExperience: "Erfahrung in der Durchführung von IT-Projekten und der Erstellung sowie Dokumentation von Unternehmens- und Softwarearchitekturen",
                architectureExpertise: "Fundierte Expertise im Enterprise-/Softwarearchitekturmanagement",
                bpmnExperience: "Erfahrung mit BPMN, Low-Code-Plattformen und Architektur-Frameworks (z.B. TOGAF)",
                analyticalSkills: "Ausgeprägte analytische Fähigkeiten; Modellierungserfahrung (UML, Archimate, BPMN)",
                communication: "Fähigkeit, komplexe technische Themen einfach zu erklären, sowohl auf Deutsch als auch auf Englisch",
                cloudSecurity: "Fundierte Kenntnisse in Cloud-Sicherheit (Azure, AWS) und IAM",
                securityStandards: "Erfahrung mit ISO 27001, BSI IT-Grundschutz und NIST-Frameworks",
                zeroTrust: "Erfahrung mit Zero Trust, Netzwerksegmentierung und DevSecOps",
                threatModeling: "Kenntnisse in Bedrohungsmodellierung und Sicherheitsrisikomanagement",
                encryptionTech: "Vertrautheit mit modernen Verschlüsselungstechnologien",
                splunkAttacks: "Erfahrung mit Splunk; Verständnis aktueller Angriffstechniken",
                ethicalHacking: "Ethisches Hacking",
                cicdExperience: "Fundierte Kenntnisse von CI/CD-Pipelines (GitLab CI/CD, Jenkins)",
                devopsExperience: "Berufserfahrung in DevOps, Site Reliability Engineering oder ähnlichen Rollen",
                scriptingLanguages: "Kenntnisse in mindestens einer Skriptsprache (PowerShell, Bash, Python)",
                containerization: "Praktische Erfahrung mit Containerisierung (Docker) und Orchestrierung (Kubernetes)",
                versionControl: "Sicherer Umgang mit Versionskontrollsystemen (z.B. Git) und praktische Erfahrung mit CI/CD-Plattformen",
                cloudPlatforms: "Kompetenz in Cloud-Plattformen (AWS, Azure)",
                infrastructureCode: "Erfahrung mit Infrastructure as Code (Terraform, Ansible)",
                monitoring: "Erfahrung mit Monitoring-, Logging- und Observability-Tools",
                agileMethodology: "Kenntnisse agiler Methoden (Scrum, Kanban)"
            },
            links: {
                mastersDegree: "M.Sc. Wirtschaftsinformatik",
                itProjects: "IT-Projekte",
                cpsa: "iSAQB CPSA-F",
                frameworks: "Architektur-Frameworks",
                modelling: "Modellierungskenntnisse",
                bilingual: "Zweisprachig",
                rsaEncryption: "RSA-Verschlüsselung",
                tryhackme: "TryHackMe",
                cyberSecurity: "Cyber Security 101",
                yearsExperience: "2+ Jahre Erfahrung",
                pythonNode: "Python, Node.js",
                k8sArgo: "K8s & ArgoCD",
                gitlabJenkins: "GitLab & Jenkins",
                cloudCertifications: "Cloud & Sicherheit",
                securityProjects: "Sicherheitsarchitektur",
                devopsTools: "DevOps-Tools",
                k8sExperience: "Kubernetes",
                cloudExperience: "Cloud-Plattformen",
                iacSkills: "IaC-Kenntnisse",
                observability: "Observability",
                agileExperience: "Agile Erfahrung"
            }
        },
        
        // Motivation Section
        motivation: {
            title: "Motivation",
            intro: "Die IT-Architekten-Position bei softproject resoniert tief mit meiner beruflichen Reise und meinen Bestrebungen. Nachdem ich mich von der Backend-Entwicklung zu einer funktionsübergreifenden Architekturrolle entwickelt habe, habe ich entdeckt, dass meine Leidenschaft in der Schnittstelle von Technologiestrategie, Systemdesign und organisatorischer Befähigung liegt—genau das, was diese Rolle für die X4-Plattform bietet.",
            heading1: "Architektur als organisatorischer Katalysator",
            para1: "Bei schauinsland-reisen habe ich aus erster Hand erfahren, wie Architektur über reines technisches Design hinausgeht. Meine Arbeit am BPMN Process Creator zeigt diese Philosophie: Durch die Bereitstellung eines Tools für transparente Prozessdokumentation für Abteilungen habe ich technologiegetriebene Organisationsentwicklung ermöglicht. Dies passt perfekt zu softprojects Bedarf, architektonische Konzepte zu gestalten, die nicht nur Skalierbarkeit und Resilienz berücksichtigen, sondern die ganzheitliche Zusammenarbeit über Engineering-, DevOps-, Security- und Infrastruktur-Teams hinweg.",
            heading2: "Nachgewiesene Erfolge mit modernen Architekturmustern",
            para2: "Ihr Fokus auf Microservices, Domain-Driven Design und ereignisgesteuerte Architekturen spiegelt meine praktische Erfahrung wider. Das MobileApp Push-Service Projekt zeigte meine Fähigkeit, im Team an horizontal skalierbaren Systemen mit Kubernetes und Message Queues (NATS) sowie GitOps-Praktiken zu arbeiten. Die unternehmensweite SSO/Keycloak-Initiative bei schauinsland-reisen erforderte die Architektur von Integrationen über mehrere Systeme hinweg unter Gewährleistung der DSGVO-Konformität—genau die Art von Enterprise-Level-Denken, die für die Evolution der X4-Plattform benötigt wird. Um zu sehen, wie ich diese architektonischen Konzepte dokumentiere und kommuniziere, besuchen Sie den",
            para2Link: "Bereich Seitenarchitektur",
            para2End: "mit detaillierten Systemdiagrammen nach C4-Modell und UML-Standards.",
            heading3: "Technische Schulden & Modernisierungsexpertise",
            para3: "Meine Entwicklung des Readme Report Tools—das die Dokumentationsabdeckung von 10% auf 80% über 310+ Repositories verbesserte—zeigt meine Fähigkeit, technische Qualität zu bewerten, systemische Probleme zu identifizieren und pragmatische Modernisierungsstrategien umzusetzen. Diese Erfahrung im Abbau technischer Schulden und der Verbesserung der Wartbarkeit gilt direkt für Ihre Anforderung der \"Bewertung der technischen Qualität bestehender Systeme und Entwicklung von Modernisierungsstrategien.\"",
            heading4: "Dokumentations- & Kommunikationsphilosophie",
            para4: "Ich glaube fest daran, dass \"guter Code für Menschen verständlich ist—und damit auch für KI\", was zu einer 10-fachen Fortschrittszukunft führt. Dieses Prinzip hat meine Arbeit bei der Etablierung von Dokumentationsstandards, Architecture Decision Records und transparenten Entscheidungsprozessen geleitet. Meine iSAQB CPSA-F-Zertifizierung und praktische Anwendung von BPMN, UML und Enterprise-Architektur-Frameworks stellen sicher, dass ich Ihren Bedarf erfüllen kann, \"technische Standards zu definieren und Entscheidungen transparent und verständlich zu dokumentieren.\"",
            heading5: "Platform Engineering & Cloud Native Denkweise",
            para5: "Meine Beteiligung an der Kubernetes-Rollout-Initiative, Teilnahme an der DevOpsCon (Internal Developer Platform Track) und grundlegende praktische Erfahrung mit ArgoCD, Helm Charts und fundierte Kenntnisse mit GitLab CI/CD-Pipelines zeigen meine Bereitschaft, \"die Einführung neuer Entwicklungs- und Betriebsmodelle zu unterstützen.\" Ich verstehe, dass Platform Engineering nicht nur um Infrastruktur geht—es geht darum, Teams zu befähigen, schneller und zuverlässiger Wert zu liefern.",
            heading6: "Warum mir das wichtig ist",
            para6: "Bei schauinsland-reisen habe ich als sogenannter \"stiller Anführer\" agiert—ich habe Veränderungen ohne formale Autorität durch technische Exzellenz und teamübergreifende Zusammenarbeit vorangetrieben. Während dies lohnend war, suche ich ein Umfeld, in dem Architektur explizit als strategische Funktion anerkannt und befähigt wird. softprojects Engagement für architektonische Exzellenz für die X4-Plattform stellt genau diese Gelegenheit dar.",
            para7: "Die Aussicht, \"die technische Roadmap zusammen mit dem Produktmanagement zu gestalten\" und \"Make-or-Buy-Entscheidungen\" zu treffen, begeistert mich besonders. Meine Erfahrung hat mich gelehrt, dass die beste Architektur aus enger Zusammenarbeit zwischen technischer Tiefe und Geschäftsverständnis entsteht—ein Gleichgewicht, das ich in einer dedizierten IT-Architekten-Rolle anstreben möchte.",
            summaryTitle: "Was ich zu softproject bringe",
            summaryItems: {
                technical: "Technische Grundlage: M.Sc. Wirtschaftsinformatik, iSAQB CPSA-F, nachgewiesene Microservices & Cloud-Expertise",
                architecture: "Architekturpraktiken: BPMN, DDD, ereignisgesteuerte Systeme, Enterprise-Architekturmanagement",
                platform: "Platform Thinking: Kubernetes, CI/CD, GitOps, Infrastructure as Code, Fokus auf Developer Experience",
                quality: "Qualität & Governance: Reduzierung technischer Schulden, Sicherheitspraktiken, Dokumentationskultur",
                collaboration: "Zusammenarbeit & Kommunikation: Teamübergreifende Moderation, zweisprachig (Deutsch/Englisch), transparente Entscheidungsfindung",
                impact: "Organisatorischer Einfluss: Technologiegetriebene Organisationsentwicklung, Prozesstransparenz, kultureller Wandel"
            }
        },
        
        // CV Section
        cv: {
            title: "Lebenslauf",
            professionalExperience: "Berufserfahrung",
            education: "Bildung",
            period: "Seit",
            current: "Aktuell",
            keyImpact: "Hauptauswirkung"
        },
        
        // Contact Section
        contact: {
            title: "Kontakt aufnehmen",
            buttonText: "Kontaktieren Sie mich",
            modalTitle: "Kontakt aufnehmen",
            safetyQuestion: "Sicherheitsfrage: Wie viele farbige Kästen sind im System-Kontextdiagramm verbunden?",
            hint: "Hinweis: Als Text eingeben! (1 → \"eins\", 10 → \"zehn\")",
            placeholder: "Geben Sie Ihre Antwort ein...",
            submitButton: "Antwort absenden",
            errorMessage: "Falsche Antwort. Bitte versuchen Sie es erneut.",
            contactInfoTitle: "Kontaktinformationen",
            phone: "Telefon",
            email: "E-Mail",
            thankYou: "Vielen Dank, dass Sie sich die Zeit für die Bewerbung genommen haben!"
        },
        
        // Common UI Elements
        common: {
            close: "Schließen",
            menu: "Menü",
            translationInfo: "Aus Genauigkeitsgründen sind nicht alle Teile der Seite übersetzt."
        }
    },
    
    es: {
        // Login Page
        login: {
            title: "Acceso requerido",
            instruction: "Por favor ingrese la contraseña o inspeccione",
            alternativ: "la página como código a través de",
            passwordPlaceholder: "Ingresar contraseña",
            enterButton: "Entrar",
            errorMessage: "Contraseña incorrecta. Por favor, inténtelo de nuevo."
        },
        
        // Header & Navigation
        nav: {
            overview: "Visión general",
            motivation: "Motivación",
            cv: "Curriculum Vitae",
            projects: "Proyectos",
            certifications: "Certificaciones",
            skills: "Habilidades",
            architecture: "Arquitectura de página",
            contact: "Contacto"
        },
        
        // Hero Section
        hero: {
            name: "Dominik Braun",
            title: "Desarrollador Java y Arquitecto de TI",
            location: "Duisburgo",
            subtitle: "Solicitud para el puesto anunciado como arquitecto de TI"
        },
        
        // Overview Section
        overview: {
            title: "Resumen de cualificaciones",
            itArchitect: "Arquitecto de TI",
            securityArchitect: "Arquitecto de Seguridad de TI",
            devopsEngineer: "Ingeniero DevOps",
            tableHeaders: {
                requested: "Solicitado",
                fulfilled: "Cumplido",
                chapter: "Capítulo"
            },
            requirements: {
                stemDegree: "Título universitario completado en una disciplina STEM",
                projectExperience: "Experiencia en la entrega de proyectos de TI y en la creación y documentación de arquitecturas empresariales y de software",
                architectureExpertise: "Experiencia sólida en gestión de arquitectura empresarial/de software",
                bpmnExperience: "Experiencia con BPMN, plataformas low-code y marcos de arquitectura (p. ej., TOGAF)",
                analyticalSkills: "Fuertes habilidades analíticas; experiencia en modelado (UML, Archimate, BPMN)",
                communication: "Capacidad para explicar temas técnicos complejos de manera simple, tanto en alemán como en inglés",
                cloudSecurity: "Conocimiento profundo de seguridad en la nube (Azure, AWS) e IAM",
                securityStandards: "Experiencia con ISO 27001, BSI IT-Grundschutz y marcos NIST",
                zeroTrust: "Experiencia en Zero Trust, segmentación de red y DevSecOps",
                threatModeling: "Conocimiento de modelado de amenazas y gestión de riesgos de seguridad",
                encryptionTech: "Familiaridad con tecnologías de cifrado modernas",
                splunkAttacks: "Experiencia con Splunk; comprensión de técnicas de ataque actuales",
                ethicalHacking: "Hacking ético",
                cicdExperience: "Sólido conocimiento de pipelines CI/CD (GitLab CI/CD, Jenkins)",
                devopsExperience: "Experiencia profesional en DevOps, Ingeniería de Confiabilidad del Sitio o roles similares",
                scriptingLanguages: "Competencia en al menos un lenguaje de scripting (PowerShell, Bash, Python)",
                containerization: "Experiencia práctica con contenerización (Docker) y orquestación (Kubernetes)",
                versionControl: "Uso seguro de sistemas de control de versiones (p. ej., Git) y experiencia práctica con plataformas CI/CD",
                cloudPlatforms: "Competencia en plataformas en la nube (AWS, Azure)",
                infrastructureCode: "Experiencia con Infrastructure as Code (Terraform, Ansible)",
                monitoring: "Experiencia con herramientas de monitoreo, registro y observabilidad",
                agileMethodology: "Conocimiento de metodologías ágiles (Scrum, Kanban)"
            },
            links: {
                mastersDegree: "M.Sc. Sistemas de Información",
                itProjects: "Proyectos de TI",
                cpsa: "iSAQB CPSA-F",
                frameworks: "Marcos de arquitectura",
                modelling: "Habilidades de modelado",
                bilingual: "Bilingüe",
                rsaEncryption: "Cifrado RSA",
                tryhackme: "TryHackMe",
                cyberSecurity: "Cyber Security 101",
                yearsExperience: "2+ años de experiencia",
                pythonNode: "Python, Node.js",
                k8sArgo: "K8s & ArgoCD",
                gitlabJenkins: "GitLab & Jenkins",
                cloudCertifications: "Nube y seguridad",
                securityProjects: "Arquitectura de seguridad",
                devopsTools: "Herramientas DevOps",
                k8sExperience: "Kubernetes",
                cloudExperience: "Plataformas en la nube",
                iacSkills: "Habilidades IaC",
                observability: "Observabilidad",
                agileExperience: "Experiencia ágil"
            }
        },
        
        // Motivation Section
        motivation: {
            title: "Motivación",
            intro: "El puesto de Arquitecto de TI en softproject resuena profundamente con mi trayectoria profesional y aspiraciones. Habiendo evolucionado desde el desarrollo backend hacia un rol de arquitectura multifuncional, he descubierto que mi pasión radica en la intersección de la estrategia tecnológica, el diseño de sistemas y la habilitación organizacional, precisamente lo que este rol ofrece para la plataforma X4.",
            heading1: "La arquitectura como catalizador organizacional",
            para1: "En schauinsland-reisen, he experimentado de primera mano cómo la arquitectura trasciende el diseño técnico puro. Mi trabajo en BPMN Process Creator demuestra esta filosofía: al proporcionar a los departamentos una herramienta para documentación de procesos transparente, he permitido el desarrollo organizacional impulsado por la tecnología. Esto se alinea perfectamente con la necesidad de softproject de dar forma a conceptos arquitectónicos que consideren no solo la escalabilidad y la resiliencia, sino la colaboración holística entre equipos de ingeniería, DevOps, seguridad e infraestructura.",
            heading2: "Historial comprobado en patrones de arquitectura modernos",
            para2: "Su enfoque en microservicios, diseño impulsado por el dominio y arquitecturas impulsadas por eventos refleja mi experiencia práctica. El proyecto MobileApp Push-Service demostró mi capacidad para trabajar en equipo en sistemas escalables horizontalmente usando Kubernetes y colas de mensajes (NATS), y prácticas GitOps. La iniciativa de SSO/Keycloak en toda la empresa en schauinsland-reisen requirió arquitecturar integraciones a través de múltiples sistemas mientras se aseguraba el cumplimiento del GDPR, exactamente el tipo de pensamiento a nivel empresarial necesario para la evolución de la plataforma X4. Para ver cómo documento y comunico estos conceptos arquitectónicos, visite la",
            para2Link: "sección de Arquitectura de página",
            para2End: "con diagramas de sistemas detallados siguiendo el modelo C4 y estándares UML.",
            heading3: "Experiencia en deuda técnica y modernización",
            para3: "Mi creación de la herramienta Readme Report, que mejoró la cobertura de documentación del 10% al 80% en más de 310 repositorios, demuestra mi capacidad para evaluar la calidad técnica, identificar problemas sistémicos e implementar estrategias de modernización pragmáticas. Esta experiencia en reducir la deuda técnica y mejorar la mantenibilidad se aplica directamente a su requisito de \"evaluar la calidad técnica de los sistemas existentes y desarrollar estrategias de modernización.\"",
            heading4: "Filosofía de documentación y comunicación",
            para4: "Creo firmemente que \"el buen código es comprensible para los humanos, y por lo tanto para la IA\", lo que lleva a un futuro de progreso 10x. Este principio ha guiado mi trabajo en el establecimiento de estándares de documentación, registros de decisiones arquitectónicas y procesos de toma de decisiones transparentes. Mi certificación iSAQB CPSA-F y aplicación práctica de BPMN, UML y marcos de arquitectura empresarial aseguran que puedo cumplir con su necesidad de \"definir estándares técnicos y documentar decisiones de manera transparente y comprensible.\"",
            heading5: "Ingeniería de plataformas y mentalidad nativa de la nube",
            para5: "Mi participación en la iniciativa de implementación de Kubernetes, asistencia a DevOpsCon (track de Internal Developer Platform) y experiencia práctica básica con ArgoCD, Helm charts y profundo conocimiento con pipelines de GitLab CI/CD demuestran mi preparación para \"apoyar la introducción de nuevos modelos de desarrollo y operación.\" Entiendo que la ingeniería de plataformas no se trata solo de infraestructura, se trata de permitir que los equipos entreguen valor más rápido y de manera más confiable.",
            heading6: "Por qué esto me importa",
            para6: "En schauinsland-reisen, he operado como lo que podría llamarse un \"líder silencioso\", impulsando el cambio sin autoridad formal a través de la excelencia técnica y la colaboración entre equipos. Si bien esto ha sido gratificante, estoy buscando un entorno donde la arquitectura sea explícitamente reconocida y empoderada como una función estratégica. El compromiso de softproject con la excelencia arquitectónica para la plataforma X4 representa exactamente esta oportunidad.",
            para7: "La perspectiva de \"dar forma a la hoja de ruta técnica junto con la gestión de productos\" y tomar \"decisiones de hacer o comprar\" me emociona particularmente. Mi experiencia me ha enseñado que la mejor arquitectura surge de la estrecha colaboración entre la profundidad técnica y la comprensión del negocio, un equilibrio que estoy ansioso por lograr en un rol dedicado de arquitecto de TI.",
            summaryTitle: "Lo que aporto a softproject",
            summaryItems: {
                technical: "Fundación técnica: M.Sc. Sistemas de Información, iSAQB CPSA-F, experiencia comprobada en microservicios y nube",
                architecture: "Prácticas de arquitectura: BPMN, DDD, sistemas impulsados por eventos, gestión de arquitectura empresarial",
                platform: "Pensamiento de plataforma: Kubernetes, CI/CD, GitOps, Infrastructure as Code, enfoque en experiencia del desarrollador",
                quality: "Calidad y gobernanza: Reducción de deuda técnica, prácticas de seguridad, cultura de documentación",
                collaboration: "Colaboración y comunicación: Facilitación entre equipos, bilingüe (alemán/inglés), toma de decisiones transparente",
                impact: "Impacto organizacional: Desarrollo organizacional impulsado por tecnología, transparencia de procesos, cambio cultural"
            }
        },
        
        // CV Section
        cv: {
            title: "Curriculum Vitae",
            professionalExperience: "Experiencia profesional",
            education: "Educación",
            period: "Desde",
            current: "Actual",
            keyImpact: "Impacto clave"
        },
        
        // Contact Section
        contact: {
            title: "Conectemos",
            buttonText: "Contáctame",
            modalTitle: "Ponerse en contacto",
            safetyQuestion: "Pregunta de seguridad: ¿Cuántas cajas de colores están conectadas en el diagrama de contexto del sistema?",
            hint: "Pista: ¡Ingresar como texto! (1 → \"uno\", 10 → \"diez\")",
            placeholder: "Ingresa tu respuesta...",
            submitButton: "Enviar respuesta",
            errorMessage: "Respuesta incorrecta. Por favor, inténtalo de nuevo.",
            contactInfoTitle: "Información de contacto",
            phone: "Teléfono",
            email: "Correo electrónico",
            thankYou: "¡Gracias por tomarse el tiempo de explorar la aplicación!"
        },
        
        // Common UI Elements
        common: {
            close: "Cerrar",
            menu: "Menú",
            translationInfo: "Por razones de precisión, no todas las partes de la página están traducidas."
        }
    }
};