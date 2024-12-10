
import React from "react";

const LeadsReport = () => {
  const leads = [
    {
      name: "Charlie Donin",
      email: "wdavis@aol.com",
      project: "25 Dec 2024 - 28 Dec 2024",
      duration: "3 Days",
      status: "Lost Lead",
      statusColor: "bg-red-100 text-red-500",
      image: "path/to/charlie-image.jpg",
    },
    {
      name: "Makenna Carder",
      email: "ltorres@aol.com",
      project: "25 Dec 2024 - 28 Dec 2024",
      duration: "3 Days",
      status: "Active",
      statusColor: "bg-green-100 text-green-500",
      image: "path/to/makenna-image.jpg",
    },
    {
      name: "Talan Dokidis",
      email: "rtaylor@aol.com",
      project: "25 Dec 2024 - 28 Dec 2024",
      duration: "3 Days",
      status: "Active",
      statusColor: "bg-green-100 text-green-500",
      image: "path/to/talan-image.jpg",
    },
    {
      name: "Cheyenne Levin",
      email: "ebrown@aol.com",
      project: "25 Dec 2024 - 28 Dec 2024",
      duration: "3 Days",
      status: "Active",
      statusColor: "bg-green-100 text-green-500",
      image: "path/to/cheyenne-image.jpg",
    },
    {
      name: "James Aminoff",
      email: "slee@aol.com",
      project: "25 Dec 2024 - 28 Dec 2024",
      duration: "3 Days",
      status: "Lost Lead",
      statusColor: "bg-red-100 text-red-500",
      image: "path/to/james-image.jpg",
    },
  ];

  return (
      <div className="w-full bg-white rounded-md shadow-md my-7 ">
      <div className="overflow-hidden ">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold">Leads Report</h1>
        </div>
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="text-gray-600">
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Project</th>
              <th className="px-6 py-3">Duration</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, index) => (
              <tr
                key={index}
                className="transition duration-150 border-t hover:bg-gray-50"
              >
                <td className="flex items-center px-6 py-4">
                  <img
                    src={lead.image}
                    alt={lead.name}
                    className="w-10 h-10 mr-3 rounded-full"
                  />
                  <span>{lead.name}</span>
                </td>
                <td className="px-6 py-4 text-gray-700">{lead.email}</td>
                <td className="px-6 py-4 text-gray-700">{lead.project}</td>
                <td className="px-6 py-4 text-gray-700">{lead.duration}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 text-sm rounded-full ${ lead.statusColor } `}
                  >
                    {lead.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-500">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4m-4 0a2 2 0 00-2 2v0a2 2 0 002 2h4a2 2 0 002-2v0a2 2 0 00-2-2m-4 0V3m4 0V3"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadsReport;
