# LifeOS Demo Recording Script

> Total Duration: ~90 seconds (3 scenes × 30 seconds)
> Recommended Tool: OBS Studio / Loom / ScreenStudio
> Resolution: 1920×1080 @ 30fps

---

## 🎬 Pre-Recording Setup

### Environment Preparation

```bash
# 1. Navigate to project
cd /c/Users/张德帅/lifeos/web

# 2. Verify build
npm run lint
npm run build

# 3. Start dev server
npm run dev
```

### Browser Setup

- Browser: Chrome (latest)
- Window size: 1920×1080
- Zoom level: 100%
- Extensions: Disabled (clean view)
- DevTools: Closed initially (open during Scene 3)

### localStorage Reset

Before recording, clear localStorage to ensure clean state:

```javascript
// In browser DevTools console:
localStorage.clear()
location.reload()
```

---

## 🎥 Scene 1: Dashboard Interaction Showcase (30 seconds)

### Goal
Demonstrate the cross-component linkages and core dashboard interactions.

### Storyboard

**[0:00 - 0:03] Opening Shot**
- Show full dashboard at default state
- Camera: Static, full viewport
- Voiceover (optional): "LifeOS — a personal life operating system built with Next.js 16 and React 19."

**[0:03 - 0:10] LifeDimensionDock Interaction**

Action sequence:
1. Hover over "Health" dimension card (1 second)
2. Click "Health" dimension → Active state activates (blue glow)
3. Camera focus: Center area shows Hero Quote transition
4. Hero Quote displays: "Health" dimension content
5. Wait 2 seconds to let viewer absorb the linkage

Voiceover: "Click any life dimension, and the central hero quote dynamically updates to show that dimension's focus."

**[0:10 - 0:18] Hero Quote Linkage Confirmation**

Action sequence:
1. Click "Career" dimension
2. Hero Quote smoothly transitions to Career content
3. Click "Career" again → cancel selection
4. Hero Quote reverts to default quote

Voiceover: "Selection toggles cleanly. Click again to deselect and restore the default quote."

**[0:18 - 0:28] TodayVoyageCard + StatsBar Linkage**

Action sequence:
1. Camera pan to right sidebar (TodayVoyageCard)
2. Click first task checkbox → task marked complete (line-through + opacity)
3. Camera pan to bottom (StatsBar)
4. StatsBar "Today Completed" count: 1/5 → 2/5
5. Click second task → 2/5 → 3/5
6. Uncheck first task → 3/5 → 2/5

Voiceover: "Task completions instantly update the stats bar at the bottom — a real-time cross-component linkage."

**[0:28 - 0:30] Closing Shot**
- Reset camera to full dashboard
- Show: Tasks checked, dimension selected, all states active

---

## 🎥 Scene 2: localStorage Persistence Showcase (30 seconds)

### Goal
Demonstrate that user state persists across page refreshes.

### Storyboard

**[0:00 - 0:08] Setup State**

Action sequence:
1. Start with clean state (run `localStorage.clear()` if needed)
2. Click "Health" dimension → Hero Quote shows Health content
3. Check all 5 tasks in TodayVoyageCard
4. StatsBar shows: 5/5 completed
5. Hold final state for 2 seconds

Voiceover: "I've selected the Health dimension and completed all five tasks for today."

**[0:08 - 0:15] Page Refresh**

Action sequence:
1. Camera focus: Browser address bar / refresh button
2. Press F5 (or click refresh icon)
3. Brief loading state (~200ms)
4. Page reloads

Voiceover: "Now I'm going to refresh the page completely."

**[0:15 - 0:25] State Preservation Confirmation**

Action sequence:
1. Page fully loaded
2. Camera pan: Show Hero Quote still displays Health content
3. Camera pan: Show all 5 tasks still checked
4. Camera pan: Show StatsBar still displays 5/5
5. Hold for 3 seconds to emphasize persistence

Voiceover: "All states are preserved — the selected dimension, the task completions, and the stats bar count. No backend, no database — just localStorage with a custom React 19 hook."

**[0:25 - 0:30] Cancel + Refresh Demo**

Action sequence:
1. Click "Health" again → cancel selection
2. Press F5 to refresh
3. Show Hero Quote reverts to default quote
4. Tasks remain checked (independent state)

Voiceover: "Cancel selection, refresh — the dimension state clears, but task state remains. Each persisted state is independent."

---

## 🎥 Scene 3: Technical Detail Showcase (30 seconds)

### Goal
Demonstrate the technical depth: localStorage inspection, no hydration warnings, React 19 architecture.

### Storyboard

**[0:00 - 0:08] DevTools localStorage Inspection**

Action sequence:
1. Open DevTools (F12)
2. Navigate to: Application → Storage → Local Storage → http://localhost:3000
3. Camera focus: localStorage key-value pairs
4. Highlight two keys:
   - `lifeos:v1:taskStatus`
   - `lifeos:v1:selectedDimensionId`
5. Click `lifeos:v1:taskStatus` to show JSON value:
   ```json
   {"task-1":true,"task-2":true,"task-3":true,"task-4":true,"task-5":true}
   ```

Voiceover: "Here are the persisted states in localStorage — namespaced with version prefix for future migrations."

**[0:08 - 0:15] No Hydration Warnings**

Action sequence:
1. Switch to Console tab
2. Clear console
3. Refresh page (F5)
4. Show clean console — zero warnings, zero errors
5. Highlight: No "hydration mismatch" warnings

Voiceover: "Despite using localStorage, there are zero hydration warnings. The architecture ensures SSR HTML matches the first client render exactly."

**[0:15 - 0:23] React 19 Architecture Inspection**

