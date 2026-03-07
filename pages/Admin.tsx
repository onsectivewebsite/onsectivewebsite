import React, { useState, useEffect } from 'react';
import {
  PenTool, LayoutDashboard, FileText,
  LogOut, Users, MessageSquare, Trash2, UserPlus,
  Menu, X, Plus, Calendar, Edit3, Mail
} from 'lucide-react';
import Button from '../components/UI/Button';

const DB_KEYS = {
  USERS: 'onsective_personnel',
  POSTS: 'onsective_briefs',
  LEADS: 'onsective_leads',
  EVENTS: 'onsective_events',
  AUTH: 'onsective_session'
};

const initializeDB = () => {
  if (!localStorage.getItem(DB_KEYS.USERS)) {
    localStorage.setItem(DB_KEYS.USERS, JSON.stringify([
      { id: '1', username: 'admin', password: 'admin', role: 'Superuser', name: 'System Administrator' }
    ]));
  }
};

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'posts' | 'users' | 'leads' | 'events'>('dashboard');
  const [view, setView] = useState<'list' | 'form'>('list');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  // Form States
  const [postData, setPostData] = useState<any>({ title: '', category: '', excerpt: '', content: '' });
  const [userData, setUserData] = useState<any>({ username: '', password: '', role: 'Analyst', name: '' });
  const [eventData, setEventData] = useState<any>({ title: '', date: '', location: '', description: '', type: 'upcoming' });
  const [editingId, setEditingId] = useState<string | null>(null);

  // DB States
  const [users, setUsers] = useState<any[]>([]);
  const [posts, setPosts] = useState<any[]>([]);
  const [leads, setLeads] = useState<any[]>([]);
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    initializeDB();
    const session = localStorage.getItem(DB_KEYS.AUTH);
    if (session) {
      setIsAuthenticated(true);
    }
    syncData();
  }, []);

  const syncData = () => {
    setUsers(JSON.parse(localStorage.getItem(DB_KEYS.USERS) || '[]'));
    setPosts(JSON.parse(localStorage.getItem(DB_KEYS.POSTS) || '[]'));
    setLeads(JSON.parse(localStorage.getItem(DB_KEYS.LEADS) || '[]'));
    setEvents(JSON.parse(localStorage.getItem(DB_KEYS.EVENTS) || '[]'));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem(DB_KEYS.USERS) || '[]');
    const user = storedUsers.find((u: any) => u.username === loginData.username && u.password === loginData.password);

    if (user) {
      setIsAuthenticated(true);
      localStorage.setItem(DB_KEYS.AUTH, JSON.stringify(user));
      setError('');
    } else {
      setError('Invalid Intelligence Credentials.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem(DB_KEYS.AUTH);
  };

  // --- CRUD OPERATIONS ---

  const savePost = (e: React.FormEvent) => {
    e.preventDefault();
    let updated;
    if (editingId) {
      updated = posts.map(p => p.id === editingId ? { ...postData, id: editingId } : p);
    } else {
      updated = [{ ...postData, id: `brief-${Date.now()}`, date: new Date().toLocaleDateString() }, ...posts];
    }
    localStorage.setItem(DB_KEYS.POSTS, JSON.stringify(updated));
    setPosts(updated);
    setView('list');
    setPostData({ title: '', category: '', excerpt: '', content: '' });
    setEditingId(null);
  };

  const saveUser = (e: React.FormEvent) => {
    e.preventDefault();
    let updated;
    if (editingId) {
      updated = users.map(u => u.id === editingId ? { ...userData, id: editingId } : u);
    } else {
      updated = [{ ...userData, id: `user-${Date.now()}` }, ...users];
    }
    localStorage.setItem(DB_KEYS.USERS, JSON.stringify(updated));
    setUsers(updated);
    setView('list');
    setUserData({ username: '', password: '', role: 'Analyst', name: '' });
    setEditingId(null);
  };

  const saveEvent = (e: React.FormEvent) => {
    e.preventDefault();
    let updated;
    if (editingId) {
      updated = events.map(ev => ev.id === editingId ? { ...eventData, id: editingId } : ev);
    } else {
      updated = [{ ...eventData, id: `event-${Date.now()}` }, ...events];
    }
    localStorage.setItem(DB_KEYS.EVENTS, JSON.stringify(updated));
    setEvents(updated);
    setView('list');
    setEventData({ title: '', date: '', location: '', description: '', type: 'upcoming' });
    setEditingId(null);
  };

  const deleteItem = (id: string, key: string, stateSetter: any) => {
    if (key === DB_KEYS.USERS && id === '1') return alert('Superuser cannot be revoked.');
    const current = JSON.parse(localStorage.getItem(key) || '[]');
    const updated = current.filter((i: any) => i.id !== id);
    localStorage.setItem(key, JSON.stringify(updated));
    stateSetter(updated);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-brand-black flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-slate-900 border border-white/10 p-8 sm:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <div className="w-16 h-16 border border-brand-primary/20 overflow-hidden mx-auto mb-6">
              <img src="/assets/icon.jpg" alt="Icon" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-white text-2xl font-serif font-black tracking-tight mb-2 uppercase">Command Access</h1>
            <p className="text-slate-700 text-[10px] font-black uppercase tracking-[0.3em]">Institutional Verification Required</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            {error && <div className="p-4 bg-red-900/20 border border-red-900/50 text-red-400 text-[10px] font-black uppercase tracking-widest">{error}</div>}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest block">Personnel ID</label>
              <input type="text" required className="w-full bg-black/40 border border-white/10 p-4 text-white focus:border-brand-primary outline-none transition-all" value={loginData.username} onChange={(e) => setLoginData({ ...loginData, username: e.target.value })} />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest block">Security Key</label>
              <input type="password" required className="w-full bg-black/40 border border-white/10 p-4 text-white focus:border-brand-primary outline-none transition-all" value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
            </div>
            <Button type="submit" className="w-full" variant="primary">Authenticate</Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row text-brand-black font-sans relative">

      {/* Mobile Header */}
      <header className="lg:hidden bg-brand-black text-white p-4 flex justify-between items-center sticky top-0 z-[60]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border border-brand-primary/20 overflow-hidden">
            <img src="/assets/icon.jpg" alt="Icon" className="w-full h-full object-cover" />
          </div>
          <span className="font-serif font-black text-lg tracking-tighter uppercase">Onsective</span>
        </div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-brand-primary">
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 w-80 bg-brand-black text-white flex flex-col z-50 transform transition-transform duration-500 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="p-10 border-b border-white/5">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-10 h-10 border border-brand-primary/20 overflow-hidden">
              <img src="/assets/icon.jpg" alt="Icon" className="w-full h-full object-cover" />
            </div>
            <h2 className="font-serif text-2xl font-black tracking-tighter uppercase">Onsective</h2>
          </div>
          <span className="text-[10px] text-brand-primary font-black uppercase tracking-[0.4em]">Command Center</span>
        </div>

        <nav className="flex-1 p-6 space-y-2">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
            { id: 'posts', label: 'Intelligence Editorial', icon: PenTool },
            { id: 'events', label: 'Global Summits', icon: Calendar },
            { id: 'users', label: 'Personnel', icon: Users },
            { id: 'leads', label: 'Leads Triage', icon: MessageSquare }
          ].map(tab => (
            <button key={tab.id} onClick={() => { setActiveTab(tab.id as any); setView('list'); setEditingId(null); setIsSidebarOpen(false); }} className={`flex items-center gap-4 w-full p-4 text-left transition-all text-[11px] font-black uppercase tracking-[0.2em] ${activeTab === tab.id ? 'bg-white/5 text-brand-primary border-r-4 border-brand-primary' : 'text-slate-700 hover:text-white'}`}>
              <tab.icon size={18} /> {tab.label}
            </button>
          ))}
        </nav>

        <div className="p-8 border-t border-white/5">
          <button onClick={handleLogout} className="flex items-center gap-3 text-red-500 hover:text-red-400 text-[10px] font-black uppercase tracking-widest transition-colors">
            <LogOut size={16} /> Terminate Session
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 sm:p-12 lg:ml-80 overflow-y-auto min-h-screen">

        {/* DASHBOARD TAB */}
        {activeTab === 'dashboard' && (
          <div className="space-y-12 animate-fade-up">
            <header>
              <h1 className="text-4xl lg:text-7xl font-serif text-brand-black mb-4 uppercase font-black">Operational Hub.</h1>
              <p className="text-slate-600 text-xs font-black uppercase tracking-[0.5em]">Real-time Institutional Metrics</p>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: FileText, val: posts.length, label: 'Active Insights' },
                { icon: Calendar, val: events.length, label: 'Global Summits' },
                { icon: Users, val: users.length, label: 'Personnel' },
                { icon: MessageSquare, val: leads.length, label: 'Unread Leads' }
              ].map((s, i) => (
                <div key={i} className="p-8 bg-slate-50 border border-slate-100 shadow-sm flex flex-col justify-between h-48 hover:border-brand-primary transition-all">
                  <s.icon className="text-brand-primary" size={24} />
                  <div>
                    <p className="text-4xl font-serif font-black">{s.val}</p>
                    <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* POSTS TAB (EDITORIAL) */}
        {activeTab === 'posts' && (
          <div className="space-y-12 animate-fade-up">
            <div className="flex justify-between items-end">
              <h1 className="text-4xl lg:text-7xl font-serif text-brand-black uppercase font-black">Editorial.</h1>
              {view === 'list' && <Button onClick={() => setView('form')} variant="primary" size="sm" className="flex items-center gap-2"><Plus size={14} /> Create Brief</Button>}
            </div>

            {view === 'list' ? (
              <div className="grid grid-cols-1 gap-4">
                {posts.map(p => (
                  <div key={p.id} className="p-6 bg-slate-50 border border-slate-100 flex justify-between items-center group">
                    <div>
                      <span className="text-[8px] font-black bg-brand-black text-brand-primary px-2 py-1 uppercase mb-2 inline-block">{p.category}</span>
                      <h3 className="text-xl font-serif font-bold">{p.title}</h3>
                    </div>
                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => { setEditingId(p.id); setPostData(p); setView('form'); }} className="text-slate-600 hover:text-brand-primary"><Edit3 size={18} /></button>
                      <button onClick={() => deleteItem(p.id, DB_KEYS.POSTS, setPosts)} className="text-slate-300 hover:text-red-500"><Trash2 size={18} /></button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <form onSubmit={savePost} className="space-y-8 max-w-4xl bg-slate-50 p-8 border border-slate-100">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Title</label>
                    <input required value={postData.title} onChange={e => setPostData({ ...postData, title: e.target.value })} type="text" className="w-full p-4 bg-white border border-slate-200 outline-none focus:border-brand-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Category</label>
                    <input required value={postData.category} onChange={e => setPostData({ ...postData, category: e.target.value })} type="text" className="w-full p-4 bg-white border border-slate-200 outline-none focus:border-brand-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Excerpt</label>
                  <textarea required value={postData.excerpt} onChange={e => setPostData({ ...postData, excerpt: e.target.value })} rows={3} className="w-full p-4 bg-white border border-slate-200 outline-none focus:border-brand-primary" />
                </div>
                <div className="flex gap-4">
                  <Button type="submit" variant="primary">{editingId ? 'Update Brief' : 'Publish Brief'}</Button>
                  <Button onClick={() => setView('list')} variant="outline">Cancel</Button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* EVENTS TAB */}
        {activeTab === 'events' && (
          <div className="space-y-12 animate-fade-up">
            <div className="flex justify-between items-end">
              <h1 className="text-4xl lg:text-7xl font-serif text-brand-black uppercase font-black">Summits.</h1>
              {view === 'list' && <Button onClick={() => setView('form')} variant="primary" size="sm" className="flex items-center gap-2"><Plus size={14} /> Add Event</Button>}
            </div>

            {view === 'list' ? (
              <div className="grid grid-cols-1 gap-4">
                {events.map(ev => (
                  <div key={ev.id} className="p-6 bg-slate-50 border border-slate-100 flex justify-between items-center group">
                    <div>
                      <h3 className="text-xl font-serif font-bold">{ev.title}</h3>
                      <p className="text-xs text-slate-600 font-black uppercase tracking-widest">{ev.date} | {ev.location}</p>
                    </div>
                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => { setEditingId(ev.id); setEventData(ev); setView('form'); }} className="text-slate-600 hover:text-brand-primary"><Edit3 size={18} /></button>
                      <button onClick={() => deleteItem(ev.id, DB_KEYS.EVENTS, setEvents)} className="text-slate-300 hover:text-red-500"><Trash2 size={18} /></button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <form onSubmit={saveEvent} className="space-y-8 max-w-4xl bg-slate-50 p-8 border border-slate-100">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Event Title</label>
                    <input required value={eventData.title} onChange={e => setEventData({ ...eventData, title: e.target.value })} type="text" className="w-full p-4 bg-white border border-slate-200 outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Date</label>
                    <input required value={eventData.date} onChange={e => setEventData({ ...eventData, date: e.target.value })} type="text" placeholder="May 20, 2026" className="w-full p-4 bg-white border border-slate-200 outline-none" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Location</label>
                    <input required value={eventData.location} onChange={e => setEventData({ ...eventData, location: e.target.value })} type="text" className="w-full p-4 bg-white border border-slate-200 outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Status</label>
                    <select value={eventData.type} onChange={e => setEventData({ ...eventData, type: e.target.value })} className="w-full p-4 bg-white border border-slate-200 outline-none">
                      <option value="upcoming">Upcoming</option>
                      <option value="past">Past</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button type="submit" variant="primary">Save Event</Button>
                  <Button onClick={() => setView('list')} variant="outline">Cancel</Button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* USERS TAB */}
        {activeTab === 'users' && (
          <div className="space-y-12 animate-fade-up">
            <div className="flex justify-between items-end">
              <h1 className="text-4xl lg:text-7xl font-serif text-brand-black uppercase font-black">Personnel.</h1>
              {view === 'list' && <Button onClick={() => setView('form')} variant="primary" size="sm" className="flex items-center gap-2"><UserPlus size={14} /> Add User</Button>}
            </div>

            {view === 'list' ? (
              <div className="bg-white border border-slate-100 overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-[10px] font-black uppercase tracking-widest border-b border-slate-100">
                      <th className="p-6">Name</th>
                      <th className="p-6">ID</th>
                      <th className="p-6">Role</th>
                      <th className="p-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {users.map(u => (
                      <tr key={u.id} className="hover:bg-slate-50 transition-colors">
                        <td className="p-6 font-bold">{u.name}</td>
                        <td className="p-6 font-mono text-xs">{u.username}</td>
                        <td className="p-6"><span className="text-[8px] font-black px-2 py-1 bg-slate-200 rounded uppercase">{u.role}</span></td>
                        <td className="p-6 text-right space-x-4">
                          <button onClick={() => { setEditingId(u.id); setUserData(u); setView('form'); }} className="text-slate-600 hover:text-brand-primary"><Edit3 size={16} /></button>
                          <button onClick={() => deleteItem(u.id, DB_KEYS.USERS, setUsers)} className="text-slate-300 hover:text-red-500"><Trash2 size={16} /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <form onSubmit={saveUser} className="space-y-8 max-w-4xl bg-slate-50 p-8 border border-slate-100">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Full Name</label>
                    <input required value={userData.name} onChange={e => setUserData({ ...userData, name: e.target.value })} type="text" className="w-full p-4 bg-white border border-slate-200 outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Personnel ID (Username)</label>
                    <input required value={userData.username} onChange={e => setUserData({ ...userData, username: e.target.value })} type="text" className="w-full p-4 bg-white border border-slate-200 outline-none" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Security Key</label>
                    <input required value={userData.password} onChange={e => setUserData({ ...userData, password: e.target.value })} type="password" className="w-full p-4 bg-white border border-slate-200 outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Clearance Level</label>
                    <select value={userData.role} onChange={e => setUserData({ ...userData, role: e.target.value })} className="w-full p-4 bg-white border border-slate-200 outline-none">
                      <option value="Analyst">Analyst</option>
                      <option value="Director">Director</option>
                      <option value="Superuser">Superuser</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button type="submit" variant="primary">Authorize User</Button>
                  <Button onClick={() => setView('list')} variant="outline">Cancel</Button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* LEADS TAB */}
        {activeTab === 'leads' && (
          <div className="space-y-12 animate-fade-up">
            <h1 className="text-4xl lg:text-7xl font-serif text-brand-black uppercase font-black">Briefings.</h1>
            <div className="space-y-6">
              {leads.map(l => (
                <div key={l.id} className="p-10 bg-slate-50 border border-slate-100 flex flex-col md:flex-row justify-between gap-8 hover:border-brand-primary transition-all">
                  <div className="space-y-4">
                    <span className="text-[8px] font-black bg-brand-black text-brand-primary px-3 py-1 uppercase">{l.service}</span>
                    <h3 className="text-3xl font-serif font-black">{l.firstName} {l.lastName}</h3>
                    <p className="text-slate-700 italic max-w-2xl leading-relaxed">"{l.message}"</p>
                    <div className="flex gap-6 text-[10px] font-black text-slate-600 uppercase tracking-widest pt-4">
                      <span className="flex items-center gap-2"><Mail size={12} /> {l.email}</span>
                      <span className="flex items-center gap-2"><Calendar size={12} /> {new Date(l.timestamp).toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="flex md:flex-col gap-4">
                    <Button variant="primary" size="sm" className="whitespace-nowrap">Resolve</Button>
                    <Button variant="outline" size="sm" onClick={() => deleteItem(l.id, DB_KEYS.LEADS, setLeads)}><Trash2 size={16} /></Button>
                  </div>
                </div>
              ))}
              {leads.length === 0 && <p className="text-slate-600 italic">No unread briefings available.</p>}
            </div>
          </div>
        )}
      </main>

      {isSidebarOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)}></div>}
    </div>
  );
};

export default Admin;