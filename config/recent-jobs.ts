export type RecentJob = {
  service: string;
  location: string;
  label: string;
  timeLabel: string;
};

// Privacy-safe public activity labels. Replace or extend these with verified dispatch records when available.
export const recentJobs: RecentJob[] = [
  { service: "PU grouting inquiry", location: "Subang Jaya", label: "Popular local request", timeLabel: "today" },
  { service: "Interior painting quote", location: "Petaling Jaya", label: "Popular local request", timeLabel: "this week" },
  { service: "TV wall mounting", location: "Mont Kiara", label: "Popular local request", timeLabel: "this week" },
  { service: "Plaster ceiling repair", location: "Shah Alam", label: "Popular local request", timeLabel: "this week" },
  { service: "Blocked sink help", location: "Cheras", label: "Popular local request", timeLabel: "today" },
  { service: "Ceiling fan installation", location: "Puchong", label: "Popular local request", timeLabel: "today" },
  { service: "Water heater replacement", location: "Klang", label: "Popular local request", timeLabel: "this week" },
  { service: "LED downlight install", location: "Setia Alam", label: "Popular local request", timeLabel: "this week" },
  { service: "Bathroom tile retile", location: "USJ", label: "Popular local request", timeLabel: "this week" },
  { service: "Skim coat and repaint", location: "Damansara", label: "Popular local request", timeLabel: "today" },
  { service: "DB box upgrade", location: "Kajang", label: "Popular local request", timeLabel: "today" },
  { service: "Tiler quote request", location: "Cyberjaya", label: "Popular local request", timeLabel: "this week" },
  { service: "SPC flooring install", location: "Mont Kiara", label: "Popular local request", timeLabel: "today" },
  { service: "Epoxy garage floor quote", location: "Shah Alam", label: "Popular local request", timeLabel: "this week" },
  { service: "Roof leak repair", location: "Sungai Buloh", label: "Popular local request", timeLabel: "today" },
  { service: "Custom wardrobe built-in", location: "PJ Old Town", label: "Popular local request", timeLabel: "this week" },
  { service: "Smart lock installation", location: "Bangsar", label: "Popular local request", timeLabel: "today" },
  { service: "Window glass replacement", location: "Klang", label: "Popular local request", timeLabel: "this week" },
  { service: "Kitchen cabinet quote", location: "Subang", label: "Popular local request", timeLabel: "this week" },
  { service: "Door planing and hinge fix", location: "Cheras", label: "Popular local request", timeLabel: "today" },
  { service: "Frameless shower screen install", location: "Mont Kiara", label: "Popular local request", timeLabel: "this week" },
  { service: "Weekly condo cleaning", location: "Bangsar", label: "Popular local request", timeLabel: "today" },
  { service: "Move-out deep cleaning", location: "PJ", label: "Popular local request", timeLabel: "this week" },
  { service: "Hikvision CCTV install (4 cam)", location: "Setia Alam", label: "Popular local request", timeLabel: "today" },
  { service: "Autogate motor replacement", location: "Klang", label: "Popular local request", timeLabel: "this week" },
  { service: "Custom grille fabrication", location: "Seri Kembangan", label: "Popular local request", timeLabel: "today" },
  { service: "Post-renovation cleaning", location: "Damansara", label: "Popular local request", timeLabel: "this week" }
];
