// Sample data only. Replace with real members and events when ready.
export type RoleKey = "guide" | "stay" | "startup" | "student" | "govt";

export const roleMeta: Record<RoleKey, { label: string; chip: string; avatar: string }> = {
  guide: { label: "Guide or operator", chip: "bg-sun text-ink", avatar: "bg-sun text-ink" },
  stay: { label: "Stay or cafe", chip: "bg-sea text-ink", avatar: "bg-sea text-ink" },
  startup: { label: "Startup or creator", chip: "bg-ink text-white", avatar: "bg-ink text-white" },
  student: { label: "Student", chip: "bg-white text-ink border border-line", avatar: "bg-[#c9d5e3] text-ink" },
  govt: { label: "Government or body", chip: "bg-navy text-white", avatar: "bg-navy text-white" },
};

export type Member = {
  slug: string;
  name: string;
  role: RoleKey;
  headline: string;
  area: string;
  languages: string[];
  about: string;
  offers: string[];
  looking: string[];
};

export const members: Member[] = [
  { slug: "sample-guide-araku", name: "Sample Guide", role: "guide", headline: "Araku and Borra Caves day trips", area: "Araku Valley", languages: ["Telugu", "English", "Hindi"], about: "Sample profile. A local guide who runs small-group trips through the Eastern Ghats and tribal villages.", offers: ["Day trips", "Village walks", "Photography routes"], looking: ["Transport partners", "Homestay tie-ups"] },
  { slug: "sample-operator-vizag", name: "Sample Operator", role: "guide", headline: "City and coast tours from Vizag", area: "Beach Road", languages: ["Telugu", "English"], about: "Sample profile. Runs half-day city tours covering the beaches, museums and temples.", offers: ["City tours", "Airport pickups", "Group packages"], looking: ["Guides for peak season", "Hotel partners"] },
  { slug: "sample-homestay-rushikonda", name: "Sample Homestay", role: "stay", headline: "Family homestay near Rushikonda", area: "Rushikonda", languages: ["Telugu", "English"], about: "Sample profile. A six-room homestay, ten minutes from the beach, with home-cooked Andhra meals.", offers: ["Rooms", "Home-cooked meals", "Local tips"], looking: ["Guides to send guests to", "Content creators"] },
  { slug: "sample-cafe-kailasagiri", name: "Sample Cafe", role: "stay", headline: "Hillside cafe and co-working spot", area: "Kailasagiri", languages: ["Telugu", "English", "Hindi"], about: "Sample profile. A cafe with a sea view that hosts community meetups and remote workers.", offers: ["Meetup venue", "Co-working", "Local snacks"], looking: ["Event organisers", "Local makers to feature"] },
  { slug: "sample-startup-trips", name: "Sample Startup", role: "startup", headline: "Booking tool for small tour operators", area: "Dwaraka Nagar", languages: ["English", "Telugu"], about: "Sample profile. Building simple booking and payment tools for independent guides.", offers: ["Booking software", "Pilot access", "Product feedback"], looking: ["Operators to pilot with", "Designers"] },
  { slug: "sample-creator-coast", name: "Sample Creator", role: "startup", headline: "Travel videos and short films", area: "MVP Colony", languages: ["English", "Telugu", "Hindi"], about: "Sample profile. A video creator documenting lesser-known places around the coast.", offers: ["Video shoots", "Destination stories", "Social campaigns"], looking: ["Stays to collaborate with", "Local storytellers"] },
  { slug: "sample-student-tourism", name: "Sample Student", role: "student", headline: "Tourism management student", area: "Gajuwaka", languages: ["Telugu", "English"], about: "Sample profile. Final-year student looking for a first project in destination management.", offers: ["Research help", "Surveys", "Event volunteering"], looking: ["Internships", "A mentor"] },
  { slug: "sample-student-hospitality", name: "Sample Intern", role: "student", headline: "Hospitality student and aspiring host", area: "Madhurawada", languages: ["Telugu", "English", "Hindi"], about: "Sample profile. Wants to learn how small stays are run and one day open one.", offers: ["Front-desk help", "Weekend shifts"], looking: ["Shadowing a host", "Training sessions"] },
  { slug: "sample-tourism-office", name: "Sample Tourism Office", role: "govt", headline: "District tourism promotion", area: "Visakhapatnam", languages: ["Telugu", "English"], about: "Sample profile. Shares schemes, permits and upcoming promotion drives with local operators.", offers: ["Scheme information", "Co-hosted events", "Local data"], looking: ["Operator feedback", "Ideas for new circuits"] },
  { slug: "sample-association", name: "Sample Association", role: "govt", headline: "Local tour operators association", area: "Visakhapatnam", languages: ["Telugu", "English", "Hindi"], about: "Sample profile. A member body that represents operators and runs training sessions.", offers: ["Training", "Advocacy", "Member network"], looking: ["New members", "Event partners"] },
];

export type EventItem = {
  title: string;
  type: "Meetup" | "Workshop" | "Mixer" | "Walk";
  area: string;
  blurb: string;
  who: string;
  accent: string;
};

export const events: EventItem[] = [
  { title: "Founding members meetup", type: "Meetup", area: "[VENUE], Visakhapatnam", blurb: "Meet the first circle of Turator members, share what you need and help shape the first year.", who: "Everyone", accent: "bg-sun" },
  { title: "Guides and stays mixer", type: "Mixer", area: "[VENUE], Beach Road", blurb: "Guides and hosts swap contacts and plan referral partnerships for the season.", who: "Guides, stays", accent: "bg-sea" },
  { title: "Tourism students open house", type: "Meetup", area: "[VENUE], Visakhapatnam", blurb: "Students meet working professionals and ask the questions textbooks skip.", who: "Students, mentors", accent: "bg-[#f3f5f7]" },
  { title: "Simple booking tools for small operators", type: "Workshop", area: "[VENUE], Dwaraka Nagar", blurb: "A hands-on session on taking bookings and payments without a big budget.", who: "Operators, startups", accent: "bg-sea" },
  { title: "Heritage walk: old town", type: "Walk", area: "[MEETING POINT], Visakhapatnam", blurb: "A guided walk to design and test a new tour route together.", who: "Guides, creators", accent: "bg-sun" },
  { title: "Working with tourism bodies", type: "Workshop", area: "[VENUE], Visakhapatnam", blurb: "Understand schemes, permits and how to be heard by local authorities.", who: "Operators, bodies", accent: "bg-[#f3f5f7]" },
];

export function initials(name: string) {
  return name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
}
