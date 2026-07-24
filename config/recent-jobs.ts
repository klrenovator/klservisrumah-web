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
  { service: "Blocked sink help", location: "Cheras", label: "Popular local request", timeLabel: "today" }
];
