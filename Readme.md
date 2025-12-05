# Customized application page from Dominik Braun

Although a short source code analysis is recommended ..

.. the [page can be accessed here](https://dbraun1991.github.io/diffcomparison/).

In case of local `in browser` retrieval, check out the [local_how_to.md](./local_how_to.md)

## Features

- **Custom Color Scheme**: Matching `softprojects` design pattern
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Burger Menu Navigation**: Mobile-friendly slide-out menu with all sections
- **Tracking System**: Cloudflare Worker-based analytics with session tracking
- **Professional Content**: CV, projects, certifications, skills sections
- **Requirements Overview**: Table showing qualifications vs. job requirements
- **Font Awesome Icons**: Professional iconography throughout

## Architecture Documentation

The project includes comprehensive architecture diagrams in `resources/mermaid/`:

### Context Diagram
- **File**: `tracking-context-diagram.svg`
- **Shows**: System boundaries, external actors, and component relationships
- **Use**: High-level system overview following C4 Model standards

<img src="resources/mermaid/tracking-context-diagram.svg" width="250em">

### Sequence Diagram
- **File**: `mermaid–sequenceflow.svg`
- **Shows**: Step-by-step communication flow between browser, GitHub Pages, and Cloudflare Worker
- **Use**: Understanding how tracking pixels work and data flows

<img src="resources/mermaid/mermaid–sequenceflow.svg" width="250em">

### Documentation
- **File**: `mermaid_sequence.md`
- **Contains**: Mermaid source code for the sequence diagram
- **Use**: Edit and regenerate diagrams as needed

These diagrams demonstrate:
- Software architecture skills
- System design capabilities
- Technical documentation standards
- C4 Model and UML compliance

## Color Palette

- Background Blue: `#0B132E`
- Button Orange: `#FF5A00`
- Headings (H1): `#FFFFFF`
- Headings (H2): `#B7BECD`
- Vertical Dividers: `#9BAEEE`
- Horizontal Dividers: `#1E3278`

## Structure

```
.
├── frontendREADME.md       # This file
├── index.html              # Login page with UUID generation
├── local_how_to.md         # Local testing guide
├── main.html               # Main content with CV, projects, skills
├── password-auth.js        # Authentication logic
├── password-hash-generator.html
├── resources
│   ├── mermaid             # Architecture diagrams
│   │   ├── mermaid_sequence.md
│   │   ├── mermaid–sequenceflow.svg
│   │   └── tracking-context-diagram.svg
│   └── profile.jpg
├── script.js               # Navigation, tracking, interactions
└── style.css               # Styling and color scheme
```

## Tracking System

The portfolio includes a privacy-friendly tracking system:

- **Session Management**: UUID v4 generated per browser session
- **Storage**: sessionStorage (cleared on tab close)
- **Backend**: Cloudflare Worker with KV storage
- **Dashboard**: Real-time analytics with search/filter capabilities
- **Events Tracked**:
  - Login events
  - Page loads
  - Section navigation clicks
  
**Privacy**: No cookies, no persistent identifiers, IP-based but anonymous

## GitHub Pages Setup

1. Upload all files to your repository root
2. Go to **Settings → Pages**
3. Select your branch (usually `main`)
4. Save and wait ~2 minutes for deployment
5. Your site will be live at `https://username.github.io/repository-name/`

## Content Sections

### Overview
- Qualifications table for IT Architect, IT-Security Architect, and DevOps Engineer positions

### Curriculum Vitae
- Professional experience (chronological, newest first)
- Education history
- International experience highlighted

### Projects
- BPMN Process Creator (schauinsland-reisen)
- Company-Wide SSO/Keycloak (schauinsland-reisen)
- MobileApp Push-Service (Federal government)
- Supplier Platform (Agricultural cooperative)
- Skill Database (Internal IT consulting)

### Certifications
- TryHackMe Cyber Security certificates
- iSAQB CPSA-F (Software Architecture)
- Software Architecture Camp Foundation
- Professional Scrum Master (PSM I)
- PRINCE2, ITIL Foundation

### Skills
Organized by category:
- Backend Development
- Frontend Development
- DevOps & Cloud
- Databases
- Testing & Quality
- Security & Encryption
- Methodologies & Tools
- Languages

## Technologies

### Frontend
- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript
- Font Awesome 6.5.1 (icons)
- SVG (custom icons and architecture diagrams)

### Backend (Cloudflare)
- Cloudflare Workers (Edge computing)
- Cloudflare KV (Key-value storage)
- CORS handling
- Real-time dashboard generation

### Tracking
- 1x1 transparent GIF pixel
- UUID v4 session management
- sessionStorage API
- RESTful tracking endpoints

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Local Development

For local testing with tracking:
```bash
# Option 1: Python
python3 -m http.server 8000

# Option 2: Node.js
npx http-server -p 8000

# Option 3: VS Code Live Server
# Install extension and right-click index.html
```

Then visit: `http://localhost:8000`

Note: Tracking works on localhost (CORS configured)

## Architecture Highlights

This portfolio demonstrates:
- **Separation of Concerns**: Static frontend + serverless backend
- **Edge Computing**: Cloudflare Workers for global performance
- **Privacy-First Design**: Minimal data collection, session-based
- **Professional Documentation**: Architecture diagrams following industry standards
- **Modern Web Standards**: ES6+, CSS Grid/Flexbox, semantic HTML
- **DevOps Practices**: GitOps deployment via GitHub Pages
- **Security**: HTTPS, CORS, no sensitive data exposure
