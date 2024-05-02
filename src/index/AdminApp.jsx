import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ProtectedRouteAdmin from '../helpers/ProtectedRouteAdmin'
import AdminAllProducts from '../components/admin-components/AdminAllProducts'
import AdminAllOrders from '../components/admin-components/AdminAllOrders'
import AdminSIdebar from '../components/admin-components/AdminSIdebar'
import AdminSingleProduct from '../components/admin-components/AdminSingleProduct'
import AdminAddNewProduct from '../components/admin-components/AdminAddNewProduct'

const AdminApp = () => {
    return (
        <div>
            <AdminSIdebar />
            <div className='pl-[80px] md:pl-[284px]'>
                <Routes>
                    {/* <Route path='*' element={<Navigate to={localStorage.getItem("userType") === 'admin' ? '/admin-products' : '/'} replace={true} />} /> */}
                    <Route element={<ProtectedRouteAdmin />} >

                        <Route path="/admin-products" element={<AdminAllProducts />} />
                        <Route path="/admin-orders" element={<AdminAllOrders />} />
                        <Route path="/admin-add-product" element={<AdminAddNewProduct />} />
                        <Route path="/admin-products/:product_id" element={<AdminSingleProduct />} />


                    </Route>
                </Routes>
            </div>
        </div>
    )
}

export default AdminApp