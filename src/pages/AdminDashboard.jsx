import { useAuth } from '../context/AuthContext'
import DesignationLayout from '../components/DesignationLayout'

export default function Dashboard() {
  const { user } = useAuth()

  return (
    <DesignationLayout>
      <div className="container mx-auto py-8">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Admin Dashboard</h2>
          {/* Admin specific content */}
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

