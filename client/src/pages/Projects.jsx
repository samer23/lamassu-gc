import { useEffect, useState } from "react"

// Utility function to fetch projects
import fetchProjects from "../utils/fetchProjects"

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  // Getting the projects
  useEffect(() => {
    const loadProjects = () => {
      setLoading(true)
      const { success, projects, message } = fetchProjects()
      if (!success) {
        setError(message)
      }
      setProjects(projects)
      setLoading(false)
    }

    loadProjects()

  }, [])

  const progressColors = {
    "Planning Phase": "bg-gray-200 text-gray-800",
    "In Progress": "bg-[#E07A5F] text-[#F7F5F0]",
    "Completed": "bg-green-500 text-[#F7F5F0]",
  }

  return (
    <>
      {error && <h2>An error has occured</h2>}
      {!error && (
        <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
          {/* Page Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-[#4A4A4A] mb-4">Current Projects</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">A look at the renovation and construction projects we are currently working on across Toronto and the GTA.</p>
          </div>

          {/* Check if there are projects created */}
          {projects && projects.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 text-center text-gray-500">
              <span className="text-5xl mb-4">📁</span>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                No projects yet
              </h2>
              <p className="text-sm max-w-md">
                There are no projects set at the moment. Once you add a project, it will appear here.
              </p>
            </div>
          )}

          {/* Projects Grid */}
          {projects && projects.length > 0 && (
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {loading && <h2>Projects loading...</h2>}
              {!loading && projects.map((project, index) => (
                <div key={index} className="bg-[#F7F5F0] rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

                  {/* Image */}
                  <img src={project.imagePath} alt={project.title} className="w-full h-56 object-contain"/>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    {/* Progress */}
                    <span className={`inline-block text-sm font-semibold px-3 py-1 rounded-full ${progressColors[project.progress]}`}>{project.progress}</span>
                    <h3 className="text-2xl font-semibold text-[#4A4A4A]">{project.title}</h3>
                    <p className="text-sm text-gray-500">{project.location}</p>
                    <p className="text-gray-700 leading-relaxed">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  )
}