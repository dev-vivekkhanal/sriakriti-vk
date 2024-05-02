import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import search from '../../assets/icons/admin-search-icon.svg'
import useGetAdminProducts from '../../hooks/useGetAdminProducts';
import edit_icon from '../../assets/icons/admit-edit.svg'
import delete_icon from '../../assets/icons/admin-delete.svg'
import ReactPaginate from 'react-paginate';

const AdminAllProducts = () => {

  const [searchData, setSearchData] = useState('');

  const { apiData, loading, error, fetchData } = useGetAdminProducts();

  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = apiData?.slice(pagesVisited, pagesVisited + usersPerPage)

  const pageCount = Math.ceil(apiData?.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <div className='px-5 xl:px-[100px] pt-5'>
      <div className='w-full flex flex-col sm:flex-row justify-between sm:items-center mb-10 sm:mb-0'>
        <h1 className='roboto text-[50px] font-[900] my-2 md:my-10'>Products</h1>
        <Link to='/admin-add-product'><button className='w-[120px] active:scale-[0.98] active:bg-[#e7e7e7] transition-all duration-100 bg-white p-1 rounded-[5px] shadow-md'>Add Products</button></Link>
      </div>
      <div className='w-full'>
        <div className='w-full my-2 mb-4'>
          <div className='w-full shadow-md rounded-[14px] bg-white flex items-center pl-3 gap-3'>
            <span><img src={search} className="w-[15px]" /></span><input type="text" value={searchData} className='w-[95%] py-[8px] px-2rounded-[14px] outline-none' placeholder='Search Products' onChange={(e) => setSearchData(e.target.value)} />
          </div>
        </div>
        <div className='w-full hidden sm:grid grid-cols-4 gap-4 justify-center items-center mt-10 sm:mt-16'>
          <div className='flex justify-center items-center'>
            <h1 className='text-[#718096]'>#</h1>
          </div>
          <div className='flex justify-center items-center'>
            <h1 className='text-[#718096]'>Name</h1>
          </div>
          <div className='flex justify-center items-center'>
            <h1 className='text-[#718096]'>Category</h1>
          </div>
          <div className='flex justify-center items-center'>
            <h1 className='text-[#718096]'>Action</h1>
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
                  displayUsers?.map((data) => (
                    <div key={data?.id} className='w-full shadow-md rounded-[14px] bg-gray-200 py-2 flex flex-col sm:flex-row sm:items-center px-3 gap-3 mb-4'>
                      <div className='w-full flex justify-center items-center'>
                        <h1 className='text-[#718096]'>{data?.id}</h1>
                      </div>
                      <div className='w-full flex justify-center items-center'>
                        <h1 className='text-[#718096]'>{data?.name}</h1>
                      </div>
                      <div className='w-full flex justify-center items-center'>
                        <h1 className='text-[#718096]'>{data?.category}</h1>
                      </div>
                      <div className='w-full flex justify-center items-center'>
                        <div className='flex gap-5 w-fit items-center'>
                          <Link to={'' + data?.id}>
                            <span className='cursor-pointer'>
                              <img src={edit_icon} className="w-[16px]" />
                            </span>
                          </Link>
                          <span className='cursor-pointer'><img src={delete_icon} className="w-[14px]" /></span>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </>
            )
          }
        </div>
        <div className='w-full max-w-[300px] mx-auto mt-6 sm:mt-12'>
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

export default AdminAllProducts