import React, { useEffect, useState } from 'react'
import search from '../../assets/icons/admin-search-icon.svg'
import ReactPaginate from 'react-paginate';
import useGetAdminOrders from '../../hooks/useGetAdminOrders';
import useUpdateAdminOrderStatus from '../../hooks/useUpdateAdminOrderStatus';

const AdminAllOrders = () => {

  const [searchData, setSearchData] = useState('');

  const { apiData, loading } = useGetAdminOrders();

  const { updateOrderStatus } = useUpdateAdminOrderStatus();

  const [adminStatusToggle, setAdminStatusToggle] = useState(false);

  const [ordersData, setOrdersData] = useState();

  const [orderActiveId, setOrderActiveId] = useState(null);

  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(apiData?.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const handleUpdateOrderStatus = (id, type) => {
    updateOrderStatus(id, type);
    setOrderActiveId(null);
  };

  const handleToggleDropDown = (id) => {
    setAdminStatusToggle(!adminStatusToggle)
    if (orderActiveId !== id) {
      setOrderActiveId(id)
    } else {
      setOrderActiveId(null)
    }
  }

  useEffect(() => {
    if (apiData?.length) {
      setOrdersData(apiData?.slice(pagesVisited, pagesVisited + usersPerPage));
    }
  }, [apiData]);

  return (
    <div className='px-5 xl:px-[100px] pt-5 pb-2'>
      <div className='w-full flex flex-col sm:flex-row justify-between sm:items-center mb-10 sm:mb-0'>
        <h1 className='roboto text-[50px] font-[900] my-2 md:my-10'>Orders</h1>
      </div>
      <div className='w-full'>
        <div className='w-full my-2 mb-4'>
          <div className='w-full shadow-md rounded-[14px] bg-white flex items-center pl-3 gap-3'>
            <span><img src={search} className="w-[15px]" /></span><input type="text" value={searchData} className='w-[95%] py-[8px] px-2rounded-[14px] outline-none' placeholder='Search Orders' onChange={(e) => setSearchData(e.target.value)} />
          </div>
        </div>
        <div className='w-full hidden sm:grid grid-cols-4 gap-4 justify-center items-center mt-10 sm:mt-16'>
          <div className='flex justify-center items-center'>
            <h1 className='text-[#718096]'>order #</h1>
          </div>
          <div className='flex justify-center items-center'>
            <h1 className='text-[#718096]'>Actions</h1>
          </div>
          <div className='flex justify-center items-center'>
            <h1 className='text-[#718096]'>Price</h1>
          </div>
          <div className='flex justify-center items-center'>
            <h1 className='text-[#718096]'>Status</h1>
          </div>
        </div>
        <div className='w-full my-2 sm:mb-4 h-[65vh] sm:h-[58vh] overflow-y-scroll'>
          {
            loading ? (
              <div className="flex items-center justify-center h-[50vh]">
                <div className="animate-spin rounded-full border-t-4 border-gray-500 border-solid h-12 w-12"></div>
              </div>
            ) : (
              <>
                {
                  ordersData?.map((data, i) => (
                    <div key={i} className='w-full bg-gray-200 shadow-md rounded-[14px] py-[8px] px-[11px] mb-4'>
                      <div className='flex flex-col md:grid grid-cols-4 gap-4 justify-center items-center'>
                        <div className='flex justify-center items-center'>
                          <h1 className='text-[#718096]'>{data?.id}</h1>
                        </div>
                        <div className='flex justify-center items-center relative'>
                          <h1 onClick={() => handleToggleDropDown(data?.id)} className='text-[#718096] cursor-pointer'>{data?.admin_accept_status == 'a' ? 'Accepted' : data?.admin_accept_status == 'p' ? 'Pending' : 'Declined'}  <span className='ml-2'>⋮</span></h1>
                          <div className={` ${orderActiveId == data?.id ? 'h-[96px]' : 'h-0'} overflow-hidden z-[200] transition-all duration-200 ease-in-out w-full bg-white absolute top-[140%] rounded-[8px] cursor-pointer`}>
                            <div className='relative flex flex-col'>
                              <span className='text-center py-3 hover:bg-gray-200 active:scale-95 active:bg-gray-100 transition-all duration-100 ease-in-out w-full' onClick={() => handleUpdateOrderStatus(data?.id, 'a')}>Accept</span>
                              <span className='text-center py-3 hover:bg-gray-200 active:scale-95 active:bg-gray-100 transition-all duration-100 ease-in-out w-full' onClick={() => handleUpdateOrderStatus(data?.id, 'd')}>Decline</span>
                            </div>
                          </div>
                          <div className={`${orderActiveId == data?.id ? 'fixed inset-0 w-full bg-black opacity-5' : 'hidden'}`} onClick={() => setOrderActiveId(null)}></div>
                        </div>
                        <div className='flex justify-center items-center'>
                          <h1 className='text-[#718096]'>Rs {data?.order_amount}</h1>
                        </div>
                        <div className='flex justify-center items-center'>
                          <h1 className='text-[#718096]'>{data?.order_status == 'a' ? 'Accepted' : data?.order_status == 'p' ? 'Pending' : 'Declined'}</h1>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </>
            )
          }
        </div>
        <div className='w-full max-w-[300px] mx-auto mt-6 '>
          <ReactPaginate
            previousLabel={'←'}
            nextLabel={'→'}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={'paginationButtons'}
            previousLinkClassName={'previousBtn'}
            nextLinkClassName={'nextBtn'}
            disabledClassName={'paginationDisabled'}
            activeClassName={'paginationActive'}
          />
        </div>
      </div>
    </div>
  )
}

export default AdminAllOrders