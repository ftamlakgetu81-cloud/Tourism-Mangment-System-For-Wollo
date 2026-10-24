import { useMemo, useState } from 'react'
import {
  FaChevronLeft,
  FaChevronRight,
  FaEdit,
  FaEye,
  FaPlus,
  FaSearch,
  FaShieldAlt,
  FaSyncAlt,
  FaTrash,
  FaUser,
  FaUsers,
} from 'react-icons/fa'

const initialUsers = [
  { id: 1, name: 'Admin User', username: 'admin', email: 'admin@wollo.gov.et', phone: '+251 912 345 678', role: 'Admin', department: 'IT', status: 'Active' },
  { id: 2, name: 'Fitamlak Getu', username: 'fitamlak', email: 'fitamlak@wollo.gov.et', phone: '+251 911 987 654', role: 'Tourist', department: '-', status: 'Active' },
  { id: 3, name: 'Aster Abebe', username: 'aster', email: 'aster@wollo.gov.et', phone: '+251 913 222 333', role: 'Employee', department: 'Tourism Office', status: 'Active' },
  { id: 4, name: 'Tirunesh Girma', username: 'tirunesh', email: 'tirunesh@wollo.gov.et', phone: '+251 918 555 777', role: 'HR Officer', department: 'HR', status: 'Active' },
  { id: 5, name: 'Dessie Kebede', username: 'dessie', email: 'dessie@wollo.gov.et', phone: '+251 914 111 222', role: 'Guide', department: 'Tourism', status: 'Active' },
  { id: 6, name: 'Lemlem Tadesse', username: 'lemlem', email: 'lemlem@wollo.gov.et', phone: '+251 912 444 555', role: 'Travel Agent', department: 'Travel Agency', status: 'Active' },
  { id: 7, name: 'Mekdes Zufan', username: 'mekdes', email: 'mekdes@wollo.gov.et', phone: '+251 911 222 888', role: 'Tourist', department: '-', status: 'Inactive' },
  { id: 8, name: 'Abebe Tsegaye', username: 'abebe', email: 'abebe@wollo.gov.et', phone: '+251 913 666 777', role: 'Service Provider', department: 'Hotel', status: 'Active' },
  { id: 9, name: 'Hana Tesfaye', username: 'hana', email: 'hana@wollo.gov.et', phone: '+251 915 888 999', role: 'Tourist', department: '-', status: 'Active' },
  { id: 10, name: 'Yonas Mohammed', username: 'yonas', email: 'yonas@wollo.gov.et', phone: '+251 917 333 444', role: 'Employee', department: 'Transport', status: 'Active' },
  { id: 11, name: 'Selamawit Ayalew', username: 'selamawit', email: 'selamawit@wollo.gov.et', phone: '+251 911 555 222', role: 'Tourist', department: '-', status: 'Active' },
  { id: 12, name: 'Kassahun Worku', username: 'kassahun', email: 'kassahun@wollo.gov.et', phone: '+251 912 777 111', role: 'Guide', department: 'Tourism', status: 'Active' },
  { id: 13, name: 'Marta Assefa', username: 'marta', email: 'marta@wollo.gov.et', phone: '+251 913 444 666', role: 'Tourist', department: '-', status: 'Active' },
  { id: 14, name: 'Biruk Alemu', username: 'biruk', email: 'biruk@wollo.gov.et', phone: '+251 914 777 333', role: 'Travel Agent', department: 'Travel Agency', status: 'Inactive' },
  { id: 15, name: 'Rahel Desta', username: 'rahel', email: 'rahel@wollo.gov.et', phone: '+251 915 222 444', role: 'Employee', department: 'Tourism Office', status: 'Active' },
  { id: 16, name: 'Getachew Fikru', username: 'getachew', email: 'getachew@wollo.gov.et', phone: '+251 916 888 111', role: 'Service Provider', department: 'Hotel', status: 'Active' },
  { id: 17, name: 'Eden Mulu', username: 'eden', email: 'eden@wollo.gov.et', phone: '+251 917 555 222', role: 'Tourist', department: '-', status: 'Active' },
  { id: 18, name: 'Dawit Mengistu', username: 'dawit', email: 'dawit@wollo.gov.et', phone: '+251 918 111 333', role: 'Guide', department: 'Tourism', status: 'Active' },
]

