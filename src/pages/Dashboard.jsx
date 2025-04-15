import { useAuth } from '../context/AuthContext'
import DesignationLayout from '../components/DesignationLayout'

export default function Dashboard() {
  const { user } = useAuth()

  const getDesignationContent = () => {
    switch(user?.designation) {
      case 'Manager':
        return (
          <>
            <h2 className="text-xl font-semibold mb-4">Manager Dashboard</h2>
            {/* Manager specific content */}
          </>
        )
      case 'Admin':
        return (
          <>
            <h2 className="text-xl font-semibold mb-4">Admin Dashboard</h2>
            {/* Admin specific content */}
          </>
        )
      default:
        return (
          <>
            <h2 className="text-xl font-semibold mb-4">User Dashboard</h2>
            {/* Default content */}
          </>
        )
    }
  }

  return (
    <DesignationLayout>
      <div className="container mx-auto py-8">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
          {getDesignationContent()}
          <div className="mt-4">
            <h3 className="font-medium">User Details</h3>
            <p>Name: {user?.userName}</p>
            <p>Branch: {user?.branch} (ID: {user?.branchID})</p>
            <p>Designation: {user?.designation}</p>
          </div>
        </div>
      </div>
    </DesignationLayout>
  )
}