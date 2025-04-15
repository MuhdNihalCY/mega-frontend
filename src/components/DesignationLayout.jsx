import { useAuth } from '../context/AuthContext'

export default function DesignationLayout({ children }) {
  const { user } = useAuth()

  const getDesignationStyles = () => {
    switch(user?.designation) {
      case 'Manager':
        return 'bg-blue-50 border-l-4 border-blue-500'
      case 'Admin':
        return 'bg-green-50 border-l-4 border-green-500'
      case 'Staff':
        return 'bg-purple-50 border-l-4 border-purple-500'
      default:
        return 'bg-gray-50 border-l-4 border-gray-500'
    }
  }

  return (
    <div className={`min-h-screen ${getDesignationStyles()}`}>
      {children}
    </div>
  )
}