Action sequence:
1. Open Components tab (React DevTools)
2. Show component tree:
   ```
   - RootLayout
     - HomePage (Server Component badge)
       - TopBar
       - DashboardClientShell (Client Component)
         - DashboardCanvas
           - LifeDimensionDock
           - TodayVoyageCard
           - StatsBar
           - ... (5 more)
   ```
3. Click `DashboardClientShell` to inspect props/state
4. Show: `selectedDimensionId`, `taskStatus` state values

Voiceover: "The architecture is clean: Server Component at the top, a single Client boundary at DashboardClientShell, managing all cross-component state."

**[0:23 - 0:30] Code Reveal (Optional)**

Action sequence:
1. Switch to VSCode / editor
2. Open `lib/useLocalStorageState.ts`
3. Camera focus: Lines 30-50 (the queueMicrotask logic)
4. Highlight key lines:
   ```typescript
   queueMicrotask(() => {
     const stored = safeGet(key, initialValue);
     setState(stored);
     isHydrated.current = true;
   });
   ```

Voiceover: "The secret sauce: `queueMicrotask` defers setState to bypass React 19's stricter lint rules. `isHydrated` ref prevents the initial render from overwriting localStorage. Zero new dependencies — just deep React fundamentals."

---

## 🎬 Recording Tips

### Camera Movement

- **Use smooth pans, not jumps** — viewers need time to absorb each interaction
- **Hold final states for 2-3 seconds** — gives time to register the change
- **Avoid rapid clicking** — each interaction should be visible

### Voiceover Style

- **Pace:** 140-160 words/minute (relaxed but professional)
- **Tone:** Confident but not boastful
- **Avoid:** "Amazing", "Incredible", "Best ever"
- **Prefer:** "Notice", "Observe", "Here you can see"

### Mouse Cursor

- **Highlight cursor** if possible (use ScreenStudio or Mouseposé)
- **Slow down clicks** — visible click animation
- **Pause before clicking** — gives viewer time to anticipate

### Transitions

- **No fancy transitions** — clean cuts between scenes
- **Title cards (optional):**
  - Scene 1: "Dashboard Interactions"
  - Scene 2: "State Persistence"
  - Scene 3: "Under the Hood"

---

## 🎤 Voiceover Script (Complete)

### Scene 1 (30s)

> "LifeOS — a personal life operating system built with Next.js 16 and React 19. Click any life dimension, and the central hero quote dynamically updates to show that dimension's focus. Selection toggles cleanly. Click again to deselect and restore the default quote. Task completions instantly update the stats bar at the bottom — a real-time cross-component linkage."

### Scene 2 (30s)

> "I've selected the Health dimension and completed all five tasks for today. Now I'm going to refresh the page completely. All states are preserved — the selected dimension, the task completions, and the stats bar count. No backend, no database — just localStorage with a custom React 19 hook. Cancel selection, refresh — the dimension state clears, but task state remains. Each persisted state is independent."

### Scene 3 (30s)

> "Here are the persisted states in localStorage — namespaced with version prefix for future migrations. Despite using localStorage, there are zero hydration warnings. The architecture is clean: Server Component at the top, a single Client boundary at DashboardClientShell, managing all cross-component state. The secret sauce: queueMicrotask defers setState to bypass React 19's stricter lint rules. Zero new dependencies — just deep React fundamentals."

---

## 📊 Post-Production Checklist

### Video Editing

- [ ] Trim dead time at start/end of each scene
- [ ] Add fade-in / fade-out at video boundaries
- [ ] Color grading (slight warmth for glassmorphism aesthetic)
- [ ] Add title cards between scenes
- [ ] Add subtle background music (royalty-free)

### Audio

- [ ] Voiceover noise reduction
- [ ] Volume normalization (-16 LUFS)
- [ ] Background music ducked under voiceover (-12 dB)

### Export Settings

- **Format:** MP4 (H.264)
- **Resolution:** 1920×1080
- **Frame rate:** 30 fps
- **Bitrate:** 8-10 Mbps
- **Audio:** AAC, 192 kbps, stereo

### Distribution Channels

- [ ] **YouTube** (full 90-second version)
- [ ] **Twitter/X** (60-second cut for engagement)
- [ ] **LinkedIn** (90-second professional version)
- [ ] **GitHub README** (embedded GIF for top 30 seconds)
- [ ] **Personal Portfolio** (full version with case study)

---

## 🔧 Recording Toolkit

### Recommended Tools

| Tool | Purpose | Cost |
|------|---------|------|
| OBS Studio | Screen recording | Free |
| ScreenStudio | macOS screen recording with cursor effects | Paid |
| Loom | Quick screen + voice recording | Free tier |
| DaVinci Resolve | Video editing | Free |
| Audacity | Audio cleanup | Free |
| iMovie | Simple editing (macOS) | Free |

### Asset Resources

- **Background Music:** Epidemic Sound, Artlist, YouTube Audio Library
- **Sound Effects:** Freesound.org
- **Title Card Templates:** Figma community templates

---

## 🎯 Alternative Demo Formats

### Format 1: GIF (for GitHub README)

- Duration: 10-15 seconds
- Focus: Single most impressive interaction
- Recommendation: Scene 1 (0:18 - 0:28) — Task → StatsBar linkage
- Tool: Use ezgif.com or LICEcap

### Format 2: Twitter Thread (4 tweets)

- Tweet 1: Project overview + Scene 1 GIF
- Tweet 2: Tech stack breakdown
- Tweet 3: Persistence demo (Scene 2 GIF)
- Tweet 4: Architecture insight + GitHub link

### Format 3: Long-form Case Study (Blog)

- 1500-2500 words
- Embedded video for each scene
- Code snippets for key technical decisions
- Lessons learned section

---

**Recording this demo demonstrates: technical depth, product thinking, and presentation skills — all in 90 seconds.**
