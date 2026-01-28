# MediGuide China - Page & Route Definitions

## 1. Home Page
**Route:** `/`
**Purpose:** Entry point - user selects their medical situation
**Incoming Data:** None
**Outgoing Navigation:**
- Button 1 "General Checkup" → `/city`
- Button 2 "Emergency" → `/placeholder/emergency`
- Button 3 "Specialist Visit" → `/placeholder/specialist`
- Button 4 "Pharmacy Only" → `/placeholder/pharmacy`

---

## 2. City Selection Page
**Route:** `/city`
**Purpose:** User selects their city (only Beijing available)
**Incoming Data:** None
**Outgoing Navigation:**
- Select "Beijing" → `/hospitals?city=beijing`

---

## 3. Hospital Recommendation Page
**Route:** `/hospitals`
**Query Params:** `?city=beijing`
**Purpose:** Show 2 hospitals, user picks one
**Incoming Data:**
- City from query params
- Loads hospitals from `hospitals.json`
**Outgoing Navigation:**
- Click "Start my visit" on hospital card → `/visit/:hospitalId`

---

## 4. Visit Progress Page
**Route:** `/visit/:hospitalId`
**Purpose:** Show 5-step progress tracker, navigate through visit
**Incoming Data:**
- `hospitalId` from URL params
- Loads hospital from `hospitals.json`
- Loads steps from `visitFlow.json`
- Current step from localStorage (default: step1)
**Outgoing Navigation:**
- Click on any step → `/visit/:hospitalId/step/:stepId`
- "Next Step" button → Updates localStorage, stays on same page

---

## 5. Step Detail Page
**Route:** `/visit/:hospitalId/step/:stepId`
**Purpose:** Show detailed instructions for current step
**Incoming Data:**
- `hospitalId` from URL params
- `stepId` from URL params
- Loads step from `visitFlow.json`
- Loads hospital from `hospitals.json`
**Outgoing Navigation:**
- "Back to Progress" → `/visit/:hospitalId`
- "Mark Complete & Next" → Updates localStorage, navigates to `/visit/:hospitalId`
- Click "What to Say" → Opens fullscreen modal (no navigation)

---

## 6. Placeholder Page
**Route:** `/placeholder/:situation`
**Purpose:** Show "coming soon" for unimplemented features
**Incoming Data:**
- `situation` from URL params
**Outgoing Navigation:**
- "Back to Home" → `/`

---

## State Management

**localStorage keys:**
- `currentStep_{hospitalId}` - Stores current step ID for each hospital
- `completedSteps_{hospitalId}` - Array of completed step IDs

**No backend required** - All state is client-side
