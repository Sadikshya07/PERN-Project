import AdminSidebar from "../admin/AdminSidebar"

export default function AdminLayout({children}){
    return (
        <div className="flex">
            <AdminSidebar/>
            <main className="w-8/12">
                {children}
            </main>
        </div>
    )
}