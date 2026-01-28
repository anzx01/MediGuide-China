# MediGuide China - MVP

A navigation tool to help English-speaking visitors navigate Chinese hospitals. This is **NOT medical advice** - it's a step-by-step guide for finding your way through the hospital visit process.

## What This MVP Does

MediGuide China provides:
- Hospital location and contact information for Beijing
- Step-by-step navigation through a general checkup visit
- English and Chinese phrases for common situations
- Progress tracking through your hospital visit

## What This MVP Does NOT Do

This app does NOT:
- Provide medical advice, diagnosis, or treatment recommendations
- Replace professional medical consultation
- Guarantee hospital availability or services
- Verify insurance coverage
- Offer emergency medical services

**Always consult qualified healthcare professionals for all medical decisions.**

## Tech Stack

- **Vite + React** - Fast development and build
- **React Router** - Client-side routing
- **Local JSON** - Data storage (no backend required)
- **localStorage** - Visit progress persistence

## Project Structure

```
mediguide-china/
├── src/
│   ├── components/       # Reusable components (DisclaimerModal)
│   ├── pages/           # All route pages
│   │   ├── Home.jsx
│   │   ├── CitySelection.jsx
│   │   ├── HospitalRecommendation.jsx
│   │   ├── VisitProgress.jsx
│   │   ├── StepDetail.jsx
│   │   ├── About.jsx
│   │   └── Placeholder.jsx
│   ├── data/            # JSON data files
│   │   ├── hospitals.json
│   │   └── visitFlow.json
│   └── App.jsx          # Main app with routing
```

## How to Run

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation & Running

```bash
# Navigate to project directory
cd mediguide-china

# Install dependencies (if not already done)
npm install

# Start development server
npm run dev
```

The app will be available at: **http://localhost:5173/**

### Build for Production

```bash
npm run build
```

## How to Test the Main Flow

### Complete User Journey (5-10 minutes)

1. **Launch App**
   - Open http://localhost:5173/
   - Read and accept the disclaimer modal
   - Click "I Understand"

2. **Home Page**
   - See 4 situation buttons
   - Click "General Checkup" (only functional button)
   - Other buttons lead to "Coming Soon" pages

3. **City Selection**
   - Question 1: Select "Beijing"
   - Question 2: Choose "Yes, I have insurance" or "No insurance"

4. **Hospital Recommendation**
   - See 2 hospitals with details:
     - Peking University International Hospital
     - Beijing United Family Hospital
   - Click "Start my visit" on either hospital

5. **Visit Progress Page**
   - See 5 steps:
     1. Arrival & Registration
     2. Payment & Queue
     3. Doctor Consultation
     4. Tests & Lab Work
     5. Get Prescription & Leave
   - Current step (Step 1) is expanded and highlighted
   - Click "View Details" or click on the step title

6. **Step Detail Page**
   - See 4 sections:
     1. What to do now
     2. Where to go
     3. What to say (click for fullscreen)
     4. What happens next
   - Click "What to say" button → See fullscreen modal with English and Chinese phrases
   - Close modal
   - Click "Mark Complete & Next" → Returns to progress page with Step 2 as current

7. **Progress Through All Steps**
   - Repeat steps 5-6 for each of the 5 steps
   - Completed steps show ✓ checkmark and green background
   - Current step has blue border
   - State persists in localStorage (refresh page to verify)

8. **About Page**
   - From Home page, click "About & Disclaimer"
   - Read full disclaimer and app information
   - Click "Back to Home"

### Testing State Persistence

1. Start a visit and complete 2-3 steps
2. Refresh the browser (F5)
3. Navigate back to the visit progress page
4. Verify completed steps are still marked complete
5. Verify current step is preserved

### Testing Navigation

- All "Back" buttons work correctly
- Clicking step titles navigates to detail pages
- "Mark Complete & Next" advances progress
- Placeholder pages have "Back to Home" button

## Key Features Implemented

### ✅ Core Functionality
- 4 situation entry points (1 functional, 3 placeholders)
- 2-question hospital selection flow
- 2 hospitals in Beijing
- 5-step visit flow with progress tracking
- Step detail pages with 4 required sections
- Fullscreen "What to say" modal with translations

### ✅ Legal & Safety
- Disclaimer modal on launch (required acceptance)
- About page with full disclaimer
- No medical claims anywhere in the app
- Clear statement: "This is NOT medical advice"

### ✅ State Management
- localStorage for visit progress
- Completed steps tracking
- Current step tracking
- State persists across page refreshes

### ✅ User Experience
- Simple, linear flow
- Clear navigation
- Visual indicators (checkmarks, colors, borders)
- No dead ends (all pages have navigation)

## Data Files

### hospitals.json
Contains 2 hospitals with:
- Name (English + Chinese)
- Address (English + Chinese)
- Phone number
- English proficiency level
- Wait time estimates
- Insurance acceptance
- GPS coordinates

### visitFlow.json
Contains 5 steps with:
- Title
- What to do
- Where to go
- What to say (English + Chinese)
- What happens next
- Estimated time

## Limitations (By Design)

This MVP intentionally has:
- Only 1 city (Beijing)
- Only 2 hospitals
- Only 1 situation type (General Checkup)
- Only 5 fixed steps
- No backend/API
- No user accounts
- No real-time data
- No search or filters
- Minimal styling

## Future Enhancements (Not in MVP)

- More cities and hospitals
- Emergency and specialist visit flows
- Real-time wait times
- Map integration
- Insurance verification
- Multi-language support
- Push notifications
- Offline mode (PWA)

## License

This is an MVP prototype for demonstration purposes.

## Disclaimer

**IMPORTANT: This application is a navigation tool only and does NOT provide medical advice.**

Always consult qualified healthcare professionals for medical decisions. Hospital information may not be current. Use at your own risk.
