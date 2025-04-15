import { useState } from 'react';

const CustomerForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    address: '',
    // Add other customer fields
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // API call to create customer
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Create New Customer</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2">Customer Name</label>
              <input
                type="text"
                className="w-full border rounded-lg px-3 py-2"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Contact Number</label>
              <input
                type="text"
                className="w-full border rounded-lg px-3 py-2"
                value={formData.contact}
                onChange={(e) => setFormData({...formData, contact: e.target.value})}
                required
              />
            </div>
            {/* Add more fields as needed */}
          </div>
          
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-lg hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Save Customer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerForm;