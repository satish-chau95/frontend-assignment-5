import React, { useState } from 'react';

export function AddRepositoryModal({ isOpen, onClose, onAddRepository }) {
  const [formData, setFormData] = useState({ name: '', language: '', isPublic: false });
  const [error, setError] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (!formData.name.trim()) {
      setError("Repository name is required");
      return;
    }

    if (!formData.language) {
      setError("Please select a language");
      return;
    }

    onAddRepository(formData);
    setFormData({ name: '', language: '', isPublic: false });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add New Repository</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="mt-1 block w-full border rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Language</label>
              <select
                value={formData.language}
                onChange={(e) => setFormData({...formData, language: e.target.value})}
                className="mt-1 block w-full border rounded-md shadow-sm p-2"
              >
                <option value="">Select a language</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
                <option value="Ruby">Ruby</option>
                <option value="Go">Go</option>
              </select>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="isPublic"
                checked={formData.isPublic}
                onChange={(e) => setFormData({...formData, isPublic: e.target.checked})}
                className="mr-2"
              />
              <label htmlFor="isPublic" className="text-sm font-medium text-gray-700">Public</label>
            </div>
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <div className="mt-6 flex justify-end space-x-3">
            <button type="button" onClick={onClose} className="px-4 py-2 border rounded">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

