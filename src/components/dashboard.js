import React, { useState } from 'react';
import { useAuth } from "../contexts/auth-context";
import { Home, Code2, Cloud, BookOpen, Settings, Search, RefreshCw, Plus, ChevronDown, Menu, X } from 'lucide-react';

export function Dashboard() {
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [repositories, setRepositories] = useState([
    { name: "design-system", language: "React", size: "7320 KB", updatedAt: "1 day ago", isPublic: true },
    { name: "codeant-ci-app", language: "Javascript", size: "5871 KB", updatedAt: "2 days ago", isPublic: false },
    { name: "analytics-dashboard", language: "Python", size: "4521 KB", updatedAt: "5 days ago", isPublic: false },
    { name: "mobile-app", language: "Swift", size: "3096 KB", updatedAt: "3 days ago", isPublic: true },
    { name: "e-commerce-platform", language: "Java", size: "6210 KB", updatedAt: "6 days ago", isPublic: false },
    { name: "blog-website", language: "HTML/CSS", size: "1876 KB", updatedAt: "4 days ago", isPublic: true }
  ]);

  const [newRepo, setNewRepo] = useState({
    name: '',
    language: '',
    isPublic: false
  });

  const handleAddRepository = (e) => {
    e.preventDefault();
    if (!newRepo.name || !newRepo.language) return;

    const repository = {
      ...newRepo,
      size: "0 KB",
      updatedAt: "Just now"
    };
    
    setRepositories(prev => [repository, ...prev]);
    setIsAddModalOpen(false);
    setNewRepo({ name: '', language: '', isPublic: false });
  };

  const filteredRepositories = repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const navigationItems = [
    { icon: Home, label: 'Repositories', isActive: true },
    { icon: Code2, label: 'AI Code Review' },
    { icon: Cloud, label: 'Cloud Security' },
    { icon: BookOpen, label: 'How to Use' },
    { icon: Settings, label: 'Settings' }
  ];

  // Add Repository Modal
  const AddRepositoryModal = () => {
    if (!isAddModalOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg w-full max-w-md">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Add New Repository</h2>
            <button
              onClick={() => setIsAddModalOpen(false)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <form onSubmit={handleAddRepository} className="p-4">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Repository Name
                </label>
                <input
                  type="text"
                  value={newRepo.name}
                  onChange={(e) => setNewRepo({ ...newRepo, name: e.target.value })}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter repository name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Language
                </label>
                <select
                  value={newRepo.language}
                  onChange={(e) => setNewRepo({ ...newRepo, language: e.target.value })}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select a language</option>
                  <option value="React">React</option>
                  <option value="C/C++">C/C++</option>
                  <option value="Javascript">Javascript</option>
                  <option value="Python">Python</option>
                  <option value="Java">Java</option>
                  <option value="Swift">Swift</option>
                  <option value="HTML/CSS">HTML/CSS</option>
                </select>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isPublic"
                  checked={newRepo.isPublic}
                  onChange={(e) => setNewRepo({ ...newRepo, isPublic: e.target.checked })}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="isPublic" className="ml-2 text-sm text-gray-700">
                  Public repository
                </label>
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Create Repository
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <header className="lg:hidden flex items-center justify-between p-4 bg-white border-b">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          <Menu className="h-6 w-6" />
        </button>
        <div className="flex items-center gap-2">
          <img
            src="./logo.png"
            alt="CodeAnt AI"
            className="h-8 w-8"
          />
          <span className="font-semibold">CodeAnt AI</span>
        </div>
        <div className="w-8" /> {/* Spacer for alignment */}
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white">
          <div className="flex flex-col h-full">
            <div className="p-4 border-b flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  src="./logo.png"
                  alt="CodeAnt AI"
                  className="h-8 w-8"
                />
                <span className="font-semibold">CodeAnt AI</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <div className="p-4">
                <button className="w-full flex items-center gap-2 p-2 text-left text-sm font-medium rounded-lg hover:bg-gray-100">
                  {user?.name || "User"}
                  <ChevronDown className="h-4 w-4 ml-auto" />
                </button>
              </div>
              <nav className="px-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.label}
                    className={`w-full flex items-center gap-2 p-2 text-sm rounded-lg mb-1 ${
                      item.isActive
                        ? "bg-blue-50 text-blue-600"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
            <div className="p-4 border-t">
              <button
                onClick={logout}
                className="w-full p-2 text-red-600 hover:bg-red-50 rounded-lg text-sm"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:flex w-64 flex-col fixed h-screen border-r bg-white">
          <div className="p-4 flex items-center gap-2 border-b">
            <img
              src="./logo.png"
              alt="CodeAnt AI"
              className="h-8 w-8"
            />
            <span className="font-semibold">CodeAnt AI</span>
          </div>
          <div className="p-4 border-b">
            <button className="w-full flex items-center gap-2 p-2 text-sm font-medium rounded-lg hover:bg-gray-100">
              {user?.name || "User"}
              <ChevronDown className="h-4 w-4 ml-auto" />
            </button>
          </div>
          <nav className="flex-1 p-2 space-y-1">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-2 p-2 text-sm rounded-lg ${
                  item.isActive
                    ? "bg-blue-50 text-blue-600"
                    : "hover:bg-gray-100"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            ))}
          </nav>
          <div className="p-2 border-t">
            <button
              onClick={logout}
              className="w-full p-2 text-red-600 hover:bg-red-50 rounded-lg text-sm"
            >
              Logout
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64">
          <div className="max-w-6xl mx-auto p-4 lg:p-8 space-y-6">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h1 className="text-2xl font-semibold">Repositories</h1>
                <p className="text-sm text-gray-600">{repositories.length} total repositories</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <button className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                  <RefreshCw className="h-4 w-4" />
                  Refresh All
                </button>
                <button
                  onClick={() => setIsAddModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  <Plus className="h-4 w-4" />
                  Add Repository
                </button>
              </div>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search repositories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Repository List */}
            <div className="space-y-4">
              {filteredRepositories.map((repo) => (
                <div
                  key={repo.name}
                  className="bg-white p-4 rounded-lg border hover:border-blue-200 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <h3 className="font-medium flex-1">{repo.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        repo.isPublic
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}>
                        {repo.isPublic ? "Public" : "Private"}
                      </span>
                      <span>•</span>
                      <span>{repo.language}</span>
                      <span>•</span>
                      <span>{repo.size}</span>
                      <span>•</span>
                      <span>Updated {repo.updatedAt}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Add Repository Modal */}
      <AddRepositoryModal />
    </div>
  );
}

