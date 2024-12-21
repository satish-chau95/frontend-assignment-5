import React, { useState } from 'react';

export function RepositoryList({ repositories, onAddRepository }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRepositories = repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Repositories</h1>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={onAddRepository}
        >
          Add Repository
        </button>
      </div>

      <input
        type="text"
        placeholder="Search repositories..."
        className="w-full p-2 border rounded"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="space-y-4">
        {filteredRepositories.map((repo) => (
          <div key={repo.name} className="bg-white p-4 rounded shadow">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{repo.name}</h3>
              <span className={`px-2 py-1 rounded text-sm ${repo.isPublic ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}>
                {repo.isPublic ? "Public" : "Private"}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              {repo.language} • {repo.size} • Updated {repo.updatedAt}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

