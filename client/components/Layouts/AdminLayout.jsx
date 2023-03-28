import AdminSidebar from "../admin/AdminSidebar"

export default function AdminLayout({children}){
    return (
        <div className="flex">
            <AdminSidebar/>
            <main className="w-8/12 ml-[25em] flex flex-col justify-center">
                {children}
            </main>
        </div>
    )
}