const roleStyles = {
  Admin: 'bg-emerald-100 text-emerald-800',
  Tourist: 'bg-sky-100 text-sky-700',
  Employee: 'bg-orange-100 text-orange-700',
  'HR Officer': 'bg-violet-100 text-violet-700',
  Guide: 'bg-cyan-100 text-cyan-800',
  'Travel Agent': 'bg-pink-100 text-pink-700',
  'Service Provider': 'bg-indigo-100 text-indigo-700',
}

const emptyUser = { name: '', username: '', email: '', phone: '', role: 'Tourist', department: '-', status: 'Active' }

export default function Users() {
  const [users, setUsers] = useState(initialUsers)
  const [search, setSearch] = useState('')
  const [roleFilter, setRoleFilter] = useState('All Roles')
  const [statusFilter, setStatusFilter] = useState('All Statuses')
  const [page, setPage] = useState(1)
  const [dialog, setDialog] = useState(null)
  const [form, setForm] = useState(emptyUser)
  const pageSize = 10

  const filteredUsers = useMemo(() => users.filter((user) => {
    const query = search.trim().toLowerCase()
    const matchesSearch = !query || [user.name, user.username, user.email, user.phone].some((value) => value.toLowerCase().includes(query))
    return matchesSearch && (roleFilter === 'All Roles' || user.role === roleFilter) && (statusFilter === 'All Statuses' || user.status === statusFilter)
  }), [users, search, roleFilter, statusFilter])

  const pageCount = Math.max(1, Math.ceil(filteredUsers.length / pageSize))
  const visibleUsers = filteredUsers.slice((page - 1) * pageSize, page * pageSize)
  const openForm = (user) => {
    setForm(user ? { ...user } : { ...emptyUser })
    setDialog(user ? { mode: 'edit', user } : { mode: 'add' })
  }
  const resetFilters = () => {
    setSearch('')
    setRoleFilter('All Roles')
    setStatusFilter('All Statuses')
    setPage(1)
  }
  const saveUser = (event) => {
    event.preventDefault()
    if (dialog.mode === 'edit') {
      setUsers((current) => current.map((user) => user.id === dialog.user.id ? { ...form, id: user.id } : user))
    } else {
      setUsers((current) => [{ ...form, id: Math.max(0, ...current.map((user) => user.id)) + 1 }, ...current])
      setPage(1)
    }
    setDialog(null)
  }

  return (
    <section className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-extrabold text-slate-800">Users</h1>
          <p className="mt-1 text-[11px] text-slate-500">Dashboard <span className="px-1.5 text-slate-300">›</span> Users</p>
        </div>
        <button type="button" onClick={() => openForm(null)} className="inline-flex h-9 items-center gap-2 rounded-md bg-emerald-700 px-3 text-xs font-bold text-white hover:bg-emerald-800"><FaPlus /> Add New User</button>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-5">
        <StatCard label="Total Users" value={users.length} icon={<FaUsers />} tone="emerald" />
        <StatCard label="Tourists" value={users.filter((user) => user.role === 'Tourist').length} icon={<FaUser />} tone="blue" />
        <StatCard label="Travel Agents / Guides" value={users.filter((user) => ['Travel Agent', 'Guide'].includes(user.role)).length} icon={<FaUsers />} tone="emerald" />
        <StatCard label="Admins" value={users.filter((user) => user.role === 'Admin').length} icon={<FaShieldAlt />} tone="emerald" />
        <StatCard label="Employees" value={users.filter((user) => ['Employee', 'HR Officer'].includes(user.role)).length} icon={<FaUsers />} tone="emerald" />
      </div>

      <div className="rounded-md border border-slate-200 bg-white p-2.5 sm:p-3">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <label className="flex h-9 min-w-[190px] flex-1 items-center gap-2 rounded-md border border-slate-200 px-2.5 text-xs text-slate-500 sm:max-w-[300px]">
            <FaSearch aria-hidden="true" />
            <input value={search} onChange={(event) => { setSearch(event.target.value); setPage(1) }} type="search" placeholder="Search by name, email, username..." className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-slate-400" />
          </label>
          <select aria-label="Filter by role" value={roleFilter} onChange={(event) => { setRoleFilter(event.target.value); setPage(1) }} className="h-9 min-w-32 rounded-md border border-slate-200 bg-white px-2 text-xs text-slate-700">
            <option>All Roles</option>
            {Object.keys(roleStyles).map((role) => <option key={role}>{role}</option>)}
          </select>
          <select aria-label="Filter by status" value={statusFilter} onChange={(event) => { setStatusFilter(event.target.value); setPage(1) }} className="h-9 min-w-32 rounded-md border border-slate-200 bg-white px-2 text-xs text-slate-700">
            <option>All Statuses</option><option>Active</option><option>Inactive</option>
          </select>
          <button type="button" onClick={resetFilters} className="ml-auto inline-flex h-9 items-center gap-2 rounded-md border border-slate-200 px-3 text-xs font-semibold text-slate-600 hover:bg-slate-50"><FaSyncAlt /> Reset</button>
        </div>

        <div className="overflow-x-auto rounded-md border border-slate-200">
          <table className="w-full min-w-[920px] table-auto text-left text-[10px] text-slate-600">
            <thead className="bg-slate-50 text-slate-700">
              <tr><th className="w-8 px-2 py-3"><input type="checkbox" aria-label="Select all users" /></th><th className="px-2 py-3">#</th><th className="px-2 py-3">Name</th><th className="px-2 py-3">Username</th><th className="px-2 py-3">Email</th><th className="px-2 py-3">Phone</th><th className="px-2 py-3">Role</th><th className="px-2 py-3">Department</th><th className="px-2 py-3">Status</th><th className="px-2 py-3 text-center">Actions</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {visibleUsers.map((user, index) => (
                <tr key={user.id} className="hover:bg-slate-50/70">
                  <td className="px-2 py-2.5"><input type="checkbox" aria-label={`Select ${user.name}`} /></td>
                  <td className="px-2 py-2.5">{(page - 1) * pageSize + index + 1}</td>
                  <td className="whitespace-nowrap px-2 py-2.5"><span className="inline-flex items-center gap-2 font-semibold text-slate-700"><span className="grid h-7 w-7 place-items-center rounded-full bg-sky-100 text-[9px] font-bold text-sky-800">{user.name.split(' ').map((part) => part[0]).join('').slice(0, 2)}</span>{user.name}</span></td>
                  <td className="px-2 py-2.5">{user.username}</td><td className="whitespace-nowrap px-2 py-2.5">{user.email}</td><td className="whitespace-nowrap px-2 py-2.5">{user.phone}</td>
                  <td className="px-2 py-2.5"><span className={`whitespace-nowrap rounded-md px-2 py-1 font-semibold ${roleStyles[user.role] || 'bg-slate-100 text-slate-700'}`}>{user.role}</span></td>
                  <td className="whitespace-nowrap px-2 py-2.5">{user.department}</td>
                  <td className="px-2 py-2.5"><span className={`rounded-md px-2 py-1 font-semibold ${user.status === 'Active' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-700'}`}>{user.status}</span></td>
                  <td className="px-2 py-2.5"><div className="flex justify-center gap-1.5">
                    <button type="button" aria-label={`View ${user.name}`} onClick={() => setDialog({ mode: 'view', user })} className="grid h-7 w-7 place-items-center rounded-md bg-sky-50 text-sky-600 hover:bg-sky-100"><FaEye /></button>
                    <button type="button" aria-label={`Edit ${user.name}`} onClick={() => openForm(user)} className="grid h-7 w-7 place-items-center rounded-md bg-sky-50 text-sky-600 hover:bg-sky-100"><FaEdit /></button>
                    <button type="button" aria-label={`Delete ${user.name}`} onClick={() => setUsers((current) => current.filter((item) => item.id !== user.id))} className="grid h-7 w-7 place-items-center rounded-md bg-rose-50 text-rose-600 hover:bg-rose-100"><FaTrash /></button>
                  </div></td>
                </tr>
              ))}
              {visibleUsers.length === 0 && <tr><td colSpan="10" className="px-3 py-10 text-center text-xs text-slate-500">No users match these filters.</td></tr>}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 text-[10px] text-slate-500">
          <p>Showing {filteredUsers.length ? (page - 1) * pageSize + 1 : 0} to {Math.min(page * pageSize, filteredUsers.length)} of {filteredUsers.length} users</p>
          <div className="flex items-center gap-1">
            <button type="button" aria-label="Previous page" disabled={page === 1} onClick={() => setPage((current) => current - 1)} className="grid h-7 w-7 place-items-center rounded border border-slate-200 disabled:opacity-40"><FaChevronLeft /></button>
            {Array.from({ length: pageCount }, (_, index) => index + 1).map((pageNumber) => <button type="button" key={pageNumber} aria-current={pageNumber === page ? 'page' : undefined} onClick={() => setPage(pageNumber)} className={`h-7 min-w-7 rounded border px-2 ${pageNumber === page ? 'border-emerald-800 bg-emerald-800 font-bold text-white' : 'border-slate-200 hover:bg-slate-50'}`}>{pageNumber}</button>)}
            <button type="button" aria-label="Next page" disabled={page === pageCount} onClick={() => setPage((current) => current + 1)} className="grid h-7 w-7 place-items-center rounded border border-slate-200 disabled:opacity-40"><FaChevronRight /></button>
          </div>
        </div>
      </div>

      {dialog && <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/40 p-4" onMouseDown={(event) => { if (event.target === event.currentTarget) setDialog(null) }}>
        <section role="dialog" aria-modal="true" aria-labelledby="user-dialog-title" className="w-full max-w-lg rounded-md bg-white p-5 shadow-xl">
          <div className="mb-4 flex items-center justify-between"><h2 id="user-dialog-title" className="text-base font-bold text-slate-800">{dialog.mode === 'view' ? 'User Details' : dialog.mode === 'edit' ? 'Edit User' : 'Add New User'}</h2><button type="button" onClick={() => setDialog(null)} aria-label="Close dialog" className="text-xl leading-none text-slate-500">×</button></div>
          {dialog.mode === 'view' ? <div className="grid grid-cols-2 gap-3 text-xs">{Object.entries(dialog.user).filter(([key]) => key !== 'id').map(([key, value]) => <div key={key}><p className="capitalize text-slate-400">{key}</p><p className="mt-1 font-semibold text-slate-700">{value}</p></div>)}<button type="button" onClick={() => setDialog(null)} className="col-span-2 mt-2 h-9 rounded-md border border-slate-200 text-xs font-semibold">Close</button></div> : <form onSubmit={saveUser} className="grid gap-3 sm:grid-cols-2">
            {[['name', 'Full name'], ['username', 'Username'], ['email', 'Email'], ['phone', 'Phone'], ['department', 'Department']].map(([field, label]) => <label key={field} className="grid gap-1 text-[11px] font-semibold text-slate-600">{label}<input required value={form[field]} onChange={(event) => setForm((current) => ({ ...current, [field]: event.target.value }))} className="h-9 rounded-md border border-slate-200 px-2.5 text-xs font-normal outline-none focus:border-emerald-600" /></label>)}
            <label className="grid gap-1 text-[11px] font-semibold text-slate-600">Role<select value={form.role} onChange={(event) => setForm((current) => ({ ...current, role: event.target.value }))} className="h-9 rounded-md border border-slate-200 bg-white px-2 text-xs font-normal">{Object.keys(roleStyles).map((role) => <option key={role}>{role}</option>)}</select></label>
            <label className="grid gap-1 text-[11px] font-semibold text-slate-600">Status<select value={form.status} onChange={(event) => setForm((current) => ({ ...current, status: event.target.value }))} className="h-9 rounded-md border border-slate-200 bg-white px-2 text-xs font-normal"><option>Active</option><option>Inactive</option></select></label>
            <div className="flex justify-end gap-2 pt-2 sm:col-span-2"><button type="button" onClick={() => setDialog(null)} className="h-9 rounded-md border border-slate-200 px-3 text-xs font-semibold">Cancel</button><button type="submit" className="h-9 rounded-md bg-emerald-700 px-3 text-xs font-bold text-white hover:bg-emerald-800">Save User</button></div>
          </form>}
        </section>
      </div>}
    </section>
  )
}

function StatCard({ label, value, icon, tone }) {
  const tones = {
    emerald: 'bg-emerald-50 text-emerald-700',
    blue: 'bg-sky-50 text-sky-600',
  }
  return <article className="flex min-h-[68px] items-center gap-2.5 rounded-md border border-slate-200 bg-white p-2.5 shadow-sm sm:p-3"><span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-base ${tones[tone]}`}>{icon}</span><div className="min-w-0"><p className="text-[9px] text-slate-500">{label}</p><p className="mt-0.5 text-base font-extrabold leading-none text-slate-800">{value}</p></div></article>
}