import { format, parseISO } from 'date-fns';
import React, { useContext } from 'react';
import { context } from '../../../App';
import AdminSid from '../AdminSid/AdminSid';

const ManageBlog = () => {
  const {blogs, setBlogs} = useContext(context);
  const handleDelete = (id) => {

    if (window.confirm("Are You Sure?")){
    fetch(`https://evening-caverns-39772.herokuapp.com/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
           
            const newData=blogs.filter(event=>event._id!==id)
            setBlogs(newData)
            });
        }  
  };
    return (
        <div className= 'w-full flex flex-wrap justify-center'>
            <AdminSid/>
            <div className="w-full md:w-2/3 overflow-hidden rounded-lg shadow-xs">
            <h4
              className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"
            >
              Wel Come! Admin Dashboard
            </h4>
                <div className="w-full overflow-x-auto">
                    <table className="w-full whitespace-no-wrap">
                        <thead>
                            <tr
                            className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
                            >
                            <th className="px-4 py-3">Title</th>
                            <th className="px-4 py-3">ID</th>
                            <th className="px-4 py-3">Categories</th>
                            <th className="px-4 py-3">Published Date</th>
                            <th className="px-4 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody
                            className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
                        >
                          { blogs.length && (
            blogs.map((b) => (
                            <tr className="text-gray-700 dark:text-gray-400">
                              <td className="px-4 py-3">
                                <div className="flex items-center text-sm">
                                  <div>
                                    <p className="font-semibold">{b.title}</p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-4 py-3 text-sm">
                                {(b._id).substr(0,5)}
                              </td>
                              <td className="px-4 py-3 text-xs">
                                <span
                                  className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
                                >
                                  {b.category}
                                </span>
                              </td>
                              <td className="px-4 py-3 text-sm">
                                {format(parseISO((b.created)), 'MMMM do, uuu')}
                              </td>
                              <td className="px-4 py-3">
                                <div className="flex items-center space-x-4 text-sm">
                            
                                  <button
                                  className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                  aria-label="Delete"
                                  onClick={() => handleDelete(b._id)}
                                  >
                                    <svg
                                      className="w-5 h-5"
                                      aria-hidden="true"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                        clip-rule="evenodd"
                                      ></path>
                                    </svg>
                                  </button>
                                </div>
                              </td>
                             </tr>
                          )))}
                         </tbody>
                     </table>
                </div>
            </div>
            
        </div>
    );
};


export default ManageBlog;