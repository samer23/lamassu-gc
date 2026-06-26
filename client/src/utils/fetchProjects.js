import kitchenImg from "../assets/projects/kitchen.jpg"

/* Structure of data.projects:
[
    {
        title: "Full Kitchen Renovation",
        location: "North York, ON",
        progress: "In Progress",
        description:
        "Complete kitchen remodel including cabinetry, electrical, plumbing, and premium finishes.",
        imagePath: kitchenImg
    },
    ...
]
*/

const PROJECTS = [
  {
    title: "Full Kitchen Renovation",
    location: "North York, ON",
    progress: "In Progress",
    description: "Complete kitchen remodel including cabinetry, electrical, plumbing, and premium finishes.",
    imagePath: kitchenImg
  }
]

export default function fetchProjects() {
    return {success: true, projects: PROJECTS, message: "Projects fetched successfully"}
}