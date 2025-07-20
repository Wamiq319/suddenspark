# SuddenSparkEvents Frontend

This is the frontend for **Sudden Spark Events**, a community-driven platform for submitting and discovering local events.

---

## ✅ Core Pages

| Page             | Route            | Purpose                                                     |
| ---------------- | ---------------- | ----------------------------------------------------------- |
| **Home**         | `/`              | Intro, featured events, CTAs                                |
| **Submit Event** | `/submit`        | Public form to submit an event (pending approval)           |
| **Events List**  | `/events`        | All approved events shown as cards                          |
| **Event Detail** | `/events/[slug]` | Full detail page for an individual event                    |
| **Admin Panel**  | `/admin`         | Approve or reject submitted events (basic, no auth for now) |
| **About Us**     | `/about`         | Project background, mission, vision                         |
| **Contact**      | `/contact`       | Basic contact form (optional map/address section)           |

---

## 🧩 Component Architecture & Rules

- All **shared components** must be placed in:

  - `src/components/[category]/ComponentName.tsx`

- If a component is used across multiple pages, place it in:

  - `src/components/ui/` or appropriate subfolder (`layout/`, `events/`, etc.)

- Every component file must use **named export syntax**:

  ```tsx
  export const ComponentName = () => {
    return <div>...</div>;
  };
  ```

### 📦 Import Rules

1. **Component is first imported into its local index.ts inside its folder:**

   ```ts
   // src/components/ui/index.ts
   export * from "./Button";
   ```

2. **Then it's re-exported from the main components/index.ts:**

   ```ts
   // src/components/index.ts
   export * from "./ui";
   export * from "./layout";
   export * from "./events";
   ```

3. **Finally, import and use it anywhere:**

   ```tsx
   import { Button } from "@/components";
   ```

   Follow the same structure used in the Hero and Home components.

- Keep code minimal and consistent.
- Use DaisyUI utility classes like:
  - `btn`
  - `btn-primary`
  - `btn-outline`
- Avoid custom `bg-`, `text-`, or `hover:` classes unless necessary.
